import App from './App.vue';
import Menu from './components/Menu.vue';
import Contact from './components/Contact.vue';
import Info from './components/Info.vue';
import Work from './components/Work.vue';
import Project from './components/Project.vue';


export const routes = [
  {path: '/', component: Menu},
  {path: '/contact', component: Contact},
  {path: '/info', component: Info},
  {path: '/work', component: Work},
  // {path: '/project', component: Project},
  {path: '/project/:id', component: Project},
]
