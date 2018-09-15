class Question {
    questionId: number;
    songUri: String;
    points: number;
    responses: ResponseItem[];

    constructor(songUri: String, responses: ResponseItem[]) {
        this.songUri = songUri; this.responses = responses;
    }
}