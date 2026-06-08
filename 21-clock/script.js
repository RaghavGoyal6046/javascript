
function showTime() {
    const currentTime = new Date();
    const time=`${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}:${currentTime.getSeconds().toString().padStart(2, '0')}`;
    
    document.getElementById("time").innerText = time;
}
const button = document.getElementById("stop-button");
let intervalId = setInterval(showTime, 1000);

button.addEventListener("click", () => {
    
    if(intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    } else {
        intervalId = setInterval(showTime, 1000);
    }

});

