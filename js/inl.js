//Sort ToDo:s
function sortToDo() {
    var todos = document.querySelectorAll("li"); //Get all li-items - returns HTML Collection
    todos = [].slice.call(todos); //Make HTML Collection into an array
    todos.sort(function(a, b) { //Sort array alphabetically
        return a.textContent.localeCompare(b.textContent);
    });

    //Put together sorted elements
    for (var i = 0, len = todos.length; i < len; i++) {
        var parent = todos[i].parentNode; // store the parent node to reatach the item
        var detatchedItem = parent.removeChild(todos[i]); // detach it from the DOM
        parent.appendChild(detatchedItem); //attach it
    }
}


// Create new list item with Add ToDo button
function addToDo() {
    var li = document.createElement("li"); //create list element
    var input = document.getElementById("newInput").value; //get input from input field

    //if input empty return alert
    if (input == "") {
        alert("Oops! You forgot to make a To Do.");
    } else {

        var textInput = document.createTextNode(input); //create text input
        li.appendChild(textInput); //append input to list item
        document.getElementById("myList").appendChild(li); //append list item to myList
        document.getElementById("newInput").value = "";

        var addSpan = document.createElement("span"); //create span element
        var addText = document.createTextNode("x"); //create x
        addSpan.className = "xbutton"; //add class xbutton
        addSpan.appendChild(addText); //apprnd x to span
        li.appendChild(addSpan); //append span to li item
    }

    //Hide new item when x clicked
    for (var i = 0; i < hideItem.length; i++) {
        hideItem[i].onclick = function() {
            this.parentElement.style.display = "none"; //get parent element of clicked item (list-item) and hide
        }
    }
}


//Mark items as done when clicked on
var ulList = document.getElementById("myList");
ulList.addEventListener("click", function(e) { //add event listener on click
    e.target.classList.toggle("linethrough");//get clicked element and toggle (add and remove class) linethrough  
}, false);


//Hide item when x clicked
var hideItem = document.getElementsByClassName("xbutton");
for (var i = 0; i < hideItem.length; i++) {
    hideItem[i].onclick = function() {
        this.parentElement.style.display = "none"; //get parent element of clicked item (list-item) and hide it
    }
}