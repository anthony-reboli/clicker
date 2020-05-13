alert("Prêt pour jouer!!");

var x=0;
var lv=1;
var newx = Math.round(lv * 2 / 100);
lv=newx;
function oncl(){
   x+=lv;
   textUpdate();
    
}
function textUpdate(){
    document.getElementById("p").innerHTML=x+" points";
   
};

var newx = Math.round(lv * 2 / 100) ;
function upgrade()
   {
         if (x>0)        
        {
            lv=lv+=newx;
            x++;   
            document.getElementById("u").innerHTML="suivant" ;
         }
   
   }



