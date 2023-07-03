// exercise 6
//task_1
const super_heros = [
  { hero: "Spider-Man", group: "Avengers" },
  { hero: "Iron-Man", group: "Avengers" },
  { hero: "Hulk", group: "Avengers" },
  { hero: "DeadPool", group: "None" },
  { hero: "Black Cat", group: "None" },
  { hero: "Wolverine", group: "X-Men" },
  { hero: "Professor X", group: "X-Men" },
  { hero: "Cable", group: "X-Men" },
];

xmen_heros = super_heros.filter(hero => hero.group==="X-Men");  
super_heros.forEach(element => {
  const li = document.getElementById("superHeros-ej6-1").appendChild(document.createElement("li"));
  li.textContent=element.hero;
});
 
//task_2
const avengers = [
  { hero: "Spider-Man" },
  { hero: "Iron-Man" },
  { hero: "Hulk" },
  { hero: "Scarlet Witch" },
  { hero: "Firestar" },
  { hero: "Sunspot" },
];

const x_men = [
  { hero: "Scarlet Witch" },
  { hero: "Wolverine" },
  { hero: "Professor X" },
  { hero: "Cable" },
  { hero: "Sunspot" },
];

const repeated_heros = avengers.filter(hero => x_men.some(e=> e.hero === hero.hero));
document.getElementById("superHeros-ej6-2").innerHTML+=" : "  +repeated_heros.map(a=>a.hero);

//exercise 7
const super_heros_7 = [
  { hero: "Spider-Man", group: "Avengers", releaseDate: new Date(1962, 8) },
  { hero: "Iron-Man", group: "Avengers", releaseDate: new Date(1970, 5) },
  { hero: "Hulk", group: "Avengers", releaseDate: new Date(1962, 5) },
  { hero: "DeadPool", group: "None", releaseDate: new Date(1991, 2) },
  { hero: "Black Cat", group: "None", releaseDate: new Date(1979, 6) },
  { hero: "Wolverine", group: "X-Men", releaseDate: new Date(1982, 12) },
]; 

const show_super_heros_sorted = super_heros=>{
  super_heros_7.sort((elem_1, elem_2)=>elem_1.releaseDate-elem_2.releaseDate);
  super_heros_7.forEach( hero=>{
    const li = document.getElementById("superHeros-ej7").appendChild(document.createElement("li"));
    li.textContent="Hero:"+ hero.hero +", Release date: "+hero.releaseDate;
  }
  );
}
show_super_heros_sorted(super_heros_7);