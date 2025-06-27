export default class Element {
    constructor(nom, valeur, unite) {
        this.nom = nom;
        this.valeur = valeur;
        this.unite = unite;
    }

    message() {
        return console.log(`Je suis un ${this.nom}`);
    }
}