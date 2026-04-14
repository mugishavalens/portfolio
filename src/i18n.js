import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', exp: 'Experience', contact: 'Contact' },
          hero: { title: 'Elevating', subtitle: 'Digital Solutions', desc: "I'm {{name}}, a Software Engineer dedicated to crafting high-performance applications and solving complex architectural challenges with precision.", viewWork: 'Explore Projects', downloadCV: 'Download CV', available: 'Available for Opportunities', current: 'Currently', innovating: 'Innovating at AUCA' },
          about: { title: 'About', subtitle: 'My Vision', p1: 'As a Software Engineering student at the {{org}}, I am on a mission to build technology that transcends boundaries.', p2: 'My engineering philosophy centers on {{clean}} and {{efficiency}}. Through rigorous training with {{a2sv}}, I\'ve cultivated a deep proficiency in data structures and scalable system design.', p3: 'Beyond the terminal, I focus on the intersection of big data and cybersecurity, always seeking to understand the "why" behind the code.', stat1: 'Years of Depth', stat1Desc: 'Continuous learning', stat2: 'Projects Built', stat2Desc: 'Full-stack solutions', stat3: 'Elite Training', stat3Desc: 'Top 1% talent track', stat4: 'Tech Stack', stat4Desc: 'Always evolving' },
          exp: { title: 'Career', subtitle: 'Timeline', items: { i1: { org: 'Innovation Center - AUCA', role: 'Software Developer Intern', desc: 'Driving digital transformation initiatives and architecting scalable backend services.' }, i2: { org: 'A2SV', role: 'Competitive Programming', desc: 'Intensive training in data structures and algorithmic complexity.' }, i3: { org: 'The Gym Program', role: 'IT Trainee & Developer', desc: 'Full-immersion technical training focused on system architecture.' }, i4: { org: 'AUCA', role: 'B.A. in Software Engineering', desc: 'Specializing in Distributed Systems and Data Processing.' } } },
          skills: { title: 'Technical', subtitle: 'Skills' },
          projects: { title: 'Featured', subtitle: 'Projects' },
          contact: { title: 'Get In', subtitle: 'Touch', talk: "Let's talk about your project", email: 'Email', github: 'GitHub', linkedin: 'LinkedIn', name: 'Your Name', emailLabel: 'Your Email', message: 'Message', send: 'Send Message' },
          footer: { rights: 'All rights reserved.', made: 'Made with' }
        }
      },
      fr: {
        translation: {
          nav: { home: 'Accueil', about: 'À propos', skills: 'Compétences', projects: 'Projets', exp: 'Expérience', contact: 'Contact' },
          hero: { title: 'Élever les', subtitle: 'Solutions Numériques', desc: "Je suis {{name}}, un ingénieur logiciel dédié à la création d'applications haute performance et à la résolution de défis architecturaux complexes avec précision.", viewWork: 'Explorer les Projets', downloadCV: 'Télécharger le CV', available: 'Disponible pour des Opportunités', current: 'Actuellement', innovating: 'Innovation à l\'AUCA' },
          about: { title: 'À propos de', subtitle: 'Ma Vision', p1: 'En tant qu\'étudiant en génie logiciel à l\'{{org}}, ma mission est de construire une technologie qui transcende les frontières.', p2: 'Ma philosophie d\'ingénierie se concentre sur l\'{{clean}} et l\'{{efficiency}}. Grâce à une formation rigoureuse avec {{a2sv}}, j\'ai cultivé une profonde compétence dans les structures de données et la conception de systèmes évolutifs.', p3: 'Au-delà du terminal, je me concentre sur l\'intersection du big data et de la cybersécurité, cherchant toujours à comprendre le « pourquoi » derrière le code.', stat1: 'Années de Profondeur', stat1Desc: 'Apprentissage continu', stat2: 'Projets Construits', stat2Desc: 'Solutions full-stack', stat3: 'Formation d\'Élite', stat3Desc: 'Top 1% des talents', stat4: 'Stack Technique', stat4Desc: 'Toujours en évolution' },
          exp: { title: 'Parcours', subtitle: 'Professionnel', items: { i1: { org: 'Centre d\'Innovation - AUCA', role: 'Stagiaire Développeur Logiciel', desc: 'Piloter des initiatives de transformation numérique et architecturer des services backend évolutifs.' }, i2: { org: 'A2SV', role: 'Programmation Compétitive', desc: 'Formation intensive en structures de données et complexité algorithmique.' }, i3: { org: 'The Gym Program', role: 'Stagiaire IT & Développeur', desc: 'Formation technique en immersion totale axée sur l\'architecture système.' }, i4: { org: 'AUCA', role: 'B.A. en Génie Logiciel', desc: 'Spécialisation dans les systèmes distribués et le traitement des données.' } } },
          skills: { title: 'Compétences', subtitle: 'Techniques' },
          projects: { title: 'Projets', subtitle: 'Vedettes' },
          contact: { title: 'Entrer en', subtitle: 'Contact', talk: "Parlons de votre projet", email: 'Email', github: 'GitHub', linkedin: 'LinkedIn', name: 'Votre Nom', emailLabel: 'Votre Email', message: 'Message', send: 'Envoyer' },
          footer: { rights: 'Tous droits réservés.', made: 'Fait avec' }
        }
      },
      rw: {
        translation: {
          nav: { home: 'Ahabanza', about: 'Ibinyerekeye', skills: 'Ubumenyi', projects: 'Imishinga', exp: 'Inararibonye', contact: 'Twandikire' },
          hero: { title: 'Guteza Imbere', subtitle: 'Ibisubizo by\'Ikoranabuhanga', desc: "Ndi {{name}}, Umwenjenyeri w'Ibisubizo by'Ikoranabuhanga wiyeguriye gukora porogaramu zifite imbaraga no gukemura ibibazo bikomeye by'imyubakire y'ikoranabuhanga mu buryo bunoze.", viewWork: 'Reba Imishinga', downloadCV: 'Kurura CV', available: 'Niteguye Akazi', current: 'Ubu', innovating: 'Guhanga udushya muri AUCA' },
          about: { title: 'Ibinyerekeye', subtitle: 'Icyerekezo Cyange', p1: 'Nk\'umunyeshuri wiga Ubwenjenyeri bw\'Ibisubizo by\'Ikoranabuhanga muri {{org}}, intego yanjye ni ugukora ikoranabuhanga rirambye.', p2: 'Imyubakire yanjye yibanda kuri {{clean}} no ku {{efficiency}}. Binyuze mu mahugurwa akomeye ya {{a2sv}}, nubatse ubumenyi bwimbitse mu miterere y\'amakuru no gushushanya sisitemu nini.', p3: 'Usibye gukora porogaramu, nibanda ku mpanuro z\'amakuru manini n\'umutekano w\'ikoranabuhanga.', stat1: 'Imyaka yo Kwiga', stat1Desc: 'Kwiga bitagira iherezo', stat2: 'Imishinga Yakozwe', stat2Desc: 'Ibisubizo byuzuye', stat3: 'Amahugurwa yo ku Rwego rwo Hejuru', stat3Desc: 'Abanyempano ba mbere', stat4: 'Ibikoresho by\'Ikoranabuhanga', stat4Desc: 'Bikura buri munsi' },
          exp: { title: 'Inzira y\'', subtitle: 'Inararibonye', items: { i1: { org: 'Ikigo cy\'Udushya - AUCA', role: 'Umwigishwa mu Kwubaka Porogaramu', desc: 'Guhanga udushya mu guhindura imikorere n\'ikoranabuhanga.' }, i2: { org: 'A2SV', role: 'Guhiganwa mu Kwubaka Porogaramu', desc: 'Amahugurwa akomeye mu miterere y\'amakuru.' }, i3: { org: 'The Gym Program', role: 'Umwigishwa n\'Umwubatsi wa Porogaramu', desc: 'Amahugurwa yibanda ku myubakire ya sisitemu.' }, i4: { org: 'AUCA', role: 'Impamyabumenyi y\'Icyiciro cya Kabiri', desc: 'Kwibanda kuri Sisitemu n\'Ikurikiranwa ry\'Amakuru.' } } },
          skills: { title: 'Ubumenyi', subtitle: 'bw\'Ikoranabuhanga' },
          projects: { title: 'Imishinga', subtitle: 'y\'Indashyikirwa' },
          contact: { title: 'Twandikire', subtitle: 'Tuvugane', talk: "Tuganire ku mushinga wawe", email: 'Imeli', github: 'GitHub', linkedin: 'LinkedIn', name: 'Izina ryawe', emailLabel: 'Imeli yawe', message: 'Ubutumwa', send: 'Ohereza' },
          footer: { rights: 'Uburenganzira bwose burasigasigwa.', made: 'Byakozwe na' }
        }
      },
      sw: {
        translation: {
          nav: { home: 'Nyumbani', about: 'Kuhusu', skills: 'Ujuzi', projects: 'Miradi', exp: 'Uzoefu', contact: 'Mawasiliano' },
          hero: { title: 'Kukuza', subtitle: 'Suluhisho za Kidijitali', desc: "Mimi ni {{name}}, Mhandisi wa Programu aliyejitolea kuunda programu zenye utendaji wa juu na kutatua changamoto tata za usanifu kwa usahihi.", viewWork: 'Angalia Miradi', downloadCV: 'Pakua CV', available: 'Napatikana kwa Fursa', current: 'Kwa sasa', innovating: 'Uvumbuzi katika AUCA' },
          about: { title: 'Kuhusu', subtitle: 'Maono Yangu', p1: 'Kama mwanafunzi wa Uhandisi wa Programu katika {{org}}, niko kwenye dhamira ya kujenga teknolojia inayovuka mipaka.', p2: 'Falsafa yangu ya uhandisi inajikita kwenye {{clean}} na {{efficiency}}. Kupitia mafunzo makali na {{a2sv}}, nimekuza ustadi wa kina katika miundo ya data na usanifu wa mifumo mikubwa.', p3: 'Zaidi ya kuandika msimbo, ninazingatia makutano ya data kubwa na usalama wa mitandao.', stat1: 'Miaka ya Kujifunza', stat1Desc: 'Kujifunza kwa kuendelea', stat2: 'Miradi Iliyojengwa', stat2Desc: 'Suluhisho kamili', stat3: 'Mafunzo ya Wasomi', stat3Desc: 'Vipaji bora zaidi', stat4: 'Zana za Teknolojia', stat4Desc: 'Zinazobadilika kila wakati' },
          exp: { title: 'Safari ya', subtitle: 'Kazi', items: { i1: { org: 'Kituo cha Uvumbuzi - AUCA', role: 'Mwanafunzi wa Maendeleo ya Programu', desc: 'Kuongoza mipango ya mabadiliko ya kidijitali.' }, i2: { org: 'A2SV', role: 'Mashindano ya Upangaji Programu', desc: 'Mafunzo ya kina katika miundo ya data.' }, i3: { org: 'The Gym Program', role: 'Mwanafunzi wa IT & Msanidi Programu', desc: 'Mafunzo ya kiufundi yanayozingatia usanifu wa mifumo.' }, i4: { org: 'AUCA', role: 'Shahada ya Uhandisi wa Programu', desc: 'Kubobea katika Mifumo ya Kusambaza na Usindikaji wa Data.' } } },
          skills: { title: 'Ujuzi wa', subtitle: 'Kiufundi' },
          projects: { title: 'Miradi', subtitle: 'Maalum' },
          contact: { title: 'Wasiliana', subtitle: 'Nasi', talk: "Tuzungumze kuhusu mradi wako", email: 'Barua Pepe', github: 'GitHub', linkedin: 'LinkedIn', name: 'Jina Lako', emailLabel: 'Barua Pepe Yako', message: 'Ujumbe', send: 'Tuma Ujumbe' },
          footer: { rights: 'Haki zote zimehifadhiwa.', made: 'Imetengenezwa na' }
        }
      },
      tr: {
        translation: {
          nav: { home: 'Ana Sayfa', about: 'Hakkımda', skills: 'Yetenekler', projects: 'Projeler', exp: 'Deneyim', contact: 'İletişim' },
          hero: { title: 'Yükseltiyoruz', subtitle: 'Dijital Çözümler', desc: "Ben {{name}}, yüksek performanslı uygulamalar geliştirmeye ve karmaşık mimari zorlukları hassasiyetle çözmeye kendini adamış bir Yazılım Mühendisi adayıyım.", viewWork: 'Projeleri Keşfet', downloadCV: 'CV İndir', available: 'Fırsatlara Açık', current: 'Şu an', innovating: 'AUCA\'da İnovasyon' },
          about: { title: 'Hakkımda', subtitle: 'Vizyonum', p1: '{{org}}\'da Yazılım Mühendisliği öğrencisi olarak, sınırları aşan teknolojiler inşa etme misyonundayım.', p2: 'Mühendislik felsefem {{clean}} ve {{efficiency}} üzerine kuruludur. {{a2sv}} ile aldığım sıkı eğitim sayesinde veri yapıları ve ölçeklenebilir sistem tasarımı konusunda derin bir yetkinlik kazandım.', p3: 'Kodlamanın ötesinde, büyük veri ve siber güvenliğin kesişimine odaklanıyor, her zaman kodun arkasındaki "neden"i anlamaya çalışıyorum.', stat1: 'Derinlik Yılları', stat1Desc: 'Sürekli öğrenme', stat2: 'Geliştirilen Projeler', stat2Desc: 'Tam kapsamlı çözümler', stat3: 'Seçkin Eğitim', stat3Desc: 'En iyi %1 yetenek yolu', stat4: 'Teknoloji Yığını', stat4Desc: 'Her zaman gelişen' },
          exp: { title: 'Kariyer', subtitle: 'Zaman Çizelgesi', items: { i1: { org: 'İnovasyon Merkezi - AUCA', role: 'Yazılım Geliştirme Stajyeri', desc: 'Dijital dönüşüm girişimlerini yönetmek ve ölçeklenebilir backend servisleri tasarlamak.' }, i2: { org: 'A2SV', role: 'Rekabetçi Programlama', desc: 'Veri yapıları ve algoritmik karmaşıklık üzerine yoğun eğitim.' }, i3: { org: 'The Gym Program', role: 'BT Stajyeri ve Geliştirici', desc: 'Sistem mimarisine odaklanan tam kapsamlı teknik eğitim.' }, i4: { org: 'AUCA', role: 'Yazılım Mühendisliği Lisansı', desc: 'Dağıtık Sistemler ve Veri İşleme üzerine uzmanlaşma.' } } },
          skills: { title: 'Teknik', subtitle: 'Yetenekler' },
          projects: { title: 'Öne Çıkan', subtitle: 'Projeler' },
          contact: { title: 'İletişime', subtitle: 'Geçin', talk: "Projeniz hakkında konuşalım", email: 'E-posta', github: 'GitHub', linkedin: 'LinkedIn', name: 'Adınız', emailLabel: 'E-postanız', message: 'Mesajınız', send: 'Mesaj Gönder' },
          footer: { rights: 'Tüm hakları saklıdır.', made: 'İle yapıldı' }
        }
      }
    }
  });

export default i18n;
