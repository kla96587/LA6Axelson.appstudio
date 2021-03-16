function addNumbers(x,y) {
    return Number(x) + Number(y)
}

function multiplyNumbers(x,y) {
    return Number(x) * Number(y)
}

btnAdd.onclick=function(){
  lblAnswer.value = "Hello " + inptYourName.value + ", your answer is: " + addNumbers(inptNumber1.value, inptNumber2.value)
}

btnMultiply.onclick=function(){
lblAnswer.value = "Hello " + inptYourName.value + ", your answer is: " + multiplyNumbers(inptNumber1.value, inptNumber2.value)
}

btnReset.onclick=function(){
  inptNumber1.value = ""
  inptNumber2.value = ""
  inptYourName.value = ""
  lblAnswer.value = ""
}
