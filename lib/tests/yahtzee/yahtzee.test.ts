import { assert, expect } from 'chai';
const chai = require('chai');
var should = require('chai').should()
import { ChaiPlugin as ChaiPluginAssertType } from 'chai-asserttype-extra';
chai.use(ChaiPluginAssertType);
import {Yahtzee} from './yahtzee'

describe('FizzBuzz', () => {
    it('Renvoie un dé avec une valeur entre 1 et 6', () => {
        //on fait ce test pour savoir si la futur fonction va bien renvoyé un nombre entre 1 et 6
        let number = Yahtzee.lanceUnDe()
        expect(number).to.be.within(1,6);
    });
    it('Renvoie un tableau de 5', () => {   
        let lancer = Yahtzee.lancer()
        lancer.should.have.lengthOf(5)
    });
    it('Test Ones', () => { 
        let tab:Array<number> = [1,2,4,1,3]  
        let isOnes = Yahtzee.isOnes(tab)
        assert.equal(2,isOnes);
    });
    
});


