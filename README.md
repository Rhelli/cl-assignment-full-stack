# CitizenLab Full-Stack Engineer Assignment

## Introduction

The goal of this assignment is to develop a functioning web application that allows citizens to browse through participation projects.

## Assignment

### The model

The app displays participation projects. A project can optionally be contained in a folder. A folder can also be contained in a folder. Projects can have associated topics, folders can't.

There's some sample data in `sample_data.json`, which you can use to seed your database, if you want. The sample data is there to save you some time, not to influence you on how to structure your data models. Feel free to model it the best way you see fit.

### Homepage

The homepage shows a single listing mixing both projects and folders. Projects and folders that are in a folder themselves, are not shown on the homepage. Newer projects/folders appear above older projects/folders. If a project has topics, these are also displayed on the project in the listing.

A user can filter the projects by topic. If the filter is used, only projects that have the selected topic are shown in the list. Folders, having no topics, always stay in the list. Using the filter does not refresh the webpage, but updates the DOM. As there can be many projects, the filtering operation should happen on the server.


### Budget maximization (bonus, if time left)

All projects have a certain cost to realize, as provided in the sample data. To let citizens get a feel for budget limitations, implement a feature where the user can enter a total budget.

The system should then display a list of projects for which the summed cost maximizes the usage of that budget. This means that the sum of the projects is within the budget and no other combination of projects exists that approaches the budget closer.

### Folder info page (bonus, if time left)

When the user clicks a folder, she goes to a page that displays the folder title and description. It also lists the folders and projects contained in that folder. Folders in this listing can be clicked to go to their respective info page.

## Things you shouldn't do

Your time is very limited, so here are some things you explicitly **don't** have to do.
- Info page for projects
- Authentication or authorization
- An admin interface
- Dealing with responsiveness, we'll check it on desktop

## Checklist

Issues and blockers can't always be predicted and writing software under time pressure is hard. It's okay if you don't get everything done. Include the following section in your own README file and cross (`[x]`) the things you were able to do.

- [ ] Data model that fully represents the described system
- [ ] A documented way to load sample data into the database
- [ ] Homepage listing projects and folders
- [ ] Topics filter on the homepage
- [ ] Bonus: Budget maximization
- [ ] Bonus: Folder info page
- [ ] Bonus: ... (Suprise us!)

## Rules

* You have **3 hours** to get as far as you can.
* You can use **any mix of languages, libraries or frameworks** you want. Pick whatever you're comfortable with, it won't affect your evaluation. When in doubt, at CitizenLab we mostly use Ruby, Elixir and React. Just make sure to include instructions in the README on how we should run your solution.
* If you base some of your work on **specific code snippets**, StackOverflow answers, gists or tutorials, add a link to them in your code comments. We don't consider this a weakness.
* You've **written** all code that doesn't include such a comment **yourself**.
* We'll only take commits within the 3 hour limit into account.

## Getting started

1. Click [here](https://github.com/CitizenLabDotCo/cl-assignment-full-stack/generate) or click the green `Use this template` button on top to make a private copy of this repository. On the next screen, make sure to pick your user account and *not* CitizenLabDotCo as the owner, or you'll get an error.

2. Git clone your own repository on your machine.

3. Put all your code in there

4. Make sure to update the README with instructions on how to run your solution and the filled out above checklist

5. Share your repository with github user `kogre`

## Evaluation

We will evaluate your solution over these axis:

* **Requirements** Does the solution conform to our description?
* **Engineering** Does your architecture make sense? Is the data model sane? Is it fast enough? How does it scale?
* **Maintainability** Is your code simple enough? How did you name things? Have you written any tests? Are you correctly applying dependencies?
* **Usability** How nice is your solution for the end user? Does it work well? Does it look nice?

If you've impressed us with your work, we'll invite you for a discussion with our engineering team. Your process will be at least as important as the result of the assignment itself.

Thank you and good luck!
