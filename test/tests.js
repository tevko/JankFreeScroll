/* 
  JankFreeScroll qunit tests 
  8 August 2016
  
  Verify that JankFreeScroll fires on scroll up & down, and is cancelable
*/

QUnit.module('JankFreeScroll', {
    beforeEach: function () {
      window.s = jankfreescroll({
			onScrollDown() {
				document.body.style.backgroundColor = 'white';
			},
			onScrollUp() {
				document.body.style.backgroundColor = 'orange';
			}
		});
    },
    afterEach: function () {
      window.cancelAnimationFrame(window.s);
    }
});

QUnit.test( "changes bg on scrolldown", function( assert ) {
  
  window.scrollTo( 0, 1000 );
  assert.equal( document.body.style.backgroundColor, 'white', 'bg should be white' );
  
});

QUnit.test( "change bg on scrollup", function( assert ) {
  
  window.scrollTo( 0, 1000 );
  window.scrollTo( 0, 0 );

  assert.equal( document.body.style.backgroundColor, 'orange', 'bg should be orange' );
});

QUnit.test( "should be cancelable", function( assert ) {

  
  window.cancelAnimationFrame(window.s);

  window.scrollTo( 0, 1000 );
  window.scrollTo( 0, 0 );

  assert.equal( document.body.style.backgroundColor, '', 'bg should not be set' );
});
