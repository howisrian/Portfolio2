const html = document.documentElement;
const header = document.querySelector('.header');
const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');
const navLinks = document.querySelectorAll('.navlist a');
const langButtons = document.querySelectorAll('.lang-btn');
const translatableNodes = document.querySelectorAll('[data-i18n]');

const translations = {
    pt: {
        'nav.about': 'Sobre',
        'nav.skills': 'Skills',
        'nav.projects': 'Projetos',
        'nav.experience': 'Experiência',
        'nav.contact': 'Contato',
        'header.cv': 'Currículo',
        'hero.eyebrow': 'Disponível para novas oportunidades',
        'hero.title': 'Desenvolvedor focado em <span>sistemas corporativos</span>, integrações e automação de processos.',
        'hero.text': 'Atuo com Protheus, ADVPL, Node.js, React, Python e SQL, desenvolvendo soluções que melhoram rotinas internas, reduzem trabalho manual e tornam o ambiente mais eficiente para o negócio.',
        'hero.ctaProjects': 'Ver projetos',
        'hero.ctaResume': 'Baixar currículo',
        'hero.cardRole': 'Desenvolvedor Protheus | Node | React | SQL',
        'hero.metric1': 'de experiência em TI',
        'hero.metric2': 'visão técnica e de negócio',
        'hero.metric3Title': 'Integrações',
        'hero.metric3': 'REST, SQL, automações',
        'hero.metric4Title': 'Projetos reais',
        'hero.metric4': 'aplicados ao ambiente corporativo',
        'about.tag': 'Sobre',
        'about.title': 'Perfil profissional',
        'about.p1': 'Sou desenvolvedor com experiência em customizações no ERP Protheus, integrações entre sistemas, automações internas e desenvolvimento web. Trabalho com foco em solução prática, melhoria de processo, estabilidade e entrega com impacto direto na operação.',
        'about.p2': 'Tenho atuação nos módulos Financeiro, Compras, Gestão de Pessoal e Manutenção de Ativos, além de vivência com SQL, relatórios, APIs e apoio a iniciativas de BI e analytics.',
        'about.card1Title': 'Desenvolvimento',
        'about.card1Text': 'Rotinas ADVPL, APIs, aplicações web e automações voltadas ao contexto corporativo.',
        'about.card2Title': 'Integrações',
        'about.card2Text': 'Integração entre ERP, banco de dados, serviços REST e processos internos.',
        'about.card3Title': 'Dados e processos',
        'about.card3Text': 'Consultas SQL, relatórios gerenciais e melhoria contínua de fluxos operacionais.',
        'skills.tag': 'Skills',
        'skills.title': 'Tecnologias e especialidades',
        'skills.group1': 'ERP & Back-end',
        'skills.group2': 'Front-end',
        'skills.group3': 'Banco de dados & BI',
        'skills.group4': 'Entrega & processo',
        'skills.integrations': 'Integrações',
        'skills.responsive': 'Interfaces responsivas',
        'skills.ux': 'UX funcional',
        'skills.sqlqueries': 'Consultas SQL',
        'skills.optimization': 'Otimização',
        'skills.reports': 'Relatórios',
        'skills.testing': 'Testes',
        'skills.docs': 'Documentação',
        'skills.support': 'Suporte técnico',
        'skills.requirements': 'Levantamento de requisitos',
        'skills.improvement': 'Melhoria de processos',
        'projects.tag': 'Projetos',
        'projects.title': 'Projetos que fortalecem o perfil para entrevista',
        'projects.subtitle': 'Cada card abaixo já ficou com espaço reservado para você adicionar print do sistema e complementar a stack usada no projeto.',
        'projects.image1Title': 'Adicionar print do projeto',
        'projects.image1Text': 'Espaço reservado para imagem, dashboard ou tela principal',
        'projects.highlight': 'Projeto destaque',
        'projects.corporate': 'Corporativo',
        'projects.xilo.desc': 'Sistema voltado ao controle de ativos, histórico de manutenção, geração de etiquetas com QR Code, leitura por câmera e consulta de documentação técnica integrada ao ambiente corporativo.',
        'projects.delivered': 'O que entreguei',
        'projects.xilo.item1': 'Fluxo de consulta e gestão de ativos',
        'projects.xilo.item2': 'Geração e leitura de QR Code',
        'projects.xilo.item3': 'Integração com banco SQL Server / Protheus',
        'projects.xilo.item4': 'Estrutura para visualização de documentos do ativo',
        'projects.stackUsed': 'Stack usada',
        'projects.addStack': '+ adicione mais stacks aqui',
        'projects.image2Title': 'Adicionar print do SIN ERP',
        'projects.fullstack': 'Projeto full stack',
        'projects.sin.desc': 'ERP em evolução com módulos administrativos, autenticação, cadastros, movimentações e estrutura preparada para crescimento por rotinas e módulos.',
        'projects.image3Title': 'Adicionar print da rotina',
        'projects.erp': 'Projeto ERP',
        'projects.protheus.title': 'Customizações Protheus',
        'projects.protheus.desc': 'Desenvolvimento de rotinas personalizadas em ADVPL para validações, automações, melhorias operacionais, integrações e adequações de processos internos.',
        'projects.image4Title': 'Adicionar print do projeto',
        'projects.web': 'Projeto web',
        'projects.menu.title': 'Sistema de Cardápio',
        'projects.menu.desc': 'Aplicação para consulta de cardápio com fluxo administrativo para cadastro, edição e organização dos pratos por data, facilitando a manutenção do conteúdo.',
        'experience.tag': 'Experiência',
        'experience.title': 'Trajetória profissional',
        'experience.job1Period': 'Fev 2025 — Atual',
        'experience.job1Title': 'Desenvolvedor | Xilolite S/A',
        'experience.job1Desc': 'Desenvolvimento e manutenção de rotinas no Protheus, testes, análise de requisitos, documentação, suporte técnico e participação em melhorias e automações de processos internos.',
        'experience.job2Period': 'Mai 2024 — Fev 2025',
        'experience.job2Title': 'Assistente Administrativo TI | Xilolite S/A',
        'experience.job2Desc': 'Apoio à operação de TI, suporte aos usuários, organização de demandas e participação na sustentação do ambiente.',
        'experience.job3Period': 'Mai 2023 — Mai 2024',
        'experience.job3Title': 'Jovem Aprendiz — Setor de TI | Xilolite S/A',
        'experience.job3Desc': 'Suporte técnico inicial, atendimento interno e evolução prática no ambiente corporativo de tecnologia.',
        'contact.tag': 'Contato',
        'contact.title': 'Vamos conversar',
        'contact.text': 'Caso tenha uma oportunidade alinhada com desenvolvimento, ERP, integrações ou projetos full stack, estou aberto para conversar.',
        'footer.text': '© 2026 Rian Santos. Portfólio atualizado para apresentação profissional.'
    },
    en: {
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',
        'header.cv': 'Resume',
        'hero.eyebrow': 'Open to new opportunities',
        'hero.title': 'Developer focused on <span>enterprise systems</span>, integrations and process automation.',
        'hero.text': 'I work with Protheus, ADVPL, Node.js, React, Python and SQL, building solutions that improve internal routines, reduce manual work and make operations more efficient for the business.',
        'hero.ctaProjects': 'View projects',
        'hero.ctaResume': 'Download resume',
        'hero.cardRole': 'Protheus Developer | Node | React | SQL',
        'hero.metric1': 'of IT experience',
        'hero.metric2': 'technical and business mindset',
        'hero.metric3Title': 'Integrations',
        'hero.metric3': 'REST, SQL, automations',
        'hero.metric4Title': 'Real projects',
        'hero.metric4': 'applied in corporate environments',
        'about.tag': 'About',
        'about.title': 'Professional profile',
        'about.p1': 'I am a developer with experience in Protheus ERP customizations, system integrations, internal automations and web development. I focus on practical solutions, process improvement, stability and deliveries with direct operational impact.',
        'about.p2': 'I have worked across Finance, Purchasing, HR and Asset Maintenance modules, as well as SQL, reports, APIs and support for BI and analytics initiatives.',
        'about.card1Title': 'Development',
        'about.card1Text': 'ADVPL routines, APIs, web applications and automations for corporate scenarios.',
        'about.card2Title': 'Integrations',
        'about.card2Text': 'Integration across ERP, databases, REST services and internal processes.',
        'about.card3Title': 'Data and processes',
        'about.card3Text': 'SQL queries, management reports and continuous improvement of operational flows.',
        'skills.tag': 'Skills',
        'skills.title': 'Technologies and specialties',
        'skills.group1': 'ERP & Back-end',
        'skills.group2': 'Front-end',
        'skills.group3': 'Databases & BI',
        'skills.group4': 'Delivery & process',
        'skills.integrations': 'Integrations',
        'skills.responsive': 'Responsive interfaces',
        'skills.ux': 'Functional UX',
        'skills.sqlqueries': 'SQL queries',
        'skills.optimization': 'Optimization',
        'skills.reports': 'Reports',
        'skills.testing': 'Testing',
        'skills.docs': 'Documentation',
        'skills.support': 'Technical support',
        'skills.requirements': 'Requirements gathering',
        'skills.improvement': 'Process improvement',
        'projects.tag': 'Projects',
        'projects.title': 'Projects that strengthen my interview profile',
        'projects.subtitle': 'Each card below already has dedicated space for a project screenshot and for expanding the stack used in the project.',
        'projects.image1Title': 'Add project screenshot',
        'projects.image1Text': 'Reserved space for image, dashboard or main screen',
        'projects.highlight': 'Featured project',
        'projects.corporate': 'Corporate',
        'projects.xilo.desc': 'A system focused on asset control, maintenance history, QR code label generation, camera scanning and technical documentation lookup integrated with the corporate environment.',
        'projects.delivered': 'What I delivered',
        'projects.xilo.item1': 'Asset search and management flow',
        'projects.xilo.item2': 'QR code generation and scanning',
        'projects.xilo.item3': 'Integration with SQL Server / Protheus',
        'projects.xilo.item4': 'Structure for viewing asset documents',
        'projects.stackUsed': 'Stack used',
        'projects.addStack': '+ add more stacks here',
        'projects.image2Title': 'Add SIN ERP screenshot',
        'projects.fullstack': 'Full stack project',
        'projects.sin.desc': 'An ERP in evolution with administrative modules, authentication, records, transactions and a structure prepared to grow through modules and routines.',
        'projects.image3Title': 'Add routine screenshot',
        'projects.erp': 'ERP project',
        'projects.protheus.title': 'Protheus Customizations',
        'projects.protheus.desc': 'Development of custom ADVPL routines for validations, automations, operational improvements, integrations and adjustments to internal processes.',
        'projects.image4Title': 'Add project screenshot',
        'projects.web': 'Web project',
        'projects.menu.title': 'Menu Management System',
        'projects.menu.desc': 'An application for menu viewing with an administrative flow for registering, editing and organizing dishes by date, making content maintenance easier.',
        'experience.tag': 'Experience',
        'experience.title': 'Professional journey',
        'experience.job1Period': 'Feb 2025 — Present',
        'experience.job1Title': 'Developer | Xilolite S/A',
        'experience.job1Desc': 'Development and maintenance of Protheus routines, testing, requirements analysis, documentation, technical support and participation in process improvements and automation initiatives.',
        'experience.job2Period': 'May 2024 — Feb 2025',
        'experience.job2Title': 'IT Administrative Assistant | Xilolite S/A',
        'experience.job2Desc': 'Support for daily IT operations, user assistance, demand organization and participation in sustaining the environment.',
        'experience.job3Period': 'May 2023 — May 2024',
        'experience.job3Title': 'IT Apprentice | Xilolite S/A',
        'experience.job3Desc': 'Initial technical support, internal assistance and practical growth in a corporate technology environment.',
        'contact.tag': 'Contact',
        'contact.title': "Let's talk",
        'contact.text': 'If you have an opportunity related to development, ERP, integrations or full stack projects, I am open to connect.',
        'footer.text': '© 2026 Rian Santos. Portfolio updated for a stronger professional presentation.'
    }
};

