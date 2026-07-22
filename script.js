// اختيار طريقة الدفع

const radios = document.querySelectorAll("input[name='pay']");

const cardBox = document.querySelector(".card-box");

const fawryBox = document.querySelector(".fawry-box");

cardBox.style.display = "none";
fawryBox.style.display = "none";

radios.forEach(function(radio){

radio.addEventListener("change",function(){

if(radios[0].checked){

cardBox.style.display="block";
fawryBox.style.display="none";

}

else{

cardBox.style.display="none";
fawryBox.style.display="block";

}

});

});

// رسالة بعد الاشتراك

const form = document.querySelector("form");

form.addEventListener("submit",function(e){

e.preventDefault();

alert("✅ تم استلام طلب الاشتراك بنجاح.");

window.location.href="index.html";

});