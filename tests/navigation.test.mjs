import assert from "node:assert/strict";
import test from "node:test";
import { isActiveNavItem } from "../src/lib/navigation.ts";
import { primaryNav } from "../src/content/data/site.ts";

const activeLinks = (pathname) => primaryNav.filter(({ href }) => isActiveNavItem(pathname, href)).map(({ href }) => href);

test("About Crimean Tatars never also activates About", () => {
  assert.deepEqual(activeLinks("/about-crimean-tatars"), ["/about-crimean-tatars"]);
  assert.deepEqual(activeLinks("/about"), ["/about"]);
});

test("every primary destination has exactly one active entry", () => {
  for (const { href } of primaryNav) assert.deepEqual(activeLinks(href), [href]);
});

test("nested routes activate their section, but similar prefixes do not", () => {
  assert.deepEqual(activeLinks("/about-crimean-tatars/history"), ["/about-crimean-tatars"]);
  assert.deepEqual(activeLinks("/gallery-classic"), []);
  assert.deepEqual(activeLinks("/past-events-extra"), []);
});

test("event sections have distinct destinations in the shared mobile and desktop navigation", () => {
  assert.ok(primaryNav.some(({ href }) => href === "/upcoming-events"));
  assert.ok(primaryNav.some(({ href }) => href === "/past-events"));
  assert.equal(new Set(primaryNav.map(({ href }) => href)).size, primaryNav.length);
});
