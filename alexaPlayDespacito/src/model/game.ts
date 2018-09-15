class Game {
    opponentName: string;
    questions: Question[];

    constructor(opponentName: string, questions: Question[]) {
        this.opponentName = opponentName; this.questions = questions;
    }
}