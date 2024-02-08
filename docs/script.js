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

  // Data fetchen
fetch("/data/skills.json")
.then((response) => response.json())
.then((data) => {
  console.log(data);

// Data showcasen
for (let tool of data) {
    const skillscontainer = document.querySelector(".skillscontainer")
    console.log(tool);
    
//     // nieuwe div aanmaken VOOR elke skill
    // const skillNameEl = document.createElement('p');
    // const skillImgEl = document.createElement('img');



    // skillNameEl.innerText = tool.skill;

//   const usersNameEl = document.getElementById('naam');
//   const userAgeEl = document.getElementById('age');
//   const userStadEl = document.getElementById('stad');

//   usersNameEl.innerText = users.name;
//   userAgeEl.innerText = users.age;
//   userStadEl.innerText = users.stad;

}
})
// .catch((error) => console.error("Error loading JSON file", error));
