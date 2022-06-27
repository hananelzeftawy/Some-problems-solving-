
console.log("first time :"+document.getElementById('demo'));
document.getElementById('demo').innerHTML="Assignment Java Secript";
console.log('hello console');
console.log(document.getElementById('demo'));


function PrintNumber(){  
    var number=document.getElementById("E-no").value;  
    document.getElementById('result').innerHTML=number;
    }  

function Print_Yes_No()
{  
    var number=document.getElementById("input-Q2").value; 
    if((number %3==0) && (number %4==0))
    
    document.getElementById('result-Q2').innerHTML='Yes';
    else
    document.getElementById('result-Q2').innerHTML='No';
}  


function Print_Max()
{  
    var x=document.getElementById("input-num1-Q3").value; 
    var y=document.getElementById("input-num2-Q3").value; 

    if(x>y)
    
    document.getElementById('result-Q3').innerHTML='The max number is '+x;
    else
    document.getElementById('result-Q3').innerHTML='The max number is '+y;
}  

function Print_PositiveNegative()
{  
    var number=document.getElementById("input-Q4").value; 
    if(number >=0) 
    
    document.getElementById('result-Q4').innerHTML='Positive';
    else
    document.getElementById('result-Q4').innerHTML='Negative';
} 

function Print_largest()
{  var max,min;
    var x=parseInt(document.getElementById("input-num1-Q5").value); 
    var y=parseInt(document.getElementById("input-num2-Q5").value);  
    var z=parseInt(document.getElementById("input-num3-Q5").value); 
    // find max number
    if ((x>y)&&(x>z))
    max=x;
    else if ((y>x)&&(y>z))
    max=y;
    else
    max=z;

    // find min number
    if ((x<y)&&(x<z))
    min=x;
    else if ((y<x)&&(y<z))
    min=y;
    else
    min=z;

    document.getElementById('result-Q5').innerHTML='The max number is ('+max+')  The min number is ('+min+')';
    console.log(typeof x +"  x="+x);
    console.log(typeof y+"    y="+y);
    console.log(typeof z+"  z="+z);

}  


function Print_EvenOdd()
{   var result;
    var number=parseInt(document.getElementById("input-num-Q6").value); 

    if(number %2==0) 
    resylt="Even";
    else
    resylt="Odd";

    document.getElementById('result-Q6').innerHTML=resylt;
    
} 



function Print_vowel_consonant()
{   var result;
    var ch=document.getElementById("input-char-Q8").value;
  
  if (!isNaN(ch)) result="--> is number"; // is number 
  else
  switch(ch==ch.toUpperCase() ||ch==ch.toLowerCase()) 
   {
    case (ch=='a'||ch=='A'): result=' --> is vowel'; break;
    case (ch=='i'||ch=='I'): result=' --> is vowel'; break;
    case (ch=='e'||ch=='E'): result=' --> is vowel'; break;
    case (ch=='o'||ch=='O'): result=' --> is vowel'; break;
    case (ch=='u'||ch=='U'): result=' --> is vowel'; break;         
    
    default:result=' --> is consonant';
   }



    document.getElementById('result-Q8').innerHTML=result;
    
} 


function Print_all_numbers()
{   var result,count;
    var number=parseInt(document.getElementById("input-num-Q9").value); 

    result="  ";
    
    for (count=0;count<=number;count++)
    {   
     result = result+ count.toString() +"  ";
    }
    
    document.getElementById('result-Q9').innerHTML=result;
    
} 

function multiplication_table()
{   var result,count,ans;
    var number=parseInt(document.getElementById("input-num-Q10").value); 

    result="  ";
    
    for (count=1;count<=12;count++)
    { 
      ans= count *  number;
     result = result+ ans.toString() +"  ";
    }
    
    document.getElementById('result-Q10').innerHTML=result;
    
} 

function print_all_even()
{   var result,count;
    var number=parseInt(document.getElementById("input-num-Q11").value); 

    result="  ";
    
    for (count=1;count<=number;count++)
    { 
     if(count%2==0)   result = result+ count.toString() +"  ";
    
    }
    
    document.getElementById('result-Q11').innerHTML=result;
    
} 

function Power()
{   var result
    var number1=parseInt(document.getElementById("input-num1-Q12").value); 
    var number2=parseInt(document.getElementById("input-num2-Q12").value); 

    result=Math.pow(number1, number2);
 
    document.getElementById('result-Q12').innerHTML="The value "+number1+" of the Power "+number2+" = "+result;   
} 


function subjects()
{
    var result,countوaverage,percentage;
    var total=0;
    
    var mark=[];// five subjects 
    mark[0]=parseInt(document.getElementById("input-num1-Q13").value); 
    mark[1]=parseInt(document.getElementById("input-num2-Q13").value);
    mark[2]=parseInt(document.getElementById("input-num3-Q13").value);
    mark[3]=parseInt(document.getElementById("input-num4-Q13").value);
    mark[4]=parseInt(document.getElementById("input-num5-Q13").value);
  

    for (count=0;count<mark.length;count++)  // total five subjects
    total=total+mark[0];

    average=total/mark.length;    // calculate  average
    percentage=(total *100) /100; // calculate  percentage
    
    document.getElementById('result-Q13').innerHTML="The total five subjects are :"+total+"     Average : "+average+"     Percentage :"+percentage+"%";   


}



function getDaysByMonth(monthNumber) 
{    // month name and days
var monthDay=[
    {name:"",days:0},
    {name:"January",days:31},
    {name:"February",commonYear:28,leapYear:29}, 
    {name:"March",days:31}, 
    {name:"April",days:30},
    {name:"May",days:31},
    {name:"June",days:30},
    {name:"July",days:31},
    {name:"August",days:31},
    {name:"September",days:30},
    {name:"October",days:31},
    {name:"November",days:30},
    {name:"December",days:31},] 
     
return monthDay[monthNumber];
}

function printDays()
{
    var result,Days;
    var numberOfMonth=parseInt(document.getElementById("input-num-Q14").value); 
    
    if((numberOfMonth>=1) && (numberOfMonth<=12))
    {
     Days=getDaysByMonth(numberOfMonth);
     if(numberOfMonth==2)
        result="  #:"+numberOfMonth+"  Month Name:"+Days.name+"  Days in Month:"+ Days.commonYear+"days" + Days.leapYear+"days";
     else
       result="  #:"+numberOfMonth+"  Month Name:"+Days.name+"  Days in Month:"+ Days.days+"days";   
     }
    document.getElementById('result-Q14').innerHTML=result;   
}



function n-1()
{
    
    document.getElementById("input-num-Q11").innerText=
}

function Calculator()
{
    var result,countوaverage,percentage;
    var total=0;
    
    var mark=[];// five subjects 
    input-num-Q11
    mark[1]=parseInt(document.getElementById("input-num2-Q13").value);
    mark[2]=parseInt(document.getElementById("input-num3-Q13").value);
    mark[3]=parseInt(document.getElementById("input-num4-Q13").value);
    mark[4]=parseInt(document.getElementById("input-num5-Q13").value);
  

    for (count=0;count<mark.length;count++)  // total five subjects
    total=total+mark[0];

    average=total/mark.length;    // calculate  average
    percentage=(total *100) /100; // calculate  percentage
    
    document.getElementById('result-Q13').innerHTML="The total five subjects are :"+total+"     Average : "+average+"     Percentage :"+percentage+"%";   


}