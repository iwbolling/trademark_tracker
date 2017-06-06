// Trademark Tracker by Ian Wilson Bolling

// Taffy.js test stuff
var testDB = TAFFY([{name:"Bob Dobbs",hobby:"slack"},{name:"Bob Ross",hobby:"painting"},{name:"Bob Barker",hobby:"spaying and neutering"}]);

console.log(testDB({hobby:"painting"}).count());
