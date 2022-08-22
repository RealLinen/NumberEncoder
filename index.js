const EncodeNumber = require("./Encoder.js")
const fs = require("fs")

fs.writeFileSync("output.txt", EncodeNumber(400, { MaxChars: 1700, hide: true, lua_equation: true }))