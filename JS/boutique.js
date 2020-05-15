       p2=localStorage.getItem("findujeux"); //text
      fin2=parseInt(Math.round(p2)); //NOMBRE


 if(fin2 === 0)
{

  var z=3;

 var fin=0;
   if (localStorage.getItem("score") === null) 
   {
      var x=Math.round(0);
      var lv=1;
   }
   else
   {
      var lv;
      p=localStorage.getItem("score"); //text
      x=parseInt(Math.round(p)); //NOMBRE


   }

  


   if(lv <= 2)
   {
    lv=1;
   }
   else
   {
    console.log(lv);
    var newx = Math.round(lv * 2 / 100);
    lv=newx; 
   }

      p3=localStorage.getItem("lv"); //text
      lv=parseInt(Math.round(p3)); //NOMBRE
function oncl()
{
    x+=lv;
   textUpdate();

}

  function textUpdate()
  {
    document.getElementById("p").innerHTML=Math.round(x)+" points";
    document.getElementById("multi").innerHTML=Math.round(lv)+" par click";


    if(x > 650000)
    {
      play2();
    }
  };



function upgrade()
   {
    var prixinit=100;
    prixinit=prixinit*lv;

    var prix= (prixinit * 10 / 100);

         if (x>=prix)        
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

            x-=prix;


            textUpdate();   
            document.getElementById("etape1").innerHTML=Math.round(prix+=10) ;
              // prix bonus1      
          var prixinitB1=10000;

        var prixB1= (prixinitB1*lv);

            document.getElementById("s").innerHTML=Math.round(prixB1) ;
            // fin prixbonus1

            // prix bonus 2
            var prixinitB2=100000;

        var prixB2= (prixinitB2*lv);

            document.getElementById("l").innerHTML=Math.round(prixB2) ;
            
         }
      else
          {
            alert("vous avez pas les points il vous faut "+prix+"");
          }
   
   }



      function bonus1()
      {
        
        var prixinitB1=10000;
        var prixB1= (prixinitB1*lv);

        if(x>=prixB1)
        {

            x-=prixB1;
            textUpdate();
           zenon1=setInterval(oncl, 1000); //tout les temp de seconde fait oncl
           debut2();  
        } 
      }

function debut2()
{ 
  var deb = setTimeout(fin2, 600000); //dans 10min  apelle la function fin2
                  
    function fin2()
    {
            clearInterval(zenon1);  //arete la function bonus1
    }

}


function oncl2() //a&function du click manuel via click me
{         
  x+=lv*2;
  textUpdate();
}

var zenon;

      function bonus2()
      {     
         var prixinitB2=100000;
        var prixB2= (prixinitB2*lv);
        if(x>=prixB2)
        {
                      x-=prixB2;
            textUpdate();

          // zenon=setInterval(oncl2, 1000); //tout les temp de seconde fait oncl2
        // debut();  
        }
 
      }

function debut()
{ 
  var deb = setTimeout(fin, 3600000); //dans 1H  apelle la function fin
                  
    function fin()
    {
            clearInterval(zenon);  //arete la function bonus2
    }

}

        setInterval(save, 1000);
          function save()
          {
                localStorage.setItem("score",x);
                localStorage.setItem("lv",lv);
          }


          window.onload =function load()
          {   
              textUpdate();  
          }
         
   // succes

   function play2()
   {

      if (z < 4)
      {
        z=z+=1;
        var b = document.createElement("BUTTON");
        var c = document.createTextNode("console suivante");
        b.appendChild(c);
        document.body.appendChild(b);
        b.setAttribute("id", "play1");
        b.setAttribute("onclick", "msg()");
      }
   }
var Consolesuivante=700000;
   function msg()
   {
      if(x>=Consolesuivante)
      {
          x-=Consolesuivante;
          textUpdate(); 
           document.getElementById("play1").id = "play2";
           document.getElementById("play2").setAttribute("onclick", "msg2()");
           document.getElementById("manette1").id = "manette2";
      }
   }

   function msg2()
   {  
      var x10=Consolesuivante*10;
      if(x>=x10)
      {

          x-=x10;
          textUpdate(); 
 
          document.getElementById("play2").id = "play3";
          document.getElementById("play3").setAttribute("onclick", "msg3()");
          document.getElementById("manette2").id = "manette3";
      }
      else
      {
        alert("vous avez pas les points il vous faut "+x10+"");
      }

   }

      function msg3()
          {
              var x100=Consolesuivante*100;
              if(x>=x100)
              {

              x-=x100;
              textUpdate(); 
 
              document.getElementById("play3").id = "play4";
              document.getElementById("play4").setAttribute("onclick", "msg4()");
              document.getElementById("manette3").id = "manette4";
        }
        else
          {
            alert("vous avez pas les points il vous faut "+x100+"");
          }
   }

   function msg4(){
                var x1000=Consolesuivante*1000;
              if(x>=x1000)
              {

                x-=x1000;
                textUpdate(); 
 
                document.getElementById("play4").id = "play5";
                document.getElementById("play5").setAttribute("onclick", "recomencer()");
                document.getElementById("manette4").id = "manette5";
              }
              else
                  {
                  alert("vous avez pas les points il vous faut "+x1000+"");
                  }
   }

   function recomencer()
   {
                var x1000x2=Consolesuivante*1000*2;
              if(x>=x1000x2)
              {
                  fin++;
                  localStorage.setItem("findujeux",fin);
                  window.location.reload();
              }
   }



}

// partie 2
