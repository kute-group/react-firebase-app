class ApiUrl {
    get base() {
        return global.CONFIG.PATH.API;
    }

    //=== AUTH ===
    get login() {
        return this.base + 'authentication';
    }
    //=== user ===
    get user() {
        return this.base + 'users';
    }
}

export default new ApiUrl();
