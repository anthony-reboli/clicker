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
                    Cumuler les points en appuyant sur le bouton manette pour débloquer au fur et à mesure la fameuse console Playstation jusqu'à la toute dernière version.
                    Cliquer sur récompense  pour obtenir la console suivante.
                    En cliquant sur next level une sauvgarde de la partie sera faite.
                </p>
                
            </section>
        <section id="containt">

                <button id="manette1" name="manette" onclick="oncl();"></button>

                <label class="title"><u>Vos points:</u></label>
                <p id="p" >0</p>

                <label class="title"><u>Vos points par click:</u></label>
                <p id="multi">0</p>

                <label class="title"><u>Minuteur:</u></label>
                <p id="decompte" >0</p>
                
                
            
        <figure class="ARfigure">
            <button onclick="upgrade();" id="etape1" ><img width="150" height="100" src="../assets/nextlevel.jpg"></button>
            <figcaption id="upgrade1"class="ARfigcaption">Augmenter les click par seconde<br>prix:<br>10</figcaption>
        </figure>




        <div id="box1">
        <div class="arbox1">
            <figure class="ARfigure">
                <button onclick="bonus1();" id="s" ><img class="arfigimg" width="150" height="100" src="../assets/bonus.jpg"></button>
                <figcaption id="prixbonus1" class="ARfigcaption">Auto clicker x1<br> 1000 pendant 10min</figcaption>
            </figure>
        <div>

        <div class="arbox1">
            <figure class="ARfigure"> 
                <button onclick="bonus2();" id="l" ><img class="arfigimg" width="150" height="100" src="../assets/bonusextra.jpg"></button>
                <figcaption id="prixbonus2" class="ARfigcaption">Auto clicker x2<br>Pendant 10000 pendant 1h</figcaption>
            </figure>
        </div>
        
        </section>
        <section id="recompense">
        <label class="title"><u>!!!Votrerecompense!!!</u></label><br>
        <div id="div1"></div>
        </div>
        
        </main>
        <footer>
            
        </footer>
    </body>
</html>