import Experience from "../../model/experience";

export default () => [
    new Experience(
        'Cefalo AS',
        '+88 02 9131954',
        [
            'Working as full stack engineer, from db design to customer facing gui',
            'Developing frontend application using React with Redux',
            'Developing RESTful services using Ktor framework',
            'Conducting verbal technical interview'
        ],
        'Senior Software Engineer',
        2019,
        'present'
    ),
    new Experience(
        'Cefalo AS',
        '+88 02 9131954',
        [
            'Android & iOS application development using native technologies',
            'Build automation for Android and iOS project',
            'Architecting fault tolerant cloud infrastructure for micro-services developed in Spring technology'
        ],
        'Software Engineer',
        2017,
        2019
    ),
    new Experience(
        'Pechas Game Studios',
        '+88 02 9893151',
        [
            'Overseer the development & deployment of multiple game product for Android & iOS platform.',
            'Designing business objects of the system and defining the interfaces of different modules',
            'Developing web backend to provide all the RESTful services required for the game',
            'Breaking down the development process in different milestones & achieve them'
        ],
        'Lead Developer',
        2014,
        2017
    )
];