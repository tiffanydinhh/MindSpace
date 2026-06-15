// ---------------- Journal Page ----------------

function displayText() {
    // gets value/data from journal input and stores in variable
    const input = document.getElementById("journalInput").value;

    // set display text to value/data stored in variable
    document.getElementById("displayArea").textContent = input;
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
}