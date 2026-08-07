/* ======================================
   BHARAT PRINTING PRESS INTRO
====================================== */
// Check if intro already played
if (sessionStorage.getItem("introPlayed")) {
    document.getElementById("intro").style.display = "none";
} else {
    sessionStorage.setItem("introPlayed", "true");

   document.addEventListener("DOMContentLoaded", () => {

const intro = document.getElementById("intro");
const hello = document.getElementById("helloText");

const languages = [

["Hello","Welcome"],
["नमस्ते","स्वागत है"],
["Bonjour","Bienvenue"],
["Hola","Bienvenido"],
["Ciao","Benvenuto"],
["Hallo","Willkommen"],
["Olá","Bem-vindo"],
["こんにちは","ようこそ"],
["안녕하세요","환영합니다"],
["你好","欢迎"],
["Привет","Добро пожаловать"],
["مرحباً","أهلاً وسهلاً"],
["שלום","ברוכים הבאים"],
["ਸਤ ਸ੍ਰੀ ਅਕਾਲ","ਜੀ ਆਇਆਂ ਨੂੰ"],
["வணக்கம்","வரவேற்கிறோம்"],
["నమస్కారం","స్వాగతం"],
["ನಮಸ್ಕಾರ","ಸ್ವಾಗತ"],
["മലയാളം","സ്വാഗതം"],
["હેલો","સ્વાગત છે"],
["HELLO","WELCOME"]

];

let index = 0;

function showLanguage(){

hello.style.opacity = "0";
hello.style.transform = "translateY(30px)";

setTimeout(()=>{

hello.innerHTML = `
<h1>${languages[index][0]}</h1>
<p>${languages[index][1]}</p>
`;

hello.style.opacity="1";
hello.style.transform="translateY(0)";

if(index === languages.length-1){

setTimeout(()=>{

intro.classList.add("hide-intro");

setTimeout(()=>{

intro.style.display="none";

},1200);

},500);

}else{

index++;

setTimeout(showLanguage,100);

}

},100);

}

showLanguage();

});
}

