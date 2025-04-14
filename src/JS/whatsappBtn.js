// Cria o botão whatsApp
const divWhatsApp = document.createElement("div");
divWhatsApp.classList.add("button-whatsapp");

const linkWhatsApp = document.createElement("a");
linkWhatsApp.setAttribute("href", "https://wa.me/551140430342");
linkWhatsApp.setAttribute("target", "_blank");
linkWhatsApp.setAttribute("rel", "noopener noreferrer");
linkWhatsApp.setAttribute("aria-label", "Fale conosco pelo WhatsApp");

const iconWhatsApp = document.createElement("i");
iconWhatsApp.classList.add("mdi", "mdi-whatsapp");

const baloonWhatsApp = document.createElement("div");
baloonWhatsApp.classList.add("baloon-whatsapp")
baloonWhatsApp.innerHTML = `
    <p>Fale conosco!</p>
`

// Adiciona os botões as tags pais
linkWhatsApp.appendChild(baloonWhatsApp);
linkWhatsApp.appendChild(iconWhatsApp);
divWhatsApp.appendChild(linkWhatsApp);

/*/ Add styles for "a"
linkWhatsApp.style.textDecoration = "none";
linkWhatsApp.style.color = "#fff";

// Add styles for it's div button
divWhatsApp.style.position = "fixed";
divWhatsApp.style.bottom = "30px";
divWhatsApp.style.right = "30px";
divWhatsApp.style.background = "#25D366";
divWhatsApp.style.color = "#fff";
divWhatsApp.style.width = "60px";
divWhatsApp.style.height = "60px";
divWhatsApp.style.display = "flex";
divWhatsApp.style.justifyContent = "center";
divWhatsApp.style.alignItems = "center";
divWhatsApp.style.borderRadius = "50%";
divWhatsApp.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
divWhatsApp.style.textDecoration = "none";
divWhatsApp.style.fontSize = "30px";
divWhatsApp.style.zIndex = "1000";
divWhatsApp.addEventListener("mouseenter", function(){
    divWhatsApp.style.scale = "1.07";
})
divWhatsApp.addEventListener("mouseleave", function(){
    divWhatsApp.style.scale = "1";
}) */

document.body.appendChild(divWhatsApp);