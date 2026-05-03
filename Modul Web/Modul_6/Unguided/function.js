document.getElementById("btn").addEventListener("click", function(){
    let clicksound =new Audio("Kaching.mp3");
    clicksound.play();
    let thr = Math.floor(Math.random()*10000) + 10000;
    document.getElementById("hasil").textContent = "Selamat Anda Mendapat THR Rp." + thr;
});

