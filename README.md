# Just Another Text Editor (J.A.T.E)

A Progressive Web Application (PWA) text editor that runs in the browser. This application features data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application also functions offline.

## Features

- Single-page application that meets PWA criteria
- Works offline
- Data persistence with IndexedDB
- Install functionality
- Bundled with webpack
- Service worker with workbox
- Next-gen JavaScript support

## Installation

To install the application locally:

1. Clone the repository:
git clone git@github.com:yourusername/text-editor.git

2. Navigate to the project directory and install dependencies:
cd text-editor
npm install

3. Start the application:
npm run start

## Usage

1. Open the text editor web application in your browser
2. Enter content in the text editor
3. Content is automatically saved when you click off the DOM window
4. Reopen the text editor to find your content has been retrieved from IndexedDB
5. Click the Install button to download the web application as a desktop icon
6. Use the application with or without internet connection

## Technologies Used

- IndexedDB for data persistence
- Webpack for bundling
- Workbox for service worker
- JavaScript
- HTML/CSS
- Express.js
- Node.js
- idb package

## Deployment

This application is deployed on Render. You can access it [here](https://text-editor-project-k8eq.onrender.com).

## License

Please refer to the LICENSE in the repo.

Visit my GitHub profile: [DevWes91](https://github.com/DevWes91)
