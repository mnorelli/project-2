<!--
Creator: Alex White
Market: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Project #2: A Full-stack Application

### Overview

This second project is your first foray into **building a full-stack application** from scratch. You'll be **building a Sinatra app,** which means you'll learn about what it takes to build a functional application from the ground up yourself.

**This is exciting!** It's a lot, but we'll give you the tools over the next week to be able build what you need, and you get to decide what you do with it. And you get to be creative in choosing what sort of application you want to build!

**You will be working individually for this project**, and you'll be designing the app yourself. We hope you'll exercise creativity on this project, sketch some wireframes before you start, and write user stories to define what your users will want to do with the app. Make sure you have time to run these ideas by your instructors to get their feedback before you dive too deep into code! Remember to keep things small and focus on mastering the fundamentals – scope creep/feature creep is the biggest pitfall for any project!

---

### Technical Requirements

Your app must:

* **Have 1 model** (you can add more if it makes sense, but this should be done **after** you have an app with one model fully functioning) – your one model can be anything but a `user`, as we will not cover authentification until we get to Rails.

* **Have complete RESTful routes** for your resource (model) with GET, POST, PUT, PATCH, and DELETE

* **Use ActiveRecord to create a database table structure** and interact with your relationally-stored data

* **Use AJAX** either to make a request to your own backend to CRUD data without a page reload **OR** to hit an external API. Or both!

* **Include wireframes** that you designed during the planning process

* Have **semantically clean HTML, ERB and CSS**

* **Be deployed online** and accessible to the public

* **NOTE**: This is not an API. This is a full stack app with dynamic view pages using `.erb` files

---

### Necessary Deliverables

* A **working full-stack application, built by you**, hosted somewhere on the internet
* A **link to your hosted working app** in the URL section of your Github repo
* A **git repository hosted on Github**, with a link to your hosted project,  and frequent commits dating back to the **very beginning** of the project. Commit early, commit often.
* **A ``readme.md`` file** with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
* **Wireframes of your app**, hosted somewhere & linked in your readme
* A link in your ``readme.md`` to the publically-accessible **user stories you created**

---

### Suggested Ways to Get Started

* **Go one step at a time.** Test your assumptions every step of the way.

* **Ask for help.** In the next couple of projects we will expect you to be more independent. In this one, we want to give you all of the support we can. At minimum, your consultants may respond with "Google ____ and then come back." That is perfectly fine, and might help!

* **Begin with the end in mind.** Know where you want to go by planning with wireframes & user stories, so you don't waste time building things you don't need.

* **Don’t hesitate to write throwaway code to solve short term problems.** What we mean by this is create a new file and write some code **outside** of your app to test things out without worry of breaking something you already did.

* **Read the docs for whatever technologies you use.** Most of the time, there is a tutorial that you can follow, but not always, and learning to read documentation is crucial to your success as a developer

* **Commit early, commit often.** Use branches! Don’t be afraid to break something because you can always go back in time to a previous version.

* **User stories define what a specific type of user wants to accomplish with your application**. It's tempting to just make them _todo lists_ for what needs to get done, but if you keep them small & focused on what a user cares about from their perspective, it'll help you know what ot build

* **Write pseudocode before you write actual code.** Thinking through the logic of something helps. This goes especially for the `business logic` of your app. For example in the first potential idea below, the business logic refers to the construction of the Haiku.

---

### Potential Project Ideas

* **NOTE** One way to think of a one-model project is to imagine that you will be adding a User model with auth later. For example how we built a ToDo app in Express. A ToDo app might not be super useful without logging in, but that can be OK. But the best project ideas can stand on their own without the need of users logging in. Here are some examples:

#### Haiku Generator
- Make an app to generate Haiku's on a given topic.
- A user enters a word like "summer" or "programming" into a form, which creates a new "Haiku" and saves in the database.
- A user can also see all of the Haikus by going to the index page. They can also delete them or edit them.
- How would the logic of generating a haiku work? That's up to you. I would start by not worrying if they make any sense at all and just getting the syllable count right

#### Cheerful Messages

- Create an app that will allow people to create "cheerups" - happy little quips to brighten other peoples' days. Cheerups will be small - limited to 139 characters.
- Cheerups can be upvoted, downvoted or reported as spam!
- If they get more than one spam report they are deleted.
- If they get more than x downvotes, users can edit them!
- Alternatively, make "Bumouts"


#### Can You Eat It?
- The app that asks, "Can you eat it?"
- Users can enter a word or words into a form, and find out if they can eat it!
- When a form is submitted the logic for determining edibility is run, and the query is saved in the database with a boolean for edibility.  
- Alternatives could be "Can it Fly", "Does it Exist?", or whatever you can dream of. Think about using external API's like Wikipedia for finding answers.

#### A Personal Dashboard
- Build something useful for yourself!
- You must CRUD something. What is helpful to you? Basketball scores? Projects? Surf height? Best thing's you've eaten in the Bay Area?
- Can you use AJAX to get and display the weather from an external API? Or to get your schedule for the day?

---

### Useful Resources

* **[Sinatra Home](http://www.sinatrarb.com/)**
* **[Singing With Sinatra](http://code.tutsplus.com/tutorials/singing-with-sinatra--net-18965)** (A solid tutorial)
* **[Heroku](http://www.heroku.com)** _(for hosting your back-end)_
* **[Writing Good User Stories](http://www.mariaemerson.com/user-stories/)** _(for a few user story tips)_
* **[Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)** _(for more insight into wireframing about 1/3 down the page)_

---

### Project Feedback + Evaluation

* __Project Workflow__: Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?

* __Technical Requirements__: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

* __Creativity__: Did you added a personal spin or creative element into your project submission? Did you deliver something of value to the end user (not just a login button and an index page)?

* __Code Quality__: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors as we have in class?

* __Deployment and Functionality__: Is your application deployed and functional at a public URL? Is your application free of errors and incomplete functionality?

* __Total__: Your instructors will give you a total score on your project between:

    Score | Expectations
    ----- | ------------
    **0** | _Incomplete._
    **1** | _Does not meet expectations._
    **2** | _Meets expectactions, good job!_
    **3** | _Exceeds expectations, you wonderful creature, you!_

 This will serve as a helpful overall gauge of whether you met the project goals, but __the more important scores are the individual ones__ above, which can help you identify where to focus your efforts for the next project!
