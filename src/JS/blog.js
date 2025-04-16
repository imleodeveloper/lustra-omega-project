
//OBJETOS DOS POSTS

const posts = [
    {
        id: 1,
        title: "Soluções para limpezas industriais",
        date: "02/04/2025",
        author: "Lustra Ômega",
        img: "/public/imgs-blog/img-item-1.webp",
        link: "/blog/solucoes-para-limpezas-industriais.html",
        description: "A limpeza industrial exige eficiência e os produtos certos para garantir um ambiente seguro e produtivo. Descubra soluções inovadoras que facilitam a remoção de sujeira pesada, otimizam processos e reduzem impactos ambientais. Confira as melhores opções para a sua empresa...",
    },
    {
        id: 2,
        title: "Como escolher o melhor desengraxante industrial?",
        date: "02/04/2025",
        img: "/public/imgs-blog/img-item-2.webp",
        author: "Lustra Ômega",
        link: "/blog/como-escolher-o-melhor-desengraxante.html",
        description: "Os desengraxantes industriais desempenham um papel fundamental na remoção de óleos, graxas, fuligem e sujeiras pesadas em ambientes industriais. Utilizados em setores como metalurgia, automotivo e petroquímico, esses produtos garantem uma limpeza eficaz sem comprometer superfícies sensíveis. No entanto, para escolher o desengraxante ideal, é essencial considerar fatores como...",
    },
    {
        id: 3,
        title: "EPI's para limpeza industrial: segurança e eficiência no ambiente de trabalho",
        date: "02/04/2025",
        img: "/public/imgs-blog/img-item-3.webp",
        author: "Lustra Ômega",
        link: "/blog/epis-para-limpeza-industrial.html",
        description: "A limpeza industrial exige não apenas eficiência, mas também segurança para os trabalhadores envolvidos. O uso de Equipamentos de Proteção Individual (EPIs) é fundamental para prevenir acidentes e proteger contra produtos químicos, poeiras e agentes contaminantes. Entre os principais EPIs utilizados estão luvas resistentes a produtos químicos, máscaras de proteção respiratória, óculos de segurança e aventais impermeáveis...",
    },
    {
        id: 4,
        title: "O papel dos panos de limpeza industrial na otimização dos processos",
        date: "02/04/2025",
        img: "/public/imgs-blog/img-item-4.webp",
        author: "Lustra Ômega",
        link: "/blog/o-papel-dos-panos-de-limpeza-industrial.html",
        description: "Os panos de limpeza industrial são essenciais para manter máquinas, ferramentas e superfícies livres de sujeira, óleo e resíduos. Diferentes tipos de panos podem ser utilizados dependendo da necessidade, como panos de algodão reutilizáveis, flanelas, estopas e tecidos sintéticos de alta absorção...",
    },
    {
        id: 5,
        title: "Absorventes industriais: a solução para conter vazamentos de óleos e químicos",
        date: "02/04/2025",
        img: "/public/imgs-blog/img-item-5.webp",
        author: "Lustra Ômega",
        link: "/blog/absorventes-industriais.html",
        description: "Os absorventes industriais são fundamentais para conter vazamentos de óleos, produtos químicos e líquidos industriais, evitando contaminações e garantindo um ambiente de trabalho seguro. Esses materiais incluem almofadas, mantas e barreiras absorventes que podem ser utilizadas em diferentes setores, desde oficinas mecânicas até fábricas químicas. Além de prevenir acidentes e impactos ambientais...",
    },
    {
        id: 6,
        title: "Produtos ecológicos e boas práticas",
        date: "02/04/2025",
        img: "/public/imgs-blog/img-item-6.webp",
        author: "Lustra Ômega",
        link: "/blog/produtos-ecologicos.html",
        description: "A preocupação com o meio ambiente tem levado muitas empresas a adotarem práticas sustentáveis na limpeza industrial. O uso de produtos biodegradáveis, panos reutilizáveis e sistemas de reutilização de água são algumas das alternativas para reduzir o impacto ambiental sem comprometer a eficiência. Investir em treinamentos para os funcionários sobre o uso correto dos produtos e a destinação adequada dos resíduos contribui para um ambiente de trabalho mais... ",
    },
]

