import { SocialNetwork } from './social-network';

import * as _ from 'lodash';

export class App implements SocialNetwork {
    title = 'Some big website';
    
    getUsers() {
        return [
            { name: 'John' }
        ];
    };
}
