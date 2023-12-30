import './bootstrap.js';

/* Ingreso flowbite para los formularios, esto se encuentra configurado en twig configuration y tailwind.*/
import './styles/app.css'
import alienGreeting from './lib/alien-greeting.js';
import 'flowbite';
import * as Turbo from '@hotwired/turbo';



console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉')
alienGreeting('Give us all your candy!', false);
/*apagar turbo
Turbo.session.drive = false;*/
