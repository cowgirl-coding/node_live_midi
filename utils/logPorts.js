const midi = require('midi')

const input = new midi.input()
const output = new midi.output()

const logMidiIO = (input, output) => {

  const logPorts = (portType) => {
    const portCount = portType.getPortCount()
    for (let i = 0; i < portCount; i++) {
      const portName = portType.getPortName(i)
      console.log(`${i}: ${portName}`)
    }
  }

  console.log("==========Inputs==========")
  logPorts(input)
  console.log("==========Outputs==========")
  logPorts(output)
}

logMidiIO(input, output)

process.exit()
