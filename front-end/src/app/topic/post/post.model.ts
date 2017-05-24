export class PostModel {
    constructor(public id: number, 
    	     public autor:{nome:string,id:number},
    	  public mensagem: string, 
    public totalFavorites:number=0){
    }
}