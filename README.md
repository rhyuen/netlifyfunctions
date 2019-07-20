

# FAAS Services on Netlify Functions

## JUNE 29/2019
> Don't forget to call `mongoose.disconnect()` when you're done with your DB operations otherwise the function times out.

> npm run visit # a command for visiting the deploy.


1. List of Links
    - 1 Endpoint
    - Returns list of 10 Items
    Link Schema
        - Title
        - Link
        - Subtitle
        - Source
        - Date

2. Logging Service
    - 2 Endpoints
    - Check for Valid Token to Read/Write
    - Log Schema 
        - Date
        - Application
        - Error Message
        - Stack Trace