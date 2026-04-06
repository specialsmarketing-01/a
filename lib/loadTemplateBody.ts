import fs from "fs";
import path from "path";

export function loadTemplateBody(filename: string): string {
  const filePath = path.join(process.cwd(), "content", filename);
  return fs.readFileSync(filePath, "utf8");
}
