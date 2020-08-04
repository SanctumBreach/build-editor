/*
for those that want to help. here is a demo of how I want the defensive tree to look.
the rules on how to progress trough the tree are as follows:
you try to follow the path you went down into. If you are starting a new path first check left,up,right,down
when it comes to the order of the points for defensive it goes:Phoenix,Thunder,Ox,Frozen,Void,Viper
for ultility it goes: Goblin,Oak,Rage,Cheetah,Stok,Vampire
*/
var PassiveTrees=[

//Storm req 6
//Storm req 10
//Bull req 6
//Bull req 10
//Blizzard req 7
//Blizzard req 10
//Corruption req 6
//Corruption req 9
//Decay req 6
//Decay req 9
	{	"Name":"Offensive Tree",
		"Inferno":[,,,"Offensive_Tree_33",,,,"Offensive_Tree_40",,,,"Offensive_Tree_45",,,,"Offensive_Tree_52"],
		"Blizzard":[,,,"Offensive_Tree_103",,,,"Offensive_Tree_109",,,"Offensive_Tree_114",,,,,"Offensive_Tree_120"],
		"Bull":[,,,"Offensive_Tree_78",,,"Offensive_Tree_85",,,,"Offensive_Tree_91",,,,,"Offensive_Tree_98"],
		"Storm":[,,,"Offensive_Tree_57",,,,"Offensive_Tree_63",,,"Offensive_Tree_68",,,,"Offensive_Tree_73"],
		"Corruption":[,,,"Offensive_Tree_124",,,"Offensive_Tree_130",,,"Offensive_Tree_135",,,,,,"Offensive_Tree_141"],
		"Decay":[,,,"Offensive_Tree_146",,,"Offensive_Tree_153",,,"Offensive_Tree_157",,,,,,"Offensive_Tree_164"],
		"Nodes":[
			//left side
			{"node_id":"Offensive_Tree_1" ,"attribute":"Increases Health by #"					,"modifier":10	,"point":"Decay"		,"unlocks":"Offensive_Tree_2,Offensive_Tree_9"},
			{"node_id":"Offensive_Tree_2" ,"attribute":"Increases Speed by #%"					,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_3,Offensive_Tree_6"},
			{"node_id":"Offensive_Tree_3" ,"attribute":"Increases Weapon Damage by #"			,"modifier":1	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_4"},
			{"node_id":"Offensive_Tree_4" ,"attribute":"Increases Mana Shield by #"				,"modifier":10	,"point":"Decay"		,"unlocks":"Offensive_Tree_5"},
			{"node_id":"Offensive_Tree_5" ,"attribute":"Increases Mana by #"					,"modifier":5	,"point":"Bull"			,"unlocks":""},
			{"node_id":"Offensive_Tree_6" ,"attribute":"Increases Crit Chance by #"				,"modifier":0.5	,"point":"Storm"		,"unlocks":"Offensive_Tree_7"},
			{"node_id":"Offensive_Tree_7" ,"attribute":"Increases Health Regen by #"			,"modifier":1	,"point":"Inferno"		,"unlocks":"Offensive_Tree_8"},
			{"node_id":"Offensive_Tree_8" ,"attribute":"Increases Mana Regen by #"				,"modifier":1	,"point":"Blizzard"		,"unlocks":""},
			{"node_id":"Offensive_Tree_9" ,"attribute":"Increases Movement Speed by #"			,"modifier":10	,"point":"Corruption"	,"unlocks":""},
			//top side		
			{"node_id":"Offensive_Tree_10","attribute":"Increases Magic Find by #%"				,"modifier":5	,"point":"Inferno"		,"unlocks":"Offensive_Tree_11"},
			{"node_id":"Offensive_Tree_11","attribute":"Increases Movement Speed by #"			,"modifier":10	,"point":"Corruption"	,"unlocks":"Offensive_Tree_12"},
			{"node_id":"Offensive_Tree_12","attribute":"Increases Crit Damage by #"				,"modifier":2	,"point":"Storm"		,"unlocks":"Offensive_Tree_13,Offensive_Tree_15,Offensive_Tree_16"},
			{"node_id":"Offensive_Tree_13","attribute":"Increases Health Regen by #"			,"modifier":1	,"point":"Inferno"		,"unlocks":"Offensive_Tree_14"},
			{"node_id":"Offensive_Tree_14","attribute":"Increases Area of Effect by #"			,"modifier":10	,"point":"Bull"			,"unlocks":""},
			{"node_id":"Offensive_Tree_15","attribute":"Increases Mana by #"					,"modifier":5	,"point":"Bull"			,"unlocks":""},
			{"node_id":"Offensive_Tree_16","attribute":"increases weapon damage by #"			,"modifier":1	,"point":"Blizzard"		,"unlocks":""},
			//right side		
			{"node_id":"Offensive_Tree_17","attribute":"Increases Gold Find by #%"				,"modifier":10	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_18"},
			{"node_id":"Offensive_Tree_18","attribute":"Increases Mana Shield by #"				,"modifier":10	,"point":"Decay"		,"unlocks":"Offensive_Tree_19,Offensive_Tree_24"},
			{"node_id":"Offensive_Tree_19","attribute":"Increases Soul Find by #%"				,"modifier":5	,"point":"Inferno"		,"unlocks":"Offensive_Tree_20"},
			{"node_id":"Offensive_Tree_20","attribute":"Increases Gold Find by #%"				,"modifier":10	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_21"},
			{"node_id":"Offensive_Tree_21","attribute":"Increases Crit Chance by #"				,"modifier":0.5	,"point":"Storm"		,"unlocks":"Offensive_Tree_22"},
			{"node_id":"Offensive_Tree_22","attribute":"Increases Health by #"					,"modifier":10	,"point":"Decay"		,"unlocks":"Offensive_Tree_23"},
			{"node_id":"Offensive_Tree_23","attribute":"Increases Soul Find by #%"				,"modifier":5	,"point":"Inferno"		,"unlocks":""},
			{"node_id":"Offensive_Tree_24","attribute":"Increases Relic Charges on hit by #%"	,"modifier":5	,"point":"Corruption"	,"unlocks":""},
			//bottom side
			{"node_id":"Offensive_Tree_25","attribute":"Increases Speed by #%"					,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_26"},
			{"node_id":"Offensive_Tree_26","attribute":"Increases Relic Charges on hit by #%"	,"modifier":10	,"point":"Corruption"	,"unlocks":"Offensive_Tree_27"},
			{"node_id":"Offensive_Tree_27","attribute":"Increases Magic Find by #%"				,"modifier":5	,"point":"Inferno"		,"unlocks":"Offensive_Tree_28,Offensive_Tree_30"},
			{"node_id":"Offensive_Tree_28","attribute":"Increases Health by #"					,"modifier":10	,"point":"Decay"		,"unlocks":"Offensive_Tree_29"},
			{"node_id":"Offensive_Tree_29","attribute":"Increases Area of Effect by #"			,"modifier":10	,"point":"Bull"			,"unlocks":""},
			{"node_id":"Offensive_Tree_30","attribute":"Increases Mana Regen by #"				,"modifier":1	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_31"},
			{"node_id":"Offensive_Tree_31","attribute":"Increases Relic Charges on hit by #%"	,"modifier":5	,"point":"Corruption"	,"unlocks":"Offensive_Tree_32"},
			{"node_id":"Offensive_Tree_32","attribute":"Increases Crit Damage By #"				,"modifier":2	,"point":"Storm"		,"unlocks":""},
			//Inferno req 3
			{"node_id":"Offensive_Tree_33","attribute":"Increases Burn Damage by #"								,"modifier":0.5	,"point":"Inferno"		,"unlocks":"Offensive_Tree_34","Inferno":3},
			{"node_id":"Offensive_Tree_34","attribute":"Increases Fire Damage by #%"							,"modifier":5	,"point":"Inferno"		,"unlocks":"Offensive_Tree_35"},
			{"node_id":"Offensive_Tree_35","attribute":"Increases Burn Damage by #"								,"modifier":0.5	,"point":"Inferno"		,"unlocks":"Offensive_Tree_36,Offensive_Tree_37"},
			{"node_id":"Offensive_Tree_36","attribute":"Increases Fire Damage by #%"							,"modifier":5	,"point":"Inferno"		,"unlocks":""},
			{"node_id":"Offensive_Tree_37","attribute":"Increases Fire Damage by #%"							,"modifier":5	,"point":"Inferno"		,"unlocks":"Offensive_Tree_38,Offensive_Tree_39"},
			{"node_id":"Offensive_Tree_38","attribute":"Fire Skills have a #% chance on hit to Burn enemies"	,"modifier":15	,"point":""				,"unlocks":""},
			{"node_id":"Offensive_Tree_39","attribute":"Increases Burn Damage by #"								,"modifier":0.5	,"point":"Inferno"		,"unlocks":""},
			//Inferno req 7
			{"node_id":"Offensive_Tree_40","attribute":"Increases Burn Damage by #"				,"modifier":1	,"point":"Inferno"	,"unlocks":"Offensive_Tree_41","Inferno":7},
			{"node_id":"Offensive_Tree_41","attribute":"Increases Fire Damage by #%"			,"modifier":10	,"point":"Inferno"	,"unlocks":"Offensive_Tree_42"},
			{"node_id":"Offensive_Tree_42","attribute":"Increases Burn Damage by #"				,"modifier":1	,"point":"Inferno"	,"unlocks":"Offensive_Tree_43"},
			{"node_id":"Offensive_Tree_43","attribute":"Increases Fire Damage by #%"			,"modifier":10	,"point":"Inferno"	,"unlocks":"Offensive_Tree_44"},
			{"node_id":"Offensive_Tree_44","attribute":"When enemies die from burning damage they spread the same Burn to enemies in a 300 Radius"	,"modifier":5	,"point":""		,"unlocks":""},			
			//Inferno req 11
			{"node_id":"Offensive_Tree_45","attribute":"Increases Fire Penetration by #"						,"modifier":5	,"point":"Inferno"	,"unlocks":"Offensive_Tree_46","Inferno":11},
			{"node_id":"Offensive_Tree_46","attribute":"Increases Fire Damage by #%"							,"modifier":10	,"point":"Inferno"	,"unlocks":"Offensive_Tree_47"},
			{"node_id":"Offensive_Tree_47","attribute":"Increases Fire Penetration by #"						,"modifier":5	,"point":"Inferno"	,"unlocks":"Offensive_Tree_48,Offensive_Tree_49"},
			{"node_id":"Offensive_Tree_48","attribute":"Increases Fire Damage by #%"							,"modifier":10	,"point":"Inferno"	,"unlocks":""},
			{"node_id":"Offensive_Tree_49","attribute":"Increases Fire Damage by #%"							,"modifier":10	,"point":"Inferno"	,"unlocks":"Offensive_Tree_50,Offensive_Tree_51"},
			{"node_id":"Offensive_Tree_50","attribute":"Increases Fire Penetration by #"						,"modifier":50	,"point":""			,"unlocks":""},
			{"node_id":"Offensive_Tree_51","attribute":"Increases Fire Penetration by #"						,"modifier":5	,"point":"Inferno"	,"unlocks":""},
			//Inferno req 15
			{"node_id":"Offensive_Tree_52","attribute":"Grants #% More Fire Damage"								,"modifier":5	,"point":"Inferno"	,"unlocks":"Offensive_Tree_53","Inferno":15},
			{"node_id":"Offensive_Tree_53","attribute":"Increases Area of Effect by #"							,"modifier":25	,"point":"Inferno"	,"unlocks":"Offensive_Tree_54"},
			{"node_id":"Offensive_Tree_54","attribute":"Increases Area of Effect by #"							,"modifier":25	,"point":"Inferno"	,"unlocks":"Offensive_Tree_55,Offensive_Tree_56"},			
			{"node_id":"Offensive_Tree_55","attribute":"Skills have a 50% chance on hit to spawn a fiery combustion at enemies location that deals 5 Fire Damage per player level with 200 Radius"							,"modifier":0	,"point":""	,"Inferno":15	,"unlocks":""},
			{"node_id":"Offensive_Tree_56","attribute":"Grants #% More Fire Damage"								,"modifier":5	,"point":"Inferno"	,"unlocks":""},
			//Storm req 3
			{"node_id":"Offensive_Tree_57" ,"attribute":"Increases Lightning Damage by #%"		,"modifier":5	,"point":"Storm"		,"unlocks":"Offensive_Tree_58","Storm":3},
			{"node_id":"Offensive_Tree_58" ,"attribute":"Increases Crit Chance by #"			,"modifier":0.5	,"point":"Storm"		,"unlocks":"Offensive_Tree_59"},
			{"node_id":"Offensive_Tree_59" ,"attribute":"Increases Lightning Damage by #%"		,"modifier":5	,"point":"Storm"		,"unlocks":"Offensive_Tree_60,Offensive_Tree_62"},
			{"node_id":"Offensive_Tree_60" ,"attribute":"Increases Crit Damage by #"			,"modifier":2	,"point":"Storm"		,"unlocks":"Offensive_Tree_61"},
			{"node_id":"Offensive_Tree_61" ,"attribute":"Enemies crit with Lightning Damage have a 25% chance to become conduits, which echo the Skills effect (this effect can be repeated from the echo)."	,"modifier":0	,"point":""		,"unlocks":""},
			{"node_id":"Offensive_Tree_62" ,"attribute":"Increases Crit Chance by #"			,"modifier":0.5	,"point":"Storm"		,"unlocks":""},
			//Storm req 6
			{"node_id":"Offensive_Tree_63" ,"attribute":"Increases Lightning Penetration by #"	,"modifier":3	,"point":"Storm"		,"unlocks":"Offensive_Tree_64","Storm":7},
			{"node_id":"Offensive_Tree_64" ,"attribute":"Increases Lightning Penetration by #"	,"modifier":3	,"point":"Storm"		,"unlocks":"Offensive_Tree_65,Offensive_Tree_67"},
			{"node_id":"Offensive_Tree_65" ,"attribute":"Increases Lightning Damage by #%"		,"modifier":5	,"point":"Storm"		,"unlocks":"Offensive_Tree_66"},
			{"node_id":"Offensive_Tree_66" ,"attribute":"Lightning Skills have +# base Lightning Damage"					,"modifier":1	,"point":""		,"unlocks":""},
			{"node_id":"Offensive_Tree_67" ,"attribute":"Increases Lightning Damage by #%"		,"modifier":5	,"point":"Storm"		,"unlocks":""},
			//Storm req 10
			{"node_id":"Offensive_Tree_68" ,"attribute":"Increases Lightning Damage by #%"		,"modifier":20	,"point":"Storm"		,"unlocks":"Offensive_Tree_69","Storm":11},
			{"node_id":"Offensive_Tree_69" ,"attribute":"Increases Electrocute Damage by #"		,"modifier":1	,"point":"Storm"		,"unlocks":"Offensive_Tree_70,Offensive_Tree_72"},
			{"node_id":"Offensive_Tree_70" ,"attribute":"Increases Lightning Damage by #%"		,"modifier":20	,"point":"Storm"		,"unlocks":"Offensive_Tree_71"},
			{"node_id":"Offensive_Tree_71" ,"attribute":"Skills have a 20% chance to release a lightning crystal convergence at target location that deals # Lightning Damage per player level after a 1 second delay and has 150 radius"					,"modifier":2	,"point":""		,"unlocks":""},
			{"node_id":"Offensive_Tree_72" ,"attribute":"Increases Electrocute Damage by #"		,"modifier":1	,"point":"Storm"		,"unlocks":""},
			//Storm req 15
			{"node_id":"Offensive_Tree_73" ,"attribute":"Grants #% More Lightning Damage"		,"modifier":5	,"point":"Storm"		,"unlocks":"Offensive_Tree_74","Storm":15},
			{"node_id":"Offensive_Tree_74" ,"attribute":"Grants #% More Lightning Damage"		,"modifier":5	,"point":"Storm"		,"unlocks":"Offensive_Tree_75,Offensive_Tree_77"},
			{"node_id":"Offensive_Tree_75" ,"attribute":"Grants #% More Lightning Damage"		,"modifier":5	,"point":"Storm"		,"unlocks":"Offensive_Tree_76"},
			{"node_id":"Offensive_Tree_76" ,"attribute":"Grants a persistent Aura (triggered by receiving damage) that deals # Lightning Damage per second per player level and has a 250 radius"					,"modifier":3	,"point":""		,"unlocks":""},
			{"node_id":"Offensive_Tree_77" ,"attribute":"Grants #% More Lightning Damage"		,"modifier":5	,"point":"Storm"		,"unlocks":""},
			//Bull req 3
			{"node_id":"Offensive_Tree_78" ,"attribute":"Increases Physical Damage by #%"		,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_79","Bull":3},
			{"node_id":"Offensive_Tree_79" ,"attribute":"Increases Area of Effect by #"			,"modifier":10	,"point":"Bull"			,"unlocks":"Offensive_Tree_81,Offensive_Tree_80"},
			{"node_id":"Offensive_Tree_80" ,"attribute":"Increases Area of Effect by #"			,"modifier":10	,"point":"Bull"			,"unlocks":""},
			{"node_id":"Offensive_Tree_81" ,"attribute":"Increases Physical Damage by #%"		,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_82"},
			{"node_id":"Offensive_Tree_82" ,"attribute":"Increases Area of Effect by #"	,"modifier":10	,"point":"Bull"		,"unlocks":"Offensive_Tree_83"},
			{"node_id":"Offensive_Tree_83" ,"attribute":"Increases Physical Damage by #%"		,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_84"},
			{"node_id":"Offensive_Tree_84" ,"attribute":"Enemies killed have a 10% chance to leave a pool of blood that deals # Physical Damage per player level per second for 3 seconds and has a 150 radius"					,"modifier":2	,"point":""		,"unlocks":""},
			//Bull req 6
			{"node_id":"Offensive_Tree_85" ,"attribute":"Increases Physical Damage by #%"		,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_86","Bull":6},
			{"node_id":"Offensive_Tree_86" ,"attribute":"Increases Physical Penetration by #"	,"modifier":3	,"point":"Bull"			,"unlocks":"Offensive_Tree_87,Offensive_Tree_90"},
			{"node_id":"Offensive_Tree_87" ,"attribute":"Increases Physical Damage by #%"		,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_88"},
			{"node_id":"Offensive_Tree_88" ,"attribute":"Increases Physical Penetration by #"	,"modifier":3	,"point":"Bull"			,"unlocks":"Offensive_Tree_89"},
			{"node_id":"Offensive_Tree_89" ,"attribute":"Skills have a 10% chance on hit to release an orb at player location that fires beams after a 1 second delay. The beams converge to deal # Physical Damage per player level with a 100 radius"				,"modifier":3	,"point":""		,"unlocks":""},
			{"node_id":"Offensive_Tree_90" ,"attribute":"Increases Physical Damage by #%"		,"modifier":5	,"point":"Bull"			,"unlocks":""},
			//Bull req 10
			{"node_id":"Offensive_Tree_91" ,"attribute":"Increases Physical Damage by #%"		,"modifier":20	,"point":"Bull"			,"unlocks":"Offensive_Tree_92","Bull":10},
			{"node_id":"Offensive_Tree_92" ,"attribute":"Increases Physical Penetration by #"	,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_93,Offensive_Tree_94"},
			{"node_id":"Offensive_Tree_93" ,"attribute":"Increases Physical Damage by #%"		,"modifier":20	,"point":"Bull"			,"unlocks":""},
			{"node_id":"Offensive_Tree_94" ,"attribute":"Increases Physical Damage by #%"		,"modifier":20	,"point":"Bull"			,"unlocks":"Offensive_Tree_95"},
			{"node_id":"Offensive_Tree_95" ,"attribute":"Increases Physical Penetration by #"	,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_96"},
			{"node_id":"Offensive_Tree_96" ,"attribute":"Increases Physical Damage by #%"		,"modifier":20	,"point":"Bull"			,"unlocks":"Offensive_Tree_97"},
			{"node_id":"Offensive_Tree_97" ,"attribute":"Increases Physical Penetration by #"	,"modifier":50	,"point":""				,"unlocks":""},
			//Bull req 15
			{"node_id":"Offensive_Tree_98" ,"attribute":"Increases Area of Effect by #"			,"modifier":50	,"point":"Bull"			,"unlocks":"Offensive_Tree_99","Bull":15},
			{"node_id":"Offensive_Tree_99" ,"attribute":"Grants #% More Physical Damage"		,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_100"},
			{"node_id":"Offensive_Tree_100" ,"attribute":"Grants #% More Physical Damage"		,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_101"},
			{"node_id":"Offensive_Tree_101" ,"attribute":"Grants #% More Physical Damage"		,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_102"},
			{"node_id":"Offensive_Tree_102" ,"attribute":"Skills have a 25% chance on hit to release a blood funnel, dealing # Physical Damage per player level to those it hits"				,"modifier":3	,"point":""		,"unlocks":""},
			//Blizzard req 3
			{"node_id":"Offensive_Tree_103" ,"attribute":"Increases Cold Penetration by #"		,"modifier":3	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_104","Blizzard":3},
			{"node_id":"Offensive_Tree_104" ,"attribute":"Increases Cold Damage by #%"			,"modifier":5	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_105,Offensive_Tree_107"},
			{"node_id":"Offensive_Tree_105" ,"attribute":"Increases Cold Penetration by #"		,"modifier":3	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_106"},
			{"node_id":"Offensive_Tree_106" ,"attribute":"Has a 10% chance on hit to release an Icestorm at target location dealing # Cold Damage per player level per second for 3 seconds with 150 radius"					,"modifier":2	,"point":""		,"unlocks":""},
			{"node_id":"Offensive_Tree_107" ,"attribute":"Increases Cold Penetration by #"		,"modifier":3	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_108"},
			{"node_id":"Offensive_Tree_108" ,"attribute":"Increases Cold Damage by #%"			,"modifier":5	,"point":"Blizzard"		,"unlocks":""},
			//Blizzard req 7
			{"node_id":"Offensive_Tree_109" ,"attribute":"Increases Cold Damage by #%"			,"modifier":10	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_110","Blizzard":7},
			{"node_id":"Offensive_Tree_110" ,"attribute":"Increases Cold Penetration by #"		,"modifier":3	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_111"},
			{"node_id":"Offensive_Tree_111" ,"attribute":"Increases Cold Damage by #%"			,"modifier":10	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_112"},
			{"node_id":"Offensive_Tree_112" ,"attribute":"Increases Cold Penetration by #"		,"modifier":3	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_113"},
			{"node_id":"Offensive_Tree_113" ,"attribute":"Increases Cold Penetration by #"		,"modifier":30	,"point":""		,"unlocks":""},
			//Blizzard req 10
			{"node_id":"Offensive_Tree_114" ,"attribute":"Grants #% More Cold Damage"			,"modifier":5	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_115","Blizzard":10},
			{"node_id":"Offensive_Tree_115" ,"attribute":"Increases Cold Damage by #%"			,"modifier":15	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_116,Offensive_Tree_118"},
			{"node_id":"Offensive_Tree_116" ,"attribute":"Grants #% More Cold Damage"			,"modifier":5	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_117"},
			{"node_id":"Offensive_Tree_117" ,"attribute":"Enemies slain have a 25% chance to release a ring of frozen daggers that deal # Cold Damage per player level on hit"					,"modifier":5	,"point":""		,"unlocks":""},
			{"node_id":"Offensive_Tree_118" ,"attribute":"Grants #% More Cold Damage"			,"modifier":5	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_119"},
			{"node_id":"Offensive_Tree_119" ,"attribute":"Increases Cold Damage by #%"			,"modifier":15	,"point":"Blizzard"		,"unlocks":""},
			//Blizzard req 15
			{"node_id":"Offensive_Tree_120" ,"attribute":"Grants #% More Cold Damage"		,"modifier":5	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_121","Blizzard":15},
			{"node_id":"Offensive_Tree_121" ,"attribute":"Grants #% More Cold Damage"		,"modifier":5	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_122"},
			{"node_id":"Offensive_Tree_122" ,"attribute":"Grants #% More Cold Damage"		,"modifier":5	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_123"},
			{"node_id":"Offensive_Tree_123" ,"attribute":"Grants a persistent Aura (triggered by receving damage) that deals # Cold Damage per player level with 250 radius"					,"modifier":3	,"point":""		,"unlocks":""},
			//Corruption req 3
			{"node_id":"Offensive_Tree_124","attribute":"Increases Chaos Damage by #%" 			,"modifier":5 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_125","Corruption":3},
			{"node_id":"Offensive_Tree_125","attribute":"Increases Chaos Penetration by #" 		,"modifier":3 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_126"},
			{"node_id":"Offensive_Tree_126","attribute":"Increases Chaos Damage by #%" 			,"modifier":5 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_127,Offensive_Tree_129"},
			{"node_id":"Offensive_Tree_127","attribute":"Increases Chaos Damage by #%" 			,"modifier":5 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_128"},
			{"node_id":"Offensive_Tree_128","attribute":"Enemies killed have a 25% chance to spawn Void Creeplings that slowly chase enemies and explode on contact for # Chaos Damage per player level with 250 radius" ,"modifier":3 ,"point":"" ,"unlocks":""},
			{"node_id":"Offensive_Tree_129","attribute":"Increases Chaos Penetration by #" 		,"modifier":3 	,"point":"Corruption" 	,"unlocks":""},
			//Corruption req 6
			{"node_id":"Offensive_Tree_130","attribute":"Increases Area of Effect by #" 		,"modifier":10 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_131","Corruption":6},
			{"node_id":"Offensive_Tree_131","attribute":"Increases Chaos Damage by #%" 			,"modifier":10 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_132"},
			{"node_id":"Offensive_Tree_132","attribute":"Increases Area of Effect by #" 		,"modifier":10 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_133"},
			{"node_id":"Offensive_Tree_133","attribute":"Increases Chaos Damage by #%" 			,"modifier":10 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_134"},
			{"node_id":"Offensive_Tree_134","attribute":"Skills have a 20% chance on hit to create an explosion at target location that deals # Chaos Damager per player level with 150 radius after a .5 second delay" ,"modifier":3 ,"point":"" ,"unlocks":""},
			//Corruption req 9
			{"node_id":"Offensive_Tree_135","attribute":"Increases Chaos Penetration by #" 		,"modifier":5 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_136","Corruption":9},
			{"node_id":"Offensive_Tree_136","attribute":"Increases Chaos Damage by #%" 			,"modifier":10 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_137"},
			{"node_id":"Offensive_Tree_137","attribute":"Increases Chaos Penetration by #" 		,"modifier":5 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_138,Offensive_Tree_140"},
			{"node_id":"Offensive_Tree_138","attribute":"Increases Chaos Damage by #%" 			,"modifier":10 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_139"},
			{"node_id":"Offensive_Tree_139","attribute":"Increases Chaos Penetration by #" 		,"modifier":30 	,"point":"" 			,"unlocks":""},
			{"node_id":"Offensive_Tree_140","attribute":"Increases Chaos Damage by #%" 			,"modifier":10 	,"point":"Corruption" 	,"unlocks":""},
			//Corruption req 15
			{"node_id":"Offensive_Tree_141","attribute":"Grants #% More Chaos Damage" 			,"modifier":5 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_142","Corruption":15},
			{"node_id":"Offensive_Tree_142","attribute":"Grants #% More Chaos Damage" 			,"modifier":5 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_143,Offensive_Tree_145"},
			{"node_id":"Offensive_Tree_143","attribute":"Increases Area of Effect by #" 		,"modifier":25 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_144"},
			{"node_id":"Offensive_Tree_144","attribute":"A Chaotic Beam follows the player dealing # Chaos Damage per player level per second with 250 radius" ,"modifier":3 ,"point":"" ,"unlocks":""},
			{"node_id":"Offensive_Tree_145","attribute":"Grants #% More Chaos Damage" 			,"modifier":5 	,"point":"Corruption" 	,"unlocks":""},
			//Decay req 3
			{"node_id":"Offensive_Tree_146","attribute":"Increases Area of Effect by #" 		,"modifier":10	,"point":"Decay" 		,"unlocks":"Offensive_Tree_147","Decay":3},
			{"node_id":"Offensive_Tree_147","attribute":"Increases Poison Damage by #%"		 	,"modifier":5 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_148,Offensive_Tree_149"},
			{"node_id":"Offensive_Tree_148","attribute":"Increases Area of Effect by #" 		,"modifier":10 	,"point":"Decay" 		,"unlocks":""},
			{"node_id":"Offensive_Tree_149","attribute":"Increases Area of Effect by #" 		,"modifier":10 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_150"},
			{"node_id":"Offensive_Tree_150","attribute":"Increases Poison Damage by #%" 		,"modifier":5 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_151"},
			{"node_id":"Offensive_Tree_151","attribute":"Increases Area of Effect by #" 		,"modifier":10 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_152"},
			{"node_id":"Offensive_Tree_152","attribute":"Enemies killed have a 25% chance to explode for # Poison Damage per player level with 200 radius" ,"modifier":3 ,"point":"" ,"unlocks":""},
			//Decay req 6
			{"node_id":"Offensive_Tree_153","attribute":"Grants Increased Speed #%" 			,"modifier":5 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_154","Decay":6},
			{"node_id":"Offensive_Tree_154","attribute":"Grants Increased Speed #%" 			,"modifier":5 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_155"},
			{"node_id":"Offensive_Tree_155","attribute":"Grants Increased Speed #%" 			,"modifier":5 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_156"},
			{"node_id":"Offensive_Tree_156","attribute":"Skills have a 10% chance to spawn a poisonous Wolf that has 10 Health per palyer level and deals # Poison Damage per player level" ,"modifier":1 ,"point":"" ,"unlocks":""},
			//Decay req 9
			{"node_id":"Offensive_Tree_157","attribute":"Increases Poison Damage by #%" 		,"modifier":10 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_158","Decay":9},
			{"node_id":"Offensive_Tree_158","attribute":"Increases Poison Damage by #%" 		,"modifier":10 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_159,Offensive_Tree_160"},
			{"node_id":"Offensive_Tree_159","attribute":"Increases Poison Penetration by #" 	,"modifier":5 	,"point":"Decay" 		,"unlocks":""},
			{"node_id":"Offensive_Tree_160","attribute":"Increases Poison Damage by #%"	 		,"modifier":10 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_161"},
			{"node_id":"Offensive_Tree_161","attribute":"Increases Poison Damage by #%" 		,"modifier":10 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_162"},
			{"node_id":"Offensive_Tree_162","attribute":"Increases Poison Penetration by #" 	,"modifier":5 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_163"},
			{"node_id":"Offensive_Tree_163","attribute":"Skills have a 10% chance on hit to release 3 poison daggers that deal # Poison Damage per player level on hit" ,"modifier":2 ,"point":"" ,"unlocks":""},
			//Decay req 15
			{"node_id":"Offensive_Tree_164","attribute":"Grants #% More Poison Damage" 			,"modifier":5 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_165","Decay":15},
			{"node_id":"Offensive_Tree_165","attribute":"Grants #% More Poison Damage" 			,"modifier":5 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_166"},
			{"node_id":"Offensive_Tree_166","attribute":"Grants #% More Poison Damage" 			,"modifier":5 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_167"},
			{"node_id":"Offensive_Tree_167","attribute":"Enemies killed spawn a poisonous enclosure around enemies that deals # Poison Damage per player level in a 150 radius after a 1 second delay" ,"modifier":3 ,"point":"" ,"unlocks":""}

		]
	},
	{	"Name":"Defensive Tree",
		"Phoenix":[,,,"Defensive_Tree_33",,,,"Defensive_Tree_40",,,,"Defensive_Tree_45",,,,"Defensive_Tree_52"],
		"Thunder":[,,,"Defensive_Tree_57",,,"Defensive_Tree_63",,,,"Defensive_Tree_68",,,,,"Defensive_Tree_73"],
		"Ox":[,,,"Defensive_Tree_78",,,"Defensive_Tree_85",,,,"Defensive_Tree_91",,,,,"Defensive_Tree_98"],
		"Frozen":[,,,"Defensive_Tree_103",,,"Defensive_Tree_109",,,"Defensive_Tree_114",,,,,"Defensive_Tree_120"],
		"Viper":[,,,"Defensive_Tree_146",,,"Defensive_Tree_153",,,"Defensive_Tree_157",,,,,,"Defensive_Tree_164"],
		"Void":[,,,"Defensive_Tree_124",,,"Defensive_Tree_130",,,"Defensive_Tree_135",,,,,,"Defensive_Tree_141"],
		"Nodes":[
			//left side
			{"node_id":"Defensive_Tree_1" ,"attribute":"Increases Dodge Chance by #"							,"modifier":1	,"point":"Viper"		,"unlocks":"Defensive_Tree_2,Defensive_Tree_9"},
			{"node_id":"Defensive_Tree_2" ,"attribute":"Increases Block Chance by #%"							,"modifier":1	,"point":"Ox"			,"unlocks":"Defensive_Tree_3,Defensive_Tree_6"},
			{"node_id":"Defensive_Tree_3" ,"attribute":"Increases Mana by #"									,"modifier":3	,"point":"Frozen"		,"unlocks":"Defensive_Tree_4"},
			{"node_id":"Defensive_Tree_4" ,"attribute":"Increases Defence by #"								,"modifier":1	,"point":"Viper"		,"unlocks":"Defensive_Tree_5"},
			{"node_id":"Defensive_Tree_5" ,"attribute":"Increases Physical Resistance by #"					,"modifier":3	,"point":"Ox"			,"unlocks":""},
			{"node_id":"Defensive_Tree_6" ,"attribute":"Increases Lightning Resistance by #"					,"modifier":3	,"point":"Thunder"		,"unlocks":"Defensive_Tree_7"},
			{"node_id":"Defensive_Tree_7" ,"attribute":"Increases Fire Resistance by #"						,"modifier":3	,"point":"Phoenix"		,"unlocks":"Defensive_Tree_8"},
			{"node_id":"Defensive_Tree_8" ,"attribute":"Increases Cold Resistance by #"						,"modifier":3	,"point":"Frozen"		,"unlocks":""},
			{"node_id":"Defensive_Tree_9" ,"attribute":"Increases Chaos Resistance by #"						,"modifier":3	,"point":"Void"	,"unlocks":""},
			//top side		
			{"node_id":"Defensive_Tree_10","attribute":"Increases Fire Resistance by #"						,"modifier":3	,"point":"Phoenix"		,"unlocks":"Defensive_Tree_11"},
			{"node_id":"Defensive_Tree_11","attribute":"Increases Iron Skin by #"								,"modifier":5	,"point":"Void"	,"unlocks":"Defensive_Tree_12"},
			{"node_id":"Defensive_Tree_12","attribute":"Increases Mana Shield by #"							,"modifier":5	,"point":"Thunder"		,"unlocks":"Defensive_Tree_13,Defensive_Tree_15,Defensive_Tree_16"},
			{"node_id":"Defensive_Tree_13","attribute":"Increases Health Regen by #"							,"modifier":1	,"point":"Phoenix"		,"unlocks":"Defensive_Tree_14"},
			{"node_id":"Defensive_Tree_14","attribute":"Increases Block Damage Reduction by #%"				,"modifier":1	,"point":"Ox"			,"unlocks":""},
			{"node_id":"Defensive_Tree_15","attribute":"Increases Physical Resistance by #"					,"modifier":3	,"point":"Ox"			,"unlocks":""},
			{"node_id":"Defensive_Tree_16","attribute":"increases Mana by #"									,"modifier":3	,"point":"Frozen"		,"unlocks":""},
			//right side	
			{"node_id":"Defensive_Tree_17"	,"attribute":"Increases Cold Resistance by #"						,"modifier":3	,"point":"Frozen"		,"unlocks":"Defensive_Tree_18"},
			{"node_id":"Defensive_Tree_18"	,"attribute":"Increases Dodge Chance by #%"							,"modifier":1	,"point":"Viper"		,"unlocks":"Defensive_Tree_19,Defensive_Tree_24"},
			{"node_id":"Defensive_Tree_19"	,"attribute":"Increases Health by #"								,"modifier":10	,"point":"Phoenix"		,"unlocks":"Defensive_Tree_20"},
			{"node_id":"Defensive_Tree_20"	,"attribute":"Increases Glancing Blow by #%"						,"modifier":1	,"point":"Frozen"		,"unlocks":"Defensive_Tree_21"},
			{"node_id":"Defensive_Tree_21"	,"attribute":"Increases Mana Shield by #"							,"modifier":5	,"point":"Thunder"		,"unlocks":"Defensive_Tree_22"},
			{"node_id":"Defensive_Tree_22"	,"attribute":"Increases Poison Resistance by #"						,"modifier":3	,"point":"Viper"		,"unlocks":"Defensive_Tree_23"},
			{"node_id":"Defensive_Tree_23"	,"attribute":"Increases Health by #"								,"modifier":10	,"point":"Phoenix"		,"unlocks":""},
			{"node_id":"Defensive_Tree_24"	,"attribute":"Increases Chaos Resistance by #"						,"modifier":3	,"point":"Void"			,"unlocks":""},
			//bottom side
			{"node_id":"Defensive_Tree_25"	,"attribute":"Increases Block Chance by #%"							,"modifier":1	,"point":"Ox"			,"unlocks":"Defensive_Tree_26"},
			{"node_id":"Defensive_Tree_26"	,"attribute":"Increases Iron Skin by #"								,"modifier":5	,"point":"Void"			,"unlocks":"Defensive_Tree_27"},
			{"node_id":"Defensive_Tree_27"	,"attribute":"Increases Health Regen by #"							,"modifier":1	,"point":"Phoenix"		,"unlocks":"Defensive_Tree_28,Defensive_Tree_30"},
			{"node_id":"Defensive_Tree_28"	,"attribute":"Increases Poison Resistance by #"						,"modifier":3	,"point":"Viper"		,"unlocks":"Defensive_Tree_29"},
			{"node_id":"Defensive_Tree_29"	,"attribute":"Increases Block Chance by #%"							,"modifier":1	,"point":"Ox"			,"unlocks":""},
			{"node_id":"Defensive_Tree_30"	,"attribute":"Increases Glancing Blow by #%"						,"modifier":1	,"point":"Frozen"		,"unlocks":"Defensive_Tree_31"},
			{"node_id":"Defensive_Tree_31"	,"attribute":"Increases Iron Skin by #"								,"modifier":5	,"point":"Void"			,"unlocks":"Defensive_Tree_32"},
			{"node_id":"Defensive_Tree_32"	,"attribute":"Increases Lightning Resistance by #"					,"modifier":3	,"point":"Thunder"		,"unlocks":""},
			//Phoenix req 3
			{"node_id":"Defensive_Tree_33"	,"attribute":"Increases Health on Hit by #"							,"modifier":1	,"point":"Phoenix"		,"unlocks":"Defensive_Tree_34","Phoenix":3},
			{"node_id":"Defensive_Tree_34"	,"attribute":"Increases Fire Resistance by #"						,"modifier":3	,"point":"Phoenix"		,"unlocks":"Defensive_Tree_35"},
			{"node_id":"Defensive_Tree_35"	,"attribute":"Increases Health on Hit by #"							,"modifier":1	,"point":"Phoenix"		,"unlocks":"Defensive_Tree_36,Defensive_Tree_37"},
			{"node_id":"Defensive_Tree_36"	,"attribute":"Increases Fire Resistance by #"						,"modifier":3	,"point":"Phoenix"		,"unlocks":""},
			{"node_id":"Defensive_Tree_37"	,"attribute":"Increases Fire Resistance by #"						,"modifier":3	,"point":"Phoenix"		,"unlocks":"Defensive_Tree_38,Defensive_Tree_39"},
			{"node_id":"Defensive_Tree_38"	,"attribute":"Fire Skills have a #% chance on kill to release a fiery phoenix from the ashes dealing damage equal to Fire Resistance in a 250 radius"	,"modifier":50	,"point":""				,"unlocks":""},
			{"node_id":"Defensive_Tree_39"	,"attribute":"Increases Health on Hit by #"							,"modifier":1	,"point":"Phoenix"		,"unlocks":""},
			//Phoenix req 7
			{"node_id":"Defensive_Tree_40"	,"attribute":"Increases Health Regen by #"							,"modifier":1	,"point":"Phoenix"		,"unlocks":"Defensive_Tree_41","Phoenix":7},
			{"node_id":"Defensive_Tree_41"	,"attribute":"Increases Fire Resistance by #"						,"modifier":5	,"point":"Phoenix"		,"unlocks":"Defensive_Tree_42"},
			{"node_id":"Defensive_Tree_42"	,"attribute":"Increases Health Regen by #"							,"modifier":1	,"point":"Phoenix"		,"unlocks":"Defensive_Tree_43"},
			{"node_id":"Defensive_Tree_43"	,"attribute":"Increases Fire Resistance by #"						,"modifier":5	,"point":"Phoenix"		,"unlocks":"Defensive_Tree_44"},
			{"node_id":"Defensive_Tree_44"	,"attribute":"There is a 5% upon being hit to gain Health Regen equal to player level x# for 5 seconds"	,"modifier":3	,"point":""		,"unlocks":""},			
			//Phoenix req 11
			{"node_id":"Defensive_Tree_45"	,"attribute":"Increases Health by #"								,"modifier":15	,"point":"Phoenix"		,"unlocks":"Defensive_Tree_46","Phoenix":11},
			{"node_id":"Defensive_Tree_46"	,"attribute":"Increases Fire Resistance by #"						,"modifier":10	,"point":"Phoenix"		,"unlocks":"Defensive_Tree_47"},
			{"node_id":"Defensive_Tree_47"	,"attribute":"Increases Health by #"							,"modifier":15	,"point":"Phoenix"		,"unlocks":"Defensive_Tree_48,Defensive_Tree_49"},
			{"node_id":"Defensive_Tree_48"	,"attribute":"Increases Fire Resistance by #"						,"modifier":10	,"point":"Phoenix"		,"unlocks":""},
			{"node_id":"Defensive_Tree_49"	,"attribute":"Increases Fire Resistance by #"						,"modifier":10	,"point":"Phoenix"		,"unlocks":"Defensive_Tree_50,Defensive_Tree_51"},
			{"node_id":"Defensive_Tree_50"	,"attribute":"Has a chance equal to Fire Damage Leech to conjure fiery rocks beneath every enemey in a 1000 radius and deal # Fire Damage per player level"	,"modifier":2	,"point":""			,"unlocks":""},
			{"node_id":"Defensive_Tree_51"	,"attribute":"Increases Health by #"								,"modifier":15	,"point":"Phoenix"		,"unlocks":""},
			//Phoenix req 15
			{"node_id":"Defensive_Tree_52"	,"attribute":"Grants #% Melt Chance"								,"modifier":5	,"point":"Phoenix"		,"unlocks":"Defensive_Tree_53","Phoenix":15},
			{"node_id":"Defensive_Tree_53"	,"attribute":"Grants #% Melt Chance"								,"modifier":5	,"point":"Phoenix"		,"unlocks":"Defensive_Tree_54"},
			{"node_id":"Defensive_Tree_54"	,"attribute":"Grants #% Melt Chance"								,"modifier":5	,"point":"Phoenix"		,"unlocks":"Defensive_Tree_55,Defensive_Tree_56"},			
			{"node_id":"Defensive_Tree_55"	,"attribute":"Grants #% Melt Chance"								,"modifier":25	,"point":""	,"Phoenix":15	,"unlocks":""},
			{"node_id":"Defensive_Tree_56"	,"attribute":"Grants # Melt Duration"								,"modifier":0.5	,"point":"Phoenix"		,"unlocks":""},
			//Thunder req 3
			{"node_id":"Defensive_Tree_57" ,"attribute":"Increases Lightning Resistance by #"					,"modifier":3	,"point":"Thunder"		,"unlocks":"Defensive_Tree_58","Thunder":3},
			{"node_id":"Defensive_Tree_58" ,"attribute":"Increases Mana Shield by #"							,"modifier":5	,"point":"Thunder"		,"unlocks":"Defensive_Tree_59"},
			{"node_id":"Defensive_Tree_59" ,"attribute":"Increases Lightning Resistance by #"					,"modifier":3	,"point":"Thunder"		,"unlocks":"Defensive_Tree_60,Defensive_Tree_62"},
			{"node_id":"Defensive_Tree_60" ,"attribute":"Increases Mana Shield by #"							,"modifier":5	,"point":"Thunder"		,"unlocks":"Defensive_Tree_61"},
			{"node_id":"Defensive_Tree_61" ,"attribute":"#% chance upon being hit to restore Mana Shield to max","modifier":10	,"point":""			,"unlocks":""},
			{"node_id":"Defensive_Tree_62" ,"attribute":"Increases Mana Shield by #"							,"modifier":5	,"point":"Thunder"		,"unlocks":""},
			//Thunder req 6
			{"node_id":"Defensive_Tree_63" ,"attribute":"Increases Mana Shield on Hit by #"					,"modifier":5	,"point":"Thunder"		,"unlocks":"Defensive_Tree_64","Thunder":7},
			{"node_id":"Defensive_Tree_64" ,"attribute":"Increases Mana Shield on Hit by #"					,"modifier":5	,"point":"Thunder"		,"unlocks":"Defensive_Tree_65,Defensive_Tree_67"},
			{"node_id":"Defensive_Tree_65" ,"attribute":"Increases Mana Shield on Hit by #"					,"modifier":5	,"point":"Thunder"		,"unlocks":"Defensive_Tree_66"},
			{"node_id":"Defensive_Tree_66" ,"attribute":"Upon being hit for more than 20% of your Max Health in a single hit you will gain #% increased Mana Shield Regen for 2 seconds"	,"modifier":500	,"point":""		,"unlocks":""},
			{"node_id":"Defensive_Tree_67" ,"attribute":"Increases Mana Shield on Hit by #"					,"modifier":5	,"point":"Thunder"		,"unlocks":""},
			//Thunder req 10
			{"node_id":"Defensive_Tree_68" ,"attribute":"Increases Lightning Resistance by #"					,"modifier":10	,"point":"Thunder"		,"unlocks":"Defensive_Tree_69","Thunder":11},
			{"node_id":"Defensive_Tree_69" ,"attribute":"Increases Mana Shield by #"							,"modifier":10	,"point":"Thunder"		,"unlocks":"Defensive_Tree_70,Defensive_Tree_72"},
			{"node_id":"Defensive_Tree_70" ,"attribute":"Increases Lightning Resistance by #"					,"modifier":10	,"point":"Thunder"		,"unlocks":"Defensive_Tree_71"},
			{"node_id":"Defensive_Tree_71" ,"attribute":"Skills have a 20% chance to release a lightning crystal convergence at target location that deals # Lightning Damage per player level after a 1 second delay and has 150 radius"					,"modifier":2	,"point":""		,"unlocks":""},
			{"node_id":"Defensive_Tree_72" ,"attribute":"Increases Lightning Resistance by #"					,"modifier":10	,"point":"Thunder"		,"unlocks":""},
			//Thunder req 15
			{"node_id":"Defensive_Tree_73" ,"attribute":"Increases Mana Shield Regen by #"						,"modifier":5	,"point":"Thunder"		,"unlocks":"Defensive_Tree_74","Thunder":15},
			{"node_id":"Defensive_Tree_74" ,"attribute":"Increases Mana Shield Regen by #"						,"modifier":5	,"point":"Thunder"		,"unlocks":"Defensive_Tree_75,Defensive_Tree_77"},
			{"node_id":"Defensive_Tree_75" ,"attribute":"Increases Mana Shield Regen by #"						,"modifier":5	,"point":"Thunder"		,"unlocks":"Defensive_Tree_76"},
			{"node_id":"Defensive_Tree_76" ,"attribute":"Increases Shocked Chance by #%"						,"modifier":10	,"point":""				,"unlocks":""},
			{"node_id":"Defensive_Tree_77" ,"attribute":"Increases Lightning Resistance by #"					,"modifier":20	,"point":"Thunder"		,"unlocks":""},
			//Ox req 3			
			{"node_id":"Defensive_Tree_78" ,"attribute":"Increases Physical Resistance by #"					,"modifier":3	,"point":"Ox"			,"unlocks":"Defensive_Tree_79","Ox":3},
			{"node_id":"Defensive_Tree_79" ,"attribute":"Increases Block Chance by #%"							,"modifier":1	,"point":"Ox"			,"unlocks":"Defensive_Tree_81,Defensive_Tree_80"},
			{"node_id":"Defensive_Tree_80" ,"attribute":"Increases Block Chance by #%"							,"modifier":1	,"point":"Ox"			,"unlocks":""},
			{"node_id":"Defensive_Tree_81" ,"attribute":"Increases Physical Resistance by #"					,"modifier":3	,"point":"Ox"			,"unlocks":"Defensive_Tree_82"},
			{"node_id":"Defensive_Tree_82" ,"attribute":"Increases Block Chance by #%"							,"modifier":1	,"point":"Ox"			,"unlocks":"Defensive_Tree_83"},
			{"node_id":"Defensive_Tree_83" ,"attribute":"Increases Physical Resistance by #"					,"modifier":3	,"point":"Ox"			,"unlocks":"Defensive_Tree_84"},
			{"node_id":"Defensive_Tree_84" ,"attribute":"When you Block you have a #% chance to take no damage","modifier":20	,"point":""				,"unlocks":""},
			//Ox req 6
			{"node_id":"Defensive_Tree_85" ,"attribute":"Increases Physical Resistance by #"					,"modifier":5	,"point":"Ox"			,"unlocks":"Defensive_Tree_86","Ox":6},
			{"node_id":"Defensive_Tree_86" ,"attribute":"Increases Block Chance by #%"							,"modifier":1	,"point":"Ox"			,"unlocks":"Defensive_Tree_87,Defensive_Tree_90"},
			{"node_id":"Defensive_Tree_87" ,"attribute":"Increases Physical Resistance by #"					,"modifier":5	,"point":"Ox"			,"unlocks":"Defensive_Tree_88"},
			{"node_id":"Defensive_Tree_88" ,"attribute":"Increases Block Chance by #%"							,"modifier":1	,"point":"Ox"			,"unlocks":"Defensive_Tree_89"},
			{"node_id":"Defensive_Tree_89" ,"attribute":"Increases Stun Chance by #%"							,"modifier":5	,"point":""				,"unlocks":""},
			{"node_id":"Defensive_Tree_90" ,"attribute":"Increases Physical Resistance by #"					,"modifier":5	,"point":"Ox"			,"unlocks":""},
			//Ox req 10
			{"node_id":"Defensive_Tree_91" ,"attribute":"Increases Physical Resistance by #"					,"modifier":10	,"point":"Ox"			,"unlocks":"Defensive_Tree_92","Ox":10},
			{"node_id":"Defensive_Tree_92" ,"attribute":"Increases Block Damage Reduction by #%"				,"modifier":2	,"point":"Ox"			,"unlocks":"Defensive_Tree_93,Defensive_Tree_94"},
			{"node_id":"Defensive_Tree_93" ,"attribute":"Increases Physical Resistance by #"					,"modifier":10	,"point":"Ox"			,"unlocks":""},
			{"node_id":"Defensive_Tree_94" ,"attribute":"Increases Physical Resistance by #"					,"modifier":10	,"point":"Ox"			,"unlocks":"Defensive_Tree_95"},
			{"node_id":"Defensive_Tree_95" ,"attribute":"Increases Block Damage Reduction by #%"				,"modifier":2	,"point":"Ox"			,"unlocks":"Defensive_Tree_96"},
			{"node_id":"Defensive_Tree_96" ,"attribute":"Increases Physical Resistance by #"					,"modifier":10	,"point":"Ox"			,"unlocks":"Defensive_Tree_97"},
			{"node_id":"Defensive_Tree_97" ,"attribute":"Physical Skills have a 20% chance to increase your Block Chance by #% on hit for 1 second (can only have 1 stack)"	,"modifier":50	,"point":""				,"unlocks":""},
			//Ox req 15
			{"node_id":"Defensive_Tree_98" ,"attribute":"Increases Block Chance by #%"							,"modifier":3	,"point":"Ox"			,"unlocks":"Defensive_Tree_99","Ox":15},
			{"node_id":"Defensive_Tree_99" ,"attribute":"Increases Block Damage Reduction by #%"				,"modifier":3	,"point":"Ox"			,"unlocks":"Defensive_Tree_100"},
			{"node_id":"Defensive_Tree_100","attribute":"Increases Block Chance by #%"							,"modifier":3	,"point":"Ox"			,"unlocks":"Defensive_Tree_101"},
			{"node_id":"Defensive_Tree_101","attribute":"Increases Block Damage Reduction by #%"				,"modifier":3	,"point":"Ox"			,"unlocks":"Defensive_Tree_102"},
			{"node_id":"Defensive_Tree_102","attribute":"Heal for #% of Max Health when you stun an enemy"		,"modifier":2	,"point":""		,"unlocks":""},
			//Frozen req 3
			{"node_id":"Defensive_Tree_103" ,"attribute":"Increases Mana by #"									,"modifier":3	,"point":"Frozen"		,"unlocks":"Defensive_Tree_104","Frozen":3},
			{"node_id":"Defensive_Tree_104" ,"attribute":"Increases Cold Resistance by #"						,"modifier":3	,"point":"Frozen"		,"unlocks":"Defensive_Tree_105,Defensive_Tree_107"},
			{"node_id":"Defensive_Tree_105" ,"attribute":"Increases Mana by #"									,"modifier":3	,"point":"Frozen"		,"unlocks":"Defensive_Tree_106"},
			{"node_id":"Defensive_Tree_106" ,"attribute":"Frozen enemies have a #% chance to shatter and die instantly when they unfreeze."					,"modifier":10	,"point":""		,"unlocks":""},
			{"node_id":"Defensive_Tree_107" ,"attribute":"Increases Mana by #"									,"modifier":3	,"point":"Frozen"		,"unlocks":"Defensive_Tree_108"},
			{"node_id":"Defensive_Tree_108" ,"attribute":"Increases Cold Resistance by #"						,"modifier":3	,"point":"Frozen"		,"unlocks":""},
			//Frozen req 7
			{"node_id":"Defensive_Tree_109" ,"attribute":"Increases Cold Resistance by #"						,"modifier":5	,"point":"Frozen"		,"unlocks":"Defensive_Tree_110","Frozen":7},
			{"node_id":"Defensive_Tree_110" ,"attribute":"Increases Mana by #"									,"modifier":5	,"point":"Frozen"		,"unlocks":"Defensive_Tree_111"},
			{"node_id":"Defensive_Tree_111" ,"attribute":"Increases Cold Resistance by #"						,"modifier":5	,"point":"Frozen"		,"unlocks":"Defensive_Tree_112"},
			{"node_id":"Defensive_Tree_112" ,"attribute":"Increases Mana by #"									,"modifier":5	,"point":"Frozen"		,"unlocks":"Defensive_Tree_113"},
			{"node_id":"Defensive_Tree_113" ,"attribute":"You have #% chance on Glancing Blow to take 0 damage"						,"modifier":20	,"point":""		,"unlocks":""},
			//Frozen req 10
			{"node_id":"Defensive_Tree_114" ,"attribute":"Increases Glancing Blow by #%"						,"modifier":2	,"point":"Frozen"		,"unlocks":"Defensive_Tree_115","Frozen":10},
			{"node_id":"Defensive_Tree_115" ,"attribute":"Increases Cold Resistance by #"						,"modifier":10	,"point":"Frozen"		,"unlocks":"Defensive_Tree_116,Defensive_Tree_118"},
			{"node_id":"Defensive_Tree_116" ,"attribute":"Increases Glancing Blow by #%"						,"modifier":2	,"point":"Frozen"		,"unlocks":"Defensive_Tree_117"},
			{"node_id":"Defensive_Tree_117" ,"attribute":"Increases Freeze Chance by #%"													,"modifier":10	,"point":""		,"unlocks":""},
			{"node_id":"Defensive_Tree_118" ,"attribute":"Increases Glancing Blow by #%"						,"modifier":2	,"point":"Frozen"		,"unlocks":"Defensive_Tree_119"},
			{"node_id":"Defensive_Tree_119" ,"attribute":"Increases Cold Resistance #"							,"modifier":10	,"point":"Frozen"		,"unlocks":""},
			//Frozen req 15
			{"node_id":"Defensive_Tree_120" ,"attribute":"Increases Glancing Blow by #%"				,"modifier":3	,"point":"Frozen"		,"unlocks":"Defensive_Tree_121","Frozen":15},
			{"node_id":"Defensive_Tree_121" ,"attribute":"Increases Glancing Blow by #%"						,"modifier":3	,"point":"Frozen"		,"unlocks":"Defensive_Tree_122"},
			{"node_id":"Defensive_Tree_122" ,"attribute":"Increases Glancing Blow by #%"						,"modifier":3	,"point":"Frozen"		,"unlocks":"Defensive_Tree_123"},
			{"node_id":"Defensive_Tree_123" ,"attribute":"Reflects #% of damage taken back as Cold Damage in a 100 radius at player location"					,"modifier":20	,"point":""		,"unlocks":""},
			//Void req 3
			{"node_id":"Defensive_Tree_124","attribute":"Increases Iron Skin by #" 							,"modifier":5 	,"point":"Void" 	,"unlocks":"Defensive_Tree_125","Void":3},
			{"node_id":"Defensive_Tree_125","attribute":"Increases Chaos Resistance by #" 						,"modifier":3 	,"point":"Void" 	,"unlocks":"Defensive_Tree_126"},
			{"node_id":"Defensive_Tree_126","attribute":"Increases Chaos Resistance by #" 					,"modifier":3 	,"point":"Void" 	,"unlocks":"Defensive_Tree_127,Defensive_Tree_129"},
			{"node_id":"Defensive_Tree_127","attribute":"Increases Iron Skin by #" 							,"modifier":5 	,"point":"Void" 	,"unlocks":"Defensive_Tree_128"},
			{"node_id":"Defensive_Tree_128","attribute":"When your HP drops below 50% you inflict all enemies in a 1000 Radius with Delirium. Has a # Second Cooldown" ,"modifier":15 ,"point":"" ,"unlocks":""},
			{"node_id":"Defensive_Tree_129","attribute":"Increases Iron Skin by #" 							,"modifier":5 	,"point":"Void" 	,"unlocks":""},
			//Void req 6
			{"node_id":"Defensive_Tree_130","attribute":"Increases Chaos Resistance by #" 						,"modifier":5 	,"point":"Void" 	,"unlocks":"Defensive_Tree_131","Void":6},
			{"node_id":"Defensive_Tree_131","attribute":"Increases Iron Skin by #" 							,"modifier":10 	,"point":"Void" 	,"unlocks":"Defensive_Tree_132"},
			{"node_id":"Defensive_Tree_132","attribute":"Increases Chaos Resistance by #" 						,"modifier":5 	,"point":"Void" 	,"unlocks":"Defensive_Tree_133"},
			{"node_id":"Defensive_Tree_133","attribute":"Increases Iron Skin by #" 							,"modifier":10 	,"point":"Void" 	,"unlocks":"Defensive_Tree_134"},
			{"node_id":"Defensive_Tree_134","attribute":"You have a #% chance when hitting enemies to release a chaotic explosion at their location dealing Chaos Damage equal to half Max Iron Skin in a 300 Radius" ,"modifier":10 ,"point":"" ,"unlocks":""},
			//Void req 9
			{"node_id":"Defensive_Tree_135","attribute":"Increases Chaos Resistance by #" 						,"modifier":10 	,"point":"Void" 	,"unlocks":"Defensive_Tree_136","Void":9},
			{"node_id":"Defensive_Tree_136","attribute":"Increases Iron Skin Regen by #" 						,"modifier":2 	,"point":"Void" 	,"unlocks":"Defensive_Tree_137"},
			{"node_id":"Defensive_Tree_137","attribute":"Increases Chaos Resistance by #" 						,"modifier":10	,"point":"Void" 	,"unlocks":"Defensive_Tree_138,Defensive_Tree_140"},
			{"node_id":"Defensive_Tree_138","attribute":"Increases Iron Skin Regen by #" 						,"modifier":2 	,"point":"Void" 	,"unlocks":"Defensive_Tree_139"},
			{"node_id":"Defensive_Tree_139","attribute":"Increases Delirium Chance by #%" 						,"modifier":5 	,"point":"" 			,"unlocks":""},
			{"node_id":"Defensive_Tree_140","attribute":"Increases Chaos Resistance by #" 						,"modifier":10 	,"point":"Void" 	,"unlocks":""},
			//Void req 15
			{"node_id":"Defensive_Tree_141","attribute":"Increases Iron Skin Regen by #" 							,"modifier":5 	,"point":"Void" 	,"unlocks":"Defensive_Tree_142","Void":15},
			{"node_id":"Defensive_Tree_142","attribute":"Increases Iron Skin on Hit by #" 							,"modifier":10 	,"point":"Void" 	,"unlocks":"Defensive_Tree_143,Defensive_Tree_145"},
			{"node_id":"Defensive_Tree_143","attribute":"Increases Iron Regen by # " 								,"modifier":5 	,"point":"Void" 	,"unlocks":"Defensive_Tree_144"},
			{"node_id":"Defensive_Tree_144","attribute":"When hit there is a #% chance to spawn a dark fire under the player\'s feet that restores 10% of Max Iron Skin per second whilst stod in it. The fire last for 5 seconds, and you can only have 1 fire at once." ,"modifier":10 ,"point":"" ,"unlocks":""},
			{"node_id":"Defensive_Tree_145","attribute":"Increases Iron Skin on Hit by #" 							,"modifier":10 	,"point":"Void" 	,"unlocks":""},
			//Viper req 3
			{"node_id":"Defensive_Tree_146","attribute":"Increases Defence by #" 								,"modifier":1	,"point":"Viper" 		,"unlocks":"Defensive_Tree_147","Viper":3},
			{"node_id":"Defensive_Tree_147","attribute":"Increases Poison Resistance by #"		 				,"modifier":3 	,"point":"Viper" 		,"unlocks":"Defensive_Tree_148,Defensive_Tree_149"},
			{"node_id":"Defensive_Tree_148","attribute":"Increases Defence by #" 								,"modifier":1 	,"point":"Viper" 		,"unlocks":""},
			{"node_id":"Defensive_Tree_149","attribute":"Increases Defence by #" 								,"modifier":1 	,"point":"Viper" 		,"unlocks":"Defensive_Tree_150"},
			{"node_id":"Defensive_Tree_150","attribute":"Increases Poison Resistance by #" 						,"modifier":3 	,"point":"Viper" 		,"unlocks":"Defensive_Tree_151"},
			{"node_id":"Defensive_Tree_151","attribute":"Increases Defence by #" 								,"modifier":1 	,"point":"Viper" 		,"unlocks":"Defensive_Tree_152"},
			{"node_id":"Defensive_Tree_152","attribute":"If you take damage when below 30% HP temporarily increase your Defence by 200% for # seconds" ,"modifier":3 ,"point":"" ,"unlocks":""},
			//Viper req 6
			{"node_id":"Defensive_Tree_153","attribute":"Increases Dodge Chance #%" 							,"modifier":1 	,"point":"Viper" 		,"unlocks":"Defensive_Tree_154","Viper":6},
			{"node_id":"Defensive_Tree_154","attribute":"Increases Poison Resistance #" 						,"modifier":5 	,"point":"Viper" 		,"unlocks":"Defensive_Tree_155"},
			{"node_id":"Defensive_Tree_155","attribute":"Increases Dodge Chance #%" 							,"modifier":1 	,"point":"Viper" 		,"unlocks":"Defensive_Tree_156"},
			{"node_id":"Defensive_Tree_156","attribute":"Gain a burst of Movement Speed when you dodge. Can only have 1 stack, increases Movement Speed by #% for 10 seconds" ,"modifier":20 ,"point":"" ,"unlocks":""},
			//Viper req 9
			{"node_id":"Defensive_Tree_157","attribute":"Increases Poison Resistance by #" 						,"modifier":10 	,"point":"Viper" 		,"unlocks":"Defensive_Tree_158","Viper":9},
			{"node_id":"Defensive_Tree_158","attribute":"Increases Defence by #" 								,"modifier":3 	,"point":"Viper" 		,"unlocks":"Defensive_Tree_159,Defensive_Tree_160"},
			{"node_id":"Defensive_Tree_159","attribute":"Increases Dodge Chance by #%" 							,"modifier":2 	,"point":"Viper" 		,"unlocks":""},
			{"node_id":"Defensive_Tree_160","attribute":"Increases Poison Resistance by #"	 					,"modifier":10 	,"point":"Viper" 		,"unlocks":"Defensive_Tree_161"},
			{"node_id":"Defensive_Tree_161","attribute":"Increases Defence by #" 								,"modifier":3 	,"point":"Viper" 		,"unlocks":"Defensive_Tree_162"},
			{"node_id":"Defensive_Tree_162","attribute":"Increases Poison Resistance by #" 						,"modifier":10 	,"point":"Viper" 		,"unlocks":"Defensive_Tree_163"},
			{"node_id":"Defensive_Tree_163","attribute":"Increases Bile Chance by #%" 							,"modifier":10 ,"point":"" ,"unlocks":""},
			//Viper req 15
			{"node_id":"Defensive_Tree_164","attribute":"Increases Defence by #" 								,"modifier":5 	,"point":"Viper" 		,"unlocks":"Defensive_Tree_165","Viper":15},
			{"node_id":"Defensive_Tree_165","attribute":"Increases Dodge Chance by #%" 						,"modifier":5 	,"point":"Viper" 		,"unlocks":"Defensive_Tree_166"},
			{"node_id":"Defensive_Tree_166","attribute":"Increases Poison Resistance by #" 					,"modifier":25 	,"point":"Viper" 		,"unlocks":"Defensive_Tree_167"},
			{"node_id":"Defensive_Tree_167","attribute":"When you dodge, release a ball of poison at your location that explodes for # Poison Damage per player level in 200 radius." ,"modifier":2 ,"point":"" ,"unlocks":""}
			//Ox
			//Frozen
			//Void
			//Viper
		]
	}
];