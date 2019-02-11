var pictureu=document.getElementById("picture_u");
var pictured=document.getElementById("picture_d");
var lis=document.querySelectorAll("#picture_d li");
var i=0;
// 自动播放
timer=setInterval(function(){
	i++;
	if(i>=9){
		pictureu.style.left="0rem";
		i=1;
	}
	move(pictureu,"left",-3.5*i);
	qc();
},3000)

function qc(){
	for(var j=0;j<lis.length;j++){
		lis[j].style.background="none";
	}
	lis[i === 8 ? 0 : i].style.background = "#fff";
}
function move(ele,sty,len){
	clearInterval(ele.timer);
	if(sty==="left"){
		ele.timer=setInterval(function(){
			ele.style.left=ele.offsetLeft-0.01+"rem";
			if(ele.offsetLeft<=len){
				clearInterval(ele.timer);
				ele.style.left=len+"rem";
			}
		})
	}else{
		ele.timer=setInterval(function(){
			ele.style.left=ele.offsetLeft+0.01+"rem";
			if(ele.offsetLeft>=len){
				clearInterval(ele.timer);
				ele.style.left=len+"rem";
			}
		})
	}			
}


