function populateTable(selector,arr,obj){
	for(var i=0;i<arr.length;i++){
		var subtxt="<tr>";
		if(obj){
			for(var j=0;j<obj.length;j++){
				subtxt+="<td>"+arr[i][obj[j]]+"</td>";			
			}
		}else{
			subtxt+="<td>"+arr[i]+"</td>";
		}
		subtxt+="</tr>";
		$(selector).after(subtxt);
	}
}

function createNavbar(subfolder){
	var html="";
	for(var i=0;i<navbar.length;i++){
		var lnk=navbar[i];
		if(lnk.submenu){
			html+="<div class='dropdown'>";
			html+='<button class="dropbtn">'+lnk.title+'<i class="fa fa-caret-down"></i></button>';
			html+='<div class="dropdown-content">';
			for(var j=0;j<lnk.submenu.length;j++){				
				html+=createNavbarHtml(lnk.submenu[j],subfolder);
			}
			html+="</div></div>";
		}
		else{
			html+=createNavbarHtml(lnk,subfolder);
		}
			
	}
	$('#navbar')[0].innerHTML=html;
}
function createNavbarHtml(lnk,subfolder){
	var subhtml="";
	if(lnk.loc===subfolder)
		subhtml+="<a href='"+lnk.url+"'>"+lnk.title+"</a>";
	else {
		if(lnk.loc==="root"){
			subhtml+="<a href='../"+lnk.url+"'>"+lnk.title+"</a>";
		}
		else{
			subhtml+="<a href='"+lnk.loc+"/"+lnk.url+"'>"+lnk.title+"</a>";
		}
	}
	return subhtml;
}