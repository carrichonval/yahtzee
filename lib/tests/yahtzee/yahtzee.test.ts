import { assert, expect } from 'chai';
const chai = require('chai');
import { ChaiPlugin as ChaiPluginAssertType } from 'chai-asserttype-extra';
chai.use(ChaiPluginAssertType);

describe('FizzBuzz', () => {
    it('Renvoie un dé avec une valeur entre 1 et 6', () => {
        //on fait ce test pour savoir si la futur fonction va bien renvoyé un nombre entre 1 et 6
        let number = lanceUnDe()
        expect(number).to.be.within(1,6);
    });
});


