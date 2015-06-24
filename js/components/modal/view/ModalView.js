var ModalView = Backbone.View.extend({

	emailContent: {},

	el: $( ".splash" ),

	events: {
		"click .sign-up" : "toggleModal",
		"click .md-close" : "toggleModal",
		"click .md-overlay" : "toggleModal",
		"click .sign-up-submit": 'submitForm'

	},

	initialize: function() {
		this.render();
	},

	render: function() { 
		return this;
	},

	toggleModal: function() {
		this.$( ".md-modal" ).toggleClass( 'md-show' );
		return false;
	},

	submitForm: function() {
		
		this.emailContent = {
			email: $( "#email" ).val(),
			name: $( "#name" ).val(),
			city: $( "#city" ).val(),
			idea_Y: $( "#one" ).prop('checked'),
			idea_N: $( "#two" ).prop('checked')
		};
                    
		var that = this;

		$.get( "/register", this.emailContent, function( data ){
			console.log( data );
        	if( data == "sent" ) {
				location.replace( "/form.html" );
			}
		});

        return false;

	},

	submitSuccess: function() {
		console.log( "submite success" );
	},

	submitError: function() {
		console.log( "sbumtit error" );
	}


});

var modalView = new ModalView();
modalView.render();