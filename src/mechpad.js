const fs = require('fs');

const Obs = require('./obs');
const Arduino = require('./arduino');

class MechPad {
  constructor(config) {
    this.config = JSON.parse(fs.readFileSync(config, 'utf8'));
  }

  async init() {
    console.log('Connecting to OBS...');
    this.obs = await Obs.connect();

    console.log('Connecting to Arduino...');
    this.arduino = Arduino.connect();
  }
}

module.exports = MechPad;
