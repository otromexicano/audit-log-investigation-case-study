import { chromium } from 'file:///C:/Users/kidro/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'
import fs from 'node:fs/promises'
import path from 'node:path'

const outputDir = path.resolve('qa/screenshots')
await fs.mkdir(outputDir, { recursive: true })
const browser = await chromium.launch({ headless: true, executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' })
const results = { viewports: {}, flow: {}, accessibility: {}, consoleErrors: [] }

async function openPage(width, height) {
  const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce' })
  const page = await context.newPage()
  page.on('console', (message) => { if (message.type() === 'error') results.consoleErrors.push(message.text()) })
  page.on('pageerror', (error) => results.consoleErrors.push(error.message))
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' })
  return { context, page }
}

for (const [width, height] of [[1440, 1000], [1280, 900], [1024, 900], [768, 900], [390, 844]]) {
  const { context, page } = await openPage(width, height)
  await page.screenshot({ path: path.join(outputDir, `overview-${width}.png`), fullPage: true })
  const shellVisible = await page.locator('.case-shell').isVisible()
  const mobileChromeVisible = await page.locator('.mobile-chrome').isVisible()
  if (width <= 800) {
    await page.getByRole('button', { name: /All areas/ }).click()
    await page.getByRole('button', { name: /Event Explorer/ }).click()
  } else {
    await page.getByRole('button', { name: /Event Explorer/ }).click()
  }
  const tableVisible = await page.locator('.desktop-results').isVisible()
  const cardsVisible = await page.locator('.mobile-results').isVisible()
  await page.screenshot({ path: path.join(outputDir, `events-${width}.png`), fullPage: true })
  results.viewports[width] = { shellVisible, mobileChromeVisible, tableVisible, cardsVisible, bodyWidth: await page.evaluate(() => document.body.scrollWidth), viewportWidth: width }
  await context.close()
}

{
  const { context, page } = await openPage(1440, 1000)
  await page.getByRole('button', { name: /Event Explorer/ }).click()
  await page.getByLabel('Event type').selectOption({ label: 'Administrator role assigned' })
  await page.getByLabel('Resource').selectOption({ label: 'Administrator role' })
  await page.getByRole('button', { name: 'Run query' }).click()
  await page.getByText('Complete query execution').waitFor()
  results.flow.filtering = (await page.locator('tbody tr').count()) === 1
  await page.getByRole('button', { name: /Select 09:19 Administrator role assigned/ }).click()
  results.flow.selection = await page.getByText('09:19 · selected source observation').isVisible()
  await page.getByRole('button', { name: 'Open Activity Reconstruction' }).first().click()
  results.flow.reconstruction = await page.getByRole('heading', { name: 'Activity Reconstruction' }).isVisible() && await page.locator('.timeline-event.is-selected').getByText('Administrator role assigned', { exact: true }).isVisible()
  const assignment = page.locator('.timeline-event').filter({ hasText: 'Administrator role assigned' })
  await assignment.getByRole('button', { name: 'Preserve event' }).click()
  await assignment.getByRole('button', { name: 'Preserved' }).waitFor()
  const exportEvent = page.locator('.timeline-event').filter({ hasText: 'Customer export started' })
  await exportEvent.getByRole('button', { name: 'Preserve event' }).click()
  await exportEvent.getByRole('button', { name: 'Retry preservation' }).waitFor()
  results.flow.failure = true
  await exportEvent.getByRole('button', { name: 'Retry preservation' }).click()
  await exportEvent.getByRole('button', { name: 'Preserved' }).waitFor()
  results.flow.preservation = true
  await page.getByRole('button', { name: /Evidence Package/ }).first().click()
  await page.getByLabel(/Acknowledge this required limitation/).check()
  await page.getByRole('button', { name: 'Review package readiness' }).click()
  await page.locator('.badge').filter({ hasText: 'Ready for Review' }).waitFor()
  await page.getByRole('button', { name: 'Confirm fixed mock snapshot' }).click()
  await page.locator('.badge').filter({ hasText: 'Ready for Export' }).waitFor()
  await page.getByRole('button', { name: 'Simulate export' }).click()
  await page.locator('.badge').filter({ hasText: 'Export Complete' }).waitFor()
  results.flow.packageLifecycle = true
  results.flow.exportComplete = true
  await page.screenshot({ path: path.join(outputDir, 'critical-flow-complete.png'), fullPage: true })
  await page.reload({ waitUntil: 'networkidle' })
  await page.keyboard.press('Tab')
  const firstFocus = await page.evaluate(() => ({ text: document.activeElement?.textContent?.trim(), outline: getComputedStyle(document.activeElement).outlineStyle }))
  await page.keyboard.press('Enter')
  await page.keyboard.press('Tab')
  const secondFocus = await page.evaluate(() => ({ tag: document.activeElement?.tagName, outline: getComputedStyle(document.activeElement).outlineStyle, outlineWidth: getComputedStyle(document.activeElement).outlineWidth }))
  results.accessibility.keyboard = firstFocus.text === 'Skip to main content' && secondFocus.tag === 'BUTTON'
  results.accessibility.visibleFocus = secondFocus.outline !== 'none' && secondFocus.outlineWidth !== '0px'
  results.accessibility.semantic = await page.evaluate(() => ({ main: document.querySelectorAll('main').length, nav: document.querySelectorAll('nav').length, h1: document.querySelectorAll('h1').length, nativeButtons: document.querySelectorAll('button').length, fakeButtons: document.querySelectorAll('[role="button"]:not(button)').length }))
  await context.close()
}

await browser.close()
console.log(JSON.stringify(results, null, 2))
