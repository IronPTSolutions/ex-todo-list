Task CRD express app (Create, Read, Delete)

- check and understand `app.js`. Explain what each line is for. Don't need to add code here
- check and understand `routes.config.js`. Explain what each line is for. some TODOs to resolve later!
- check and understand `routes.controller.js`. Explain what each line is for. some TODOs to resolve later!
- check and understand `views/tasks/` files. Explain what each file is for. some TODOs to resolve!

### 0 - Create a beautiful layout using bootstrap!

Take some minutes to review [bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/) docs!

### 1 - new task

- GET /tasks/new should render a simple HTML form with just a title field (`res.render`)
- by sendind this form user should POST /tasks route with the task data (`action=...`) (`method=...`)
- POST /tasks should receive task info (`req.body`), create task using `Task.create(..)`and redirect to the list (`res.redirect`)

### 2 - task list

- GET /tasks should render an HTML list with all the tasks (`res.render`)
- each task should be a link to the task detail (/tasks/ID_HERE)
- each task should have a button to delete it (POST /tasks/ID_HERE/delete). Use a form with just a button!
- add a link to new task page

### 3 - task detail

- GET /tasks/ID_HERE should receive task id (`req.params`). Get task using `Task.findById(..)` and render an HTML detail with task info (`res.render`)
- add a link to go back to the task list
- add a button to delete it (POST /tasks/ID_HERE/delete). Use a form with just a button!

### 4 - task delete

- POST /tasks/ID_HERE/delete should receive task id (`req.params`), delete task using `Task.findByIdAndDelete(..)` and redirect to task list (`res.redirect`)
