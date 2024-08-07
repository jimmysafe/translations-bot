/**
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  app.log("Yay! The app was loaded!");

  app.on("issues.opened", async (context) => {
    const res = await context.octokit.issues.createComment(
      context.issue({ body: "Hello, World!" })
      // creo task
      // task creato -> aggiorno commento
    );
    console.log(res);
    return res;
  });
};

// On open PR -> crea commento con tabella. in META ID COMMENTO.
// on workflow complete -> CREA TASK SU LOKALISE -> AGGIORNA IL COMMENTO.
