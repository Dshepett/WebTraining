const body = document.querySelector("body");
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const changer = document.querySelector(".change-mode");

changer.addEventListener('click', function(){    
    changer.classList.toggle("active");    
    body.classList.toggle("dark");
    header.classList.toggle("dark");
    main.classList.toggle("dark");
    footer.classList.toggle("dark");
});

const lang = document.querySelector(".language");
const langSecond = lang.querySelector(".language-second");
const lang1 = lang.querySelector("span");
const lang2 = langSecond.querySelector(" .language-second span");

lang.addEventListener('click',function(){
    lang.classList.toggle("active");
    console.log(lang2.textContent);
});

langSecond.addEventListener('click',function(){
    const temp=lang1.textContent;
    lang1.textContent = lang2.textContent;
    lang2.textContent = temp;
});