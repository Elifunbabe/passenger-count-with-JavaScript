var countint = 0;
var newcount = 0;
function countnum() {
countint = 1;
newcount += countint;
document.getElementById("count-el").innerHTML = newcount;
}

function savenum() {
document.getElementById("save-el").innerHTML = "previous entries: " + newcount;
}
