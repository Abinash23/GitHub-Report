"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userResponse) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
        this.createdOn = (userResponse.created_at);
        // this.repos = userResponse.login;
    }
    return User;
}());
exports.User = User;