const setThemeAutomatically = () => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const applyTheme = () => {
        html.setAttribute('data-theme', media.matches ? 'dark' : 'light');
    };

    applyTheme();

    if (typeof media.addEventListener === 'function') {
        media.addEventListener('change', applyTheme);
    } else if (typeof media.addListener === 'function') {
        media.addListener(applyTheme);
    }
};

const updateLanguageButtons = (lang) => {
    langButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.lang === lang);
    });
};

const applyLanguage = (lang) => {
    const selectedLanguage = translations[lang] ? lang : 'pt';

    translatableNodes.forEach((node) => {
        const key = node.dataset.i18n;
        const text = translations[selectedLanguage][key];

        if (!text) return;

        node.innerHTML = text;
    });

    document.documentElement.lang = selectedLanguage === 'pt' ? 'pt-BR' : 'en';
    document.title = selectedLanguage === 'pt'
        ? 'Rian Santos | Desenvolvedor Protheus, Node, React e SQL'
        : 'Rian Santos | Protheus, Node, React and SQL Developer';

    const description = document.querySelector('meta[name="description"]');
    description.setAttribute(
        'content',
        selectedLanguage === 'pt'
            ? 'Portfólio de Rian Santos, desenvolvedor com experiência em Protheus, ADVPL, Node.js, React, Python e SQL, com foco em automações, integrações e sistemas corporativos.'
            : 'Portfolio of Rian Santos, a developer with experience in Protheus, ADVPL, Node.js, React, Python and SQL, focused on automation, integrations and enterprise systems.'
    );

    updateLanguageButtons(selectedLanguage);
    localStorage.setItem('portfolio-language', selectedLanguage);
};

langButtons.forEach((button) => {
    button.addEventListener('click', () => {
        applyLanguage(button.dataset.lang);
    });
});

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 10);
});

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
    });
});

window.addEventListener('scroll', () => {
    let current = '';

    document.querySelectorAll('section[id]').forEach((section) => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.14
});

const revealSections = document.querySelectorAll('.reveal');
revealSections.forEach((section) => revealObserver.observe(section));

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

const browserLanguage = navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'pt';
const storedLanguage = localStorage.getItem('portfolio-language') || browserLanguage;

setThemeAutomatically();
applyLanguage(storedLanguage);
