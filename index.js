// Create the state that will contain the whole game 
var mainState = { 
	preload: function() { 
// Here we preload the assets 

 game.load.image('paddle', 'assets/paddle.png');   

}, 
	create: function() { 
// Here we create the game 
// Set the background color to blue 
		game.stage.backgroundColor = '#3598db';
  // Start the Arcade physics system (for movements and collisions)
		game.physics.startSystem(Phaser.Physics.ARCADE); 
   // Add the physics engine to all the game objetcs 
		game.world.enableBody = true;

		// Create the left/right arrow keys 
		this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	// Add the paddle at the bottom of the screen 
	this.paddle = game.add.sprite(200, 400, 'paddle'); 
	// Make sure the paddle won't move when it hits the ball 
	this.paddle.body.immovable = true; },  
}, 
	update: function() {
 // Here we update the game 60 times per second 

// Move the paddle left/right when an arrow key is pressed
 if (this.left.isDown) this.paddle.body.velocity.x = -300; 
 else if (this.right.isDown) this.paddle.body.velocity.x = 300; 
 // Stop the paddle when no key is pressed 
 else this.paddle.body.velocity.x = 0; },

},

};
 // Initialize the game and start our state
var game = new Phaser.Game(400, 450); 
game.state.add('main', mainState); 
game.state.start('main');