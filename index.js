const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";

// dodger.style.left = "0px";
// dodger.style.right

// document.addEventListener("keydown", function (event) {
//   console.log(event);
// });
document.addEventListener("keydown", function(e){
    if(e.key === "ArrowLeft"){
        moveDodgerLeft();
        moveDodgerRight();
    }
});

const moveDodgerLeft = () => {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if(left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}

const moveDodgerRight = () => {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if(left > 0){
        dodger.style.left = `${left + 1}px`;
    }
}

