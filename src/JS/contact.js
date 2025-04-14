

const infosContact = [
    {
        id: 1,
        icon: "mdi mdi-whatsapp",
        icon2: "mdi mdi-phone",
        h4: 'Telefone & WhatsApp',
        p: '(11) 4043-0342',
        link: 'https://wa.me/551140430342',
    },
    {
        id: 2,
        icon: "mdi mdi-email-outline",
        h4: 'Email',
        p: 'lustraomega@lustraomega.com.br',     
        link: 'mailto:lustraomega@lustraomega.com.br',
    },
    {
        id: 3,
        icon: "mdi mdi-map-marker",
        h4: 'Endereço',
        p: 'R. Ubiratan, 119 - Conceição, Diadema - SP, 09911-600' ,
        link: 'https://www.google.com/maps/place/R.+Ubiratan,+119+-+Conceição,+Diadema+-+SP,+09911-520/data=!4m2!3m1!1s0x94ce44f5a5f94c13:0x393e319fa880abac?sa=X&ved=1t:242&ictx=111',        
    },
]


const info_contact_div = document.querySelector(".info-contact");

infosContact.forEach((info, index) => {

    // Cria os spans
    const span = document.createElement("span");
    span.classList.add("item-contact");

    // Cria a ancora
    const a = document.createElement("a");
    a.setAttribute("href", `${info.link}`);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");

    //Cria div dos icones
    const icon = document.createElement("div");
    icon.classList.add("icon");

    //Cria span dos icones
    const iconSpan = document.createElement("span");



    // Cria o elemento <i> do primeiro ícone
    const iconElement = document.createElement("i");
    iconElement.classList.add(...info.icon.split(" ")); // Adiciona as classes do ícone
    
    // Adiciona o primeiro ícone ao span
    iconSpan.appendChild(iconElement);

    // Se for o primeiro item e houver um segundo ícone, adiciona ele também
    if (index === 0 && info.icon2) {
        const iconElement2 = document.createElement("i");
        iconElement2.classList.add(...info.icon2.split(" ")); // Adiciona as classes do segundo ícone
        iconSpan.appendChild(iconElement2);
    }

    //ADICIONA SPAN DENTRO DA DIV DO ICONE
    icon.appendChild(iconSpan);

    // Cria a div das informações
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    // Cria o título (h4)
    const h4 = document.createElement("h4");
    h4.textContent = info.h4;

    // Cria o parágrafo (p)
    const p = document.createElement("p");
    p.textContent = info.p;

    // Adiciona o h4 e p dentro da div das informações
    infoDiv.appendChild(h4);
    infoDiv.appendChild(p);

    // Adiciona o ícone e as informações dentro do <A>
    a.appendChild(icon);
    a.appendChild(infoDiv);

    // Adiciona o <A> e as informações dentro do span
    span.appendChild(a);

    // Adiciona o span dentro da div .info-contact
    info_contact_div.appendChild(span);
});


    // Cria a div das redes sociais
    const socialDiv = document.createElement("div");
    socialDiv.classList.add("social-icons");

    // Cria o primeiro span com ícone do Instagram
    const socialSpanInsta = document.createElement("span");
    const aSocialInsta = document.createElement("a");
    aSocialInsta.setAttribute("href", "https://instagram.com/lustraomega/");
    aSocialInsta.setAttribute("target", "_blank");
    aSocialInsta.setAttribute("rel", "noopener noreferrer");
    aSocialInsta.setAttribute("aria-label", "Instagram da Lustra Ômega");
    const socialInstagram = document.createElement("i");
    socialInstagram.classList.add("mdi", "mdi-instagram");
    aSocialInsta.appendChild(socialInstagram);    
    socialSpanInsta.appendChild(aSocialInsta);
    
    // Cria o primeiro span com ícone do Facebook
    const socialSpanFacebook = document.createElement("span");
    const aSocialFacebook = document.createElement("a");
    aSocialFacebook.setAttribute("href", "https://facebook.com/lustraomega/");
    aSocialFacebook.setAttribute("target", "_blank");
    aSocialFacebook.setAttribute("rel", "noopener noreferrer");
    aSocialFacebook.setAttribute("aria-label", "Facebook da Lustra Ômega");
    const socialFacebook = document.createElement("i");
    socialFacebook.classList.add("mdi", "mdi-facebook");
    aSocialFacebook.appendChild(socialFacebook);
    socialSpanFacebook.appendChild(aSocialFacebook);

    // Adiciona o span na div social-icons
    socialDiv.appendChild(socialSpanInsta);
    socialDiv.appendChild(socialSpanFacebook);

    // Adiciona a div social-icons para info-contact
    info_contact_div.appendChild(socialDiv);











/* ***********************************FUNÇÃO ENVIAR FORMULÁRIO     ********************************** */

document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault(); // Evita o recarregamento da página

    emailjs.sendForm("service_r7cr1eh", "template_bvr9u0s", this, "H90Wp8ZZEGzwdeVXJ")
    .then(() => {
        console.log("Email enviado com sucesso!");
        window.location.href = "agradecimento.html"; // Redireciona para o agradecimento.html
    })
    .catch((error) => {
        console.error("Erro ao enviar email: ", error);
    });

});


document.addEventListener("DOMContentLoaded", () => {

    //ANIMAÇÕES
    const contactTitle_h1 = document.querySelector(".contact-title h1");
    const contactTitle_ul = document.querySelector(".contact-title ul");

    //Define o limite (threshould) como 10% da altura da janela
    const threshould = window.innerHeight * 0.1;

    //Função para verificar a visiblidade dos elementos na tela
    const checkVisibility = () => {
    
        //PÁGINA BLOG
        const contactTitle_h1_Position = contactTitle_h1.getBoundingClientRect();
        const contactTitle_ul_Position = contactTitle_ul.getBoundingClientRect();

        //Verifica se o elemento está visivel na tela      
        // Contact page
        if(contactTitle_h1_Position.top < window.innerHeight - threshould &&
            contactTitle_h1_Position.bottom > 0
        ){
            contactTitle_h1.classList.add("visible");
        } else{
            contactTitle_h1.classList.remove("visible");
        }
        ///////////////////
        if(contactTitle_ul_Position.top < window.innerHeight - threshould &&
            contactTitle_ul_Position.bottom > 0
        ){
            contactTitle_ul.classList.add("visible");
        } else{
            contactTitle_ul.classList.remove("visible");
        }
        
    };
    //Chama a função na rolagem e ao carregar a página
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});