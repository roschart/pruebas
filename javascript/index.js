doc={
name:"Jose"
};

var map=function(doc){
if(doc.name){
  len=doc.name.length;
  console.log(len);
  for (var i=0;i<len;i++){
    for (var j=0;j<(len-i);j++){
    
    console.log(doc.name.substring(j,j+i+1)); 
    }

  }
}

};

map(doc);
