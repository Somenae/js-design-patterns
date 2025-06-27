import ElementFactory from "./factory.js";

const unites = {
    MICRO_GRAMMES: 'microgrammes',
    MILLI_GRAMMES: 'milligrammes',
};

Object.freeze(unites);


const additif = ElementFactory.creer('additif', 50, unites.MICRO_GRAMMES);
additif.message();