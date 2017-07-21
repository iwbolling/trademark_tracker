// Trademark Tracker by Ian Wilson Bolling

// DATABASE INITIALIZATION
var fdb = new ForerunnerDB();
tmdb = fdb.db("trademarkDB");
var tmColl = tmdb.collection("trademarkColl");

// DATABASE FUNCTIONS
// renders the main list
function renderListTable(){
	$("#trdmrk-list_body").html(
		listTemplate.render(tmColl._data)
	);
};
function renderSingleEntry(){
	$("#trdmrk-single_body").html(
		singleTemplate.render(tmColl._data[4])
	)
}
// saves collection for persistence, then re-renders
function saveAndRender(){
	tmColl.save(function(){
		renderListTable();
		renderSingleEntry();
	})
};

// DB Examplars
tmColl.insert([
	{name: "Apex Engineering", regNum: 7142119341419282},
	{name: "Blackburn Strategic Gold Group", regNum: 0424508093867784},
	{name: "Cosmopolitan Wetware, Inc.", regNum: 5264857214691913},
	{name: "Derumo Cyber Sciences", regNum: 9524504327476591}
]);
tmColl.insert({name: "Endeavor Class Research Vessel", regNum: "1 (843) 867-5309", image: "../images/Endeavor 01.jpg", status: "Approved", dateFiled: "10/31/2945", dateExpires: "12/23/2950", ownerName: "Musashi Industrial & Starflight Concern", ownerAddress: "Fujin City, Saisei, Centauri System", ownerPhone: "1-881-GO-MISC", ownerFax: "N/A", ownerEmail: "trademarks-and-patents@misc.co.cen", website: "https://www.misc.co.cen", contactName: "Ichia Kago", signatoryName: "Chen Torrens", signatoryTitle: "General Officer of MISC Trademarks and Patents Division", intlClass: "starship exceeding 1 kiloton in mass", dateFirstUse: "2/10/2943", dateFirstComm: "1/1/2944", offAct1IssDate: "11/06/2948", offAct1RespDue: "05/06/2949", pubDate: "5/15/2943", oppPerExpiry: "6/15/2943", oppFiled: "5/20/2943", oppRespDue: "6/20/2943", opposer: "Drake Interplanetary", oppTrdmrk: "Endeavor class construction rig", oppTrdmrkNo: "0193876560298784187982013599", allowance: "10/29/2943"})
saveAndRender();
console.log(tmColl._data);

var listTemplate = $.templates(
	"<tr><td>{{>name}}</td><td>{{>regNum}}</td></tr>"
);

var singleTemplate = $.templates(
	"<tr><td>Name</td><td>{{>name}}</td><td>Registration No.</td><td>{{>regNum}}</td></tr>"
	+"<tr><td>Status</td><td>{{>status}}</td><td>Date Filed</td><td>{{>dateFiled}}</td></tr>"
	+"<tr><td>Date of Expiration</td><td>{{>dateExpires}}</td><td>Owner Name</td><td>{{>ownerName}}</td></tr>"
	+"<tr><td>Owner Address</td><td>{{>ownerAddress}}</td><td>Owner Phone</td><td>{{>ownerPhone}}</td></tr>"
	+"<tr><td>Owner Fax</td><td>{{>ownerFax}}</td><td>Owner Email</td><td>{{>ownerEmail}}</td></tr>"
	+"<tr><td>Website</td><td>{{>website}}</td><td>Contact Name</td><td>{{>contactName}}</td></tr>"
	+"<tr><td>Signatory Name</td><td>{{>signatoryName}}</td><td>Signatory Title</td><td>{{>signatoryTitle}}</td></tr>"
	+"<tr><td class=`intlGoods`>International Class and Goods or Services</td><td class=`intlGoods`>{{>intlClass}}</td></tr>"
	+"<tr><td>Date of First Use</td><td>{{>dateFirstUse}}</td><td>Date of First Use in Commerce</td><td>{{>dateFirstComm}}</td></tr>"
	+"<tr><td>Office Action No. 1 Issue Date</td><td>{{>offAct1IssDate}}</td><td>Office Action No. 1 Response Due</td><td>{{>offAct1RespDue}}</td></tr>"
	+"<tr><td>Office Action No. 2 Issue Date</td><td>{{>offAct2IssDate}}</td><td>Office Action No. 2 Response Due</td><td>{{>offAct2RespDue}}</td></tr>"
	+"<tr><td>Office Action No. 3 Issue Date</td><td>{{>offAct3IssDate}}</td><td>Office Action No. 3 Response Due</td><td>{{>offAct3RespDue}}</td></tr>"
	+"<tr><td>Publication Date</td><td>{{>pubDate}}</td><td>Opposition Period Expiration</td><td>{{>oppPerExpiry}}</td></tr>"
	+"<tr><td>Opposition Filed</td><td>{{>oppFiled}}</td><td>Opposition Response Due</td><td>{{>oppRespDue}}</td></tr>"
	+"<tr><td>Opposer's Name</td><td>{{>opposer}}</td><td>Opposing Trademark</td><td>{{>oppTrdmrk}}</td></tr>"
	+"<tr><td>Opposing Trademark Serial or Registration No,\.</td><td>{{>oppTrdmrkNo}}</td><td>Notice of Allowance Issued</td><td>{{>allowance}}</td></tr>"
);

tmColl.load(function(){
	renderListTable()
});
