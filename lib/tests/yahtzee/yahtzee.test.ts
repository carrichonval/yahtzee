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
        let value = Yahtzee.isOnes(tab)
        assert.equal(2,value);
    });
    it('Test Twos', () => { 
        let tab:Array<number> = [1,2,2,1,2]  
        let value = Yahtzee.isTwos(tab)
        assert.equal(6,value);
    });
    it('Test Threes', () => { 
        let tab:Array<number> = [3,5,3,3,3]  
        let value = Yahtzee.isThrees(tab)
        assert.equal(12,value);
    });
    it('Test Fours', () => { 
        let tab:Array<number> = [4,4,3,3,3]  
        let value = Yahtzee.isFours(tab)
        assert.equal(8,value);
    });
    it('Test Fives', () => { 
        let tab:Array<number> = [5,1,5,5,6]  
        let value = Yahtzee.isFives(tab)
        assert.equal(15,value);
    });
    
});


