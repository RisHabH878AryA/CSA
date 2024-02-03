const btn = document.querySelector("#btn");
let mode = "light";

btn.addEventListener("click", () => {
    const body = document.body;

    if (mode === "light") {
        mode = "dark";
        body.classList.add("dark-mode");
    } else {
        mode = "light";
        body.classList.remove("dark-mode");
    }
});
