# Front End Development

The project follows a standard fork-and-pull model for contributions via GitHub. Here's a step-by-step guide:

1. **Fork the Repository:** Start by forking the main project repository to your GitHub account.
2. **Clone the Repository:** Once forked, clone the repository to your local machine.
3. **Set Up the Project:** Follow the setup instructions to get the project running locally.
4. **Create a Branch:** Create a new branch for each issue you work on. This keeps your work organized and prevents conflicts.
5. **Make Changes:** Implement your feature or bug fix on the branch you created.
6. **Commit and Push Changes:** Once your changes are ready, commit them with a meaningful commit message, and push the branch to your forked repository.
7. **Submit a Pull Request:** From your repository, submit a pull request to the main repository. In the PR description, include a detailed explanation of your changes and link the PR to the corresponding issue in the main repository.

🤝 How to Contribute:

Following are the steps to run the project locally:

1.  Go to preferred folder in your computer and paste the following command after forking our repository (Only one of it if you don't have ssh setup then go with HTTP command)

```
git clone https://github.com/<YOUR-USERNAME>/<REPO>.git
```

2.  Navigate to the project folder

```
cd <PROJECT-NAME>
```

3. Add a reference(remote) to the original repository.
```
git remote add upstream https://github.com/<YOUR-USERNAME>/<PROJECT-NAME>.git
```

4. Check the remotes for this repository.
```
git remote -v
```
5. Always take a pull from the upstream repository to your master branch to keep it at par with the main project:
```
git pull upstream main
```

7.  Install dependencies

```bash
npm i 
```

7.  Now go ahead and create a new branch and move to the branch

```bash
git checkout -b <NAME-YOUR-BRANCH>
```

8.  To run Frontend and Backend concurrently
```
npm run dev
``` 

*More Running Commands:*
- Runs only for Backend with Nodemon
```
npm run server
```
- Runs only for Frontend
```
npm run client
```

9.  After done you can now commit and push this changes to your created branch, for doing that follow the following command chain

- `git status -s` (Shows the changed files)
- `git add --all` (Will add all the files to staging area)
- `git commit -m "<EXPLAIN-YOUR_CHANGES>"`
- `git push -u origin <SAME-BRANCH-AS-ABOVE>`

10.  After this go to your forked GitHub repository and go to `Pull Request` section. Now you might be able to see a pop up saying **Pull Request**. Click on the popup and you will be redirected to pull request page

11.  Now fill in the form template of the pull request and give the necessary description.

12.  Click on **Submit**

13. Hurray! You just made your first contribution to this project 🎉

14. Wait for your pull request to be reviewed and merged.

📜 Code of Conduct:

We are committed to fostering a community that’s inclusive, respectful, and productive. All participants in the project are expected to adhere to our Code of Conduct, which includes:

1. **Respect:** Treat everyone with kindness and respect. No forms of harassment, discrimination, or inappropriate behavior are tolerated.
2. **Collaboration:** Be open to feedback and be respectful when providing it. Strive to help others when you can and recognize everyone's contributions.
3. **Inclusivity:** Foster an environment that welcomes and supports people of all backgrounds and identities. This includes, but is not limited to, members of any race, ethnicity, culture, national origin, color, immigration status, social and economic class, educational level, sex, sexual orientation, gender identity and expression, age, size, family status, political belief, religion, and mental and physical ability.
