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
* [ESLint Validation]()

#### [Lighthouse Report](#lighthouse-report-1)

#### [Bugs](#bugs-1)
* [Resolved Bugs](#resolved-bugs)
* [Unresolved Bugs](#unresolved-bug)

#### [Features Testing](#features-testing-1)

### [Backend Testing](#backend-testing)

#### [Automated Testing](#automated-testing-3)

#### [Manual Testing](#manual-testing-1)

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

### Bugs

#### Resolved Bugs

* 

#### Unresolved Bugs

* 

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
|               |               |                  |                  |
|               |               |                  |                  |
|               |               |                  |                  |
|               |               |                  |                  |
|               |               |                  |                  |
|               |               |                  |                  |
|               |               |                  |                  |
|               |               |                  |                  |
|               |               |                  |                  |
|               |               |                  |                  |
|               |               |                  |                  |
|               |               |                  |                  |
|               |               |                  |                  |
|               |               |                  |                  |
|               |               |                  |                  |
|               |               |                  |                  |



## Backend

### Automated Testing

* I create automated test for post views and job post views

To verify that my views are working correctly, I integrated automated testing. Below are the results demonstrating the outcomes of all tests conducted:

![Automated Testing Backend](/documentation/validation/job-post-automated-testing.png)

### Manual Testing

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







