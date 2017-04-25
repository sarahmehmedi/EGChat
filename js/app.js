$(document).ready(function() {
  //var json = { 1: {age: "21", name: "arjun",gender: "male"}, 2: {age: "30",name: "ravi",gender: "male"}, 3: {age: "57", name: "pushpa", gender: "female"}};
  var myJSON;
  $.getJSON('http://fc.greencams.net:8080/egapi/v1/arenainfo', function(json) {
    myJSON = json;
    console.log(myJSON);
  //var data = JSON.parse(myJSON);

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
  arenaMessageList = document.getElementById("arenaMessage");
  publicMessageList = document.getElementById("publicMessage");
  teamMessageList = document.getElementById("teamMessage");
  for(var j = 0; j<data.chats.length; j++){
    var count = data.chats[j];
    if(count.type == 'MessageType.Broadcast'){
      arenaMessageList.style.color = "green";
      arenaMessageList.innerHTML = arenaMessageList.innerHTML + count.message + "<br>";
    } else if (count.type == 'MessageType.Public') {
      arenaMessageList.style.color = "blue";
      arenaMessageList.innerHTML = arenaMessageList.innerHTML + count.name + ":" + count.message + "<br>";
    } else if (count.type == 'MessageType.Team'){
      arenaMessageList.style.color = "gold";
      arenaMessageList.innerHTML = arenaMessageList.innerHTML + count.name + ":" + count.message + "<br>";
    }
  }
  console.log(count.type + ":" + count.name + ":" + count.message);
  });
});
