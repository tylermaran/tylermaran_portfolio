# tylermaran
All things Tyler

This is a basic portfolio page I designed in reactjs. All of the projects pull from a `projects.json` file located in the ./react_ui folder.

*Below is an exaple of the project.json formatting:* 
>"name": "Example Page",
>"url": "https://www.example.com/",
>"git_link": "https://www.github.com/username/example-repo",
>"private": "true",  // will disable the repo link
>"desktop_image": ".png",
>"mobile_image": ".png",
>"show_phone": "true", //whether or not to show the cellphone view
>"detail_image": ".png",
>"description": "Main description under the modal",
>"detail": "Under the hood stuff",
>"additional_link": "extra info here!"

If you would like to copy this page, it should be as simple as cloning the repo and editing the projects.json folder to add your content.

Note: all desktop images are a 16:9 ratio. 

## Running
Clone the repo

Run `npm i` in the top level and the ./react_ui folder

`npm run dev` within ./react_ui to start the dev server

`npm run build` within ./react_ui to start a production build. Note this build stage finishes with moving the build folder into the parent directory.

Post build: run `npm run start` from the parent level to serve the production build.

## Dependencies

### Node Server
>"express": "^4.17.1"
>"path": "^0.12.7"

### React UI
>"bootstrap": "^4.3.1",
>"react": "^16.10.1",
>"react-bootstrap": "^1.0.0-beta.14",
>"react-dom": "^16.10.1",
>"react-router-dom": "^5.1.2",
>"react-scripts": "3.1.2"