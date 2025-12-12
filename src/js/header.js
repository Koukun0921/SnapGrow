// ハンバーガーメニュー
function initHeader() {
  const hamburger = document.querySelector(".js-hamburger");
  const drawer = document.querySelector(".js-drawer");
  const drawerLinks = document.querySelectorAll(".p-header__drawer-item a");
  const body = document.body;
  if (!hamburger || !drawer) {
    return;
  }
  function openMenu() {
    hamburger.classList.add("is-open");
    drawer.classList.add("is-open");
    body.classList.add("is-fixed");
  }
  function closeMenu() {
    hamburger.classList.remove("is-open");
    drawer.classList.remove("is-open");
    body.classList.remove("is-fixed");
  }
  function toggleMenu() {
    if (drawer.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  }
  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });
  drawerLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) {
      closeMenu();
    }
  });
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    }, 100);
  });
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHeader);
} else {
  initHeader();
}
