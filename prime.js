var count=0;
function primeNumber()
{
    var num=parseInt(document.getElementById('numb').value);
    for(var i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            count++;
        }
    }
    if(count==2)
    {
        document.getElementById('result').innerHTML=num+' is a Prime Number.';
    }
    else
    {
        document.getElementById('result').innerHTML=num+' is not a Prime Number.';
    }
    return false;
}