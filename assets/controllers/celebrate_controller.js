import { Controller } from '@hotwired/stimulus';
import JSConfetti from 'js-confetti';

/* stimulusFetch: 'lazy' */
export default class extends Controller {
    explot(){
        /*llamo a la funcion jsconfeti, esto lo voy a cambiar para que solamente este en el logo de la web*/
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
    }
}