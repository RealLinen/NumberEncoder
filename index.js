const EncodeNumber = require("./Encoder.js")
const fs = require("fs")

fs.writeFileSync("output.txt", EncodeNumber(400, { MaxChars: 1784, hide: true, lua_equation: true }))