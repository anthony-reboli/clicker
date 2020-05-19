<!DOCTYPE html>
<html>
    <head>
        <title>Clickers Game</title>
        <script type="text/javascript" src="../JS/boutique.js"></script>
        <link rel="stylesheet" type="text/css" href="../css/clicker.css">
    </head>
    <body id="click">
        <header id="head">
            <img height="300" src="../assets/logo.jpg">
            <h1 class="title">Le clicker by Sony</h1>
            
        </header>
        <main id="corp">

        <section id="containt">
                <button id="manette1" name="manette" onclick="oncl();"><img width="150" height="100" src="../assets/manette1.png"></button>
                <p id="p" >0 Points</p>
                <p id="multi">0 par click</p>
                <p id="decompte" >0 </p>
        <button onclick="upgrade();" id="etape1" ><img width="150" height="100" src="../assets/nextlevel.jpg"></button>

	<div id="box1">
        <div class="arbox1">
            <figure class="ARfigure">
                <button onclick="bonus1();" id="s" ><img class="arfigimg" width="150" height="100" src="../assets/bonus.jpg"></button>
                <figcaption class="ARfigcaption">Auto clicker x1<br> 100</figcaption>
            </figure>
        <div>

        <div class="arbox1">
            <figure class="ARfigure"> 
                <button onclick="bonus2();" id="l" ><img class="arfigimg" width="150" height="100" src="../assets/bonusextra.jpg"></button>
                <figcaption class="ARfigcaption">Auto clicker x2<br>Pendant 5min</figcaption>
            </figure>
        </div>

         <div id="div1"></div>
	</div>
        </section>

      
    
        </main>
        <footer>
            
        </footer>
    </body>
</html>