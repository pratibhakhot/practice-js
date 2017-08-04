
var  app_root = __dirname,
console.log(app_root);
express=require('express');
var app=express();


app.use(express.static(app_root+'/site/public'));
app.get('/',function(req,res){
	/*res.send('hello world');*/
	   res.sendFile('./site/index.html',{root:app_root});
})

app.listen(9000,function(){console.log("the server has srated");});

