const time = document.getElementById("time");
const day = document.getElementById("day");
function updateclock(){
    let date = new Date();
time.innerHTML = date.toLocaleTimeString();
day.innerHTML = date.toDateString();
}
setInterval(updateclock,1000);
