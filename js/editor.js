//no don't look here its ugly why would you do this to yourself T_T
var version="A1.9";
var stupidTexts=[
	"Hi, please buff werecrabs :) dw it will be fine",
	"Hi, please make aura's stack again",
	"Hi, please nerf spellblade its too strong",
	"Hi, this text box gives bad advice",
	"Hi, nerf drop rates",
	"Hi, nerf cast speed. I can cast spells at 0.75 times before the enemy is next to me",
	"Hi, don't add more legendaries",
	"o/"
];

var searchTimeoutWindow;

function init(){
	$("#class_selector").change(function(){
		console.log($(this).val()+":was selected");
		$("#mastery").css("background-image","url('img/"+$("#class_selector").val()+".png')");
		$("#mastery").css('background-position',"0px");
		
		loadSubclass($(this).val());		
		$("#Mastery_selector").change();
		calculateBonuses();
	});
	$("#Mastery_selector").change(function(){
		var ClassMastery=classes[$("#class_selector").val()][this.selectedIndex];
		var offset=ClassMastery.Offset;
		$("#mastery").css('background-position',offset);		
		loadMasteryTree(ClassMastery);
		calculateBonuses();
	});
	$("#searchBar").keydown(queueSearch);
	PopulatePassiveTrees();
	resetAllTrees();
}

function queueSearch(){
	window.clearTimeout(searchTimeoutWindow);
	searchTimeoutWindow=window.setTimeout(function(){executeSearch();},150);
	//console.log(this.value);
}
function executeSearch(){
	var self=$('#searchBar')[0];	
	$(".SearchSelected").removeClass("SearchSelected");
	if(self.value!==null&&self.value.length>0){		
		console.log("\"#PassiveTreeContainer [search*='"+self.value+"']\"");
		$(".Mastery_tree[search*='"+self.value.toLowerCase()+"']").addClass("SearchSelected");
		$("#PassiveTreeContainer [search*='"+self.value.toLowerCase()+"']").addClass("SearchSelected");
	}
}

