# DevExchange

The DevExchange website is a robust platform designed for developers and employers within the tech industry to interact, collaborate, and explore job opportunities. Its features cater to both regular users and employers, providing a seamless experience for networking, posting, and discovering job opportunities.

![Home Screen](#)

[View DevExchange live website here](#)
- - -

## Table of Contents
### [User Experience](#user-experience-ux)
* [Project Goals](#project-goals)
* [Agile Methodology](#agile-methodology)
* [Target Audience](#target-audience)
* [First time user](#first-time-user)
* [Registered user](#registered-user)
* [Employer user](#employer-user)
### [Design](#design-1)
* [Color Scheme](#color-scheme)
* [Wireframes](#wireframes)
* [Data Models](#data-models)
* [Database Scheme](#database-scheme)
### [Security Features](#security-features-1)
### [Features](#features-1)
* [Existing Features](#existing-features)
* [Features Left to Implement](#features-left-to-implement)
### [Technologies Used](#technologies-used-1)
* [Languages Used](#languages-used)
* [Databases Used](#databases-used)
* [Frameworks Used](#frameworks-used)
* [Programs Used](#programs-used)
* [Custom components](#custom-components)
* [Custom hooks](#custom-hooks)
* [Custom context](#custom-context)
### [Deployment and Local developement](#deployment-and-local-developement-1)
* [Local Developement](#local-developement)
* [ElephantSQL Database](#elephantsql-database)
* [Cloudinary](#cloudinary)
* [Heroku Deployment](#heroku-deployment)
### [Testing](#testing-1)
### [References](#references-1)
* [Docs](#docs)
* [Content](#content)
* [Acknowledgments](#acknowledgments)

---

## User Experience (UX)

The user experience on the DevExchange website is designed to seamlessly integrate engagement and interaction within the tech community. Visitors are immediately immersed in a visually organized homepage presenting a stream of recent posts, alongside job posts and influential profiles, promoting easy navigation and exploration. Upon logging in as a default regular user, the platform encourages active participation by allowing the creation of posts, liking and commenting on content, and engaging in discussions. Job postings, similarly accessible and interactive, enable users to express interest, save opportunities, and participate in dialogue surrounding job openings. User profiles prominently display follower counts, showcasing one's influence and connections within the community, fostering a sense of belonging and networking. Overall, the platform maintains a consistent and intuitive interface, fostering a vibrant environment where users can readily engage, share knowledge, and explore job prospects in the tech industry.

### Project Goals

The project aims to create a global platform connecting developers for sharing posts, engaging in discussions, and exploring job opportunities. It also provides a space for employers to post jobs, facilitating connections between developers and potential employers.

### Agile Methodology

Agile Methodology was used to help prioritize and organize tasks, writting the user stories and using Project Boards on Github. Templates were created to help write User Stories and define Epics.

* Milestones were strategically established to break down significant achievements into manageable segments
* Epics were written containing possible user stories and based on that the website was made.
* User stories were created by looking at epics and through iterations the project was advancing.
* Tasks were assigned within each user story to guide the path to fulfillment.
* Labels were added to sort the issues based on the importance.
* Project Board is set to public.
* Project Board was used to track progression of the task through the EPICS, Todo, In progress and Done columns

<details>
<summary> User Stories Template
</summary>

![User Stories Template](#)
</details>

<details>
<summary> Epics Template
</summary>

![Epics Template](#)
</details>

<details>
<summary> Project Board
</summary>

![Project Board](#)
</details>

<details>
<summary> Milestones
</summary>

![Milestones](#)
</details>

<details>
<summary> Tasks
</summary>

![Tasks](#)
</details>

### User Stories

#### Milestones

* Backend API devexchange
* Frontend devexchange

#### Epics

* Set up a workspace
* Create API resources
* Create Frontend components

#### User Stories

1. Set up a workspace
* Set up a django project
* Set up a frontend folder with React inside of it
2. Create API resources
* Create a profile resource
* Create a post resource
* Create a comment resource
* Create a like comments feature
* Create a search filter
* Create a company_bio resource
* Create a user_skills resource
* Create a followers resource
* Create a job_posts resource
* Reply to comments
3. Create Frontend components
* Create a post as a logged in user
* Create a new account, authentication
* Create an Avatar for the profiles
* View all most recent posts
* Like comments
* Read other users comments
* Create Post page
* Post Edit Form
* Post Comments
* Create a Sidebar
* Create a navigation bar
* Most followed profiles
* Follow and unfollow other users
* Profile header
* User Skills
* Job posts
* Company Bio

Detailed look can be found in the [project board](#)

### Target Audience

* Tech Enthusiasts & Developers: Individuals passionate about technology, including software developers, programmers, and IT professionals looking for a community-driven platform to share insights and engage in discussions.
* Job Seekers in Tech: Professionals seeking job opportunities in the technology sector, eager to explore and apply for relevant positions posted on the platform.
* Knowledge Seekers: Users interested in continuous learning and sharing within the tech industry, aspiring to exchange ideas and gain insights from a diverse community.
* Employers & Recruiters: Companies and hiring managers seeking skilled tech talent, utilizing the platform to post job openings and connect with potential candidates.
* Freelancers & Contractors: Independent tech professionals, such as freelance developers or consultants, looking for networking opportunities and potential project collaborations.
* Tech Companies & Startups: Organizations aiming to establish a presence, engage with the developer community, and scout for talent to support their growth and projects.

### First time user

* Newcomers eager to explore tech discussions and knowledge sharing.
* Job seekers looking for tech-related opportunities.
* Enthusiasts seeking insights from diverse tech professionals.
* Companies in search of skilled tech talent.
* Independent tech professionals seeking collaborations and networking.

### Registered User

* By default regular user
* Ability to create posts on tech-related topics.
* Engage in discussions, like, comment, and reply to posts and comments.
* Explore and interact with job postings: like, comment, and save.
* Manage saved job posts.
* Manage your profile, add skills
* Follow, unfollow other users
* Access to upgrade an account to employers account.

### Employer User

* Keep all the same features as regular user except skills display, which are replaced by company bio
* Create and manage job postings, detailing available positions within their company.
* Engage in posting job opportunities to attract potential candidates.
* Showcase company information on their profile

## Design

The platform's design is characterized by a modern and sleek layout that prioritizes user engagement and accessibility. Posts occupy a prominent position on the left side, inviting immediate interaction and discussion. On the right side, the layout features the most followed profiles, encouraging community engagement, while just below, it showcases the latest job listings. This layout aims to create a user-centric experience, seamlessly integrating content, networking, and job exploration within the platform's interface.

### Color Scheme
![Color Scheme](#)

### Logo

Logo was created using [Figma](#) to match the colors of the navigation bar and to compliment overall design.

### Typography

The "AR One Sans" font is specified as the primary font, and the sans-serif font is specified as a fallback font.

### Wireframes

<details>
<summary> Home Page
</summary>

![Home Page](#)
</details>

<details>
<summary> Home Page when logged in
</summary>

![Home Page when logged in](#)
</details>

<details>
<summary> Home Page when logged in as an employer
</summary>

![Home Page when logged in as an employer](#)
</details>

<details>
<summary> Post page
</summary>

![Post page](#)
</details>

<details>
<summary> Post edit page
</summary>

![Post edit page](#)
</details>

<details>
<summary> Post edit page
</summary>

![Post edit page](#)
</details>

<details>
<summary> Job Posts
</summary>

![Job Posts](#)
</details>

<details>
<summary> Job post
</summary>

![Job post](#)
</details>

<details>
<summary> Job post create page
</summary>

![Job post create page](#)
</details>

<details>
<summary> Job post edit page
</summary>

![Job post edit page](#)
</details>

<details>
<summary> Profile page
</summary>

![Profile page](#)
</details>

<details>
<summary> Profile edit page
</summary>

![Profile edit page](#)
</details>

<details>
<summary> Company Bio create page
</summary>

![Company Bio create page](#)
</details>

<details>
<summary> Company Bio edit page
</summary>

![Company Bio edit page](#)
</details>

<details>
<summary> User sign in page
</summary>

![User sign in page](#)
</details>

<details>
<summary> User sign up page
</summary>

![User sign up page](#)
</details>

### Data Models

1. User Model
* User model is the default user model provided by the Django authentication system
---
2. Profile Model
*
---
3. Following Model
*
---
4. Post Model
*
---
5. Comment Model
*
---
6. Reply Model
*
---
7. Like Model
*
---
8. Comment Like Model
*
---
9. JobPostSaved Model
*
---
10. User Skills Model
*
---
11. Company Bio Model
*
---
12. JobPost Model
*
---
13. JobPostComment Model
*
---
14. JobPostCommentReply Model
*
---
15. JobPostLike Model
*
---
16. JobPostCommentLike Model
*
---

### Database Scheme

Entity Relationship Diagrams (ERD)

1. ![DataScheme Regular User](#)

* 
---
2. ![DataScheme Employer User](#)

* 

## Security Features

### User Authentication

* 

### Form Validation

* 

### Custom error 404 page

* 404 Error Page, provides user with a button the redirect to home page.

## Features

* Post Creation: Users can create posts related to tech discussions, updates, and insights.
* Interactive Discussions: Engage in discussions by commenting, replying, and liking posts and comments.
* Job Posting and Exploration: Employers can post job vacancies while users can explore, like, comment, and save job posts.
* Profile Metrics: View user profiles to see follower counts, post count, job posts count, following count.
* User Roles: Distinction between regular users and employers with different access levels and abilities.
* Networking & Following: Users can follow each other, fostering a connected community for networking and updates.
* Skill Addition: Regular users can add skills to their profiles, showcasing their expertise.
* Company Bio: Employers can provide comprehensive company bios within their profiles.
* Content Ownership Control: Owners of posts, job postings, and profiles possess CRUD (Create, Read, Update, Delete) capabilities, allowing them to manage and modify their own content as needed.

### Existing Features

<details>
<summary> Home page
</summary>

![Home page](#)

* Displays a navigation bar with logo, posts, most followed profiles, most recent jobs
</details>

<details>
<summary> Logged in home page
</summary>

![Logged in home page](#)

* When logged users get access to their profile, and add posts, add job posts buttons
* Displays developers name and Github and linkedIn links
* Most followed profiles, most recent jobs
</details>

<details>
<summary> Logo
</summary>

![Logo](#)

* Logo was created using [Figma](#) to match the colors of the navigation bar and to compliment overall design.
</details>

<details>
<summary> Navigation Bar
</summary>

![Visitor](#)

* It differs if its a regular user, visitor or employer

![Regular User](#)

* Regular user

![Employer](#)

* Employer

</details>

<details>
<summary> Side Bar
</summary>

![Visitor](#)

* It differs if its a regular user, visitor or employer

![Regular User](#)

* Regular user

![Employer](#)

* Employer

</details>

<details>
<summary>  Create Post
</summary>

![Create Post](#)

* When a user is logged in, they are able to create a new post
</details>

<details>
<summary>  Update Post
</summary>

![Update Post](#)

* When a user is logged in, they are able to update their post
</details>

<details>
<summary>  Create Job Post
</summary>

![Create Job Post](#)

* When a user is logged in and they are an employer, they are able to create a new job post
</details>

<details>
<summary>  Update Job Post
</summary>

![Update Job Post](#)

* When a user is logged in and they are an employer, they are able to update their job post
</details>

<details>
<summary>  Save Job Post
</summary>

![Save Job Post](#)

* When a user is logged in, they are able to save job posts
</details>

<details>
<summary>  Like posts, job posts
</summary>

![Like posts, job post](#)

* When a user is logged in, they are able to like posts and job posts
</details>

<details>
<summary>  Comment on posts and job posts
</summary>

![Comment on posts and job post](#)

* When a user is logged in, they are able to comment on posts and job posts
</details>

<details>
<summary> Reply to comments on posts and job posts
</summary>

![Reply to comments on posts and job post](#)

* When a user is logged in, they are able to reply to comments on posts and job posts
</details>

<details>
<summary> Profile Page
</summary>

![Profile Page](#)

* Any user can access this page, but when it is a logged in user they can follow another user using this page or by the most followed profiles.
* Account status will be displayed under users name
* Buttons enabling the display or concealment of posts and job posts will be available, ensuring a less cluttered screen for a more organized viewing experience.

</details>

<details>
<summary>  Edit Profile
</summary>

![Edit Profile](#)

* The logged in user can access this by going to their profile page and click on the drop down menu, they can change their profile image, bio and change their account type from regular to employer, if they do they will get a warning modal that will display that if they do they won't be able to revert back to regular user, but will get access to job posting.

</details>

<details>
<summary>  Edit Username
</summary>

![Edit Username](#)

* The logged in user can access this by going to their profile page and click on the drop down menu, they can change their username in this page which will already be populated with their current username.

</details>

<details>
<summary>  Edit Password
</summary>

![Edit Password](#)

* The logged in user can access this by going to their profile page and click on the drop down menu, they can change their password in this page.

</details>

<details>
<summary>  Add Skills
</summary>

![Add Skills](#)

* The logged in user can access profile page and click on add skills button which will allow regular users to add skills to their profile page by filling in a form.

</details>

<details>
<summary>  Add Company Bio
</summary>

![Add Company Bio](#)

* The logged in user that is an employer can access profile page and click on add company bio button which will allow employer users to add company bio to their profile page by filling in a form.

</details>

<details>
<summary>  Most followed profiles
</summary>

![Most followed profiles](#)

* Users will be able too see most followed profiles, and follow them

</details>

<details>
<summary>  Most Recent Jobs
</summary>

![Most Recent Jobs](#)

* Users will be able too see most recent jobs, and view them
* Location of the job and title are provided

</details>

<details>
<summary>  The search bar adapts its search based on the specific page it is displayed on.
</summary>

![Search bar](#)

* Users will be able too search for posts, job posts, liked, saved jobs

</details>

<details>
<summary>  Alert messages
</summary>

![Alert messages](#)

* Users will be notified whenever they make a change
* CRUD on post or job posts, comments, replies
* CRUD on skills, company bio
* CRUD on profile
* Sign in, sign out
* Like, unlike
* Follow, unfollow

</details>

<details>
<summary>  404 Error
</summary>

![404 Error](#)

* If the page doesn't exits users will be directed to 404 custom error page that contains a button to go back

</details>

### Features Left to Implement 

*

## Technologies Used

### Languages Used

*

### Databases Used

*

### Frameworks Used

*

### Programs Used

*


