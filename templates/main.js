let flagx = false;
let elements = document.getElementsByClassName("iconx");

console.log(elements);

function changeicon() {
    for (let element of elements) {
        if (!flagx) {
            element.classList.remove("bx-menu");
            element.classList.add("bx-x");
        } else {
            element.classList.remove("bx-x");
            element.classList.add("bx-menu");
        }
    }
    flagx = !flagx;
}
