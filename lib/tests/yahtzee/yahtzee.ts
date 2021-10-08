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

}
