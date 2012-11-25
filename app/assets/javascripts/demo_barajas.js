			$(function() {

				var $el = $( '#baraja-el' ),
					baraja = $el.baraja();

				// navigation
				$( '#nav-prev' ).on( 'click', function( event ) {

					baraja.previous();
				
				} );

				$( '#nav-next' ).on( 'click', function( event ) {

					baraja.next();
				
				} );

				// playing with different origins and ranges	
				$( '#nav-fan5' ).on( 'click', function( event ) {

					baraja.fan( {
						speed : 500,
						easing : 'ease-out',
						range : 100,
						direction : 'right',
						origin : { x : 50, y : 200 },
						center : true
					} );
				
				} );

				// close the baraja
				$( '#close' ).on( 'click', function( event ) {

					baraja.close();
				
				} );

				// example of how to add more items
				$( '#add' ).on( 'click', function( event ) {

					if( $( this ).hasClass( 'disabled' ) ) {
						return false;
					}

					$( this ).addClass( 'disabled' );

					baraja.add( $('<li><img src="/assets/6.jpg" alt="image6"/><h4>Serenity</h4><p>Truffaut wes anderson hoodie 3 wolf moon labore, fugiat lomo iphone eiusmod vegan.</p></li><li><img src="/assets/7.jpg" alt="image7"/><h4>Dark Honor</h4><p>Chillwave mustache pinterest, marfa seitan umami id farm-to-table iphone.</p></li><li><img src="/assets/8.jpg" alt="image8"/><h4>Nested Happiness</h4><p>Minim post-ironic banksy american apparel iphone wayfarers.</p></li><li><img src="/assets/9.jpg" alt="image9"/><h4>Cherry Country</h4><p>Sint vinyl Austin street art odd future id trust fund, terry richardson cray.</p></li>') );
				
				} );

			});
