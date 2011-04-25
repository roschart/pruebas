function(doc){
if(doc.name){
  len=doc.name.length;
  for (var i=0;i<len;i++){
    for (var j=0;j<(len-i);j++){
    	emit(doc.name.substring(j,j+i+1),doc); 
    }

  }
}

};
