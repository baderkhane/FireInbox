export class AjaxRequest extends ApiManager{
  constructor(url) {
      super();
      this.url = url;
  }

  sendPost(url, params){
    let http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            console.log(http.responseText);
        }
    }
    http.send(JSON.stringify(params));
  }

  saveMessage(message){
    this.sendPost(this.url,message);
  }
}
