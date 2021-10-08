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
        let total = 0
        let occurences = this.countOccurences(tab)
        let isThree = false
        for(let i=0;i<tab.length;i++){
            total+= tab[i] 
        }

        for (const [key, value] of Object.entries(occurences)) {
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

    static countOccurences(tab){
        var result = {};
        tab.forEach(function(elem){
            if(elem in result){
                result[elem] = ++result[elem];
            }
            else{
                result[elem] = 1;
            }
        });
        return result;
    }
    

}
