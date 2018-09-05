chrome.storage.sync.get(['info'],function(result){
	var loc= document.getElementById('here');
	loc.innerHTML=result.info;
	console.log('Data set in popup');
});

console.log('In here');

var x= document.getElementById('btn');
if(x){
	x.addEventListener('click',function (){
			console.log('Trying');
			var loc= document.getElementById('here');
			loc.innerHTML="";
			chrome.storage.sync.set({info:"",count:0},function(){
			console.log('Set blank');
			});
		});
}
else{
	console.log('Button invalid');
}

window.addEventListener('click',function(e){
  if(e.target.href!==undefined){
    chrome.tabs.create({url:e.target.href})
  }
})