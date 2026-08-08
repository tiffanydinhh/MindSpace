const entryTitleInput = document.getElementById("entryTitleInput");
const dateInput = document.getElementById("dateInput");
const entryInput = document.getElementById("entryInput");
const entries = document.getElementById("entries");
const searchInput = document.getElementById("searchInput");

// function that allows user to filter list items with search bar
searchInput.addEventListener('input', ()=> {
    const filterValue = searchInput.value.toLowerCase();    // filterValue = user input in lowercase
    const listItems = entries.getElementsByTagName("li");   // listItems = each list item

    // create array from listItems and go through each li item
    Array.from(listItems).forEach((item) => {
        const text = item.textContent.toLowerCase();    // text = text content in li item in lowercase
        // display item that includes whatever user entered in search input (filterValue)
        item.style.display = text.includes(filterValue) ? '' : 'none';  // if li item text includes filterValue, then show it (do nothing since condition is true), else hide it (none)
    })
})


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