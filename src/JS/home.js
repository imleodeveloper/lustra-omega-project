// Dados dos slides
const itemSlide = [
    {
      id: 1,
      image: "/public/img-slider-one.webp",
      alt: "Imagem primeiro slide - Líderes na comercialização de tecidos, produtos de limpeza industrial e equipamentos de proteção individual (EPI).",
      title: "Lustra Ômega - Líderes na comercialização de tecidos, produtos de limpeza industrial e equipamentos de proteção individual",
      heading: "Líderes na comercialização de tecidos, produtos de limpeza industrial e equipamentos de proteção individual.",  
      className: "slide-text-1",  
    },
    {
      id: 2,
      image: "/public/img-slider-two-2.webp",
      alt: "Imagem segundo slide - Líderes na comercialização de tecidos, produtos de limpeza, descartáveis e EPI's",
      title: "Lustra Ômega - Fale conosco", 
      heading: "Fale conosco",
      className: "slide-text-2",
      button_1: "Solicitar contato",
      button_2: "Enviar mensagem",
      link_1: "/pages/contato.html",
    },
    {
      id: 3,
      image: "/public/img-slider-three.webp",
      alt: "Imagem terceiro slide - Líderes na fabricação de panos",
      title: "Lustra Ômega - Líderes na fabricação de panos para limpeza industrial e doméstica",
      heading: "Logística rápida e segura",
      subheading: "Frete para todas as regiões do Brasil.",  
      className: "slide-text-3",
      button_1: "Sobre nós",
      button_2: "Formulário",
      link_1: "/pages/sobre.html",
      link_2: "/pages/contato.html",
    },
  ];
  
  // Seleciona a seção do slide
  const slideHome = document.querySelector(".slide-home");
  
  // Cria o container do Swiper
  const swiperContainer = document.createElement("div");
  swiperContainer.classList.add("swiper-container");
  
  // Cria o wrapper
  const swiperWrapper = document.createElement("div");
  swiperWrapper.classList.add("swiper-wrapper");
  
  // Adiciona os slides
  itemSlide.forEach((slide) => {
    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");
    
    swiperSlide.innerHTML = `
      <div class="slide-item">
        <img 
          src="${slide.image}"
          alt="${slide.alt}"
          title="${slide.title}"
          class="img-slide"
          loading="lazy"
        >
        <div class="${slide.className}">
          ${slide.id === 2 ? `
            <div class="slide-content-custom">
              <h2>${slide.heading}</h2>
              <div class="slide-section">
                <h3>Comercial</h3>
                <p>Orçamento de produtos, dúvidas, avaliação.</p>
                <div class="area-button-slide">
                  <button><a href="${slide.link_1}">${slide.button_1}</a></button>
                </div>
              </div>
            </div>
          ` : `
            <h2>${slide.heading || ''}</h2>
            <h3>${slide.subheading || ''}</h3>
            ${slide.button_1 && slide.button_2 ? `
              <div class="area-button-slide">
                <button><a href="${slide.link_1}">${slide.button_1}</a></button>
                <button><a href="${slide.link_2}">${slide.button_2}</a></button>
              </div>
            ` : ''}
          `}
        </div>
      </div>
    `;
    
    swiperWrapper.appendChild(swiperSlide);
  });
  
  // Adiciona os botões e paginação
  //const swiperPagination = document.createElement("div");
  //swiperPagination.classList.add("swiper-pagination");
  
  const swiperNext = document.createElement("div");
  swiperNext.classList.add("swiper-button-next");
  
  const swiperPrev = document.createElement("div");
  swiperPrev.classList.add("swiper-button-prev");
  
  // Monta a estrutura do Swiper
  swiperContainer.appendChild(swiperWrapper);
  //swiperContainer.appendChild(swiperPagination);
  swiperContainer.appendChild(swiperNext);
  swiperContainer.appendChild(swiperPrev);
  
  // Adiciona ao DOM
  slideHome.appendChild(swiperContainer);
  
  // Inicializa o SwiperJS
  window.addEventListener("load", () => {
    const swiper = new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      autoplay: {
        delay: 10000,
      },
    });
  });


