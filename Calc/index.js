
function page_load(){
    // window.rnd
    window.d="round,sin,cos,tan,sqrt,log,log10,log2,exp,pow,hypot,E,PI".split(",");
    
    window.exp_=[];
    window.exp=[];
    window.scroller=document.getElementById("scroller")
    window.scr=document.getElementById("screen");
    window.but1=document.getElementById("buttons1");
    window.but2=document.getElementById("buttons2");
    const buttons1="1,2,3,+,4,5,6,-,7,8,9,*,(,0,),/,round,.".split(',').concat([","],"%,Mode,Clr,C,=".split(','));
    const buttons2="sin,cos,tan,sqrt,log,log10,log2,exp,pow,hypot,E,PI,(,.".split(',').concat([","],"),Mode,Clr,C,=".split(','));
    var i=1;
    scroller.scrollLeft=0;
    buttons1.forEach(b => {
        var newb=document.createElement('button');
        newb.innerHTML=b;
        newb.setAttribute('onclick','add_to_scr.call(this,this.innerHTML)')
        newb.setAttribute("id","b"+i)
        newb.classList.add("key")
        i+=1
        but1.append(newb);
    });
    buttons2.forEach(b => {
        var newb=document.createElement('button');
        newb.innerHTML=b;
        newb.setAttribute('onclick','add_to_scr.call(this,this.innerHTML)')
        newb.setAttribute("id","b"+i)
        newb.classList.add("key")
        i+=1
        but2.append(newb);
    });
}
function eq(){
    let ans=""+parseFloat(eval(exp_.join("")));
    scr.innerHTML=ans;
    exp_=[ans];
    exp=[ans];
}
function add_to_scr(txt){
    if(txt=='='){
        eq();
        return
    }
    else if(txt=="Clr"){
        exp_=[];
        exp=[];
        scr.innerHTML="";
        return
    }
    else if(txt=="C"){
        exp_.pop();
        exp.pop();
        scr.innerHTML=exp.join("");
        return
    }
    else if(window.d.includes(txt)){
        let c="("
        if(["E","PI"].includes(txt))
            c=""
        exp_.push('Math.'+txt+c);
        exp.push(txt+c);
        scr.innerHTML=exp.join("");
        return
    }
    else{
        if(txt=="Mode"){
            scroll();
            return
        }
    }
exp.push(txt);
exp_.push(txt);
scr.innerHTML=exp.join("")
}

function scroll(){
    console.log(scroller.scrollLeft+"=="+but1.offsetWidth);
    if(scroller.scrollLeft>0){
        scroller.scrollLeft=0;
    }
    else{
        scroller.scrollLeft=but1.offsetWidth;
    }
}