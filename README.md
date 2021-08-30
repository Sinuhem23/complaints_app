# complaints_appDougie the Donut & Pizza Rat

Link to site: https://sinuhem23.github.io/complaints_app/

Dougie the Donut and Pizza Rat are now best buds taking New York City by storm. Now instead of causing trouble against each other, they've taken it upon themselves to cause trouble around the city! The catch is, they don't want to get caught by the police (in other words, they want to eat their cake and have it, too) so they've put their brains together to come up with a helpful app idea that will allow them to see what kind of trouble they can cause without getting thrown in jail. 

Overall, what Dougie and Pizza Rat want for this app is for it to search through the 311 call data (Links to an external site.) provided by the NYC Open Data API (Links to an external site.), and display all the complaints made to the NYPD, filtered by borough. They also want to see how the police responded to the complaint, since that's what they'll use to determine whether or not they can cause the same trouble without consequences!

The Data

For this particular API, NYC Open Data, the data sent after making an AJAX call is formatted as JSON.

What is JSON?
JSON stands for JavaScript Object Notation, which simply just means the data is formatted like the JavaScript objects you've learned about! So, for example, one dataset from the API looks like:

When collapsed:

closeapi

When opened to see all the key value pairs:

openapi

Whew, that's a lot of data! For the purposes of this app (more specifics below), however, only some of the key-value pairs are of use to us. Particularly...

borough
descriptor (which says what kind of complaint was made)
agency: "NYPD" (because we only want complaints that were handled by the police department)
resolution_description (which says how the police handled the complaint)

The 311 Service Requests API Documentation (Links to an external site.)
This page in particular shows an example AJAX call using jQuery, however you'll notice instead of a .then promise, it uses .done -- convert it so that it uses the AJAX call format you learned in class today
The 311 Service Requests Data Info Page (Links to an external site.)
Info on how to filter the API Data Being Returned (Links to an external site.)
Info on how you can Customize the API Queries More Precisely (Links to an external site.)

