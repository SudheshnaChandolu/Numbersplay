var lower,upper;
var evennum="";
var oddnum="";
function even()
{
    lower=parseInt(document.getElementById('low').value);
    upper=parseInt(document.getElementById('up').value);
    if(lower<upper)
    {
        for(var i=lower;i<=upper;i++)
        {        
            if(i%2==0)
            {
                evennum+=' '+i;
                document.getElementById('result').innerHTML='Even Numbers: '+evennum;
            }
        }
    }
    else
    {
        alert('❌Invalid Range!')
    }
    return false;
}
function odd()
{
    lower=parseInt(document.getElementById('low').value);
    upper=parseInt(document.getElementById('up').value);
    if(lower<upper)
    {
        for(var i=lower;i<=upper;i++)
        {
            if(lower<upper)
            {
                if(!(i%2==0))
                {
                    oddnum+=' '+i;
                    document.getElementById('result').innerHTML='Odd Numbers: '+oddnum;
                }
            }
        }
    }
    else
    {
        alert('❌Invalid Range!')
    }
    return false;
}