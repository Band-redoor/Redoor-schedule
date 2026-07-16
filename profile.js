const profileIntro = document.getElementById("profileIntro");

function hideProfileIntro() {
  if (!profileIntro || profileIntro.classList.contains("is-hidden")) return;

  profileIntro.classList.add("is-hidden");
}

if (profileIntro) {
  window.setTimeout(hideProfileIntro, 1200);
  profileIntro.addEventListener("click", hideProfileIntro, { once: true });
  window.addEventListener("touchstart", hideProfileIntro, { once: true, passive: true });
  window.addEventListener("wheel", hideProfileIntro, { once: true, passive: true });
}
