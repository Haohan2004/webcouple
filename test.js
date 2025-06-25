function bonk() {
  const bat = document.getElementById('bat');
  const bonkText = document.getElementById('bonk-text');

  // Vung gậy thẳng mặt Small Doge
  bat.style.transform = 'rotate(20deg) translate(60px, 40px)';
  bonkText.style.opacity = 1;

  // Quay lại sau 200ms
  setTimeout(() => {
    bat.style.transform = 'rotate(-45deg) translate(0, 0)';
    bonkText.style.opacity = 0;
  }, 200);
}
