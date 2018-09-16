import { ResponseItem } from "./responseItem";


export class Question {
    questionId: number;
    songUri: string;
    points: number;
    responses: ResponseItem[];

    constructor(songUri: string, responses: ResponseItem[]) {
        this.songUri = songUri; this.responses = responses;
    }
}