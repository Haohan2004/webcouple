let status= false;
const nhacbtn=document.getElementById("nhacbtn");
const box=document.getElementById("gioithieu");
const nhac=document.getElementById("nhac");
const noidung=document.getElementById("noidung");
const audio = document.getElementById("audio");
nhacbtn.onclick = function() {
    if (status) {
        document.querySelector("audio").pause();
        nhacbtn.src = "source/image/play.png";
    } else {
        document.querySelector("audio").play();
        nhacbtn.src = "source/image/pause.png";
    }
    status = !status;
}
const thu1 = document.querySelectorAll("#homthu img");
thu1.forEach((img) => {
    img.addEventListener("mouseover", () => {
        img.src= "source/image/thumo.png";
        img.style.transform = "scale(1)";
    });
img.addEventListener("mouseout",() => {
            img.src = "source/image/thudong.png";
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
  const elements = document.querySelectorAll('#tsGH, #tsTV');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear2');
    } else {
      entry.target.classList.remove('appear2'); // 👈 xoá khi kéo ra
    }
  });
}, {
  threshold: 0.5 // 50% phần tử nằm trong tầm nhìn
});

elements.forEach(el => observer.observe(el));
