# E-learn

- [Overview](#overview)
- [MVP](#mvp)
  - [Libraries and Frameworks](#libraries-and-frameworks)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Architecture](#component-architecture)
    - [Project Schedule](#project-schedule)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)

<br>

## Overview

**e-LEARN** is an app that connects students or new learners of any subject with teachers around the world who are looking for students. TalenTree also allows both teachers and students to make posts and build a resume of work on their profile. Teacher accounts can create classes and students can search for classes by categories in the Browse tab to register for courses.

<br>

## MVP

**E-LEARN**'s minimum viable product will be a functioning full-stack app that has a back-end with models for students, teachers, posts, and classes (along with the connections between each entity) and a front-end that allows users to perform full CRUD (Create, Read, Update, Delete) on the server by viewing posts and creating/editing/deleting their own posts. Teachers should be able to create their own classes that the students can then register for via a connection request (see [ERD Model](#erd-model) for structure of data). The styling will incorporate flexbox and will be responsive so the app looks good on mobile screens as well.

<br>

### Libraries and Frameworks

|   Library    | Description                                                                                                                                                                                                                     |
| :----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    React     | Library used to structure front-end in terms of components. Will allow app to have state and perform actions on mounting of components with React hooks.                                                                        |
| React Router | Library will assist in the creation of a multi-page app that doesn't require a refresh. Will allow us to partition app into different screens and incorporates a NavLink component that will assist us with our navigation bar. |
|    Axios     | Library will allow us to make server requests from the front-end to then render and manipulate data from the database.                                                                                                          |

|    Framework    | Description                                                                                                                                                                  |
| :-------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      Rails      | Back-end framework to assist with the creation of database entities and modeling. Will also be running the back-end server from which the front-end will be retreiving data. |
| React-Bootstrap | Front-end framework to help with responsiveness of site. Will also be used for certain pre-built components.                                                                 |

<br>

### Client (Front End)


#### Component File Structure

```structure
src
|__ screens/
      |__ Home
            |__ Home.css
            |__ Home.jsx
      |__ LogIn
            |__ LogIn.css
            |__ LogIn.jsx
      |__ Register
            |__ Register.css
            |__ Register.jsx
      |__ Browse
            |__ Browse.css
            |__ Browse.jsx
      |__ Profile
            |__ Profile.css
            |__ Profile.jsx
      |__ UserDetail
            |__ UserDetail.css
            |__ UserDetail.jsx
      |__ CreatePost
            |__ CreatePost.css
            |__ CreatePost.jsx
      |__ EditPost
            |__ EditPost.css
            |__ EditPost.jsx
      |__ CreateClass
            |__ CreateClass.css
            |__ CreateClass.jsx
      |__ EditClass
            |__ EditClass.css
            |__ EditClass.jsx


|__ components/
      |__ Header
            |__ Header.css
            |__ Header.jsx
      |__ Footer
            |__ Footer.css
            |__ Footer.jsx
      |__ Layout
            |__ Layout.css
            |__ Layout.jsx
      |__ TeacherCard
            |__ TeacherCard.css
            |__ TeacherCard.jsx
      |__ Form
            |__ Form.css
            |__ Form.jsx
      |__ Sort
            |__ Sort.css
            |__ Sort.jsx
|__ services/
      |__ apiConfig.js
      |__ users.js
      |__ posts.js
      |__ classes.js

```



#### Time Estimates

| Task                        | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------------- | :------: | :------------: | :-----------: | :---------: |
| Planning/Wireframes         |    H     |     4 hrs      |     5hrs      |             |
| Back-end Rails Setup        |    H     |     3 hrs      |               |             |
| Back-end Models/Seed        |    H     |     3 hrs      |               |             |
| Back-end Connections        |    H     |     2 hrs      |               |             |
| Front-end React Setup       |    H     |     3 hrs      |               |             |
| React Router Setup          |    H     |     3 hrs      |               |             |
| Component Rendering         |    H     |     3 hrs      |               |             |
| Axios Calls                 |    H     |     3 hrs      |               |             |
| Axios Requests              |    H     |     2 hrs      |               |             |
| Authentication              |    M     |     3 hrs      |               |             |
| Functionality Authorization |    M     |     3 hrs      |               |             |
| Screen/Component Styling    |    L     |     3 hrs      |               |             |
| Debugging                   |    M     |     3 hrs      |               |             |
| Animation                   |    L     |     2 hrs      |               |             |
| Deployment                  |    H     |     2 hrs      |               |             |
| TOTAL                       |          |     42 hrs     |     5hrs      |             |

<br>

### Server (Back End)

#### ERD Model

![ERD Diagram](https://res.cloudinary.com/dszox5xnw/image/upload/v1628791604/TalenTree/talentree-erd_2_gkopwu.png)
<br>

---

## Post-MVP

- Authentication
- Authorization for teacher vs student
- Advanced CSS
- Animation
- Like/Comment Functionality
