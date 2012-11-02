var HTTPParser = function(){

};

HTTPParser.prototype.reinitialize = function(a){
  console.log('HTTPParser reinitializing',a);
};

HTTPParser.prototype.finish = function(a){
  console.log('HTTPParser finishing',a);
};

HTTPParser.prototype.execute = function(a,b,c){
  console.log('HTTPParser executing',a);
};

exports.HTTPParser = HTTPParser;
