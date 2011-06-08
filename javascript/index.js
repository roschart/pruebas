doc={
nombre:"ComeCastañas"
};

function map (doc){
if(doc.nombre){
  var len=doc.nombre.length;
  var n=0;
  var key='';
  console.log(len);
  results={}
  for (var i=0;i<len;i++){
    for (var j=0;j<(len-i);j++){
      n++;
      key=doc.nombre.substring(j,j+i+1);
      results[key]=doc.nombre;
    }
  }
  console.dir(results);
}

};

map(doc);
