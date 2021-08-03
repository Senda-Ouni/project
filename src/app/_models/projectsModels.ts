export class SearchCriteria {
    constructor() {

    }
    year: number;
    monthMin: number;
    monthMax: number;
    governorateId: number;
    projectStateId: number;
}

export class SearchCriteriaByState {
    constructor() {

    }
    year: number;
    monthMin: number;
    monthMax: number;
    governorateId: number;
}
export interface Projects {
    id: number;
    yearOfProject: number;
    userFullName: string;
    designation: string;
    description: string;
    budget: number;
    delaiDay: number;
    photo?: any;
    cityDesignation: string;
    governorateDesignation: string;
    dateStartScheduled: Date;
    dateStart?: any;
    dateEndScheduled: Date;
    dateEnd?: any;
    projectStateDesignation: string;
    percentageOfProgression: number;
    latitude: number;
    longitude: number;
    iconeMarkerUrl: string;
    subDivisionDesignation: string;
    divisionDesignation: string;
    
}