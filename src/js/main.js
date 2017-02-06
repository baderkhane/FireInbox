import {Message} from './message';
import {FireBaseRequest} from './firebaseRequest';
import {AjaxRequest} from './ajaxRequest';

const URL="https://inbox-4d6ac.firebaseio.com/inbox.json";

let config = {
  apiKey: "AIzaSyAkOf7BaUvZnjfsY83bQ956Max2h4kZoQE",
  authDomain: "inbox-4d6ac.firebaseapp.com",
  databaseURL: "https://inbox-4d6ac.firebaseio.com",
  storageBucket: "inbox-4d6ac.appspot.com",
  messagingSenderId: "506421425341"
};

let mFireBase = new FireBaseRequest(config);
let mAjaxRequest = new AjaxRequest(URL);

mFireBase.getMessage(function (snapshot){
  addRowTable({
    id:snapshot.key,
    objet:snapshot.val().objet,
    message:snapshot.val().message,
    etat:snapshot.val().etat
  });
});

mFireBase.messageRemoved(function (snapshot){
  removeRowTable(snapshot.key);
});

function addRowTable(data){
  let $dom = "<tr><td><input type='checkbox' name='' value='' /></td><td class='obj_msg'></td><td class='body_msg'></td><td class='state_msg'></td></tr>";
  $('.table').find('tbody').append($dom);
  var $domElement = $('.table').find('tbody tr:last');
  $domElement.attr('id', data.id);
  $domElement.find('.obj_msg').text(data.objet);
  $domElement.find('.body_msg').text(data.message);
  $domElement.find('.state_msg').text(data.etat);
}
function removeRowTable(id){
  $("#" + id).slideUp(500, function(){
    $(this).remove();
  });
}
$("#addMessage").click(function(){
  if($("#objectMsg").val().length != 0 && $.trim($("#bodyMsg").val()) ){
    let msg = new Message($("#objectMsg").val(), $("#bodyMsg").val(), 'normal');
    //mFireBase.saveMessage(msg);
    //add with ajaxRequest
    mAjaxRequest.saveMessage(msg);
    //Reset fields
    $("#objectMsg").val('');
    $("#bodyMsg").val('');
  }
});
$("#delMessage").click(function(event) {
  $('#body-table input:checked').each(function() {
    mFireBase.removeMessage($(this).closest('tr').attr('id'));
  });
});
