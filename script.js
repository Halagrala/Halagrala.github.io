function fun()
    {
        var cm = document.getElementById("cm").value ;
        r = cm/2;
        var P = 3.14*r**2;
        var cm2 = document.getElementById("cm2").value;
        RR = cm2/2;
        var P2 = 3.14*RR**2;
        
        
        document.getElementById("1pizza").value = P.toFixed(0);
        document.getElementById("2pizza").value = P2.toFixed(0);
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
        var P2 = (3.14*RR**2)*2;
        var zl1 = document.getElementById("zl1").value;
        var zl2 = document.getElementById("zl2").value;
        CS= zl2*2;
        var wynik= zl1-CS;

        document.getElementById("wynik").value = wynik.toFixed(0);
        document.getElementById("Dpizza").value = P.toFixed(0);
        document.getElementById("Spizza").value = P2.toFixed(0);
        if(P>P2, zl1> CS)
        {
            document.querySelector("h6").innerHTML = 'Duża pizza jest większa, ale zapłacimy za nią wiecej niż dwie średnie pizze o:';
        }
        else if(P<P2, zl1< CS)
        {
            document.querySelector("h6").innerHTML = 'Dwie średnie pizze są większe, ale mają wiekszą cenę od dużej pizzy o:';
        }
        else if(P<P2, zl1> CS)
        {
            document.querySelector("h6").innerHTML = 'Dwie średnie pizze są większe, ale duża kosztuje więcej o:';
        }
        else if(P>P2, zl1< CS)
        {
            document.querySelector("h6").innerHTML = 'Dwie średnie pizze są większe, ale dwie średnie kosztują więcej o:';
        }
        else if(P=P2, zl1=CS)
        {
            document.querySelector("h6").innerHTML = 'Dwie średnie i duża mają taką samą powierzchnię oraz cenę';
        }

        
       
    }