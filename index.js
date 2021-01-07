var rpc = require("discord-rpc");
const client = new rpc.Client({ transport: "ipc" });
client.on("ready", () => {
  console.log("Ready, setting status.");
  client.request("SET_ACTIVITY", {
    pid: process.pid,
    activity: {
      details: "First line goes here",
      state: "Second line goes here",
      assets: {
        large_image: "", //in discord dev portal
        small_image: "", //in discord dev portal
        small_text: "Do Not Disturb!",
      },
      buttons: [{ label: "Join", url: "https://dis.gd/threads" }],
    },
  });
});
client.login({ clientId: "CLIENT ID - NOT USER ID" }).catch(console.error);
