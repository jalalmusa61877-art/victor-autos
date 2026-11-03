/* =====================================
   VICTOR AUTOS — WEBSITE INTERACTIONS
===================================== */

// PAGE LOADER
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  setTimeout(function () {
    if (loader) {
      loader.classList.add("hide");
    }
  }, 800);
});


// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("open");

    menuToggle.textContent =
      navLinks.classList.contains("open") ? "✕" : "☰";

  });

  // CLOSE MENU AFTER CLICKING A LINK
  navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

      navLinks.classList.remove("open");
      menuToggle.textContent = "☰";

    });

  });

}


// SCROLL REVEAL ANIMATIONS
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  function (entries, observer) {

    entries.forEach(function (entry) {

      if (entry.isIntersecting) {

        entry.target.classList.add("active");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -35px 0px"
  }
);

revealElements.forEach(function (element) {

  revealObserver.observe(element);

});


// BACK TO TOP BUTTON
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", function () {

  if (backTop) {

    if (window.scrollY > 450) {

      backTop.classList.add("show");

    } else {

      backTop.classList.remove("show");

    }

  }

});

if (backTop) {

  backTop.addEventListener("click", function () {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


// HEADER SCROLL EFFECT
const header = document.getElementById("header");

window.addEventListener("scroll", function () {

  if (header) {

    if (window.scrollY > 50) {

      header.style.boxShadow =
        "0 5px 25px rgba(0,0,0,0.25)";

    } else {

      header.style.boxShadow = "none";

    }

  }

});


// CURRENT YEAR
const year = document.getElementById("year");

if (year) {

  year.textContent = new Date().getFullYear();

}


// SMOOTH INTERNAL NAVIGATION
document.querySelectorAll('a[href^="#"]').forEach(function (link) {

  link.addEventListener("click", function (event) {

    const targetId = link.getAttribute("href");

    if (targetId && targetId !== "#") {

      const target = document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    }

  });

});


// IMAGE FALLBACK
document.querySelectorAll(".car-image img, .about-image img")
  .forEach(function (img) {

    img.addEventListener("error", function () {

      this.style.opacity = "0.25";
      this.alt = "Vehicle image unavailable - check image filename";

    });

  });