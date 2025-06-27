import Element from "./element.js";

export default class Additif extends Element {
    constructor(nom, valeur, unite) {
        super();
        this.nom = nom;
        this.valeur = valeur;
        this.unite = unite;
    }
}