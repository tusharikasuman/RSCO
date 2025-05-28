
//Founders Section---

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    const info = card.querySelector(".info");
    const img = card.querySelector("img");
    info.style.transform = "translateY(0)";
    img.style.transform = "translate(-50%, -60%) scale(1.1)";
    card.style.transform = "translateY(-10px)";
  });
  card.addEventListener("mouseleave", () => {
    const info = card.querySelector(".info");
    const img = card.querySelector("img");
    info.style.transform = "translateY(100%)";
    img.style.transform = "translate(-50%, -50%) scale(1)";
    card.style.transform = "translateY(0)";
  });
});


//Animation on Scroll---
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach(el => observer.observe(el));
});



//FAQ---
const accordions = document.querySelectorAll(".accordion-button");

accordions.forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    button.classList.toggle("active");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});



