function toggleMode() {
  const html = document.documentElement
  
  // 1. Troca a classe 'light' (se tiver, remove; se não tiver, adiciona)
  html.classList.toggle("light")

  // 2. Pegar a tag da imagem
  const img = document.querySelector("#profile img")

  // 3. Substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Duda Amaral usando óculos escuros e fundo azul.")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Duda Amaral sorrindo, cabelo medio e loiro, fundo branco.")
  }
}