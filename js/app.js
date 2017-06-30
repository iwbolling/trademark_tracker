// Trademark Tracker by Ian Wilson Bolling

// DATABASE INITIALIZATION
var fdb = new ForerunnerDB();
tmdb = fdb.db("trademarkDB");
var tmColl = tmdb.collection("trademarkColl");
tmColl.load();

// DB Practice
tmColl.insert([
	{name: "Apex Engineering", regNum: 7142119341419282},
	{name: "Blackburn Strategic Gold Group", regNum: 0424508093867784},
	{name: "Cosmopolitan Wetware, Inc.", regNum: 5264857214691913}
]);
tmColl.insert({name: "Derumo Cyber Sciences", regNum: 9524504327476591})
tmColl.save();
console.log(tmColl._data);

var entryTemplate = $.templates(
	"<tr><td>{{>name}}</td><td>{{>regNum}}</td></tr>"
);
function saveAndRender(){
	tmColl.save(function(){
		$("#trademark-table_body").html(
			entryTemplate.render(tmColl._data)
		);
	})
}
function renderTable(){
	$("#trademark-table_body").html(
		entryTemplate.render(tmColl._data)
	);
}
saveAndRender();

// Persistence Test
let testBtn = document.querySelector(".testBtn");
testBtn.addEventListener("click",function(){
	tmColl.insert([{name: "TEST SUCCEEDED", regNum: 1}]);
	tmColl.save(function(){
		saveAndRender();
	});
	console.log(tmColl._data);
});
