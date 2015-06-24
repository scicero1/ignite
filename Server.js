var express=require( 'express' );
var app=express();

// Create path from server to /static directory
app.use( express.static( 'static' ) );


/*------------------Routing Started ------------------------*/
app.get( '/',function( req,res ){
	res.sendfile( 'index.html' );
});

app.get( '/service',function( req, res ){
	// Create a custom service
});

// Start the Application Server
app.listen(3000,function(){
	console.log("Express Started on Port 3000");
});