//Renderiza as miniaturas
function renderPosts(){
    const content = document.querySelector(".content");
    content.innerHTML = ``;

    posts.forEach(post => {
        const itemBlog = document.createElement("div");
        itemBlog.classList.add("item-blog");

        itemBlog.innerHTML = `
            <span class="img-item">
                <div>
                    <img src="${post.img}" alt="Imagem ilustrativa feita por IA - Lustra Ômega">
                    <img src="../../public/logo_lustra_white.png" alt="Logo com letras brancas - Lustra Ômega" class="logo-item">
                </div>
                <p>Por ${post.author} | ${post.date} | Blog</p>
            </span>
            <span class="text-item">
                <h2><a href="${post.link}">${post.title}</a></h2>
                <p>
                    ${post.description}
                </p>
            </span>
            <span class="links-item">
                <button><a href="${post.link}">Leia mais</a></button>
            </span>
        `;

        content.appendChild(itemBlog);
    }); 

}

document.addEventListener("DOMContentLoaded", renderPosts);




// Objeto das page de cada post
const fullPosts = [
    {
        id: 1,
        title: "Soluções para limpezas industriais",
        subtitle: "Sustentabilidade na limpeza industrial",
        date: "02/04/2025",
        author: "Lustra Ômega",
        img: "/public/imgs-blog/img-item-1.webp",
        link: "/blog/solucoes-para-limpezas-industriais.html",
        description: `
    
            <p><strong>A limpeza industrial</strong> desempenha um papel fundamental na manutenção da qualidade, segurança e eficiência dos processos produtivos. Com o avanço da tecnologia, novas soluções têm surgido para otimizar esse trabalho, garantindo maior produtividade e sustentabilidade.</p>
    
            <h3>🌱 <strong>Produtos inovadores e sustentáveis</strong></h3>
            <p>O setor industrial está cada vez mais atento à necessidade de minimizar impactos ambientais. Dessa forma, diversas empresas estão investindo em <strong>produtos biodegradáveis</strong> e <strong>soluções que reduzem o consumo</strong> de água e produtos químicos agressivos.</p>
    
            <ul>
                <li><strong>Desengraxantes ecológicos</strong> que substituem solventes químicos agressivos.</li>
                <li><strong>Panos de limpeza reutilizáveis</strong>, reduzindo o desperdício.</li>
                <li><strong>Equipamentos</strong> que otimizam o consumo de produtos e evitam desperdícios.</li>
            </ul>
    
            <h3>🔬 <strong>A tecnologia como aliada</strong></h3>
            <p>O uso de <strong>equipamentos modernos</strong> tem permitido uma limpeza mais eficiente e com menor esforço. Alguns exemplos incluem:</p>
    
            <ul>
                <li><strong>Lavadoras de alta pressão</strong> para remoção de sujeira pesada.</li>
                <li><strong>Equipamentos ultrassônicos</strong> para limpeza de peças industriais.</li>
                <li><strong>Robôs autônomos</strong> para higienização de grandes áreas.</li>
            </ul>
    
            <h3>📊 <strong>Benefícios da inovação na limpeza industrial</strong></h3>
            <p>A adoção de <strong>novas tecnologias</strong> e <strong>produtos inovadores</strong> traz diversas vantagens para as indústrias, como:</p>
    
            <ul>
                <li><strong>Redução de custos</strong> com produtos de limpeza e mão de obra.</li>
                <li><strong>Maior segurança</strong> para os trabalhadores ao minimizar o contato com produtos químicos perigosos.</li>
                <li><strong>Conformidade com normas ambientais</strong> e de segurança do trabalho.</li>
            </ul>
    
            <p>As <strong>inovações na limpeza industrial</strong> representam um avanço importante para diversos setores. Investir em <strong>soluções modernas e sustentáveis</strong> não apenas melhora a eficiência dos processos, mas também demonstra o compromisso da empresa com o meio ambiente e a segurança dos colaboradores.</p>
    
            <p><strong>Quer saber mais</strong> sobre como otimizar a limpeza na sua empresa? Entre em contato conosco e conheça nossas <strong>soluções especializadas</strong>! 🚀</p> 
        `,
    },
    {
        id: 2,
        title: "Como escolher o melhor desengraxante industrial?",
        subtitle: "Eficiência na limpeza sem comprometer superfícies",
        date: "03/04/2025",
        img: "/public/imgs-blog/img-item-2.webp",
        author: "Lustra Ômega",
        link: "/blog/como-escolher-o-melhor-desengraxante.html",
        description: `
            <p>A limpeza industrial exige produtos altamente eficazes para a remoção de sujeira pesada, óleos e graxas. 
            Nesse contexto, os <strong>desengraxantes industriais</strong> desempenham um papel essencial na manutenção 
            de equipamentos e superfícies. Porém, para obter os melhores resultados, é necessário entender qual é 
            o produto mais adequado para cada tipo de aplicação.</p>

            <h3>🛠️ Tipos de desengraxantes industriais</h3>
            <ul>
                <li><strong>Base solvente:</strong> Indicado para remoção de graxas espessas e resíduos industriais pesados.</li>
                <li><strong>Base aquosa:</strong> Mais ecológico e seguro, ideal para superfícies sensíveis e áreas ventiladas.</li>
                <li><strong>Biodegradável:</strong> Opção sustentável para empresas preocupadas com o meio ambiente.</li>
            </ul>

            <h3>🔍 Como escolher o desengraxante ideal?</h3>
            <p>Na hora de escolher o melhor desengraxante industrial, leve em consideração os seguintes aspectos:</p>
            <ol>
                <li><strong>Tipo de sujeira:</strong> Graxas leves ou resíduos químicos exigem soluções diferentes.</li>
                <li><strong>Material da superfície:</strong> Produtos agressivos podem danificar metais ou plásticos.</li>
                <li><strong>Impacto ambiental:</strong> Prefira desengraxantes biodegradáveis sempre que possível.</li>
                <li><strong>Segurança:</strong> Considere a toxicidade do produto e a necessidade de EPI’s na aplicação.</li>
            </ol>

            <p>Independentemente do setor industrial, contar com o desengraxante certo significa mais eficiência, segurança e 
            conservação dos equipamentos. Avalie as opções disponíveis e faça a melhor escolha para sua empresa!</p>
        `,
    },
    {
        id: 3,
        title: "EPI's para limpeza industrial: segurança e eficiência no ambiente de trabalho",
        subtitle: "Proteção essencial para um ambiente seguro e produtivo",
        date: "03/04/2025",
        img: "/public/imgs-blog/img-item-3.webp",
        author: "Lustra Ômega",
        link: "/blog/epis-para-limpeza-industrial.html",
        description: `
            <p>A <strong>limpeza industrial</strong> envolve a manipulação de produtos químicos, equipamentos pesados 
            e superfícies contaminadas. Para garantir a segurança dos trabalhadores, o uso adequado de 
            <strong>Equipamentos de Proteção Individual (EPIs)</strong> é indispensável. Além de prevenir acidentes, 
            esses equipamentos proporcionam mais conforto e eficiência nas operações.</p>

            <h3>🛡️ Principais EPIs para limpeza industrial</h3>
            <ul>
                <li><strong>Luvas de proteção:</strong> Protegem contra produtos químicos, cortes e abrasões.</li>
                <li><strong>Máscaras respiratórias:</strong> Filtram partículas tóxicas, vapores químicos e poeiras.</li>
                <li><strong>Óculos de segurança:</strong> Evitam contato direto de produtos químicos com os olhos.</li>
                <li><strong>Aventais impermeáveis:</strong> Protegem o corpo contra respingos de líquidos perigosos.</li>
                <li><strong>Botas antiderrapantes:</strong> Reduzem o risco de quedas em pisos úmidos ou oleosos.</li>
            </ul>

            <h3>⚠️ Por que o uso correto dos EPIs é essencial?</h3>
            <p>Trabalhadores expostos a agentes químicos e biológicos correm sérios riscos de intoxicação, queimaduras 
            e irritações. O uso inadequado ou a falta de EPIs pode resultar em acidentes graves, afastamentos e até 
            processos trabalhistas. Por isso, as empresas devem:</p>
            <ol>
                <li><strong>Fornecer EPIs de qualidade:</strong> Equipamentos certificados garantem mais segurança.</li>
                <li><strong>Treinar os funcionários:</strong> Ensinar a maneira correta de utilizar e conservar os EPIs.</li>
                <li><strong>Fiscalizar o uso diário:</strong> Implementar medidas para garantir a adesão dos trabalhadores.</li>
            </ol>

            <p>Garantir a segurança na limpeza industrial não é apenas uma questão de cumprimento de normas, 
            mas sim um compromisso com a vida e o bem-estar dos trabalhadores. Invista nos EPIs certos e 
            promova um ambiente de trabalho mais seguro e eficiente! 💪</p>
        `,
    },
    {
        id: 4,
        title: "O papel dos panos de limpeza industrial na otimização dos processos",
        subtitle: "Eficiência e economia na manutenção",
        date: "03/04/2025",
        img: "/public/imgs-blog/img-item-4.webp",
        author: "Lustra Ômega",
        link: "/blog/o-papel-dos-panos-de-limpeza-industrial.html",
        description: `
            <p>Manter a <strong>limpeza industrial</strong> é essencial para garantir o bom funcionamento de máquinas, 
            ferramentas e ambientes de trabalho. Entre os principais itens utilizados para essa finalidade estão 
            os <strong>panos de limpeza</strong>, que desempenham um papel fundamental na remoção de sujeira, óleos e 
            resíduos industriais.</p>

            <h3>🧽 Tipos de panos de limpeza e suas aplicações</h3>
            <p>A escolha do pano adequado pode impactar diretamente na eficiência da limpeza e na economia 
            dos recursos. Conheça os principais tipos:</p>
            <ul>
                <li><strong>Panos de algodão reutilizáveis:</strong> Absorventes e duráveis, ideais para múltiplas utilizações.</li>
                <li><strong>Flanelas:</strong> Suaves e eficazes para polimento e remoção de poeira.</li>
                <li><strong>Estopas industriais:</strong> Utilizadas em limpezas pesadas, especialmente na remoção de óleos e graxas.</li>
                <li><strong>Tecidos sintéticos de alta absorção:</strong> Alternativa moderna para processos que exigem máxima eficiência.</li>
            </ul>

            <h3>🚀 Como os panos de limpeza otimizam processos?</h3>
            <p>O uso correto dos panos de limpeza pode trazer benefícios como:</p>
            <ol>
                <li><strong>Redução de custos:</strong> Utilizar panos reutilizáveis diminui o desperdício de material.</li>
                <li><strong>Maior eficiência:</strong> Materiais específicos garantem uma limpeza mais rápida e eficaz.</li>
                <li><strong>Segurança no ambiente:</strong> Manter áreas e equipamentos livres de resíduos previne acidentes.</li>
            </ol>

            <h3>♻️ Sustentabilidade na limpeza industrial</h3>
            <p>Empresas comprometidas com a sustentabilidade podem optar por panos ecológicos e reutilizáveis. 
            Além disso, a reciclagem de tecidos e a substituição de materiais descartáveis por alternativas duráveis 
            são medidas que reduzem o impacto ambiental.</p>

            <p>Investir na escolha certa de <strong>panos de limpeza</strong> é uma estratégia simples, mas essencial 
            para otimizar processos industriais, reduzir desperdícios e garantir um ambiente de trabalho mais 
            seguro e eficiente. Faça a escolha certa e veja a diferença na produtividade da sua empresa! 💡</p>
        `,
    },
    {
        id: 5,
        title: "Absorventes industriais: a solução para conter vazamentos de óleos e químicos",
        subtitle: "Evite contaminações e mantenha seu ambiente seguro",
        date: "02/04/2025",
        img: "/public/imgs-blog/img-item-5.webp",
        author: "Lustra Ômega",
        link: "/blog/absorventes-industriais.html",
        description: `
           <p>Os <strong>absorventes industriais</strong> são fundamentais para conter vazamentos de óleos, produtos químicos e líquidos industriais, 
            evitando contaminações e garantindo um ambiente de trabalho seguro. Eles são especialmente projetados para absorver substâncias perigosas e minimizar riscos ambientais.</p>

            <h3>🛑 Tipos de absorventes industriais</h3>
            <ul>
                <li><strong>Mantas absorventes:</strong> Cobrem grandes áreas e absorvem líquidos rapidamente.</li>
                <li><strong>Almofadas absorventes:</strong> Ideais para locais com gotejamento constante.</li>
                <li><strong>Barreiras absorventes:</strong> Criam uma contenção eficiente para evitar a propagação de vazamentos.</li>
            </ul>

            <h3>🌱 Benefícios dos absorventes industriais</h3>
            <p>Além de prevenir acidentes e impactos ambientais, esses materiais ajudam as empresas a:</p>
            <ul>
                <li>Manter a conformidade com normas ambientais e de segurança.</li>
                <li>Reduzir riscos de escorregamento e incêndios causados por derramamentos.</li>
                <li>Facilitar a limpeza e manutenção de áreas industriais.</li>
            </ul>

            <p>Investir em absorventes industriais é uma medida essencial para a segurança no trabalho e a preservação do meio ambiente. 
            Conheça nossas soluções e proteja sua empresa! 💧🔒</p>
        `,
    },
    {
        id: 6,
        title: "Produtos ecológicos e boas práticas",
        subtitle: "Reduzindo impactos ambientais sem perder eficiência",
        date: "02/04/2025",
        img: "/public/imgs-blog/img-item-6.webp",
        author: "Lustra Ômega",
        link: "/blog/produtos-ecologicos.html",
        description: `
            <p>A preocupação com o meio ambiente tem levado muitas empresas a adotarem práticas <strong>sustentáveis na limpeza industrial</strong>. 
            Utilizar produtos ecológicos e adotar boas práticas pode reduzir impactos ambientais sem comprometer a eficiência.</p>

            <h3>🌍 Produtos de limpeza ecológicos</h3>
            <p>O mercado já oferece diversas alternativas sustentáveis, como:</p>
            <ul>
                <li><strong>Desengraxantes biodegradáveis:</strong> Removem sujeiras pesadas sem agredir o meio ambiente.</li>
                <li><strong>Panos reutilizáveis:</strong> Reduzem o desperdício e os custos operacionais.</li>
                <li><strong>Sistemas de reutilização de água:</strong> Diminuem o consumo hídrico nas indústrias.</li>
            </ul>

            <h3>🚀 Boas práticas sustentáveis</h3>
            <p>Além de utilizar produtos ecológicos, algumas atitudes fazem toda a diferença:</p>
            <ol>
                <li><strong>Treinamento de funcionários:</strong> Ensinar o uso correto dos produtos evita desperdícios.</li>
                <li><strong>Gestão de resíduos:</strong> Separar e descartar corretamente os resíduos minimiza impactos.</li>
                <li><strong>Uso eficiente de insumos:</strong> Evitar excessos garante economia e preservação ambiental.</li>
            </ol>

            <p>Adotar práticas sustentáveis é um diferencial competitivo para as empresas, além de contribuir para um planeta mais limpo. 
            Faça parte dessa mudança e implemente soluções ecológicas no seu negócio! 🌱✨</p>
        `,
    },
]

