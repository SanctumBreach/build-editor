/*
for those that want to help. here is a demo of how I want the defensive tree to look.
the rules on how to progress trough the tree are as follows:
you try to follow the path you went down into. If you are starting a new path first check left,up,right,down
when it comes to the order of the points for defensive it goes:Phoenix,Thunder,Ox,Frozen,Void,Viper
for ultility it goes: Goblin,Oak,Rage,Cheetah,Stok,Vampire
*/
var PassiveTrees=[
	{	"Name":"Offensive Tree",
		"Inferno":[,,,"Offensive_Tree_33",,,,"Offensive_Tree_40",,,,"Offensive_Tree_45",,,,"Offensive_Tree_52"],
		"Nodes":[
			//left side
			{"node_id":"Offensive_Tree_1" ,"attribute":"Increases Health by #"					,"modifier":10	,"point":"Decay"		,"unlocks":"Offensive_Tree_2,Offensive_Tree_9"},
			{"node_id":"Offensive_Tree_2" ,"attribute":"Increases Speed by +#%"					,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_3,Offensive_Tree_6"},
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
			{"node_id":"Offensive_Tree_25","attribute":"Increases Speed +#%"					,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_26"},
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
			{"node_id":"Offensive_Tree_54","attribute":"Increases Area of Effect by #"							,"modifier":5	,"point":"Inferno"	,"unlocks":"Offensive_Tree_55,Offensive_Tree_56"},			
			{"node_id":"Offensive_Tree_55","attribute":"Skills have a 50% chance on hit to spawn a fiery combustion at enemies location that deals 5 Fire Damage per player level with 200 Radius"							,"modifier":0	,"point":""	,"Inferno":15	,"unlocks":""},
			{"node_id":"Offensive_Tree_56","attribute":"Grants #% More Fire Damage"								,"modifier":5	,"point":"Inferno"	,"unlocks":""},
			//Storm req 3
			{"node_id":"Offensive_Tree_57" ,"attribute":"Increases Lightning Damage by #%"		,"modifier":5	,"point":"Storm"		,"unlocks":"Offensive_Tree_58"},
			{"node_id":"Offensive_Tree_58" ,"attribute":"Increases Crit Chance by #"			,"modifier":0.5	,"point":"Storm"		,"unlocks":"Offensive_Tree_59"},
			{"node_id":"Offensive_Tree_59" ,"attribute":"Increases Lightning Damage by #%"		,"modifier":5	,"point":"Storm"		,"unlocks":"Offensive_Tree_60,Offensive_Tree_62"},
			{"node_id":"Offensive_Tree_60" ,"attribute":"Increases Crit Damage by #"			,"modifier":2	,"point":"Storm"		,"unlocks":"Offensive_Tree_61"},
			{"node_id":"Offensive_Tree_61" ,"attribute":"Enemies crit with Lightning Damage have a 25% chance to become conduits, which echo the Skills effect (this effect can be repeated from the echo)."	,"modifier":0	,"point":""		,"unlocks":""},
			{"node_id":"Offensive_Tree_62" ,"attribute":"Increases Crit Chance by #"			,"modifier":0.5	,"point":"Storm"		,"unlocks":""},
			//Storm req 6
			{"node_id":"Offensive_Tree_63" ,"attribute":"Increases Lightning Penetration by #"	,"modifier":3	,"point":"Storm"		,"unlocks":"Offensive_Tree_64"},
			{"node_id":"Offensive_Tree_64" ,"attribute":"Increases Lightning Penetration by #"	,"modifier":3	,"point":"Storm"		,"unlocks":"Offensive_Tree_65,Offensive_Tree_67"},
			{"node_id":"Offensive_Tree_65" ,"attribute":"Increases Lightning Damage by #%"		,"modifier":5	,"point":"Storm"		,"unlocks":"Offensive_Tree_66"},
			{"node_id":"Offensive_Tree_66" ,"attribute":"Lightning Skills have +# base Lightning Damage"					,"modifier":1	,"point":""		,"unlocks":""},
			{"node_id":"Offensive_Tree_67" ,"attribute":"Increases Lightning Damage by #%"		,"modifier":5	,"point":"Storm"		,"unlocks":""},
			//Storm req 10
			{"node_id":"Offensive_Tree_68" ,"attribute":"Increases Lightning Damage by #%"		,"modifier":20	,"point":"Storm"		,"unlocks":"Offensive_Tree_69"},
			{"node_id":"Offensive_Tree_69" ,"attribute":"Increases Electrocute Damage by #"		,"modifier":1	,"point":"Storm"		,"unlocks":"Offensive_Tree_70,Offensive_Tree_72"},
			{"node_id":"Offensive_Tree_70" ,"attribute":"Increases Lightning Damage by #%"		,"modifier":20	,"point":"Storm"		,"unlocks":"Offensive_Tree_71"},
			{"node_id":"Offensive_Tree_71" ,"attribute":"Skills have a 20% chance to release a lightning crystal convergence at target location that deals # Lightning Damage per player level after a 1 second delay and has 150 radius"					,"modifier":2	,"point":""		,"unlocks":""},
			{"node_id":"Offensive_Tree_72" ,"attribute":"Increases Electrocute Damage by #"		,"modifier":1	,"point":"Storm"		,"unlocks":""},
			//Storm req 15
			{"node_id":"Offensive_Tree_73" ,"attribute":"Grants #% More Lightning Damage"		,"modifier":5	,"point":"Storm"		,"unlocks":"Offensive_Tree_74"},
			{"node_id":"Offensive_Tree_74" ,"attribute":"Grants #% More Lightning Damage"		,"modifier":5	,"point":"Storm"		,"unlocks":"Offensive_Tree_75,Offensive_Tree_77"},
			{"node_id":"Offensive_Tree_75" ,"attribute":"Grants #% More Lightning Damage"		,"modifier":5	,"point":"Storm"		,"unlocks":"Offensive_Tree_76"},
			{"node_id":"Offensive_Tree_76" ,"attribute":"Grants a persistent Aura (triggered by receiving damage) that deals # Lightning Damage per second per player level and has a 250 radius"					,"modifier":3	,"point":""		,"unlocks":""},
			{"node_id":"Offensive_Tree_77" ,"attribute":"Grants #% More Lightning Damage"		,"modifier":5	,"point":"Storm"		,"unlocks":""},
			//Bull req 3
			{"node_id":"Offensive_Tree_78" ,"attribute":"Increases Physical Damage by #%"		,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_79"},
			{"node_id":"Offensive_Tree_79" ,"attribute":"Increases Area of Effect by #"			,"modifier":10	,"point":"Bull"			,"unlocks":"Offensive_Tree_83,Offensive_Tree_80"},
			{"node_id":"Offensive_Tree_80" ,"attribute":"Increases Area of Effect by #"			,"modifier":10	,"point":"Bull"			,"unlocks":""},
			{"node_id":"Offensive_Tree_81" ,"attribute":"Increases Physical Damage by #%"		,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_82"},
			{"node_id":"Offensive_Tree_82" ,"attribute":"Increases Area of Effect by #"	,"modifier":10	,"point":"Bull"		,"unlocks":"Offensive_Tree_83"},
			{"node_id":"Offensive_Tree_83" ,"attribute":"Increases Physical Damage by #%"		,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_84"},
			{"node_id":"Offensive_Tree_84" ,"attribute":"Enemies killed have a 10% chance to leave a pool of blood that deals # Physical Damage per player level per second for 3 seconds and has a 150 radius"					,"modifier":2	,"point":""		,"unlocks":""},
			//Bull req 6
			{"node_id":"Offensive_Tree_85" ,"attribute":"Increases Physical Damage by #%"		,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_86"},
			{"node_id":"Offensive_Tree_86" ,"attribute":"Increases Physical Penetration by #"	,"modifier":3	,"point":"Bull"			,"unlocks":"Offensive_Tree_87,Offensive_Tree_90"},
			{"node_id":"Offensive_Tree_87" ,"attribute":"Increases Phyiscal Damage by #%"		,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_88"},
			{"node_id":"Offensive_Tree_88" ,"attribute":"Increases Physical Penetration by #"	,"modifier":3	,"point":"Bull"			,"unlocks":"Offensive_Tree_89"},
			{"node_id":"Offensive_Tree_89" ,"attribute":"Skills have a 10% chance on hit to release an orb at player location that fires beams after a 1 second delay. The beams converge to deal # Physical Damage per player level with a 100 radius"				,"modifier":3	,"point":""		,"unlocks":""},
			{"node_id":"Offensive_Tree_90" ,"attribute":"Increases Phyiscal Damage by #%"		,"modifier":5	,"point":"Bull"			,"unlocks":""},
			//Bull req 10
			{"node_id":"Offensive_Tree_91" ,"attribute":"Increases Physical Damage by #%"		,"modifier":20	,"point":"Bull"			,"unlocks":"Offensive_Tree_94"},
			{"node_id":"Offensive_Tree_92" ,"attribute":"Increases Physical Penetration by #"	,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_95,Offensive_Tree_96"},
			{"node_id":"Offensive_Tree_93" ,"attribute":"Increases Physical Damage by #%"		,"modifier":20	,"point":"Bull"			,"unlocks":""},
			{"node_id":"Offensive_Tree_94" ,"attribute":"Increases Physical Damage by #%"		,"modifier":20	,"point":"Bull"			,"unlocks":"Offensive_Tree_97"},
			{"node_id":"Offensive_Tree_95" ,"attribute":"Increases Physical Penetration by #"	,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_98"},
			{"node_id":"Offensive_Tree_96" ,"attribute":"Increases Physical Damage by #%"		,"modifier":20	,"point":"Bull"			,"unlocks":"Offensive_Tree_99"},
			{"node_id":"Offensive_Tree_97" ,"attribute":"Increases Physical Penetration by #"	,"modifier":50	,"point":""				,"unlocks":""},
			//Bull req 15
			{"node_id":"Offensive_Tree_98" ,"attribute":"Increases Area of Effect by #"			,"modifier":50	,"point":"Bull"			,"unlocks":"Offensive_Tree_99"},
			{"node_id":"Offensive_Tree_99" ,"attribute":"Grants #% More Physical Damage"		,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_100"},
			{"node_id":"Offensive_Tree_100" ,"attribute":"Grants #% More Physical Damage"		,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_101"},
			{"node_id":"Offensive_Tree_101" ,"attribute":"Grants #% More Physical Damage"		,"modifier":5	,"point":"Bull"			,"unlocks":"Offensive_Tree_102"},
			{"node_id":"Offensive_Tree_102" ,"attribute":"Skills have a 25% chance on hit to release a blood funnel, dealing # Physical Damage per player level to those it hits"				,"modifier":3	,"point":""		,"unlocks":""},
			//Blizzard req 3
			{"node_id":"Offensive_Tree_103" ,"attribute":"Increases Cold Penetration by #"		,"modifier":3	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_104"},
			{"node_id":"Offensive_Tree_104" ,"attribute":"Increases Cold Damage by #%"			,"modifier":5	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_105,Offensive_Tree_107"},
			{"node_id":"Offensive_Tree_105" ,"attribute":"Increases Cold Penetration by #"		,"modifier":3	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_106"},
			{"node_id":"Offensive_Tree_106" ,"attribute":"Has a 10% chance on hit to release an Icestorm at target location dealing # Cold Damage per player level per second for 3 seconds with 150 radius"					,"modifier":2	,"point":""		,"unlocks":""},
			{"node_id":"Offensive_Tree_107" ,"attribute":"Increases Cold Penetration by #"		,"modifier":3	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_108"},
			{"node_id":"Offensive_Tree_108" ,"attribute":"Increases Cold Damage by #%"			,"modifier":5	,"point":"Blizzard"		,"unlocks":""},
			//Blizzard req 7
			{"node_id":"Offensive_Tree_109" ,"attribute":"Increases Cold Damage by #%"			,"modifier":10	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_110"},
			{"node_id":"Offensive_Tree_110" ,"attribute":"Increases Cold Penetration by #"		,"modifier":3	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_111"},
			{"node_id":"Offensive_Tree_111" ,"attribute":"Increases Cold Damage by #%"			,"modifier":10	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_112"},
			{"node_id":"Offensive_Tree_112" ,"attribute":"Increases Cold Penetration by #"		,"modifier":3	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_113"},
			{"node_id":"Offensive_Tree_113" ,"attribute":"Increases Cold Penetration by #"		,"modifier":30	,"point":""		,"unlocks":""},
			//Blizzard req 10
			{"node_id":"Offensive_Tree_114" ,"attribute":"Grants #% More Cold Damage"			,"modifier":5	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_115"},
			{"node_id":"Offensive_Tree_115" ,"attribute":"Increases Cold Damage by #%"			,"modifier":15	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_116,Offensive_Tree_118"},
			{"node_id":"Offensive_Tree_116" ,"attribute":"Grants #% More Cold Damage"			,"modifier":5	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_117"},
			{"node_id":"Offensive_Tree_117" ,"attribute":"Enemies slain have a 25% chance to release a ring of frozen daggers that deal # Cold Damage per player level on hit"					,"modifier":5	,"point":""		,"unlocks":""},
			{"node_id":"Offensive_Tree_118" ,"attribute":"Grants #% More Cold Damage"			,"modifier":5	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_119"},
			{"node_id":"Offensive_Tree_119" ,"attribute":"Increases Cold Damage by #%"			,"modifier":15	,"point":"Blizzard"		,"unlocks":""},
			//Blizzard req 15
			{"node_id":"Offensive_Tree_120" ,"attribute":"Increases Glancing Blow by #%"		,"modifier":3	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_121"},
			{"node_id":"Offensive_Tree_121" ,"attribute":"Increases Glancing Blow by #%"		,"modifier":3	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_122"},
			{"node_id":"Offensive_Tree_122" ,"attribute":"Increases Glancing Blow by #%"		,"modifier":3	,"point":"Blizzard"		,"unlocks":"Offensive_Tree_123"},
			{"node_id":"Offensive_Tree_123" ,"attribute":"Reflects #% of damage taken back as Cold Damage in a 100 radius at player location"					,"modifier":20	,"point":""		,"unlocks":""},
			//Corruption req 3
			{"node_id":"Offensive_Tree_124","attribute":"Increases Chaos Damage by #%" 			,"modifier":5 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_125"},
			{"node_id":"Offensive_Tree_125","attribute":"Increases Chaos Penetration by #" 		,"modifier":3 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_126"},
			{"node_id":"Offensive_Tree_126","attribute":"Increases Chaos Damage by #%" 			,"modifier":5 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_127,Offensive_Tree_129"},
			{"node_id":"Offensive_Tree_127","attribute":"Increases Chaos Damage by #%" 			,"modifier":5 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_128"},
			{"node_id":"Offensive_Tree_128","attribute":"Enemies killed have a 25% chance to spawn Void Creeplings that slowly chase enemies and explode on contact for # Chaos Damage per player level with 250 radius" ,"modifier":3 ,"point":"" ,"unlocks":""},
			{"node_id":"Offensive_Tree_129","attribute":"Increases Chaos Penetration by #" 		,"modifier":3 	,"point":"Corruption" 	,"unlocks":""},
			//Corruption req 6
			{"node_id":"Offensive_Tree_130","attribute":"Increases Area of Effect by #" 		,"modifier":10 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_131"},
			{"node_id":"Offensive_Tree_131","attribute":"Increases Chaos Damage by #%" 			,"modifier":10 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_132"},
			{"node_id":"Offensive_Tree_132","attribute":"Increases Area of Effect by #" 		,"modifier":10 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_133"},
			{"node_id":"Offensive_Tree_133","attribute":"Increases Chaos Damage by #%" 			,"modifier":10 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_134"},
			{"node_id":"Offensive_Tree_134","attribute":"Skills have a 20% chance on hit to create an explosion at target location that deals # Chaos Damager per player level with 150 radius after a .5 second delay" ,"modifier":3 ,"point":"" ,"unlocks":""},
			//Corruption req 9
			{"node_id":"Offensive_Tree_135","attribute":"Increases Chaos Penetration by #" 		,"modifier":5 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_136"},
			{"node_id":"Offensive_Tree_136","attribute":"Increases Chaos Damage by #%" 			,"modifier":10 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_137"},
			{"node_id":"Offensive_Tree_137","attribute":"Increases Chaos Penetration by #" 		,"modifier":5 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_138,Offensive_Tree_140"},
			{"node_id":"Offensive_Tree_138","attribute":"Increases Chaos Damage by #%" 			,"modifier":10 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_139"},
			{"node_id":"Offensive_Tree_139","attribute":"Increases Chaos Penetration by #" 		,"modifier":30 	,"point":"" 			,"unlocks":""},
			{"node_id":"Offensive_Tree_140","attribute":"Increases Chaos Damage by #%" 			,"modifier":10 	,"point":"Corruption" 	,"unlocks":""},
			//Corruption req 15
			{"node_id":"Offensive_Tree_141","attribute":"Grants #% More Chaos Damage" 			,"modifier":5 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_142"},
			{"node_id":"Offensive_Tree_142","attribute":"Grants #% More Chaos Damage" 			,"modifier":5 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_143,Offensive_Tree_145"},
			{"node_id":"Offensive_Tree_143","attribute":"Increases Area of Effect by #" 		,"modifier":25 	,"point":"Corruption" 	,"unlocks":"Offensive_Tree_144"},
			{"node_id":"Offensive_Tree_144","attribute":"A Chaotic Beam follows the player dealing # Chaos Damage per player level per second with 250 radius" ,"modifier":3 ,"point":"" ,"unlocks":""},
			{"node_id":"Offensive_Tree_145","attribute":"Grants #% More Chaos Damage" 			,"modifier":5 	,"point":"Corruption" 	,"unlocks":""},
			//Decay req 3
			{"node_id":"Offensive_Tree_146","attribute":"Increases Area of Effect by #" 		,"modifier":10	,"point":"Decay" 		,"unlocks":"Offensive_Tree_147"},
			{"node_id":"Offensive_Tree_147","attribute":"Increases Poison Damage by #%"		 	,"modifier":5 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_148,Offensive_Tree_149"},
			{"node_id":"Offensive_Tree_148","attribute":"Increases Area of Effect by #" 		,"modifier":10 	,"point":"Decay" 		,"unlocks":""},
			{"node_id":"Offensive_Tree_149","attribute":"Increases Area of Effect by #" 		,"modifier":10 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_150"},
			{"node_id":"Offensive_Tree_150","attribute":"Increases Poison Damage by #%" 		,"modifier":5 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_151"},
			{"node_id":"Offensive_Tree_151","attribute":"Increases Area of Effect by #" 		,"modifier":10 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_152"},
			{"node_id":"Offensive_Tree_152","attribute":"Enemies killed have a 25% chance to explode for # Poison Damage per player level with 200 radius" ,"modifier":3 ,"point":"" ,"unlocks":""},
			//Decay req 6
			{"node_id":"Offensive_Tree_153","attribute":"Grants Increased Speed #%" 			,"modifier":5 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_154"},
			{"node_id":"Offensive_Tree_154","attribute":"Grants Increased Speed #%" 			,"modifier":5 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_155"},
			{"node_id":"Offensive_Tree_155","attribute":"Grants Increased Speed #%" 			,"modifier":5 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_156"},
			{"node_id":"Offensive_Tree_156","attribute":"Skills have a 10% chance to spawn a poisonous Wolf that has 10 Health per palyer level and deals # Poison Damage per player level" ,"modifier":1 ,"point":"" ,"unlocks":""},
			//Decay req 9
			{"node_id":"Offensive_Tree_157","attribute":"Increases Poison Damage by #%" 		,"modifier":10 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_158"},
			{"node_id":"Offensive_Tree_158","attribute":"Increases Poison Damage by #%" 		,"modifier":10 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_159,Offensive_Tree_160"},
			{"node_id":"Offensive_Tree_159","attribute":"Increases Poison Penetration by #" 	,"modifier":5 	,"point":"Decay" 		,"unlocks":""},
			{"node_id":"Offensive_Tree_160","attribute":"Increases Poison Damage by #%"	 		,"modifier":10 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_161"},
			{"node_id":"Offensive_Tree_161","attribute":"Increases Poison Damage by #%" 		,"modifier":10 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_162"},
			{"node_id":"Offensive_Tree_162","attribute":"Increases Poison Penetration by #" 	,"modifier":5 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_163"},
			{"node_id":"Offensive_Tree_163","attribute":"Skills have a 10% chance on hit to release 3 poison daggers that deal # Poison Damage per player level on hit" ,"modifier":2 ,"point":"" ,"unlocks":""},
			//Decay req 15
			{"node_id":"Offensive_Tree_164","attribute":"Grants #% More Poison Damage" 			,"modifier":5 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_165"},
			{"node_id":"Offensive_Tree_165","attribute":"Grants #% More Poison Damage" 			,"modifier":5 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_166"},
			{"node_id":"Offensive_Tree_166","attribute":"Grants #% More Poison Damage" 			,"modifier":5 	,"point":"Decay" 		,"unlocks":"Offensive_Tree_167"},
			{"node_id":"Offensive_Tree_167","attribute":"Enemies killed spawn a poisonous enclosure around enemies that deals # Poison Damage per player level in a 150 radius after a 1 second delay" ,"modifier":3 ,"point":"" ,"unlocks":""}
			//Bull
			//Blizzard
			//Corruption
			//Decay
		]
	}
];