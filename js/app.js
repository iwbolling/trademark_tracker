// Trademark Tracker by Ian Wilson Bolling

// DATABASE INITIALIZATION

// ForerunnerDB Practice
window.fdb = new ForerunnerDB();
db = fdb.db("bobDB");
var bobColl = db.collection("bobCollection")
bobColl.insert([
									{ name: "Bob Dobbs", hobby: "slack"},
									{ name: "Bob Johnson", hobby: "manliness"},
									{ name: "Bob Ross", hobby: "landscapes"}
								]);
console.log(bobColl);
var entryTemplate = $.templates("{{>name}} {{>hobby}}")
$("#testZone").html(
	entryTemplate.render(bobColl._data)
);
