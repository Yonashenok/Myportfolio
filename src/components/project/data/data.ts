import imageJetLogix from '../../../assets/imgs/jet-logix-no-bg.png';
import imageNovaflix from '../../../assets/imgs/nov-no-bg.png';
import imageTodo from '../../../assets/imgs/to-do-no-bg.png';
import imageExpense from '../../../assets/imgs/expence-no-bg.png';

const projectInfo = {
  jetLogix: {
    title: 'JitLogix',
    image: `${imageJetLogix}`,
    gitLink: 'https://github.com/Yonashenok/jetlogix-backend',
    demoLink: 'https://jetlogix.onrender.com/login',
    description:
      'A full-stack web application design that delivers an immersive experience, allowing users to efficiently create, delete, browse, select, and reserve private jets. it is built with react as the front end, rails as the backend, and Postgresql source truth.',
  },
  novaFlix: {
    title: 'NovaFlix',
    image: `${imageNovaflix}`,
    demoLink: 'https://nova-flix.netlify.app/',
    gitLink: 'https://github.com/Yonashenok/novaflix',
    description:
      'A site to search and collect for your favorite movies and tv shows. you can add and remove your collection. build by using React, Redux and Vite, Tailwind.',
  },
  expensePal: {
    title: 'ExpensePal',
    image: `${imageExpense}`,
    demoLink: 'https://expensepal.onrender.com/',
    gitLink: 'https://github.com/Yonashenok/ExpensePal',
    description:
      'A mobile web application where you can manage your budget. you have a list of transactions associated with a category, so that you can see how much money you spent and on what.  build by using Rails, Devise, canacancan and bootstrap.',
  },
  todoApp: {
    title: 'Todo-App',
    image: `${imageTodo}`,
    demoLink: 'https://yonashenok.github.io/To-Do-list/',
    gitLink: 'https://github.com/Yonashenok/To-Do-list',
    description:
      'App for managing your day today task with different feature such as Add, Remove and Drag-Drop tasks. Built with JavaScript, HTML, SCSS, Webpack, Jest for testing',
  },
};

export default projectInfo;
