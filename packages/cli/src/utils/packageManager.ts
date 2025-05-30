import { PackageManager } from "@/types/packageManager";
import { execa } from "execa";

export function getInstallCommand(pkgManager: PackageManager) {
  return pkgManager === "npm" ? "install" : "add";
}

export async function installDependencies(
  workingDirectory: string,
  pkgManager: PackageManager,
  packages: string[],
) {
  const result = await execa(
    pkgManager,
    [getInstallCommand(pkgManager), ...packages],
    {
      cwd: workingDirectory,
    },
  );

  return result;
}
