const { realpathSync } = require("fs");

const getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
//~~~~+~+~+~+~+~~+~+~+~+~+~+~+~+~+~+~+~+~+~~~~\\
const equations = ["_", "+"]
const equations2 = ["_", "-", "/"]
//~~~~+~+~+~+~+~~+~+~+~+~+~+~+~+~+~+~+~+~+~~~~\\
module.exports = function(number, ETC = { MaxChars: 100, /* adds result in lua form */lua: false, /* same as the 'lua' argument */luamode: false, /* same as the 'lua' argument */lua_eq: false, /* same as the 'lua' argument */lua_equation: false, /* Hide debug Logs */hide: false, Security: false /* Secure but might take a long time */ }){
    number = typeof(number)=="number" && number || 500
    var __ETC = { Chars: 30, MaxChars: 100 }
    ETC = typeof(ETC)=="object" && ETC || __ETC
    for(i in __ETC){ if(!ETC[i])ETC[i]=__ETC[i] }
    //=========================\\
    var result = getRandomInt(28, 18529).toString()
    var realResult;
    var int = 0
    while( (eval(result)) !== eval(number) || ETC.MaxChars > result.length ){int++
        var NewNumber = { selected: getRandomInt(.3, 1000), equation: equations[getRandomInt(1, equations.length)], equation2: equations2[getRandomInt(1, equations2.length)] }
        if((eval(result)) > eval(number) && eval(result)-eval(number)<10){
            let subBy = eval(result)-eval(number)
            var resultS = result + "-" + subBy
            if(eval(resultS) == eval(number) && (parseInt(ETC.MaxChars) < parseInt(resultS.length)) ) {
                if(!ETC.Hide && !ETC.hide && !ETC.hide_eq && !ETC.hideeq)console.log( `Result Done: ${int} || Caculated: ` + eval(resultS) + " | Length: " + resultS.length + " | Selected Random EQ: " + NewNumber.selected );
                realResult = resultS
                result = ""
                if(ETC.lua || ETC.luamode || ETC.luaeq || ETC.lua_eq || ETC.luaequation || ETC.lua_equation){
                    result = `Linen Equation Generator -- Linen#3485 made a script that generates lua equations until it reaches the number you supplied, each time the equations are different, and it is super quick. and there are options u can choose. Dm him for more info\n\n=================------------------ LUA EQUATION FORM ------------------=================\n\n${number}==tonumber((${resultS}).."")\n\n`
                }
                result = result+"\n=================------------------ NORMAL EQUATION FORM ------------------=================\n\n"+resultS+"\n\n";break; // can subtract to get the selected number
            }
        }
        else
        {
            if(!ETC.Hide && !ETC.hide && !ETC.hide_eq && !ETC.hideeq)console.log( `Result ${int} || Caculated: ` + eval(result) + " | Length: " + result.length + " | Selected Random EQ: " + NewNumber.selected );
        }
        if((eval(result)) > eval(number)){ // its greater than the number provided
            result += ( NewNumber.equation2 + NewNumber.selected )
        }
        if(eval(result) < eval(number)){ // its less than the number provided
            result += ( NewNumber.equation + NewNumber.selected )
        }
    }
    if(ETC.Security){
        let generated = []
        let selectedInt = getRandomInt(70, 101)
        let gettingTo = eval(result.split("Base Form:")[1])
        let got = ""
        let combined;

        for(var i=0;i<selectedInt;i++){
            generated.push(getRandomInt(382, 9285))
        }
        for(i in generated){ let v = generated[i]
            let data = module.exports(v, { MaxChars: 1000, hide: true })
            got+=data[1]
        };combined = realResult+" + "+got;
        result+="\n=================------------------ SECURITY EQUATION BELOW ------------------=================\n\n"
        result+="(("+combined+")-("+combined+"))+"+realResult+""
    }
    return [result, realResult]
}