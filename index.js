let status= false;
const nhacbtn=document.getElementById("nhacbtn");
const box=document.getElementById("gioithieu");
const nhac=document.getElementById("nhac");
const noidung=document.getElementById("noidung");
const audio = document.getElementById("audio");
nhacbtn.onclick = function() {
    if (status) {
        document.querySelector("audio").pause();
        nhacbtn.src = "../source/image/play.png";
    } else {
        document.querySelector("audio").play();
        nhacbtn.src = "../source/image/pause.png";
    }
    status = !status;
}
const thu1 = document.querySelectorAll("#homthu img");
thu1.forEach((img) => {
    img.addEventListener("mouseover", () => {
        img.src= "../source/image/thumo.jpg";
        img.style.transform = "scale(1)";
    });
img.addEventListener("mouseout",() => {
            img.src = "../source/image/thudong.jpg";
            img.style.transform = "scale(1)";
        });
img.addEventListener("click", () => {
            const hienthu = document.getElementById("hienthu");
        
            hienthu.style.display = "block";
        });
    });
     setTimeout(() => {
    box.style.display = "none";
    nhac.style.display = "block";
  }, 9000);