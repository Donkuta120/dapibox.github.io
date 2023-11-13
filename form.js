const form =document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var text1 = document.getElementById("text1").ariaValueMax;
    var text1 = document.getElementById("text2").ariaValueMax;

    var my_text = 'Result is:%0A - Text1: ${text1} %0A - Text2: ${text2}'

    var token = "6635447257:AAGYWhIMqOz8ly5QYRzAVjUIYgzrEt2VBE4";
    var chat_id = -6184615749
    var url = 'https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=$(my_text)/'

    let api = new XMLHttpRequest();
    api.open("GET", url, true)
    api.send();

    console.log("Message succesfully sended!")

})