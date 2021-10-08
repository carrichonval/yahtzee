export class Yahtzee{

    static lanceUnDe(): number
    {
        return Math.floor(Math.random() * 6)+1;    
    }

    static lancer() : Array<number>
    {
        let tab = []
        for (let i = 1; i <=5 ; i++) {
            tab.push(this.lanceUnDe())
        }
        return tab
    }

    static isOnes(tab :Array<number>) : number
    {
        return this.calculateNumber(tab,1);
    }

    static isTwos(tab :Array<number>) : number
    {
        return this.calculateNumber(tab,2);
    }

    static isThrees(tab :Array<number>) : number
    {
        return this.calculateNumber(tab,3);
    }

    static isFours(tab :Array<number>) : number
    {
        return this.calculateNumber(tab,4);
    }
    static isFives(tab :Array<number>) : number
    {
        return this.calculateNumber(tab,5);
    }
    static isSixes(tab :Array<number>) : number
    {
        return this.calculateNumber(tab,6);
    }

    static calculateNumber(tab :Array<number>,dice:number) : number
    {
        let result: number = 0;
        for(let i=0;i<tab.length;i++){
            if(tab[i]==dice){
                result = result + dice
            }
        }
        return result;
    }

    static threeOfKind(tab : Array<number>) : number
    {
        let total : number = 0
        let occurences : object = this.countOccurences(tab)
        let isThree : boolean = false

        for(let  i : number = 0;i<tab.length;i++){
            total+= tab[i] 
        }

        for (const [propriete, value] of Object.entries(occurences)) {
            if(value >= 3){
                isThree = true
            }
        }

        if(isThree){
            return total
        }else{
            return 0
        }
    }

    static fourOfKind(tab : Array<number>) : number
    {
        let total : number = 0
        let occurences : object = this.countOccurences(tab)
        let isFour : boolean = false

        for(let  i : number = 0; i<tab.length; i++){
            total += tab[i] 
        }

        for (const [propriete, value] of Object.entries(occurences)) {
            if(value >= 4){
                isFour = true
            }
        }

        if(isFour){
            return total
        }else{
            return 0
        }
    }

    static fullHouse(tab : Array<number>) : number
    {
        let occurences : object = this.countOccurences(tab)
        let isThree : boolean = false
        let isTwo : boolean = false

        for (const [propriete, value] of Object.entries(occurences)) {
            if(value == 3){
                isThree = true
            }
            if(value == 2){
                isTwo = true
            }
        }

        if(isThree && isTwo){
            return 25;
        }else{
            return 0;
        }
    }

    static smallStraight(tab : Array<number>) : number
    {
        let occurences : object = this.countOccurences(tab)
        let size = Object.keys(occurences).length
        if(size >= 4 && occurences.hasOwnProperty(3)){
            return 30
        }else{
            return 0
        }

    }

    static largeStraight(tab : Array<number>) : number
    {
        let occurences : object = this.countOccurences(tab)
        let size = Object.keys(occurences).length
        if(size >= 5 && occurences.hasOwnProperty(2) &&  occurences.hasOwnProperty(3) &&  occurences.hasOwnProperty(4) &&  occurences.hasOwnProperty(5)){
            return 40
        }else{
            return 0
        }       
       
    }

    static chance(tab : Array<number>) : number
    {
        let result : number = 0;
        for(let i=0; i<tab.length; i++){
            result += tab[i]
        }
        return result;
    }

    static yahtzee(tab : Array<number>) : number
    {
        let occurences : object = this.countOccurences(tab)
        let isFive : boolean = false

        for (const [propriete, value] of Object.entries(occurences)) {
            if(value == 5){
                isFive = true
            }
        }

        if(isFive){
            return 50;
        }else{
            return 0;
        }
    }

    static countOccurences(tab){
        var result = {}
        tab.forEach(function(elem){
            if(elem in result){
                result[elem] = ++result[elem]
            }
            else{
                result[elem] = 1;
            }
        });
        return result;
    }
    


}
