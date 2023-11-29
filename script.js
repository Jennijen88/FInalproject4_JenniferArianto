// JavaScript

document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project");
  const modal = document.querySelector(".project-modal");

  projects.forEach((project) => {
    project.addEventListener("click", () => {
      const projectName = project.querySelector(".project-info h3").textContent;
      const projectDetails = project.querySelector(".project-info p").textContent;
      const githubLink = project.querySelector("button").getAttribute("data-github");

      modal.innerHTML = `
        <div class="project-info">
          <h3>${projectName}</h3>
          <p>${projectDetails}</p>
          ${githubLink ? `<a href="${githubLink}" target="_blank">GitHub Repository</a>` : ''}
        </div>`;
      modal.style.display = "flex";
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - document.querySelector("nav").offsetHeight,
        behavior: "smooth",
      });
    });
  });
});

