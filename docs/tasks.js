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