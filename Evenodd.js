var n;
function check()
{
    n=parseInt(document.getElementById('num').value);
    if(n%2==0)
    {
        document.getElementById('result').innerHTML='Even Number!';
    }
    else
    {
        document.getElementById('result').innerHTML='Odd Number!'
    }
    return false;
}
