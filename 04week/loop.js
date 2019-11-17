// 1
let i = 1;

 do {
   console.log(i);
   i++;
 }
 while (i <= 1000);

//  2
 let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: 'Jan 5, 1925',
  gender: "female"
 };

// 3
 let x;

 for (x in person) {
   if (x === 'birthDate') {
    let birthSplit = person.birthDate.split(' ');
    if (birthSplit[2]%2 === 0) {
      return
    } else {
      return console.log(person.birthDate);
    }
   }
  };

  // 4
  let arrayOfPersons = [
    {
      firstName: "Jane",
      lastName: "Doe",
      birthDate: 'Jan 5, 1925',
      gender: "female"
     },
     {
      firstName: "Bane",
      lastName: "Boe",
      birthDate: 'Jan 5, 1964',
      gender: "female"
     },
     {
      firstName: "Lane",
      lastName: "Loe",
      birthDate: 'Jan 5, 1999',
      gender: "male"
     },
  ];

  // 5
  arrayOfPersons.map(x =>
    console.log(x));
 
  // 6
  let filteredArray = arrayOfPersons.filter(persons => {
    return persons.gender === 'male'
  });
  
  console.log(filteredArray);

  // 7
  let filteredArrayYear = arrayOfPersons.filter(person => {
    let splitted = person.birthDate.split(' ')
    return splitted[2] < 1990
  });

  console.log(filteredArrayYear);