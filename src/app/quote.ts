export class Quote {
    showDescription: boolean;
    author: string;
    constructor(public name: string, public description: string, public postDate: Date){
        this.showDescription = false;
    }
}
