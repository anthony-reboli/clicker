       p2=localStorage.getItem("findujeux"); //text
      fin2=parseInt(Math.round(p2)); //NOMBRE
 if(fin2 === 0)
{
  alert("jeux1");
 z=3;
 var fin=0;
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


   if(x > 10)
   {
    
    console.log('passe');
    play2();
   }
};



function upgrade()
   {
    var prixinit=100;
    prixinit=prixinit*lv;
    console.log(prixinit);
    var prix= (prixinit * 10 / 100);
    console.log(prix);
         if (x>prix)        
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
                    
          var prixinitB1=10000;
        console.log(prixinitB1);
        var prixB1= (prixinitB1*lv);
        console.log(prixB1);
            document.getElementById("s").innerHTML=Math.round(prixB1) ;
            
         }
   
   }



      function bonus1()
      {
        x=100000;
        var prixinitB1=10000;
        console.log(prixinitB1);
        var prixB1= (prixinitB1*lv);
        console.log(prixB1);

        if(x>prixB1)
        {

            x-=prixB1;
            textUpdate();
            console.log(prixB1);
            console.log(lv);

          // zenon1=setInterval(oncl, 1000); //tout les temp de seconde fait oncl
          // debut2();  
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
        zenon=setInterval(oncl2, 1000); //tout les temp de seconde fait oncl2
        debut();   
      }

function debut()
{ 
  var deb = setTimeout(fin, 3600000); //dans 1H  apelle la function fin
                  
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

           


   // succes

   function play2()
   {
    console.log('rentre2');
    console.log(z);
      if (z < 4)
      {
        console.log(z);
        z=z+=1;
        console.log(z);
        console.log('rentre2');
        var b = document.createElement("BUTTON");
        var c = document.createTextNode("Click me");
        b.appendChild(c);
        document.body.appendChild(b);
        b.setAttribute("id", "play1");
        b.setAttribute("onclick", "msg()");




      }
   }

   function msg(){
        document.getElementById("play1").id = "play2";
        document.getElementById("play2").setAttribute("onclick", "msg2()");
    document.getElementById("manette1").id = "manette2";



   }

   function msg2(){

 
    document.getElementById("play2").id = "play3";
  document.getElementById("play3").setAttribute("onclick", "msg3()");
     document.getElementById("manette2").id = "manette3";

   }

      function msg3(){

 
    document.getElementById("play3").id = "play4";
  document.getElementById("play4").setAttribute("onclick", "msg4()");
     document.getElementById("manette3").id = "manette4";

   }

   function msg4(){

 
    document.getElementById("play4").id = "play5";
  document.getElementById("play5").setAttribute("onclick", "recomencer()");
     document.getElementById("manette4").id = "manette5";

   }

   function recomencer()
   {

    fin++;
    console.log("tu a fini");
    localStorage.setItem("findujeux",fin);
    console.log(localStorage.findujeux);
    window.location.reload();
   }

}

// 2eme partie::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

if(fin2 === 1)
{
  alert('jeux2');
   z=3;
 var fin=0;
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


   if(x > 10)
   {
    
    console.log('passe');
    play2();
   }
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

           


   // succes

   function play2()
   {
    console.log('rentre2');
      if (z < 4)
      {
        console.log(z);
        z=z+=1;
        console.log(z);
        console.log('rentre2');
        var b = document.createElement("BUTTON");
        var c = document.createTextNode("Click me");
        b.appendChild(c);
        document.body.appendChild(b);
        b.setAttribute("id", "play1");
        b.setAttribute("onclick", "msg()");




      }
   }

   function msg(){
        document.getElementById("play1").id = "play2";
        document.getElementById("play2").setAttribute("onclick", "msg2()");
    document.getElementById("manette1").id = "manette2";



   }

   function msg2(){

 
    document.getElementById("play2").id = "play3";
  document.getElementById("play3").setAttribute("onclick", "msg3()");
     document.getElementById("manette2").id = "manette3";

   }

      function msg3(){

 
    document.getElementById("play3").id = "play4";
  document.getElementById("play4").setAttribute("onclick", "msg4()");
     document.getElementById("manette3").id = "manette4";

   }

   function msg4(){

 
    document.getElementById("play4").id = "play5";
  document.getElementById("play5").setAttribute("onclick", "recomencer()");
     document.getElementById("manette4").id = "manette5";

   }

   function recomencer()
   {

    fin++;
    console.log("tu a fini");
    localStorage.setItem("findujeux",fin);
    console.log(localStorage.findujeux);
    window.location.reload();
   }
}