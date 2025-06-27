import Element from "./element.js";

export default class Ingredient extends Element {
    constructor(nom, valeur, unite) {
        super();
        this.nom = nom;
        this.valeur = valeur;
        this.unite = unite;
    }
}