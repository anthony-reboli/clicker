
   if (localStorage.getItem("score") === null) 
   {
      var x=Math.round(0);
      var lv=1;
   }
   else
   {
      var lv=1;
      p=localStorage.getItem("score"); //text
      x=parseInt(Math.round(p)); //NOMBRE
   }

  


   if(lv <= 2)
   {
    lv=1;
   }
   else
   {
    var newx = Math.round(lv * 2 / 100);
    lv=newx; 
   }


function oncl()
{
   x+=lv;
   textUpdate();
}

function textUpdate(){
    document.getElementById("p").innerHTML=Math.round(x)+" points";
   
};



function upgrade()
   {
         if (x>0)        
        {

             if(lv < 4)
             {
               lv++;
             }

             if(lv >= 4 && lv <= 10  )
             {
               lv=lv*2;
             }
             if(lv > 10)
             {
               var newx = (lv * 3 / 100);
               lv+=newx;
             }

            x-=3;
            textUpdate();   
            document.getElementById("etape1").innerHTML="suivant" ;
         }
   
   }


   function bonus1()
   {
      setInterval(oncl, 1000) 
   }



function oncl2() //a&function du click manuel via click me
{         
  x+=lv*2;
  textUpdate();
}

var zenon;

      function bonus2()
      {
        zenon=setInterval(oncl2, 1000); //tout les temp de seconde fait oncl2
        debut();   
      }

function debut()
{ 
  var deb = setTimeout(fin, 10000); //dans 10 seconde apelle la function fin
                  
    function fin()
    {
            clearInterval(zenon);  //arete la function bonus2
    }

}

    // setInterval(save, 1000);
          function save()
          {
                localStorage.setItem("score",x);
          }


          window.onload =function load()
          {   
              textUpdate();  
          }

           


   



