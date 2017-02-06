export class FireBaseRequest extends ApiManager{
  constructor(config) {
    super();
    firebase.initializeApp(config);
    this.instanceDb = firebase.database().ref('inbox/');
  }
  /**
   * [saveMessage description]
   * @param  {[type]} message [description]
   * @return {[type]}         [description]
   */
  saveMessage(message){
    console.log(message);
    this.instanceDb.push({
      objet:message.objet,
      message: message.message,
      etat:message.etat
    });
  }
  removeMessage(id){
    this.instanceDb.child(id).remove();
  }

  messageRemoved(callback){
    this.instanceDb.on('child_removed', function(snapshot) {
      callback(snapshot);
    });
  }
  getMessage(callback){
    this.instanceDb.on('child_added', function(snapshot) {
      callback(snapshot);
    });
  }
}
