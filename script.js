function displayText() {
    // gets value/data from journal input and stores in variable
    const input = document.getElementById("journalInput").value;

    // set display text to value/data stored in variable
    document.getElementById("displayArea").textContent = input;
}