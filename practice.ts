// /*Personal Message: Store a person’s name in a variable, and print a message to that person.
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
//  QUESTION NUMBER ONE */
// let names:string = "RUMAIL";
// console.log(`Hello ${names} ,would you like to learn some Python today?`)

// /*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.
// QUESTION NUMBER TWO*/

// let person:string = "Hasaan Raza";
// console.log(person.toLowerCase());
// console.log(person.toUpperCase());

// let person1:string ="rumail raza muhammad rafique";

// let word:string[] = person1.split(" ");

// let titlecase:string = "";

// for (let i = 0; i < word.length; i++) {

//  titlecase +=word[i].charAt(0).toUpperCase() +word[i].slice(1).toLowerCase()

// }
// console.log(titlecase);
// // Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
// // Your output should look something like the following, including the quotation marks:

// //Albert Einstein once said, “A person who never made a mistake never tried anything new.”

// let author:string="Albert Einstein\n";

// console.log(`${author}once said, “A person who never made a mistake never tried anything new.”`);

// // Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
// //  Then compose your message and store it in a new variable called message. Print your message.
// let famous_person :string="Albert Einstein\n";
// let message:string="once said, “A person who never made a mistake never tried anything new.”"
// console.log(famous_person,message);

// /*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//  Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace
//  around the name is displayed. Then print the name after striping the white spaces.*/
//  let person2:string ="\t\tRaheel Raza\t\t\n,\t\tHassan raza\t\t";
//  console.log(person2);
//  /*Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
//   Be sure to enclose your operations in print statements to see the results.*/
//   console.log(5+3);
//   console.log(10-2);
//   console.log(2*4);
//   console.log(16/2);
//   /*Favorite Number: Store your favorite number in a variable.
//   Then, using that variable, create a message that reveals your favorite number. Print that message.*/
//   let favnumber:number = 70;
//   console.log(`I am reveals my favorite number ${favnumber}`);
//  /* Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
//   If you don’t have anything specific to write because your programs are too simple at this point,
//    just add your name and the current date at the top of each program file.
//    Then write one sentence describing what the program does.*/
// let one:number=23;
// // number one value is 23
// let two:number=45;
// //number two value is 45
//  let sum:number =one+two;
//  //sum store the result one add two answer is 62
//  console.log(sum);
/*Names: Store the names of a few of your friends in a array called names. 
Print each person’s name by accessing each element in the list, one at a time*/

// let names:string[]=["rumail","hassan","raheel","hamza"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s 
name, print a message to them. The text of each message should be the same, 
but each message should be personalized with the person’s name.*/

// let pername:string[] =["hamza","moiz","sono","rabia","ahmed"];

// pername.forEach(name => {
//     console.log(`hello ${name} how are you`);
// });

/*Your Own Array: Think of your favorite mode of transportation, 
such as a motorcycle or a car, and make a list that stores several examples.
 Use your list to print a series of statements about these items, such as 
“I would like to own a Honda motorcycle.*/

// let motorcycles:string[]=["honda","yahma","super power","unique",]

// motorcycles.forEach(motorcycle => {
//         console.log(`I would like to own a ${motorcycle} motorcycle`)

// });

/*Guest List: If you could invite anyone, living or deceased, to dinner, 
who would you invite? Make a list that includes at least three people you’d 
like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/

// let listnames:string[]=["raza","shahnawz","rafique"];
// listnames.forEach(listname => {

//     console.log(`" Hello ${listname} Join me for a delicious dinner at my place tomorrow night!"`)

// });

/*Changing Guest List: You just heard that one of your guests can’t
 make the dinner, so you need to send out a new set of invitations.
  You’ll have to think of someone else to invite.*/

//   let guestlist:string[] =["hamza","moiz","sono","rabia","ahmed"];
//   let YouNotInvited:string="sono";

//   console.log(`you are not invited for dinner  ${YouNotInvited}`)

//   let newguest:string="rumail"

//   let indexOfYouNotInvited:number = guestlist.indexOf(YouNotInvited)

//   guestlist[indexOfYouNotInvited]=newguest
//   console.log(guestlist[2])
/*More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of 
your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • 
Print a new set of invitation messages, one for each person in your list.*/

// task no 17

/*Shrinking Guest List: You just found out that your new dinner table won’t arrive
 in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that 
prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names
 remain in your list. Each time you pop a name from your list, 
 print a message to that person letting them know you’re sorry 
 you can’t invite them to dinner.*/
