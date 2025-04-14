//OBJETOS DE MISSÃO, VISÃO E VALORES
const MVV = [
    {
        id: 1,
        Icons: 'mdi mdi-bullseye-arrow',
        title: "Missão",
        description: "Buscamos liderança nacional com honestidade, motivação e satisfação dos colaboradores, que inovam para alcançar a excelência no atendimento aos clientes.",
    },
    {
        id: 2,
        Icons: 'mdi mdi-eye',
        title: "Visão",
        description: "Buscando crescimento e reconhecimento nacional, com compromisso na satisfação de clientes e colaboradores, atendemos com qualidade, inovação e eficiência.",
    },
    {
        id: 3,
        Icons: 'mdi mdi-hands-pray',
        title: "Valores",
        description: "Valorizamos o cuidado com as pessoas e o meio ambiente, reconhecendo que são essenciais para o crescimento sustentável e o bem-estar coletivo.",

    },
]

const divItemAbout = document.querySelector('.div-item-about');


// CRIANDO CADA OBJETO
MVV.forEach((item) => {
    const itemAbout = document.createElement("div");
    itemAbout.classList.add("key-item-about");
    
    const itemExpanded = document.createElement("div");
    itemExpanded.classList.add("item-expanded-about");
    itemExpanded.setAttribute("data-id", item.id);

    const aboutContent = document.querySelector(".about-content");

    itemAbout.innerHTML = `
            <span 
                class="item-about"
                data-id="${item.id}"
            >
                <i class="${item.Icons}"></i>
                <h4>${item.title}</h4>
                <div>Clique aqui!</div>
            </span>
    `

    itemExpanded.innerHTML = `
            <div>
                <i class="${item.Icons}"></i>
                <h4>${item.title}</h4>
                <p>${item.description}</p>
                <button class="close-btn">
                    <i class="mdi mdi-close"></i>
                </button>
            </div>
    `

    aboutContent.appendChild(itemExpanded);
    divItemAbout.appendChild(itemAbout);
});



// EVENTOS DE CLIQUE COM EVENT DELEGATION
document.addEventListener('click', (event) => {
    // ABRIR A DIV EXPANDIDA QUANDO CLICAR NO ITEM
    if (event.target.closest('.item-about')) {
        const item = event.target.closest('.item-about');
        const itemId = item.getAttribute("data-id");
        const expandedDiv = document.querySelector(`.item-expanded-about[data-id="${itemId}"]`);
        
        if(expandedDiv){
            expandedDiv.classList.toggle("active"); 

            //Se estiver ativo, rola para o centro
            if(expandedDiv.classList.contains("active")){
                expandedDiv.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }
    }

    // FECHAR A DIV EXPANDIDA QUANDO CLICAR NO BOTÃO DE FECHAR
    if (event.target.closest('.close-btn')) {
        const btn = event.target.closest('.close-btn');
        const expandedDiv = btn.closest('.item-expanded-about');
        expandedDiv.classList.remove("active"); 
    }
});

document.addEventListener("DOMContentLoaded", () => {

    //SEÇÃO PÁGINA SOBRE
    //CONTENTS
    const aboutTitle_h1 = document.querySelector(".about-title h1");
    const aboutTitle_ul = document.querySelector(".about-title ul");
    const aboutSection_slogan = document.querySelector(".about-section .slogan");
    const imgAbout = document.querySelector(".img-about");
    const textAbout = document.querySelector(".div-about-2");
    const section2_h3 = document.querySelector(".text-about-section-2 div:nth-child(1) h3");
    const section2_h3_2 = document.querySelector(".text-about-section-2 div:nth-child(2) h3");
    const section2_p = document.querySelector(".text-about-section-2 div:nth-child(1) p");
    const section2_p_2 = document.querySelector(".text-about-section-2 div:nth-child(2) p");
    const section2_buttons = document.querySelector(".text-about-section-2 div:nth-child(3)");

    //Define o limite (threshould) como 10% da altura da janela
    const threshould = window.innerHeight * 0.25;

    //Função para verificar a visiblidade dos elementos na tela
    const checkVisibility = () => {
     
        //PÁGINA SOBRE
        const aboutTitle_h1_Position = aboutTitle_h1.getBoundingClientRect();
        const aboutTitle_ul_Position = aboutTitle_ul.getBoundingClientRect();
        const aboutSection_slogan_Position = aboutSection_slogan.getBoundingClientRect();
        const imgAbout_Position = imgAbout.getBoundingClientRect();
        const textAbout_Position = textAbout.getBoundingClientRect();
        const section2_h3_Position = section2_h3.getBoundingClientRect();
        const section2_h3_2_Position = section2_h3_2.getBoundingClientRect();
        const section2_p_Position = section2_p.getBoundingClientRect();
        const section2_p_2_Position = section2_p_2.getBoundingClientRect();
        const section2_buttons_Position = section2_buttons.getBoundingClientRect();


        //Verifica se o elemento está visivel na tela      
        // Sobre page
        if(aboutTitle_h1_Position.top < window.innerHeight - threshould &&
            aboutTitle_h1_Position.bottom > 0
        ){
            aboutTitle_h1.classList.add("visible");
        } else{
            aboutTitle_h1.classList.remove("visible");
        }
        //////////////////////////////
        if(aboutTitle_ul_Position.top < window.innerHeight - threshould &&
            aboutTitle_ul_Position.bottom > 0
        ){
            aboutTitle_ul.classList.add("visible");
        } else{
            aboutTitle_ul.classList.remove("visible");
        }
        //////////////////////////////
        if(aboutSection_slogan_Position.top < window.innerHeight - threshould &&
            aboutSection_slogan_Position.bottom > 0
        ){
            aboutSection_slogan.classList.add("visible");
        } else{
            aboutSection_slogan.classList.remove("visible");
        }
        //////////////////////////////
        if(imgAbout_Position.top < window.innerHeight - threshould &&
            imgAbout_Position.bottom > 0
        ){
            imgAbout.classList.add("visible");
        } else{
            imgAbout.classList.remove("visible");
        }
        //////////////////////////////
        if(textAbout_Position.top < window.innerHeight - threshould &&
            textAbout_Position.bottom > 0
        ){
            textAbout.classList.add("visible");
        } else{
            textAbout.classList.remove("visible");
        }
        //////////////////////////////
        if(section2_h3_Position.top < window.innerHeight - threshould &&
            section2_h3_Position.bottom > 0
        ){
            section2_h3.classList.add("visible");
        } else{
            section2_h3.classList.remove("visible");
        }

        if(section2_h3_2_Position.top < window.innerHeight - threshould &&
            section2_h3_2_Position.bottom > 0
        ){
            section2_h3_2.classList.add("visible");
        } else{
            section2_h3_2.classList.remove("visible");
        }
        //////////////////////////////
        if(section2_p_Position.top < window.innerHeight - threshould &&
            section2_p_Position.bottom > 0
        ){
            section2_p.classList.add("visible");
        } else{
            section2_p.classList.remove("visible");
        }

        if(section2_p_2_Position.top < window.innerHeight - threshould &&
            section2_p_2_Position.bottom > 0
        ){
            section2_p_2.classList.add("visible");
        } else{
            section2_p_2.classList.remove("visible");
        }
        //////////////////////////////
        if(section2_buttons_Position.top < window.innerHeight - threshould &&
            section2_buttons_Position.bottom > 0
        ){
            section2_buttons.classList.add("visible");
        } else{
            section2_buttons.classList.remove("visible");
        }
        // Sobre page
        
    };
    //Chama a função na rolagem e ao carregar a página
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});