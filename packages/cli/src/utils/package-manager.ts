import path from "node:path";

import { execa } from "execa";
import fs from "fs-extra";

import { PackageManagerNames } from "@/types/packageManager";

export const lockFiles: Record<string, PackageManagerNames> = {
  "bun.lock": "bun",
  "bun.lockb": "bun",
  "deno.lock": "deno",
  "pnpm-lock.yaml": "pnpm",
  "pnpm-workspace.yaml": "pnpm",
  "yarn.lock": "yarn",
  "package-lock.json": "npm",
  "npm-shrinkwrap.json": "npm",
};

export const install_metadata: Record<string, PackageManagerNames> = {
  "node_modules/.deno": "deno",
  "node_modules/.pnpm": "pnpm",
  "node_modules/.yarn-state.yml": "yarn", // Yarn v2+ (node-modules linker)
  "node_modules/.yarn-integrity": "yarn", // Yarn v1
  "node_modules/.package-lock.json": "npm",
  ".pnp.cjs": "yarn", // Yarn v3+ (PnP)
  ".pnp.js": "yarn", // Yarn v2 (PnP)
  "bun.lock": "bun",
  "bun.lockb": "bun",
};

export async function detectPackageManager(
  cwd = process.cwd(),
): Promise<PackageManagerNames> {
  // Standard Lockfile Detection
  for (const [file, manager] of Object.entries(lockFiles)) {
    if (await fs.pathExists(path.join(cwd, file))) {
      return manager;
    }
  }

  // Environment Variable Detection (User Agent)
  const userAgent = process.env.npm_config_user_agent;
  if (userAgent) {
    if (userAgent.startsWith("pnpm")) return "pnpm";
    if (userAgent.startsWith("yarn")) return "yarn";
    if (userAgent.startsWith("bun")) return "bun";
    return "npm";
  }

  // Installation Metadata Detection
  for (const [filepath, manager] of Object.entries(install_metadata)) {
    const fullPath = path.join(cwd, filepath);
    if (fs.existsSync(fullPath)) {
      return manager;
    }
  }

  // Final Check for Deno (Config without lockfile)
  if (
    fs.existsSync(path.join(cwd, "deno.json")) ||
    fs.existsSync(path.join(cwd, "deno.jsonc"))
  ) {
    return "deno";
  }

  return "npm";
}

export async function installDependencies(
  workingDirectory: string,
  pkgManager: PackageManagerNames,
  packages: string[],
) {
  const result = await execa(`${pkgManager} install`, [...packages], {
    cwd: workingDirectory,
  });

  return result;
}
