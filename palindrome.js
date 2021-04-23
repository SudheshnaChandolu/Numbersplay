function palin()
{
    var reminder,add=0,temp=0;
    var num=parseInt(document.getElementById('numb').value);
    temp=num;
    while(num>0)
    {
        reminder=num%10;
        add=add*10+reminder;  
        num=parseInt(num/10);      
    }
    if(temp==add)
    {
        document.getElementById('result').innerHTML='Palindrome Number.';
    }
    else
    {
        document.getElementById('result').innerHTML='Not a Palindrome Number.';
    }
    return false;
}