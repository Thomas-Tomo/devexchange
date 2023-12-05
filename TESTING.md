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
| Home Page     |               |                  |                  |
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







