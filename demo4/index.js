// const NotificationCenter = require('node-notifier').NotificationCenter;
const notifier = require('node-notifier')
const {app} = require('electron')
// var notifier = new NotificationCenter({
//   withFallback: false, // Use Growl Fallback if <= 10.8
//   customPath: undefined // Relative/Absolute path to binary if you want to use your own fork of terminal-notifier
// });
app.on('ready',()=>{
    notifier.notify(
        {
          title: '1',
          subtitle: '2',
          message: '3',
          sound: 'Notification.IM', // Case Sensitive string for location of sound file, or use one of macOS' native sounds (see below)
          icon: 'file:///C:/node-notifier/test/fixture/coulson.jpg', // Absolute Path to Triggering Icon
        //   contentImage: undefined, // Absolute Path to Attached Image (Content Image)
          open: 'http://www.4399.com', // URL to open on Click
          wait: false, // Wait for User Action against Notification or times out. Same as timeout = 5 seconds
      
          // New in latest version. See `example/macInput.js` for usage
          timeout: 5, // Takes precedence over wait if both are defined.
          closeLabel: 'cancel', // String. Label for cancel button
          actions: ['是','否'], // String | Array<String>. Action label or list of labels in case of dropdown
        //   dropdownLabel: undefined, // String. Label to be used if multiple actions
        //   reply: false // Boolean. If notification should take input. Value passed as third argument in callback and event emitter.
        },
        function (error, response, metadata) {
          console.log(response, metadata);
        }
      );
})
