document
  .getElementById("formParagrafo")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const entradaParagrafos =
      document.getElementById("entradaParagrafos").value;
    const response = await fetch(
      `/lorem?entradaParagrafos=${entradaParagrafos}`
    );
    const data = await response.text();
    document.getElementById("paragrafosGerados").innerHTML = data;
  });
