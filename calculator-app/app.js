
var  app_root = __dirname,

express=require('express');
var app=express();



app.get('/',function(req,res){
	/*res.send('hello world');*/
	   res.sendFile('./site/index.html',{root:app_root});
})

app.listen(9000,function(){console.log("the server has srated");});

