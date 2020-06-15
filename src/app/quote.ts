export class Quote {
    showDescription: boolean;
    upvote: number;
    downvote: number;
    author: string;
    constructor(public name: string, public publisher: string, public description: string, public postDate: Date){
      this.showDescription = false;
    }
}
