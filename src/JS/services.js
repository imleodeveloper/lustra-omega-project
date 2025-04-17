

// OBJETOS COMERCIALIZAÇÃO HTML

const servicesSection = [
    {
        id: 1,
        title: "Corte de Tecido",
        subtitle: "Precisão e qualidade para sua produção.",
        text: "Oferecemos os tecidos em tamanhos padrão, atendendo as necessidades dos nossos parceiros com agilidade e qualidade no serviço.",
        img: "/public/imgs-services/section-services-1.webp",
    },
    {
        id: 2,
        title: "Equipamentos de Proteção Individual",
        subtitle: "Pensando sempre na sua segurança",
        text: "Comercializamos uma ampla gama de EPI's, fornecendo segurança e bem-estar dos seus colaboradores. Nossos produtos atendem às normas regulamentadoras de segurança.",
        img: "/public/imgs-services/section-services-2.webp",
    },
    {
        id: 3,
        title: "Desengraxante e Produtos Industriais",
        subtitle: "Soluções eficientes para limpeza e manutenção",
        text: "Nossos desengraxantes são ideais para a limpeza de equipamentos e peças industriais, removendo até as sujeiras mais difíceis. Trabalhamos com produtos de alta performance e eficiência.",
        img: "/public/imgs-services/section-services-3.webp",
    },
    {
        id: 4,
        title: "Descartáveis",
        subtitle: "Soluções descartáveis para empresas e residências",
        text: "Oferecemos copos, papéis interfolhados e sacos de lixo reforçados, garantindo higiene e praticidade para o seu ambiente.",
        img: "/public/imgs-services/section-services-5.webp",
    },
    {
        id: 5,
        title: "Processos Rápidos e Eficientes",
        subtitle: "",
        text: "Com um processo simplificado, garantimos entregas rápidas e conforme o solicitado. Desde o pedido até a entrega, nossa equipe cuida de cada detalhe para que recebam os produtos corretos e no prazo.",
        img: "/public/imgs-services/section-services-4.webp",
    },
];

document.addEventListener("DOMContentLoaded", () => {
    //RENDERIZANDO OS BOTÕES DE FILTRO
    const sectionFilter = document.querySelector('.service-filter');
    const serviceContents = document.querySelectorAll('.service-content');

    let activeService = null;


    servicesSection.forEach((service) => {
        const btnFilter = document.createElement("button");
        btnFilter.textContent = service.title;
        btnFilter.addEventListener("click", () => {
            activeService = service.id;
            console.log(renderServiceContent()); // Att o conteúdo
        });

        sectionFilter.appendChild(btnFilter);

        
    });

    function renderServiceContent(){
        const service = servicesSection.find(s => s.id === activeService);

        if(service) {
            // Fecha todas as service-content
            serviceContents.forEach(content => {
                content.classList.remove('active');
                content.style.maxHeight = "0px";
                content.style.padding = "0px";
            });

            // Selecione a .service-content correspondente e adicione a classe 'active'
            const activeContent = document.querySelector(`.service-content`);
            if(activeContent){
                activeContent.classList.add('active');

                //Modifica o innerHTML da service-content ativa
                activeContent.innerHTML = `
                    <div class="service-text">
                        <h4>${service.title}</h4>
                        <h5>${service.subtitle}</h5>
                        <p>${service.text}</p>
                    </div>
                    <div class="service-image">
                        <span>
                            <img 
                                src="${service.img}" 
                                alt="${service.title}" 
                                title="${service.title}"
                                loading="lazy"
                            >
                        </span>
                    </div>
                `;
            }
            // Timeout para garantir que o navegador processe as mudanças antes de animar
            setTimeout(() => {
                activeContent.classList.add('active'); 
                activeContent.style.maxHeight = activeContent.scrollHeight + "px"; // Ajusta dinamicamente a altura
                activeContent.style.padding = "40px"; // Reintroduz o padding suavemente
            }, 10);
        }   

    }
});

document.addEventListener("DOMContentLoaded", () => {

    //ANIMAÇÕES
    const serviceTitle_h1 = document.querySelector(".service-title h1");
    const serviceTitle_ul = document.querySelector(".service-title ul");
    const titleFilter = document.querySelector(".service-titles h2");
    const subtitleFilter = document.querySelector(".service-titles h3");
    const buttonsFilter = document.querySelector(".service-filter");
    const divContact_h2 = document.querySelector(".div-contact-service h2");
    const divContact_p = document.querySelector(".div-contact-service p");
    const divContact_buttons = document.querySelector(".div-contact-service div");

    //Define o limite (threshould) como 10% da altura da janela
    const threshould = window.innerHeight * 0.1;

    //Função para verificar a visiblidade dos elementos na tela
    const checkVisibility = () => {
    
        //PÁGINA BLOG
        const serviceTitle_h1_Position = serviceTitle_h1.getBoundingClientRect();
        const serviceTitle_ul_Position = serviceTitle_ul.getBoundingClientRect();
        const titleFilter_Position = titleFilter.getBoundingClientRect();
        const subtitleFilter_Position = subtitleFilter.getBoundingClientRect();
        const buttonsFilter_Position = buttonsFilter.getBoundingClientRect();
        const divContact_h2_Position = divContact_h2.getBoundingClientRect();
        const divContact_p_Position = divContact_p.getBoundingClientRect();
        const divContact_buttons_Position = divContact_buttons.getBoundingClientRect();


        //Verifica se o elemento está visivel na tela      
        // Blog page
        if(serviceTitle_h1_Position.top < window.innerHeight - threshould &&
            serviceTitle_h1_Position.bottom > 0
        ){
            serviceTitle_h1.classList.add("visible");
        } else{
            serviceTitle_h1.classList.remove("visible");
        }
        //////////////////////////
        if(serviceTitle_ul_Position.top < window.innerHeight - threshould &&
            serviceTitle_ul_Position.bottom > 0
        ){
            serviceTitle_ul.classList.add("visible");
        } else{
            serviceTitle_ul.classList.remove("visible");
        }
        //////////////////////////
        if(titleFilter_Position.top < window.innerHeight - threshould &&
            titleFilter_Position.bottom > 0
        ){
            titleFilter.classList.add("visible");
        } else{
            titleFilter.classList.remove("visible");
        }
        //////////////////////////
        if(subtitleFilter_Position.top < window.innerHeight - threshould &&
            subtitleFilter_Position.bottom > 0
        ){
            subtitleFilter.classList.add("visible");
        } else{
            subtitleFilter.classList.remove("visible");
        }
        //////////////////////////
        if(buttonsFilter_Position.top < window.innerHeight - threshould &&
            buttonsFilter_Position.bottom > 0
        ){
            buttonsFilter.classList.add("visible");
        } else{
            buttonsFilter.classList.remove("visible");
        }
        //////////////////////////
        if(divContact_h2_Position.top < window.innerHeight - threshould &&
            divContact_h2_Position.bottom > 0
        ){
            divContact_h2.classList.add("visible");
        } else{
            divContact_h2.classList.remove("visible");
        }
        //////////////////////////
        if(divContact_p_Position.top < window.innerHeight - threshould &&
            divContact_p_Position.bottom > 0
        ){
            divContact_p.classList.add("visible");
        } else{
            divContact_p.classList.remove("visible");
        }
        //////////////////////////
        if(divContact_buttons_Position.top < window.innerHeight - threshould &&
            divContact_buttons_Position.bottom > 0
        ){
            divContact_buttons.classList.add("visible");
        } else{
            divContact_buttons.classList.remove("visible");
        }
        // Blog page
        
    };
    //Chama a função na rolagem e ao carregar a página
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
