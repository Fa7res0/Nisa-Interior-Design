const filterButtons =
      document.querySelectorAll(".filter-btn");

    const projectCards =
      document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {

      button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
          btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter =
          button.getAttribute("data-filter");

        projectCards.forEach(card => {

          if (filter === "all") {

            card.style.display = "block";

          }

          else if (
            card.classList.contains(filter)
          ) {

            card.style.display = "block";

          }

          else {

            card.style.display = "none";

          }

        });

      });

    });

    // =========================
    // CONTACT FORM
    // =========================

    const form =
      document.getElementById("contactForm");

    const modal =
      document.getElementById("successModal");

    const closeModal =
      document.getElementById("closeModal");

    form.addEventListener("submit", function(e) {

      e.preventDefault();

      modal.classList.add("active");

      form.reset();

    });

    closeModal.addEventListener("click", () => {

      modal.classList.remove("active");

    });

    window.addEventListener("click", (e) => {

      if (e.target === modal) {

        modal.classList.remove("active");

      }

    });

    const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.onclick = () => {

  navLinks.classList.toggle("active");

}



navItems.forEach(link => {

  link.onclick = () => {

    navLinks.classList.remove("active");

  }

})