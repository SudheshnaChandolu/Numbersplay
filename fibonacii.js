var firstNumber=0;
var secondNUmber=1;
var thirdNumber;
var number;
var text=' ';
function fibo()
{
    number=parseInt(document.getElementById('limit').value);
    for(var i=1;i<=number;i++)
    {
        text+=' '+firstNumber;
        document.getElementById('result').innerHTML=text;
        thirdNumber=firstNumber+secondNUmber;
        firstNumber=secondNUmber;
        secondNUmber=thirdNumber;        
    }
    return false;
}