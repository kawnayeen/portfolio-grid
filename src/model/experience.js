export default class Experience {
    constructor(companyName, companyPhone, jobDescription, position, start, end) {
        this.companyName = companyName;
        this.companyPhone = companyPhone;
        this.jobDescription = jobDescription;
        this.position = position;
        this.start = start;
        this.end = end;
    }

    getCompanyName() {
        return this.companyName;
    }

    getCompanyPhone() {
        return `Phone: ${this.companyPhone}`;
    }

    getJobDescription() {
        return this.jobDescription;
    }

    getPosition() {
        return `Position: ${this.position}`;
    }

    getDuration() {
        return `Dates: ${this.start} - ${this.end}`;
    }
}