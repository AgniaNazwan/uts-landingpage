function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);

/* ========================= */
/* COUNTER STATISTIK */
/* ========================= */

const counters = document.querySelectorAll(".counter");

const runCounter = () => {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");

    const update = () => {
      const current = +counter.innerText;

      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);

        setTimeout(update, 20);
      } else {
        counter.innerText = target;
      }
    };

    update();
  });
};

window.addEventListener("scroll", runCounter);
