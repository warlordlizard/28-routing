![cf](https://i.imgur.com/7v5ASc8.png) Lab 28: Routing - Todo List Application
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Configuration
Configure the root of your repository with the following files and directories. Thoughtfully name and organize any additional configuration or module files.
* **README.md** - contains documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file
* **.eslintrc.json** - contains the course linter configuration
* **.eslintignore** - contains the course linter ignore configuration
* **.babelrc** - contains babel config
* **package.json** - contains npm package config
* **webpack.config.js** - contains webpack config
* **src/** - contains the frontend code
* **src/components/** - contains your components
* **src/main.js** - contains the entire app
* **src/style** - containing your `.scss` partials and styles
* **src/style/main.scss** - contains the entry point for `.scss` partials

## Feature Tasks
##### Minimum Requirements
Create the following components:

```html 
<App />
  <Landing />
  <Dashboard />
    <NoteForm />
    <NoteList />
      <Noteitem />
```
##### `<App />`
* should manage frontend routes and should contain a `<nav>` (or a `<Navbar />` component)
* the `/` route should display the `<Landing />` component
* the `/dashboard` route should display the `<Dashboard />` component

##### `<Landing />`
* should display a general welcome message and a brief description of your todo list application

##### `<Dashboard />`
* should manage the entire **application state**
  * the state should contain a `notes` array
* should have a bound `addNote(note)` method that adds a note to `state.notes`
  * each note that gets added should have the following data
    * `id`: should contain the result of `uuid.v1()`
    * `editing`: false by default
    * `completed`: false by default
    * `content`: user provided content
    * `title`: user provided title
* should have a bound `removeNote(note)` method that removes a note from `state.notes` based on its `id`

##### `<NoteForm />`
* `onComplete` the component should add a note to the application state

##### `<NoteList />`
* should display an `<ul>` of `<NoteItem />` components

##### `<NoteItem />`
* should display a note and it's associated content and title
* should display a delete button
  * `onClick` the note should be removed from the application state