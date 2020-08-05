//just like the other tree it goes left,top,right,bottom
var PassiveTrees=[
	{	"Name":"Elementalist",
		"Skills":["Lightning Strike","Breath Of Fire","Meteor","Shock Ring","Frost Tremors","Fire Trap","Lightning Orb","Thunderstorm"],
		"SkillPassives":[
			//Lightning strike left side
			{"node_id":"Lightning_Strike_1",	"maxLevel":3,	"attribute":"Increase Skill Damage by +#(high end)"	,"modifier":0.5,	,"unlocks":"Lightning_Strike_2"},
			{"node_id":"Lightning_Strike_2",	"maxLevel":2,	"attribute":"Grants 1 mana on Hit"					,"modifier":0.5,	,"unlocks":"Lightning_Strike_3"},
			{"node_id":"Lightning_Strike_3",	"maxLevel":1,	"attribute":"Electrocutes enemies hit dealing # Lightning Damage per player level for 3 seconds"	,"modifier":0.5,	,"unlocks":"Lightning_Strike_4"},
			{"node_id":"Lightning_Strike_4",	"maxLevel":1,	"attribute":"Electrocute duration +#"				,"modifier":1,		,"unlocks":""},
			//Lightning strike top side
			{"node_id":"Lightning_Strike_5",	"maxLevel":3,	"attribute":"Info still needs to be added #"		,"modifier":0.5,	,"unlocks":"Lightning_Strike_5"},
			{"node_id":"Lightning_Strike_6",	"maxLevel":2,	"attribute":"Info still needs to be added #"		,"modifier":0.5,	,"unlocks":"Lightning_Strike_6"},
			{"node_id":"Lightning_Strike_7",	"maxLevel":1,	"attribute":"Info still needs to be added #"		,"modifier":0.5,	,"unlocks":"Lightning_Strike_7"},
			{"node_id":"Lightning_Strike_8",	"maxLevel":2,	"attribute":"Info still needs to be added #"		,"modifier":1,		,"unlocks":""},
			//Lightning strike right side
			{"node_id":"Lightning_Strike_9",	"maxLevel":3,	"attribute":"Info still needs to be added #"		,"modifier":0.5,	,"unlocks":"Lightning_Strike_10"},
			{"node_id":"Lightning_Strike_10",	"maxLevel":2,	"attribute":"Info still needs to be added #"		,"modifier":0.5,	,"unlocks":"Lightning_Strike_11"},
			{"node_id":"Lightning_Strike_11",	"maxLevel":1,	"attribute":"Info still needs to be added #"		,"modifier":0.5,	,"unlocks":"Lightning_Strike_12"},
			{"node_id":"Lightning_Strike_12",	"maxLevel":2,	"attribute":"Info still needs to be added #"		,"modifier":1,		,"unlocks":""},
			//Lightning strike bottom side
			{"node_id":"Lightning_Strike_13",	"maxLevel":3,	"attribute":"Info still needs to be added #"		,"modifier":0.5,	,"unlocks":"Lightning_Strike_14"},
			{"node_id":"Lightning_Strike_14",	"maxLevel":2,	"attribute":"Info still needs to be added #"		,"modifier":0.5,	,"unlocks":"Lightning_Strike_15"},
			{"node_id":"Lightning_Strike_15",	"maxLevel":1,	"attribute":"Info still needs to be added #"		,"modifier":0.5,	,"unlocks":"Lightning_Strike_16"},
			{"node_id":"Lightning_Strike_16",	"maxLevel":2,	"attribute":"Info still needs to be added #"		,"modifier":1,		,"unlocks":""},
			
			//Breath Of Fire left side
			{"node_id":"Breath_Of_Fire_1",		"maxLevel":3,	"attribute":"Info still needs to be added #"		,"modifier":0.5,	,"unlocks":"Breath_Of_Fire_2"},
			{"node_id":"Breath_Of_Fire_2",		"maxLevel":2,	"attribute":"Info still needs to be added #"		,"modifier":0.5,	,"unlocks":"Breath_Of_Fire_3"},
			{"node_id":"Breath_Of_Fire_3",		"maxLevel":1,	"attribute":"Info still needs to be added #"		,"modifier":0.5,	,"unlocks":"Breath_Of_Fire_4"},
			{"node_id":"Breath_Of_Fire_4",		"maxLevel":2,	"attribute":"Info still needs to be added #"		,"modifier":1,		,"unlocks":""},
			//think you guys get the point cheers and gl
		]
	},
	{	"Name":"Spellblade",
		"Skills":[];
		"SkillPassives":[
			//just copy what you have done above the one below is just a example one
			{"node_id":"Lightning_Strike_1",	"maxLevel":3,	"attribute":"Increase Skill Damage by +#(high end)","modifier":0.5,	,"unlocks":"Lightning_Strike_2"},			
		]
	}
];