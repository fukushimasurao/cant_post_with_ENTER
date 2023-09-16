document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("keydown", (event) => {
    // キーコードが13の場合はEnterキー
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });
});
