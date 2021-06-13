const index = document.getElementById("bodys")

let newElement = document.createElement("h1")
newElement.classList.add("line")
newElement.classList.add("anim-typewriter2")
newElement.innerText = "Charles Bukowski"

setTimeout(() => {

    index.appendChild(newElement)

},4000);

