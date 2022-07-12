# Proposal

I am planning on making a coffee journaling app that allows users to keep track of the coffees they have tried, brew methods and take notes about their favorite blends.

# Frontend

I plan on using React for the Frontend to make a interactive website that allows users to add coffees, see the coffees they have added in the past and go into more detail for each coffee they added.

## Wireframes

## Frontend Components

### Homepage

List all the coffees that a user has added to their journal in a tiled format. Each tile will link to a details page about each coffee with information the user has added.

### Details

List details about the coffee the user has inputted, such as the roast, origin, brew method, pictures and notes they have about the coffee.

### Signup

Signup component that allows users to make their own account and input information about the coffees they like, as well as a short quiz that asks them simple questions about the coffees they like. This information may be used to make recommendations to different coffees as a stretch goal.

# Backend Components

For the backend, I plan on using Django and PostgreSQL to make an API that will store information and allow full CRUD to authorized users for their own information.

### Users

The Users model will hold information about the user and will have links to Coffee model. This will allow the Frontend to display user information and keep track of all the coffees the user has inputted.

### Coffee

The Coffee model will hold information that the user has inputted, formatted similarly to the Details Frontend Component. Users may add, edit and delete coffees. This will also have a rating system that can be used for a recommendation algorithm in the future that may recommend coffees to other users.

# User Stories

- As a user, I want to keep track of all the coffees that I have tried.
- As a user, I want to add descriptions and information about the coffees that I have tried.
- As a user, I want to keep track of what coffees I liked and disliked.
- As a user, I want to keep track of the process I used to make the coffees, so that I can repoduce it again.

# MVP

MVP will be reached when I have a the frontend built out with:
- A homepage listing all of a user's coffees
- Each coffee linking to a details page
- Users able to make accounts using the signup page

And the backend built out with:
- A User and Coffee model that holds important information about the users and the coffees they have added
- Linking the two models so that a user sees only the coffees they have added.

# Stretch Goals

For my Stretch Goals, I want to try adding user authentication so that they can only achieve full CRUD interaction to the coffees they have added. 

Another stretch goal is to add a recommendation algorithm, so that based on a user's preferences, they will be recommended different coffees that may match their tastes. So far I have done a little research, [https://django-recommends.readthedocs.io/en/latest/](https://django-recommends.readthedocs.io/en/latest/) and [https://www.deploymachinelearning.com/](https://www.deploymachinelearning.com/).


