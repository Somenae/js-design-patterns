import Additif from "./Additif.js";
import Allegerne from "./Allergene.js";
import Ingredient from "./Ingredient.js";

const unites = {
    MICRO_GRAMMES: 'microgrammes',
    MILLI_GRAMMES: 'milligrammes',
};

Object.freeze(unites);

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