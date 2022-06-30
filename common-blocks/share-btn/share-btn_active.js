// ==========================================================================
// share-btn - active state
// ==========================================================================
const shareBtnActive = function () {
  const shareBtn = document.querySelector("[data-share-btn]");
  const btnIcon = shareBtn.children[0];
  const drop = document.querySelector(".socials__dropdown");
  const artCard = document.querySelector(".article-card");

  shareBtn.addEventListener("mouseenter", (e) => {
    shareBtn.classList.contains("share-btn_active")
      ? changeIcon(btnIcon, true)
      : changeIcon(btnIcon, false);
  });

  shareBtn.addEventListener("mouseleave", (e) => {
    shareBtn.classList.contains("share-btn_active")
      ? changeIcon(btnIcon, false)
      : changeIcon(btnIcon, true);
  });

  if (drop === null) {
    return;
  }

  shareBtn.addEventListener("click", (e) => {
    shareBtn.classList.contains("share-btn_active")
      ? changeIcon(btnIcon, false)
      : changeIcon(btnIcon, true);

    e.currentTarget.classList.toggle("share-btn_active");
    drop.classList.toggle("socials__dropdown_active");
    artCard.classList.toggle("article-card_pad-b-e_zero");
  });
};

function changeIcon(icon, darkTheme = false) {
  if (darkTheme === false) {
    icon.setAttribute("src", "images/icon-share_active.svg");
  } else {
    icon.setAttribute("src", "images/icon-share.svg");
  }
}

export { shareBtnActive };
