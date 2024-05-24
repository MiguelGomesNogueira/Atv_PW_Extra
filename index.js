document.addEventListener('DOMContentLoaded', () => {
    const createHeader = () => {
      const header = document.querySelector('header');
      const titleLink = document.createElement('a');
      titleLink.href = './index.html';
  
      const title = document.createElement('h1');
      title.textContent = 'Squirtle';
  
      titleLink.appendChild(title);
      header.appendChild(titleLink);
    };
  
    const createNav = () => {
      const nav = document.querySelector('nav');
      const navList = document.createElement('ul');
  
      const links = [
        { href: '#info-squirtle', text: 'Informações sobre Squirtle' },
        { href: '#caracteristicas', text: 'Características' },
        { href: '#curiosidades', text: 'Curiosidades' },
        { href: '#artigo-squirtle', text: 'Artigo sobre Squirtle' },
        { href: '#recursos', text: 'Recursos Adicionais' },
        { href: '#evolucao', text: 'Evolução' },
        { href: './pages/pokemon/index.html?name=wartortle', text: 'pokemao' }
      ];
  
      links.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.textContent = link.text;
        listItem.appendChild(anchor);
        navList.appendChild(listItem);
      });
  
      nav.appendChild(navList);
    };
  
    const createMain = () => {
      const main = document.querySelector('main');
  
      const sections = [
        {
          id: 'info-squirtle',
          label: 'Informações sobre Squirtle',
          content: `
            <div>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="Squirtle 1" />
              <img src="https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png" alt="Squirtle 2" />
            </div>
            <p>Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.</p>
          `
        },
        {
          id: 'caracteristicas',
          label: 'Características',
          content: `
            <p>Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.</p>
          `
        },
        {
          id: 'curiosidades',
          label: 'Curiosidades',
          content: `
            <ul>
              <li>Squirtle é um dos Pokémon mais populares e adoráveis.</li>
              <li>Seu nome deriva das palavras "squirrel" (esquilo) e "turtle" (tartaruga).</li>
              <li>Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon.</li>
            </ul>
          `
        },
        {
          id: 'artigo-squirtle',
          label: 'Squirtle: O Amigo Aquático',
          content: `
            <p>Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.</p>
            <p>Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.</p>
            <p>Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.</p>
          `
        },
        {
          id: 'recursos',
          label: 'Recursos Adicionais',
          content: `
            <ul>
              <li><a href="https://www.pokemon.com/br/pokedex/squirtle" target="_blank">Pokédex - Squirtle</a></li>
              <li><a href="https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)" target="_blank">Bulbapedia - Squirtle</a></li>
            </ul>
          `
        },
        {
          id: 'evolucao',
          label: 'Evoluções',
          content: `
            <ul>
              <li>
                <a href="./pages/pokemon/index.html?name=squirtle">
                  <figure>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" alt="Squirtle" />
                    <figcaption>1. Squirtle</figcaption>
                  </figure>
                </a>
              </li>
              <li>
                <a href="./pages/pokemon/index.html?name=wartortle">
                  <figure>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png" alt="Wartortle" />
                    <figcaption>2. Wartortle</figcaption>
                  </figure>
                </a>
              </li>
              <li>
                <a href="./pages/pokemon/index.html?name=blastoise">
                  <figure>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png" alt="Blastoise" />
                    <figcaption>3. Blastoise</figcaption>
                  </figure>
                </a>
              </li>
            </ul>
          `
        }
      ];
  
      sections.forEach(section => {
        const sectionElement = document.createElement('section');
        sectionElement.id = section.id;
        sectionElement.setAttribute('aria-labelledby', `${section.id}-label`);
  
        const heading = document.createElement('h2');
        heading.id = `${section.id}-label`;
        heading.textContent = section.label;
  
        sectionElement.appendChild(heading);
        sectionElement.insertAdjacentHTML('beforeend', section.content);
        main.appendChild(sectionElement);
      });
    };
  
    const createFooter = () => {
      const footer = document.querySelector('footer');
  
      const copyright = document.createElement('p');
      copyright.setAttribute('aria-label', 'Copyright');
      copyright.innerHTML = '&copy; 2024 Página do Pokémon Squirtle. Todos os direitos reservados.';
  
      const backToTop = document.createElement('p');
      const backToTopLink = document.createElement('a');
      backToTopLink.href = '#header';
      backToTopLink.textContent = 'Voltar para o topo';
      backToTop.appendChild(backToTopLink);
  
      const contactEmail = document.createElement('p');
      const emailLink = document.createElement('a');
      emailLink.href = 'mailto:contato@squirtlepage.com';
      emailLink.textContent = 'Contato via e-mail';
      contactEmail.appendChild(emailLink);
  
      const contactPhone = document.createElement('p');
      const phoneLink = document.createElement('a');
      phoneLink.href = 'tel:+5555555555';
      phoneLink.textContent = 'Telefone: (55) 5555-5555';
      contactPhone.appendChild(phoneLink);
  
      footer.appendChild(copyright);
      footer.appendChild(backToTop);
      footer.appendChild(contactEmail);
      footer.appendChild(contactPhone);
    };
  
    createHeader();
    createNav();
    createMain();
    createFooter();
  
    document.querySelector('footer a[href="#header"]').addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  