const userName = prompt("lutfen adinizi girin:");
document.getElementById("myName").textContent=userName || "Ziyaretçi";

const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

function showTime(){
    const now= new Date();
    const hours= String(now.getHours()).padStart(2,'0');
    const minutes= String(now.getMinutes()).padStart(2,'0');
    const seconds=String(now.getSeconds()).padStart(2,'0');

    document.getElementById("myClock").textContent=`${hours}:${minutes}:${seconds}`;

    setTimeout(showTime,1000);

}
function showDay(){
    const now= new Date();
    const day=days [now.getDay()];

    document.getElementById("myDay").textContent=day;
}

showTime();
showDay();