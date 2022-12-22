var startb=document.getElementById("start");
var stopb=document.getElementById("stop");
var resetb=document.getElementById("reset");
var hour=00;
var min=00;
var sec=00;
var count=00;
var timer;
startb.addEventListener('click',function(){
    timer=true;
    stopWatch();
});
stopb.addEventListener('click',function(){
    timer=false;
});
resetb.addEventListener('click',function(){
    timer=false;
    hour=0;
    min=0;
    sec=0;
    count=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";
});

function stopWatch(){
    if(timer){
        count++;
        if(count==100){
            sec++;
            count=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hour++;
            min=0;
            sec=0;
        }
        var hrstr=hour;
        var minstr=min;
        var secstr=sec;
        var countstr=count;
        if(hour<10){
            hrstr="0"+hrstr;
        }
        if(minstr<10){
            minstr="0"+minstr;
        }
        if(sec<10){
            secstr="0"+secstr;
        }
        if(count<10){
            countstr="0"+countstr;
        }
        document.getElementById("hr").innerHTML=hrstr;
        document.getElementById("min").innerHTML=minstr;
        document.getElementById("sec").innerHTML=secstr;
        document.getElementById("count").innerHTML=countstr;
        setTimeout(stopWatch,10);
    }
}

