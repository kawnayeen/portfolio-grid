import Project from "../../model/project";

const detailsBaseUrl = 'https://picsum.photos/1200/768.jpg?image=';
const imageBaseUrl = 'https://picsum.photos/600.jpg?image=';

export default () => [
    new Project(`${detailsBaseUrl}255`, `${imageBaseUrl}255`),
    new Project(`${detailsBaseUrl}256`, `${imageBaseUrl}256`),
    new Project(`${detailsBaseUrl}257`, `${imageBaseUrl}257`),
    new Project(`${detailsBaseUrl}258`, `${imageBaseUrl}258`),
    new Project(`${detailsBaseUrl}259`, `${imageBaseUrl}259`),
    new Project(`${detailsBaseUrl}260`, `${imageBaseUrl}260`),
    new Project(`${detailsBaseUrl}261`, `${imageBaseUrl}261`),
    new Project(`${detailsBaseUrl}250`, `${imageBaseUrl}250`)
];