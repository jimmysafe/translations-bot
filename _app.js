const XHubSignature = require("x-hub-signature");
const x = new XHubSignature(
  "sha256",
  "SBpL3LD2EslHhHPd7l8/bJ7rVR+bKkXIPxLRxqoCm9ga"
);
const signature = x.sign(
  new Buffer(
    JSON.stringify({
      Ciao: "CIAO",
    })
  )
);

console.log(signature);
