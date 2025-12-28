import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REGISTRY_PATH = path.resolve(__dirname, "./../public/shadcn/r");

/**
 * Normalizes component source code to be compatible with standard shadcn imports.
 * It changes "@/utils/cn" to "@/lib/utils" so the shadcn CLI can auto-map it.
 */
function fixRegistryPaths() {
  console.log("🚀 Starting registry path normalization...");

  if (!fs.existsSync(REGISTRY_PATH)) {
    console.log(`❌ Registry path not found: ${REGISTRY_PATH}`);
    return;
  }

  try {
    const files = fs
      .readdirSync(REGISTRY_PATH)
      .filter((file) => file.endsWith(".json"));

    files.forEach((file) => {
      const filePath = path.join(REGISTRY_PATH, file);
      const content = fs.readFileSync(filePath, "utf8");

      const registryEntry = JSON.parse(content);

      if (registryEntry.files && Array.isArray(registryEntry.files)) {
        registryEntry.files = registryEntry.files.map(
          (fileEntry: { content: string }) => {
            if (fileEntry.content) {
              // Replace your internal path with the shadcn standard path
              fileEntry.content = fileEntry.content.replace(
                /from "@\/utils\/cn"/g,
                'from "@/lib/utils"',
              );
            }
            return fileEntry;
          },
        );

        fs.writeFileSync(filePath, JSON.stringify(registryEntry, null, 2));
      }
    });

    console.log("\n✨ All registry files are now shadcn-compatible!");
  } catch (error) {
    console.log("❌ Error processing registry:", error);
  }
}

fixRegistryPaths();
