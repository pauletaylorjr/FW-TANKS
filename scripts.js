function enlarge(a,b,c){
    var x = document.getElementById(a);
    var v = document.getElementById(c);
    var y = b;
    var z = document.getElementById(c).parentElement;
    var u = document.getElementById('ovlyintaqua');
    
    x.style.width=y;
    x.style.zIndex=3;
    v.style.height="2vw";
    v.style.opacity="1";
    z.style.backgroundColor="#00758a";
    u.style.display = "inline";
}

function backout(a,b,c){
    var x = document.getElementById(a);
    var v = document.getElementById(c);
    var y = b;
    var z = document.getElementById(c).parentElement;
    var u = document.getElementById('ovlyintaqua');
    
    x.style.width=y;
    x.style.zIndex="auto";
    v.style.height="1.7875vw";
    v.style.opacity=".5";
    z.style.backgroundColor="transparent";
    u.style.display = "none";
}