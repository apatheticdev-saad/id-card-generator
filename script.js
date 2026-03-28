function generateID(){

let name = document.getElementById("name").value;
let role = document.getElementById("role").value;
let template = document.getElementById("template").value;
let photoInput = document.getElementById("photo");

if(name === "" || role === "" || photoInput.files.length === 0){
alert("Please fill all fields");
return;
}

document.getElementById("card-name").innerText = name;
document.getElementById("card-role").innerText = role;

let randomID = Math.floor(10000 + Math.random() * 90000);
document.getElementById("card-id").innerText = "ID: " + randomID;

document.getElementById("template-img").src = "templates/" + template + ".png";

let reader = new FileReader();

reader.onload = function(e){
document.getElementById("profile-pic").src = e.target.result;
}

reader.readAsDataURL(photoInput.files[0]);

}


function downloadID() {

const card = document.getElementById("id-card");

html2canvas(card, {
    backgroundColor: null,
    scale: window.devicePixelRatio
}).then(canvas => {

    const link = document.createElement("a");
    link.download = "id-card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();

});

}

