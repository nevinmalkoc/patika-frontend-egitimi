
const inputField = document.querySelector("#task");// görev metni
const addButton = document.querySelector("#liveToastBtn");// ekle butonu
const taskList = document.querySelector("#list");//liste
// Sayfa yüklendiğinde mevcut listedeki görevleri işlemler için hazırla
document.addEventListener("DOMContentLoaded", function () {
    const existingTasks = taskList.querySelectorAll("li");
    existingTasks.forEach(function (listItem) {
        // Silme butonunu ekle
        addDeleteButton(listItem);
        // Görev tıklama olayını ekle
        listItem.addEventListener("click", function () {
            toggleCheckedOrRemove(listItem);
        });
    });
});

addButton.addEventListener("click",function(){
    const taskText = inputField.value.trim();
    //eğer metin boşsa ekleme yapma
    if( taskText===""){
        alert("lütfen bir görev girin!");
        return;
    }
    //yeni bir li elementi oluştur
const listItem = document.createElement("li");
listItem.textContent = taskText;
// silme butonu oluştur şimdi
const deleteButton =document.createElement("button");
deleteButton.textContent = "X";
deleteButton.style.marginLeft = "10px";

// silme butonu tıklanınca görev silinsin
deleteButton.addEventListener("click",function(){
    taskList.removeChild(listItem);
});
//silme butonunu li ye ekle 
listItem.appendChild(deleteButton);
//liste elemanını listeye ekleme 
taskList.appendChild(listItem);
// Göreve tıklanarak "checked" sınıfını eklemek ve ardından silmek
listItem.addEventListener("click", function() {
    // Eğer görev zaten "checked" sınıfına sahipse, sil
    if (listItem.classList.contains("checked")) {
        taskList.removeChild(listItem);
    } else {
        // Eğer görev "checked" değilse, "checked" sınıfını ekle
        listItem.classList.add("checked");
    }
});
showToast("success");
inputField.value="";
});



//silme butonu tıklama işlemi 
taskList.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") { // Butona tıklanmışsa
        // Tıklanan butonun bağlı olduğu li elemanını sil
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
    }
});

//toast bildiirmlerini gösterir
function showToast(type){
    const toast = document.querySelector(`#liveToast${type === "success" ? "" : "Error"}`);
    toast.classList.remove("hide");
    setTimeout(()=>{
        toast.classList.add("hide");
    },4000);
}



