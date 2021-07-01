export const en = {
  contacts: {
    contactItems: [{
      link: '+380937277205',
      title: 'Phone',
      type: 'phone'
    }, {
      link: 'shyian.ivan@yahoo.com',
      title: 'Email',
      type: 'email'
    }, {
      link: 'https://www.linkedin.com/in/ivan-shyian',
      title: 'LinkedIn',
      type: 'link'
    }, {
      link: 'https://github.com/ivanShyian',
      title: 'GitHub',
      type: 'link'
    }, {
      link: 'https://t.me/vanjke',
      title: 'Telegram',
      type: 'link'
    }, {
      link: 'https://www.facebook.com/vanjkes',
      title: 'Facebook',
      type: 'link'
    }, {
      link: 'https://www.instagram.com/vanjkes',
      title: 'Instagram',
      type: 'link'
    }, {
      link: 'https://drive.google.com/file/d/1IWm-739OclG3yVJl_6WhdyKwkQ4FUcJZ/view?usp=sharing',
      title: 'CV (Resume)',
      type: 'link'
    }],
    page: '<!--Contacts-->'
  },
  projects: {
    additional: 'Of course, these are not all of my projects. There were a couple of sites that I could show you but I think you are not interested in pure html and css. At this point in time, all forces are thrown into the development with Vue2, Vue3 and also NuxtJS. Anyway you can check my github for all repositories that i have: ',
    additionalLabel: 'Additional info',
    usedTech: 'Used technologies',
    card: [{
      smallDescription: 'Fitbody application that help people to gain, lose, keep weight and control daily ration',
      text: 'This project was developed as a graduation project for the university. Fitbody was created with Vue 3 Optional API. Application store every user data in firebase database and has access to these data through REST API. All functional moments processed on Frontend side. Actually it\'s not a final version and part of functionality is disabled.. anyway you can try it by this link:',
      title: 'FitBody',
      technologies: ['Vue 3 Optional API', 'Firebase auth + database', 'yup + vee-validate (fields validating)', 'REST API']
    }, {
      smallDescription: 'Online store where you can buy everything',
      text: 'Online store that was built as a graduation project for vue-course.This project designed very simply but the main goal was built store that functionality corresponds to any other store. This project has role-based layer that gives user with "admin" status additional capabilities, like adding new categories and products to store and track new client orders. There was used Composition API Hooks for build cart and auth logical parts. Follow this link to see the project:',
      title: 'VueStore',
      technologies: ['Vue 3 Composition API', 'Firebase database + auth', 'yup + vee-validate (fields validating)', 'cloudpayments', 'REST API']
    }, {
      title: 'This portfolio',
      smallDescription: 'I can\'t forget for my portfolio',
      text: 'Project was built with Vue 2 + Vuetify and vue-internalization. English lang i store inside a project because that is fallback language.. Other two (ru, uk) i\'m fetching from Firebase and show to user after success load. Link: (You already here)',
      technologies: ['Vue 2', 'Vuetify', 'vue-i18n (localization)', 'Firebase database']
    }
      // {
      // img: ['stardb/react-star-db.png'],
      // smallDescription: 'Web-dictionary of the Starwars universe',
      // text: 'SocketChat',
      // title: 'SocketChat',
      // technologies: ['Vue 3 Composition API', 'Typescript', 'Firebase SDK + database', 'socket.io', 'expressJS']
      // }
    ],
    page: '<!--Projects-->'
  },
  experience: {
    page: '<!--Experience-->',
    responsibilities: 'Responsibilities',
    position: 'Position',
    workingTime: 'Working time',
    jobs: [
      {
        title: 'Inrating',
        subtitle: 'Social Network & TV Channel',
        position: 'Frontend-developer',
        workingTime: '6 month',
        content: `Inrating is multiplatform network. Web-frontend based on VueJS 2 and half of this project wrote with
                  vue-class-component + vue-property-decorator + typescript (Components Class based approach).
                  My area was mobile and desktop versions - there was two different projects with own conceptions. I have closely worked there with socket.io because of project has own TV Channel that works through websockets,
                  also like chat and some notifications.
                  Worked with api routes provides from backend, especially often i worked with backend of my team.
                  New functionality i have writing only with typescript
                  Additionally there was to many bugs reported in JIRA backlog that was fixed by me`,
        responsibilities: ['Supporting code', 'Writing new functionality', 'UI Component building', 'Raising Performance', 'Refactoring', 'Fixing bugs']
      }
    ]
  },
  link: 'Link',
  phone: 'Phone',
  navigation: {
    contacts: 'Contacts',
    projects: 'Projects',
    resume: 'Resume',
    study: 'Study',
    experience: 'Experience'
  },
  openButton: 'OPEN',
  resume: {
    age: '23 years-old',
    content: 'Hello, my name is Ivan and I am 23 years old. My journey as developer began over a year ago. The beginning was made when I needed a reference site. Spurred on my own interest, I decided to start learning the HTML, CSS and also Javascript. At that time, I have already knew for sure that I would become a developer. After having mastered in Javascript, I started to learn ReactJS and write small projects, but my attention was sticky up to updated Vue 3, that was released with Typescript support and new representation that named “Composition API”. After reading the documentation, passing a couple of courses and several projects were written that allowed me to feel free in Vue environment. At the moment I am working as a Frontend developer on a project based on Vue 2, about this you can read more in the "Experience" tab. Every day I continue to work on my skills and on myself in particular.',
    name: 'Ivan Shyian',
    page: '<!--Resume-->',
    place: 'Kyiv, Ukraine',
    position: 'Frontend developer',
    stackLabel: 'Stack',
    stackParagraphs: {
      code: 'Programming languages and Frameworks',
      other: 'Other useful things',
      styles: 'СSS and UI Frameworks'
    }
  },
  study: {
    author: 'Author',
    certLink: 'Certificate link',
    courseList: [{
      author: 'Ivan Petrychenko',
      content: 'Course where i learn most useful information about Javascript and also how Javascript works',
      name: 'The Complete JavaScript + React Course',
      theoryTime: '41,5 hours'
    }, {
      author: 'Juriy Bura',
      content: 'An online course where I became acquainted with the JavaScript React.js framework. A total of 20 hours of theory were passed',
      name: 'React + Redux - Professional Development',
      theoryTime: '22 hours'
    }, {
      author: 'Maximilian Schwarzmüller',
      content: 'Online course where i got acquainted with Vue 2 and a little bit with Vue 3',
      name: 'Vue - The Complete Guide (w/ Router, Vuex, Composition API)',
      theoryTime: '48,5 hours'
    }, {
      author: 'Vladilen Minin',
      cert: 'https://drive.google.com/file/d/1BarAE58yFzzOH0k4w1cEv2tf4uINM3OJ/view?usp=sharing',
      content: 'The most useful course where i learned how to use Vue 3 in production. How develop any application on this framework',
      name: 'Vue 3 - Profession',
      theoryTime: '20 hours'
    }, {
      author: 'Maximilian Schwarzmüller',
      content: 'Course of the actual codding-language to the current period. This course helped me to understand additional features that Typescript provides to developer and also this increased my skills in development',
      name: 'Understanding TypeScript - 2021 Edition',
      theoryTime: '15 hours'
    }],
    page: '<!--Study-->',
    theoryTime: 'Theory time'
  }
}
