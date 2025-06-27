import Additif from "./Additif";
import Allegerne from "./Allergene";
import Ingredient from "./Ingredient";

export default class ElementFactory {
    static creer(nom, valeur, unite) {
        switch (nom) {
            case 'ingredient':
                return new Ingredient(nom, valeur, unite);
            
            case 'allergene':
                return new Allegerne(nom, valeur, unite);
            case 'additif':
                return new Additif(nom, valeur, unite);
            default:
                return null;
        }
    }
}