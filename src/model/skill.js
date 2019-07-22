export default class Skill {
    constructor(subject, selfScore) {
        this.subject = subject;
        this.selfScore = selfScore;
    }

    getSubject() {
        return this.subject;
    }

    getSelfScore() {
        return this.selfScore;
    }
}