import { Station } from './Station';
export class JourneySearchModel {
    constructor(
        public station: Station = null,
        public time: string = null,
        public date: string = null
    ) {}
}
