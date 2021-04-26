function evenOdd(param)
{
    if(param%2==0)
    {
        a='Even Number'
        return a;
    }
    else
    {
        b='Odd Number'
        return b;
    }    
}
function palin(param)
{
    var reminder,add=0,temp=0;
    temp=param;
    while(param>0)
    {
        reminder=param%10;
        add=add*10+reminder;  
        param=parseInt(param/10);      
    }
    if(temp==add)
    {
        a='Palindrome';
        return a;
    }
    else
    {
        b='Not a Palindrome';
        return b;
    }    
}
var count=0;
function primeNumber(param)
{
    for(var i=1;i<=param;i++)
    {
        if(param%i==0)
        {
            count++;
        }
    }
    if(count==2)
    {
        a='Prime Number.';
        return a;
    }
    else
    {
        b='Not a Prime Number.';
        return b;
    }
}
function check()
{
    var num=parseInt(document.getElementById('numbe').value );
    var res=evenOdd(num);
    var res1=palin(num);
    var res2=primeNumber(num);
    document.getElementById('result').innerHTML=res+'<br>'+res1+'<br>'+res2;
    return false;
}