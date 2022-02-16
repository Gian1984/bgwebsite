import { createI18n } from 'vue-i18n'

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {
    en:{

      header:{
        button:'Get your free evaluation'
      },

      // HOME PAGE


      homeposts:{

        title:'Websites & Apps',
        subtitle:'We are a world class digital agency, who can develop a wide range of websites such as brochure, e-commerce and multilingual websites for B2B and B2C audiences. All the websites we create are responsive websites which automatically adjust to the device they are being viewed on. We create custom websites that are linked to a back end that can be easily updated by you or your team.',


        title1: 'Scoping',
        description1: 'Here we look at what is needed for the project. We start with an exploratory workshop to discover all the needs and assess your existing website. The workshop will include factors such as how you envisage the user journey? What is the objective of the site and the functionality required? What integrations are required? Once we have all the information we will set out a UX journey and create a full set of wireframes mapping out the user\'s journey around the site.',


        title2: 'Design',
        description2: 'Once we have understood all your wants and needs, we can start designing the website. In this phase, the wireframes start to take shape with design and colours. We use several tools so you will be able to see how the pages and design fits together and experience the site before it is built, in order to be fully happy before moving into the build phase.',


        title3: 'Development',
        description3: 'This is the largest phase. We will have various milestones and reviews throughout the process. A preview link is provided during the development stage so you can see the project come to life before final sign off.',


        title4: 'Brochure Websites',
        description4: 'We design and develop responsive brochure websites to showcase your products and services in alignment with your brand essence, your target audience and your preferences. Our websites follow the latest design trends to ensure they’re up to date for years to come.',


        title5: 'E-commerce Websites',
        description5: 'In addition to designing a beautiful, trendy and modern-looking website that fits with your brand, we will also take care of all technical aspects of the e-commerce side to ensure that everything works without issues. We can set up smooth payment systems, integrations and subscriptions.',

        title6: 'Multilingual Websites',
        description6: 'One of the perks of having an international team working is that we have over 3 native languages spoken in-house and therefore can provide you with multilingual websites if needed. Our multilingual websites will be able to allow users to change their languages for themselves.',

      },


      tech:{
        title:'Our technologies',
        subtitle:'The development of advanced web applications is our specialty, and we will successfully fulfill all your web application development requirements, from small-sized to wider-ranged projects. To maintain and improve our high-quality web apps, we have expertise in various web development technologies.',
      },


      homefeatures:{

        titleover:'EVERYTHING YOU NEED',
        title:'Areas of tech expertise',
        subtitle:'Our team is also highly experienced with working with a wide variety of frameworks and languages such as PHP, Laravel, TailwindCSS, Bootstrap, JS and Vue.js.',

        name1: 'Mobile Development',
        description1: 'Obtain your top-of-the-class and tailored-fit mobile application. With us as your experienced custom mobile app developer, possessing deep expertise and knowledge of the latest mobile development frameworks, you can implement a mobile project of any complexity.',

        name2: 'Web Development',
        description2: 'Build a custom web application. Being a world-class web development vendor, we can create a web app capable of resolving your industry-specific business challenges, boosting your efficiency, winning new customers, and increasing your user satisfaction rates.',

        name3: 'Product Development Services',
        description3: 'Flexible and highly iterative approach to software Product Development Services makes it possible even the most complex IT solutions from scratch. We collaborate closely with our customers to ensure the best deliverables and features you need.',

        name4: 'Outsourced IT Services',
        description4: 'Comprehensive Outsourced IT Services for businesses will enable you to focus on attaining your goals and matching your priorities while entrusting your IT industry-specific challenges to a reliable team of world-class tech experts working in a truly Agile way.',

        name5: 'UI/UX Design',
        description5: 'In-house UI/UX design team of multidisciplinary experts is capable of providing you with user-friendly and convenient-to-use solutions with perfect user journeys and intuitive navigation. As a result, your branded products will be not only effective but also feature an outstanding look and feel.',

        name6: 'Solution Architecture',
        description6: 'Ensure that your envisioned IT project is scalable, flexible, and perfectly adaptable to your corporate tech ecosystem with a reliable foundational architecture. With ours expert-level custom solution architecture services and consultancy you will definitely obtain one!'

      },

      // ABOUT PAGE

      teamcore:{
        title:'About US',
        subtitle:'We are talented creatives that take business seriously.',

        desc1:'Our team of experts is made up of creatives with technical know-how, strategists who think outside the box, and developers who push innovation.',
        desc2:'You will find our team working across Creative Web Design, Web Development, Branding, and Digital Marketing.',

      },


      perks:{
        title:'Our core values',
        subtitle:'To get a sense of what our core values are, we ask ourself what bring us the most joy, or what we couldn’t live without. What gives us life meaning or what do we want to achieve?',

        name1: 'Move fast',
        description1: "We are always looking for innovation and the best solutions for our customers. In a world that moves at the speed of a click, we try to give maximum importance to your needs in the shortest time possible.",

        name2: 'Constant commitment',
        description2: "We know how important is the presence on the web for our customers, and that's why we are committed every day to ensure the best result.",

        name3: '6/7 Customer Support',
        description3: 'We understand that when your product arrives you might not particularly like it, when something goes wrong we always try to move as quickly as possible to respond and resolve any issues or needs.',

        name4: 'For the planet',
        description4: "Like you, we love the planet, and so we've pledged 1% of all sales to the preservation and restoration of the natural environment.",

      },

      slides:{

        title:'Why Choose Artexa?',
        subtitle:'We are talented creatives that take business seriously.',

        name1:"Ambition",
        desc1:"We approach every challenge with energy and vigour. We come up with innovative solutions and we’re not afraid to think big",


        name2:"Creativity",
        desc2:"Every member of our team has a creative streak. This is at the heart of what we do and central to our core values.",


        name3:"Fun",
        desc3:"Our working environment is relaxed and light-hearted. We listen to good tunes and eat good biscuits.",


        name4:"Integrity",
        desc4:"We care about our work, our clients and our people. We treat everyone with honesty and respect and expect to be treated in the same way.",


        name5:"Pride",
        desc5:"We take pride in our work and sign every piece of it. We strive for perfection in everything we do."

      },

      // TEAM PAGE

      team:{

        title:'Our Team',
        subtitle:'Artexa is a Luxembourg-based creative team working with ambitious tech companies around the world. Every day, we build products, brands and websites that help our partners stand out, connect with customers and grow faster.',

        description1:"Having been brought up in a small community, I started to ask myself about other ways of living at an early age. At 18, I started to travel. New cultures, new landscapes and languages soon sparked my curiosity exponentially. Curiosity became passion. Slowly, technologies started to fascinate me, but I didn't realise it immediately. In the meantime, I tried to find a profession that suited me, a profession in which I could find myself. All I knew is that I wanted freedom to move and live where I wanted, to continue to learn more and live new experiences. Whilst brainstorming with my close ones, I realised coding is a language and a sub-culture in itself, which I could learn, and apply all around the world while earning my life. As I became conscious of that, my career path became clear... to learn and pursue a career as a web developper.",

        description2: "I'm a web developer from Turin, Italy and currently living in Brussels. I enjoy building everything from small websites to rich interactive apps. I create successful responsive website that are fast, easy to use, and build with the best practices. The main area of expertise is full-stack development HTML, CSS, JS, PHP, building small and medium web apps, animations. I have also experience with popular open-source CMS like Wordpress. My favorite frameworks are VueJs / Laravel / Tailwnd, but in this area learning something new is part of everyday life. My approach to website development fuses creativity, technology and data analysis, giving you the platform you need to reach new audiences and engage your customers.",

      },

      banner:{

        title:'The people who work at Artexa share the same vision and values as our customer.',
        subtitle:'We are guided by the idea that the best work comes from commitment, dedication and respect.',

      },

      incentives:{

        title:'We\'re more than a web agency, we\'re an agency of progress',
        subtitle:'As your partner we do a lot, but what\'s more important is how we help you move forward. Whether it’s to better align on your business challenge, understand the people you need to reach, or define the best process to get there, we do it together as one single, cohesive team.',


        name1: 'Brand innovation & transformation',
        description1: "We’re your partner in defining and articulating your brand as an entity that meets the changed expectations of your customers",

        name2: 'Research & intelligence',
        description2: "Our deep practice in cultural and behavioral intelligence helps our partners to understand their customers needs with more nuance and flexibility. We help you operate in both the now and the next.",

        name3: 'Customer experience design',
        description3: "You need a partner that understands more than just how to design great products and services. We understand how to create strong bonds with the larger world of your brand, which is how true loyalty is earned.",

        name4: 'Culture, content, & community',
        description4: "We balance strategy, creativity, production, and delivery to create truly resonant modern content across your website.",

      },


      // CONTACT PAGE
      supportLinks:{

        name1: 'Product advice',
        description1: 'Evaluating our products and need advice before you buy?',

        name2: 'Sales',
        description2: 'We\'ll help you find the right products and pricing for your business.',


        name3: 'Technical Support',
        description3: 'Already using our products and experiencing technical issues?',

      },

      form:{
        title:'Need more informations?',
        subtitle:'Our inbox is always open. Whether you have a question or just want to say hi, We\'ll try our best to get back to you as soon as possible!',

        formtitle:'Contact information',
        formdesc:'Please fill out this form, we\'ll get in touch shortly.',
        headtitle:'Send us a message',
        firstname:'First name',
        lastname:'Last name',
        phone:'Phone',
        subject:'Subject',
        message:'Message',
        button:'Submit',

        office:'Our Office',

      },

      faqs:{

        title:'Frequently asked questions',

        question1: "How much do you charge for a website?",
        answer1: "Our website packages usually range from € 2500 – € 6000. However it really depends on what kind of website you need.",


        question2: 'Why are you so expensive?',
        answer2: "The process we use to build your website takes a certain amount of time and a lot of planning and research. Unlike other agencies, we DON’T use templates. We build your website from scratch, which means you get a unique design tailored around your business. Buying a website from us should not just simply be seen as a business expense as your website is a sales tool that should earn you money.",


        question3: 'Why are you so cheap?',
        answer3: 'Yep. We’ve also been asked that question too. We spend a lot of time researching, planning the user’s journey through your site and then finally with the design and build. We’re typically cheaper than larger agencies because we work remotely which means you don’t pay for the water cooler or beanbag chairs also we’re a small team who take on a limited amount of clients each year. You won’t be talking to account managers, you’ll talk directly to the owner. This saves on staff costs.',


        question4: "How long does it take to build a website?",
        answer4: 'It takes approximately 6-10 weeks to build a website from start to finish, providing we have all the information from you. Generally speaking, the website will only take a long time if we are still waiting for text and images from yourself.',


        question5: 'How do we communicate throughout the website build?',
        answer5: 'Before we begin working together, we’ll usually have an initially meeting to discuss the project. Once we get started, most of the communication will take place over email. This makes the process a lot easier as we’ll have all of the information saved and can come back to it later. Once we’ve finished the project, we will book in your 1hr digital marketing training session.',


        question6: 'What will you need from me?',
        answer6: "It really depends on what type of website you want. We’ll be able to discuss this on our discovery call before we start working together. Depending on which package we agree on we could need images of you and your team, images of your workplace, content for the website e.g. text, PDFs etc. , Staff Profiles... Some of this might already be on the existing website, in which case it can be transferred over to the new site.",


        question7: 'Do you offer a payment schedule?',
        answer7: "Yes, we split the payment into two. The first 50% is usually taken once you have seen the mockup of your homepage and you’re happy to move forward. The following 50% is taken 30 days after this.",

        question8: 'Can I make the final payment when the site is ready to go live?',
        answer8: "No. In the past we have found that projects can take a lot longer than expected to complete. We might be waiting for information from you and this can delay the process. Sometimes these delays can take months. This is why we always invoice 30 days after the original payment. At this point we’ll be well on our way with your new website and you’ll be able to see the progress.",

        question9: 'Will my website be mobile friendly?',
        answer9: "Yes. Your website will be fully responsive and will look great on all devices. We don’t charge extra for this. It comes as standard.",

      },

      newsletter:{
        title:'NEWSLETTER',
        subtitle:'Sign up here to get the latest news, updates and special offers.',
        placeholder:'Enter your email',
        button:'Subscribe',
        footer:'We care about the protection of your data. Read our',
        link:'Privacy Policy',

      },

      // WORKFLOW PAGE

      workheader:{

        subtitle:'We design fluid user experience and anticipate the user journey with creative solutions as well as creating brand recognition with design systems. Our team is capable of delivering custom websites, mobile apps, e-commerces with a variety of tools & skill sets that allows you to be on top of the digital world. Optimizations & reviews are part of our culture. We constantly improve our products to increase conversion rates and our client happiness.',

      },

      workskills:{

        overtitle:'OUR SKILLS',
        title:'OUR SKILLS',
        subtitle:'We create successful responsive website that are fast, easy to use, and build with the best practices. The main area of expertise is full-stack development HTML, CSS, JS, PHP, building small and medium web apps, animations. We have also experience with popular open-source CMS like Wordpress.',

      },

      workfeatures:{

        overtitle:'DEPLOY FASTER',
        title:'Everything you need to deploy your app',
        subtitle:'We approach to website development fuses creativity, technology and data analysis, giving you the platform you need to reach new audiences and engage your existing customers.',

        name1: 'Push to Deploy',
        description1: 'Knowledge of Git & most common provider of Internet hosting for software development and version control.',

        name2: 'Style',
        description2: 'Knowledge of most common CSS framework, like Bootstrap & Tailwind, to easily implement user-friendly UIs.',

        name3: 'Performant',
        description3: 'Knowledge of VueJS framework, the most versatile & performant way to make blazing fast the Virtual DOM.',

        name4: 'Advanced Security',
        description4: 'Usage of Laravel framework, the recommended PHP framework for robust application security',

        name5: 'Powerful API',
        description5: 'API management, to simplify how you connect with your partners. (the Google Maps API is a popular example.)',

        name6: 'Hosting',
        description6: 'Administrate hosting service, manage your email accounts or setup a Wordpress instance.',

      },

      workmetrics:{

        title:'We will help grow your business',
        subtitle:'Since the commercialization of the Internet in the early 90s, Web development has undergone a profound change. If once the Internet pages were a bare set of text fields, today in the foreground there is an elaborate presentation of multimedia content. The original information platform has now become a means of entertainment. Internet users demand interactive web pages with a pleasing design that allows for intuitive use. In order to meet this need, we include dynamic content with the help of various tools and create customized websites for the user.',

        emphasis1:'Certificates',
        rest1:'Our main proof expertise is in everything related to web development industry acknowledgments and achievements',
        emphasis2:'Audit',
        rest2:'We will thoroughly examine your digital project to detect areas for correction and help you archieve your business goals.',

      },

      workBlogPosts:{

        overtitle:'AT WORK',
        title:'This is how we do it',
        subtitle:'Depending on the type of project, the basic steps of building a website can vary. Not all websites are the same: to create a company website, an online catalog or an e-commerce, different types of management and planning are required. Consequently, even the implementation phases can increase or be divided in turn into sub-phases.',


        title1: 'Roadmap',
        preview1:'To define the vision of a product or service, I take the time to listen to you and understand your needs and those of your customers. I write a document with the technical specifications, some mockups, a program and a budget estimate.',


        title2: 'Prototyping',
        preview2: 'There is no universal and precise formula, because each project can have different characteristics. At the beginning we have to define objectives and potential critical issues, after which we move on to the conception of the product and then to the creation of a prototype.',


        title3: 'Development',
        preview3: 'Do you have the vision, feel the pull and all you need is software? We will work with you to develop this new functional and design product that your customers will love to use. And We\'ll help you get started.',

      },


    },



    fr:{
      header:{
        button:'Obtenez votre évaluation gratuite'
      },

      // HOME PAGE

      homeposts:{

        title:'Websites & Apps',
        subtitle:'Nous sommes une agence numérique de classe mondiale, qui peut développer une large gamme de sites web tels que des brochures, des sites de commerce électronique et des sites multilingues pour des publics B2B et B2C. Tous les sites que nous créons sont des sites réactifs qui s\'adaptent automatiquement à l\'appareil sur lequel ils sont consultés. Nous créons des sites web personnalisés qui sont liés à un back-end qui peut être facilement mis à jour par vous ou votre équipe.',


        title1: 'Goal',
        description1: 'Nous examinons ce qui est nécessaire pour le projet. Nous commençons par un atelier exploratoire pour découvrir tous les besoins et évaluer votre site web existant. L\'atelier comprendra des facteurs tels que la façon dont vous envisagez le parcours de l\'utilisateur, quel est l\'objectif du site, les fonctionnalités requises et quelles sont les intégrations nécessaires. Une fois que nous aurons toutes les informations, nous établirons un parcours UX et nous créerons un ensemble complet de wireframes décrivant le parcours de l\'utilisateur sur le site.',


        title2: 'Design',
        description2: 'Une fois que nous avons compris tous vos souhaits et besoins, nous pouvons commencer à concevoir le site web. Dans cette phase, les maquettes commencent à prendre forme avec le design et les couleurs. Nous utilisons plusieurs outils pour que vous puissiez voir comment les pages et le design s\'assemblent et faire l\'expérience du site avant qu\'il ne soit construit, afin d\'être pleinement satisfait avant de passer à la phase de construction.',


        title3: 'Développement',
        description3: 'Il s\'agit de la phase la plus importante. Nous aurons différents jalons et examens tout au long du processus. Un lien de prévisualisation est fourni au cours de la phase de développement afin que vous puissiez voir le projet prendre vie avant l\'approbation finale.',


        title4: 'Sites Vitrine',
        description4: 'Nous concevons et développons des sites web vitrine réactifs pour présenter vos produits et services en accord avec l\'essence de votre marque, votre public cible et vos préférences. Nos sites web suivent les dernières tendances en matière de design afin de garantir qu\'ils restent d\'actualité pendant des années',


        title5: 'Sites web de E-commerce',
        description5: 'En plus de la conception d\'un site web magnifique, tendance et moderne qui correspond à votre marque, nous nous occupons également de tous les aspects techniques du commerce électronique afin de garantir que tout fonctionne sans problème. Nous pouvons mettre en place des systèmes de paiement, des intégrations et des abonnements.',

        title6: 'Sites web multilingues',
        description6: 'L\'un des avantages d\'avoir une équipe internationale est que nous parlons plus de trois langues maternelles en interne et que nous pouvons donc vous fournir des sites web multilingues si nécessaire. Nos sites multilingues pourront permettre aux utilisateurs de changer de langue par eux-mêmes',

      },


      tech:{
        title:'Nos technologies',
        subtitle:'Le développement d\'applications web avancées est notre spécialité, et nous répondrons avec succès à toutes vos exigences en matière de développement d\'applications web, qu\'il s\'agisse de projets de petite taille ou de plus grande envergure. Pour maintenir et améliorer nos applications web de haute qualité, nous avons une expertise dans diverses technologies de développement web.',
      },

      homefeatures:{

        titleover:'TOUT CE QU\'IL FAUT',
        title:'Domaines d\'expertise technique',
        subtitle:'Notre équipe est également très expérimentée dans l\'utilisation d\'une grande variété de cadres et de langages tels que PHP, Laravel, TailwindCSS, Bootstrap, JS et Vue.js".',

        name1: 'Développement mobile',
        description1: 'Obtenez votre application mobile haut de gamme et sur mesure. Avec nous comme développeur d\'applications mobiles personnalisées expérimenté, possédant une expertise et une connaissance approfondies des derniers cadres de développement mobile, vous pouvez mettre en œuvre un projet mobile de n\'importe quelle complexité.',

        name2: 'Développement web',
        description2: 'Créez une application web personnalisée. En tant que fournisseur de développement web de classe mondiale, nous pouvons créer une application web capable de résoudre les défis commerciaux propres à votre secteur d\'activité, d\'améliorer votre efficacité, de gagner de nouveaux clients et d\'augmenter le taux de satisfaction des utilisateurs.',

        name3: 'Services de développement de produits',
        description3: 'L\'approche flexible et hautement itérative des services de développement de produits logiciels permet de créer de toutes pièces les solutions informatiques les plus complexes. Nous collaborons étroitement avec nos clients pour garantir les meilleurs produits livrables et les meilleures fonctionnalités dont vous avez besoin.',

        name4: 'Services informatiques externalisés',
        description4: 'Des services informatiques externalisés complets pour les entreprises vous permettront de vous concentrer sur la réalisation de vos objectifs et de respecter vos priorités, tout en confiant vos défis informatiques spécifiques à une équipe fiable d\'experts techniques de classe mondiale travaillant de manière véritablement agile.',

        name5: 'Design UI/UX',
        description5: 'L\'équipe interne de conception UI/UX, composée d\'experts multidisciplinaires, est capable de vous fournir des solutions conviviales et pratiques, avec des parcours d\'utilisateur parfaits et une navigation intuitive. En conséquence, vos produits de marque seront non seulement efficaces mais aussi dotés d\'une apparence et d\'une convivialité exceptionnelles.',

        name6: 'Architecture des solutions',
        description6: 'Assurez-vous que le projet informatique que vous envisagez est évolutif, flexible et parfaitement adaptable à l\'écosystème technologique de votre entreprise grâce à une architecture de base fiable. Avec nos services d\'architecture de solutions personnalisées et nos conseils d\'experts, vous en obtiendrez une à coup sûr !',

      },

      // ABOUT PAGE

      teamcore:{
        title:'À propos',
        subtitle:'Nous sommes des créatifs talentueux qui prennent les affaires au sérieux.',

        desc1:'Notre équipe d\'experts est composée de créatifs dotés d\'un savoir-faire technique, de stratèges qui sortent des sentiers battus et de développeurs qui poussent l\'innovation',
        desc2:'Notre équipe travaille dans les domaines de la conception Web créative, du développement Web, de l\'image de marque et du marketing numérique.',

      },


      perks:{
        title:'Nos valeurs fondamentales',
        subtitle:'Pour avoir une idée de ce que sont nos valeurs fondamentales, nous nous demandons ce qui nous apporte le plus de joie, ou ce dont nous ne pourrions pas nous passer. Qu\'est-ce qui donne un sens à notre vie ou qu\'est-ce que nous voulons réaliser ?',

        name1: 'Agir rapidement',
        description1: 'Nous sommes toujours à la recherche de l\'innovation et des meilleures solutions pour nos clients. Dans un monde qui bouge à la vitesse d\'un clic, nous essayons d\'accorder un maximum d\'importance à vos besoins dans les plus brefs délais.',

        name2: 'Un engagement constant',
        description2: 'Nous savons combien la présence sur le web est importante pour nos clients, et c\'est pourquoi nous nous engageons chaque jour pour garantir le meilleur résultat.',

        name3: '6/7 Support client',
        description3: 'Nous comprenons que lorsque votre produit arrive, il se peut que vous ne l\'aimiez pas particulièrement. Si quelque chose ne va pas, nous essayons toujours d\'agir aussi rapidement que possible pour répondre et résoudre tout problème ou besoin.',

        name4: 'Pour la planète',
        description4: 'Comme vous, nous aimons la planète, c\'est pourquoi nous nous sommes engagés à consacrer 1 % de nos ventes à la préservation et à la restauration de l\'environnement naturel.',

      },

      slides:{

        title:'Pourquoi choisir Artexa ?',
        subtitle:'Nous sommes des créatifs talentueux qui prennent les affaires au sérieux.',

        name1:"Ambition",
        desc1:'Nous abordons chaque défi avec énergie et vigueur. Nous trouvons des solutions innovantes et nous n\'avons pas peur de voir grand',


        name2:"Créativité",
        desc2:'Chaque membre de notre équipe a un penchant pour la créativité. C\'est au cœur de ce que nous faisons et au centre de nos valeurs fondamentales.',


        name3:"Fun",
        desc3:'Notre environnement de travail est détendu et léger. Nous écoutons de bons airs et mangeons de bons biscuits.',


        name4:"Intégrité",
        desc4:'Nous nous soucions de notre travail, de nos clients et de nos collaborateurs. Nous traitons tout le monde avec honnêteté, respect et attendons d\'être traités de la même manière.',


        name5:"Fierté",
        desc5:'Nous sommes fiers de notre travail et nous signons chaque pièce. Nous recherchons la perfection dans tout ce que nous faisons.'

      },

      // TEAM PAGE

      team:{

        title:'Notre équipe',
        subtitle:'Artexa est une équipe créative basée au Luxembourg qui travaille avec des entreprises technologiques ambitieuses du monde entier. Chaque jour, nous construisons des produits, des marques et des sites web qui aident nos partenaires à se démarquer, à se connecter avec leurs clients et à se développer plus rapidement.',

        description1:'Ayant grandi dans une petite communauté, j\'ai commencé à me poser des questions sur d\'autres modes de vie dès mon plus jeune âge. À 18 ans, j\'ai commencé à voyager. De nouvelles cultures, de nouveaux paysages et de nouvelles langues ont rapidement suscité ma curiosité de façon exponentielle. La curiosité est devenue passion. Lentement, les technologies ont commencé à me fasciner, mais je ne m\'en suis pas rendu compte immédiatement. En attendant, j\'ai essayé de trouver un métier qui me convenait, un métier dans lequel je pourrais me trouver. Tout ce que je savais, c\'est que je voulais la liberté de bouger et de vivre où je voulais, de continuer à en apprendre davantage et à vivre de nouvelles expériences. En faisant un brainstorming avec mes proches, j\'ai réalisé que le codage est un langage et une sous-culture en soi, que je pourrais apprendre et appliquer partout dans le monde tout en gagnant ma vie. Au fur et à mesure que j\'en ai pris conscience, mon cheminement de carrière est devenu clair ... pour apprendre et poursuivre une carrière de développeur Web',

        description2: 'Je suis un développeur web de Turin, en Italie et je vis actuellement à Bruxelles. J\'aime tout créer, des petits sites web aux applications interactives. Je crée des site web responsive, performant, facile à utiliser et construit avec les meilleures pratiques. Le principal domaine d\'expertise est le développement full-stack HTML, CSS, JS, PHP. Création d\'applications web de petite et moyenne taille, animations. J\'ai également de l\'expérience avec les CMS open source populaires comme Wordpress. Mes frameworks préférés sont VueJs / Laravel / Tailwnd, mais dans ce domaine, apprendre quelque chose de nouveau fait partie de la vie de tous les jours. Mon approche du développement de sites web fusionne créativité, technologie et analyse de données, vous offrant la plate-forme dont vous avez besoin pour atteindre de nouveaux publics et engager vos clients.',
      },

      banner:{

        title:'Les personnes qui travaillent chez Artexa partagent la même vision et les mêmes valeurs que notre client.',
        subtitle:'Nous sommes guidés par l\'idée que le meilleur travail provient de l\'engagement, du dévouement et du respect.',

      },

      incentives:{

        title:'Nous sommes plus qu\'une agence web, nous sommes une agence de progrès',
        subtitle:'En tant que partenaire, nous faisons beaucoup de choses, mais le plus important est la manière dont nous vous aidons à avancer. Qu\'il s\'agisse de mieux s\'aligner sur votre défi commercial, de comprendre les personnes que vous devez atteindre ou de définir le meilleur processus pour y parvenir, nous le faisons ensemble, au sein d\'une seule et même équipe soudée.',


        name1: 'Innovation et transformation de la marque',
        description1: 'Nous sommes votre partenaire pour définir et articuler votre marque en tant qu\'entité qui répond aux nouvelles attentes de vos clients',

        name2: 'Recherche et intelligence',
        description2: 'Notre pratique approfondie de l\'intelligence culturelle et comportementale aide nos partenaires à comprendre les besoins de leurs clients avec plus de nuance et de flexibilité. Nous vous aidons à opérer à la fois dans le présent et dans le futur.',

        name3: 'Customer experience design',
        description3: "You need a partner that understands more than just how to design great products and services. We understand how to create strong bonds with the larger world of your brand, which is how true loyalty is earned.",

        name4: 'Culture, contenu et communauté',
        description4: 'Nous équilibrons la stratégie, la créativité, la production et la livraison pour créer un contenu moderne vraiment résonnant sur votre site web.',

      },

      // CONTACT PAGE
      supportLinks:{

        name1: 'Conseils sur les produits',
        description1: 'Vous évaluez nos produits et avez besoin de conseils avant d\'acheter ?',

        name2: 'Ventes',
        description2: 'Nous vous aiderons à trouver les produits et les prix qui conviennent à votre entreprise.',


        name3: 'Support technique',
        description3: 'Vous utilisez déjà nos produits et rencontrez des problèmes techniques ?',

      },

      form:{
        title:'Vous avez besoin de plus d\'informations ?',
        subtitle:'Notre boîte de réception est toujours ouverte. Que vous ayez une question ou que vous souhaitiez simplement nous saluer, nous ferons de notre mieux pour vous répondre dans les meilleurs délais !',

        formtitle:'Informations de contact',
        formdesc:'Veuillez remplir ce formulaire, nous vous contacterons sous peu.',
        headtitle:'Envoyez-nous un message',
        firstname:'Prénom',
        lastname:'Nom de famille',
        phone:'Téléphone',
        subject:'Sujet',
        message:'Message',
        button:'Soumettre',

        office:'Notre bureau',

      },

      faqs:{

        title:'Questions fréquemment posées',


        question1: "Combien facturez-vous pour un site web ?",
        answer1: 'Nos forfaits de sites Web vont généralement de 2500 à 6000 €. Cependant, cela dépend vraiment du type de site web dont vous avez besoin.Nos forfaits de sites Web vont généralement de 2500 à 6000 €. Cependant, cela dépend vraiment du type de site web dont vous avez besoin.',


        question2: 'Pourquoi êtes-vous si cher ?',
        answer2: 'Le processus que nous utilisons pour créer votre site Web prend un certain temps et nécessite beaucoup de planification et de recherche. Contrairement à d\'autres agences, nous n\'utilisons pas de modèles. Nous construisons votre site Web à partir de zéro, ce qui signifie que vous obtenez un design unique adapté à votre entreprise. L\'achat d\'un site web chez nous ne doit pas simplement être considéré comme une dépense professionnelle, car votre site web est un outil de vente qui doit vous rapporter de l\'argent.',


        question3: 'Pourquoi êtes-vous si bon marché ?',
        answer3: 'Oui. Cette question nous a également été posée. Nous passons beaucoup de temps à faire des recherches, à planifier le parcours de l\'utilisateur sur votre site et enfin à concevoir et à construire. Nous sommes généralement moins chers que les grandes agences parce que nous travaillons à distance, ce qui signifie que vous ne payez pas pour la fontaine d\'eau ou les chaises en forme de sac à dos, et parce que nous sommes une petite équipe qui ne prend qu\'un nombre limité de clients par an. Vous ne parlerez pas à des gestionnaires de comptes, mais directement au propriétaire. Cela permet d\'économiser sur les frais de personnel.',


        question4: "Combien de temps faut-il pour créer un site web ?",
        answer4: 'Il faut compter environ 6 à 10 semaines pour construire un site Web du début à la fin, à condition que vous nous fournissiez toutes les informations nécessaires. D\'une manière générale, le site web ne prendra beaucoup de temps que si nous attendons encore du texte et des images de votre part',


        question5: 'Comment communiquer tout au long de la construction du site ?',
        answer5: 'Avant de commencer à travailler ensemble, nous avons généralement une première réunion pour discuter du projet. Une fois que nous aurons commencé, la plupart des communications se feront par courrier électronique. Cela rend le processus beaucoup plus facile, car toutes les informations sont enregistrées et nous pouvons y revenir plus tard. Une fois le projet terminé, nous réserverons votre session de formation en marketing numérique d\'une heure.',


        question6: 'Que voulez-vous de moi ?',
        answer6: 'Cela dépend vraiment du type de site web que vous souhaitez. Nous pourrons en discuter lors de notre appel de découverte avant de commencer à travailler ensemble. En fonction de la formule choisie, nous pourrions avoir besoin d\'images de vous et de votre équipe, d\'images de votre lieu de travail, de contenu pour le site Web (texte, PDF, etc.). des profils du personnel... Certains de ces éléments peuvent déjà se trouver sur le site existant, auquel cas ils peuvent être transférés sur le nouveau site.',


        question7: 'Proposez-vous un calendrier de paiement ?',
        answer7: 'Oui, nous divisons le paiement en deux. Les premiers 50% sont généralement pris une fois que vous avez vu la maquette de votre page d\'accueil et que vous êtes heureux d\'aller de l\'avant. Les 50% suivants sont prélevés 30 jours après.',

        question8: 'Puis-je effectuer le paiement final lorsque le site sera prêt à être mis en ligne ?',
        answer8: 'Non. Dans le passé, nous avons constaté que les projets peuvent prendre beaucoup plus de temps que prévu pour être achevés. Il se peut que nous attendions des informations de votre part, ce qui peut retarder le processus. Parfois, ces retards peuvent durer des mois. C\'est pourquoi nous facturons toujours 30 jours après le paiement initial. À ce moment-là, nous aurons bien avancé dans la réalisation de votre nouveau site web et vous pourrez voir les progrès accomplis.',

        question9: 'Mon site Web sera-t-il adapté aux téléphones portables ?',
        answer9: 'Oui. Votre site web sera entièrement responsive et aura une belle apparence sur tous les appareils. Nous ne facturons pas de frais supplémentaires pour cela. Il est fourni en standard.',

      },

      newsletter:{
        title:'NEWSLETTER',
        subtitle:'Inscrivez-vous ici pour recevoir les dernières nouvelles, mises à jour et offres spéciales.',
        placeholder:'Entrez votre courriel',
        button:'S\'abonner',
        footer:'Nous nous soucions de la protection de vos données. Lisez notre',
        link:'Politique de confidentialité',

      },

      // WORKFLOW PAGE

      workheader:{

        subtitle:'Nous concevons une expérience utilisateur fluide et anticipons le parcours de l\'utilisateur avec des solutions créatives, tout en créant une reconnaissance de la marque grâce à des systèmes de conception. Notre équipe est capable de fournir des sites web, des applications mobiles et des e-commerces personnalisés avec une variété d\'outils et de compétences qui vous permettent d\'être au sommet du monde numérique. Les optimisations et les révisions font partie de notre culture. Nous améliorons constamment nos produits pour augmenter les taux de conversion et le bonheur de nos clients.',

      },

      workskills:{

        overtitle:'NOS COMPÉTENCES',
        title:'Compétences et expérience',
        subtitle:'Nous créons des sites web réactifs qui sont rapides, faciles à utiliser et construits avec les meilleures pratiques. Notre principal domaine d\'expertise est le développement complet HTML, CSS, JS, PHP, la création de petites et moyennes applications web, les animations. Nous avons également de l\'expérience avec les CMS open-source populaires comme Wordpress.',

      },

      workfeatures:{

        overtitle:'DEPLOY FASTER',
        title:'Tout ce dont vous avez besoin pour déployer votre application',
        subtitle:'Notre approche du développement de sites web fusionne la créativité, la technologie et l\'analyse de données, vous offrant ainsi la plateforme dont vous avez besoin pour atteindre de nouveaux publics et engager vos clients existants.',

        name1: 'Push to Deploy',
        description1: 'Connaissance de Git et du fournisseur le plus courant d\'hébergement Internet pour le développement de logiciels et le contrôle des versions.',

        name2: 'Style',
        description2: 'Connaissance du cadre CSS le plus courant, comme Bootstrap et Tailwind, pour mettre en œuvre facilement des interfaces utilisateur conviviales.',

        name3: 'Performant',
        description3: 'Connaissance du framework VueJS, le moyen le plus polyvalent et le plus performant de rendre le DOM virtuel très rapide.',

        name4: 'Advanced Security',
        description4: 'Utilisation du framework Laravel, le framework PHP recommandé pour une sécurité robuste des applications.',

        name5: 'Powerful API',
        description5: 'La gestion des API, pour simplifier la manière dont vous vous connectez à vos partenaires. (l\'API de Google Maps est un exemple populaire.)',

        name6: 'Hosting',
        description6: 'Administrer un service d\'hébergement, gérer vos comptes de messagerie ou configurer une instance de Wordpress.',

      },

      workmetrics:{

        title:'Nous vous aiderons à développer votre entreprise',
        subtitle:'Depuis la commercialisation de l\'Internet au début des années 90, le développement du Web a subi un profond changement. Si, autrefois, les pages Internet étaient un ensemble dépouillé de champs de texte, on trouve aujourd\'hui au premier plan une présentation élaborée de contenu multimédia. La plate-forme d\'information initiale est devenue un moyen de divertissement. Les internautes exigent des pages web interactives, au design agréable et permettant une utilisation intuitive. Afin de répondre à ce besoin, nous incluons des contenus dynamiques à l\'aide de divers outils et créons des sites web personnalisés pour l\'utilisateur.',

        emphasis1:'Certificats',
        rest1:'Notre principale expertise en matière de preuves concerne tout ce qui a trait aux reconnaissances et aux réalisations du secteur du développement web.',
        emphasis2:'Audit',
        rest2:'Nous examinerons en détail votre projet numérique pour détecter les points à corriger et vous aider à atteindre vos objectifs commerciaux.',

      },

      workBlogPosts:{

        overtitle:'AT WORK',
        title:'C\'est comme ça qu\'on fait',
        subtitle:'Les étapes de base de la création d\'un site web peuvent varier en fonction du type de projet. Tous les sites web ne sont pas identiques : pour créer un site d\'entreprise, un catalogue en ligne ou un site de commerce électronique, différents types de gestion et de planification sont nécessaires. Par conséquent, même les phases de réalisation peuvent augmenter ou être divisées à leur tour en sous-phases.',


        title1: 'Roadmap',
        preview1:'To define the vision of a product or service, I take the time to listen to you and understand your needs and those of your customers. I write a document with the technical specifications, some mockups, a program and a budget estimate.',


        title2: 'Prototyping',
        preview2: 'Il n\'existe pas de formule universelle et précise, car chaque projet peut avoir des caractéristiques différentes. Au début, nous devons définir les objectifs et les éventuels problèmes critiques, après quoi nous passons à la conception du produit, puis à la création d\'un prototype.',


        title3: 'Development',
        preview3: 'Vous avez la vision, vous ressentez l\'envie et tout ce dont vous avez besoin est un logiciel ? Nous allons travailler avec vous pour développer ce nouveau produit fonctionnel et design que vos clients vont adorer utiliser. Et nous vous aiderons à démarrer.',

      },


    },



    it:{
      header:{
        button:'Ottieni un prevntivo gratuitamente'
      },

      // HOME PAGE

      homeposts:{

        title:'Websites & Apps',
        subtitle:'Siamo un\'agenzia digitale di classe europea, che può sviluppare una vasta gamma di siti web come brochure, e-commerce e siti multilingue per il pubblico B2B e B2C. Tutti i siti web che creiamo sono siti responsive che si adattano automaticamente al dispositivo su cui vengono visualizzati. Creiamo siti web personalizzati che sono collegati a un back end che può essere facilmente aggiornato da voi o dal vostro team.',


        title1: 'Obbietivi',
        description1: 'Esaminiamo ciò che è necessario per il progetto. Iniziamo con un workshop esplorativo per scoprire tutti i bisogni e valutare il vostro sito web esistente. Il workshop includerà fattori come il modo in cui immaginate il viaggio dell\'utente, l\'obiettivo del sito, le funzionalità richieste e quali integrazioni sono necessarie. Una volta raccolte tutte le informazioni, definiremo un percorso UX e creeremo una serie completa di wireframes per tracciare il percorso dell\'utente all\'interno del sito.',


        title2: 'Design',
        description2: 'Una volta che abbiamo capito tutti i vostri desideri e bisogni, possiamo iniziare a progettare il sito web. In questa fase, i wireframe iniziano a prendere forma con il design e i colori. Usiamo diversi strumenti in modo che possiate vedere come le pagine e il design si adattano tra loro e sperimentare il sito prima che sia costruito, in modo da essere pienamente soddisfatti prima di passare alla fase di costruzione',


        title3: 'Sviluppo',
        description3: 'Questa è la fase più lunga. Avremo varie pietre miliari e revisioni durante il processo. Un link di anteprima viene fornito durante la fase di sviluppo in modo da poter vedere il progetto prendere vita prima dell\'approvazione finale.',


        title4: 'Siti vetrina',
        description4: 'Progettiamo e sviluppiamo siti web vetrina responsive per mostrare i vostri prodotti e servizi in linea con l\'essenza del vostro marchio, il vostro pubblico di riferimento e le vostre preferenze. I nostri siti web seguono le ultime tendenze del design per garantire che siano aggiornati per gli anni a venire',


        title5: 'Siti E-commerce',
        description5: 'Oltre a progettare un sito web bello, trendy e dall\'aspetto moderno che si adatti al vostro marchio, ci occuperemo anche di tutti gli aspetti tecnici del lato e-commerce per garantire che tutto funzioni senza problemi. Possiamo impostare sistemi di pagamento fluidi, integrazioni e abbonamenti.',

        title6: 'Siti Multilingua',
        description6: 'Uno dei vantaggi di avere un team internazionale che lavora è che abbiamo più di 3 lingue native parlate in casa e quindi possiamo fornirvi siti web multilingue se necessario. I nostri siti web multilingue saranno in grado di permettere agli utenti di cambiare la loro lingua di maniera autonoma.',

      },


      tech:{
        title:'Le nostre tecnologie',
        subtitle:'Lo sviluppo di applicazioni web avanzate è la nostra specialità, soddisferemo con successo tutte le vostre esigenze, dai progetti di piccole dimensioni a quelli di più ampia portata. Per mantenerele e migliorarele, abbiamo esperienza in diverse tecnologie.',
      },

      homefeatures:{

        titleover:'TUTTO CIÒ DI CUI HAI BISOGNO',
        title:'Aree di competenza tecnica',
        subtitle:'Il nostro team è molto esperto nel lavorare con un\'ampia varietà di framework e linguaggi come PHP, Laravel, TailwindCSS, Bootstrap, JS e Vue.js.',

        name1: 'Sviluppo mobile',
        description1: 'Ottieni la tua applicazione mobile su misura. Con noi al vostro fianco come esperti di sviluppo di applicazioni personalizzate potete, grazie alla nostra profonda esperienza e conoscenza degli ultimi framework di sviluppo, implementare un progetto mobile di qualsiasi complessità.',

        name2: 'Sviluppo web',
        description2: 'Costruisci un\'applicazione web personalizzata. Essendo un fornitore di sviluppo web di classe europea, possiamo creare un\'applicazione web in grado di risolvere le vostre sfide di business specifiche, aumentando la vostra efficienza, conquistando nuovi clienti e aumentando i vostri tassi di soddisfazione degli utenti.',

        name3: 'Servizi di sviluppo del prodotto',
        description3: 'L\'approccio flessibile e altamente iterativo ai servizi di sviluppo di prodotti software rende possibile anche le soluzioni IT più complesse. Collaboriamo strettamente con i nostri clienti per garantire i migliori risultati e le caratteristiche di cui avete bisogno.',

        name4: 'Servizi IT in outsourcing',
        description4: 'Un servizio IT completo in outsourcing per le aziende che vi permetterà di concentrarvi sul raggiungimento dei vostri obiettivi e sulle vostre priorità, affidando le vostre sfide specifiche del settore IT a un team di esperti tecnologici di livello europeo che lavorano in modo agile.',

        name5: 'UI/UX Design',
        description5: 'Il team interno di design UI/UX è in grado di fornirvi soluzioni user-friendly e comode da usare, con percorsi utente perfetti e una navigazione intuitiva. Come risultato, i vostri prodotti non saranno solo efficaci ma anche caratterizzati da un look and feel eccezionale.',

        name6: 'Architecture Solution',
        description6: 'Il vostro progetto IT sarà scalabile, flessibile e perfettamente adattabile al vostro ecosistema tecnologico aziendale con un\'architettura di base affidabile. Con i nostri servizi di consulenza e di architettura di soluzioni personalizzate di livello professionale, otterrete sicuramente un risultato ottimale!'

      },

      // ABOUT PAGE

      teamcore:{
        title:'Su di noi',
        subtitle:'Siamo creativi di talento che prendono sul serio gli affari.',
        desc1:'Il nostro team di esperti è composto da creativi con conoscenze tecniche, strateghi che pensano fuori dagli schemi e sviluppatori che spingono l\'innovazione',
        desc2:'Troverete il nostro team pronto a lavorare attraverso il Creative Web Design, lo sviluppo web, il branding e il marketing digitale',

      },


      perks:{
        title:'I nostri valori fondamentali',
        subtitle:'Per farci un\'idea di quali siano i nostri valori fondamentali, chiediamoci cosa ci dà più gioia o di cosa non potremmo vivere senza. Cosa dà senso alla vita o cosa vogliamo raggiungere?',

        name1: 'Ci muoviamo veloci',
        description1: 'Siamo sempre alla ricerca dell\'innovazione e delle migliori soluzioni per i nostri clienti. In un mondo che si muove alla velocità di un clic, cerchiamo di dare la massima importanza alle vostre esigenze nel minor tempo possibile.',

        name2: 'Impegno costante',
        description2: 'Sappiamo quanto sia importante la presenza sul web per i nostri clienti, ed è per questo che ci impegniamo ogni giorno per garantire il miglior risultato',

        name3: '6/7 Assistenza clienti',
        description3: 'Capiamo che quando il vostro prodotto arriva potrebbe non piacervi particolarmente, quando qualcosa va storto cerchiamo sempre di muoverci il più velocemente possibile per rispondere e risolvere qualsiasi problema o necessità',

        name4: 'Per il pianeta',
        description4: 'Come voi, amiamo il pianeta, e così ci siamo impegnati a destinare l\'1% di tutte le vendite alla conservazione e al restauro dell\'ambiente naturale',

      },

      slides:{

        title:'Perché scegliere Artexa?',
        subtitle:'Siamo creativi di talento che prendono sul serio gli affari.',

        name1:'Ambizione',
        desc1:'Affrontiamo ogni sfida con energia e vigore. Troviamo soluzioni innovative e non abbiamo paura di pensare in grande.',


        name2:"Creatività",
        desc2:'Ogni membro del nostro team ha una vena creativa. Questo è il cuore di ciò che facciamo e centrale per i nostri valori fondamentali.',


        name3:"Divertimento",
        desc3:'Il nostro ambiente di lavoro è rilassato e spensierato. Ascoltiamo buona musica e mangiamo buoni biscotti.',


        name4:"Integrità",
        desc4:'Abbiamo a cuore il nostro lavoro, i nostri clienti e la nostra gente. Trattiamo tutti con onestà e rispetto e ci aspettiamo di essere trattati allo stesso modo',


        name5:"Orgoglio",
        desc5:'Siamo orgogliosi del nostro lavoro e firmiamo ogni pezzo. Cerchiamo la perfezione in tutto ciò che facciamo'

      },

      // TEAM PAGE

      team:{

        title:'Il nostro team',
        subtitle:'Artexa è un team creativo con sede in Lussemburgo che lavora con ambiziose aziende tecnologiche in tutto il mondo. Ogni giorno, costruiamo prodotti, marchi e siti web che aiutano i nostri partner a distinguersi, a connettersi con i clienti e a crescere più velocemente.',

        description1:'Essendo cresciuto in una piccola comunità, ho iniziato a interrogarmi su altri modi di vivere in giovane età. A 18 anni ho iniziato a viaggiare. Nuove culture, nuovi paesaggi e lingue hanno presto acceso la mia curiosità in modo esponenziale. La curiosità è diventata passione. Lentamente, le tecnologie iniziarono ad affascinarmi, ma non me ne resi conto immediatamente. Nel frattempo, ho cercato di trovare una professione adatta a me, una professione in cui potessi ritrovarmi. Sapevo solo che volevo la libertà di muovermi e vivere dove volevo, per continuare a imparare di più e vivere nuove esperienze. Mentre facevo brainstorming con i miei cari, ho capito che la programmazione è un linguaggio e una sottocultura in sé da poter applicare in tutto il mondo mentre mi guadagno la vita. Quando ho preso coscienza di questo, il mio percorso di carriera è diventato chiaro... imparare e perseguire una carriera come sviluppatore web',

        description2: 'Sono uno sviluppatore web nato a Torino, attualmente a Bruxelles. Mi piace creare qualsiasi cosa, dai piccoli siti web alle app interattive. Creo siti web responsive che sono veloci, facili da usare e realizzati con le migliori pratiche. La principale area di competenza è lo sviluppo full-stack HTML, CSS, JS, PHP. Costruzione di app web di piccole e medie dimensioni, animazioni. Ho anche esperienza con popolari CMS open-source come Wordpress. I miei framework di riferimento sono VueJs / Laravel / Tailwnd, ma in questo campo imparare qualcosa di nuovo fa parte della vita di tutti i giorni. Il mio approccio allo sviluppo di siti Web fonde creatività, tecnologia e analisi dei dati, offrendoti la piattaforma di cui hai bisogno per raggiungere un nuovo pubblico e coinvolgere i tuoi clienti.',

      },

      banner:{

        title:'Le persone che lavorano in Artexa condividono la stessa visione e gli stessi valori del nostro cliente',
        subtitle:'Siamo guidati dall\'idea che il miglior lavoro viene dall\'impegno, dalla dedizione e dal rispetto',

      },

      incentives:{

        title:'Siamo più di una web agency, siamo un\'agenzia di progresso',
        subtitle:'Come vostro partner facciamo molto, ma ciò che è più importante è come vi aiutiamo ad andare avanti. Che si tratti di allinearsi meglio sulla vostra sfida commerciale, di capire le persone che dovete raggiungere, o di definire il miglior processo per arrivarci, lo facciamo insieme a voi come un unico team coeso',


        name1: 'Innovazione e trasformazione del marchio',
        description1: 'Siamo il vostro partner nel definire e articolare il vostro marchio come un\'entità che soddisfa le mutate aspettative dei vostri clienti',

        name2: 'Ricerca e intelligenza',
        description2: 'La nostra profonda pratica nello studio dell\'intelligenza culturale e comportamentale aiuta i nostri partner a capire le esigenze dei loro clienti con più sfumature e flessibilità. Vi aiutiamo a operare sia nel presente che nel futuro',

        name3: 'Design dell\'esperienza del cliente',
        description3: 'Avete bisogno di un partner che sappia progettare grandi prodotti e servizi. Ci piace creare forti legami con il mondo del vostro business per permettervi di creare un prodotto in grado di guadagnare la fiducia dei vostri clienti',

        name4: 'Cultura, contenuto e comunità',
        description4: 'Bilanciamo strategia, creatività, produzione e consegna per creare un contenuto moderno veramente risonante sul tuo sito web',

      },

      // CONTACT PAGE
      supportLinks:{

        name1: 'Consigli sui prodotti',
        description1: 'Stai valutando i nostri prodotti e hai bisogno di consigli prima di comprare?',

        name2: 'Vendite',
        description2: 'Ti aiuteremo a trovare i prodotti e i prezzi giusti per il tuo business.',


        name3: 'Supporto tecnico',
        description3: 'Stai già usando i nostri prodotti e hai problemi tecnici?',

      },

      form:{
        title:'Hai bisogno di più informazioni?',
        subtitle:'La nostra casella di posta è sempre aperta. Se hai una domanda o vuoi solo salutare, faremo del nostro meglio per risponderti il prima possibile!',

        formtitle:'Informazioni di contatto',
        formdesc:'Compila questo modulo, ti contatteremo a breve.',
        headtitle:'Inviaci un messaggio',
        firstname:'Nome',
        lastname:'Cognome',
        phone:'Telefono',
        subject:'Oggetto',
        message:'Messagio',
        button:'invia',

        office:'I nostri uffici',

      },

      faqs:{

        title:'Domande chieste di frequente',


        question1: "Quanto costa un sito web?",
        answer1: 'I nostri pacchetti sito web di solito vanno da € 2500 - € 6000. Tuttavia dipende molto dal tipo di sito web di cui avete bisogno.',


        question2: 'Perché siete così cari?',
        answer2: 'Il processo che usiamo per costruire il tuo sito web richiede una certa quantità di tempo e un sacco di pianificazione e ricerca. A differenza di altre agenzie, noi NON usiamo modelli. Costruiamo il tuo sito web da zero, il che significa che ottieni un design unico su misura per il tuo business. L\'acquisto di un sito web da noi non dovrebbe essere visto semplicemente come una spesa aziendale, perché il tuo sito web è uno strumento di vendita che dovrebbe farti guadagnare soldi',


        question3: 'Perché siete così economici?',
        answer3: 'Sì. Anche a noi è stata fatta questa domanda. Passiamo molto tempo a fare ricerche, a pianificare il viaggio dell\'utente attraverso il tuo sito e poi finalmente con il design e la costruzione. Siamo tipicamente più economici delle agenzie più grandi perché lavoriamo in remoto, il che significa che non si paga per il frigo-bar o le sedie a sacco, inoltre siamo un piccolo team che accetta un numero limitato di clienti ogni anno. Non parlerai con gli account manager, ma direttamente con i proprietari. Questo fa risparmiare sui costi del personale',


        question4: "Quanto tempo ci vuole per costruire un sito web?",
        answer4: 'Ci vogliono circa 6-10 settimane per costruire un sito web dall\'inizio alla fine, sempre che abbiamo tutte le informazioni da voi. In generale, il sito web richiederà molto tempo solo se stiamo ancora aspettando testo e immagini da voi.',


        question5: 'Come comunichiamo durante la costruzione del sito web?',
        answer5: 'Prima di iniziare a lavorare insieme, di solito abbiamo un incontro iniziale per discutere il progetto. Una volta iniziato, la maggior parte della comunicazione avverrà via e-mail. Questo rende il processo molto più facile in quanto avremo tutte le informazioni salvate e potremo ritornarci in seguito. Una volta che abbiamo finito il progetto, prenoteremo la tua sessione di formazione di 1 ora di marketing digitale',


        question6: 'Cosa devo fornire?',
        answer6: 'Dipende molto dal tipo di sito web che vuoi. Saremo in grado di discuterne durante la nostra telefonata conoscitiva prima di iniziare a lavorare insieme. A seconda del pacchetto su cui di metteremo d\'accordo potremmo avere bisogno di immagini di voi e del vostro personale, immagini del vostro posto di lavoro, contenuti per il sito web, ad esempio testi, PDF, ecc. Profili del personale... Alcune di queste cose potrebbero già essere sul sito web esistente, nel qual caso possono essere trasferite sul nuovo sito.',


        question7: 'Offrite un piano di pagamento?',
        answer7: 'Sì, dividiamo il pagamento in due parti. Il primo 50% viene solitamente preso una volta che avete visto il mockup della vostra homepage e siete felici di andare avanti. Il seguente 50% viene preso 30 giorni dopo.',

        question8: 'Posso fare il pagamento finale quando il sito è pronto per andare in diretta?',
        answer8: 'No. In passato abbiamo scoperto che i progetti possono richiedere molto più tempo del previsto per essere completati. Potremmo essere in attesa di informazioni da parte vostra e questo può ritardare il processo. A volte questi ritardi possono richiedere mesi. Questo è il motivo per cui fatturiamo sempre 30 giorni dopo il pagamento originale. A questo punto saremo a buon punto con il vostro nuovo sito web e sarete in grado di vedere i progressi',

        question9: 'Il mio sito web sarà mobile friendly?',
        answer9: 'Sì, il tuo sito web sarà completamente reattivo e sarà perfetto su tutti i dispositivi. Non facciamo pagare un extra per questo. Viene fornito come standard',

      },

      newsletter:{
        title:'NEWSLETTER',
        subtitle:'Iscriviti qui per ricevere le ultime notizie, gli aggiornamenti e le offerte speciali.',
        placeholder:'Inserisci la tua email',
        button:'Iscriviti',
        footer:'Ci preoccupiamo della protezione dei tuoi dati. Leggi la nostra ',
        link:'Politica sulla privacy',

      },

      // WORKFLOW PAGE

      workheader:{

        subtitle:'Progettiamo un\'esperienza utente fluida anticipando le interazioni con soluzioni creative, vi aiuteremo a creare la riconoscibilità del marchio fornendo un design piacevole e intuitivo. Il nostro team è in grado di creare siti web personalizzati, applicazioni mobili ed e-commerce con una varietà di strumenti e set di funzionalità che vi permetteranno di essere in cima al mondo digitale. Ottimizzazioni e revisioni sono parte della nostra cultura. Miglioriamo costantemente i nostri prodotti per aumentare i tassi di conversione e la felicità dei vostri clienti.',

      },

      workskills:{

        overtitle:'OUR SKILLS',
        title:'Competenze ed esperienza',
        subtitle:'Creiamo siti web responsive di successo che sono veloci, facili da usare e costruiti con le migliori pratiche. La principale area di competenza è lo sviluppo full-stack HTML, CSS, JS, PHP applicata alla costruzione di piccole e medie applicazioni web ed animazioni. Forniamo consulenza riguardante i più popolari CMS open-source come Wordpress.',

      },

      workfeatures:{

        overtitle:'DEPLOY FASTER',
        title:'Tutto ciò di cui hai bisogno per la tua app',
        subtitle:'Il nostro approccio allo sviluppo di siti web fonde creatività, tecnologia e analisi dei dati, dandovi la piattaforma di cui avete bisogno per raggiungere un nuovo pubblico e coinvolgere i vostri clienti.',

        name1: 'Push to Deploy',
        description1: 'Conoscenza e utilizzo di Git per il controllo delle versioni software e dei più comuni fornitori di hosting su Internet.',

        name2: 'Style',
        description2: 'Conoscenza dei più comuni framework CSS, come Bootstrap e Tailwind, per implementare facilmente delle UI user-friendly.',

        name3: 'Performant',
        description3: 'Conoscenza del framework VueJS, il modo più versatile e performante per rendere incredibilmente veloce il Virtual DOM.',

        name4: 'Advanced Security',
        description4: 'Utilizzo di Laravel, il framework PHP raccomandato per una robusta sicurezza delle applicazioni.',

        name5: 'Powerful API',
        description5: 'Gestione delle API, per semplificare il modo in cui ti connetti con i tuoi partner. (l\'API di Google Maps è un esempio popolare.)',

        name6: 'Hosting',
        description6: 'Amministrazione del servizio di hosting e gestione dei tuoi account di posta elettronica.',

      },

      workmetrics:{

        title:'Ti aiuteremo a far crescere il tuo business',
        subtitle:'Dalla commercializzazione di Internet nei primi anni \'90, lo sviluppo del Web ha subito un profondo cambiamento. Se una volta le pagine Internet erano un nudo insieme di campi di testo, oggi in primo piano c\'è un\'elaborata presentazione di contenuti multimediali. La piattaforma informativa originale è diventata ora un mezzo di intrattenimento. Gli utenti di Internet richiedono pagine web interattive con un design piacevole che permetta un uso intuitivo. Per soddisfare questa esigenza, includiamo contenuti dinamici con l\'aiuto di vari strumenti e creiamo siti web personalizzati.',

        emphasis1:'Certificates',
        rest1:'Il nostro mestiere è tenerci aggiornati in tutto ciò che è legato al mondo dello sviluppo web, per questo il nostro team è costantemente impegnato nel conseguimento di formazioni.',
        emphasis2:'Audit',
        rest2:'Esamineremo a fondo il vostro progetto digitale per individuare le aree da correggere per aiutarvi a raggiungere i vostri obiettivi di business.',

      },

      workBlogPosts:{

        overtitle:'AT WORK',
        title:'Lo facciamo così',
        subtitle:'A seconda del tipo di progetto, i passi fondamentali della costruzione di un sito web possono variare. Non tutti i siti web sono uguali: per creare un sito web aziendale, un catalogo online o un e-commerce, sono necessari diversi tipi di gestione e pianificazione. Di conseguenza, anche le fasi di realizzazione possono aumentare o essere suddivise a loro volta in sottofasi.',


        title1: 'Roadmap',
        preview1:'Per definire la visione di un prodotto o di un servizio, ci prendo il tempo di ascoltarvi e di capire i vostri bisogni e quelli dei vostri clienti. Scriviamo un documento con le specifiche tecniche, alcuni mockup, un programma e una stima del budget.',


        title2: 'Prototyping',
        preview2: 'Non esiste una formula universale e precisa, perché ogni progetto può avere caratteristiche diverse. All\'inizio bisogna definire gli obiettivi e le potenziali criticità, dopodiché si passa alla concezione del prodotto e quindi alla creazione di un prototipo.',


        title3: 'Development',
        preview3: 'Hai la visione, senti la spinta e tutto ciò di cui hai bisogno è un software? Lavoreremo con te per sviluppare questo nuovo prodotto funzionale e di design che i tuoi clienti ameranno usare.',

      },


    },


  }
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key).default
    }
  })
  return messages
}

export default createI18n({
  locale: 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
})
