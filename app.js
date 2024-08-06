/**
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  app.log("Yay! The app was loaded!");

  app.on(
    ["pull_request.opened", "pull_request.synchronize", "issues.opened"],
    async (context) => {
      return context.octokit.issues.createComment(
        context.issue({ body: "Hello, World!" })
      );
    }
  );
};
