const util = require("node:util");

/**
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  app.log("Yay! The app was loaded!");

  // node_modules/.bin/probot receive -e issues -p ./test ./app.js

  app.onAny(async (context) => {
    // const log = util.inspect(context, { showHidden: false, depth: null });
    // console.log(log);
    console.log(JSON.stringify(context, null, 2));
  });

  // app.on("issues.opened", async (context) => {
  //   const res = await context.octokit.issues.createComment(
  //     context.issue({ body: "Hello, World!" })
  //     // creo task
  //     // task creato -> aggiorno commento
  //   );
  //   console.log(res);
  //   return res;
  // });
};

// On open PR -> crea commento con tabella. in META ID COMMENTO.
// on workflow complete -> CREA TASK SU LOKALISE -> AGGIORNA IL COMMENTO.
