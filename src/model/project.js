export default class Project {
    constructor(detailsUrl, imageUrl) {
        this.detailsUrl = detailsUrl;
        this.imageUrl = imageUrl;
    }

    getImageUrl() {
        return this.imageUrl;
    }

    getDetailsUrl() {
        return this.detailsUrl;
    }
}