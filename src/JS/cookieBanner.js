//Cria o banner
const divBanner = document.createElement("div");
divBanner.classList.add("banner-cookies");


if(!localStorage.getItem("cookies_aceitos")){

    // Titutlo cookies
    const headerBanner = document.createElement("span");
    headerBanner.classList.add("header-banner");
    headerBanner.textContent = "Cookies";

    // Texto cookie
    const textBanner = document.createElement("span");
    textBanner.classList.add("text-banner");
    textBanner.textContent = "Usamos ferramentas e serviços de terceiros que fazem uso de cookies para melhorar a sua experiência de navegação em nosso site. Ao clicar em 'Aceitar', você consente com o uso desses cookies para personalizar o conteúdo e analisar o tráfego.";

    // Button de aceite
    const buttonsBanner = document.createElement("span");
    buttonsBanner.classList.add("buttons-banner");
    const button = document.createElement("button");
    button.textContent = "Aceito";

    // Função para salvar cookies
    button.addEventListener("click", () => {
        localStorage.setItem("cookies_aceitos", "true");
        divBanner.style.display = "none";
    });

    // Links de política de privacidade e configurações
    const divLink = document.createElement("div");
    const link1 = document.createElement("a");
    link1.setAttribute("href", "https://support.google.com/chrome/answer/95647?hl=pt");
    link1.setAttribute("target", "_blank");
    link1.setAttribute("rel", "noopener noreferrer");
    link1.textContent = "Ver definições de cookies";
    const link2 = document.createElement("a");
    link2.setAttribute("href", "/src/pages/privacidade.html");
    link2.textContent = "Política de privacidade";

    // Adiciona as tags, para as tags pais
    // área dos botões
    divLink.appendChild(link1);
    divLink.appendChild(link2);

    buttonsBanner.appendChild(button);
    buttonsBanner.appendChild(divLink);

    //Adiciona tudo a div
    divBanner.appendChild(headerBanner);
    divBanner.appendChild(textBanner);
    divBanner.appendChild(buttonsBanner);

    document.body.appendChild(divBanner);
}