<!DOCTYPE html>
<html>
    <head>
        <title>Clickers Game</title>
        <script type="text/javascript" src="../JS/boutique.js?v=1"></script>
        <link rel="stylesheet" type="text/css" href="../css/clicker.css">
    </head>
    <body id="click">
        <header id="head">
            <img height="300" width="700" src="../assets/logo.jpg">
            <h1 class="title">Le clicker by Sony</h1>
            
        </header>
        <main id="corp">
            <section id="consigne">
                <h2 class="title"><u>Le but du jeu:</u></h2>
                <p id="regle">
                    Cumul les points en appuyant sur le bouton manette pour débloquer au fur et à mesure la fameuse console Playstation jusqu'a la toute dernière version.
                </p>
                
            </section>

        <section id="containt">

                <button id="manette1" name="manette" onclick="oncl();"></button>

                <label class="title"><u>Vos points</u></label>
                <p id="p" >0</p>

                <label class="title"><u>Vos points par click</u></label>
                <p id="multi">0</p>

                <label class="title"><u>Minuteur</u></label>
                <p id="decompte" >0</p>

                <button onclick="upgrade();" id="etape1" ><img width="150" height="100" src="../assets/nextlevel.jpg"></button>


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
        
        </section>
        <section id="recompense">
        <label class="title"><u>!!!Votrerecompense!!!</u></label><br>
          <div id="div1"></div>
        
        </main>
        <footer>
            
        </footer>
    </body>
</html>