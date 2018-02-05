function drawTree(k) {
	for (var i = 0; i < k; i++) {
		var star = '';
		for (var j = 0; j <= i; j++) {
			star += '*';
		}
		console.log(star);
	}
}
drawTree(6);
drawTree(7);



/*var txt = "";
for(i=1;i<=10;i++){
  txt = "";
  for(j=i;j<10;j++){
    txt += " ";
  }
  for(k=0;k<(i*2)-1;k++){
    txt += "*";
  }
  console.log(txt);
}*/