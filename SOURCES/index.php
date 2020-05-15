<!DOCTYPE html>
<html>
    <head>
        <title>Clicker Game</title>

        <script type="text/javascript" src="../JS/boutique.js?version:1"></script>
                
    </head>
    <body>
        <div>
        <button id="manette1" name="manette1" onclick=oncl()>Click me</button>
        </div>
        <div>
        <p id="p" >0 Points</p>
        <p id="multi">0 par click</p>
        <button onclick=upgrade() id="etape1" >Upgrade for 10</button>
        <button onclick=bonus1() id="s" >bonus pour 10</button>
        <button onclick=bonus2() id="l" >bonus pour 100000</button>
        <!-- succes -->
        <div id="div1"></div>
        

        </div>
    </body>
</html>