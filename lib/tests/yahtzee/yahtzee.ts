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
        console.log(tab)
        return tab
    }

}
