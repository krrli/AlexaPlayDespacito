import { Question } from "./question";

export class Game {
    gameId: string;
    opponentName: string;
    questions: Question[];

    constructor(opponentName: string, questions: Question[]) {
        this.opponentName = opponentName; this.questions = questions;
    }
}