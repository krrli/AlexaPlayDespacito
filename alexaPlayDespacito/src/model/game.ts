import { Question } from "./question";

export class Game {
    gameId: String;
    opponentName: String;
    questions: Question[];

    constructor(opponentName: String, questions: Question[]) {
        this.opponentName = opponentName; this.questions = questions;
    }
}