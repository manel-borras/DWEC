let video=document.querySelector("video");
let p = document.getElementById("tiempo");
let i = 0;
let d = 0;
video.addEventListener("click",()=>{
  if (i%2 === 0) {
    video.pause();
    i++;
    console.log(i)
  }else{
    video.play();
    i++;
    console.log(i)
  }
});

video.addEventListener("contextmenu", (ev)=>{
  ev.preventDefault();
  let minutes = ~~(video.duration / 60);
  let extraSeconds = ~~(video.duration % 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;

  if(d%2 === 0){
    p.style.display = "block";
    p.innerText=`La duración del video es de: ${minutes}:${extraSeconds} minutos`
    d++;
    console.log(d);
  }else{
    p.style.display = "none";
    d++;
    console.log(d);
  }
})