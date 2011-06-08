doc={
nombre:"Jose"
};

var map=function(doc){
if(doc.nombre){
  len=doc.nombre.length;
  console.log(len);
  for (var i=0;i<len;i++){
    for (var j=0;j<(len-i);j++){
    
    console.log(doc.nombre.substring(j,j+i+1)); 
    }

  }
}

};

map(doc);
