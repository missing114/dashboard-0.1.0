    function clock(){
        setInterval(setTime, 1000);

        function setTime()
        {
            var now     = new Date(); 
            var chour    = now.getHours();
            var cminute  = now.getMinutes();
            var csecond  = now.getSeconds(); 
            hdeg = chour * 30 + cminute/2;
            mdeg = cminute * 6 + csecond/10;
            sdeg = csecond * 6;

            document.getElementById("hour").setAttribute(
            "style", "transform:rotate(" + hdeg + "deg);"
                + "-moz-transform: rotate(" + hdeg + "deg);"
                + "-o-transform: rotate(" + hdeg + "deg);"
                + "-webkit-transform:rotate(" + hdeg + "deg);"
                + "-ms-transform:rotate("+ hdeg +"deg);");

            document.getElementById("min").setAttribute(
            "style", "transform:rotate(" + mdeg + "deg);"
                + "-moz-transform: rotate(" + mdeg + "deg);"
                + "-o-transform: rotate(" + mdeg + "deg);"
                + "-webkit-transform:rotate(" + mdeg + "deg);"
                + "-ms-transform:rotate("+ mdeg +"deg);");
            document.getElementById("sec").setAttribute(
            "style", "transform:rotate(" + sdeg + "deg);"
                + "-moz-transform: rotate(" + sdeg + "deg);"
                + "-o-transform: rotate(" + sdeg + "deg);"
                + "-webkit-transform:rotate(" + sdeg + "deg);"
                + "-ms-transform:rotate("+ sdeg +"deg);");     
        }

    }