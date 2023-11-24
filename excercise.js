let clickEvent = document.getElementById("box")

clickEvent.addEventListener("click", function(){
    clickEvent.textContent = "I want to open the box!"
})

let buyBtn = document.getElementById("container")
buyBtn.innerHTML = "<button>" + "Buy" + "</button>"
buyBtn.addEventListener("click", function() {
    buyBtn.innerHTML += "<p>" + "Thank you for buying!" + "</p>"
})