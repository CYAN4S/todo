var userInput = document.getElementById("userInput");
var addButton = document.getElementById("addButton");
var toDoList = document.getElementById("toDoList");
function closeList(params) {
    toDoList.removeChild(params);
}
function checkList(params) {
    if (params.className === "list") {
        params.className = "list done";
    }
    else {
        params.className = "list";
    }
}
function addList() {
    var inputString = userInput.value;
    if (inputString === "") {
        alert("You must write something.");
        return false;
    }
    var li = document.createElement("li");
    li.className = "list";
    li.onclick = function () { checkList(li); };
    li.appendChild(document.createTextNode(inputString));
    var bt = document.createElement("a");
    bt.appendChild(document.createTextNode(" 삭제"));
    bt.onclick = function () { closeList(li); };
    bt.className = "closeButton";
    li.appendChild(bt);
    toDoList.appendChild(li);
    userInput.value = "";
    return true;
}
userInput.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addButton.click();
    }
});
