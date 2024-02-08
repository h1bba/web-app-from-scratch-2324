const usersNameEl = document.getElementById('naam');
const userAgeEl = document.getElementById('age');
const userStadEl = document.getElementById('stad')

// Data fetchen
fetch("/data/data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

      // Data showcasen
  for (let users of data) {
    // console.log(users);
    const userNaam = document.createElement("h2");
    const userAge = document.createElement('h2')
    const userStad = document.createElement('h2')
    userNaam.innerText = users.name
    userAge.innerText = users.age
    userStad.innerText = users.stad
    usersNameEl.append(userNaam)
    userAgeEl.append(userAge)
    userStadEl.append(userStad)



  }

  })
  .catch((error) => console.error("Error loading JSON file", error));
  
