const firstNames = ["John", "Paul", "George", "Ringo"];
const lastNames = ["Lennon", "McCartney", "Harrison", "Starr"];

const unordereList = document.getElementById("invited-list");

for (let i = 0; i < 10; i++) {
  const randomFirstName = Math.floor(Math.random() * firstNames.length);
  const randomLastName = Math.floor(Math.random() * lastNames.length);

  unordereList.innerHTML += `
<li>${firstNames[randomFirstName]} ${lastNames[randomLastName]}</li>
`;
}
