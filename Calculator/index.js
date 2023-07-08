var scr=document.getElementById('screen');

const cal_but="123+456-789*(0)/".split("").concat(["clr","%","="]);

console.log(cal_but)
function add(){

    const calc2=document.getElementById("calc2"); 
        cal_but.forEach(i => {
        var e=document.createElement("button");
        e.setAttribute("onclick","f("+i+")")
        e.innerHTML=i;
        calc2.appendChild(e);
    });

}
function scroll1(){
    const calc2=document.getElementById("calc2"); 
    calc2.scrollTop+=50;
}
        function f(n){
            var scr=document.getElementById('screen');
            scr.innerHTML+=String(n);
        }
        
        function cal(){
            var scr=document.getElementById('screen');
            try{
            scr.innerHTML=eval(scr.innerHTML);
            }
            catch(err){
                alert(err);
        }
        }
        
        function clr(){
            var scr=document.getElementById('screen');
            scr.innerHTML='';
        }
        