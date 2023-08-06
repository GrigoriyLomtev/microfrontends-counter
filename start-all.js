const concurrently = require("concurrently");

(async () => {
  try {
    await concurrently([
      {
        command: "npm start --prefix ./mf1",
        name: "mf1",
        prefixColor: "green",
      },
      {
        command: "npm start --prefix ./mf2",
        name: "mf2",
        prefixColor: "magenta",
      },
      {
        command: "npm start --prefix ./shell",
        name: "shell",
        prefixColor: "blue",
      },
    ]);
  } catch (err) {
    console.error(err);
  }
})();
