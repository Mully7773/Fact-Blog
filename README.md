# Fact-Blog

This is a full-stack fact blog application called 'Today I Learned' that allows users to post various facts and vote on them. This application helped me relearn and solidify core React concepts.

## Link

Try posting a fun fact here: https://fact-blog-today-i-learned.netlify.app

## Screenshots

## Description

This is the project for Jonas Schmedtmann's most recent (2022) course, 'Build a Full-Stack Web App in a Weekend'. The application utilizes React on the front-end and Supabase for the back-end. All data persists through the database, so the facts users submit are visible to everyone always. Instead of using CSS, I decided to use SASS for my own version. In addition, I implemented my own sort fact component, which allows users to sort facts based on the type of votes they have received.

## Features

Upon loading the application, users can view the various facts that have been submitted to the database. Clicking the "Share a fact" button displays a form through which users can share their fact (max 200 characters), provide the source URL for the fact, and choose the category it belongs to from a drop-down. By posting the fact, users will see their fact displayed in the fact list along with a tag for its category type and three buttons for the different voting options: 'interesting', 'mindblowing', 'false'.

Currently, users can vote as many times as they like on any fact. If a given fact has more false votes than the total number of interesting and mindblowing votes together, a 'Disputed' flag will be placed on flag. Note that each fact also has a clickable 'Source' button that will bring the user to the user-provided source.

Users will also notice a sidebar containing the various categories of facts. This sidebar serves as a filter and clicking on any designated category will filter all of the facts based on that category tag. 'All' will display all of the facts.

In addition, I provided the user the option to sort the facts in each specific category. For example, users can sort the facts in the technology category by interesting votes by first clicking "Technology" in the sidebar and then using the drop down menu to sort by 'Interesting'. The sort functionality also works for the 'All' category, and users can easily sort by the three different vote types.

It is also possible there are no facts for a specific category in which case a message is displayed to indicate that state.

## Technology

React
<br>
SASS/SCSS
<br>
Supabase (back-end)
<br>
Mobile responsiveness

## Questions:

Feel free to contact me at mully7773@gmail.com if you have any questions. <br>
You can view more of my projects at https://github.com/Mully7773.
