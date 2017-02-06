export class Message {

    constructor(objet, message, etat) {
        this.objet = objet;
        this.message = message;
        this.etat = etat;
    }

    toString() { return `Message :  = ${this.message}`}
}
