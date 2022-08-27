let from = document.getElementById("from")
let change_button = document.getElementById("change-button")
let to = document.getElementById("to")

to.readOnly = true

let mode = "take_w"

from.oninput = function () {
    if (mode == "take_w"){
        to.value = from.value.replace(/[w,ｗ]/g, "草")
    }
    else{
        to.value = from.value.replace(/草/g, "w")
    }
}

change_button.onclick = function () {
    if (mode == "take_w"){
        mode = "take_kusa"
        change_button.innerHTML = "草→w"
    }
    else{
        mode = "take_w"
        change_button.innerHTML = "w→草"
    }
}