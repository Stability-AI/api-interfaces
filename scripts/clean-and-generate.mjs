#!/usr/bin/env zx

import "zx/globals";

// Ensure that buf is installed
await $`buf --version`.then((res) => {
  if (res.exitCode !== 0) {
    console.error(
      "buf is not installed. Please install it from https://docs.buf.build/installation"
    );
    process.exit(1);
  }
});

// Remove all files in the generated directory except for these explicitly ignored files
await glob("gen/**/*", {
  ignore: [
    "gen/**/README.md",
    "gen/**/pyproject.toml",
    "gen/**/poetry.lock",
    "gen/**/go.mod",
    "gen/**/go.sum",
    "gen/**/yarn.lock",
    "gen/**/package-lock.json",
    "gen/**/package.json",
  ],
}).then((files) => {
  files.forEach((file) => {
    fs.removeSync(file);
  });
});

// Generate files from proto definitions
await $`buf generate`;

// Add __init__.py files to all generated python directories
// This is required for python to recognize the directories as modules
let pythonModules = await glob("gen/proto/python/**", { onlyDirectories: true });
for (const pythonModule of pythonModules) {
  fs.ensureFileSync(path.join(pythonModule, "__init__.py"));
}

await glob("gen/**/pyproject.toml").then((files) =>
  Promise.all(
    files.map((file) =>
      within(async () => {
        cd(path.dirname(file));
        await $`poetry export -f requirements.txt --output requirements.txt`;
      })
    )
  )
);
