       p2=localStorage.getItem("findujeu"); //text
      fin2=parseInt(Math.round(p2)); //NOMBRE


 if(fin2 === 0)
  
{ 
  var prixB1;

  var prix;
  var ogmentationbonus= 1;
  var z=3;
  var lv=1;

 var fin=0;
   if (localStorage.getItem("score") === null) 
   {
      var x=1;
      var lv=1;
   }
   else
   {
      var lv=1;
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
    x+=lv;
   textUpdate();

}

  function textUpdate()
  {

    pointaron=(Math.round(x));
    lv=(Math.round(lv));
            // je recupere le localstorage de prixbonusfinal1 ducoup le prix de bonus 1
            prixbonus=localStorage.getItem("prixbonusfinal1"); //text
            prixbonusfinal1=parseInt(Math.round(prixbonus)); //NOMBRE
            console.log(prixbonus);
            console.log(prixbonusfinal1);

            // fin de la recuperation

            // je recupere le localstorage de prixbonusfinal2 ducoup le prix de bonus 2
            prixbonus2=localStorage.getItem("prixbonusfinal2"); //text
            prixbonusfinal2=parseInt(Math.round(prixbonus2)); //NOMBRE
            // fin de la recuperation

                        // je recupere le localstorage de prixupgradefinal ducoup le prix de upgrade1
            upgrade2=localStorage.getItem("prixupgradefinal"); //text
            prixupgradefinal=parseInt(Math.round(upgrade2)); //NOMBRE
            // fin de la recuperation
            document.getElementById("upgrade1").innerHTML=abbrNum(prixupgradefinal,2)+" points";

    document.getElementById("p").innerHTML=abbrNum(pointaron,2)+" points";

    document.getElementById("multi").innerHTML=abbrNum(lv,2)+" par click";

                if (localStorage.getItem("prixbonusfinal1") === null)
            {

                document.getElementById("prixbonus1").innerHTML="prix:<br>"+abbrNum(1000,2)+" <br>auto clicker<br>x1<br>15 minutes";

                document.getElementById("prixbonus2").innerHTML="prix:<br>"+abbrNum(10000,2)+" <br>auto clicker<br>x2<br>1h";
           }
                else
                    {
                          document.getElementById("prixbonus1").innerHTML="prix:<br>"+abbrNum(prixbonusfinal1,2)+" <br>auto clicker<br>x1<br>15 minutes";

    document.getElementById("prixbonus2").innerHTML="prix:<br>"+abbrNum(prixbonusfinal2,2)+" <br>auto clicker<br>x2<br>1h";
                    }




    if(x > 10000)
    {
      play2();
    }
  };



function upgrade()
   {
    var prixinit=100;
    prixinit=prixinit*lv;

     prix= (prixinit * 10 / 100);

    
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
               lv=Math.ceil(lv+=newx);  //ceill arrondi au superieur
             }

            x-=prix;
            
            textUpdate(); 
            save();
            
         }
      else
          {
            prix=abbrNum(prix,2);
            save();
            alert("vous avez pas les points il vous faut "+prix+"");
          }
   
   }

        // Debut du bonus 1 fonction general
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

      function bonus1()
    {
        

        if(x>1000)
        {
         var prixinitB1=1000;
        
         
         prixB1= (prixinitB1*ogmentationbonus);
        

        
        

        if(x>=prixB1)
        {
          console.log(prixB1);
          ogmentationbonus = ogmentationbonus+=1;
          document.getElementById("box1").style.display = "none";
            x-=prixB1;
          
            textUpdate();
           zenon1=setInterval(oncl, 1000); //tout les temp de seconde fait oncl

           debut2();  
        }
              else
          {
            textUpdate();
            alert("vous avez pas les points il vous faut "+abbrNum(prixB1,2)+"");
          }
      }
    }

