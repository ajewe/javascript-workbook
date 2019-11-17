
let i = 1;

 do {
   console.log(i);
   i++;
 }
 while (i <= 1000);

 let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: 'Jan 5, 1925',
  gender: "female"
 };


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

  let arrayOfPersons = [
    {
      firstName: "Jane",
      lastName: "Doe",
      birthDate: 'Jan 5, 1925',
      gender: "female"
     },
     {
      firstName: "Jane",
      lastName: "Doe",
      birthDate: 'Jan 5, 1925',
      gender: "female"
     },
     {
      firstName: "Jane",
      lastName: "Doe",
      birthDate: 'Jan 5, 1925',
      gender: "female"
     },
  ];
 