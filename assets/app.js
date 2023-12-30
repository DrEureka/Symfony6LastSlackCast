import './bootstrap.js';

/* Ingreso flowbite para los formularios, esto se encuentra configurado en twig configuration y tailwind.*/
import './styles/app.css'
import alienGreeting from './lib/alien-greeting.js';
import 'flowbite';



console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉')
alienGreeting('Give us all your candy!', false);
