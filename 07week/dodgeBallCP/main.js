const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

let listOfPlayers = []
let blueTeam = []
let redTeam = []

//requires canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience
class Player {
  constructor(index, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    this.index = index;
    this.name = name;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
  }

  newPlayer(index) {
    this.index = index
    //push to new array that displays under dodge ball players, remove from list of people
    let spliced = arrOfPeople.splice(index, 1);
    listOfPlayers.push(spliced[0])
    console.log(listOfPlayers);
  }
  }

//extend dodgeBallPlayer for Blue Team and Red Team (where each has mascot and team color)
class BlueTeammate extends Player {
  constructor(index, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor){
    super(index, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.mascot = mascot;
    this.teamColor = teamColor;
  }

  // use 'this' keyword to assign player to the team they chose with onclick
  newBluePlayer(index) {
    this.index = index
    //new array
    let spliceBlue = listOfPlayers.splice(index, 1);
    blueTeam.push(spliceBlue[0])
    console.log(blueTeam);
    //update DOM
    let listPlayers = document.getElementById("players");
    while (listPlayers.hasChildNodes()) {
      listPlayers.removeChild(listPlayers.firstChild);
    }
    listPlayerChoices();
      
    let listBlue = document.getElementById("blue");
    while (listBlue.hasChildNodes()) {
      listBlue.removeChild(listBlue.firstChild);
    }
    listBluePeople();
  }
}

class RedTeammate extends Player {
  constructor(index, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor) {
    super(index, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.mascot = mascot;
    this.teamColor = teamColor;
  }

  // use 'this' keyword to assign player to the team they chose with onclick
  newRedPlayer(index) {
    this.index = index
    //new array
    let spliceRed = listOfPlayers.splice(index, 1);
    redTeam.push(spliceRed[0])
    console.log(redTeam);
    //update DOM
    let listPlayers = document.getElementById("players");
    while (listPlayers.hasChildNodes()) {
      listPlayers.removeChild(listPlayers.firstChild);
    }
    listPlayerChoices();
      
    let listRed = document.getElementById("red");
    while (listRed.hasChildNodes()) {
      listRed.removeChild(listRed.firstChild);
    }
    listRedPeople();
  }
}

const updateList = () => {
  //remove list then refresh with new list
  let listPeople = document.getElementById("people");
  while (listPeople.hasChildNodes()) {
    listPeople.removeChild(listPeople.firstChild);
  }
  listPeopleChoices();
    
  //remove list then refresh with new list
  let listPlayerz = document.getElementById("players");
  while (listPlayerz.hasChildNodes()) {
    listPlayerz.removeChild(listPlayerz.firstChild);
  }
  listPlayerChoices();
  }

//want the "Make Player" button to add that player to dodgeball class
const makePlayer = (person, index) => {
  let player = new Player(index, person.name, true, true, true, true, 7);
  player.newPlayer(index);
  updateList();

}

//when click red/blue button, adds player to red/blue team extension
const makeRed = (person, index) => {
  let redPlayer = new RedTeammate(index, person.name, true, true, true, true, 7, 'redneck', 'red');
  redPlayer.newRedPlayer(index);
}

const makeBlue = (person, index) => {
  let bluePlayer = new BlueTeammate(index, person.name, true, true, true, true, 7, 'blueneck', 'blue');
  bluePlayer.newBluePlayer(index);
}

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map((person, index) => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person, index)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

const listPlayerChoices = () => {
  const playerElement = document.getElementById('players')

  listOfPlayers.map((person, index) => {
    const li = document.createElement("li")
    const redButton = document.createElement("button")
    const blueButton = document.createElement("button")
    redButton.innerHTML = "Join red"
    redButton.onclick = () => {
      makeRed(person, index)
    }
    blueButton.innerHTML = "Join blue"
    blueButton.onclick = () => {
      makeBlue(person, index)
    }
    li.appendChild(redButton);
    li.appendChild(blueButton);
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    playerElement.append(li)
  })
}

const listBluePeople = () => {
  const blueElement = document.getElementById('blue')
  
  blueTeam.map(person => {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    blueElement.append(li)
  })
}

const listRedPeople = () => {
  const redElement = document.getElementById('red')
  
  redTeam.map(person => {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    redElement.append(li)
  })
}

//tests
if (typeof describe === 'function'){
  let assert = require('assert');

  describe('Player', function(){
    it('has canThrowBall, canDodgeBall, hasPaid, isHealthy', function(){
      var player1 = new Player(1, 'Miche', true, true, true, true, 6);
      assert.equal(player1.canThrowBall, true);
      assert.equal(player1.canDodgeBall, true);
      assert.equal(player1.hasPaid, true);
      assert.equal(player1.isHealthy, true);
    });

    it('has mascot and teamColor', function(){
      var bluePlayer = new BlueTeammate(6, 'Ashe', true, true, true, true, 7, 'blueneck', 'blue');
      assert.equal(bluePlayer.mascot, 'blueneck');
      assert.equal(bluePlayer.teamColor, 'blue');
    });

    it('can add to array', function(){
      var player1 = new Player(0, 'Charles Young', true, true, true, true, 6);
      listOfPlayers = []
      player1.newPlayer(0);
      assert.equal(listOfPlayers.length, 1);
      assert.equal(listOfPlayers[0].name, 'Charles Young');
    });
  })
}