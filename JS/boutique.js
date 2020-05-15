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

  

      p3=localStorage.getItem("lv"); //text
      lv=parseInt(Math.round(p3)); //NOMBRE

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
    x+=150000;
   textUpdate();

}

  function textUpdate()
  {
    document.getElementById("p").innerHTML=(abbrNum(x,2))+" points";
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
    prix=Math.round(prix);

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
               newx=Math.round(newx);
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
              else
          {
            alert("vous avez pas les points il vous faut "+prixB1+"");
          }
      }

function debut2()
{ 
  var deb = setTimeout(fin2, 600000); //dans 10min  apelle la function fin2
           // rajouter un timer bonus

        var timer2 = window.setInterval(tick2, 1000);

        // fin timer                 
    function fin2()
    {
            clearInterval(zenon1);  //arete la function bonus1
    }

}

    var sec2 = 600;
    function tick2()
    {

        document.getElementById('decompte').innerText = 'Il reste ' + convertir(sec2) + ' seconde(s) de bonus X1';
         
        if(sec2 == 0)
        {
            document.getElementById('decompte').innerText = 'Terminé !';
            window.clearInterval(timer);
        }
 
        sec2--;
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

           zenon=setInterval(oncl2, 1000); //tout les temp de seconde fait oncl2
         debut();  
        }
      else
          {
            alert("vous avez pas les points il vous faut "+prixB2+"");
          }
 
      }

function debut()
{ 
  var deb2 = setTimeout(fin, 3600000); //dans 1H  apelle la function fin
        // rajouter un timer bonus

        var timer = window.setInterval(tick, 1000);

        // fin timer          
    function fin()
    {
            clearInterval(zenon);  //arete la function bonus2
    }

}

var sec = 3600;
    function tick()
    {

        document.getElementById('decompte').innerText = 'Il reste ' + convertir(sec) + ' seconde(s) de bonus X2';
         
        if(sec == 0)
        {
            document.getElementById('decompte').innerText = 'Terminé !';
            document.getElementById('cache').style.display = 'block';
            window.clearInterval(timer);
        }
 
        sec--;
    }
    

         // setInterval(save, 1000);
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



// changer les chiffres en lettre
function abbrNum(number, decPlaces) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10,decPlaces);

    // Enumerate number abbreviations
    var abbrev = [ "k", "m", "b", "t" ];

    // Go through the array backwards, so we do the largest first
    for (var i=abbrev.length-1; i>=0; i--) {

        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10,(i+1)*3);

        // If the number is bigger or equal do the abbreviation
        if(size <= number) {
             // Here, we multiply by decPlaces, round, and then divide by decPlaces.
             // This gives us nice rounding to a particular decimal place.
             number = Math.round(number*decPlaces/size)/decPlaces;

             // Add the letter for the abbreviation
             number += abbrev[i];

             // We are done... stop
             break;
        }
    }

    return number;
}

  function convertir(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

// partie 2

