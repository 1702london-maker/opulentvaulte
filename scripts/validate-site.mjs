import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const required = [
  "index.html",
  "services/index.html",
  "services/luxury-stays/index.html",
  "services/car-rentals/index.html",
  "services/private-jet/index.html",
  "services/wine-tasting/index.html",
  "services/private-tours/index.html",
  "services/vip-security/index.html",
  "services/yacht-services/index.html",
  "services/cleaning-lifestyle/index.html",
  "services/videography-photography/index.html",
  "services/personal-shopping/index.html",
  "services/luxury-products/index.html",
  "destinations/index.html",
  "concierge/index.html",
  "membership/index.html",
  "about/index.html",
  "partners/apply/index.html",
  "affiliates/index.html",
  "blog/index.html",
  "faqs/index.html",
  "contact/index.html",
  "login/index.html",
  "account/dashboard/index.html",
  "partner/dashboard/index.html",
  "partner/listings/new/index.html",
  "admin/dashboard/index.html",
  "assets/opulent-vault-logo-transparent.png"
];

async function exists(file) {
  try {
    await stat(path.join(root, file));
    return true;
  } catch {
    return false;
  }
}

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !["node_modules", ".git", ".next"].includes(entry.name)) return htmlFiles(full);
    return entry.isFile() && entry.name.endsWith(".html") ? [full] : [];
  }));
  return files.flat();
}

const missing = [];
for (const file of required) {
  if (!(await exists(file))) missing.push(file);
}

const malformed = [];
for (const file of await htmlFiles(root)) {
  const html = await readFile(file, "utf8");
  if (!html.includes("<!DOCTYPE html>") || !html.includes("</html>")) {
    malformed.push(path.relative(root, file));
  }
}

const missingLinks = [];
for (const file of await htmlFiles(root)) {
  const html = await readFile(file, "utf8");
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("#")
    ) {
      continue;
    }
    let target = href.split("#")[0].split("?")[0];
    if (!target) continue;
    if (target === "/") {
      target = "index.html";
    } else {
      if (target.startsWith("/")) target = target.slice(1);
      if (target.endsWith("/")) target += "index.html";
      else if (!path.extname(target)) target += ".html";
    }
    if (!(await exists(target))) {
      missingLinks.push(`${path.relative(root, file)} -> ${href}`);
    }
  }
}

if (missing.length || malformed.length || missingLinks.length) {
  if (missing.length) console.error("Missing required files:", missing.join(", "));
  if (malformed.length) console.error("Malformed HTML files:", malformed.join(", "));
  if (missingLinks.length) console.error("Missing internal links:", missingLinks.join(", "));
  process.exit(1);
}

console.log("OPV Stitch export validation passed.");
