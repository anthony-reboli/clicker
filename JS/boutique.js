var x=0;
var lv=1;

p=localStorage.getItem("score"); //text
Point=parseInt(p);    //NOMBRE



function oncl(){
   if (localStorage.getItem("score") === null) 
   {
      x+=lv;
      console.log("aie");
      textUpdate();
   }
   else
   {
      Point+=lv;
      textUpdate2(); 
   }
  

   

    
}
function textUpdate(){
    document.getElementById("p").innerHTML=x+" points";
    
};
function textUpdate2(){
    document.getElementById("p").innerHTML=Point+" points";
    
};
function upgrade(){
   switch (lv) {     //swith doit etre = a case
      case 1:
      if (x>=10){
         lv++;
         x-=10;   document.getElementById("etape1").innerHTML= "Upgrade for 200";
      }
      break;
      case 2:
      if (x>=11){
         lv=4;
         x-=11;   document.getElementById("etape1").innerHTML= "Upgrade for 500";
       
   }
   break;
   case 4:
   
if (x>=12){
         lv=8;
         x-=12;   document.getElementById("etape1").innerHTML= "Fully Upgraded";
         document.getElementById("etape1").id = "etape2";
}
break;
   case 8:
      if (x>=13){
         lv=10;
         x-=13;   document.getElementById("etape2").innerHTML= "mise a jour";
      }
      break;
         case 10:
      if (x>=14){
         lv=15;
         x-=14;   document.getElementById("etape2").innerHTML= "mise a jour 2 ";
      }
      break;
                  }
                     }


   function bonus1()
   {
      setInterval(oncl, 1000) 
   }



function oncl2(){       //a&function du click manuel via click me
   x+=lv*2;
   textUpdate();
   console.log(x);
    
}

var zenon;

      function bonus2()
   {
      zenon=setInterval(oncl2, 1000); //tout les temp de seconde fait oncl2
       debut();

      
   }

function debut(){ 
               var deb = setTimeout(fin, 10000); //dans 10 seconde apelle la function fin

               
               
function fin(){
   console.log("rentre");
            clearInterval(zenon);  //arete la function bonus2

             }

          }


          function save()
          {
            localStorage.setItem("score",x)
          }


 
          function load(){

              console.log(localStorage.score);
              textUpdate2();
                
              
           }


   



