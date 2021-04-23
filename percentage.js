var percent,math,eng,science,sum,total=300;
function grade()
{
    math=parseInt(document.getElementById('mat').value);
    eng=parseInt(document.getElementById('engli').value);
    science=parseInt(document.getElementById('sci').value);
    sum=math+eng+science;
    percent=sum/total*100;
    if(percent >= 90)
    {
        document.getElementById('result').innerHTML='Brilliant! You got A+ grade🎉'; 
        document.getElementsByName('display')[0].value='Your percentage: '+percent.toFixed(2)+'%';
    }
    else if(percent >=80 && percent<90)
    {
        document.getElementById('result').innerHTML='Whooo! You got A grade👏';
        document.getElementsByName('display')[0].value='Your percentage: '+percent.toFixed(2)+'%';
    }
    else if(percent>=70 && percent<80)
    {
        document.getElementById('result').innerHTML='Work Hard! You got B grade😕';
        document.getElementsByName('display')[0].value='Your percentage: '+percent.toFixed(2)+'%';
    }
    else if(percent>=60 && percent<70)
    {
        document.getElementById('result').innerHTML='Work Hard! You got C grade😟';
        document.getElementsByName('display')[0].value='Your percentage: '+percent.toFixed(2)+'%';
    }
    else if(percent<60)
    {
        document.getElementById('result').innerHTML='Sorry! You failed😞';
        document.getElementsByName('display')[0].value='Your percentage: '+percent.toFixed(2)+'%';
    }
    return false;
}