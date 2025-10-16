import { spawn } from "child_process";
import { readFileSync } from "fs";

// Load .env file
try {
  const envFile = readFileSync(".env", "utf8");
  envFile.split("\n").forEach((line) => {
    const [key, value] = line.split("=");
    if (key && value) {
      process.env[key.trim()] = value.trim();
    }
  });
} catch (e) {
  // .env file doesn't exist, that's ok
}

const port = process.env.PORT || "3000";

spawn("next", ["dev", "--turbo", "--port", port], {
  stdio: "inherit",
  shell: true,
}).on("exit", (code) => process.exit(code));
