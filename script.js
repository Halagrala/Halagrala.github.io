function fun()
    {
        var cm = document.getElementById("cm").value ;
        r = cm/2;
        var P = 3.14*r**2;
        var cm2 = document.getElementById("cm2").value;
        RR = cm2/2;
        var P2 = 3.14*RR**2;
        
        document.getElementById("1pizza").value = P;
        document.getElementById("2pizza").value = P2;
        if(P>P2)
        {
            document.querySelector("h5").innerHTML = 'Opłaca się kupić pierwszą pizzę';
        }
        else if(P<P2)
        {
            document.querySelector("h5").innerHTML = 'Opłaca się kupić drugą pizzę';
        }
        else if(P=P2)
        {
            document.querySelector("h5").innerHTML = 'Obydwie są równe';
        }

        
       
    }

    function fun2()
    {
        var cm = document.getElementById("cmd").value ;
        r = cm/2;
        var P = 3.14*r**2;
        var cm2 = document.getElementById("cm2s").value;
        RR = cm2/2;
        var P2 = (3.14*RR**2)*2
        
        document.getElementById("Dpizza").value = P;
        document.getElementById("Spizza").value = P2;
        if(P>P2)
        {
            document.querySelector("h6").innerHTML = 'Opłaca się kupić dużą pizzę';
        }
        else if(P<P2)
        {
            document.querySelector("h6").innerHTML = 'Opłaca się kupić dwie średnie pizzę';
        }
        else if(P=P2)
        {
            document.querySelector("h6").innerHTML = 'Dwie średnie i duża są równe';
        }

        
       
    }