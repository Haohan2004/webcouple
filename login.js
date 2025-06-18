let status= false;
let count=0;
nhacbtn.onclick = function() {
    if (status) {
        document.querySelector("audio").pause();
        nhacbtn.src = "/source/image/play.png";
    } else {
        document.querySelector("audio").play();
        nhacbtn.src = "/source/image/pause.png";
    }
    status = !status;
}
const btn = document.querySelector("#btn");

let password = "";
const crpass ="2706";
  document.getElementById("nhappass").onclick = function(event) {
    if (event.target.tagName === "BUTTON") {
        if(count <4)
    {
      const number = event.target.innerText;
      password += number;
      document.getElementById("pass").innerText += "*";
      count++;
}
else{
    if(password === crpass) {
        alert("Chúc mừng bạn đã đăng nhập thành công");
       window.location.href = "index.html";
    } else {

        document.getElementById("nhapsai").style.display = "block";
    document.querySelector("#form").style.filter = "blur(5px)";

        password = "";
        document.getElementById("pass").innerText = "";
        count = 0;
    }
  }
}
 $(".container").fadeIn();
    document.querySelector(".app-content").style.filter = "blur(5px)";
  }