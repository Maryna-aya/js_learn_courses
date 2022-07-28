//task 1
function newObject(firstElement, ...others) {
  return {
    first: firstElement, 
    other: others
  }
}

newObject('a', 'b', 'c', 'd');


//task 2

function getInfo(
  {
    name = 'Unknown', 
    info: {partners:[firstCompany, secondCompany] = []} = {}
  } = {}
) {
  console.log(`Name: ${name}`);
  console.log(`Partners: ${firstCompany}, ${secondCompany}`);
}

const organisation = {
  name: 'Google',
  info: { 
    employees: ['Vlad', 'Olga'], 
    partners: ['Microsoft', 'Facebook', 'Xing'] 
  }
};

getInfo(organisation);


//task 3

let user = {
    "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",
    "isActive": false,
    "balance": "$2,474.46",
    "age": 30,
    "eyeColor": "blue",
    "name": "Tameka Maxwell",
    "gender": "female",
    "company": "ENOMEN",
    "email": "tamekamaxwell@enomen.com",
    "phone": "+1 (902) 557-3898",
    "tags": [
      "aliquip",
      "anim",
      "exercitation",
      "non",
    ],
    "friends": [
      {
        "id": 0,
        "name": "Barber Hicks"
      },
      {
        "id": 1,
        "name": "Santana Cruz"
      },
      {
        "id": 2,
        "name": "Leola Cabrera"
      }
    ],
  };

const {
  name = '', 
  balance = '', 
  email = '',
  tags: [firstTag, , , lastTag] = [],
  friends: [{name: firstNameFriend = ''} = {}] = [],
} = user;

console.log (name, balance, email, firstTag, lastTag, firstNameFriend);


//task 4

const newArray = [...user.tags, ...user.friends];
console.log(newArray);