/* Print a message to each of the two people still on your
 list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty
 list. Print your list to make sure you actually have an empty list at the end of your program.*/

// let listofguest:string[] =["hamza","moiz","sono"];
// console.log("i am found a bigger table for dinner");

// listofguest.unshift("rumail")
// const centerindex = Math.floor(listofguest.length/2)
// listofguest.splice(centerindex,0,"fazan");
// listofguest.push("umer");
// listofguest.forEach(name => {
//    console.log(`${name} this new initation you night dinner for me`)

// });

// let guestnames:string[] =["hamza","moiz","sono"];
// console.log("i am found a bigger table for dinner");

// guestnames.unshift("rumail")
// const centerindex = Math.floor(guestnames.length/2)
// guestnames.splice(centerindex,0,"fazan");
// guestnames.push("umer");
// while (guestnames.length > 2) {
//   let remove = guestnames.pop();

//   if(remove){
//     console.log(`${remove} you are sorry
//     you can not invite them to dinner `)
//   }
// }
// guestnames.forEach(index => {
//   console.log(`${index} letting them know they are still invited`)

// });
// guestnames.pop();
// guestnames.pop();
// console.log("final result list are empty")

/* task no 18*/
// let citiesnames:string[]=["baliatwon","shershah","orangi town","tower"];
// console.log("orginal order",citiesnames);
// console.log("alphabetical",[...citiesnames].sort());
// console.log("reverse",citiesnames.reverse());
// console.log("original",citiesnames);
// console.log("sort or reverse ",[...citiesnames].sort().reverse())
// console.log("reverse",citiesnames.reverse());
// console.log("sort",[...citiesnames].sort());
// console.log("reverse alphabetical",citiesnames.sort((a,b)=>(b.localeCompare(a))));

/* task no 19*/
// let listofdinner:string[]=["hamza","rumail","faizan","ramzan","hassan",]
// listofdinner.forEach((listofdinner,index) => {

//   console.log(`${listofdinner} you are inviting ${index + 1}`)

// });
/* task no 20*/
// let listofcolour:string[]=["red","blue","green","yellow","gray"];
// listofcolour.forEach((listofcolour,index) => {
//   console.log(`this color ${listofcolour} is my best color ${index}`)

// });

/* task no 21*/
// type bike ={
//   made:string,
//   model:number,
//   name:string,
//   color:string,
//   id:number,
//   auto:boolean,

// };
// let specification:bike=   {

//    made:"feb",
//    model:2014,
//    name:"honda",
//    color:"blue",
//    id:123,
//    auto:true,

// };
// console.log(specification);
/* task no 22*/

// let figures:number[]=[1,3,5,6,8,10];
// //change the condition = replace < sign to this then resolve error
// /* for (let i = 0; i = figures.length; i++) {*/
//   for (let i = 0; i < figures.length; i++) {
//   const result = figures[i];
//   console.log(result);
// }

/* task no 23*/

// let mobile:string="oppo"
// console.log("is mobile == 'oppo' ? true")
// console.log(mobile == 'oppo')
// console.log("is mobile !== 'oppo' ? true")
// console.log(mobile !== 'oppo')
// console.log("is mobile !== 'vivo' ? true")
// console.log(mobile !== 'vivo')
// console.log("is mobile == 'Oppo' ? false")
// console.log(mobile == 'Oppo')
// console.log("is mobile == 'oPPo' ? false")
// console.log(mobile == 'oPPo')
// console.log("is mobile == 'infinix' ? false")
// console.log(mobile == 'infinix')

// let house:number=13;
// console.log("is house == '13' ? true")
// console.log(house == 13)
// console.log("is house  !== '14' ? true")
// console.log(house !== 14)
// console.log("is house > '56' ? true")
// console.log(house < 56)
// console.log("is house <= '12' ? false")
// console.log(house <= 12)
// console.log("is house > '0' ? false")
// console.log(house < 0)

/* task no 24*/
// let num2:number=10;
// if (num2 > 4) {
//   console.log("true")
// } else {
//   console.log("false")
// }
// if (num2 < 4) {
//   console.log("true")
// } else {
//   console.log("false")
// }

// let color:string="BLUE";
// console.log(" is color.uppercase == 'blue' ? this is true")
// console.log(color.toUpperCase());

// let temperature:number=34;
// let sunny:boolean=true;
// console.log(temperature < 28 && "wether is ", sunny)

