import { Station } from './Station';
import { When } from './When';
export class JourneySearchModel {
    constructor(
        public station: Station = null,
        public when: When = null
    ) {}
}
