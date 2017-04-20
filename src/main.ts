import { SocialNetwork } from './social-network';

class App implements SocialNetwork {
    title = 'Some big website';
    
    getUsers() {
        return [
            { name: 'John' }
        ];
    };
}

new App();