
export class AuthService {
    loggedIn: boolean = false;

    isAuthenticated(): Promise<boolean> {
        const promise = new Promise<boolean>(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn)  // --> promise = this.loggedIn 
                }, 800)
            }
        );
        return promise;
    }

    login() {
        this.loggedIn = true;
    }
    logout() {
        this.loggedIn = false;
    }
}