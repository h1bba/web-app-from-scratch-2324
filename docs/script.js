// Data fetchen
fetch("/data/data.json")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

// Data showcasen
  for (let users of data) {
    const usersNameEl = document.getElementById('naam');
    const userAgeEl = document.getElementById('age');
    const userStadEl = document.getElementById('stad');

    usersNameEl.innerText = users.name;
    userAgeEl.innerText = users.age;
    userStadEl.innerText = users.stad;

  }
  })
  .catch((error) => console.error("Error loading JSON file", error));
  
