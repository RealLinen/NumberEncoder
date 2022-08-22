const EncodeNumber = require("./Encoder.js")
const fs = require("fs")

fs.writeFileSync("output.txt", (EncodeNumber(123, { MaxChars: 1000, hide: true, lua_equation: true, Security: true })[0]))