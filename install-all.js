const { execSync } = require("child_process");
const path = require("path");

const apps = ["", "shell", "mf1", "mf2"];

const rootPath = __dirname;

apps.forEach((app) => {
  const appPath = path.join(rootPath, app);
  app.length > 0
    ? console.log(`Installing dependencies for ${app}...`)
    : console.log(`Installing dependencies for 'root'...`);
  try {
    execSync("npm install", { cwd: appPath, stdio: "inherit" });
    console.log(`Dependencies installed for ${app}`);
  } catch (err) {
    console.error(`Error installing dependencies for ${app}: ${err.message}`);
  }
});
