# DevExchange

The DevExchange website is a robust platform designed for developers and employers within the tech industry to interact, collaborate, and explore job opportunities. Its features cater to both regular users and employers, providing a seamless experience for networking, posting, and discovering job opportunities.

![Home Screen](/documentation/readme_images/am-i-responsive.png)

[View DevExchange live website here](https://devexchange-0c8785c813be.herokuapp.com/)
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
* [Deployment](#deployment)
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

![User Stories Template](/documentation/readme_images/user-story-template.png)
</details>

<details>
<summary> Epics Template
</summary>

![Epics Template](/documentation/readme_images/epic-template.png)
</details>

<details>
<summary> Project Board
</summary>

![Project Board](/documentation/readme_images/project-board.png)
</details>

<details>
<summary> Milestones
</summary>

![Milestones](/documentation/readme_images/milestones.png)
</details>

<details>
<summary> Tasks
</summary>

![Tasks](/documentation/readme_images/tasks.png)
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

Detailed look can be found in the [DevExchange project board](https://github.com/users/Thomas-Tomo/projects/3)

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
![Color Scheme](/documentation/readme_images/color-scheme.png)

### Logo

Logo was created using [Figma](https://www.figma.com/) to match the colors of the navigation bar and to compliment overall design.

### Typography

The "AR One Sans" font is specified as the primary font, and the sans-serif font is specified as a fallback font.

### Wireframes

<details>
<summary> Home Page
</summary>

![Home Page](/documentation/wireframes/home-page-wf.png)
</details>

<details>
<summary> Home Page when logged in
</summary>

![Home Page when logged in](/documentation/wireframes/home-page-regular-wf.png)
</details>

<details>
<summary> Home Page when logged in as an employer
</summary>

![Home Page when logged in as an employer](/documentation/wireframes/home-page-employer-wf.png)
</details>

<details>
<summary> Post page
</summary>

![Post page](/documentation/wireframes/post-page-wf.png)
</details>

<details>
<summary> Job post
</summary>

![Job post](/documentation/wireframes/job-post-wf.png)
</details>

<details>
<summary> Profile page
</summary>

![Profile page](/documentation/wireframes/profile-page-wf.png)
</details>

<details>
<summary> User sign in/sign up page
</summary>

![User sign in/sign up page](/documentation/wireframes/sign-in-up-wf.png)
</details>

### Data Models

1. User Model
* User model is the default user model provided by the Django authentication system
---
2. Profile Model
* Profile model linked to the built-in User model through a one-to-one relationship, enabling additional user-specific details to be stored separately.
* Includes fields such as name, content, image, and user_type, allowing customization of profile information, text content, profile image, and user categorization.
* Utilizes created_at and updated_at fields to automatically capture the date and time of profile creation and update.
* Introduces a user_type field with predefined choices (regular, employer) to categorize users, defaulting to a 'regular' user type if not specified.
* Incorporates a create_profile function connected to the post_save signal of the User model, ensuring the automatic creation of a corresponding Profile instance upon user creation.
---
3. Following Model
* Models a 'Follower' entity linking 'User' instances as 'owner' (following) and 'followed', establishing a follow relationship between users.
* Utilizes 'ForeignKey' fields to associate 'owner' and 'followed' with the 'User' model, using distinct 'related_name' attributes for differentiation.
* Applies 'unique_together' to ensure a user cannot follow another user more than once, maintaining a unique following relationship.
---
4. Post Model
* Associates 'Post' model with 'User' instances using 'ForeignKey' ('owner') to denote the post's creator.
* Captures creation and update times automatically with 'created_at' and 'updated_at' 'DateTimeField' fields.
* Manages 'title', 'content', and 'image' fields for post details, allowing optional image uploads with filter options via 'image_filter'.
---
5. Comment Model
* Connects 'Comment' model to 'User' and 'Post' instances via 'ForeignKey' ('owner', 'post') for comment ownership and association with posts.
* Facilitates nested comments using 'parent_comment' 'ForeignKey' referencing 'self', allowing hierarchical comment structures.
* Automatically tracks 'created_at' and 'updated_at' times for comments.
---
6. Reply Model
* Connects 'Reply' model to 'User' instances via 'owner' 'ForeignKey', denoting reply ownership.
* Associates each 'Reply' with a specific 'Comment' through 'parent_comment' 'ForeignKey'.
---
7. Like Model
* Connects 'Like' model to 'User' instances via 'owner' 'ForeignKey', indicating the user performing the like action.
* Links 'Like' instances to 'Post' model through 'post' 'ForeignKey', representing the liked post ('related_name='likes'').
---
8. Comment Like Model
* Connects 'CommentLike' model to 'User' instances via 'owner' 'ForeignKey', indicating the user who liked the comment.
* Links 'CommentLike' instances to 'Comment' model through 'comment' 'ForeignKey', representing the liked comment ('related_name='likes'').
---
9. JobPostSaved Model
* Connects 'JobPostSaved' to 'User' instances via 'owner' 'ForeignKey', indicating users who saved the job post.
* Links 'JobPostSaved' instances to 'JobPost' model through 'job_post' 'ForeignKey' ('related_name='saved'').
---
10. User Skills Model
* Utilizes 'UserSkill' model with a one-to-one relationship ('OneToOneField') to the 'User' model, attaching additional details to user profiles.
* Stores educational background ('education'), work experience ('work_experience'), skills ('skills'), certifications ('certifications'), and languages ('languages') using 'TextField' fields.
* Includes fields for social profiles such as 'linkedin_profile', 'github_profile', and 'portfolio_website' as 'URLField' types, allowing users to link their profiles.
---
11. Company Bio Model
* Utilizes 'CompanyBio' model with a one-to-one relationship ('OneToOneField') to the 'User' model, allowing users to associate company details with their profiles.
* Includes fields such as 'company_name', 'employees_count', 'recruiting_status', 'technologies_used', and 'company_description' to define various aspects of the company profile.
---
12. JobPost Model
* Establishes a 'JobPost' model linking to 'User' instances via 'owner' 'ForeignKey', identifying the user who created the job post.
* Includes various fields such as 'title', 'description', 'location', 'job_type', 'salary', 'application_deadline', 'experience_level', 'company_name', 'company_description', 'application_instructions', 'allows_remote_work', and 'benefits' to define job post details.
---
13. JobPostComment Model
* Connects 'JobPostComment' to 'User' instances via 'owner' 'ForeignKey', specifying the comment's creator.
* Links 'JobPostComment' instances to 'JobPost' model through 'job_post' 'ForeignKey', associating comments with specific job posts.
---
14. JobPostCommentReply Model
* Connects 'JobPostCommentReply' to 'User' instances via 'owner' 'ForeignKey', indicating reply ownership.
* Links 'JobPostCommentReply' instances to 'JobPostComment' model through 'parent_comment' 'ForeignKey', associating replies with specific comments ('related_name='replies_to_reply'').
---
15. JobPostLike Model
* Connects 'JobPostLike' to 'User' instances via 'owner' 'ForeignKey', specifying the user who liked the job post.
* Associates 'JobPostLike' instances with 'JobPost' model using 'job_post' 'ForeignKey', indicating the liked job post ('related_name='likes'').
---
16. JobPostCommentLike Model
* Links 'JobPostCommentLike' to 'User' instances through 'owner' 'ForeignKey', identifying users who liked job post comments.
* Connects 'JobPostCommentLike' instances to 'JobPostComment' model via 'job_post_comment' 'ForeignKey', denoting the liked job post comment ('related_name='likes'').
---

### Database Scheme

Entity Relationship Diagrams (ERD)

1. ![DataScheme Regular User](/documentation/readme_images/ERD-regular-scheme.png)

* In the Entity-Relationship Diagram (ERD), the User model serves as the foundational entity, encompassing core user attributes like usernames and passwords. Extending from this model, the Profile entity includes additional personalized information such as user bios, social links, and skills. Regular users, operating within this system, possess a range of functionalities. They can create, edit, and engage with posts, expressing their preferences through likes and comments on both their own and others' posts. Furthermore, these users have the autonomy to manage and update their profile details, including the addition of skills. Additionally, they can explore job posts within the system, providing the capability to view posts and save the ones of interest for future reference or potential application.
---
2. ![DataScheme Employer User](/documentation/readme_images/ERD-employer-scheme.png)

* In the Entity-Relationship Diagram (ERD), the Employer instance, an extension of the User model, introduces distinct functionalities tailored towards employer-centric actions within the system. Employers have the exclusive ability to create and manage job posts, providing details about available positions within their company. In place of individual skills, the Employer entity showcases the Company Bio, featuring information like the company's name, employee count, utilized technologies, and a comprehensive company description on their profile. This tailored functionality allows employers to focus on job post management and the representation of their company's identity and offerings through the displayed bio on their profile within the system.

## Security Features

### User Authentication

* The system features a sophisticated access control mechanism leveraging Django REST Framework's permission classes, customizing user access based on predefined roles. Through permissions such as IsOwnerOrReadOnly, IsEmployerOrReadOnly, and IsRegularOrReadOnly, the system regulates user actions, granting specific privileges depending on the user's role and authentication status. For instance, object owners enjoy complete access to their items, while certain actions, like creating a company bio, are restricted to users with specific roles, such as employers or regular users. Moreover, the frontend interface dynamically adapts its display based on a user's role and authentication state, showcasing or concealing elements to provide a tailored experience. This approach ensures a secure and personalized user journey, offering access and functionalities aligned with the user's role and authentication credentials.

### Form Validation

* The system enforces robust form validation across most form inputs, ensuring data integrity and proper handling of user actions. However, for specific fields like 'Company Bio' and 'Skills', validation isn't mandatory. The intentional decision to forego strict validation for these fields allows users the flexibility to have an empty field displayed on their profile if they prefer. This leniency provides users with the freedom to decide whether they want to showcase detailed information or leave certain sections blank, allowing for a more customized and user-controlled profile presentation.

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

![Home page](/documentation/readme_images/home-page.png)

* Displays a navigation bar with logo, posts, most followed profiles, most recent jobs
</details>

<details>
<summary> Logged in home page
</summary>

![Logged in home page](/documentation/readme_images/home-page-employer.png)

* When logged users get access to their profile, and add posts, add job posts buttons
* Displays developers name and Github and linkedIn links
* Most followed profiles, most recent jobs
</details>

<details>
<summary> Logo
</summary>

![Logo](/documentation/readme_images/devexchange-logo.png)

* Logo was created using [Figma](https://www.figma.com/) to match the colors of the navigation bar and to compliment overall design.
</details>

<details>
<summary> Navigation Bar
</summary>

![Visitor](/documentation/readme_images/navbar-visitor.png)

* Visitor user

![Registered User](/documentation/readme_images/navbar-registered.png)

* Registered user

</details>

<details>
<summary> Side Bar
</summary>

![Regular User](/documentation/readme_images/sidebar-regular.png)

* Regular user

![Employer](/documentation/readme_images/sidebar-employer.png)

* Employer

</details>

<details>
<summary>  Create Post
</summary>

![Create Post](/documentation/readme_images/post-create-page.png)

* When a user is logged in, they are able to create a new post
</details>

<details>
<summary>  Update Post
</summary>

![Update Post](/documentation/readme_images/post-edit-page.png)

* When a user is logged in, they are able to update their post
</details>

<details>
<summary>  Create Job Post
</summary>

![Create Job Post](/documentation/readme_images/job-post-create-page.png)

* When a user is logged in and they are an employer, they are able to create a new job post
</details>

<details>
<summary>  Update Job Post
</summary>

![Update Job Post](/documentation/readme_images/job-post-edit-page.png)

* When a user is logged in and they are an employer, they are able to update their job post
</details>

<details>
<summary>  Save Job Post
</summary>

![Save Job Post](/documentation/readme_images/save-job-post.png)

* When a user is logged in, they are able to save job posts
</details>

<details>
<summary>  Like posts, job posts
</summary>

![Like posts, job post](/documentation/readme_images/like-posts.png)

* When a user is logged in, they are able to like posts and job posts
</details>

<details>
<summary>  Comment on posts and job posts
</summary>

![Comment on posts and job post](/documentation/readme_images/comment-on-posts.png)

* When a user is logged in, they are able to comment on posts and job posts
</details>

<details>
<summary> Reply to comments on posts and job posts
</summary>

![Reply to comments on posts and job post](/documentation/readme_images/reply-to-comments.png)

* When a user is logged in, they are able to reply to comments on posts and job posts
</details>

<details>
<summary>  Delete posts, job posts
</summary>

![Delete posts, job posts](/documentation/readme_images/confirm-delete.png)

* When a user is logged in, they are able to delete their own posts and job posts, but before the post is deleted, the will have to confirm to delete
</details>

<details>
<summary> Profile Page
</summary>

![Profile Page](/documentation/readme_images/profile-page.png)

* Any user can access this page, but when it is a logged in user they can follow another user using this page or by the most followed profiles.
* Account status will be displayed under users name
* Buttons enabling the display or concealment of posts and job posts will be available, ensuring a less cluttered screen for a more organized viewing experience.

</details>

<details>
<summary>  Edit Profile
</summary>

![Edit Profile](/documentation/readme_images/profile-edit-page.png)

* The logged in user can access this by going to their profile page and click on the drop down menu, they can change their profile image, bio and change their account type from regular to employer, if they do they will get a warning modal that will display that if they do they won't be able to revert back to regular user, but will get access to job posting.

</details>

<details>
<summary>  Edit Account Type
</summary>

![Edit Account Type](/documentation/readme_images/edit-account-type.png)

* The logged in user can access this by going to their profile page and click on the drop down menu, they can change their account type from regular to employer, if they do they will get a warning modal that will display that if they do they won't be able to revert back to regular user, but will get access to job posting.

</details>

<details>
<summary>  Edit Username
</summary>

![Edit Username](/documentation/readme_images/edit-username.png)

* The logged in user can access this by going to their profile page and click on the drop down menu, they can change their username in this page which will already be populated with their current username.

</details>

<details>
<summary>  Edit Password
</summary>

![Edit Password](/documentation/readme_images/edit-password.png)

* The logged in user can access this by going to their profile page and click on the drop down menu, they can change their password in this page.

</details>

<details>
<summary>  Add Skills
</summary>

![Add Skills](/documentation/readme_images/add-skills.png)

* The logged in user can access profile page and click on add skills button which will allow regular users to add skills to their profile page by filling in a form.

</details>

<details>
<summary>  Add Company Bio
</summary>

![Add Company Bio](/documentation/readme_images/add-company-bio.png)

* The logged in user that is an employer can access profile page and click on add company bio button which will allow employer users to add company bio to their profile page by filling in a form.

</details>

<details>
<summary>  Most followed profiles
</summary>

![Most followed profiles](/documentation/readme_images/most-followed-profiles.png)

* Users will be able too see most followed profiles, and follow them

</details>

<details>
<summary>  Edit/Delete Skills/Company-bio
</summary>

![Dropdown](/documentation/readme_images/dropdown-menu.png)

* The logged in user can access profile page and click dropdown to edit or delete skills/company-bio

</details>

<details>
<summary>  Most Recent Jobs
</summary>

![Most Recent Jobs](/documentation/readme_images/most-recent-jobs.png)

* Users will be able too see most recent jobs, and view them
* Location of the job and title are provided

</details>

<details>
<summary>  The search bar adapts its search based on the specific page it is displayed on.
</summary>

![Search bar](/documentation/readme_images/search-bar.png)

* Users will be able too search for posts, job posts, liked, saved jobs

</details>

<details>
<summary>  Alert messages
</summary>

![Alert messages](/documentation/readme_images/alert-messages.png)

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

![404 Error](/documentation/readme_images/404-page.png)

* If the page doesn't exits users will be directed to 404 custom error page that contains a button to go back

</details>

### Features Left to Implement 

* Enable users to provide feedback and rate their experiences with employer profiles, fostering transparency and aiding other users in making informed decisions.
* Explore the implementation of personalized recommendation systems. These systems could suggest job posts or content based on users' preferences, activities, and historical interactions within the platform.
*  Introduce chat systems or messaging functionalities to facilitate real-time communication between users, enabling networking, collaboration, and quicker exchange of information within the platform.

## Technologies Used

### Languages Used

* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
* [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) 

### Databases Used

* [ElephantSQL](https://www.elephantsql.com/) - Postgres database
* [Cloudinary](https://cloudinary.com/) - Online static file storage

### Frameworks Used

* [Django REST framework](https://www.django-rest-framework.org/)
* [React Bootstrap](https://react-bootstrap.netlify.app/)
* [React](https://react.dev/) - frontend library

### Programs Used

* [Github](https://github.com/) - Storing the code online
* [Gitpod](https://www.gitpod.io/) - To write the code.
* [Heroku](https://www.heroku.com/) - Used as the cloud-based platform to deploy the site.
* [Google Fonts](https://fonts.google.com/) - Import main font the website.
* [Figma](https://www.figma.com/) - Used to create wireframes and schemes
* [Am I Responsive](https://ui.dev/amiresponsive) - To show the website image on a range of devices.
* [Git](https://git-scm.com/) - Version control
* [W3C Markup Validation Service](https://validator.w3.org/) - Used to validate HTML
* [CSS Validation Service](https://jigsaw.w3.org/css-validator/) - Used to validate CSS
* [CI Python Linter](https://pep8ci.herokuapp.com/) - Used to validate Python
* [Colormind](http://colormind.io/) - Color Scheme
* [Favicon](https://favicon.io/) - Used to create a favicon
* [NPM](https://www.npmjs.com/) - Package manager to install dependencies
* [Axios](https://axios-http.com/) - Used as a HTTP client
* [Font Awesome](https://fontawesome.com/) - Used to add icons
* [ESLint](https://eslint.org/) - Used to validate React code
* [Craiyon](https://www.craiyon.com/) - Used to create AI images for fake profiles and posts for visual representation of the website

### Custom components

Custom components were created to reuse code, and functionality throughout the website

* [AlertPopup.js](frontend/src/components/AlertPopup.js) - designed to notify users whenever they make alterations, ensuring they are promptly alerted about any modifications they've made.

* [Asset.js](frontend/src/components/Asset.js) - essentially creates a container that can display a spinner, an image, and/or a message based on the props it receives, allowing for flexible content display depending on the provided data.

* [Avatar.js](frontend/src/components/Avatar.js) - displays users profile image throughout the website

* [MoreDropdown.js](frontend/src/components/MoreDropdown.js) - displays an edit and delete buttons, so users can make action on content, it is used throughout the website

* [NavBar.js](frontend/src/components/NavBar.js) - displays navigations links based on the user account type, and login status

* [NotFound.js](frontend/src/components/NotFound.js) - displays a message for a 404 error page to the user, notifiying them that the page does not exist, and has a go back button

* [SideBar.js](frontend/src/components/SideBar.js) - displayed just under the navigation bar, based on user account type and login status it displays add post, add job buttons

* [PopularProfiles.js](frontend/src/pages/profiles/PopularProfiles.js) - displays most followed profiles on the website

* [MostRecentJobs.js](frontend/src/pages/job_posts/MostRecentJobs.js) - displays most recently created jobs on the website


### Custom hooks

* [useRedirect.js](frontend/src/hooks/useRedirect.js) - created to redirect users to the homepage based on their login status

* [useClickOutsideToggle.js](frontend/src/hooks/useClickOutsideToggle.js) - created to close expanded menu when there is a click event outside of the menu box throughout the website

* [useAlert.js](frontend/src/hooks/useAlert.js) - created to access the alert functionality from AlertContext 

### Custom context

* [CurrentUserContext.js](frontend/src/contexts/CurrentUserContext.js) - created to get current users authentication state and redirect user to sign in page if they are not signed in

* [ProfileDataContext.js](frontend/src/contexts/ProfileDataContext.js) - created to access the data of handleFollow, handleUnfollow, setProfileData

* [AlertContext.js](frontend/src/contexts/AlertContext.js) - created to manage alerts, their type and their message

* [RecentJobsContext.js](frontend/src/contexts/RecentJobsContext.js) - created to fetch most recent job posts and pass them on

* [UserTypeContext.js](frontend/src/contexts/UserTypeContext.js) - created to access user type from the user profile data, to manage employer, and regular user instaces for custom website rendering based on the user type

## Testing

Please see  [TESTING.md](TESTING.md) for all the detailed testing performed.

## Deployment and Local Developement

Live deployment can be found on this [View DevExchange live website here](https://devexchange-0c8785c813be.herokuapp.com/)

### Deployment 

This is a unified project, first step is to set up React app inside DRF project following these instructions:

#### React App inside DRF project

* Open workspace for the DRF project
* In the terminal, create a new folder named "frontend" in the root directory: `mkdir frontend`
* Change directory to "frontend" folder: `cd frontend`
* Run the command to create a new React app with necessary dependencies: `npx create-react-app . --template git+https://github.com/Code-Institute-Org/cra-template-moments.git --use-npm`.
* Confirm by entering 'y' and pressing enter when prompted.
* Remove redundant files from the frontend folder: `rm -rf .git .gitignore README.md`.

#### Setup Django API for Combined Workspace

* Make adjustments in env.py for Django settings.

#### Adjust Django Settings

* Set DEBUG and ALLOWED_HOSTS in settings.py.
* Set CORS code in settings.py

#### Adjust React Proxy

* Open package.json in the frontend directory.
* Add "proxy": `http://localhost:8000/` at the bottom.

#### Create axiosDefaults.js

* Navigate to the React app's source folder: `cd frontend/src/api`.
* Create an empty axiosDefaults.js file: `touch axiosDefaults.js`.

#### Run both servers in a split terminal

* Open two terminals side by side.
* In Terminal 1 (root directory), run Django API: `python3 manage.py runserver`.
* In Terminal 2 (frontend directory), run React app: `npm start`.

Both DRF and React frontend will be running in the same workspace and project is ready for deployment

### Heroku Deployment

#### Set up Cloudinary

* Sign up with GitHub or create an account.
* From the Dashboard you will see the "API Enviroment variable", this will go in our project.

#### Create a database using ElephantSQL.

* Sign up with your GitHub account and click on "Create New Instance" to start a new database.
* Provide a name for your database.
* Select the Free plan.
* Once created, click on the new database name to view the database URL and password.

#### Adjust your IDE and push changes to GitHub

#### Heroku needs two additional files to deploy properly

* requirements.txt
* Procfile

#### Create a new Heroku app, adjust settings and add Config Vars.

* Select "New" in the top-right corner of your Heroku Dashboard and choose "Create new app" from the dropdown menu.
* Enter a unique app name, select a region closest to you (EU or USA), and create the app.
* In the app settings, click "Reveal Config Vars" and set the environment variables:
    * Key: CLOUDINARY_URL, Value: insert your own Cloudinary API key here
    * Key: DATABASE_URL, Value: insert your own ElephantSQL database URL here
    * Key: SECRET_KEY, Value: this can be any random secret key
    * Key: ALLOWED_HOST, Value: this can be URL of your combined project, remove the https:// at the beginning and remove the trailing slash at the end
    * Key: CLIENT_ORGIN, Value: this can be URL of your combined project, keep the https:// at the beginning but remove the trailing slash at the end

* Deploy your application from the Deploy tab in your Heroku dashboard
    * Use manual or auto deployments

## References

* Code Institute walkthrough project Moments has been a great starting stone to develop this project.
* [Alert Popup](https://dev.to/jeffreythecoder/set-up-react-global-alert-popup-in-10mins-36l3) - helped alot to create the alert popup for and user changes on the frontend.

### Docs

* [Stack Overflow](https://stackoverflow.com/)
* [Code Institute](https://learn.codeinstitute.net/dashboard)
* [Django docs](https://docs.djangoproject.com/en/4.2/releases/3.2/)
* [Django REST framework](https://www.django-rest-framework.org/)
* [Cloudinary](https://cloudinary.com/documentation/diagnosing_error_codes_tutorial)
* [Google](https://www.google.com/)
* [Slack](https://slack.com/)
* [React Bootstrap](https://react-bootstrap.netlify.app/)
* [React](https://react.dev/learn)

### Content

* Content can be made by any user who uses the website
* Idea for the project was developers, mine, Thomas-Tomo Domitrovic.

### Acknowledgments

* I would like to thank my mentor for support and feedback throughout this project, Mitko Bachvarov.
* I would also like to extend my appreciation to the Slack community for their continuous engagement and willingness to share knowledge. The collaborative environment provided a platform for learning, troubleshooting, and gaining inspiration from fellow developers.