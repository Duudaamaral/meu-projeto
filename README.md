# 🌐 DevLinks | Duda Amaral

Um projeto de **link na bio responsivo** com alternância de tema (light/dark), desenvolvido para centralizar minhas redes e conteúdos em uma interface moderna e elegante.

---

## 📷 Preview

![preview](./assets/preview.png)

---

## ✨ Funcionalidades

* 🌗 Alternância entre modo claro e escuro
* 🎨 Tema dinâmico com **variáveis CSS**
* 📱 Layout responsivo para mobile
* 🔗 Centralização de links importantes
* 💎 Efeito *glassmorphism* (fundo com blur)
* 🎯 Interface simples e intuitiva

---

## 🎨 Design e UI

O projeto utiliza conceitos modernos de interface:

* Uso de **CSS Variables (`:root`)** para controle de tema
* Efeito de transparência com `backdrop-filter`
* Transições suaves entre temas
* Background dinâmico baseado no modo (light/dark)

---

## 🛠️ Tecnologias

* HTML5
* CSS3
* JavaScript
* Ionicons
* Google Fonts (Inter)

---

## ⚙️ Como funciona o tema

A troca de tema é feita via JavaScript, alternando a classe `light` no `<html>`:

```javascript
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
}
```

Com isso, as variáveis CSS são sobrescritas:

```css
:root {
  --text-color: #ffffff;
}

.light {
  --text-color: #000000;
}
```

---

## 📦 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/duudaamaral/devlinks

# Entre na pasta
cd devlinks

# Abra no navegador
index.html
```

---

## 📁 Estrutura do projeto

```
📦 devlinks
 ┣ 📂 assets
 ┃ ┣ avatar.png
 ┃ ┣ bg-mobile.jpg
 ┃ ┣ bg-mobile-light.jpg
 ┃ ┣ moon-stars.svg
 ┃ ┗ sun.svg
 ┣ 📄 index.html
 ┣ 📄 style.css
 ┗ 📄 README.md
```

---

## 🎯 Objetivo

Este projeto foi desenvolvido para praticar:

* Manipulação do DOM com JavaScript
* Criação de temas dinâmicos
* Organização de layout responsivo
* Aplicação de efeitos visuais modernos

---

## 🧠 Aprendizados

Durante o desenvolvimento, explorei:

* CSS moderno com variáveis
* Controle de tema (dark/light)
* Estruturação sem frameworks
* Boas práticas de UI/UX

---

## 🔗 Links

* 💼 LinkedIn: https://www.linkedin.com/in/maria-eduarda-amaral-515b5a3ba/
* 💻 GitHub: https://github.com/duudaamaral
* 📸 Instagram: https://www.instagram.com/duda.amaraaal

---

## 🌍 Deploy

Você pode publicar facilmente usando:

* GitHub Pages
* Vercel

---

## 🤝 Contribuição

Contribuições são sempre bem-vindas!
Sinta-se à vontade para abrir uma issue ou pull request.

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 💜 Créditos

Projeto desenvolvido com apoio da Rocketseat 🚀
