
function page_load(){
    window.scr=document.getElementById("screen");
    window.but=document.getElementById("buttons");
    const buttons="1,2,3,+,4,5,6,-,7,8,9,*,(,0,),/,clr,.,%,=".split(',');
    buttons.forEach(b => {
        var newb=document.createElement('button');
        newb.innerHTML=b;
        newb.setAttribute('onclick','add_to_scr.call(this,this.innerHTML)')
        newb.classList.add("key")
        but.append(newb);
    });

}

function add_to_scr(txt){
window.scr.innerHTML;
}