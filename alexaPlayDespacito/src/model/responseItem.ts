export class ResponseItem {
    title: string;
    isCorrect: Boolean;
    
    constructor(title: string, isCorrect: Boolean) {
        this.title = title; this.isCorrect = isCorrect;
    }
}