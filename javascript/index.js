doc={
name:"ComeCastañas"
};

function map (doc){
if(doc.name){
  var len=doc.name.length;
  var n=0;
  var key='';
  console.log(len);
  results={}
  for (var i=0;i<len;i++){
    for (var j=0;j<(len-i);j++){
      n++;
      key=doc.name.substring(j,j+i+1);
      results[key]=doc.name;
    }
  }
  console.dir(results);
}

};

map(doc);
