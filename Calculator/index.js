var scr=document.getElementById('screen');

const cal_but="123+456-789*(0)/".split("").concat(["clr","%","="]);


        function f(n){
            var scr=document.getElementById('screen');
            scr.innerHTML+=String(n);
        }
        
        function cal(){
            var scr=document.getElementById('screen');
            try{
                let s=eval(scr.innerHTML);
                scr.innerHTML=parseFloat(s);
            }
            catch(err){
                alert(err);
        }
        }
        
        function clr(){
            var scr=document.getElementById('screen');
            scr.innerHTML='';
        }
        