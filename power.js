function powerNumber()
{
var r=1;
var base=parseInt(document.getElementById('bas').value);
var exponent=parseInt(document.getElementById('exp').value);
for(var i=1;i<=exponent;i++)
{
    r=r*base;
}
document.getElementById('result').innerHTML='Power of '+base+' is: '+r;
return false;
}
