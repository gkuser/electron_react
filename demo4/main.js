// NOTE: Technically, this takes longer to require
const nn = require('node-notifier');
const notifier = require('node-notifier');
const {app,BrowserWindow} = require('electron')
app.on('ready',()=>{
    
    // const notifier = new notifier();

    notifier.notify({
      title: 'Heya',
      message: 'foo bar',
    //   extra: 'dsakdsa',
    //   foo: 'bar',
    //   close: 123,
    //   bar: true,
    // //   install: '/dsa/',
      icon: 'file:///C:/node-notifier/test/fixture/coulson.jpg',
      contentImage: 'file:///C:/node-notifier/test/fixture/coulson.jpg',
    //   id: 1337,
      sound: 'Notification.IM',
      actions: ['Ok', 'Cancel'],
    },
    function (error, response, metadata) {
        console.log(response);
    });
// String
// notifier.notify('halo master');

// // Object
// notifier.notify({
//   title: 'My notification',
//   message: 'Hello, there!'
// });
})

