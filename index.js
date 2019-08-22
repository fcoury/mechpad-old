const MechPad = require('./src/mechpad');

async function main() {
  new MechPad('config.json').init();
}

main();
