const form = document.querySelector("form");
if (!form) return;

form.addEventListener("keydown", (event) => {
  if (
    event.key === "Enter" &&
    !event.ctrlKey &&
    event.target.tagName !== "TEXTAREA"
  ) {
    event.preventDefault();
  }
});
