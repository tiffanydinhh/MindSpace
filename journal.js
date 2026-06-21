const entryTitleInput = document.getElementById("entryTitleInput");
const dateInput = document.getElementById("dateInput");
const entryInput = document.getElementById("entryInput");

const entries = document.getElementById("entries");


// function that adds new list item when clicking the add button
function addEntry() {
    if (entryTitleInput.value == '' || dateInput.value == '' || entryInput.value == '') {
        alert("Please fill all text fields");
    }
    else {
        let li = document.createElement("li");  // create li element first
        let x = document.createElement("span");
        x.className = "deleteEntry";

        li.innerHTML = "<span>" + dateInput.value + "</span><br>" + entryTitleInput.value;
        x.innerHTML = "\u00d7";

        entries.appendChild(li);
        li.appendChild(x);
        saveEntry();
    }
}

// user clicks x
entries.addEventListener("click", function(e) {
    if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveEntry();
    }
});

// save HTML from entries container under "entry"
function saveEntry() {
    localStorage.setItem("entry", entries.innerHTML);
}

// replace entries HTML with local storage items under "entry"
function showEntry() {
    entries.innerHTML  = localStorage.getItem("entry");
}

showEntry();