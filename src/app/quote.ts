export class Quote {
    showDescription: boolean;
    upvote: number;
    downvote: number;
    constructor(public name: string, public publisher: string, public description: string, public postDate: Date){
      this.showDescription = false;
    }
}
