const a = document.getElementById("nav")
const bgimg = document.querySelector(".bg_img")
const b = document.querySelector("#toggle")
var line1 = document.querySelector(".line_1")
var line2 = document.querySelector(".line_2")
var line3 = document.querySelector(".line_3")

function responsive() {
    a.classList.toggle("show")
    line1.classList.toggle("fixed1")
    line2.classList.toggle("fixed2")
    line3.classList.toggle("fixed3")
    b.classList.toggle("overflow_hidden")
}
a.addEventListener("click", function() {
    a.classList.toggle("show")
    b.classList.toggle("overflow_hidden")
})