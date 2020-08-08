//just like the other tree it goes left,top,right,bottom
var PassiveTrees=[
	{	"Name":"Elementalist",
		"Skills":["Lightning Strike","Breath Of Fire","Meteor","Shock Ring","Frost Tremors","Fire Trap","Lightning Orb","Thunderstorm"],
		"SkillPassives":[
			//Lightning strike left side
			{"node_id":"Lightning_Strike_1",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(high end)"	,"modifier":0.5,	,"unlocks":"Lightning_Strike_2"},
			{"node_id":"Lightning_Strike_2",	"maxLevel":2,	"attribute":"Grants # mana on Hit"					,"modifier":1,	,"unlocks":"Lightning_Strike_3"},
			{"node_id":"Lightning_Strike_3",	"maxLevel":1,	"attribute":"Electrocutes enemies hit dealing # Lightning Damage per player level for 3 seconds"	,"modifier":0.5,	,"unlocks":"Lightning_Strike_4"},
			{"node_id":"Lightning_Strike_4",	"maxLevel":1,	"attribute":"Electrocute duration +#"				,"modifier":1,		,"unlocks":""},
			//Lightning strike top side
			{"node_id":"Lightning_Strike_5",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(low end)"	,"modifier":0.5,	,"unlocks":"Lightning_Strike_5"},
			{"node_id":"Lightning_Strike_6",	"maxLevel":2,	"attribute":"Increases radius by #"					,"modifier":25,		,"unlocks":"Lightning_Strike_6"},
			{"node_id":"Lightning_Strike_7",	"maxLevel":1,	"attribute":"Adds an additional target and +# radius"	,"modifier":150,	,"unlocks":"Lightning_Strike_7"},
			{"node_id":"Lightning_Strike_8",	"maxLevel":2,	"attribute":"Adds # additional target(s)"				,"modifier":1,		,"unlocks":""},
			//Lightning strike right side
			{"node_id":"Lightning_Strike_9",	"maxLevel":2,	"attribute":"Increases radius by #"					,"modifier":25,	,"unlocks":"Lightning_Strike_10"},
			{"node_id":"Lightning_Strike_10",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(high end)"	,"modifier":0.5,	,"unlocks":"Lightning_Strike_11"},
			{"node_id":"Lightning_Strike_11",	"maxLevel":1,	"attribute":"Creates a static field at the location which deals # Lightning Damage per player pevel per second for 3 seconds and has 150 radius"		,"modifier":1,	,"unlocks":"Lightning_Strike_12"},
			{"node_id":"Lightning_Strike_12",	"maxLevel":2,	"attribute":"Increases static field damage by #"	,"modifier":0.5,		,"unlocks":""},
			//Lightning strike bottom side
			{"node_id":"Lightning_Strike_13",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(low end)"	,"modifier":0.5,	,"unlocks":"Lightning_Strike_14"},
			{"node_id":"Lightning_Strike_14",	"maxLevel":2,	"attribute":"Grants # Mana Shield per player level on hit"		,"modifier":0.5,	,"unlocks":"Lightning_Strike_15"},
			{"node_id":"Lightning_Strike_15",	"maxLevel":1,	"attribute":"Roots Enemies for # second(s)"		,"modifier":1,	,"unlocks":"Lightning_Strike_16"},
			{"node_id":"Lightning_Strike_16",	"maxLevel":1,	"attribute":"Roots Enemies for # second(s)"		,"modifier":0.5,		,"unlocks":""},
			
			//Breath of fire left side
			{"node_id":"Breath_Of_Fire_1",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#%(high end)"	,"modifier":10,	,"unlocks":"Breath_Of_Fire_2"},
			{"node_id":"Breath_Of_Fire_2",	"maxLevel":2,	"attribute":"Grants # Mana on Hit"					,"modifier":1,	,"unlocks":"Breath_Of_Fire_3"},
			{"node_id":"Breath_Of_Fire_3",	"maxLevel":1,	"attribute":"Turns the skill into a Nova instead of a Cone, the Nove has # radius"	,"modifier":300,	,"unlocks":"Breath_Of_Fire_4"},
			{"node_id":"Breath_Of_Fire_4",	"maxLevel":1,	"attribute":"Increases Nova radius by #"				,"modifier":100,		,"unlocks":""},
			//Breath of fire top side
			{"node_id":"Breath_Of_Fire_5",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#%(low end)"	,"modifier":10,	,"unlocks":"Breath_Of_Fire_5"},
			{"node_id":"Breath_Of_Fire_6",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,		,"unlocks":"Breath_Of_Fire_6"},
			{"node_id":"Breath_Of_Fire_7",	"maxLevel":1,	"attribute":"Echoes the first cast but with no animation"	,"modifier":0,	,"unlocks":"Breath_Of_Fire_7"},
			{"node_id":"Breath_Of_Fire_8",	"maxLevel":2,	"attribute":"Cast Speed increased by #% for 1 second"				,"modifier":25,		,"unlocks":""},
			//Breath of fire right side
			{"node_id":"Breath_Of_Fire_9",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,	,"unlocks":"Breath_Of_Fire_10"},
			{"node_id":"Breath_Of_Fire_10",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#%(high end)"	,"modifier":10,	,"unlocks":"Breath_Of_Fire_11"},
			{"node_id":"Breath_Of_Fire_11",	"maxLevel":1,	"attribute":"Burns the target for # Fire Damage per player level per second for 3 seconds"		,"modifier":2,	,"unlocks":"Breath_Of_Fire_12"},
			{"node_id":"Breath_Of_Fire_12",	"maxLevel":2,	"attribute":"Increases damage by #"	,"modifier":0.5,		,"unlocks":""},
			//Breath of fire bottom side
			{"node_id":"Breath_Of_Fire_13",	"maxLevel":3,	"attribute":"Leeches #% of damage dealt as Life"	,"modifier":1,	,"unlocks":"Breath_Of_Fire_14"},
			{"node_id":"Breath_Of_Fire_14",	"maxLevel":2,	"attribute":"Grants # Mana Shield per player level on hit"		,"modifier":0.5,	,"unlocks":"Breath_Of_Fire_15"},
			{"node_id":"Breath_Of_Fire_15",	"maxLevel":1,	"attribute":"Doubles damage dealt but adds a # second cooldown"		,"modifier":20,	,"unlocks":"Breath_Of_Fire_16"},
			{"node_id":"Breath_Of_Fire_16",	"maxLevel":1,	"attribute":"Reduces cooldown by # seconds"		,"modifier":10,		,"unlocks":""},
			
			//Meteor left side
			{"node_id":"Meteor_1",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#%(high end)"	,"modifier":10,	,"unlocks":"Meteor_2"},
			{"node_id":"Meteor_2",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,	,"unlocks":"Meteor_3"},
			{"node_id":"Meteor_3",	"maxLevel":1,	"attribute":"The meteor explodes for half the damage and a # radius explosion"	,"modifier":300,	,"unlocks":"Meteor_4"},
			{"node_id":"Meteor_4",	"maxLevel":1,	"attribute":"#% chance to echo"				,"modifier":10,		,"unlocks":""},
			//Meteor top side
			{"node_id":"Meteor_5",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#%(low end)"	,"modifier":10,	,"unlocks":"Meteor_5"},
			{"node_id":"Meteor_6",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,		,"unlocks":"Meteor_6"},
			{"node_id":"Meteor_7",	"maxLevel":1,	"attribute":"Reduces damage dealt and area of effect by half, but spawns an additional # meteors"	,"modifier":2,	,"unlocks":"Meteor_7"},
			{"node_id":"Meteor_8",	"maxLevel":2,	"attribute":"Increases are of effect by #"				,"modifier":50,		,"unlocks":""},
			//Meteor right side
			{"node_id":"Meteor_9",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,	,"unlocks":"Meteor_10"},
			{"node_id":"Meteor_10",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#%(high end)"	,"modifier":10,	,"unlocks":"Meteor_11"},
			{"node_id":"Meteor_11",	"maxLevel":1,	"attribute":"Converts all Fire Damage to Lightning Damage"		,"modifier":0,	,"unlocks":"Meteor_12"},
			{"node_id":"Meteor_12",	"maxLevel":2,	"attribute":"#% chance to Electrocute (2 lightning damage per player level per second for 3 seconds)"	,"modifier":10,		,"unlocks":""},
			//Meteor bottom side
			{"node_id":"Meteor_13",	"maxLevel":3,	"attribute":"Reduces cooldown by # second(s)"	,"modifier":1,	,"unlocks":"Meteor_14"},
			{"node_id":"Meteor_14",	"maxLevel":2,	"attribute":"Increases Skill Damage by +#%(low end)"		,"modifier":10,	,"unlocks":"Meteor_15"},
			{"node_id":"Meteor_15",	"maxLevel":1,	"attribute":"Burns for # damage per player level per second for 3 seconds"		,"modifier":2,	,"unlocks":"Meteor_16"},
			{"node_id":"Meteor_16",	"maxLevel":1,	"attribute":"Additional # damage"		,"modifier":0.5,		,"unlocks":""},
			
			//Shock ring left side
			{"node_id":"Shock_Ring_1",	"maxLevel":3,	"attribute":"Leeches damage dealt as life by #%"	,"modifier":1,	,"unlocks":"Shock_Ring_2"},
			{"node_id":"Shock_Ring_2",	"maxLevel":2,	"attribute":"Leeches damage dealt as mana by #%"					,"modifier":1,	,"unlocks":"Shock_Ring_3"},
			{"node_id":"Shock_Ring_3",	"maxLevel":1,	"attribute":"Leeches damage dealt as Mana Shield by #%"	,"modifier":2,	,"unlocks":"Shock_Ring_4"},
			{"node_id":"Shock_Ring_4",	"maxLevel":1,	"attribute":"Leeches damage dealt as Mana Shield by #%"				,"modifier":1,		,"unlocks":""},
			//Shock ring top side
			{"node_id":"Shock_Ring_5",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#%(low end)"	,"modifier":10,	,"unlocks":"Shock_Ring_5"},
			{"node_id":"Shock_Ring_6",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,		,"unlocks":"Shock_Ring_6"},
			{"node_id":"Shock_Ring_7",	"maxLevel":1,	"attribute":"Spawns # projectiles that deal 2 lightning damage per player level"	,"modifier":3,	,"unlocks":"Shock_Ring_7"},
			{"node_id":"Shock_Ring_8",	"maxLevel":2,	"attribute":"Spawns # additional projectile(s)"				,"modifier":1,		,"unlocks":""},
			//Shock ring right side
			{"node_id":"Shock_Ring_9",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,	,"unlocks":"Shock_Ring_10"},
			{"node_id":"Shock_Ring_10",	"maxLevel":3,	"attribute":"Leeches damage dealt as mana by #%"	,"modifier":1,	,"unlocks":"Shock_Ring_11"},
			{"node_id":"Shock_Ring_11",	"maxLevel":1,	"attribute":"Casts on Cursor instead"		,"modifier":0,	,"unlocks":"Shock_Ring_12"},
			{"node_id":"Shock_Ring_12",	"maxLevel":2,	"attribute":"#% chance to increase movement speed by 100 for 5 seconds"	,"modifier":10,		,"unlocks":""},
			//Shock ring bottom side
			{"node_id":"Shock_Ring_13",	"maxLevel":3,	"attribute":"Leeches damage dealt as life by #%"	,"modifier":1,	,"unlocks":"Shock_Ring_14"},
			{"node_id":"Shock_Ring_14",	"maxLevel":2,	"attribute":"Increases Skill Damage by +#%(low end)"		,"modifier":10,	,"unlocks":"Shock_Ring_15"},
			{"node_id":"Shock_Ring_15",	"maxLevel":1,	"attribute":"Converts damage dealt to cold damage"		,"modifier":0,	,"unlocks":"Shock_Ring_16"},
			{"node_id":"Shock_Ring_16",	"maxLevel":1,	"attribute":"#% chance to cause Frostbite. Deals 2 Cold Damage per player level per second for 3 seconds"		,"modifier":50,		,"unlocks":""},
			
			//Frost tremors left side
			{"node_id":"Frost_Tremors_1",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(high end)"	,"modifier":0.5,	,"unlocks":"Frost_Tremors_2"},
			{"node_id":"Frost_Tremors_2",	"maxLevel":2,	"attribute":"Leeches damage dealt as mana by #%"					,"modifier":1,	,"unlocks":"Frost_Tremors_3"},
			{"node_id":"Frost_Tremors_3",	"maxLevel":1,	"attribute":"Each projectile causes a Hailstorm at location dealing half damage with half radius"	,"modifier":0,	,"unlocks":"Frost_Tremors_4"},
			{"node_id":"Frost_Tremors_4",	"maxLevel":1,	"attribute":"Reduces damage and radius reduction by #%"				,"modifier":50,		,"unlocks":""},
			//Frost tremors top side
			{"node_id":"Frost_Tremors_5",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(low end)"	,"modifier":0.5,	,"unlocks":"Frost_Tremors_5"},
			{"node_id":"Frost_Tremors_6",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,		,"unlocks":"Frost_Tremors_6"},
			{"node_id":"Frost_Tremors_7",	"maxLevel":1,	"attribute":"Converts to Fire Damage"	,"modifier":0,	,"unlocks":"Frost_Tremors_7"},
			{"node_id":"Frost_Tremors_8",	"maxLevel":2,	"attribute":"#% chance to cause Burning. Deals 2 Fire Damage per player level per second for 3 seconds"				,"modifier":10,		,"unlocks":""},
			//Frost tremors right side
			{"node_id":"Frost_Tremors_9",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,	,"unlocks":"Frost_Tremors_10"},
			{"node_id":"Frost_Tremors_10",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(high end)"	,"modifier":0.5,	,"unlocks":"Frost_Tremors_11"},
			{"node_id":"Frost_Tremors_11",	"maxLevel":1,	"attribute":"#% chance to cause Frostbite. Deals 2 cold damage per player level per second for 3 seconds"		,"modifier":20,	,"unlocks":"Frost_Tremors_12"},
			{"node_id":"Frost_Tremors_12",	"maxLevel":2,	"attribute":"#% additional chance to cause Frostbite"	,"modifier":10,		,"unlocks":""},
			//Frost tremors bottom side
			{"node_id":"Frost_Tremors_13",	"maxLevel":3,	"attribute":"Leeches damage dealt as life by #%"	,"modifier":1,	,"unlocks":"Frost_Tremors_14"},
			{"node_id":"Frost_Tremors_14",	"maxLevel":2,	"attribute":"Increases Skill Damage by +#(low end)"		,"modifier":0.5,	,"unlocks":"Frost_Tremors_15"},
			{"node_id":"Frost_Tremors_15",	"maxLevel":1,	"attribute":"Adds an additional tremor"		,"modifier":0,	,"unlocks":"Frost_Tremors_16"},
			{"node_id":"Frost_Tremors_16",	"maxLevel":1,	"attribute":"The tremor has +# radius"		,"modifier":150,		,"unlocks":""},
			
			//Fire trap left side
			{"node_id":"Fire_Trap_1",	"maxLevel":3,	"attribute":"Reduces Collision Check time by # seconds"	,"modifier":0.1,	,"unlocks":"Fire_Trap_2"},
			{"node_id":"Fire_Trap_2",	"maxLevel":2,	"attribute":"Increases Trap Activation Radius by #"					,"modifier":25,	,"unlocks":"Fire_Trap_3"},
			{"node_id":"Fire_Trap_3",	"maxLevel":1,	"attribute":"Leaves a patch of burning ground after triggering, deals # Fire Damage per player level per second for 3 seconds and has 150 radius"	,"modifier":2,	,"unlocks":"Fire_Trap_4"},
			{"node_id":"Fire_Trap_4",	"maxLevel":1,	"attribute":"Increases radius by # on burning ground"				,"modifier":50,		,"unlocks":""},
			//Fire trap top side
			{"node_id":"Fire_Trap_5",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#%(low end)"	,"modifier":10,	,"unlocks":"Fire_Trap_5"},
			{"node_id":"Fire_Trap_6",	"maxLevel":2,	"attribute":"Reduces Aiming Time by # seconds"					,"modifier":0.2,		,"unlocks":"Fire_Trap_6"},
			{"node_id":"Fire_Trap_7",	"maxLevel":1,	"attribute":"Throws # additional Trap(s)"	,"modifier":1,	,"unlocks":"Fire_Trap_7"},
			{"node_id":"Fire_Trap_8",	"maxLevel":2,	"attribute":"Throws # additional Trap(s)"				,"modifier":1,		,"unlocks":""},
			//Fire trap right side
			{"node_id":"Fire_Trap_9",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,	,"unlocks":"Fire_Trap_10"},
			{"node_id":"Fire_Trap_10",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#%(high end)"	,"modifier":10,	,"unlocks":"Fire_Trap_11"},
			{"node_id":"Fire_Trap_11",	"maxLevel":1,	"attribute":"Releases an additional explosion at each target hit for #% of damage dealth with 150 radius"		,"modifier":30,	,"unlocks":"Fire_Trap_12"},
			{"node_id":"Fire_Trap_12",	"maxLevel":2,	"attribute":"Increases damage by #%"	,"modifier":10,		,"unlocks":""},
			//Fire trap bottom side
			{"node_id":"Fire_Trap_13",	"maxLevel":3,	"attribute":"Increases Trap Activation Radius by #"	,"modifier":25,	,"unlocks":"Fire_Trap_14"},
			{"node_id":"Fire_Trap_14",	"maxLevel":2,	"attribute":"Increases Skill Damage by +#%(low end)"		,"modifier":10,	,"unlocks":"Fire_Trap_15"},
			{"node_id":"Fire_Trap_15",	"maxLevel":1,	"attribute":"Combines all traps to form a giant trap. Deals an additional #% damage and #% radius for every trap consumed"		,"modifier":50,	,"unlocks":"Fire_Trap_16"},
			{"node_id":"Fire_Trap_16",	"maxLevel":1,	"attribute":"Throws # additional Trap(s)"		,"modifier":1,		,"unlocks":""},
			
			//Lightning Orb left side
			{"node_id":"Lightning_Orb_1",	"maxLevel":3,	"attribute":"Increases the Radius Growth by #"	,"modifier":5,	,"unlocks":"Lightning_Orb_2"},
			{"node_id":"Lightning_Orb_2",	"maxLevel":2,	"attribute":"Reduces Tick Rate by # seconds"					,"modifier":0.5,	,"unlocks":"Lightning_Orb_3"},
			{"node_id":"Lightning_Orb_3",	"maxLevel":1,	"attribute":"Starting radius is #"	,"modifier":150,	,"unlocks":"Lightning_Orb_4"},
			{"node_id":"Lightning_Orb_4",	"maxLevel":1,	"attribute":"Starting radius increased to #"				,"modifier":200,		,"unlocks":""},
			//Lightning Orb top side
			{"node_id":"Lightning_Orb_5",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(low end)"	,"modifier":0.2,	,"unlocks":"Lightning_Orb_5"},
			{"node_id":"Lightning_Orb_6",	"maxLevel":2,	"attribute":"Increases duration by # second(s)"					,"modifier":0.5,		,"unlocks":"Lightning_Orb_6"},
			{"node_id":"Lightning_Orb_7",	"maxLevel":1,	"attribute":"Explodes at the end dealing 3 Lightning Damage per player level with # radius"	,"modifier":300,	,"unlocks":"Lightning_Orb_7"},
			{"node_id":"Lightning_Orb_8",	"maxLevel":2,	"attribute":"Increases radius by #"				,"modifier":75,		,"unlocks":""},
			//Lightning Orb right side
			{"node_id":"Lightning_Orb_9",	"maxLevel":2,	"attribute":"Increases duration by # second(s)"					,"modifier":0.5,	,"unlocks":"Lightning_Orb_10"},
			{"node_id":"Lightning_Orb_10",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(high end)"	,"modifier":0.2,	,"unlocks":"Lightning_Orb_11"},
			{"node_id":"Lightning_Orb_11",	"maxLevel":1,	"attribute":"Roots enemies hit for # second(s)"		,"modifier":0.5,	,"unlocks":"Lightning_Orb_12"},
			{"node_id":"Lightning_Orb_12",	"maxLevel":2,	"attribute":"Roots enemies hit for # second(s)"	,"modifier":0.5,		,"unlocks":""},
			//Lightning Orb bottom side
			{"node_id":"Lightning_Orb_13",	"maxLevel":3,	"attribute":"#% of Damage Dealt leeched as Mana Shield"	,"modifier":1,	,"unlocks":"Lightning_Orb_14"},
			{"node_id":"Lightning_Orb_14",	"maxLevel":2,	"attribute":"Increases Skill Damage by +#(low end)"		,"modifier":0.2,	,"unlocks":"Lightning_Orb_15"},
			{"node_id":"Lightning_Orb_15",	"maxLevel":1,	"attribute":"#% of Damage Dealth leeched as Mana"		,"modifier":1,	,"unlocks":"Lightning_Orb_16"},
			{"node_id":"Lightning_Orb_16",	"maxLevel":1,	"attribute":"#% of Damage Dealth leeched as Mana"		,"modifier":1,		,"unlocks":""},
			
			//Thunderstorm left side
			{"node_id":"Thunderstorm_1",	"maxLevel":3,	"attribute":"Gain # Mana on Hit"	,"modifier":1,	,"unlocks":"Thunderstorm_2"},
			{"node_id":"Thunderstorm_2",	"maxLevel":2,	"attribute":"Reduces Cooldown by # second(s) on hit"					,"modifier":1,	,"unlocks":"Thunderstorm_3"},
			{"node_id":"Thunderstorm_3",	"maxLevel":1,	"attribute":"Electrocutes targets for # Lightning Damage per player level per second for 3 seconds"	,"modifier":2,	,"unlocks":"Thunderstorm_4"},
			{"node_id":"Thunderstorm_4",	"maxLevel":1,	"attribute":"Increases damage by #"				,"modifier":1,		,"unlocks":""},
			//Thunderstorm top side
			{"node_id":"Thunderstorm_5",	"maxLevel":3,	"attribute":"Increases tick frequency by #"	,"modifier":0.25,	,"unlocks":"Thunderstorm_5"},
			{"node_id":"Thunderstorm_6",	"maxLevel":2,	"attribute":"Gain # Mana Shield on Hit per player level"					,"modifier":1,		,"unlocks":"Thunderstorm_6"},
			{"node_id":"Thunderstorm_7",	"maxLevel":1,	"attribute":"Leeches #% of damage dealt as Life"	,"modifier":1,	,"unlocks":"Thunderstorm_7"},
			{"node_id":"Thunderstorm_8",	"maxLevel":2,	"attribute":"Leeches #% of damage dealt as Life"				,"modifier":1,		,"unlocks":""},
			//Thunderstorm right side
			{"node_id":"Thunderstorm_9",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":50,	,"unlocks":"Thunderstorm_10"},
			{"node_id":"Thunderstorm_10",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(high end)"	,"modifier":0.5,	,"unlocks":"Thunderstorm_11"},
			{"node_id":"Thunderstorm_11",	"maxLevel":1,	"attribute":"Increases target limit by #"		,"modifier":1,	,"unlocks":"Thunderstorm_12"},
			{"node_id":"Thunderstorm_12",	"maxLevel":2,	"attribute":"Increases target limit by #"	,"modifier":1,		,"unlocks":""},
			//Thunderstorm bottom side
			{"node_id":"Thunderstorm_13",	"maxLevel":3,	"attribute":"Increases Duration by # seconds"	,"modifier":2,	,"unlocks":"Thunderstorm_14"},
			{"node_id":"Thunderstorm_14",	"maxLevel":2,	"attribute":"Increases Skill Damage by +#(low end)"		,"modifier":0.5,	,"unlocks":"Thunderstorm_15"},
			{"node_id":"Thunderstorm_15",	"maxLevel":1,	"attribute":"Converts damage dealt to Fire Damage"		,"modifier":0,	,"unlocks":"Thunderstorm_16"},
			{"node_id":"Thunderstorm_16",	"maxLevel":1,	"attribute":"#% chance to Burn targets for 2 Fire Damage per player level per second for 3 seconds"		,"modifier":10,		,"unlocks":""},
		]
	},
	{	"Name":"Spellblade",
		"Skills":["Fluid Strike","Shocking Cross","Crescent Stomp","Touch Of Ragno","Brimestone Splinters","Tundra Blast","Elemental Blow","Thunderous Fury"],
		"SkillPassives":[
			//Fluid Strike left side
			{"node_id":"Fluid_Strike_1",	"maxLevel":3,	"attribute":"Increases Maximum Travel Distance by #"	,"modifier":100,	,"unlocks":"Fluid_Strike_2"},
			{"node_id":"Fluid_Strike_2",	"maxLevel":2,	"attribute":"Grants # Mana on Hit"					,"modifier":1,	,"unlocks":"Fluid_Strike_3"},
			{"node_id":"Fluid_Strike_3",	"maxLevel":1,	"attribute":"Applies Frostbite that deals # Cold Damage per player level per second for 3 seconds"	,"modifier":2,	,"unlocks":"Fluid_Strike_4"},
			{"node_id":"Fluid_Strike_4",	"maxLevel":1,	"attribute":"Increases Frostbite duration by # second"				,"modifier":1,		,"unlocks":""},
			//Fluid Strike top side
			{"node_id":"Fluid_Strike_5",	"maxLevel":3,	"attribute":"Increases Skill Damage by #"	,"modifier":0.5,	,"unlocks":"Fluid_Strike_5"},
			{"node_id":"Fluid_Strike_6",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,		,"unlocks":"Fluid_Strike_6"},
			{"node_id":"Fluid_Strike_7",	"maxLevel":1,	"attribute":"Creates a nova on the first target hit dealing # cold damage per player level in a 300 radius"	,"modifier":3,	,"unlocks":"Fluid_Strike_7"},
			{"node_id":"Fluid_Strike_8",	"maxLevel":2,	"attribute":"Increases nova damage by #"				,"modifier":1,		,"unlocks":""},
			//Fluid Strike right side
			{"node_id":"Fluid_Strike_9",	"maxLevel":2,	"attribute":"Increases radius by #"					,"modifier":25,	,"unlocks":"Fluid_Strike_10"},
			{"node_id":"Fluid_Strike_10",	"maxLevel":3,	"attribute":"Increases Maximum Travel Distance by #"	,"modifier":100,	,"unlocks":"Fluid_Strike_11"},
			{"node_id":"Fluid_Strike_11",	"maxLevel":1,	"attribute":"Increases Targets by #"		,"modifier":1,	,"unlocks":"Fluid_Strike_12"},
			{"node_id":"Fluid_Strike_12",	"maxLevel":2,	"attribute":"Increases Targets by #"	,"modifier":1,		,"unlocks":""},
			//Fluid Strike bottom side
			{"node_id":"Fluid_Strike_13",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#"	,"modifier":0.5,	,"unlocks":"Fluid_Strike_14"},
			{"node_id":"Fluid_Strike_14",	"maxLevel":2,	"attribute":"Grants # Mana Shield per player level on hit"		,"modifier":0.5,	,"unlocks":"Fluid_Strike_15"},
			{"node_id":"Fluid_Strike_15",	"maxLevel":1,	"attribute":"Strikes each target twice, the second strike deals half damage"		,"modifier":0,	,"unlocks":"Fluid_Strike_16"},
			{"node_id":"Fluid_Strike_16",	"maxLevel":1,	"attribute":"Second strike damage increased by #%"		,"modifier":25,		,"unlocks":""},
			
			//Shocking Cross left side
			{"node_id":"Shocking_Cross_1",	"maxLevel":3,	"attribute":"Grants # Mana on Hit"	,"modifier":1,	,"unlocks":"Shocking_Cross_2"},
			{"node_id":"Shocking_Cross_2",	"maxLevel":2,	"attribute":"Grants # Mana on Hit"					,"modifier":1,	,"unlocks":"Shocking_Cross_3"},
			{"node_id":"Shocking_Cross_3",	"maxLevel":1,	"attribute":"Shooting Stars erup from the cross, dealing # Lightning Damage per player level with 150 radius"	,"modifier":2,	,"unlocks":"Shocking_Cross_4"},
			{"node_id":"Shocking_Cross_4",	"maxLevel":1,	"attribute":"Increases shooting stars damage by #"				,"modifier":1,		,"unlocks":""},
			//Shocking Cross top side
			{"node_id":"Shocking_Cross_5",	"maxLevel":3,	"attribute":"Increases Weapon Damage by #%"	,"modifier":5,	,"unlocks":"Shocking_Cross_5"},
			{"node_id":"Shocking_Cross_6",	"maxLevel":2,	"attribute":"Increases Weapon Damage by #%"					,"modifier":5,		,"unlocks":"Shocking_Cross_6"},
			{"node_id":"Shocking_Cross_7",	"maxLevel":1,	"attribute":"Converts Lightning Damage to Cold Damage"	,"modifier":0,	,"unlocks":"Shocking_Cross_7"},
			{"node_id":"Shocking_Cross_8",	"maxLevel":2,	"attribute":"Increases Damage by #%"				,"modifier":5,		,"unlocks":""},
			//Shocking Cross right side
			{"node_id":"Shocking_Cross_9",	"maxLevel":2,	"attribute":"Increases Weapon Damage by #%"					,"modifier":5,	,"unlocks":"Shocking_Cross_10"},
			{"node_id":"Shocking_Cross_10",	"maxLevel":3,	"attribute":"Increases Weapon Damage by #%"	,"modifier":5,	,"unlocks":"Shocking_Cross_11"},
			{"node_id":"Shocking_Cross_11",	"maxLevel":1,	"attribute":"Shocks targets hit"		,"modifier":0,	,"unlocks":"Shocking_Cross_12"},
			{"node_id":"Shocking_Cross_12",	"maxLevel":2,	"attribute":"#% chance to electrocute"	,"modifier":30,		,"unlocks":""},
			//Shocking Cross bottom side
			{"node_id":"Shocking_Cross_13",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(low end)"	,"modifier":0.5,	,"unlocks":"Shocking_Cross_14"},
			{"node_id":"Shocking_Cross_14",	"maxLevel":2,	"attribute":"Grants # Mana Shield per player level on hit"		,"modifier":1,	,"unlocks":"Shocking_Cross_15"},
			{"node_id":"Shocking_Cross_15",	"maxLevel":1,	"attribute":"Damage dealt is leeched as life by #%"		,"modifier":2,	,"unlocks":"Shocking_Cross_16"},
			{"node_id":"Shocking_Cross_16",	"maxLevel":1,	"attribute":"Damage dealt is leeched as life by #%"		,"modifier":1,		,"unlocks":""},
			
			//Crescent Stomp left side
			{"node_id":"Crescent_Stomp_1",	"maxLevel":3,	"attribute":"Reduces Cooldown by # second(s)"	,"modifier":1,	,"unlocks":"Crescent_Stomp_2"},
			{"node_id":"Crescent_Stomp_2",	"maxLevel":2,	"attribute":"#% life leech"					,"modifier":1,	,"unlocks":"Crescent_Stomp_3"},
			{"node_id":"Crescent_Stomp_3",	"maxLevel":1,	"attribute":"Teleports to the target under cursor before attacking"	,"modifier":0,	,"unlocks":"Crescent_Stomp_4"},
			{"node_id":"Crescent_Stomp_4",	"maxLevel":1,	"attribute":"Teleports back to original location after attacking"				,"modifier":0,		,"unlocks":""},
			//Crescent Stomp top side
			{"node_id":"Crescent_Stomp_5",	"maxLevel":3,	"attribute":"Increases Weapon Damage by #%"	,"modifier":5,	,"unlocks":"Crescent_Stomp_5"},
			{"node_id":"Crescent_Stomp_6",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,		,"unlocks":"Crescent_Stomp_6"},
			{"node_id":"Crescent_Stomp_7",	"maxLevel":1,	"attribute":"Resets the cooldown on use but reduces damage dealt by #%"	,"modifier":50,	,"unlocks":"Crescent_Stomp_7"},
			{"node_id":"Crescent_Stomp_8",	"maxLevel":2,	"attribute":"Reduces damage reduction by #%"				,"modifier":10,		,"unlocks":""},
			//Crescent Stomp right side
			{"node_id":"Crescent_Stomp_9",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,	,"unlocks":"Crescent_Stomp_10"},
			{"node_id":"Crescent_Stomp_10",	"maxLevel":3,	"attribute":"Reduces Cooldown by # second(s)"	,"modifier":1,	,"unlocks":"Crescent_Stomp_11"},
			{"node_id":"Crescent_Stomp_11",	"maxLevel":1,	"attribute":"Grants a # Movement Speed buff on use (single stack) that lasts for 5 seconds"		,"modifier":100,	,"unlocks":"Crescent_Stomp_12"},
			{"node_id":"Crescent_Stomp_12",	"maxLevel":2,	"attribute":"Additional # Movement Speed buff"	,"modifier":50,		,"unlocks":""},
			//Crescent Stomp bottom side
			{"node_id":"Crescent_Stomp_13",	"maxLevel":3,	"attribute":"Increases Weapon Damage by #%"	,"modifier":5,	,"unlocks":"Crescent_Stomp_14"},
			{"node_id":"Crescent_Stomp_14",	"maxLevel":2,	"attribute":"Increases Weapon Damage by #%"		,"modifier":5,	,"unlocks":"Crescent_Stomp_15"},
			{"node_id":"Crescent_Stomp_15",	"maxLevel":1,	"attribute":"Adds #% Weapon Damage as Fire to damage dealt"		,"modifier":30,	,"unlocks":"Crescent_Stomp_16"},
			{"node_id":"Crescent_Stomp_16",	"maxLevel":1,	"attribute":"Adds #% Weapon Damage as Fire to damage dealt"		,"modifier":10,		,"unlocks":""},
			
			//Touch Of Ragno left side
			{"node_id":"Touch_Of_Ragno_1",	"maxLevel":3,	"attribute":"Increases Weapon Damage by #%"	,"modifier":5,	,"unlocks":"Touch_Of_Ragno_2"},
			{"node_id":"Touch_Of_Ragno_2",	"maxLevel":2,	"attribute":"Reduces Cooldown by # seconds"					,"modifier":2,	,"unlocks":"Touch_Of_Ragno_3"},
			{"node_id":"Touch_Of_Ragno_3",	"maxLevel":1,	"attribute":"Conjures a fiery aura that deals 2 Fire Damage per player level per second and drains # mana per tick, has 250 radius and lasts for 30 seconds"	,"modifier":5,	,"unlocks":"Touch_Of_Ragno_4"},
			{"node_id":"Touch_Of_Ragno_4",	"maxLevel":1,	"attribute":"Reduces fiery aura Mana Cost by # per tick"				,"modifier":1,		,"unlocks":""},
			//Touch Of Ragno top side
			{"node_id":"Touch_Of_Ragno_5",	"maxLevel":3,	"attribute":"Increases Weapon Damage by #%"	,"modifier":5,	,"unlocks":"Touch_Of_Ragno_5"},
			{"node_id":"Touch_Of_Ragno_6",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,		,"unlocks":"Touch_Of_Ragno_6"},
			{"node_id":"Touch_Of_Ragno_7",	"maxLevel":1,	"attribute":"Burns enemies for # Fire Damage per player level per second for 3 seconds"	,"modifier":2,	,"unlocks":"Touch_Of_Ragno_7"},
			{"node_id":"Touch_Of_Ragno_8",	"maxLevel":2,	"attribute":"Increases damage dealt by #"				,"modifier":0.5,		,"unlocks":""},
			//Touch Of Ragno right side
			{"node_id":"Touch_Of_Ragno_9",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,	,"unlocks":"Touch_Of_Ragno_10"},
			{"node_id":"Touch_Of_Ragno_10",	"maxLevel":3,	"attribute":"Increases Weapon Damage by #%"	,"modifier":5,	,"unlocks":"Touch_Of_Ragno_11"},
			{"node_id":"Touch_Of_Ragno_11",	"maxLevel":1,	"attribute":"Enemies slain explode for # Fire Damage per player level with 150 radius"		,"modifier":2,	,"unlocks":"Touch_Of_Ragno_12"},
			{"node_id":"Touch_Of_Ragno_12",	"maxLevel":2,	"attribute":"Increases explosion damage dealt by #"	,"modifier":0.5,		,"unlocks":""},
			//Touch Of Ragno bottom side
			{"node_id":"Touch_Of_Ragno_13",	"maxLevel":3,	"attribute":"Increases Weapon Damage by #%"	,"modifier":5,	,"unlocks":"Touch_Of_Ragno_14"},
			{"node_id":"Touch_Of_Ragno_14",	"maxLevel":2,	"attribute":"Reduces Cooldown by # seconds"		,"modifier":2,	,"unlocks":"Touch_Of_Ragno_15"},
			{"node_id":"Touch_Of_Ragno_15",	"maxLevel":1,	"attribute":"Roots enemies for # second(s)"		,"modifier":1,	,"unlocks":"Touch_Of_Ragno_16"},
			{"node_id":"Touch_Of_Ragno_16",	"maxLevel":1,	"attribute":"Roots enemies for # second(s)"		,"modifier":0.5,		,"unlocks":""},
			
			//Brimestone Splinters left side
			{"node_id":"Brimestone_Splinters_1",	"maxLevel":3,	"attribute":"Reduces Gravity by # (falls slower)"	,"modifier":0.1,	,"unlocks":"Brimestone_Splinters_2"},
			{"node_id":"Brimestone_Splinters_2",	"maxLevel":2,	"attribute":"Increases Target Radius by #"					,"modifier":25,	,"unlocks":"Brimestone_Splinters_3"},
			{"node_id":"Brimestone_Splinters_3",	"maxLevel":1,	"attribute":"Sends projectiles in an Arc with # Velocity"	,"modifier":0.6,	,"unlocks":"Brimestone_Splinters_4"},
			{"node_id":"Brimestone_Splinters_4",	"maxLevel":1,	"attribute":"Increases Arc Velocity by # (travels further)"				,"modifier":0.2,		,"unlocks":""},
			//Brimestone Splinters top side
			{"node_id":"Brimestone_Splinters_5",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#"	,"modifier":0.5,	,"unlocks":"Brimestone_Splinters_5"},
			{"node_id":"Brimestone_Splinters_6",	"maxLevel":2,	"attribute":"Increases Explosion Radius by #"					,"modifier":25,		,"unlocks":"Brimestone_Splinters_6"},
			{"node_id":"Brimestone_Splinters_7",	"maxLevel":1,	"attribute":"Creates a fiery pit upon explosion that lasts for # seconds has a 150 radius and deals 2 Fire Damage per tick"	,"modifier":3,	,"unlocks":"Brimestone_Splinters_7"},
			{"node_id":"Brimestone_Splinters_8",	"maxLevel":2,	"attribute":"Adds # second(s) to fiery pit duration"				,"modifier":1,		,"unlocks":""},
			//Brimestone Splinters right side
			{"node_id":"Brimestone_Splinters_9",	"maxLevel":2,	"attribute":"Increases Explosion Radius by #"					,"modifier":25,	,"unlocks":"Brimestone_Splinters_10"},
			{"node_id":"Brimestone_Splinters_10",	"maxLevel":3,	"attribute":"Reduces Gravity by # (falls slower)"	,"modifier":0.1,	,"unlocks":"Brimestone_Splinters_11"},
			{"node_id":"Brimestone_Splinters_11",	"maxLevel":1,	"attribute":"Combines all projectiles to form a giant one that has +50 radius and +# Fire Damage per projectile"		,"modifier":2,	,"unlocks":"Brimestone_Splinters_12"},
			{"node_id":"Brimestone_Splinters_12",	"maxLevel":2,	"attribute":"Adds # additional projectile(s)"	,"modifier":1,		,"unlocks":""},
			//Brimestone Splinters bottom side
			{"node_id":"Brimestone_Splinters_13",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#"	,"modifier":0.5,	,"unlocks":"Brimestone_Splinters_14"},
			{"node_id":"Brimestone_Splinters_14",	"maxLevel":2,	"attribute":"Increases Target Radius by #"		,"modifier":25,	,"unlocks":"Brimestone_Splinters_15"},
			{"node_id":"Brimestone_Splinters_15",	"maxLevel":1,	"attribute":"Each projectile forks either left or right and has # second internal cooldown"		,"modifier":1,	,"unlocks":"Brimestone_Splinters_16"},
			{"node_id":"Brimestone_Splinters_16",	"maxLevel":1,	"attribute":"Reduces internal cooldown by # second"		,"modifier":1,		,"unlocks":""},
			
			//Tundra Blast left side
			{"node_id":"Tundra_Blast_1",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(high end)"	,"modifier":0.5,	,"unlocks":"Tundra_Blast_2"},
			{"node_id":"Tundra_Blast_2",	"maxLevel":2,	"attribute":"Increases tick rate by #"					,"modifier":0.05,	,"unlocks":"Tundra_Blast_3"},
			{"node_id":"Tundra_Blast_3",	"maxLevel":1,	"attribute":"Restores Mana by #% of Max amount when channeling stops"	,"modifier":50,	,"unlocks":"Tundra_Blast_4"},
			{"node_id":"Tundra_Blast_4",	"maxLevel":1,	"attribute":"Restores Mana by #% of Max amount when channeling stops"				,"modifier":25,		,"unlocks":""},
			//Tundra Blast top side
			{"node_id":"Tundra_Blast_5",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(low end)"	,"modifier":0.5,	,"unlocks":"Tundra_Blast_5"},
			{"node_id":"Tundra_Blast_6",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,		,"unlocks":"Tundra_Blast_6"},
			{"node_id":"Tundra_Blast_7",	"maxLevel":1,	"attribute":"Changes the skill to channel a block of ice in front of the player with a # radius and deals 25% increased damage"	,"modifier":200,	,"unlocks":"Tundra_Blast_7"},
			{"node_id":"Tundra_Blast_8",	"maxLevel":2,	"attribute":"Increases Radius by #"				,"modifier":50,		,"unlocks":""},
			//Tundra Blast right side
			{"node_id":"Tundra_Blast_9",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,	,"unlocks":"Tundra_Blast_10"},
			{"node_id":"Tundra_Blast_10",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(high end)"	,"modifier":0.5,	,"unlocks":"Tundra_Blast_11"},
			{"node_id":"Tundra_Blast_11",	"maxLevel":1,	"attribute":"Enemies killed restore #% of Max Health"		,"modifier":3,	,"unlocks":"Tundra_Blast_12"},
			{"node_id":"Tundra_Blast_12",	"maxLevel":2,	"attribute":"Enemies killed restore #% of Max Health"	,"modifier":1,		,"unlocks":""},
			//Tundra Blast bottom side
			{"node_id":"Tundra_Blast_13",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(low end)"	,"modifier":0.5,	,"unlocks":"Tundra_Blast_14"},
			{"node_id":"Tundra_Blast_14",	"maxLevel":2,	"attribute":"Increases tick rate by #"		,"modifier":0.05,	,"unlocks":"Tundra_Blast_15"},
			{"node_id":"Tundra_Blast_15",	"maxLevel":1,	"attribute":"An icestorm pelts every enemy hit. The storm has # Radius and deals 2 Cold Damage per player level"		,"modifier":100,	,"unlocks":"Tundra_Blast_16"},
			{"node_id":"Tundra_Blast_16",	"maxLevel":1,	"attribute":"Increases Radius by #"		,"modifier":25,		,"unlocks":""},
			
			//Elemental Blow left side
			{"node_id":"Elemental_Blow_1",	"maxLevel":3,	"attribute":"Leeches #% of Damage Dealt as Mana Shield"	,"modifier":1,	,"unlocks":"Elemental_Blow_2"},
			{"node_id":"Elemental_Blow_2",	"maxLevel":2,	"attribute":"Grants # Mana Shield per player level on hit"					,"modifier":1,	,"unlocks":"Elemental_Blow_3"},
			{"node_id":"Elemental_Blow_3",	"maxLevel":1,	"attribute":"If HP is at 100% deal an additional #% damage"	,"modifier":40,	,"unlocks":"Elemental_Blow_4"},
			{"node_id":"Elemental_Blow_4",	"maxLevel":1,	"attribute":"Leeches #% of Damage Dealt as Life"				,"modifier":1,		,"unlocks":""},
			//Elemental Blow top side
			{"node_id":"Elemental_Blow_5",	"maxLevel":3,	"attribute":"Increases Weapon Damage by #%"	,"modifier":5,	,"unlocks":"Elemental_Blow_5"},
			{"node_id":"Elemental_Blow_6",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,		,"unlocks":"Elemental_Blow_6"},
			{"node_id":"Elemental_Blow_7",	"maxLevel":1,	"attribute":"Converts every strike to Fire Damage. Only one conversion can be active at once and the order of preference is Fire > Lightning > Cold"	,"modifier":0,	,"unlocks":"Elemental_Blow_7"},
			{"node_id":"Elemental_Blow_8",	"maxLevel":2,	"attribute":"Increases damage by #"				,"modifier":0.5,		,"unlocks":""},
			//Elemental Blow right side
			{"node_id":"Elemental_Blow_9",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,	,"unlocks":"Elemental_Blow_10"},
			{"node_id":"Elemental_Blow_10",	"maxLevel":3,	"attribute":"Leeches #% of Damage Dealt as Mana Shield"	,"modifier":1,	,"unlocks":"Elemental_Blow_11"},
			{"node_id":"Elemental_Blow_11",	"maxLevel":1,	"attribute":"Converts every strike to Lightning Damage. Only one conversion can be active at once and the order of preference is Fire > Lightning > Cold"		,"modifier":0.5,	,"unlocks":"Elemental_Blow_12"},
			{"node_id":"Elemental_Blow_12",	"maxLevel":2,	"attribute":"Increases damage by #"	,"modifier":0.5,		,"unlocks":""},
			//Elemental Blow bottom side
			{"node_id":"Elemental_Blow_13",	"maxLevel":3,	"attribute":"Increases Weapon Damage by #%"	,"modifier":5,	,"unlocks":"Elemental_Blow_14"},
			{"node_id":"Elemental_Blow_14",	"maxLevel":2,	"attribute":"Grants # Mana Shield per player level on hit"		,"modifier":1,	,"unlocks":"Elemental_Blow_15"},
			{"node_id":"Elemental_Blow_15",	"maxLevel":1,	"attribute":"Converts every strike to Cold Damage. Only one conversion can be active at once and the order of preference is Fire > Lightning > Cold"		,"modifier":1,	,"unlocks":"Elemental_Blow_16"},
			{"node_id":"Elemental_Blow_16",	"maxLevel":1,	"attribute":"Increases damage by #"		,"modifier":0.5,		,"unlocks":""},
			
			//Thunderous Fury left side
			{"node_id":"Thunderous_Fury_1",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(high end)"	,"modifier":0.5,	,"unlocks":"Thunderous_Fury_2"},
			{"node_id":"Thunderous_Fury_2",	"maxLevel":2,	"attribute":"Grants # Mana on Hit"					,"modifier":1,	,"unlocks":"Thunderous_Fury_3"},
			{"node_id":"Thunderous_Fury_3",	"maxLevel":1,	"attribute":"Electrocutes enemies hit dealing 2 Lightning Damage per player level for # seconds"	,"modifier":3,	,"unlocks":"Thunderous_Fury_4"},
			{"node_id":"Thunderous_Fury_4",	"maxLevel":1,	"attribute":"Increases electrocution duration by # second"				,"modifier":1,		,"unlocks":""},
			//Thunderous Fury top side
			{"node_id":"Thunderous_Fury_5",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(high end)"	,"modifier":0.5,	,"unlocks":"Thunderous_Fury_5"},
			{"node_id":"Thunderous_Fury_6",	"maxLevel":2,	"attribute":"Increases Damage Radius by #"					,"modifier":25,		,"unlocks":"Thunderous_Fury_6"},
			{"node_id":"Thunderous_Fury_7",	"maxLevel":1,	"attribute":"Has # additional chain(s)"	,"modifier":1,	,"unlocks":"Thunderous_Fury_7"},
			{"node_id":"Thunderous_Fury_8",	"maxLevel":2,	"attribute":"Has # additional chain(s)"				,"modifier":1,		,"unlocks":""},
			//Thunderous Fury right side
			{"node_id":"Thunderous_Fury_9",	"maxLevel":2,	"attribute":"Increases Damage Radius by #"					,"modifier":25,	,"unlocks":"Thunderous_Fury_10"},
			{"node_id":"Thunderous_Fury_10",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(high end)"	,"modifier":0.5,	,"unlocks":"Thunderous_Fury_11"},
			{"node_id":"Thunderous_Fury_11",	"maxLevel":1,	"attribute":"Instead of chaining a giant pillar crashes down at the player cursor dealing 100% increased damage with # radius"		,"modifier":250,	,"unlocks":"Thunderous_Fury_12"},
			{"node_id":"Thunderous_Fury_12",	"maxLevel":2,	"attribute":"Increases Damage Radius by #"	,"modifier":50,		,"unlocks":""},
			//Thunderous Fury bottom side
			{"node_id":"Thunderous_Fury_13",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(low end)"	,"modifier":0.5,	,"unlocks":"Thunderous_Fury_14"},
			{"node_id":"Thunderous_Fury_14",	"maxLevel":2,	"attribute":"Grants # Mana Shield per player level on hit"		,"modifier":0.5,	,"unlocks":"Thunderous_Fury_15"},
			{"node_id":"Thunderous_Fury_15",	"maxLevel":1,	"attribute":"Instead of chaning 4 explosions occur around the player each with #% increased damage and 125 radius"		,"modifier":50,	,"unlocks":"Thunderous_Fury_16"},
			{"node_id":"Thunderous_Fury_16",	"maxLevel":1,	"attribute":"Explosions repeat after a # second delay but with half the damage"		,"modifier":0.5,		,"unlocks":""},
		]
	},
	{	"Name":"Hexlord",
		"Skills":["Chaotic Swipe","Poison Nova","Soul Swap","Poison Burst","Tunneling Death","Plague","Chaos Storm","Soul Strike"],
		"SkillPassives":[
			//Chaotic Swipe left side
			{"node_id":"Chaotic_Swipe_1",	"maxLevel":3,	"attribute":"Adds #% to HP is below treshold"	,"modifier":5,	,"unlocks":"Chaotic_Swipe_2"},
			{"node_id":"Chaotic_Swipe_2",	"maxLevel":2,	"attribute":"Grants # mana on Hit"					,"modifier":1,	,"unlocks":"Chaotic_Swipe_3"},
			{"node_id":"Chaotic_Swipe_3",	"maxLevel":1,	"attribute":"Instantly explodes your seeds"	,"modifier":0,	,"unlocks":"Chaotic_Swipe_4"},
			{"node_id":"Chaotic_Swipe_4",	"maxLevel":1,	"attribute":"Increases Area of Effect by #"				,"modifier":50,		,"unlocks":""},
			//Chaotic Swipe top side
			{"node_id":"Chaotic_Swipe_5",	"maxLevel":3,	"attribute":"Increases Weapon Damage by #%"	,"modifier":5,	,"unlocks":"Chaotic_Swipe_5"},
			{"node_id":"Chaotic_Swipe_6",	"maxLevel":2,	"attribute":"Grants # Iron Skin per player level on hit"					,"modifier":0.5,		,"unlocks":"Chaotic_Swipe_6"},
			{"node_id":"Chaotic_Swipe_7",	"maxLevel":1,	"attribute":"Grants a Chaos Damage buff that adds #% Chaos Damage for 3 seconds"	,"modifier":25,	,"unlocks":"Chaotic_Swipe_7"},
			{"node_id":"Chaotic_Swipe_8",	"maxLevel":2,	"attribute":"Grants a Chaos Damage buff that adds #% Chaos Damage for 3 seconds"	,"modifier":5,		,"unlocks":""},
			//Chaotic Swipe right side
			{"node_id":"Chaotic_Swipe_9",	"maxLevel":2,	"attribute":"Adds #% to HP is below treshold"					,"modifier":5,	,"unlocks":"Chaotic_Swipe_10"},
			{"node_id":"Chaotic_Swipe_10",	"maxLevel":3,	"attribute":"Grants # mana on Hit"	,"modifier":1,	,"unlocks":"Chaotic_Swipe_11"},
			{"node_id":"Chaotic_Swipe_11",	"maxLevel":1,	"attribute":"Adds a seed tp enemies on hit that explodes after 3 seconds and deals # Chaos Damage in a 200 radius"		,"modifier":2,	,"unlocks":"Chaotic_Swipe_12"},
			{"node_id":"Chaotic_Swipe_12",	"maxLevel":2,	"attribute":"Increases seed base Damage by #"	,"modifier":1,		,"unlocks":""},
			//Chaotic Swipe bottom side
			{"node_id":"Chaotic_Swipe_13",	"maxLevel":3,	"attribute":"Increases Weapon Damage by #%"	,"modifier":5,	,"unlocks":"Chaotic_Swipe_14"},
			{"node_id":"Chaotic_Swipe_14",	"maxLevel":2,	"attribute":"Grants # Iron Skin per player level on hit"		,"modifier":0.5,	,"unlocks":"Chaotic_Swipe_15"},
			{"node_id":"Chaotic_Swipe_15",	"maxLevel":1,	"attribute":"Curses enemies hit for # Chaos Damage per player level for 3 seconds"		,"modifier":2,	,"unlocks":"Chaotic_Swipe_16"},
			{"node_id":"Chaotic_Swipe_16",	"maxLevel":1,	"attribute":"Increases curse base damage by #"		,"modifier":1,		,"unlocks":""},
			
			//Poison Nova left side
			{"node_id":"Poison_Nova_1",	"maxLevel":3,	"attribute":"Reduces threshold by #%"	,"modifier":5,	,"unlocks":"Poison_Nova_2"},
			{"node_id":"Poison_Nova_2",	"maxLevel":2,	"attribute":"Grants # Iron Skin per player level on hit"					,"modifier":0.5,	,"unlocks":"Poison_Nova_3"},
			{"node_id":"Poison_Nova_3",	"maxLevel":1,	"attribute":"Leeches #% of damage dealt as Life"	,"modifier":1,	,"unlocks":"Poison_Nova_4"},
			{"node_id":"Poison_Nova_4",	"maxLevel":1,	"attribute":"Leeches #% of damage dealt as Life"				,"modifier":1,		,"unlocks":""},
			//Poison Nova top side
			{"node_id":"Poison_Nova_5",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#"	,"modifier":0.5,	,"unlocks":"Poison_Nova_5"},
			{"node_id":"Poison_Nova_6",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,		,"unlocks":"Poison_Nova_6"},
			{"node_id":"Poison_Nova_7",	"maxLevel":1,	"attribute":"Nova casts at player location and has an additional #% radius"	,"modifier":100,	,"unlocks":"Poison_Nova_7"},
			{"node_id":"Poison_Nova_8",	"maxLevel":2,	"attribute":"Increases Radius by #"				,"modifier":25,		,"unlocks":""},
			//Poison Nova right side
			{"node_id":"Poison_Nova_9",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,	,"unlocks":"Poison_Nova_10"},
			{"node_id":"Poison_Nova_10",	"maxLevel":3,	"attribute":"Reduces threshold by #%"	,"modifier":5,	,"unlocks":"Poison_Nova_11"},
			{"node_id":"Poison_Nova_11",	"maxLevel":1,	"attribute":"Leaves a pool of poison that deals # Poison Damage per player level per second for 3 seconds"		,"modifier":1,	,"unlocks":"Poison_Nova_12"},
			{"node_id":"Poison_Nova_12",	"maxLevel":2,	"attribute":"Increases damage by #"	,"modifier":1,		,"unlocks":""},
			//Poison Nova bottom side
			{"node_id":"Poison_Nova_13",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#"	,"modifier":0.5,	,"unlocks":"Poison_Nova_14"},
			{"node_id":"Poison_Nova_14",	"maxLevel":2,	"attribute":"Grants # Iron Skin per player level on hit"		,"modifier":0.5,	,"unlocks":"Poison_Nova_15"},
			{"node_id":"Poison_Nova_15",	"maxLevel":1,	"attribute":"Releases 3 Poison Daggers that deal # Poison Damage per player level on hit"		,"modifier":2,	,"unlocks":"Poison_Nova_16"},
			{"node_id":"Poison_Nova_16",	"maxLevel":1,	"attribute":"Increases damage by #"		,"modifier":1,		,"unlocks":""},
			
			//Soul Swap left side
			{"node_id":"Soul_Swap_1",	"maxLevel":3,	"attribute":"Adds #% to HP is below treshold"	,"modifier":5,	,"unlocks":"Soul_Swap_2"},
			{"node_id":"Soul_Swap_2",	"maxLevel":2,	"attribute":"Reduces Cooldown by #"					,"modifier":0.5,	,"unlocks":"Soul_Swap_3"},
			{"node_id":"Soul_Swap_3",	"maxLevel":1,	"attribute":"Chains to nearby enemy after a # second delay, prioritises the same enemy"	,"modifier":0.2,	,"unlocks":"Soul_Swap_4"},
			{"node_id":"Soul_Swap_4",	"maxLevel":1,	"attribute":"Adds an additional chain"				,"modifier":0,		,"unlocks":""},
			//Soul Swap top side
			{"node_id":"Soul_Swap_5",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#"	,"modifier":0.5,	,"unlocks":"Soul_Swap_5"},
			{"node_id":"Soul_Swap_6",	"maxLevel":2,	"attribute":"Increases Cursor Radius by #"					,"modifier":25,		,"unlocks":"Soul_Swap_6"},
			{"node_id":"Soul_Swap_7",	"maxLevel":1,	"attribute":"Leave a clone behind that explodes for 3 chaos damage per player level in a # radius"	,"modifier":250,	,"unlocks":"Soul_Swap_7"},
			{"node_id":"Soul_Swap_8",	"maxLevel":2,	"attribute":"Increases Radius by #"				,"modifier":50,		,"unlocks":""},
			//Soul Swap right side
			{"node_id":"Soul_Swap_9",	"maxLevel":2,	"attribute":"Increases Cursor Radius by #"					,"modifier":25,	,"unlocks":"Soul_Swap_10"},
			{"node_id":"Soul_Swap_10",	"maxLevel":3,	"attribute":"Adds #% to HP is below treshold"	,"modifier":5,	,"unlocks":"Soul_Swap_11"},
			{"node_id":"Soul_Swap_11",	"maxLevel":1,	"attribute":"Cast again to Return to the starting location within # seconds"		,"modifier":2,	,"unlocks":"Soul_Swap_12"},
			{"node_id":"Soul_Swap_12",	"maxLevel":2,	"attribute":"Increases Return duration by # second(s)"	,"modifier":1,		,"unlocks":""},
			//Soul Swap bottom side
			{"node_id":"Soul_Swap_13",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#"	,"modifier":0.5,	,"unlocks":"Soul_Swap_14"},
			{"node_id":"Soul_Swap_14",	"maxLevel":2,	"attribute":"Reduces Cooldown by #"		,"modifier":0.5,	,"unlocks":"Soul_Swap_15"},
			{"node_id":"Soul_Swap_15",	"maxLevel":1,	"attribute":"Reduces the delay to # seconds"		,"modifier":0.2,	,"unlocks":"Soul_Swap_16"},
			{"node_id":"Soul_Swap_16",	"maxLevel":1,	"attribute":"Reduces Cooldown by #"		,"modifier":1,		,"unlocks":""},
			
			//Poison Burst left side
			{"node_id":"Poison_Burst_1",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(high end)"	,"modifier":0.5,	,"unlocks":"Poison_Burst_2"},
			{"node_id":"Poison_Burst_2",	"maxLevel":2,	"attribute":"Reduces Cooldown by #"					,"modifier":0.5,	,"unlocks":"Poison_Burst_3"},
			{"node_id":"Poison_Burst_3",	"maxLevel":1,	"attribute":"Applies Poison Debuff that ticks for # Poison Damage per player level per second for 3 seconds"	,"modifier":1,	,"unlocks":"Poison_Burst_4"},
			{"node_id":"Poison_Burst_4",	"maxLevel":1,	"attribute":"Poison Debuff damage increased by #"				,"modifier":1,		,"unlocks":""},
			//Poison Burst top side
			{"node_id":"Poison_Burst_5",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(low end)"	,"modifier":0.5,	,"unlocks":"Poison_Burst_5"},
			{"node_id":"Poison_Burst_6",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,		,"unlocks":"Poison_Burst_6"},
			{"node_id":"Poison_Burst_7",	"maxLevel":1,	"attribute":"Becomes a ring of poison around the player that casts once and then again after a # second delay"	,"modifier":1,	,"unlocks":"Poison_Burst_7"},
			{"node_id":"Poison_Burst_8",	"maxLevel":2,	"attribute":"Has a #% chance for the cast to Echo, this can chain indefinitely"				,"modifier":10,		,"unlocks":""},
			//Poison Burst right side
			{"node_id":"Poison_Burst_9",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,	,"unlocks":"Poison_Burst_10"},
			{"node_id":"Poison_Burst_10",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(high end)"	,"modifier":0.5,	,"unlocks":"Poison_Burst_11"},
			{"node_id":"Poison_Burst_11",	"maxLevel":1,	"attribute":"Casts a version of Poison Nova on crit that shares the same stats as your Poison Nova"		,"modifier":0,	,"unlocks":"Poison_Burst_12"},
			{"node_id":"Poison_Burst_12",	"maxLevel":2,	"attribute":"Has a #% chance to cast on non crit"	,"modifier":20,		,"unlocks":""},
			//Poison Burst bottom side
			{"node_id":"Poison_Burst_13",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(low end)"	,"modifier":0.5,	,"unlocks":"Poison_Burst_14"},
			{"node_id":"Poison_Burst_14",	"maxLevel":2,	"attribute":"Reduces Cooldown by #"		,"modifier":0.5,	,"unlocks":"Poison_Burst_15"},
			{"node_id":"Poison_Burst_15",	"maxLevel":1,	"attribute":"Increases Cooldown by 5 seconds but deal #% More Damage"		,"modifier":50,	,"unlocks":"Poison_Burst_16"},
			{"node_id":"Poison_Burst_16",	"maxLevel":1,	"attribute":"Reduces Cooldown by #"		,"modifier":2,		,"unlocks":""},
			
			//Tunneling Death left side
			{"node_id":"Tunneling_Death_1",	"maxLevel":3,	"attribute":"Grants # Iron Skin per player level on hit"	,"modifier":1,	,"unlocks":"Tunneling_Death_2"},
			{"node_id":"Tunneling_Death_2",	"maxLevel":2,	"attribute":"Increases Skill Damage by +#(high end)"					,"modifier":0.5,	,"unlocks":"Tunneling_Death_3"},
			{"node_id":"Tunneling_Death_3",	"maxLevel":1,	"attribute":"Projectiles return after exploding following enemy trajectory. Has a # second cooldown"	,"modifier":3,	,"unlocks":"Tunneling_Death_4"},
			{"node_id":"Tunneling_Death_4",	"maxLevel":1,	"attribute":"Reduces Cooldown by #"				,"modifier":1,		,"unlocks":""},
			//Tunneling Death top side
			{"node_id":"Tunneling_Death_5",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(low end)"	,"modifier":0.5,	,"unlocks":"Tunneling_Death_5"},
			{"node_id":"Tunneling_Death_6",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,		,"unlocks":"Tunneling_Death_6"},
			{"node_id":"Tunneling_Death_7",	"maxLevel":1,	"attribute":"Spawns 3 projectiles instead of one, but reduces damage by #%"	,"modifier":50,	,"unlocks":"Tunneling_Death_7"},
			{"node_id":"Tunneling_Death_8",	"maxLevel":2,	"attribute":"Reduces damage reduction by #%"				,"modifier":10,		,"unlocks":""},
			//Tunneling Death right side
			{"node_id":"Tunneling_Death_9",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,	,"unlocks":"Tunneling_Death_10"},
			{"node_id":"Tunneling_Death_10",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(high end)"	,"modifier":0.5,	,"unlocks":"Tunneling_Death_11"},
			{"node_id":"Tunneling_Death_11",	"maxLevel":1,	"attribute":"Becomes an Aura that fires one projectile every 3 seconds and drains # Mana"		,"modifier":10,	,"unlocks":"Tunneling_Death_12"},
			{"node_id":"Tunneling_Death_12",	"maxLevel":2,	"attribute":"Drains # less Mana"	,"modifier":1,		,"unlocks":""},
			//Tunneling Death bottom side
			{"node_id":"Tunneling_Death_13",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#(low end)"	,"modifier":0.5,	,"unlocks":"Tunneling_Death_14"},
			{"node_id":"Tunneling_Death_14",	"maxLevel":2,	"attribute":"Grants # Iron Skin per player level on hit"		,"modifier":1,	,"unlocks":"Tunneling_Death_15"},
			{"node_id":"Tunneling_Death_15",	"maxLevel":1,	"attribute":"Leeches #% of Damage Dealt as Mana"		,"modifier":1,	,"unlocks":"Tunneling_Death_16"},
			{"node_id":"Tunneling_Death_16",	"maxLevel":1,	"attribute":"Leeches #% of Damage Dealt as Mana"		,"modifier":1,		,"unlocks":""},
			
			//Plague left side
			{"node_id":"Plague_1",	"maxLevel":3,	"attribute":"Reduces Tick Rate by # seconds"	,"modifier":0.05,	,"unlocks":"Plague_2"},
			{"node_id":"Plague_2",	"maxLevel":2,	"attribute":"Reduces Mana Cost by #"					,"modifier":1,	,"unlocks":"Plague_3"},
			{"node_id":"Plague_3",	"maxLevel":1,	"attribute":"If Mana is above 50% then increase damage dealt by #%"	,"modifier":50,	,"unlocks":"Plague_4"},
			{"node_id":"Plague_4",	"maxLevel":1,	"attribute":"If Mana is above 50% then increase damage dealt by #%"				,"modifier":10,		,"unlocks":""},
			//Plague top side
			{"node_id":"Plague_5",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#"	,"modifier":0.5,	,"unlocks":"Plague_5"},
			{"node_id":"Plague_6",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,		,"unlocks":"Plague_6"},
			{"node_id":"Plague_7",	"maxLevel":1,	"attribute":"Restores # Mana on Crit"	,"modifier":3,	,"unlocks":"Plague_7"},
			{"node_id":"Plague_8",	"maxLevel":2,	"attribute":"Restores # Mana on Crit"				,"modifier":1,		,"unlocks":""},
			//Plague right side
			{"node_id":"Plague_9",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,	,"unlocks":"Plague_10"},
			{"node_id":"Plague_10",	"maxLevel":3,	"attribute":"Reduces Tick Rate by # seconds"	,"modifier":0.05,	,"unlocks":"Plague_11"},
			{"node_id":"Plague_11",	"maxLevel":1,	"attribute":"If the enemy is affected by Bile then inflict an extra # Poison Damage per player level on hit"		,"modifier":1,	,"unlocks":"Plague_12"},
			{"node_id":"Plague_12",	"maxLevel":2,	"attribute":"Increases damage by #"	,"modifier":1,		,"unlocks":""},
			//Plague bottom side
			{"node_id":"Plague_13",	"maxLevel":3,	"attribute":"Increases Skill Damage by +#"	,"modifier":0.5,	,"unlocks":"Plague_14"},
			{"node_id":"Plague_14",	"maxLevel":2,	"attribute":"Reduces Mana Cost by #"		,"modifier":1,	,"unlocks":"Plague_15"},
			{"node_id":"Plague_15",	"maxLevel":1,	"attribute":"Leeches #% of Damage Dealt as Iron Skin"		,"modifier":1,	,"unlocks":"Plague_16"},
			{"node_id":"Plague_16",	"maxLevel":1,	"attribute":"Leeches #% of Damage Dealt as Iron Skin"		,"modifier":1,		,"unlocks":""},
			
			//Chaos Storm left side
			{"node_id":"Chaos_Storm_1",	"maxLevel":3,	"attribute":"Reduces Tick Rate by # seconds"	,"modifier":0.05,	,"unlocks":"Chaos_Storm_2"},
			{"node_id":"Chaos_Storm_2",	"maxLevel":2,	"attribute":"Increases Duration by # seconds"					,"modifier":0.5,	,"unlocks":"Chaos_Storm_3"},
			{"node_id":"Chaos_Storm_3",	"maxLevel":1,	"attribute":"Pulls enemies into the center of the Storm every # seconds"	,"modifier":2,	,"unlocks":"Chaos_Storm_4"},
			{"node_id":"Chaos_Storm_4",	"maxLevel":1,	"attribute":"Reduces the pull rate by # second"				,"modifier":1,		,"unlocks":""},
			//Chaos Storm top side
			{"node_id":"Chaos_Storm_5",	"maxLevel":3,	"attribute":"Reduces Cooldown by #"	,"modifier":0.5,	,"unlocks":"Chaos_Storm_5"},
			{"node_id":"Chaos_Storm_6",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,		,"unlocks":"Chaos_Storm_6"},
			{"node_id":"Chaos_Storm_7",	"maxLevel":1,	"attribute":"Deals #% More Damage but has a 30 second Cooldown"	,"modifier":100,	,"unlocks":"Chaos_Storm_7"},
			{"node_id":"Chaos_Storm_8",	"maxLevel":2,	"attribute":"Adds #% More Damage"				,"modifier":10,		,"unlocks":""},
			//Chaos Storm right side
			{"node_id":"Chaos_Storm_9",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,	,"unlocks":"Chaos_Storm_10"},
			{"node_id":"Chaos_Storm_10",	"maxLevel":3,	"attribute":"Reduces Tick Rate by # seconds"	,"modifier":0.05,	,"unlocks":"Chaos_Storm_11"},
			{"node_id":"Chaos_Storm_11",	"maxLevel":1,	"attribute":"On Crit spawns another Chaos Storm under a nearby enemy, this ahres the same Duration, Tick Rate and Radius as your Chaos Storm but as #% Less Damage"		,"modifier":50,	,"unlocks":"Chaos_Storm_12"},
			{"node_id":"Chaos_Storm_12",	"maxLevel":2,	"attribute":"Reduces damage penalty by #%"	,"modifier":10,		,"unlocks":""},
			//Chaos Storm bottom side
			{"node_id":"Chaos_Storm_13",	"maxLevel":3,	"attribute":"Reduces Cooldown by #"	,"modifier":0.5,	,"unlocks":"Chaos_Storm_14"},
			{"node_id":"Chaos_Storm_14",	"maxLevel":2,	"attribute":"Increases Duration by # seconds"		,"modifier":0.5,	,"unlocks":"Chaos_Storm_15"},
			{"node_id":"Chaos_Storm_15",	"maxLevel":1,	"attribute":"Casts at player location instead of at Cursor but has #% More Radius"		,"modifier":50,	,"unlocks":"Chaos_Storm_16"},
			{"node_id":"Chaos_Storm_16",	"maxLevel":1,	"attribute":"Adds #% More Radius"		,"modifier":10,		,"unlocks":""},
			
			//Soul Strike left side
			{"node_id":"Soul_Strike_1",	"maxLevel":3,	"attribute":"Increases Low HP Leech by #%"	,"modifier":0.5,	,"unlocks":"Soul_Strike_2"},
			{"node_id":"Soul_Strike_2",	"maxLevel":2,	"attribute":"Adds #% to HP is below treshold"					,"modifier":5,	,"unlocks":"Soul_Strike_3"},
			{"node_id":"Soul_Strike_3",	"maxLevel":1,	"attribute":"Overkill enemies below #% HP"	,"modifier":10,	,"unlocks":"Soul_Strike_4"},
			{"node_id":"Soul_Strike_4",	"maxLevel":1,	"attribute":"Heals for #% of Max Health on kill with Overkill"				,"modifier":5,		,"unlocks":""},
			//Soul Strike top side
			{"node_id":"Soul_Strike_5",	"maxLevel":3,	"attribute":"Increases Low HP Leech by #%"	,"modifier":0.5,	,"unlocks":"Soul_Strike_5"},
			{"node_id":"Soul_Strike_6",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,		,"unlocks":"Soul_Strike_6"},
			{"node_id":"Soul_Strike_7",	"maxLevel":1,	"attribute":"Adds # additional target(s)"	,"modifier":1,	,"unlocks":"Soul_Strike_7"},
			{"node_id":"Soul_Strike_8",	"maxLevel":2,	"attribute":"Adds # additional target(s)"				,"modifier":1,		,"unlocks":""},
			//Soul Strike right side
			{"node_id":"Soul_Strike_9",	"maxLevel":2,	"attribute":"Increases Radius by #"					,"modifier":25,	,"unlocks":"Soul_Strike_10"},
			{"node_id":"Soul_Strike_10",	"maxLevel":3,	"attribute":"Increases Low HP Leech by #%"	,"modifier":0.5,	,"unlocks":"Soul_Strike_11"},
			{"node_id":"Soul_Strike_11",	"maxLevel":1,	"attribute":"Summons a Minion that deals 2 Chaos Damage per player level on hit and after # seconds explodes for 6 Chaos Damage per player level in 300 radius"		,"modifier":10,	,"unlocks":"Soul_Strike_12"},
			{"node_id":"Soul_Strike_12",	"maxLevel":2,	"attribute":"Reduces Minion lifespan by # second(s)"	,"modifier":1,		,"unlocks":""},
			//Soul Strike bottom side
			{"node_id":"Soul_Strike_13",	"maxLevel":3,	"attribute":"Increases Low HP Leech by #%"	,"modifier":0.5,	,"unlocks":"Soul_Strike_14"},
			{"node_id":"Soul_Strike_14",	"maxLevel":2,	"attribute":"Adds #% to HP is below treshold"		,"modifier":5,	,"unlocks":"Soul_Strike_15"},
			{"node_id":"Soul_Strike_15",	"maxLevel":1,	"attribute":"Deal #% More Damage whilst at 100% HP"		,"modifier":50,	,"unlocks":"Soul_Strike_16"},
			{"node_id":"Soul_Strike_16",	"maxLevel":1,	"attribute":"Deal #% More Damage whilst at 100% HP"		,"modifier":20,		,"unlocks":""},
		]
	}
];