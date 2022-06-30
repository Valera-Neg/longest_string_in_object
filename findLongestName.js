const instructorWithLongestName = function(instructors) {
  const names = instructors.map(i => (Object.values(i.name.split()))).flat(1)

  let longestName = "";
  names.forEach(function(n) {
    if (n.length > longestName.length) {
      longestName = n;
    }    
  });
  
  const res =  instructors.find(i => i.name === longestName);
    return res;
};



console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));