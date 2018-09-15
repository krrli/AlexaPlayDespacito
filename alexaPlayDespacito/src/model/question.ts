class Question {

    songUri: string;
    points: number;
    responses: ResponseItem[];

    constructor(songUri: string, responses: ResponseItem[]) {
        this.songUri = songUri; this.responses = responses;
    }
}