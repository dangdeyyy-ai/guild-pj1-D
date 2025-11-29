let question = document.querySelectorAll(".question")
let answer = document.getElementsByClassName("answer")

question.forEach((element, id) => {
    element.addEventListener("click", function() {
        console.log(id)
        answer[id].style.display = answer[id].style.display == "none" ? "block" : "none"
        answer[id].style.height = answer[id].style.height == "100%" ? "0%" : "100%"
    })
});