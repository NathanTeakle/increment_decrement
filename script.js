let btn_increment = document.querySelector("#increment");
let btn_decrement = document.querySelector("#decrement");
let span_count = document.querySelector("#count");
let counter = 0;
btn_increment.addEventListener("click", () => {
    (typeof counter === "number") ? counter++ : counter = 0;

    span_count.innerText = counter;
});
btn_decrement.addEventListener("click", () => {
    (typeof counter === "number") ? counter-- : counter = counter;
    span_count.innerText = counter;
});