const addToCartForms = document.querySelectorAll('form[action="/cart/add"]');

addToCartForms.forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    await fetch("/cart/add", {
      method: "post",
      body: new FormData(form),
    });

    const res = await fetch("/cart.json");
    const cart = await res.json();

    document.querySelectorAll(".cart-count").forEach((element) => {
      element.textContent = cart.item_count;
    });
  });
});