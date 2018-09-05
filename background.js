console.log('Works');

chrome.storage.sync.get(['count'],function(result) {
	if(isNaN(result.count)){
		chrome.storage.sync.set({count:0},function(){
			console.log('Zero set');
		})
	} 
});

chrome.commands.onCommand.addListener(extTriggered);

function extTriggered (command) {
	if(command==="trigger"){
		obj= {
			"url": [
				"http://www.youtube.com/*",
				"https://www.youtube.com/*"
			]
		}
		chrome.tabs.query(obj, checkTabs)

		function checkTabs(tabs){
				chrome.storage.sync.get(['info','count'],function(result){
					var str= result.info;
					var temp_count=result.count;
					console.log(temp_count);
					for(var i=0;i<tabs.length;i++){
						var pos= temp_count+i+1;
						str+=pos+". ";
						str+="<a href="
						str+=tabs[i].url;
						str+="/a>"+tabs[i].title;
						str+="<br>";
					}
					var newCount=result.count+tabs.length;
					chrome.storage.sync.set({info:str,count:newCount},()=>{
						console.log(str);
					});
				});
		}
	}
}

function xYz(command){
	console.log('Triiger works!');
}