function loadSubclass(PlayerClass){
	var arr=classes[PlayerClass];
	var addOptions="";
	for(var i=0;i<arr.length;i++){
		addOptions+="<option>"+arr[i].Name+"</option>";
	}
	$("#Mastery_selector")[0].innerHTML=addOptions;
	$('#Mastery_selector').children().tooltip();
	
}
function loadMasteryTree(ClassMastery){
	var divs="";
	for(var i=0;i<ClassMastery.Mastery.length;i++){
		var tooltip=ClassMastery.Mastery[i].tooltip.replace('#',ClassMastery.Mastery[i].modifier);
		divs+="<div class='Mastery_tree' search='"+tooltip.toLowerCase()+"' title='"+tooltip+"' id='"+ClassMastery.Mastery[i].node_id+"' style='"+ClassMastery.Mastery[i].style+"'></div>\n";
	}
	
	var ClassMastery=classes[$("#class_selector").val()][$("#Mastery_selector")[0].selectedIndex];
	
	$("#mastery")[0].innerHTML=divs;
	$('#mastery').children().tooltip();
	
	$(".Mastery_tree").click(function(){
		var _index=this.id.substr(ClassMastery.Name.length+1);
		var _unlocks=ClassMastery.Mastery[_index-1].unlocks;
		
		if(this.className.indexOf("borderBlue")===-1){
			if(this.className.indexOf("borderGreen")!==-1){
				cascadeUnselectMastery(ClassMastery,_index-1);
				$(this).removeClass("borderGreen");
				$(this).addClass("borderBlue");
				calculateBonuses();
				return;
			}
			else{
				calculateBonuses();
				return;
			}
		}
		
		if(_unlocks.length>0){
			for(var i=0;i<_unlocks.split(',').length;i++){
				$("#"+_unlocks.split(',')[i]).addClass("borderBlue");
			}
		}
		$(this).removeClass("borderBlue").addClass("borderGreen");
		calculateBonuses();
	});
	$($(".Mastery_tree")[0]).addClass("borderBlue");
}
function calculateBonuses(){
	//yes im just grabbing all selected buffs fit me if you disagree :P(or make it better)	
	var selection=$(".borderGreen");
	
	var ClassMastery=classes[$("#class_selector").val()][$("#Mastery_selector")[0].selectedIndex];
	
	
	const bonuses=[];
	const PassiveTreePoints=[];
	var MasteryPoints=0;
	for(var i=0;i<selection.length;i++){
		if(selection[i].className.indexOf("Mastery_tree")>-1){
			var _index=selection[i].id.substr(ClassMastery.Name.length+1)
			var _mastery=ClassMastery.Mastery[_index-1];
			if(bonuses[_mastery.tooltip.toLowerCase()]==null)
				bonuses[_mastery.tooltip.toLowerCase()]=_mastery.modifier;
			else{
				var value=parseFloat(bonuses[_mastery.tooltip.toLowerCase()]);
				bonuses[_mastery.tooltip.toLowerCase()]=value+parseFloat(_mastery.modifier);
			}
			MasteryPoints++;
		}
		else if(selection[i].className.indexOf("PassiveTreeNode")>-1){
			var tree;
			
			switch(selection[i].parentNode.id){
				case "OffensiveTreeContainer":{
					tree=PassiveTrees[0];
					break;
				}
				case "DefensiveTreeContainer":{
					tree=PassiveTrees[1];
					break;
				}
				case "UtilityTreeContainer":{
					tree=PassiveTrees[2];
					break;
				}
			}
			
						
			var _index=selection[i].id.substr(tree.Name.length+1)
			var _node=tree.Nodes[_index-1];
			if(bonuses[_node.attribute.toLowerCase()]==null)
				bonuses[_node.attribute.toLowerCase()]=_node.modifier;
			else{
				var value=parseFloat(bonuses[_node.attribute.toLowerCase()]);
				bonuses[_node.attribute.toLowerCase()]=value+parseFloat(_node.modifier);
			}
			if(_node.point.length>0){
				if(PassiveTreePoints[_node.point]==null)
					PassiveTreePoints[_node.point]=1;
				else{
					if(_node[_node.point]){
						var pointRequirement=_node[_node.point];
						if(!(PassiveTreePoints[_node.point]>=pointRequirement)){
							$("#"+_node.node_id).removeClass("borderGreen").removeClass("borderBlue");
							cascadeUnselectPassiveTree(tree,_index);
							console.log("removing border from:"+_node.node_id);
							//calculateBonuses();
						}
						else
							PassiveTreePoints[_node.point]+=1;
					}
					else
						PassiveTreePoints[_node.point]+=1;
					
					
					
					if(tree[_node.point]){
						if(tree[_node.point][PassiveTreePoints[_node.point]]){
							if(!($("#"+tree[_node.point][PassiveTreePoints[_node.point]])[0].className.indexOf("borderGreen")>-1)){								
								$("#"+tree[_node.point][PassiveTreePoints[_node.point]]).addClass("borderBlue");
							}
						}
					}					
					
					
				}			
			}
		}
	}
	
	
	$("#masteryBar").attr("value",MasteryPoints);
	var ProgressIndex=parseInt(MasteryPoints/5);
	
	for(var i=0;i<ProgressIndex;i++){
		var thebar=ClassMastery.Pointbar;
		
		if(bonuses[thebar[i].Attribute.toLowerCase()]==null){
			bonuses[thebar[i].Attribute.toLowerCase()]=parseFloat(thebar[i].Modifier);
		}
		else{
			var value=parseFloat(bonuses[thebar[i].Attribute.toLowerCase()]);
			bonuses[thebar[i].Attribute.toLowerCase()]=value+parseFloat(thebar[i].Modifier);
		}
	}
	
	var divValue="";
	for (const [key,value] of Object.entries(bonuses)){
		divValue+="<span>"+key.replace("#",value)+"</span></br>";
	}
	$("#calculator")[0].innerHTML=divValue;
	
	var txt="";
	for (const [key,value] of Object.entries(PassiveTreePoints)){
		txt+="<span>"+key+":"+value+"</span></br>";
	}	
	$("#PassiveTreePoints")[0].innerHTML=txt;
	calculatePointsSpend();
}
function cascadeUnselectMastery(ClassMastery,index){
	var _name=ClassMastery;
	var _unlocks=ClassMastery.Mastery[index].unlocks;
	
	
	
	if(_unlocks.length>0){		
		for(var i=0;i<_unlocks.split(',').length;i++){
			var _index=(_unlocks.split(',')[i].substr(ClassMastery.Name.length+1));
			$("#"+_unlocks.split(',')[i]).removeClass("borderGreen");
			$("#"+_unlocks.split(',')[i]).removeClass("borderBlue");
			cascadeUnselectMastery(ClassMastery,_index-1);
		}
	}	
}
function cascadeUnselectPassiveTree(tree,index){
	//console.log(tree);
	//console.log(index);
	var _name=tree;
	var _unlocks=tree.Nodes[index].unlocks;	
	console.log(_unlocks);
	
	$("#"+tree.Nodes[index].node_id).removeClass("borderBlue").removeClass("borderGreen");
	
	if(_unlocks.length>0){		
		for(var i=0;i<_unlocks.split(',').length;i++){
			var _index=(_unlocks.split(',')[i].substr(tree.Name.length+1));
			$("#"+_unlocks.split(',')[i]).removeClass("borderGreen");
			$("#"+_unlocks.split(',')[i]).removeClass("borderBlue");
			cascadeUnselectPassiveTree(tree,_index-1);
		}
	}	
}
//PassiveTree part
function PopulatePassiveTrees(){
	for(var q=0;q<3;q++){
		var divs="";
		var tree=PassiveTrees[q];
		//here just so I don't need to program the other 2 trees at the same time
		if(tree!=null){
			for(var i=0;i<tree.Nodes.length;i++){
				var tooltip=tree.Nodes[i].attribute.replace('#',tree.Nodes[i].modifier);
				divs+="<div class='PassiveTreeNode' search='"+tooltip.toLowerCase()+" "+tree.Nodes[i].point.toLowerCase()+"' title='"+tooltip+"&#010;&#010;"+tree.Nodes[i].point+"' id='"+tree.Nodes[i].node_id+"'>"+(i+1)+"</div>\n";				
			}
			//storm stuff :)
			if(false){
				for(var i=168;i>55;i--){
					var tooltip="Offensive_Tree_"+(i+1);
					divs+="<div class='PassiveTreeNode' title='"+tooltip+"' id='Offensive_Tree_"+(i+1)+"'>"+(i+1)+"</div>\n";
				}
			}
			var divcontainer=$("#PassiveTreeContainer").children()[q+1];
			divcontainer.innerHTML=divs;
			$(divcontainer).children().tooltip();
			$($(".Mastery_tree")[0]).addClass("borderBlue");
		}
	}
	$(".PassiveTreeNode").click(function(){		
		
		var treeSelected=PassiveTrees[$(this).parent().index()-1];
		var _index=this.id.substr(treeSelected.Name.length+1);
		var _unlocks=treeSelected.Nodes[_index-1].unlocks;
		
		console.log("unlocks:"+_unlocks);
		
		if(this.className.indexOf("borderBlue")===-1){
			if(this.className.indexOf("borderGreen")!==-1){
				cascadeUnselectPassiveTree(treeSelected,_index-1);
				$(this).removeClass("borderGreen");
				$(this).addClass("borderBlue");
				calculateBonuses();
				return;
			}
			else{
				calculateBonuses();
				return;
			}
		}
		
		if(_unlocks.length>0){
			for(var i=0;i<_unlocks.split(',').length;i++){
				$("#"+_unlocks.split(',')[i]).addClass("borderBlue");
			}
		}
		console.log("click");
		console.log(this);
		$(this).removeClass("borderBlue").addClass("borderGreen");
		calculateBonuses();
	});
}

