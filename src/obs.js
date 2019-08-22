const OBSWebSocket = require('obs-websocket-js');
const obs = new OBSWebSocket();

class Obs {
  static async connect() {
    await obs.connect();
    this.scenes = await obs.send('GetSceneList');
  }

  async changeScene(name) {
    return await obs.send('SetCurrentScene', {
      'scene-name': name,
    });
  }
}

module.exports = Obs;