// let subject:string[]=["english","urdu","math","chemistry","physics"]

// let isChecksubject:string="urdu";

// console.log(`${isChecksubject} is already avaliable ia array list`)
// console.log(subject.includes(isChecksubject));

// let subject1:string[]=["english","urdu","math","chemistry","physics"]

// let isChecksubject1:string="biology";

// console.log(`${isChecksubject1} is it not avaliable in this array`)
// console.log(!subject1.includes(isChecksubject1));

/* task no 25 and 26 and 27*/

// let alien_color:string="green";
// let alien_color1:string="yellow";
// let alien_color3:string="blue";

// if (alien_color == "green") {
//    console.log("you player just earned 5 points");

// }if (alien_color1) {
//   console.log("you player just earned 5 points");
// }if (alien_color3 =="blue") {
//   console.log("you player just earned 5 points");
// } else {
//   console.log("you are fail you not earned any points");
// }

/* task no 28*/
// let age:number=28;
// if (age < 2) {
//   console.log("message that the person is a baby")
// } else {
//   console.log("message that the person is not  a small baby")
// }

// if (age >= 2 && age < 4 ) {
//   console.log("that the person is a toddler.")
// } else {
//   console.log("that the person is not a toddler.")
// }

// if (age >= 4 && age < 13 ) {
//   console.log("that the person is a kid.")
// } else {
//   console.log("that the person is not a kid.")
// }

// if (age >= 13 && age < 20 ) {
//   console.log("that the person is a teenagar.")
// } else {
//   console.log("that the person is not a teenagar.")
// }

// if (age >= 20 && age < 65 ) {
//   console.log("that the person is an adult.")
// } else {
//   console.log("that the person is not a adult.")
// }
// let age1:number=65;

// if (age1 == 65) {
//   console.log("the person is an elder")

// } else {
//   console.log("the person is little bit an elder")
// }
/* task no 29*/

// let favFruits:string[]=["mango","apple","banana"];

// if (favFruits.includes("mango")) {
//   console.log("i like mango")
// }

// if (favFruits.includes("banana")) {
//   console.log("i like banana")
// }

// if (favFruits.includes("apple")) {
//   console.log("i like apple")
// }
// if (favFruits.includes("orange")) {
//   console.log("i like orange")
// } else {
//   console.log("i don,t like orange")
// }

// if (favFruits.includes("strawberry")) {
//   console.log("i like strawberry")
// } else {
//   console.log("i don,t like strawberry")
// }
/* task no 30*/ /* task no 31*/
// let users:string[]=["admin","hamza","moiz","rumail"]

// users.forEach((users,index) => {
//   console.log(`Welcome ${users} ${index}`)
// });
// const user:string =users[0];
// if (users.length < 0) {

//   if (user == 'admin') {
//     console.log("Hello admin, would you like to see a status report")
//   } else {
//     console.log("Hello Eric, thank you for logging in again")
//   }

// } else {
//   console.log("We need to find some users.");
// }

/* task no 32*/

// let current_users:string[]=["Hamza","Rumail","Faizan","Rabia","Mehak","Ali"]

// let new_users:string[]=["Hamza","nimra","UMER","ABBAS","ZAID","Ali"]

// new_users.forEach(new_users => {
//   let usernametaken=current_users.some(current_users => current_users.toLowerCase() == new_users.toLowerCase());

// if (usernametaken) {
//   console.log(`${new_users} will need to enter a new username`)

// } else {
//   console.log(`${new_users} that the username is available`)
// }

// });
/* task no 33*/
// let number1:number[]=[1,2,3,5,6,7,8,9]

// for (const num of number1) {
//    let ordinal:string;
//   if (num == 1) {

//     ordinal="1st"
//   } else if(num == 2) {
//     ordinal="2nd"
//   }else if (num == 3) {
//     ordinal="3rd"
//   }else{
//     ordinal=num + "th"
//   }
//   console.log(ordinal)
// }
/* task no 34*/

// let favpizza:string[]=["Black olives","Mushrooms","Pepperoni","Chiken"];
// console.log("pizza names ")
// for (const pizza of favpizza) {
//   console.log(pizza  +  " pizza");
// }

// for (const pizza of favpizza) {
//   console.log(`I like ${pizza} pizza`)

//   }

//  console.log("I really like pizza")
/* task no 35*/

// let animals:string[]=["cat","dog","cow","rabbit"];
// console.log("Animals Names ")
// for (const pet of animals) {
//   console.log(pet);
// }

