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

### Technology Used

* HTML/CSS
* Ajax
* Ruby
* Sinatra

### Approach Taken

This project contains technology I'm still learning, so I'm taking the advice of consultants to work on this in separate parts before wiring it all up.  

I will start with testing bits of MapBox API to see if I can understand how to get what I want and affect maps with user input.  This part will be time-boxed to avoid working too long on interesting side issues without making progress on the working app.

Next, I'll create a model and test basic CRUD steps in irb/pry, outside of the app to start

Then, I'll build the functional code to make sure things are representing on the screen as expected, again outside of the app.

Then, I'll add the data model and try to affect it with page clicks and submissions.

Then, try to get it to host on Heroku.

Then, I'll wire in the maps.

Then, try to get it to host on Heroku.

### Installation Instructions

It's a web project!  Click [here](#)!

### Unsolved Problems


---


### Project Must-Haves

- a Sinatra app
- exercise creativity on this project
- sketch some wireframes before you start
- write user stories
- keep things small
- focus on mastering the fundamentals
- avoid scope creep/feature creep

### Technical Requirements

Your app must:

* **Have one model** 
* **Have complete RESTful routes** for your resource (model) with GET, POST, PUT, PATCH, and DELETE.
* **Use ActiveRecord to create a database table structure**
* **semantically clean HTML, ERB and CSS**
* **Be deployed online** and accessible to the public.

Your app may:

* **Use AJAX** either to make a request to your own backend to CRUD data without a page reload **OR** to hit an external API. Or both!
* **Have more than one model**

---

### Necessary Deliverables

* **working hosted, full-stack application, built by you**
* A **link to your hosted working app** in the URL section of your Github repo
* A **git repository hosted on Github**, frequent commits 
* **This ``readme.md`` file**
* **Wireframes of your app**, hosted somewhere & linked in your readme
* A link in your ``readme.md`` to the publically-accessible **user stories you created**

---

### Suggested Ways to Get Started

* Test your assumptions
* **Ask for help.** 
* **Begin with the end in mind.** 
* **Write throwaway code to solve short term problems.**
* **Read the docs for whatever technologies you use.** 
* **Keep user stories small & focused on what a user cares about**
* **Write pseudocode before you write actual code.** ---

### Useful Resources

* **[Sinatra Home](http://www.sinatrarb.com/)**
* **[Singing With Sinatra](http://code.tutsplus.com/tutorials/singing-with-sinatra--net-18965)** (A solid tutorial)
* **[Heroku](http://www.heroku.com)** _(for hosting your back-end)_
* **[Writing Good User Stories](http://www.mariaemerson.com/user-stories/)** _(for a few user story tips)_
* **[Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)** _(for more insight into wireframing about 1/3 down the page)_

---

### Project Feedback + Evaluation

* __Project Workflow__
  - user stories
  - wireframes
  - task tracking
  - ERDs
  - source control 
* __Technical Requirements__ meet all
  - complex?
* __Creativity__ something of value 
* __Code Quality__: 
  - spacing
  - modularity
  - semantic naming
  - comment your code
* __Deployment and Functionality__ at a public URL
  - free of errors and complete