var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var port = 7654;
var index = require( './modules/routes/index' );
var sentimentals = require( './modules/routes/sentimentals' );

app.use( bodyParser.json() );
app.use( express.static( 'public' ) );

app.use( '/', index );
app.use( '/sentimentals', sentimentals );

app.listen( port, function(){
    console.log( 'server up on:', port );
}); 