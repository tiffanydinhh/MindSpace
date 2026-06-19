// ---------------- Journal Page ----------------

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
        let li = document.createElement("li");
        li.innerHTML = entryTitleInput.value; // Replace HTML for list item (entry title) to user input

        let span = document.createElement("span");
        span.innerHTML = dateInput.value;

        let br = document.createElement("br");
        
        li.appendChild(span);
        li.appendChild(br);
        entries.appendChild(li);

    }
}




// ---------------- Tasks Page ----------------

const inputTask = document.getElementById("inputTask");
const tasksContainer = document.getElementById("tasksContainer");

// user clicks add button
function addTask() {
    if (inputTask.value == '') {
        alert("Please enter text");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputTask.value; // Replace HTML for list item (task) to user input task
        tasksContainer.appendChild(li); // Append list item to tasksContainer

        let x = document.createElement("span");
        x.innerHTML = "\u00d7";
        li.appendChild(x);
    }
    saveData();
}

// if user clicks check circle or x
tasksContainer.addEventListener("click", function(e) {  // when an element in the tasksContainer is clicked, trigger function(e)
     // if the list element was clicked, toggle the checked class in CSS
    if(e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    }
    // if the span element was clicked, remove the list item from the parent element of span (li)
    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveTask();
    }
});

// save tasks user added/checked when reloading or closing browser
function saveTask() {
    localStorage.setItem("task", tasksContainer.innerHTML);
}

// pass task using key to retrieve data
function showTask() {
    tasksContainer.innerHTML = localStorage.getItem("task");
}

showTask();