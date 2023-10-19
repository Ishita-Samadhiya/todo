let body = document.getElementById("bod");
let con = document.getElementById("con");
let inp = document.getElementById("inp");
let box = document.getElementById("box");
let plus = document.getElementById("plus");
let back = 0;
function changeBack() {
    if (back > 5) {
        back = 0;
        body.style.backgroundImage = "url(back.png)";
    } else if (back > 4) {
        body.style.backgroundImage = "url(back5.jpeg)";
    } else if (back > 3) {
        body.style.backgroundImage = "url(back4.jpeg)";
    } else if (back > 2) {
        body.style.backgroundImage = "url(back3.jpeg)";
    } else if (back > 1) {
        body.style.backgroundImage = "url(back2.png)";
    } else if (back > 0) {
        body.style.backgroundImage = "url(back2.jpeg)";
    } else {
        body.style.backgroundImage = "url(back.png)";
    }
    back++;
}

con.addEventListener("click", changeBack);

function addEntry() {
    let img = document.createElement('img');
    let p = document.createElement('p');
    let trash = document.createElement('img');
    img.src = "Screen Shot 2023-10-16 at 8.12.44 AM.png";
    trash.src = "trash.png";
    let val = inp.value;
    p.innerHTML = "&nbsp;" + val;
    var entry = document.createElement("div");
    entry.appendChild(img);
    entry.appendChild(p);
    entry.appendChild(trash);
    entry.classList.add("entry"); 
    box.appendChild(entry);

    img.addEventListener("click", function() {
        toggleStrikethrough(p);
    });
    trash.addEventListener("click", function() {
        deleteEntry(entry);
    });
}

// Function to delete an entry
function deleteEntry(entry) {
    entry.remove(); // Remove the entry from the DOM
}

// Function to toggle the strikethrough style
function toggleStrikethrough(element) {
    if (element.style.textDecoration === "line-through") {
        element.style.textDecoration = "none";
    } else {
        element.style.textDecoration = "line-through";
    }
}

plus.addEventListener("click", addEntry);

// Add event listener on keyup
inp.addEventListener('keyup', (event) => {
    var name = event.key;
    if (name === 'Enter') {
        addEntry();
    }
});
 