import { SocialNetwork } from './social-network';

import * as _ from 'lodash';

class App implements SocialNetwork {
    title = 'Some big website';
    
    getUsers() {
        return [
            { name: 'John' }
        ];
    };
}

// new App();

console.log(_.isArray(new App().getUsers()));