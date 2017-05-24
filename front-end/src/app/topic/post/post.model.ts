export class PostModel {
    constructor(public id: number, 
    	     public owner: string,  
    	      public text: string, 
    public totalFavorites:number=0){
    }
}