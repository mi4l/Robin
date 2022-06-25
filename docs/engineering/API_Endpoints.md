# API Endpoints

### User Creation and Login
- /login
- /login/success
- /login/error
- /signup
- /signup/success
- /signup/error

### User Profile and Settings
- /{username} (e.g. robindomainname.com/jacobpernell Profile overview for you or other users)
- /{username}/posts : (View all posts by a user)
- /settings/profile : (Edit username/password/email)
- /settings/accounts : (Manage connected social accounts)
- /settings/notifications : (Manage notification settings)
- /settings/appearance : (Manage Robin app theme)
- /settings/deleteaccount : (Delete Robin account)

### Creating/Scheduling/Managing Social Media Posts
- /create
- /create/schedule
- /create/{post_ID}
- /create/{post_ID}/edit
- /create/{post_ID}/delete
- /search
- /search?term="dogs"
- /search?start=01-01-2022&end=01-31-2022
- /view/{post_ID}
