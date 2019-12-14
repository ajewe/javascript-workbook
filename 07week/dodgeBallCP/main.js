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
    console.log('yo');

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
  }






//extend dodgeBallPlayer for Blue Team and Red Team (where each has mascot and team color)
class BlueTeammate extends Player {
  constructor(index, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor){
    super(index, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.mascot = mascot;
    this.teamColor = teamColor;
  }
  //fnxs
}

class RedTeammate extends Player {
  constructor(index, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor) {
    super(index, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.mascot = mascot;
    this.teamColor = teamColor;
  }
  newRedPlayer(index) {
    this.index = index

  }
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

//when click red/blue button, adds player to red/blue team extension
// use 'this' keyword to assign player to the team they chose with onclick
const makeRed = (person, index) => {
  let redPlayer = new RedTeammate(index, person.name, true, true, true, true, 7, 'redneck', 'Red');
  redPlayer.newRedPlayer(index);
}

const listPlayerChoices = () => {
  const playerElement = document.getElementById('players')
  console.log(listOfPlayers)
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

//want the "Make Player" button to add that player to dodgeball class
const makePlayer = (person, index) => {
  let player = new Player(person.name, true, true, true, true, 7);
  player.newPlayer(index);
}