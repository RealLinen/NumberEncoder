const getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
//~~~~+~+~+~+~+~~+~+~+~+~+~+~+~+~+~+~+~+~+~~~~\\
const equations = ["_", "+"]
const equations2 = ["_", "-", "/"]
//~~~~+~+~+~+~+~~+~+~+~+~+~+~+~+~+~+~+~+~+~~~~\\
module.exports = function(number, ETC = { MaxChars: 100 }){
    number = typeof(number)=="number" && number || 500
    var __ETC = { Chars: 30, MaxChars: 100 }
    ETC = typeof(ETC)=="object" && ETC || __ETC
    for(i in __ETC){ if(!ETC[i])ETC[i]=__ETC[i] }
    //=========================\\
    var result = getRandomInt(28, 8529).toString()
    var int = 0
    while( (eval(result)) !== eval(number) || ETC.MaxChars > result.length ){int++
        var NewNumber = { selected: getRandomInt(.3, 100), equation: equations[getRandomInt(1, equations.length)], equation2: equations2[getRandomInt(1, equations2.length)] }
        if((eval(result)) > eval(number) && eval(result)-eval(number)<10){
            let subBy = eval(result)-eval(number)
            var resultS = result + "-" + subBy
            if(eval(resultS) == eval(number) && (parseInt(ETC.MaxChars) < parseInt(resultS.length)) ) {
                if(!ETC.Hide && !ETC.hide && !ETC.hide_eq && !ETC.hideeq)console.log( `Result Done: ${int} || Caculated: ` + eval(resultS) + " | Length: " + resultS.length + " | Selected Random EQ: " + NewNumber.selected );
                result = resultS;break; // can subtract to get the selected number
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
    return result
}