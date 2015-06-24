var FollowUpView = Backbone.View.extend({

	count: 0,

	el: $( ".followup-wrapper" ),

	events: {
		'click .add-field': 'addField',
		"click .follow-up-submit": 'submitForm'
	},

	initialize: function() {},

	render: function() { 
		return this;
	},

	addField: function( event ) {
		this.count++;
		$( event.currentTarget ).before('<input type="text" class="multiple-question" id="question-'+ this.count +'" />');
		return false;
	},

	submitForm: function( event ) {
		
		event.preventDefault();

		this.emailContent = {
			workingOn: $( "[name='workingOn']:checked" ).val(),
			stage: $( "[name='stage']:checked" ).val(),
			feedback: $( "[name='feedback']:checked" ).val(),
			sufficientFeedback: $( "#sufficientFeedback" ).val(),
			meaningfulFeedback: $( "#meaningfulFeedback" ).val(),
			questions: {}
		};
                    
		_.each( this.$( '.multiple-question' ), function( textField ) {
  			this.emailContent.questions[ $( textField ).attr( "id" ) ] = $( textField ).val();
		}, this);

		console.log( this.emailContent );

		var that = this;
		$.get( "/followUp", this.emailContent, function( data ){
			console.log( data );
        	if( data == "sent" ) {
				console.log( "Follow up form" );
			}
		});

		this.$( '.form-wrapper' ).hide();
		this.$( '.thank-you' ).fadeIn( 'fast' );

        return false;

	},

});

var followUpView = new FollowUpView();
followUpView.render();