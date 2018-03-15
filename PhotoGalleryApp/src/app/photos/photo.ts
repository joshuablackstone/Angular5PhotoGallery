export class Photo {
    id: number;
    Title: string;
    Description?: string;
    ImageUrl: string;
    DateCreated: Date;
    DateModified?: Date;
    File?: any;

    constructor(){
        this.id = 0;
        this.DateCreated = new Date();
    }
}

