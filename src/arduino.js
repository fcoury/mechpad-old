const SerialPort = require('serialport');

class Arduino {
  static connect() {
    const instance = new Arduino();
    if (instance.findArduino()) {
      return instance;
    }
    throw new Error(`Couldn't auto detect Arduino in any port`);
  }

  findArduino() {
    SerialPort.list((err, ports) => {
      if (err) {
        throw new Error(`Error trying to auto detect Arduino: ${err}`);
      }
      const port = ports.find(p => p.manufacturer && p.manufaturer.includes('arduino'));
      if (!port) {
        return;
      }
      this.serialPort = new SerialPort(port, { baudRate: 9600 });
      this.serialPort.on('open', () => this.onConnect && this.onConnect());
    });
  }
}

module.exports = Arduino;
