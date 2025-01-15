import path from "path";
import { fileURLToPath } from "url";

// الحصول على __filename
export const __filename = fileURLToPath(import.meta.url);

// الحصول على __dirname
export const __dirname = path.dirname(__filename);
