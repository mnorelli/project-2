<!--
Creator: Alex White
Market: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Project #2: Personal Geography

### Overview

Sharing parts of the world we have been to is a way to compare notes about the lifeways of people far away and to bring peopl ecloser together based on shared experiences.

**Personal Geography** is an app to track places visited by a single person, and store descriptions and photos.  It will show a map for ech place visited and combine all places into a single map.

### User Stories

* A user will be able to see on the first page all the entered locations, descriptions and photos with a map in Jumbotron style showing points indicating those places.

* A user can either create a new location by clicking a map which will autofill the name and location field or click a "new location" button, fill in name, location, details, and photos, which will then show on the map.

* The user's choice of location will also add a small thumbnail map, zoomed in to the described location

* A user can click on a map point or a button in the text list to bring up a form to change an entered location

[Front page wireframe](https://github.com/mnorelli/project-2/blob/master/planning/frontpage.png)  
[Process model](https://github.com/mnorelli/project-2/tree/master/planning/Process.jpg)

### Data Model

The set of data will be called Places, and each place has:

* a Title, as a string
* a Location, as a string containing a city and country
* a Photo, as a string containing a URL
* a Description, as a long string

### Technology Used

* HTML/CSS
* Bootstrap
* Ajax
* Ruby
* Sinatra
* ActiveRecord
* PostgreSQL

### Approach Taken

This project contains technology I'm still learning, so I took the advice of consultants to work on this in separate parts before wiring it all up.

I tracked project progress in [Trello](https://trello.com/b/fULBqf00)  

I started with testing bits of MapBox API to understand how to get functionality I want and affect maps with user input.  This part was time-boxed to avoid working too long on interesting side issues without making progress on the working app.

Next, I created a model and test basic CRUD steps in irb/pry, outside of the app to start.

Then, I built the functional code to make sure user interaction functioned on the screen as expected.

Then, I added the data model and interacted with it using page clicks and submissions.

I used a new branch in git to develop the maps and map functions.

Then, I wired in the maps, back to the master branch, and passed server-side locations to the client-side to do map API interactions.

Then, I hosted it on Heroku.


### Installation Instructions

It's a web app hosted at Heroku!  Click [here](https://personalgeography.herokuapp.com/places).

### Unsolved Problems

The app runs well with hard-coded test data, but there are remaining issues with getting server data to the cleint for use in the maps API.  I used a suggested method to write script tags using erb to make client-side variables populated with server data variables.  But this tended to confuse the Bootstrap CSS rendering.  I'm looking for more elegant ways to move data from server to client.

A user login, even just mocked up, would present a nice interface and allow data to be perosnlaized for more than one person.