function calculatePointsSpend(){
	console.log("calculatePointsSpend");
	var masteryPoints=$("#mastery .borderGreen").length;
	var passiveSkillPoints=$("#PassiveTreeContainer .borderGreen").length;
	var level=passiveSkillPoints-20;
	if(level<1)
		level=1;
	
	$("#levelCounter")[0].innerHTML="Level: "+level;
	$("#MasteryCounter")[0].innerHTML="Mastery: "+masteryPoints+"/25";
	$("#PassiveTreeCounter")[0].innerHTML="Passives: "+passiveSkillPoints+"/118";
}
function resetAllTrees(){	
	//todo unselect EVERYTHING
	$(".borderGreen").removeClass("borderGreen");
	$(".borderBlue").removeClass("borderBlue");
	
	$("#class_selector").change();
	$("#Mastery_selector").change();
	
	$("#Offensive_Tree_1").addClass("borderBlue");
	$("#Offensive_Tree_10").addClass("borderBlue");
	$("#Offensive_Tree_17").addClass("borderBlue");
	$("#Offensive_Tree_25").addClass("borderBlue");
	
	$("#Defensive_Tree_1").addClass("borderBlue");
	$("#Defensive_Tree_10").addClass("borderBlue");
	$("#Defensive_Tree_17").addClass("borderBlue");
	$("#Defensive_Tree_25").addClass("borderBlue");
}


//code that serves no real use anymore but it saved me about 2h of frustration with css so its staying 4 now incase I need it again
function exportCss(){
	var txt="";
	var selected=$(".PassiveTreeNode[style]");
	
	for(var i=selected.length-1;i>=0;i--){
		txt+="<div>#"+selected[i].id+"{\n "+$(selected[i]).attr("style")+"\n}</div>";
	}
	
	$("#calculator")[0].innerHTML=txt;
}
function exportPassives(){
	//{"node_id":"Offensive_Tree_56","attribute":"+# example value"				,"modifier":1	,"point":""		,"unlocks":""},
	var txt="";
	var selected=$(".PassiveTreeNode");
	
	for(var i=selected.length-1;i>=0;i--){
		txt+='<div>{"node_id":"'+selected[i].id+'","attribute":"+# example value"				,"modifier":1	,"point":""		,"unlocks":""},</div>';
	}
	$("#calculator")[0].innerHTML=txt;
}