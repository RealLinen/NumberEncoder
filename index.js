const EncodeNumber = require("./Encoder.js")
const fs = require("fs")

fs.writeFileSync("output.txt", EncodeNumber(7.7, { MaxChars: 3000, hide: true }))