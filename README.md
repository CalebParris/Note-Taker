# Note-Taker

   [![Github](https://img.shields.io/badge/License-MIT-brightgreen)](#License)

   ## Description
   This project uses a server to create and save notes that can be viewed and deleted after being saved. These notes will remain in the app even after the server is restarted.

   ## Table of Contents
   * [Installation](#Installation)
   * [Usage](#Usage)
   * [License](#License)
   * [Tests](#Tests)
   * [Questions](#Questions)
   
   ## Installation
   To start the installation process, use the following command:
   ```
   npm install
   ```

   If the server is giving module errors after this, then use the following command instead:
   
   ```
   npm install express
   ```

   ## Usage
   To start the server, use either of the following commands:
   ```
   node server
   ```

   or

   ```
   node server.js
   ```

   ## License
   The license assoiated with this project is MIT.
   To view the license information, visit the link [here](https://github.com/CalebParris/Note-Taker/blob/master/LICENSE)

   ## Tests
   To test, start the server following the instructions in the 'Insallation' and 'Usage' sections. Once that is complete, go to the following address in your chosen browser:
   ```
   localhost:3000
   ```
   This should show the starting page. Click the 'Get Started' button and you will be directed to the notes page. Fill out the note fields and click the save icon in the top right of the screen to save the note:

   ![Saving a note GIF](/public/assets/gifs/saving_note.gif)

   To view a note, click on one of the saved notes and it will display in the note fields. While a note is displayed, you must click the pencil icon in the top right of the screen to start a new note:

   ![Viewing a note GIF](/public/assets/gifs/view_note.gif)

   If you find that there are notes that you want to delete, click the trashcan button next to the note and it will be removed from the list:

   ![Deleting a note GIF](/public/assets/gifs/delete_note.gif)

   To view the API data in JSON format, go to the following address in the browser:
   ```
   localhost:3000/api/notes
   ```
   It should look similar to this:

   ![JSON Data](/public/assets/images/note_taker_json.png)

   ## Questions
   If you have any comments, questions, or concerns about this project, please post them [here](https://github.com/CalebParris/Note-Taker/issues) and I will respond as soon as I am able.

   Otherwise, you can contact me through the following means:
   * Email: calebparris@live.com
   * Github: [CalebParris](https://github.com/CalebParris)
    
