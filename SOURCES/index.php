<!DOCTYPE html>
<html>
    <head>
        <title>Clicker Game</title>
        <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
        <script type="text/javascript" src="../JS/boutique.js?version:1"></script>
                
    </head>
    <body>
        <div>
        <button id="manette1" name="manette1" onclick=oncl()>Click me</button>
        </div>
        <div>
        <p id="p" >0 Points</p>
        <p id="multi">0 par click</p>
        <p id="decompte" >0 </p>
        <button onclick=upgrade() id="etape1" >Upgrade for 10</button>
        <button onclick=bonus1() id="s" >bonus pour 10</button>
        <button onclick=bonus2() id="l" >bonus pour 100000</button>
        <!-- succes -->
        <div id="div1"></div>
        

        </div>
    </body>
</html>