const EncodeNumber = require("./Encoder.js")
const fs = require("fs")

fs.writeFileSync("output.txt", EncodeNumber(100, { MaxChars: 3000 }))