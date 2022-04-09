
export class Quote {
    id: number
    text: string
    upvotes: number
    downvotes: number
    constructor(id: number, text: string, upvotes: number, downvotes: number) {
        this.id = id
        this.text= text
        this.upvotes = upvotes
        this.downvotes = downvotes
    }
}


