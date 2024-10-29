const elementsArray = document.querySelectorAll(".box");
var row = document.getElementsByTagName("tr")[0];
var t = row.insertCell(-1);
tab = []
let icons=[
  '🍕','🍕',
  '🧨','🧨',
  '🎃','🎃',
  '🎈','🎈',
  '🎄','🎄',
  '🎨','🎨',
  '🧦','🧦',
  '🎠','🎠',
  '👍','👍',
  '✨','✨',
  '🎁','🎁',
  '🧵','🧵',
  '🥼','🥼',
  '🧧','🧧',
  '🧶','🧶',
]
elementsArray.forEach(element => {
    let icon = randomIcon(icons);
    element.title = icons[icon];
    deleteElementArr(icons, icon);
});
function randomIcon(tab = []) {
    return Math.floor(Math.random()*tab.length);
}
function deleteElementArr(tab = [], icon) {
  tab.splice(icon, 1)
}
function kliknij(x, altt) {
    tab.push(x);
    const u = document.getElementById(altt)
    
    let y = tab[tab.length-2];
    console.log("x: "+x+" y: "+y);
    u.disabled =true;
    u.value=x
   

    console.log("u: "+u.value)
    if (x==y) {
        elementsArray.forEach(element => {
            
            if (element.title==x) {
                element.style.backgroundColor="green"
                element.disabled = true;
                element.alt = 0;
                element.value=element.title;
            }
        });
        //console.log("para")
    }
    elementsArray.forEach(element => {
        if (element.value!=u.value) {
            element.value="";
        } 
        if ( element.alt==0) {
            element.disabled = true;
            element.value=element.title;
        } else if (element.title!=x) {
                element.disabled = false;
        }
        
    });
}
