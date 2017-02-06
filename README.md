# FireInbox
It's a web app for

So we have two types of requests, Ajax and firebase
we have there one class named as AjaxRequest which contain all methods of send...
if you wanna send a message using AjaxRequest you need to call
```sh
//Instanciate the object and passed the url of firebase app, in our case is https://inbox-4d6ac.firebaseio.com/inbox.json
let mAjaxRequest = new AjaxRequest(URL);
//Calling the method of save
let msg = new Message("object message", "message", 'type of message');
mAjaxRequest.saveMessage(msg);

```
