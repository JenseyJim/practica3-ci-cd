const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  const sum = 2 + 3;
  result.textContent = `Resultado: ${sum}`;
});
