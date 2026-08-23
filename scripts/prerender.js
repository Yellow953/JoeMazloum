import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = resolve(root, "dist/index.html");

const { render } = await import(resolve(root, "dist-ssr/entry-server.js"));

const template = readFileSync(indexPath, "utf8");
const appHtml = render();

const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error(`prerender: could not find ${marker} in dist/index.html`);
}

writeFileSync(indexPath, template.replace(marker, `<div id="root">${appHtml}</div>`));

console.log(`prerender: injected ${appHtml.length} chars of static HTML into dist/index.html`);
