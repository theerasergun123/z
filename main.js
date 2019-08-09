var text = document.getElementById('text');
function boldit(e)
{
    if (e.style.fontWeight != 'bold')
    {
        e.style.fontWeight = 'bold';
    }
    else{
        e.style.fontWeight = 'normal';
    } 
}
function italicit(e)
{
    if (e.style.fontStyle != 'italic')
    {
        e.style.fontStyle = 'italic';
    }
    else{
        e.style.fontStyle = 'normal';
    } 
}
function rightit(e)
{
    if (e.style.textAlign != 'right')
    {
        e.style.textAlign = 'right';
    }  
}
function leftit(e)
{
    if (e.style.textAlign != 'left')
    {
        e.style.textAlign = 'left';
    }  
}
function centerit(e)
{
    if (e.style.textAlign != 'center')
    {
        e.style.textAlign = 'center';
    }  
}
function sizeit(e)
{
    var selectedSize = document.getElementById("size").value;
    
    e.style.fontSize = selectedSize + "px";
}

function fontit(e){
var selectedFont = document.getElementById("font").value;

e.style.fontFamily = selectedFont;
}
