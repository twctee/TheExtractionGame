const spinner = document.querySelector(".spinner");
const startBtn = document.querySelector(".spinner__start-button");
const input = document.querySelector(".spinner__input");
let plate = document.querySelector(".spinner__plate");
let popup = document.getElementById("popup");
let items = [...document.getElementsByClassName("spinner__item")];
let result = "";
document.querySelector("h3").innerHTML = result;

input.addEventListener("change", (e) => {
    if (input.value === "" || +input.value < 1) {
        input.value = 1;
    }
    if (+input.value > input.max) {
        input.value = input.max;
    }
});

startBtn.addEventListener("click", function () {
    const hidespin = document.getElementById("hidespin");
    randomizeItems();
    plate.classList.add("spinner__plate--spin");
    const currPlate = plate;
    const newPlate = plate.cloneNode(true);
    currPlate.parentNode.replaceChild(newPlate, currPlate);
    plate = newPlate;
    items = [...document.getElementsByClassName("spinner__item")];
    reward = items[0].outerText;
    if (reward <= 4) {
        document.getElementById("reward").innerHTML = `<h3>น้ำดื่ม 1 ขวด</h3>`;
    } else if (reward <= 6) {
        // document.querySelector("p").innerHTML = reward;
        document.getElementById("reward").innerHTML = `<h3>ส่วนลด 5 บาท</h3>`;
    } else if (reward <= 7) {
        document.getElementById("reward").innerHTML = `<h3>ส่วนลด 10 บาท</h3>`;
    } else if (reward <= 9) {
        document.getElementById("reward").innerHTML = `<h3>ฟรี 1 แก้ว</h3>`;
    } else if (reward == 10) {
        document.getElementById("reward").innerHTML = `<h3>แก้วน้ำของร้าน</h3>`;
    }

    // debugger;
    if (items.length > 0) {
        setTimeout(openPopup, 2500);
    } else {
    }
});

function openPopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}
function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
}

function randomizeItems() {
    items.forEach((item) => {
        const rand = random(1, +input.value);
        item.textContent = rand;
    });
}

function random(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
