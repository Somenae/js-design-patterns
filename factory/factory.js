import Additif from "./Additif.js";
import Allegerne from "./Allergene.js";
import Ingredient from "./Ingredient.js";

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