function tip(value,tip){
    return value + (value*(tip/100));
}

var value = prompt("What is total value of Bill : ", "2400")
value= Number(value)
var tip1 = prompt("Tip Percentage : ","10")
tip1= Number(tip1)

alert(tip(value,tip1))
