

## Installation Guide 🧑‍💻

### Using Git and Github

- [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the repo
- [Clone](https://docs.github.com/en/get-started/quickstart/contributing-to-projects#cloning-a-fork) the forked repository
- Enter the new `portfolio` directory with `cd portfolio`
- Set the upstream remote to the original repository url so that git knows where to fetch updates from in future: `git remote add upstream https://github.com/mittal-parth/personal-portfolio.git`

### Install required packages

- `npm install`

### Run server

- `npm run dev`

<br/>

## Sample Git Workflow

- Follow the [installation guide](https://github.com/mittal-parth/personal-portfolio/blob/main/readme.md#installation-guide) to install the software
- Create a new feature branch with `git checkout -b <name-of-your-feature-branch>`
- Make changes and commit them in the feature branch.
- Once done developing, switch back to the main branch with `git checkout main` ; pull the latest version of the repo with `git pull https://github.com/mittal-parth/personal-portfolio.git main`
- Switch back to the feature branch with `git checkout <name-of-your-feature-branch>`. Apply the new changes on top of the latest version of the repo with `git rebase main`
- [Resolve merge conflicts](https://help.github.com/articles/resolving-a-merge-conflict-from-the-command-line/) (if any)
- Push your feature branch upto your remote repo with `git push origin <name-of-your-feature-branch>`
- [Submit a Pull Request](https://docs.github.com/en/get-started/quickstart/contributing-to-projects#making-a-pull-request) to the main branch.
- After any questions or changes have been resolved, your contribution would be merged in!


#### If you found this repo helpful in anyway, considering giving it a star - it would mean the world to me! 🌟