function debut2()
{ 
  var deb = setTimeout(fin2, 6000); //dans 10min  apelle la function fin2
           // rajouter un timer bonus

        var timer2 = window.setInterval(tick2, 1000);

        // fin timer                 
    function fin2()
    {
            clearInterval(zenon1);  //arete la function bonus1
            document.getElementById("box1").style.display = "block";
            window.clearInterval(timer2);
    }

}

    var sec2 = 600;
    function tick2()
    {

        document.getElementById('decompte').innerText = 'Il reste ' + convertir(sec2) + ' seconde(s) de bonus X1';
         
        if(sec2 == 0)
        {
            document.getElementById('decompte').innerText = 'Terminé !';
            
        }
 
        sec2--;
    }


     // Fin de fonction general bonus 1
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
     // debut de fonction general bonus 2


function oncl2() //a&function du click manuel via click me
{         
  x+=lv*2;
  textUpdate();
}

var zenon;

      function bonus2()
      {     
         var prixinitB2=10000;
         ogmentationbonus = ogmentationbonus+=1;
         
        var prixB2= (prixinitB2*ogmentationbonus);
        
        if(x>=prixB2)
        {
          localStorage.setItem("prixbonusfinal2",prixB2);
          document.getElementById("box1").style.display = "none";
                      x-=prixB2;
            textUpdate();

           zenon=setInterval(oncl2, 1000); //tout les temp de seconde fait oncl2
         debut();  
        }
      else
          {
            prixB2=abbrNum(prixB2,2);
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
            window.clearInterval(timer);
            document.getElementById("box1").style.display = "block";

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
            
        }
 
        sec--;
    }


            // fin de fonction general bonus 2
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    

           
            function save()
          {     
                localStorage.setItem("score",x);
                localStorage.setItem("lv",lv);
                localStorage.setItem("prixbonus",ogmentationbonus);
                console.log(prixB1);
                localStorage.setItem("prixupgradefinal",prix);
                localStorage.setItem("prixbonusfinal1",prixB1);

          }
            function textupdateload()
          {
            if (localStorage.getItem("lv") === null)
            {
              lv=1;
            }
            else
            {
              p3=localStorage.getItem("lv"); //text
              lv=parseInt(Math.round(p3)); //NOMBRE
            }

            pointaron=(Math.round(x));
            document.getElementById("p").innerHTML=abbrNum(pointaron,2)+" points";
            document.getElementById("multi").innerHTML=Math.round(lv)+" par click";

            if (localStorage.getItem("prixbonusfinal1") === null)
            {

                            // je recupere le localstorage de prixbonusfinal1 ducoup le prix de bonus 1
                prixbonus=localStorage.getItem("prixbonusfinal1"); //text
                prixbonusfinal1=parseInt(Math.round(prixbonus)); //NOMBRE
                // fin de la recuperation

                // je recupere le localstorage de prixbonusfinal2 ducoup le prix de bonus 2
                prixbonus2=localStorage.getItem("prixbonusfinal2"); //text
                prixbonusfinal2=parseInt(Math.round(prixbonus2)); //NOMBRE
                // fin de la recuperation



                document.getElementById("prixbonus1").innerHTML="prix:<br>"+abbrNum(prixbonusfinal1,2)+" <br>auto clicker<br>x1<br>15 minutes";

                document.getElementById("prixbonus2").innerHTML="prix:<br>"+abbrNum(prixbonusfinal2,2)+" <br>auto clicker<br>x2<br>1h";
           }
          }

            window.onload =function load()
          {   
              textupdateload();  
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
var Consolesuivante=50000;
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
                  localStorage.setItem("findujeu",fin);
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


function reset()
{
  localStorage.removeItem("lv");
  localStorage.removeItem("score");
  localStorage.removeItem("prixbonus");
  localStorage.removeItem("prixbonusfinal1");
  localStorage.removeItem("prixbonusfinal2");
  localStorage.removeItem("prixupgradefinal");
}
// partie 2