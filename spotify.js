let likebtn=document.getElementById("favorite");
// console.log(likebtn);
likebtn.addEventListener("click",()=>{
    likebtn.style.color="#1bd670";

})

let palybtn=document.getElementById("pause");
// let pause_class=palybtn.getAttribute("class");
palybtn.addEventListener("click",()=>{
    palybtn.removeAttribute("class");
    palybtn.setAttribute("class","fa-solid fa-circle-play");
});
// palybtn.setAttribute("class","fa-solid fa-circle-play");
palybtn.addEventListener("unclick",()=>{
    palybtn.removeAttribute("class");
    palybtn.setAttribute("class","fa-solid fa-circle-play");
});
let responsive_nav=document.querySelectorAll(".responsive_navbar ul li");

for(let listItem of responsive_nav){
listItem.addEventListener("click",(e)=>{
    // console.log(listItem);
    listItem.style.opacity="1";    

})
}
let currPlays=document.querySelectorAll(".card-box .inner-card-box")
for(let currPlay of currPlays){
    currPlay.addEventListener("click",(e)=>{
        // console.log(currPlay)
        let img=currPlay.querySelector("img");
        // console.log(img);
        let src=img.getAttribute("src")
        let currPlayImg=document.querySelector("#playImg");
        currPlayImg.setAttribute("src",src);

    })
}

let innerPlaybtns=document.querySelectorAll(".card-box .inner-card-box");
let play_pauseImg=document.getElementById("play_pauseImg");

for(innerPlaybtn of innerPlaybtns){
    innerPlaybtn.addEventListener("click",(e)=>{
        console.log(innerPlaybtn);
        let proBar=document.querySelector(".play-range-bar input");
        proBar.style.accentColor="#1bd670";
        palybtn.removeAttribute("class");
        palybtn.setAttribute("class","fa-solid fa-circle-pause");
    play_pauseImg.removeAttribute("src");
    play_pauseImg.setAttribute("src","player_icon3.png");
    // play_pauseImg.style.backgroundColor="#1bd670";
    play_pauseImg.style.margin="0px";
    play_pauseImg.style.borderRadius="50%";
    play_pauseImg.style.padding="0px";
    play_pauseImg.style.width="32px";
    play_pauseImg.style.height="32px";

        
});
}
play_pauseImg.addEventListener("click",(e)=>{
    let proBar=document.querySelector(".play-range-bar input");
    proBar.style.accentColor="#1bd670";
    console.log(play_pauseImg);
    play_pauseImg.removeAttribute("src");
    play_pauseImg.setAttribute("src","player_icon3.png");
    // play_pauseImg.style.backgroundColor="#1bd670";
    play_pauseImg.style.margin="0px";
    play_pauseImg.style.borderRadius="50%";
    play_pauseImg.style.padding="0px";
    play_pauseImg.style.width="32px";
    play_pauseImg.style.height="32px";

})