////////////////////////////////////////////// ANIMAÇÕES /////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  //Seleciona os slides
  const slides = document.querySelectorAll(".slide-text-1, .slide-text-2, .slide-text-3");
  const slidesAndContent = document.querySelectorAll(`
    .slide-text-1 h2,
    .slide-text-2 h2,
    .slide-content-custom .slide-section,
    .slide-text-3 h2,
    .slide-text-3 h3,
    .slide-text-3 .area-button-slide button:nth-child(1),
    .slide-text-3 .area-button-slide button:nth-child(2)
  `);

  //Config do IntersectionObserver
  const observerOptions = {
    root: null, // Usa o vw como referência
    threshold: 0.25, // Ativa com 25% do slide visivel
  }

  //Função do callback do IntersectionObserver
  const observerCallback = (entries) => {
      entries.forEach((entry) => {
          const target = entry.target;

          if(entry.isIntersecting){
              //Adiciona a classe de animação quando o slide entra no vw
              target.classList.add("visible");
          }else{
              target.classList.remove("visible");
          }
      });
  }
  //Cria o IntersectionObserver
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  //Observa os slides
  slides.forEach((slide) => {
    observer.observe(slide);
  });

  slidesAndContent.forEach((element) => {
    observer.observe(element);
  });


    //SEÇÃO PÁGINA HOME
    //CONTENTS
    const img_content_home = document.querySelector(".img-content-home");
    const text_content_home = document.querySelector(".animate-text-home");
    const div_contact_home_h2 = document.querySelector(".div-contact-home h2");
    const div_contact_home_p = document.querySelector(".div-contact-home p");
    const div_contact_home_div = document.querySelector(".div-contact-home div");

    
    //Define o limite (threshould) como 10% da altura da janela
    const threshould = window.innerHeight * 0.25;

    //Função para verificar a visiblidade dos elementos na tela
    const checkVisibility = () => {
      //PÁGINA HOME
      const img_content_home_Position = img_content_home.getBoundingClientRect();
      const text_content_home_Position = text_content_home.getBoundingClientRect();
      const div_contact_home_h2_Position = div_contact_home_h2.getBoundingClientRect();
      const div_contact_home_p_Position = div_contact_home_p.getBoundingClientRect();
      const div_contact_home_div_Position = div_contact_home_div.getBoundingClientRect();
      
      //Verifica se o elemento está visivel na tela
      // Home page
      if(img_content_home_Position.top < window.innerHeight - threshould &&
          img_content_home_Position.bottom > 0
      ){
          img_content_home.classList.add("visible");
      } else{
          img_content_home.classList.remove("visible");
      }
      //////////////////////////////
      if(text_content_home_Position.top < window.innerHeight - threshould &&
          text_content_home_Position.bottom > 0
      ){
          text_content_home.classList.add("visible");
      } else{
          text_content_home.classList.remove("visible");
      }
      //////////////////////////////
      if(div_contact_home_h2_Position.top < window.innerHeight - threshould &&
          div_contact_home_h2_Position.bottom > 0
      ){
          div_contact_home_h2.classList.add("visible");
      } else{
          div_contact_home_h2.classList.remove("visible");
      }
      //////////////////////////////
      if(div_contact_home_p_Position.top < window.innerHeight - threshould &&
          div_contact_home_p_Position.bottom > 0
      ){
          div_contact_home_p.classList.add("visible");
      } else{
          div_contact_home_p.classList.remove("visible");
      }
      //////////////////////////////
      if(div_contact_home_div_Position.top < window.innerHeight - threshould &&
          div_contact_home_div_Position.bottom > 0
      ){
          div_contact_home_div.classList.add("visible");
      } else{
          div_contact_home_div.classList.remove("visible");
      }
      // Home page            
    };
    //Chama a função na rolagem e ao carregar a página
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
////////////////////////////////////////////// ANIMAÇÕES /////////////////////////////////////////////////////