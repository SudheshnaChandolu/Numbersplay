var a=0
var b=0
function Addition()
{
    a=parseInt(document.getElementById('txt1').value);
    b=parseInt(document.getElementById('txt2').value);
    var sum=a+b
    document.getElementById('result').value=sum;
    console.log("Addition:"+sum)
}
function Substraction()
{
    a=parseInt(document.getElementById('txt1').value);
    b=parseInt(document.getElementById('txt2').value);
    var sub=a-b
    document.getElementById('result').value=sub;
    console.log("Substraction:"+sub)
}
function Mulitiplication()
{
    a=parseInt(document.getElementById('txt1').value);
    b=parseInt(document.getElementById('txt2').value);
    var mul=a*b
    document.getElementById('result').value=mul;
    console.log("Multiplication:"+mul)
}
function Division()
{
    a=parseInt(document.getElementById('txt1').value);
    b=parseInt(document.getElementById('txt2').value);
    var div=a/b
    document.getElementById('result').value=div;
    console.log("Division:"+div)
}
