// Pegamos o botão que vai alternar o tema pelo seu ID
const themeToggleButton = document.getElementById("themeToggle");

// Pegamos o <body> do documento para poder aplicar as classes nele
const body = document.body;

// Verificamos se existe algum tema salvo no localStorage (uma "memória" do navegador)
// Se existir, aplicamos esse tema ao <body>
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme); // Adiciona a classe "light-theme" ou outra salva no localStorage
}

// Adicionamos uma função para executar quando o botão for clicado
themeToggleButton.addEventListener("click", () => {
  // Alterna entre adicionar e remover a classe "light-theme" no <body>
  // Se a classe não existir, ela é adicionada; se já existir, ela é removida
  const isLight = body.classList.toggle("light-theme");

  // Salvamos no localStorage qual tema foi ativado:
  // - Se "light-theme" foi ativado, guardamos "light-theme"
  // - Caso contrário, guardamos uma string vazia (sem tema adicional, ou seja, escuro)
  localStorage.setItem("theme", isLight ? "light-theme" : "");
});
