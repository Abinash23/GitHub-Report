import { GithubApiService } from './GithubApiService';
import * as _ from "lodash";
import { Repo } from './Repo';
import { User } from './User';

let svc = new GithubApiService();
if (process.argv.length < 3) {
    console.log("Please enter the username as argument");
}
else {
    let username = process.argv[2];
    svc.getUserInfo(username, (user: User) => {
        svc.getRepos(username, (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.size])
            user.repos = sortedRepos;
            console.log(user);
        })
    })
}