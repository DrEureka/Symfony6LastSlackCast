import './bootstrap.js';

/* Ingreso flowbite para los formularios, esto se encuentra configurado en twig configuration y tailwind.*/
import './styles/app.css'
import alienGreeting from './lib/alien-greeting.js';
import 'flowbite';
import * as Turbo from '@hotwired/turbo';
import { shouldPerformTransition, performTransition } from 'turbo-view-transitions';



console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉')
alienGreeting('Give us all your candy!', false);
/*apagar turbo
Turbo.session.drive = false;*/

/*Turbo transition para las vistas*/
let skipNextRenderTransition = false;
document.addEventListener('turbo:before-render', (event) => {
    if (shouldPerformTransition() && !skipNextRenderTransition) {
        event.preventDefault();
        performTransition(document.body, event.detail.newBody, async () => {
            await event.detail.resume();
        });
    }
});
document.addEventListener('turbo:load', () => {
    // View Transitions don't play nicely with Turbo cache
    // if (shouldPerformTransition()) Turbo.cache.exemptPageFromCache();
});

/*Turbo frame transition*/
document.addEventListener('turbo:before-frame-render', (event) => {
    if (shouldPerformTransition() && !event.target.hasAttribute('data-skip-transition')) {
        event.preventDefault();
        skipNextRenderTransition = true;
        setTimeout(() => {
            skipNextRenderTransition = false;
        }, 100);
        performTransition(event.target, event.detail.newFrame, async () => {
            await event.detail.resume();
        });
    }
});