var i=0;
function inputTask(){
    let x= new Array(); 
	x[i]=document.getElementsByClassName("Task").value;
	i++;
	println();
}
function println(){
	for(let j=0;j<i;j++){
		alert("Task added");
		document.getElementById("input").innerHTML=x[j];
	}
}
