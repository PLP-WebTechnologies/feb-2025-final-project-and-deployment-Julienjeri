// Example of toggling visibility of posts or adding other features
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    console.log("Link clicked: ", e.target.textContent);
  });
});
