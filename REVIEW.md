# HTTP Auth Project
The Goal of this project was to create a simple HTTP authentication web server that would allow for users to sign up, login and have a stateful expereicne.

To acheive this I used express, cookieParser, cookieSession, bodyParser, onHeaders, pgp and pug for templating. In addition to the above I also used cyrptr and bcryptjs to encrypt sessionCookies and hash passwords, respectivetly.

###Things of note
#### Cookies
I used cookieSession and imported a key from a file that is outside of the repo. Security+

I made a cookie middlwear that uses onHeaders. This middlewear decrypts the current sessionCookie from the client, and then before any headers are written in encrypts the session once more.

In the decrypt and encrypt functions that I wrote for this middlewear, I handeled any empty session object cases, returning ```{}``` if need be. That's why I didn't need to check for this case in the middlewear itself.

Logout was easy and maybe could have been done better, but all I did was set the session back to ```{}``` and then redirected to the index page.

#### FrontEnd
I built a tumblr inspired front end, and utilized express ```.static()``` method to identify those files in the file system to the serve.

Using pug I was able to write some conditionals based on the status of the session or lack there of. This way the index/welcome page is also the dashboard, since they are so simple.

#### Login
In the login route we check first to make sure all the input was recieved. If it was and we have a matching user name then we use ```bcryptjs.compare()``` method to check if the provided password hashes to the one on record. Apparently I don't need to worry about salt even though these passwords were hased with salt. This is a question for jared or I need to ensure that the salt was indeed applied.

Anyway if we do get a matching password hash, then we set that value in  ```results.password```  to '', and then give the results values to the session. Finally we render the login page.

#### Signup
First we check to ensure that everything was provided. Since it was we then check to make sure the username is not already taken, if not then we get ready to write our new user to the database.

Since we want to hash our passwords, first create some salt. Then we hash the password with the salt, add that value to the ```user.password``` key and then write the whole thing to disk with our database queries.

Once that process is complete we set the password to '', and then give the provided user, minus the password but plus an ID, to the session value. Finally we render our index page. I think that I am passing an object with the name value in order to get pug to render the right part of the index, but presuming that the app is pulling the name from the session cookie anyway, I don't htink I need to do that. checking.... Apparently without passing that value when pug renders it will not pull that value from the cookie the first time. Perhaps I could improve something...

That's mostly it. I didn't cover the queries but they are pretty straight forward. I did create a client module like I have before with pg and it seemed to workout without issue. I wonder if pools and clients are something that is just not a thing with pgp.
