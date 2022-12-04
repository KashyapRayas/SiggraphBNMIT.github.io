document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var checkbox = document.querySelector( '#menu-btn' );
var icon = document.querySelector( '.menu-icon .navicon' );
        
var listener = function( e ) {
    if( e.target != checkbox && e.target != icon ) {
    checkbox.checked = false;
    document.removeEventListener( 'click', listener );
    }
};

checkbox.addEventListener( 'click', function(){
    if( this.checked ) {
    document.addEventListener( 'click', listener );
    } 
});

