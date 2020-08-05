function save(){	
	prompt("Please Copy everything below", _save());
}
function _save(){
	var saveFile="";
	saveFile+="version:"+version+";";
	saveFile+="#class_selector:"+$("#class_selector")[0].selectedIndex+";";
	saveFile+="#Mastery_selector:"+$("#Mastery_selector")[0].selectedIndex+";";
	saveFile+="BlueBorder:"+saveIds($(".borderBlue"));
	saveFile+="GreenBorder:"+saveIds($(".borderGreen"));
	return saveFile;
}

function saveIds(arr){
	var txt="";
	for(var i=0;i<arr.length;i++){		
		txt+=arr[i].id;
		if(i<arr.length-1)
			txt+=",";
		else
			txt+=";";
	}
	return txt;
}

function load(){
	var stupidTxtValue=Math.floor(Math.random()*stupidTexts.length);
	var backup=_save();	
	var loadfile=prompt("Please Paste the build below", stupidTexts[stupidTxtValue]);
	if(loadfile===null)
		return;
	_load(loadfile,backup);
	calculateBonuses();
}
function _load(saveFile,backup){
	if(saveFile==="_reset"){
		resetAllTrees();
		return;
	}
	try{
		var values=saveFile.split(';');
		for(var i=0;i<values.length;i++){
			var keyValuePair=values[i].split(':');
			switch(keyValuePair[0]){
				case "version":{
					console.log(version+":"+keyValuePair[1])
					if(version!==keyValuePair[1]){
						alert("you are using a outdated tree. No I haven't made backwards capability yet.");
						return _load(backup,"_reset");
					}else{
						resetAllTrees();
					}
					break;
				}
				case "#class_selector":{
					console.log(keyValuePair[1]);
					$("#class_selector option").eq(parseInt(keyValuePair[1])).prop('selected',true).change();
					break;
				}
				case "#Mastery_selector":{
					console.log(keyValuePair[1]);
					$("#Mastery_selector option").eq(parseInt(keyValuePair[1])).prop('selected',true).change();
					break;
				}
				case "BlueBorder":{
					console.log(keyValuePair[1]);
					if(keyValuePair[1]!=="")
						_AddClass(keyValuePair[1].split(","),"borderBlue");
					break;
				}
				case "GreenBorder":{
					console.log(keyValuePair[1]);
					if(keyValuePair[1]!==""){
						_RemoveClass(keyValuePair[1].split(","),"borderBlue");
						_AddClass(keyValuePair[1].split(","),"borderGreen");
					}
					break;
				}			
				default:
					break;
			}
		}
	}
	catch(Exception){
		alert("could not parse file: "+Exception);
		return _load(backup,"_reset");
	}
	
}
function _AddClass(arr,className){
	for(var i=0;i<arr.length;i++){
		console.log("id:"+arr[i]+" index:"+i);
		$("#"+arr[i]).addClass(className);
	}
}
function _RemoveClass(arr,className){
	for(var i=0;i<arr.length;i++){
		console.log("id:"+arr[i]+" index:"+i);
		$("#"+arr[i]).removeClass(className);
	}
}
