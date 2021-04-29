function amstrongNumber()
{
    var n=parseInt(document.getElementById('ams').value );
    var r,sum=0;
    var temp=n;
    while(n>0)
    {
        r=n%10;
        sum=sum+(r*r*r);
        n=parseInt(n/10);
    }
    if(temp==sum)
    {
        document.getElementById('result').innerHTML=temp+' is a Amstrong number';
    }
    else
    {
        document.getElementById('result').innerHTML=temp+' is not an Amstrong number';
    }
    return false;
}