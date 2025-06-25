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

img.addEventListener("click", (e) => {
            const hienthu = document.getElementById("hienthu");
            const noidung = document.getElementById("noidung");
            document.getElementById("thu").src=`source/image/${img.id}.png`;
            hienthu.style.display = "block";
            noidung.style.filter="blur(5px)";
document.body.style.overflow = "hidden";
img.src= "source/image/thumo.png";
img.style.pointerEvents = "none";
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

const hienthu = document.getElementById("hienthu");
const thuImg = document.getElementById("thu");
const noidung1 = document.getElementById("noidung");

// Tắt popup nếu click ra ngoài ảnh
hienthu.addEventListener("click", (e) => {
 if (e.target === thuImg)
 {
    hienthu.style.display = "none";
    noidung1.style.filter = "none";
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }
});
function bonk() {
  const bat = document.getElementById('bat');
  const bonkText = document.getElementById('bonk-text');
 const bonkSound = document.getElementById("bonk-sound");
  // Vung gậy thẳng mặt Small Doge
  bat.style.transform = 'rotate(20deg) translate(60px, 40px)';
  bonkText.style.opacity = 1;

  bonkSound.currentTime = 0; // về đầu
  bonkSound.play();
  // Quay lại sau 200ms
  setTimeout(() => {
    bat.style.transform = 'rotate(-45deg) translate(0, 0)';
    bonkText.style.opacity = 0;
  }, 200);
}
  const canvas = document.getElementById('scratchCanvas');
  const ctx = canvas.getContext('2d');
  const radius = 15;
  let isDrawing = false;

  function drawOverlay() {
    ctx.fillStyle = '#999';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  drawOverlay();

  function draw(x, y) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  // Mouse events
  canvas.addEventListener('mousedown', () => isDrawing = true);
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseleave', () => isDrawing = false);
  canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    draw(e.clientX - rect.left, e.clientY - rect.top);
  });

  // Touch events
  canvas.addEventListener('touchstart', (e) => {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    draw(touch.clientX - rect.left, touch.clientY - rect.top);
  });

  canvas.addEventListener('touchmove', (e) => {
    if (!isDrawing) return;
    e.preventDefault(); // Ngăn cuộn trang khi cào
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    draw(touch.clientX - rect.left, touch.clientY - rect.top);
  });

  canvas.addEventListener('touchend', () => isDrawing = false);