// for (const pet of animals) {
//   console.log(`A ${pet} would make a great pet`)

//   }

//  console.log("animals would make a great pet")
/* task no 36*/

// function make_shirt(size:string, message:string) {
//   console.log(`the ${size} your t-shirt ${message}`)

// }
// make_shirt("large","I like this T-shirts")

/* task no 37*/
// function make_shirt2(size:string="large", message:string="i love typecript") {
//     console.log(`the ${size} size of  your t-shirt this is the message ${message}`);

//   }
//   make_shirt2();

//   make_shirt2("medium")

//   make_shirt2("large","I like coding");

/* task no 38*/
// function describe_city(city:string="KARACHI", counrty:string=" PAKISTAN") {
//       console.log(`${city} is in ${counrty}`);

//     }

//     describe_city();

//     describe_city("lahore");

//     describe_city("baldia town", "Karachi")

/* task no 39*/
// function city_country() {
//   console.log(`"Lahore, Pakistan"`)
//   console.log(`"hyderabad, "india"`)
//   console.log(`"dahka, "bangladesh"`)

// }
// city_country();
/* task no 40*/
// interface  Album  {
//    artist:string,
//    title:string,
//    track?:number,

// }
// function make_album(artist:string,title:string,track?:number,):Album {
//   const album:Album = {artist,title}

// if (track !== undefined) {
//    album.track = track

// }

// return album;

// }
// const album1:Album =make_album("Mohanna Durra"," Emirate of Transjordan")
// const album2:Album =make_album("Mustafa Râkim","Islamic calligraphy")
// const album3:Album =make_album("Nja Mahdaoui","Carthage National Museum")

// console.log(album1);
// console.log(album2);
// console.log(album3);

// const album4:Album =make_album("Ardian Syaf  4","Tulungagung, East Java, Indonesia 4", 12)
// console.log(album4);

/* task no 41*/

// let magician_names:string[]=["hamza","rumail","umer","abdullah",]

// function show_magicians() {
//   magician_names.forEach(names => {
//     console.log(` magician_names :${names}`)
//   });
// }
// show_magicians();

// /* task no 42*/
// let magician_names:string[]=["hamza","rumail","umer","abdullah",]

// function show_magicians(magician_names:string[]) :void {
//   magician_names.forEach(names => {
//     console.log(` magician_names :${names}`)
//   });
// }

// function make_great(magician_names:string[]) : void{
//   for (let i = 0; i < magician_names.length; i++) {

//     console.log(magician_names[i]     +=        "the great");
//   }
// }

// show_magicians(magician_names);
// make_great(magician_names);

/* task no 43*/

/*We have a list of magician names.
We want to create a new list where each magician's name has "the Great" added to it.
We don't want to modify the original list, so we make a copy of it.
We use a function to add "the Great" to each magician's name in the copied list.
We store this modified list in a separate variable.
We then display both the original list of magician names and 
the modified list (with "the Great" added) to compare them and see the difference.*/
// let magician_names: string[] = ["hamza", "rumail", "umer", "abdullah"];
// let magicians_name: string[] = [
//   "zaid the Great",
//   "ilsa the Great",
//   "sidra the Great",
//   "rabia the Great",
// ];
// let magicians_name1: string[] = [
//   "zaid ",
//   "ilsa ",
//   "sidra ",
//   "rabia ",
// ];
// function add(magicians_name1:string[]) {
//   for (let i = 0; i < magicians_name1.length; i++) {
//     magicians_name1[i] += "the Great"
//     console.log(magicians_name1)
    
//   }

  
// }
// console.log(magician_names);
// console.log(magicians_name);
// add(magicians_name1);

/* task no 44*/


//  function sandwich(ingredients :string[]):void {
//   console.log("Making sandwich")
//   ingredients.forEach(ingredients => {
//       console.log(ingredients);
      
    
//   });
//   console.log("Complete sandwich");
//  }
//  sandwich(["toasted","lettuce","tomato" ]);
//  sandwich(["untoasted","onion","fillings"]);
//  sandwich(["toasted","cheese","vegetable fillings"]);

 /* task no 45*/

// interface cars1{
//  model:number,
//  name:string,
//  auto:boolean,
//  color:string,


// }
//  function cars() {
//   let Objcar:cars1 = {

//            model:2015,
//            name:"honda",
//            auto:true,
//            color:"blue"
//   }
//       console.log(Objcar.model)
//  }

//  cars();