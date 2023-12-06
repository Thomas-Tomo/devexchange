# DevExchange | Testing

Return to [README](README.md)
---
* Comprehensive testing has been performed to ensure the website's seamless and optimal functionality.
* Extensive testing has been conducted on both the API and the Frontend.

## Table of Contents

### [Frontend Testing](#frontend-testing-1)

#### [Automated Testing](#automated-testing-2)

#### [Responsiveness Testing](#responsiveness-testing-1)

#### [Browser Compatibility Testing](#browser-compatibility-testing-1)

#### [Device Testing](#device-testing-1)

####  [Code Validation](#code-validation-1)
* [HTML Validation](#html-validation)
* [CSS Validation](#css-validation)
* [ESLint Validation](#eslint-validation)

#### [Lighthouse Report](#lighthouse-report-1)

#### [Features Testing](#features-testing-1)

#### [Bugs](#bugs-1)
* [Resolved Bugs](#resolved-bugs)
* [Unresolved Bugs](#unresolved-bugs)

### [Backend Testing](#backend-testing-1)

#### [Automated Testing](#automated-testing-3)

#### [Manual Testing](#manual-testing-1)

#### [Python Validation](#python-validation-1)

#### [Bugs](#bugs-3)
---


## Frontend Testing

### Automated Testing

Jest was used to create automated test cases, first setupTests.js was created to utilise mocks/handler.js file to simulate users logging in and logging out.

![setupTests.js](/documentation/validation/setup-tests.png)

Because I was working in a unified repository, some changes had to be made to create successful tests

* Inside axiosDefauls.js -  I had to setup baseURL to the local host
* Inside settings.py - I had to adjust 'DIRS': []
* Inside urls.py I had to revert urlpatterns to development mode path

After these changes I could start creating my automated tests, to run them on my local devleopment mode

* I ran 4 tests, I used TTD (Test-Driven Development), initially make tests fail, and then write the code that will fulfill expected behaviour to make the tests pass. aiming to meet the desired specifications and improve the code's design and reliability.

* Tests were created for NavBar.test.js to see if the correct navigation links are shown to a logged in user versus a logged out user.
    * Test to render a navbar
    * Test to render a link to the user profile for a logged in user
    * Test to render a Sign In and Sign Up buttons again on logout

![Automated Testing Frontend PASS](/documentation/validation/frontend-testing.png)

![Automated Testing Frontend tests](/documentation/validation/NavBar-testing.png)

### Responsiveness Testing

The live website was extensively tested across diverse devices and screen dimensions to verify its responsiveness and adaptability. Developer Tools were employed to mimic different screen sizes, allowing comprehensive assessment of the website's performance on various devices. React Bootstrap classes, custom stylesheets and media queries were applied to attain the intended layout, guaranteeing consistent visual and functional coherence across all platforms, thereby improving user experience.

![Am I Responsive](/documentation/readme_images/am-i-responsive.png)

<details>
<summary> Desktop PC
</summary>

![Desktop PC](/documentation/validation/desktop-responsiveness.png)
</details>

<details>
<summary> Laptop
</summary>

![Laptop](/documentation/validation/laptop-responsiveness.png)
</details>

<details>
<summary> Tablet
</summary>

![Tablet](/documentation/validation/tablet-responsiveness.png)
</details>

<details>
<summary> Mobile
</summary>

![Mobile](/documentation/validation/mobile-responsiveness.png)
</details>

### Browser Compatibility Testing

The project underwent testing across numerous web browsers to detect compatibility concerns and validate its consistent performance across each. This rigorous testing assures a seamless and uniform user experience, irrespective of the chosen browser.

<details>
<summary> Chrome
</summary>

![Chrome](/documentation/validation/chrome-testing.png)
</details>

<details>
<summary> Microsoft Edge
</summary>

![Microsoft Edge](/documentation/validation/edge-testing.png)
</details>

<details>
<summary> Opera
</summary>

![Opera](/documentation/validation/opera-testing.png)
</details>

<details>
<summary> Samsung Internet (Mobile)
</summary>

![Samsung Internet Mobile](/documentation/validation/samsung-internet-testing.jpg)
</details>

### Device Testing

Device testing was conducted on a variety of phone models, including Samsung Galaxy A52, Oppo, iPhone 12, Huawei. The assistance of family members and friends was sought to perform the testing. This comprehensive approach ensured that the website was thoroughly evaluated on different devices and platforms, contributing to a more robust and user-friendly final product.

## Code Validation

#### HTML Validation

<details>
<summary> Html Checker Validation
</summary>

![Entire Page html validation](/documentation/validation/html-validation.png)
</details>

#### CSS Validation

<details>
<summary> W3C Jigsaw Validation
</summary>

![CSS Validation](/documentation/validation/css-validator.png)

* The CSS underwent validation using W3C Jigsaw, and it passed successfully. Despite encountering warnings, these were associated with React Bootstrap and did not impact the performance of my Custom CSS.
</details>

#### ESLint Validation

* All corrections were implemented by executing ESLint, and the suggested improvements were applied.

* Prettier plugin was also used throughout the development to ensure coding standard was on highest level.

Find python validation down below, [Python Validation](#python-validation-1)

### Lighthouse Report

<details>
<summary> Desktop lighthouse report
</summary>

![Desktop lighthouse report](/documentation/lighthouse_report/lighthouse-profile.png)
</details>

<details>
<summary> Mobile lighthouse report
</summary>

![Mobile lighthouse report](/documentation/lighthouse_report/mobile-lighthouse.png)
</details>

### Features Testing

| Page          | User Action   | Expected Result  | Notes            |
|---------------|---------------|------------------|------------------|
| Home Page     |   Click on Logo            |       Redirect to Home Page           |      PASS            |
|               |        Click on Sign Up button       |        Redirect to Sign Up page          |         PASS         |
|               |       Click on Sign In button        |      Redirect to Sign In page            |           PASS       |
|               |    View posts           |          Posts are displayed        |        PASS          |
|               |         Click on post      |          Open post page        |        PASS          |
|               |         View likes count    |      Post displays likes count          |        PASS          |
|               |           Click like button on a post    |       Have to be logged in to like           |       PASS           |
|               |        View comment count      |        Post displays comment count          |         PASS         |
|               |       Click on comment icon on a post        |        Opens post page and comments          |       PASS           |
|               |       Click on owner's Avatar on the post        |        Redirect to post owners profile          |        PASS          |
|               |       View post created date        |     Displays correct date             |             PASS     |
|               |         View most followed profiles component      |        Displays 6 most followed profiles          |            PASS      |
|               |        Click on any of the displayed profiles       |         Opens profile of the clicked profile         |        PASS          |
|               |       View most recent jobs component        |       Displays 3 most recent jobs           |       PASS           |
|               |      Hover over one of the jobs         |         Color changes while hovering the job         |       PASS           |
|               |          Click on a random most recent job     |       Opens that job post           |          PASS        |
|               |         View search bar to search posts      |       It is present           |         PASS         |
|               |      Click on search bar and search for post titles         |         If it exists it is displayed         |         PASS        |
|               |     Search for non existent posts          |       Displays asset message where it states that the post doesn't exist or to modify our search           |         PASS         |
|               |          Dev tools to test all screen sizes responsiveness     |           It is working on all screen sizes       |         PASS         |
|        Home Page (logged in as regular user)       |     Login as regular user        |       Successful login message with profile name displays           |        PASS          |
|               |     Navigation bar icons displayed          |        home, jobs, feed, liked, saved jobs, profile name, sign out          |       PASS           |
|               |        Click on Jobs       |     Redirect to jobs page             |      PASS            |
|               |        Click on Feed       |         Redirect to feed page        |      PASS           |
|               |       Click on Liked   |          Redirect to liked page        |         PASS         |
|               |           Click on Saved Jobs    |      Redirect to saved jobs page            |           PASS       |
|               |       Navigation bar active link, (page we are on)      |         It is lit white         |      PASS            |
|               |       Click on Profile (users)        |        Redirect to own profile page     |          PASS        |
|               |        Sidebar is visible       |       It displays only Add Post button          |        PASS       |
|               |         Click on Add Post button      |      Redirect to Create post form           |       PASS           |
|               |         Sidebar displays developers information      |        Displays name and social links          |          PASS        |
|               |        Click on linkedIn icon      |      Opens new tab with developers linkedIn profile            |           PASS       |
|               |        Click on github icon      |       Opens new tab with developers github profile           |          PASS        |
|               |       Most followed profiles component view        |      Now displays follow, unfollow buttons             |         PASS         |
|               |    Click follow next to the user you wish to follow           |         Follow message and follow count correct      |       PASS           |
|               |         Click unfollow next to the user you wish to unfollow      |        Unfollow message and followers  count correct          |          PASS        |
|               |     Click like on a post          |      Like icon fills and count goes up            |      PASS            |
|               |       Click like on a post again        |        Like icon empties and count goes down          |          PASS        |
|               |      All other features on logged in home page   |     They work the same as when logged out, we covered those            |         PASS         |
|    Home Page (logged in as employer user)           |      Login as employer user         |         Login message with users name displays          |         PASS         |
|               |       View Sidebar      |      Sidebar has additional icon Add Jobs because we are employer user            |            PASS      |
|               |      Click on Add Job         |          Redirect to Create job post form        |          PASS       |
|               |      All other features on logged in home page   |     They work the same as when logged in as a regular user, we covered those            |         PASS         |
|     Create a post          |     Form view          |         It is displayed correctly         |       PASS           |
|               |       Click create on an empty form        |     Form validation is required             |          PASS        |
|               |         Add title and press create      |       Must add an image, otherwise form wont submit          |          PASS        |
|               |     Add title, add image, leave content empty, click create          |     Form submits, content is not mandatory       |           PASS       |
|               |      Click cancel on a form         |        Redirect to previous page          |       PASS           |
|               |     Post created          |        Alert message that says post is created         |         PASS         |
|               |      View owned post         |         Displays data correctly and a dropdown menu         |       PASS           |
|               |       Click on a dropdown        |        Open edit or delete functionality icons          |          PASS        |
|               |       Click edit icon        |        Opens an edit post form with all placeholder data          |          PASS        |
|               |        Click delete icon       |            Opens a confirmation modal to confirm to delete      |        PASS          |
|               |        Click delete on confirmation modal       |     Post is deleted, alert message displayed            |              PASS    |
|               |        Click cancel on confirmation modal       |        Post is not deleted and modal closes    |          PASS        |
|               |         Click like on your own post      |         Can't like your own post         |        PASS          |
|               |       Write a comment, press post     |         Comment is posted and displays correct data         |        PASS          |
|               |      Press post on an empty comment form         |      It doesn't create a comment          |         PASS         |
|               |     Click like on your own comment          |       Can't like your own comment           |         PASS         |
|               |          Click like on someone elses comment     |         Comment like goes up         |        PASS          |
|               |      Click like again on already liked comment         |           Comment like count goes down       |        PASS          |
|               |          Click dropdown menu for your own comment     |       Displays edit and delete icons          |           PASS       |
|               |           Click edit comment icon   |       Opens comment edit form inside of the current page           |      PASS            |
|               |        Click update comment       |       Alert message shows and comment is updated if we changed any value          |           PASS       |
|               |    Click cancel on edit comment           |      Form closes            |          PASS        |
|               |      Click Add Reply to a comment         |    Open a reply form              |          PASS        |
|               |        Write a reply and press post       |        Reply created and alert message shown          |       PASS           |
|               |     Click dropdown menu on your own reply          |      Displays edit and delete icons            |          PASS        |
|               |           Click edit icon to edit reply    |       Opens reply form on the same page           |       PASS           |
|               |       Click delete icon to delete reply        |        Deletes reply and shows alert message          |        PASS          |
|               |        Click edit and update reply       |      Reply is updated and alert message is shown            |          PASS        |
|               |       View all replies on a comment, click view replies, or hide replies        |     It shows or hides replies depending on what we picked          |       PASS           |
|               |        Edit or delete someone elses reply       |      Can't if we don't own it           |          PASS        |
|               |           Edit or delete someone elses comment    |    Can't if we don't own it              |             PASS     |
|               |         If there are no comments yet      |     Paragraph says no comments yet            |           PASS       |
|        Create a job post       |       Form view        |        Displays correct data          |          PASS        |
|               |       Click create on an empty form        |     Form validation is required             |          PASS        |
|               |      Is Active field is defualt active         |        it is active          |             PASS     |
|               |        Allows Remote Work field is default not checked       |          It is not checked        |         PASS         |
|               |         All from fields are asking for valid validation      |       That is correct           |       PASS           |
|               |         Click cancel on Create job post      |        Redirects to a previous page          |        PASS         |
|               |        Fill in all form fields, click create      |          Job post is created and all data is displayed correctly        |         PASS        |
|               |       Edit and delete work same as the post edit and delete        |        Same test cases conducted as for post          |          PASS        |
|               |       Edit and delete work same for comments and replies        |       Same test cases conducted as for post comment and replies          |           PASS       |
|               |      Likes for the same as post         |        Correctly handles likes          |          PASS        |
|               |       Click on save job post icon        |       Saves job post to saved jobs page           |        PASS          |
|               |         Click save job post icon on your own job post      |       Can't save your own job post, its already on your profile           |         PASS         |
|               |        CLick save job post icon when it was already saved       |         Unsaves the job post         |         PASS         |
|               |       All alert messages work correctly for job posts        |         All is correct         |          PASS        |
|      Jobs         |        Click on Jobs link       |       Displays all job posts           |      PASS            |
|               |         Click on any job post title to view job post     |        Open wanted job post          |         PASS         |
|               |        Search for a job post       |        If it exists it will displays it, if not displays asset to tell us it doesn't exist or to modify our search          |         PASS         |
|       Feed        |        Click on Feed link      |     Displays all posts from users you follow             |        PASS          |
|               |          If you don't follow any users     |        Displays no posts or follow a user to see them          |        PASS          |
|       Liked        |       Click on Liked link        |       Displays all liked posts or an asset telling us we haven't liked any           |         PASS         |
|      Saved Jobs         |        Click on Saved Jobs       |       Displays all saved jobs, and if we didin't save any jobs shows an asset that says we haven't saved any yet         |      PASS           |
|       Profile Page        |      Click on own profile          |       Displays own profile with all correct data           |         PASS         |
|               |        Employer account have additional job posts counter       |           That is correct       |           PASS       |
|               |         Click on Show Posts button      |        Shows all profile owners posts and then we can hide them          |          PASS        |
|               |         Click on show Job Posts      |    Shows all profile owners job posts  and  then we can hide them             |       PASS           |
|               |      Regular account, Add Skills         |       Opens a create form to add skills           |        PASS          |
|               |         Submit an empty skills form      |      It submits it with placeholder "/", when user comes back to their profile it will give them more thinking to fill it in if they haven't, because of the visual representation            |      PASS            |
|               |         Edit skills      |         Edit fields and press update      |        PASS          |
|               |      Delete skills, click delete icon       |       Skills are deleted and button to add them is back visibile           |        PASS          |
|               |       Create skills, add all the information       |          All data is displayed correctly and links are clickable        |        PASS          |
|               |       Employer account, Add Company Bio      |         Opens a create form to add company bio        |         PASS         |
|               |        Submit an empty company bio form      |       It submits it with placeholder "/", when user comes back to their profile it will give them more thinking to fill it in if they haven't, because of the visual representation           |       PASS           |
|               |        Edit company bio      |           Edit field and press update       |         PASS         |
|      Edit profile         |        View edit profile form      |       Displays correct data           |           PASS       |
|               |      Change the image and click save        |       Profile image changed           |           PASS       |
|               |      Change account type, confirm modal        |          Account type changed        |        PASS          |
|               |         Add Bio     |        Bio changes after pressing save          |         PASS         |
|               |         After changing account type     |      Cannot go back to regular anymore            |         PASS         |
|               |        Edit username      |        Works as expected          |       PASS           |
|               |         Edit password     |           Works as expected       |         PASS         |
|               |          User makes changes     |        All alert messages display correctly          |        PASS          |
|        Sign Up Page       | Type invalid password | Try again | PASS |
|               | Type valid password | No error | PASS |
|               | Type password again (different) | Password must be the same | PASS |
|               | Click Sign Up with empty form | Fill in the form fields | PASS |
|               | Click Sign In if you have an account | Redirect to Login page | PASS |
|               | Fill all the form fields | Account created | PASS |
|        Sign In Page        | Click on Sign Up, if you don't have an account | Redirect to Sign Up page | PASS |
|               | Try invalid username | Username is not correct | PASS |
|               | Try invalid password | Password is not correct | PASS |
|               | Valid password and username | Logs in, message that you signed in | PASS |
|               | Click Sign In with empty form | Fill in the form fields | PASS |
|       General tests        |      Copy url while logged in as a user from an edit form, log out and try to paste that url         |       Redirect to Home page           |         PASS         |
|               |     Permissions tests, such as employer, regular user rendering         |         Checked and they are correctly displaying data         |          PASS        |
|               |              |                  |                  |

###  Bugs

#### Resolved Bugs

* Follow feature bug was discovered after model migrations, follow button would not work for some profiles because some profiles were deleted and had left over tables inside the database on local development, so once the database was restarted the bug was solved, Completely resolved.
![Follow bug](/documentation/validation/preview.png)

* Deployment bug, once the site was built with Heroku, it would state that it is successful but it was saying 400 request error, issue was, config var ALLOWED_HOSTS had a typo which was "ALLOWED_HOST", it was missing an S on the end of the var and that was causing that bug, once that typo was fixed, site was deployed as intended.
![Deployment bug](/documentation/validation/400heroku.png)

* Gitpod bug, local development had an issue with Gitpod IDE if there were more than 10 posts on the page, spinner asset would keep spinning, it would not load them, it is a known issue on Gitpod, and once the site is deployed that issue is no longer present and it is resolved.
![Gitpod bug](/documentation/validation/spinny.png)

#### Unresolved Bugs

* There are no unresolved bugs. All of the known bug have been fixed.

## Backend Testing

### Automated Testing

* I create automated test for post views and job post views
* Created tests:
    * Test if the API can succesfully list posts
    * Test if logged in user can create a post
    * Test if a user who is not logged in cannot create a post
    * Test if the API can retrieve a post using a valid ID
    * Test if the API correctly returns 404 status
    * Test if a user can update their own post
    * Test if a user cannot update another user's post

To verify that my views are working correctly, I integrated automated testing. Below are the results demonstrating the outcomes of all tests conducted:

![Automated Testing Backend](/documentation/validation/job-post-automated-testing.png)

### Manual Testing

* All testing was monitored with dev tools network responses, to make sure that the data inside API is correct on the deployed project.

| Post request          | User Action   | Expected Result  | Notes            |
|---------------|---------------|------------------|------------------|
|               |       Create a post request       |         Correct data response          |      PASS            |
|               |        Create a job post request      |        Correct data response         |         PASS         |
|               |         Create a comment post request     |        Correct data response         |         PASS         |

* All API testing was also done while the django apps were being created to make sure they are correct.

#### Admin Panel
* Admin panel works well and API data can be seen in there and changed aswell, admin functionality is completely functional.
* Needed models have been registered to admin.py file so they can be modified by admin.
* To access Admin panel, add `/admin` at the end of the url and sign in with admin credentials.

### Python Validation

To validate my code written in Python, I will be using [CI Python Linter](https://pep8ci.herokuapp.com/) to make sure that my code has no errors inside my apps.

#### [devexchange](devexchange)

<details>
<summary> permissions
</summary>

![permissions](/documentation/validation/devexchange-permissions-linter.png)
</details>

<details>
<summary> serializers
</summary>

![serializers](/documentation/validation/devexchange-serializer-linter.png)
</details>

<details>
<summary> views
</summary>

![views](/documentation/validation/devexchange-views-linter.png)
</details>

#### [comments](comments)

<details>
<summary> models
</summary>

![models](/documentation/validation/comment-model-linter.png)
</details>

<details>
<summary> serializers
</summary>

![serializers](/documentation/validation/comment-serializer-linter.png)
</details>

<details>
<summary> views
</summary>

![views](/documentation/validation/comment-views-linter.png)
</details>

#### [company_bio](company_bio)

<details>
<summary> models
</summary>

![models](/documentation/validation/company-bio-model-linter.png)
</details>

<details>
<summary> serializers
</summary>

![serializers](/documentation/validation/company-bio-serializer-linter.png)
</details>

<details>
<summary> views
</summary>

![views](/documentation/validation/company-bio-views-linter.png)
</details>

#### [followers](followers)

<details>
<summary> models
</summary>

![models](/documentation/validation/followers-model-linter.png)
</details>

<details>
<summary> serializers
</summary>

![serializers](/documentation/validation/followers-serializer-linter.png)
</details>

<details>
<summary> views
</summary>

![views](/documentation/validation/followers-views-linter.png)
</details>

#### [job_posts](job_posts)

<details>
<summary> models
</summary>

![models](/documentation/validation/job-post-model-linter.png)
</details>

<details>
<summary> serializers
</summary>

![serializers](/documentation/validation/job-posts-serializer-linter.png)
</details>

<details>
<summary> views
</summary>

![views](/documentation/validation/job-posts-views-linter.png)
</details>

<details>
<summary> tests
</summary>

![views](/documentation/validation/jobposts-tests-linter.png)
</details>

#### [likes](likes) 

<details>
<summary> models
</summary>

![models](/documentation/validation/likes-model-linter.png)
</details>

<details>
<summary> serializers
</summary>

![serializers](/documentation/validation/likes-serializer-linter.png)
</details>

<details>
<summary> views
</summary>

![views](/documentation/validation/likes-views-linter.png)
</details>


#### [posts](posts)

<details>
<summary> models
</summary>

![models](/documentation/validation/posts-model-linter.png)
</details>

<details>
<summary> serializers
</summary>

![serializers](/documentation/validation/posts-serializer-linter.png)
</details>

<details>
<summary> views
</summary>

![views](/documentation/validation/posts-views-linter.png)
</details>

<details>
<summary> tests
</summary>

![views](/documentation/validation/posts-tests-linter.png)
</details>

#### [profiles](profiles)

<details>
<summary> models
</summary>

![models](/documentation/validation/profile-model-linter.png)
</details>

<details>
<summary> serializers
</summary>

![serializers](/documentation/validation/profiles-serializer-linter.png)
</details>

<details>
<summary> views
</summary>

![views](/documentation/validation/profiles-views-linter.png)
</details>

#### [user_skills](user_skills)

<details>
<summary> models
</summary>

![models](/documentation/validation/user-skills-model-linter.png)
</details>

<details>
<summary> serializers
</summary>

![serializers](/documentation/validation/user-skills-serializer-linter.png)
</details>

<details>
<summary> views
</summary>

![views](/documentation/validation/user-skills-views-linter.png)
</details>


#### Bugs
* There are no bugs.






