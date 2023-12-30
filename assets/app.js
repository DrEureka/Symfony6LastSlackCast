import './bootstrap.js';

/* Ingreso flowbite para los formularios, esto se encuentra configurado en twig configuration y tailwind.*/
import './styles/app.css'
import alienGreeting from './lib/alien-greeting.js';
import JSConfetti from 'js-confetti';
import 'flowbite';

/*llamo a la funcion jsconfeti, esto lo voy a cambiar para que solamente este en el logo de la web*/
/*const jsConfetti = new JSConfetti();
jsConfetti.addConfetti();*/

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉')
alienGreeting('Give us all your candy!', false);
