let btnstart = document.getElementById("start");
let btnrestart = document.getElementById("restart");
let btnstop = document.getElementById("stop");

let hrs=0;
let mins=0;
let secs =0;
let milisec=0;
let starttimer;

btnstart.addEventListener("click",()=>{
  
     starttimer = setInterval(()=>{
        milisec++;
        if(milisec==100)
        {
            secs++;
            milisec=0;
        }
        if(secs==60)
        {
            mins++;
            secs=0;
        }
        if(mins==60)
        {
            hrs++;
            mins=0;
        }
    updatedis();
    },10);

});


btnrestart.addEventListener("click",()=>{
   hrs=mins=secs=milisec=0;
   updatedis();
   clearInterval(starttimer);

});

btnstop.addEventListener("click",()=>{
    clearInterval(starttimer);
    updatedis();

});

function updatedis()
{
    let phrs = hrs<10 ? '0'+hrs:hrs;
    let pmins = mins<10 ? '0'+mins:mins;
    let psecs = secs<10 ? '0'+secs:secs;
    let pmilisec = milisec<10 ? '0'+milisec:milisec;


    document.querySelector(".hr").innerHTML=phrs;
    document.querySelector(".min").innerHTML=pmins;
    document.querySelector(".sec").innerHTML=psecs;
    document.querySelector(".milisec").innerHTML=pmilisec;
    
}