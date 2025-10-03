const size = document.getElementById("size")
function add() {
    if (size.value >= 46) {
        document.getElementById("pic2").style.display = "block";
        document.getElementById("pic1").style.display = "none";
    } else {
        document.getElementById("pic2").style.display = "none";
        document.getElementById("pic1").style.display = "block";
    }
}