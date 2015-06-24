var SplashView = Backbone.View.extend({

	el: ".splash",

	events: {
		'click .learn-more' : 'handleLearnMore'
	},

	initialize: function() {
		this.setHeroHeight();
	},

	setHeroHeight: function() {
		var windowWidth = $( window ).width();
		var windowHeight = $( window ).height();
		if ( windowWidth > 800 ) {
			this.$( '.hero' ).height( windowHeight );
		}
	},

	handleLearnMore: function() {
		var aboutUsOffset = this.$('.about-us').offset().top;
		 $( "html, body" ).animate({ 
		 	scrollTop: aboutUsOffset
		 }, 1000 );
		 return false;
	},

	render: function() {
		return this;
	}

});

var splashView = new SplashView();
splashView.render();