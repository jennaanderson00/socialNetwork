# Social Network API Back End

![image](https://user-images.githubusercontent.com/98507912/181936129-88f05a03-6abf-420e-bc53-2c09f8f9eb7d.png)


#### About 
* The Social Network API Back End is a challenge from the U of W Coding Bootcamp.  This project began as cloned starter code and was adjusted until all routes were functional and the server ran as intended. 

#### Goals
* The goal of this challenge was to use Express, MongoDB, and Mongoose ODM to create a functinal Social Network back end.
* Model creation
  * Users
    * Email validation
    * friendCount virtual - retrieves the length of a User's friends array
  * Thoughts
    * Min and Max length requirements
    * Timestamp formatting via getter method
    * Reaction schema
    * reactionCount virtual - retrieves the length of a Thought's reactions array
* Functional routes
  * Users and Thoughts
    * Get - all
    * Get - by id
    * Post - create User/Thought
    * Put - update User/Thought by id
    * Delete - remove User/Thought by id
  * Friends and Reactions
    * Post - create Friend/Reaction
    * Delete - remove Friend/Reaction by id

#### Technologies used
  * Express
  * MongoDB
  * Mongoose
  * Node
  * NPM
  * Javascript
  * Insomnia

#### Video Walkthrough
[Server functionality and Insomnia testing](https://drive.google.com/file/d/17nSr13jOM30mgfCcLLNtedSSNhONjkdn/view)
