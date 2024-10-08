# chatapp
ChatApp is a real-time messaging platform developed with React Native, Firebase, and Expo. It enables users to exchange messages, share images, and send their live location. The app also features displaying offline messages.

## Features
- **Real-time Messaging**: Users can receive and send messages instantly on a simple chat interface.
- **Image Sharing**: Users can share images taken on their phone or photos from their gallery.
- **Location Sharing**: Users can share their current location.
- **Offline Functionality**: Users can access and read old messages while offline.
- **User Authentication**: Users can authenticate themselves anonymously.

## User Stories
- **As a user**, I want to be able to easily enter a chat room so I can quickly start talking to my friends and family. 
- **As a user**, I want to be able to send messages to my friends and family members to exchange the latest news. 
- **As a user**, I want to send images to my friends to show them what I’m currently doing. 
- **As a user**, I want to share my location with my friends to show them where I am. 
- **As a user**, I want to be able to read my messages offline so I can reread conversations at any time. 
- **As a user**, with a visual impairment, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface.

## Prerequisites
Before setting up the app, make sure you have the following prerequisites installed:

- Node.js (v14 or higher)
- Expo CLI
- Android Studio
- Xcode (For iOS development - macOS only)
- Firebase project set up with Firestore and Firebase Storage

## Usage

1. Enter your name and select a background color to enter the chat room.
2. Send text messages, images, and even share your current location.
3. Access and view messages offline, ensuring your chat history is always available.


## Installation

### Node.js Version

Downgrade Node.js to version "16.19.0":

```bash
nvm install 16.19.0
nvm use 16.19.0
```

1. **Clone the repository:**

    ```sh
    git clone https://github.com/shareifjones/chatapp.git
    ```

2. **Navigate to the project directory:**

    ```sh
    cd chatapp
    ```

3. **Install dependencies:**

    ```sh
    npm install
    ```

4. **Start the application locally:**

    ```sh
    npm start
    ```

## Firebase Configuration

Firebase Configuration: Sign in to Google Firebase.

1. Create a new Firebase project.
2. Put Firestore Database in production mode.
3. Configure Firebase Storage in order to store photos and locations.
4. Adjust Firestore Rules to allow read and write access for both the database and storage.

