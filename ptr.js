var principal;
var rate;
var time;
var SI;
function interest()
{
    principal=parseInt(document.getElementById('pri').value);
    rate=parseInt(document.getElementById('rate').value);
    time=parseInt(document.getElementById('time').value);
    SI=(principal*time*rate)/100;
    document.getElementById('result').innerHTML='Simple Interest: ₹'+SI;
    return false;
}