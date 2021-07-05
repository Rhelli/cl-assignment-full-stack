# CitizenLab Full-Stack Engineer Assignment

# Introduction

This repository houses the technical assignment assigned on behalf of CitizenLab. The objective of this assignment was to create a web application that allows citizens to browse through participation projects.

# Assignment & Outcomes

### Architecture & Technologies

For this project, I selected the use of Rails for the backend system and React for the frontend systems, both with the intention of more closely adhering to CitizenLabs own technologies. The database technology selected was PostgreSQL.

For project architecture, I have chosen to create the project within one single repository. Normally, I would choose to separate the frontend from the backend in separate repositories, however it makes logical sense to combine the React frontend with the Rails backend in one repository in this case.

### Checklist && Completion

The following are the completed tasks:

- `[x]` Data model that fully represents the described system
- [ ] A documented way to load sample data into the database
- [ ] Homepage listing projects and folders
- [ ] Topics filter on the homepage
- [ ] Bonus: Budget maximization
- [ ] Bonus: Folder info page
- [ ] Bonus: ... (Suprise us!)

All models have been set up, and the database functions correctly so that Project are able to be a part of Folders, Topics can be assigned to Projects, and each can be references easily from one another. Serializers have also been created to enhance the ease of passing this information over the front end.

Unfortunately, given the time restrictions, no data passthrough to the frontend has been enabled yet. A template for React is currently set up, and the data is almost ready to be passed through, however the application's controllers remain as the last step in the backend process in order to successfully pass any database information to the frontend.

### To Do

#### Backend
  - Controllers need finishing and data needs to be modified according to the relevant containers/components it is rendered in
 - DB seed file needs to be created, utilising the provided sample_data.json
 - Basic styling for the homepage needs to be applied
 - Filtering for Topics' Project association needs to be enabled in the model level.

#### Frontend
 - React homepage container creation
 - React component creation for displaying folders, projects and topics
 - API fetch call creation to request and receive information made available from the backend system.
