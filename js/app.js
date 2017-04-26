$(document).ready(function() {
  var myJSON;
  $.getJSON("http://fc.greencams.net:8080/egapi/v1/arenainfo", function(json) {
    myJSON = json;
    console.log(myJSON);

  var data = myJSON;
  document.getElementById("arenaName").innerHTML = "EG Chat, Current Arena: " + data.name;
  document.getElementById("jackpot").innerHTML = "Current Jackpot: " + data.jackpot;
  document.getElementById("numberOfPlayers").innerHTML = "Current Players: " + data.players.length;
//used for displaying players
  specPlayerList = document.getElementById("specPlayerList");
  playerNameList = document.getElementById("playerName");
  for(var i = 0; i < data.players.length;i++){
    var count = data.players[i];
    console.log(count.name + ":" + count.shipType);
    if(count.shipType == 'ShipType.Spectate'){
    specPlayerList.innerHTML = specPlayerList.innerHTML + count.name + "<br>";
    } else{
    playerNameList.innerHTML = playerNameList.innerHTML + count.name + "<br>";
    }
  }
//used for displaying chat
  chatTextList = document.getElementById("chatText");

  for(var j = 0; j<data.chats.length; j++){
    var count = data.chats[j];
    if(count.type == 'MessageType.Broadcast'){
      chatTextList.innerHTML = chatTextList.innerHTML + "<p style='color:green';>" + count.message;

    } else if (count.type == 'MessageType.Public') {
      chatTextList.innerHTML = chatTextList.innerHTML + "<p style='color:#4a6ae0';>" + count.name + ": " + count.message;

    } else if (count.type == 'MessageType.Team'){
      chatTextList.innerHTML = chatTextList.innerHTML + "<p style='color:gold';>" + count.name + ": " + count.message;
    }
  }
  console.log(count.type + ":" + count.name + ":" + count.message);
  });
});
