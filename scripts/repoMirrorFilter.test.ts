import { describe, expect, it } from "vitest";
import { shouldMirrorRepoPath } from "./repoMirrorFilter";

describe("shouldMirrorRepoPath", () => {
  it("excludes secrets, generated files, dependencies, and build output", () => {
    expect(shouldMirrorRepoPath(".env")).toBe(false);
    expect(shouldMirrorRepoPath(".env.local")).toBe(false);
    expect(shouldMirrorRepoPath("node_modules/pkg/index.js")).toBe(false);
    expect(shouldMirrorRepoPath(".next/server/app.js")).toBe(false);
    expect(shouldMirrorRepoPath("generated/repoMirror.ts")).toBe(false);
    expect(shouldMirrorRepoPath(".pnpm-store/v10/index/foo")).toBe(false);
    expect(shouldMirrorRepoPath("file.tsbuildinfo")).toBe(false);
  });

  it("includes files that are source-controlled on GitHub", () => {
    expect(shouldMirrorRepoPath("src/app/page.tsx")).toBe(true);
    expect(shouldMirrorRepoPath("content/README.md")).toBe(true);
    expect(shouldMirrorRepoPath("README.md")).toBe(true);
    expect(shouldMirrorRepoPath("next-env.d.ts")).toBe(true);
    expect(shouldMirrorRepoPath("pnpm-lock.yaml")).toBe(true);
    expect(shouldMirrorRepoPath("public/icon.png")).toBe(true);
    expect(shouldMirrorRepoPath("src/app/page.js.map")).toBe(true);
  });

  it("keeps downloadable brand binaries out of the text mirror but includes their source", () => {
    expect(
      shouldMirrorRepoPath(
        "public/brand/downloads/experimental-software-brand-kit.zip",
      ),
    ).toBe(false);
    expect(shouldMirrorRepoPath("public/brand/downloads/logos/stacked-ink.png")).toBe(
      false,
    );
    expect(shouldMirrorRepoPath("scripts/build-brand-assets.mjs")).toBe(true);
    expect(shouldMirrorRepoPath("public/brand/outlier.svg")).toBe(true);
  });

  it("keeps marketing screenshots out of the text mirror while retaining page source", () => {
    expect(shouldMirrorRepoPath("public/marketing/projects/orb-ui.webp")).toBe(false);
    expect(shouldMirrorRepoPath("src/app/directions/products/page.tsx")).toBe(true);
  });
});
