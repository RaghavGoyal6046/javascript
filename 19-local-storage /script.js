const button = document.getElementById("clickButton");
const uname = document.getElementById("input-username");
const username = document.getElementById("username");

button.addEventListener("click", () => {
    const name = uname.value;
    localStorage.setItem("username", name);
    username.innerText = name;
    alert("Username saved to local storage!");
    location.reload();
});

window.addEventListener("load", () => {
    const savedName = localStorage.getItem("username");

    if (savedName) {
        username.innerText = savedName;
    }
});