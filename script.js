var input = document.getElementById("textEditor")
var bold = document.getElementById("bold")
var italic = document.getElementById("italic")
var underline = document.getElementById("underline")
var normal = document.getElementById("normal")
var fontSize = document.getElementById("fontSize")
var fontFamily = document.getElementById("fontFamily")
var textColor = document.getElementById("textColor")


bold.addEventListener("click", function () {
    textEditor.style.fontWeight = "bold"
})

italic.addEventListener("click", function () {
    textEditor.style.fontStyle = "italic"
})

underline.addEventListener("click", function () {
    textEditor.style.textDecoration = "underliner"
})

normal.addEventListener("click", function () {
    textEditor.style.fontStyle = "normal"
})

// fontFamily.addEventListener("click" , function() {
//     fontFamily.style.fontFamily = fontFamily.value
// })