document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector(".content-post");

    if (!content) return; // Evita erro se o seletor não existir

    // Obtém o nome do arquivo da URL atual
    const currentPage = window.location.pathname.split("/").pop();

    // Busca o post correspondente
    const post = fullPosts.find(p => p.link.includes(currentPage));

    if (post) {

        //Troca a imagem do title
        document.querySelector(".blog-title-post").style.setProperty("--bg-image", `url(${post.img})`);
        const h1Title = document.querySelector(".title");
        h1Title.textContent = (`${post.title}`);

        // Insere o conteúdo do post na página
        const itemBlog = document.createElement("div");
        itemBlog.classList.add("item-blog-full");
        itemBlog.innerHTML = `
            <div class="author-item">
                <p>Data: ${post.date} | Autor: ${post.author}</p>
            </div>
            <div class="text-item">
                <h2>${post.subtitle}</h2>
                ${post.description}
            </div>

            
        `;
        content.appendChild(itemBlog);
        
    } else {
        // Caso não encontre o post
        content.innerHTML = "<p>Post não encontrado.</p>";
    }
});

//FUNÇÃO DE PESQUISA DO BOTÃO
function searchAndRedirect(searchTerm){
    const lowerSearchTerm = searchTerm.toLowerCase();

    const foundPost = fullPosts.find(post =>
        post.title.toLowerCase().includes(lowerSearchTerm) ||
        post.subtitle.toLowerCase().includes(lowerSearchTerm) ||
        post.description.toLowerCase().includes(lowerSearchTerm)
    );

    if(foundPost){
        window.location.href = foundPost.link;
    } else{
        alert("Nenhuma resultado encontrado!");
    }
}

function handleSearch(){
    const searchInput = document.getElementById("search-blog").value;
    if(searchInput.trim() !== ""){
        searchAndRedirect(searchInput);
    } else{
        alert("Digite algo para buscar!");
    }

}

document.getElementById("search-blog").addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        document.getElementById("search-button").click();
    }
})
