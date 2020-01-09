const map = ["name", "isActive", "email", "balance"];
const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
		"nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
		"nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
		"nestedField": { total: 200 }
  }
];

const createTable = (keys, arr, newUsers) => {
  const table = document.createElement('table');
  const tr = document.createElement('tr');
  const container = document.querySelector('.container');
  const balance = document.createElement('tr');
  container.append(table);
  tr.innerHTML = '<th>#</th>';
  tr.setAttribute("align", "left");
  for(let elem of keys) {
    tr.innerHTML += `<th>${elem.substring(0,1).toUpperCase()+elem.substring(1).toLowerCase()}</td>`;
  }
  table.append(tr);
  var overBalance = 0;
  for(let elem of arr) {
    let tempObj = {};
    for(let key of keys) {
    tempObj[key] = elem[key];
    if (key === "balance") {
      overBalance += tempObj[key];
    }
    }
    console.log(tempObj);
    newUsers(tempObj);
  }

  balance.innerHTML = `<td colspan="${map.length+1}" align="right">Total balance:${overBalance}</td>`;
  table.append(balance);
}

const newUsers = (tempObj) => {
  const count = document.querySelectorAll('tr').length;
  const tr = document.createElement('tr');
  tr.setAttribute("align", "left");
  const balanceCount = document.querySelector('tr:last-child')
  tr.innerHTML = `<td>${count}</td>`;
  for (let key in tempObj) {
    tr.innerHTML+=`<td>${tempObj[key]}</td>`
  }
  balanceCount.after(tr);
}



createTable(map, users, newUsers);


