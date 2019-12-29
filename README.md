# contact-form

For this project you must work alone to build a backend application consisting of a RESTful JSON API for a contact us form (examples) you'll be building out in a later class. All persistent data is to be stored in a simple JSON file that’s operated on through Node’s fs module.
User will be required in order to use the API and users must be able to register and login via the JSON API as well. This portion of the project will only be weighted as 10% of the overall mark as it's the last thing we go over in this course so don't fret over this portion too much.

Route Breakdown
	1. Route to create an entry when the user submits their form.
	2. Route to create or register a user.
	3. Route to log a registered user in to create a session.
	4. Route to get a listing of all submissions.


Required Fields
	These fields represent fields that will be submitted in the form. They will be represented in your JSON as object propreties. They must be validated against the server else respond with an appropriate HTTP status code and does not write the entry to the JSON file (your database).

Name
Email
Phone number


Phases

Phase One
	GitHub repository is set up.
	Express is running on a high port number such as 3000.


Phase Two
	Routes are setup and semantically correct, and respond with anything such as the string 'Create Submission' for the form submission route.
	Express default error handling middleware is setup.
	Express JSON parsing middleware is setup.

Phase Three
	Submitted entries are saved to the JSON file.
	Can request an array of objects (in JSON) for all submitted entries.
	Users can register.
	Users can login.
