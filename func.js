let body = document.getElementById("bod");
let con = document.getElementById("con");
let inp = document.getElementById("inp");
let box = document.getElementByClass("box");
let plus = document.getElementById("+");
let back = 0;
function changeBack(){
    if(back>5){
        back = 0;
        body.style.backgroundImage = "url(back.png)";
    }else if(back>4){
        body.style.backgroundImage = "url(back5.jpeg)";
    }else if(back>3){
        body.style.backgroundImage = "url(back4.jpeg)";
    }else if(back>2){
        body.style.backgroundImage = "url(back3.jpeg)";
    }else if(back>1){
        body.style.backgroundImage = "url(back2.png)";
    }else if(back>0){
        body.style.backgroundImage = "url(back2.jpeg)";
    }else{
        body.style.backgroundImage = "url(back.png)";
    }
    back++;
}
con.addEventListener("click", changeBack);

function addEntry(){
    let img = document.createElement('img');
    let p = document.createElement('p');
    let trash = document.createElement('img');
    img.src = "Screen Shot 2023-10-16 at 8.12.44 AM.png";
    trash.src = "trash.png";
    p.innerText = "&nbsp" + inp.value;
    var entry = document.createElement("div");
    entry.appendChild(img);
    entry.appendChild(p);
    entry.appendChild(trash);
    box.appendChild(entry);
    entry.classList.add("entry");
}
plus.addEventListener("click", addEntry);
// Add event listener on keyup
inp.addEventListener('keyup', (event) => {
    var name = event.key;
    if (name === 'Enter') {
        addEntry();
    }
  });