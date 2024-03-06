const output = document.getElementById('output');

/* STEP 1a: Create a new object using a regular function */
function createAlbum(name){
    const obj = {};
    obj.name = name;
    obj.describe = function(){
        alert(`This album is called ${this.name}.`);
    };
    return obj;
}

/* STEP 1b: Use the console to create a new vehicle object, and then invoke the function represented using .description() */


/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - rewrite the above function, without returning anything. Capitalize the name of the function. */

// function Album(name){
//     this.name = name;
//     this.describe = function(){
//         alert(`This album is called ${this.name}.`);
//     }
// }
/* STEP 2b: Use the console to create a couple of different albums, using the 'new' keyword, and again invoking the .describe() method for each one */


/* STEP 3a: Build the complete constructor for the object album (comment out the above functions first). Include full vehicle name (manufacturer and model), year, type, colour, and description (function). */
function Album(name, artist, year, numTracks){
    this.name = name;
    this.artist = artist;
    this.year = year;
    this.numTracks =numTracks;
    this.describe = function(){
       // alert(`The album ${this.name} by ${this.artist} was released in ${this.year} featuring ${this.numTracks} song tracks.`)
       let description = `The album ${this.name} by ${this.artist} was released in ${this.year} featuring ${this.numTracks} song tracks.`;
       return description;
    }
}


/* STEP 3b: Instantiate a new Album (or 2) based on the above constructor */
const album2 = new Album("Disintegration","The cure",1989,12);
const album3 = new Album("Substance","lorem ",1999,42)


/* STEP 3c: Attempt to access the various properties of album2 or album3 using the console. */
// album2['name']
// album2['artist']
// album2.numTracks
// album2.year
/* STEP 3d: Invoke a method belonging to one of the Vehicle objects */
// album2.describe()
// album3.describe()

/* STEP 4a: Modify the describe method of the above Album constructor so that it returns a string. */

/* STEP 4b: Capture the description of one of the album objects and set it as the text for the paragraph on the page (see line 1 of this script). */
output.textContent = album3.describe();

// That's it! Now on to the Lab...

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
