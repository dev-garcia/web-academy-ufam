const itensListaDois = document.querySelectorAll(".lista-itens-2 li");

itensListaDois.forEach(function (item) {
  item.style.color = "orange";
});

itensListaDois.forEach(function (item) {
  item.classList.replace("hot", "cold");
});
