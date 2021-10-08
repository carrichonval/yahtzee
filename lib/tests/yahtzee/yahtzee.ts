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
        let result: number =0;
        for(let i=0;i<tab.length;i++){
            if(tab[i]==1){
                result++;
            }
        }
        return result;
    }

    static isTwos(tab :Array<number>) : number
    {
        let result: number =0;
        for(let i=0;i<tab.length;i++){
            if(tab[i]==2){
                result = result + 2
            }
        }
        return result;
    }

    static isThrees(tab :Array<number>) : number
    {
        let result: number =0;
        for(let i=0;i<tab.length;i++){
            if(tab[i]==3){
                result = result + 3
            }
        }
        return result;
    }

    static isFours(tab :Array<number>) : number
    {
        let result: number = 0;
        for(let i=0;i<tab.length;i++){
            if(tab[i]==4){
                result = result + 4
            }
        }
        return result;
    }

}
