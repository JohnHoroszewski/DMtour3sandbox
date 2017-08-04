///////////////////////////////////////////////////////////
//////////////////// DEFINE ANIMATIONS ////////////////////
///////////////////////////////////////////////////////////
        

var anim_p1_s1_2,
    anim_p1_s1_3,
    anim_p1_s2,
    anim_p1_s4_1,
    anim_p1_s4_2,
    anim_p1_s6,
    anim_p2_s1_1,
    anim_p2_s1_2,
    anim_p2_s1_3,
    anim_p2_s1_4,
    anim_p2_s4,
    anim_p3_s1,
    anim_p3_s3_1,
    anim_p3_s3_2,
    anim_p3_s5,
    anim_p3_s7


////////////////////////////////////////////////////////
//////////// DESTROY ANIMATIONS SELECTION //////////////
////////////////////////////////////////////////////////

function init_anim(selector, data) {
  bodymovin.destroy( anim_p1_s1_2 );
  bodymovin.destroy( anim_p1_s1_3 );
  bodymovin.destroy( anim_p1_s2 );
  bodymovin.destroy( anim_p1_s4_1 );
  bodymovin.destroy( anim_p1_s4_2 );
  bodymovin.destroy( anim_p1_s6 );
  bodymovin.destroy( anim_p2_s1_1 );
  bodymovin.destroy( anim_p2_s1_2 );
  bodymovin.destroy( anim_p2_s1_3 );
  bodymovin.destroy( anim_p2_s1_4 );
  bodymovin.destroy( anim_p3_s1 );
  bodymovin.destroy( anim_p3_s3_1 );
  bodymovin.destroy( anim_p3_s3_2 );  
  bodymovin.destroy( anim_p3_s5 );
  bodymovin.destroy( anim_p3_s7 );

  
  var animData = {
    wrapper: document.getElementById(selector),
    animType: 'html',
    loop: true,
    prerender: true,
    autoplay: false,
    path: data
  };
  return bodymovin.loadAnimation(animData);
};






////////////////////////////////////////////////////////
//////////////////// PATH SELECTION ////////////////////
////////////////////////////////////////////////////////

$(document).ready(function() {

  //Check which path
  $(document).on('click', '.do-path-start', function() {
    var path = $('input[name=pathSelect]:checked').val();
    //If Care Team Path is selected
    
    if (path == 'care-team') {
      //PATH 01
      //SECTION 01

      //Deactivate Start screen
      $('#start').toggleClass('active inactive');

      //Activate Path 01
      $('#path_01').toggleClass('inactive active');

      // Call animation
      anim_p01s01_1();

      // Actvate, deactivate backlinks
      $('#backlink .start-over').toggleClass('inactive active');
      $('#backlink .back-to-site').toggleClass('active inactive');

      // Actvate, deactivate End CTAs
     // $('.explore.care-team').toggleClass('inactive active');

    } else if (path == 'care-plan') { 
    //If Care Plan Path is selected
      //PATH 02
      //SECTION 01

      //Deactivate Start screen
      $('#start').toggleClass('active inactive');

      //Activate Path 02
      $('#path_02').toggleClass('inactive active');

      // Trigger animation
      anim_p2_s1_1 = init_anim('anim_p02s01-1', '../bodymovin/p02s01/data.json');

      //Activate animation and tooltip
      setTimeout( function() { $('#tip_p02s01-1').toggleClass('inactive active'); }, 1100);
      $('#anim_p02s01-1').toggleClass('inactive active');

      // Actvate, deactivate backlinks
      $('#backlink .start-over').toggleClass('inactive active');
      $('#backlink .back-to-site').toggleClass('active inactive');

      // Actvate, deactivate End CTAs
      // $('.explore.care-team').toggleClass('inactive active');

    } else if (path == 'patient') {
    // If Patient Path is selected

      //PATH 03
      //SECTION 01

      //Deactivate Start screen
      $('#start').toggleClass('active inactive');

      //Activate Path 03
      $('#path_03').toggleClass('inactive active');

      //Activate animation and tooltip
      setTimeout( function() { $('#tip_p03s01').toggleClass('inactive active'); }, 1100);
      $('#anim_p03s01').toggleClass('inactive active');
      // Actvate, deactivate backlinks
      $('#backlink .start-over').toggleClass('inactive active');
      $('#backlink .back-to-site').toggleClass('active inactive');

      // Actvate, deactivate End CTAs
      // $('.explore.care-team').toggleClass('inactive active');

    } else {
      //If nothing is selected
      // Do this thing...
    }
  });





////////////////////////////////////////////////////////
//////////////// ANIMATION FUNCTIONS ///////////////////
////////////////////////////////////////////////////////


//////////  PATH 01  //////////
// Slide 1

function anim_p01s01_1()
{
  //Activate animation and tooltip
  $('#anim_p01s01-1').toggleClass('inactive active');
  setTimeout( function() {
    $('#tip_p01s01-1').toggleClass('inactive active');
  }, 750 );
}

function anim_p01s01_2()
{
  // Activate animation and tooltip
  $( '#anim_p01s01-2' ).toggleClass( 'inactive active' );
  $( '#tip_p01s01-2' ).toggleClass( 'inactive active' );

  // Initialize animation
  anim_p1_s1_2 = init_anim( 'anim_p01s01-2', '../bodymovin/p01s01/02/data.json' );

  // Trigger animation
  // Start animation and pause on frame 1
  anim_p1_s1_2.addEventListener('data_ready', function() {
    anim_p1_s1_2.goToAndStop(1, true);
  }, false);

  // Start animation after 1250ms
  setTimeout( function(){
    anim_p1_s1_2.play();
    anim_p1_s1_2.addEventListener( 'loopComplete', function(){
      anim_p1_s1_2.goToAndStop( 100, true );
    });
  }, 1250);
}


function anim_p01s01_3()
{
  // Activate animation and tooltip
  $( '#anim_p01s01-3' ).toggleClass( 'inactive active' );
  $( '#tip_p01s01-3' ).toggleClass( 'inactive active' );

  // Trigger animation
  // Initialize animation
  anim_p1_s1_3 = init_anim( 'anim_p01s01-3', '../bodymovin/p01s01/03/data.json' );

  // Start animation after 1250ms
  setTimeout( function(){ 
    anim_p1_s1_3.play();
    anim_p1_s1_3.addEventListener( 'loopComplete', function(){
      anim_p1_s1_3.goToAndStop( 50, true );
    });
  }, 1250 );
}



// Slide 2

function anim_p01s02_1( prev )
{
  // Activate animation and tooltip
  // Check to see if click is from previous link
  if ( prev != null ) {
    console.log( prev )
  } else {
    $( '#anim_p01s02' ).toggleClass( 'inactive active' );
  }
  setTimeout( function() { $( '#tip_p01s02-1' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // Initialize animation
  anim_p1_s2 = init_anim( 'anim_p01s02', '../bodymovin/p01s02/data.json' );

  // Start animation and pause on frame 1
  anim_p1_s2.addEventListener('data_ready', function() {
    anim_p1_s2.goToAndStop(1, true);
  }, false);
}


function anim_p01s02_2()
{
  // Activate animation and tooltip
  $( '#tip_p01s02-2' ).toggleClass( 'inactive active' );

  // Trigger animation
  // No animation for this tooltip
}


function anim_p01s02_3()
{
  // Activate animation and tooltip
  $( '#tip_p01s02-3' ).toggleClass( 'inactive active' );

  // Trigger animation
  // Stop animation if still running
  anim_p1_s2.stop();
}


function anim_p01s02_4()
{
  // Activate animation and tooltip
  $( '#tip_p01s02-4' ).toggleClass( 'inactive active' );

  // Trigger animation
  // Start animation after 1250ms
  setTimeout( function(){ 
    anim_p1_s2.play();
    anim_p1_s2.addEventListener( 'loopComplete', function(){
      anim_p1_s2.goToAndStop( 280, true );
    });
  }, 1250 );
}


function anim_p01s02_5()
{
  // Activate animation and tooltip
  // Check to see if div is active when coming from previous buttons click
  if ( $( '#anim_p01s02').hasClass( 'inactive' ) ){
    $( '#anim_p01s02').toggleClass( 'inactive active' );
  }  
  $( '#tip_p01s02-5' ).toggleClass( 'inactive active' );

  // Trigger animation
  // Initialize animation
  anim_p1_s2 = init_anim( 'anim_p01s02', '../bodymovin/p01s02/data.json' );
  // Stop animation if still running
  anim_p1_s2.stop();
}



// Slide 3

function anim_p01s03()
{
  // Activate screen/animation and tooltip
  $( '#anim_p01s03' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p01s03' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // No animation for this tooltip
}



// Slide 4

function anim_p01s04_1( prev )
{
  // Activate screen/animation and tooltip
  // Check to see if click is from previous link
  if ( prev != null ) {
    console.log( prev )
  } else {
    $( '#anim_p01s04' ).toggleClass( 'inactive active' );
  }
  setTimeout( function() { $( '#tip_p01s04-1' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // Initialize animation
  anim_p1_s4 = init_anim( 'anim_p01s04', '../bodymovin/p01s04/data.json' );

  // Start animation and pause on frame 1
  anim_p1_s4.addEventListener('data_ready', function() {
    anim_p1_s4.play();
    anim_p1_s4.goToAndStop(1, true);
  }, false);
}


function anim_p01s04_2()
{
  // Activate screen/animation and tooltip
  // Check to see if div is active when coming from previous buttons click
  if ( $( '#anim_p01s04').hasClass( 'inactive' ) ){
    $( '#anim_p01s04').toggleClass( 'inactive active' );
  }
  $( '#tip_p01s04-2' ).toggleClass( 'inactive active' );

  // Initialize animation
  anim_p1_s4 = init_anim( 'anim_p01s04', '../bodymovin/p01s04/data.json' );

  // Trigger animation
  // Start
  anim_p1_s4.playSegments([ 0, 170 ], true);
  anim_p1_s4.addEventListener( 'loopComplete', function(){
    anim_p1_s4.goToAndStop( 165, true );
  });
}



// Slide 5

function anim_p01s05_1( prev )
{
  // Activate screen/animation and tooltip
  // Check to see if click is from previous link
  if ( prev != null ) {
    console.log( prev )
  } else {
    $( '#anim_p01s05' ).toggleClass( 'inactive active' );
  }
  setTimeout( function() { $( '#tip_p01s05-1' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // No animation for this tooltip
}


function anim_p01s05_2()
{
  // Activate screen/animation and tooltip
  // Check to see if div is active when coming from previous buttons click
  if ( $( '#anim_p01s05').hasClass( 'inactive' ) ){
    $( '#anim_p01s05').toggleClass( 'inactive active' );
  }
  $( '#tip_p01s05-2' ).toggleClass( 'inactive active' );

  // Trigger animation
  // No animation for this tooltip
}



// Slide 6

function anim_p01s06_1( prev )
{
  // Activate screen/animation and tooltip
  // Check to see if click is from previous link
  if ( prev != null ) {
    console.log( prev )
  } else {
    $( '#anim_p01s06' ).toggleClass( 'inactive active' );
  }
  setTimeout( function() { $( '#tip_p01s06-1' ).toggleClass( 'inactive active' ); }, 750 );
  
  // Trigger animation
  // Initialize animation
  anim_p1_s6 = init_anim( 'anim_p01s06', '../bodymovin/p01s06/data.json' );
  
  // Start animation and pause on frame 1
  anim_p1_s6.addEventListener('data_ready', function() {
    anim_p1_s6.play();
    anim_p1_s6.goToAndStop(1, true);
  }, false);
}


function anim_p01s06_2()
{
  // Activate screen/animation and tooltip
  $( '#tip_p01s06-2' ).toggleClass( 'inactive active' );

  // Trigger animation
  // No animation for this tooltip
}


function anim_p01s06_3()
{
  // Activate screen/animation and tooltip
  $( '#tip_p01s06-3' ).toggleClass( 'inactive active' );

  // Trigger animation
  anim_p1_s6.stop(); // Reset animation for Previous button click
}


function anim_p01s06_4()
{
  // Activate screen/animation and tooltip
  $( '#tip_p01s06-4' ).toggleClass( 'inactive active' );

  // Trigger animation
  anim_p1_s6.goToAndPlay( 50, true );
  anim_p1_s6.addEventListener('loopComplete', function() {
    anim_p1_s6.goToAndStop(100, true);
  }, false);
}








  //////////////////////////////////////////////////////
  //////////////////// NEXT BUTTONS ////////////////////
  //////////////////////////////////////////////////////

  //////////////////////
  // PATH 01 || 2 - 7 //
  //////////////////////

  
  // SLIDE 01

    // Check for "next" click
    $('#tip_p01s01-1 .link').on('click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s01-1' ).toggleClass( 'active inactive' );
      $( '#tip_p01s01-1' ).toggleClass('active inactive');

      // Call next screen/animation
      anim_p01s01_2();
    });

    // Check for "next" click
    $('#tip_p01s01-2 .link').on('click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s01-2' ).toggleClass( 'active inactive' );
      $( '#tip_p01s01-2' ).toggleClass('active inactive');

      // Call next screen/animation
      anim_p01s01_3();
    });

    // Check for "next" click
    $('#tip_p01s01-3 .link').on('click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s01-3' ).toggleClass( 'active inactive' );
      $( '#tip_p01s01-3' ).toggleClass('active inactive');

      // Call next screen/animation
      anim_p01s02_1();

      //Change progression
      $('#path_01_progress .one').toggleClass('active inactive');
      $('#path_01_progress .two').toggleClass('inactive active');
    });

  
  // SLIDE 02

    // Check for "next" click
    $('#tip_p01s02-1 .link').on('click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s02-1' ).toggleClass('active inactive');

      // Call next screen/animation
      anim_p01s02_2();
    });

    // Check for "next" click
    $('#tip_p01s02-2 .link').on('click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s02-2' ).toggleClass('active inactive');

      // Call next screen/animation
      anim_p01s02_3();
    });


    // Check for "next" click
    $('#tip_p01s02-3 .link').on('click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s02-3' ).toggleClass('active inactive');

      // Call next screen/animation
      anim_p01s02_4();
    });


    // Check for "next" click
    $('#tip_p01s02-4 .link').on('click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s02-4' ).toggleClass('active inactive');

      // Call next screen/animation
      anim_p01s02_5();
    });
 

    // Check for "next" click
    $('#tip_p01s02-5 .link').on('click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s02' ).toggleClass( 'active inactive' );
      $( '#tip_p01s02-5' ).toggleClass('active inactive');

      // Call next screen/animation
      anim_p01s03();

      //Change progression
      $('#path_01_progress .two').toggleClass('active inactive');
      $('#path_01_progress .three').toggleClass('inactive active');
    });

  
  // SLIDE 03

    // Check for "next" click
    $('#tip_p01s03 .link').on('click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s03' ).toggleClass( 'active inactive' );
      $( '#tip_p01s03' ).toggleClass('active inactive');

      // Call next screen/animation
      anim_p01s04_1();

      //Change progression
      $('#path_01_progress .three').toggleClass('active inactive');
      $('#path_01_progress .four').toggleClass('inactive active');
    });

  
  // SLIDE 04

    // Check for "next" click
    $('#tip_p01s04-1 .link').on('click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s04-1' ).toggleClass('active inactive');

      // Call next screen/animation
      anim_p01s04_2();
    });


    // Check for "next" click
    $('#tip_p01s04-2 .link').on('click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s04' ).toggleClass( 'active inactive' );
      $( '#tip_p01s04-2' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s05_1();

      //Change progression
      $('#path_01_progress .four').toggleClass('active inactive');
      $('#path_01_progress .five').toggleClass('inactive active');
    });

  
  // SLIDE 05


    // Check for "next" click
    $('#tip_p01s05-1 .link').on('click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s05-1' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s05_2();
    });


    // Check for "next" click
    $('#tip_p01s05-2 .link').on('click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s05' ).toggleClass( 'active inactive' );
      $( '#tip_p01s05-2' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s06_1();

      //Change progression
      $('#path_01_progress .five').toggleClass('active inactive');
      $('#path_01_progress .six').toggleClass('inactive active');
    });

  
  // SLIDE 06


    // Check for "next" click
    $('#tip_p01s06-1 .link').on('click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s06-1' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s06_2();
    });


    // Check for "next" click
    $('#tip_p01s06-2 .link').on('click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s06-2' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s06_3();
    });


    // Check for "next" click
    $('#tip_p01s06-3 .link').on('click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s06-3' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s06_4();
    });


  //END
  //Check for "next" click
  $('#tip_p01s06-4 .link').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p01s06-4').toggleClass('active inactive');
    $('#anim_p01s06').toggleClass('active inactive');
    //Deactivate Path 01
    $('#path_01').toggleClass('active inactive');
    //Activate End Screen
    $('#end').toggleClass('inactive active');
  });













  //////////////////////
  // PATH 02 || 2 - 5 //
  //////////////////////

  //SECTION 01
  //Check for "next" click
  $('#tip_p02s01-1 .link').on('click', function(){
  //alert('2-1.1->2-1.2 no anim');
  //Deactivate animation and tooltip
  $('#tip_p02s01-1').toggleClass('active inactive');
  $('#anim_p02s01-1').toggleClass('inactive active');
  // Trigger animation
  anim_p2_s1_2 = init_anim('anim_p02s01-2' , '../bodymovin/p02s01/data.json');
  //Activate animation and tooltip
  setTimeout( function() { $('#tip_p02s01-2').toggleClass('inactive active'); }, 1000);
  $('#anim_p02s01-2').toggleClass('inactive active');
  setTimeout( function() { anim_p2_s1_2.play(); }, 200);
  anim_p2_s1_2.addEventListener('loopComplete', function() {
  anim_p2_s1_2.goToAndStop(100, true);
  }, false);
  });
  
  
  //Check for "next" click
  $('#tip_p02s01-2 .link').on('click', function(){
    // alert('2-1.2->2-2.1 yes anim');
    //Deactivate tip an animation
    $('#tip_p02s01-2').toggleClass('active inactive');
    $('#anim_p02s01-2').toggleClass('active inactive');
    // Trigger animation
    $('#anim_p02s02-1').toggleClass('inactive active');
    anim_p2_s2_1 = init_anim('anim_p02s02-1', '../bodymovin/p02s02/01/data.json');
    setTimeout( function() { anim_p2_s2_1.play(); }, 1250);
    anim_p2_s2_1.addEventListener('loopComplete', function() {
      anim_p2_s2_1.goToAndStop(50, true);
    }, false);
    setTimeout( function() {$('#tip_p02s02-1').toggleClass('inactive active'); }, 1250 );
  });


 //SECTION 02
  //Check for "next" click
  $('#tip_p02s02-1 .link').on('click', function(){
    // alert('p02s02-1 first in the s02 series');
    //Deactivate animation and tooltip
    $('#anim_p02s02-1').toggleClass('active inactive');
    $('#tip_p02s02-1').toggleClass('active inactive');
    $('#tip_p02s02-2').toggleClass('inactive active');
    //Activate animation and tooltip
    $('#anim_p02s02-2').toggleClass('inactive active');
    anim_p2_s2_2 = init_anim('anim_p02s02-2', '../bodymovin/p02s02/02/data.json');
    //setTimeout( function() { $('#tip_p02s02-2').toggleClass('inactive active'); }, 1100);
    //anim_p2_s2_2.playSegments([ 0, 500 ], true );
    setTimeout( function() { anim_p2_s2_2.play(); }, 1000);
    anim_p2_s2_2.addEventListener('loopComplete', function() {
      anim_p2_s2_2.goToAndStop(100, true);
    }, false);  
  });
      
      
      
      
  //Check for "next" click
  $('#tip_p02s02-2 .link').on('click', function(){
  //  alert('p02s02-2 second one');
    
    $('#anim_p02s02-2').toggleClass('active inactive');
    $('#tip_p02s02-2').toggleClass('active inactive');
  $('#tip_p02s02-3').toggleClass('inactive active');
    //Activate animation and tooltip
  $('#anim_p02s02-3').toggleClass('inactive active');
    anim_p2_s2_3 = init_anim('anim_p02s02-3', '../bodymovin/p02s02/03/data.json');
    //setTimeout( function() { $('#tip_p02s02-2').toggleClass('inactive active'); }, 1100);
    //anim_p2_s2_2.playSegments([ 0, 500 ], true );
    setTimeout( function() { anim_p2_s2_3.play(); }, 1000);
    anim_p2_s2_3.addEventListener('loopComplete', function() {
    anim_p2_s2_3.goToAndStop(1100);
    }, false);
  });

  
 
  
  
    //Check for "next" click
  $('#tip_p02s02-3 .link').on('click', function(){
   //  alert('p02s02-3 last one');
    
    $('#anim_p02s02-3').toggleClass('active inactive');
    $('#tip_p02s02-3').toggleClass('active inactive');
    $('#tip_p02s03').toggleClass('inactive active');
    //Activate animation and tooltip
    $('#anim_p02s03').toggleClass('inactive active');
    anim_p2_s3 = init_anim('anim_p02s03', '../bodymovin/p02s03/data.json');
    //setTimeout( function() { $('#tip_p02s02-2').toggleClass('inactive active'); }, 1100);
    //anim_p2_s2_2.playSegments([ 0, 500 ], true );
    setTimeout( function() { anim_p2_s3.play(); }, 2000);
    anim_p2_s3.addEventListener('loopComplete', function() {
    anim_p2_s3.goToAndStop(100, true);
    }, false);
    $('#path_02_progress .two').toggleClass('active inactive');
    $('#path_02_progress .three').toggleClass('inactive active');
  });
  
  
  
  //SECTION 03
  //Check for "next" click
  $('#tip_p02s03 .link').on('click', function(){
    $('#tip_p02s03').toggleClass('active inactive');
    $('#anim_p02s03').toggleClass('active inactive');
    $('#tip_p02s04-1').toggleClass('inactive active');
    //Activate animation and tooltip
    $('#anim_p02s04-0').toggleClass('inactive active');
    anim_p2_s4_0 = init_anim('anim_p02s04-0', '../bodymovin/p02s04/00/data.json');
    //setTimeout( function() { $('#tip_p02s02-2').toggleClass('inactive active'); }, 1100);
    //anim_p2_s2_2.playSegments([ 0, 500 ], true );
    setTimeout( function() { anim_p2_s4_0.play(); }, 2500);
    anim_p2_s4_0.addEventListener('loopComplete', function() {
    anim_p2_s4_0.goToAndStop(29, true);
    }, false);
    $('#path_02_progress .three').toggleClass('active inactive');
    $('#path_02_progress .four').toggleClass('inactive active');  
  });

  //SECTION 04
  //Check for "next" click
  $('#tip_p02s04-1 .link').on('click', function(){
    //    alert('p02s04-1 first');
    $('#tip_p02s04-1').toggleClass('active inactive');
    $('#anim_p02s04-0').toggleClass('active inactive');
    $('#tip_p02s04-2').toggleClass('inactive active');
    //Activate animation and tooltip
    $('#anim_p02s04-1').toggleClass('inactive active');
    anim_p2_s4_1 = init_anim('anim_p02s04-1', '../bodymovin/p02s04/01/data.json');
    //setTimeout( function() { $('#tip_p02s02-2').toggleClass('inactive active'); }, 1100);
    //anim_p2_s2_2.playSegments([ 0, 500 ], true );
    setTimeout( function() { anim_p2_s4_1.play(); }, 850);
    anim_p2_s4_1.addEventListener('loopComplete', function() {
    anim_p2_s4_1.goToAndStop(50, true);
    }, false);
    $('#path_02_progress .four').toggleClass('active inactive');
    $('#path_02_progress .four').toggleClass('inactive active');  
  });


  $('#tip_p02s04-2 .link').on('click', function(){
    // alert('p02s04-2 second');

    $('#tip_p02s04-2').toggleClass('active inactive');
    $('#anim_p02s04-1').toggleClass('active inactive');
    $('#tip_p02s04-3').toggleClass('inactive active');
    //Activate animation and tooltip
    $('#anim_p02s04-2').toggleClass('inactive active');
    anim_p2_s4_2 = init_anim('anim_p02s04-2', '../bodymovin/p02s04/02/data.json');
    //setTimeout( function() { $('#tip_p02s02-2').toggleClass('inactive active'); }, 1100);
    //anim_p2_s2_2.playSegments([ 0, 500 ], true );
    setTimeout( function() { anim_p2_s4_2.play(); }, 1250);
    anim_p2_s4_2.addEventListener('loopComplete', function() {
      anim_p2_s4_2.goToAndStop(25, true);
    }, false);
    $('#path_02_progress .four').toggleClass('active inactive');
    $('#path_02_progress .four').toggleClass('inactive active');  
  });
  
  
  
  $('#tip_p02s04-3 .link').on('click', function(){
    //  alert('p02s04-3 third');

    $('#tip_p02s04-3').toggleClass('active inactive');
    $('#anim_p02s04-2').toggleClass('active inactive');
    $('#tip_p02s04-4').toggleClass('inactive active');
    //Activate animation and tooltip
    $('#anim_p02s04-2').toggleClass('inactive active');
    anim_p2_s4_2 = init_anim('anim_p02s04-2', '../bodymovin/p02s04/02/data.json');
    //setTimeout( function() { $('#tip_p02s02-2').toggleClass('inactive active'); }, 1100);
    //anim_p2_s2_2.playSegments([ 0, 500 ], true );
    setTimeout( function() { anim_p2_s4_2.play(); }, 1500);
    anim_p2_s4_2.addEventListener('loopComplete', function() {
      anim_p2_s4_2.goToAndStop(25, true);
    }, false);
    $('#path_02_progress .four').toggleClass('active inactive');
    $('#path_02_progress .four').toggleClass('inactive active');  
  });
  
  
  //Tip 4 off, tip 5 on
  $('#tip_p02s04-4 .link').on('click', function(){
          //  alert('p02s04-4 fourth');
    
    $('#tip_p02s04-4').toggleClass('active inactive');
      $('#anim_p02s04-2').toggleClass('active inactive');
  $('#tip_p02s04-5').toggleClass('inactive active');
    //Activate animation and tooltip
  $('#anim_p02s04-0').toggleClass('inactive active');
      anim_p2_s4_0 = init_anim('anim_p02s04-0', '../bodymovin/p02s04/00/data.json');
    //setTimeout( function() { $('#tip_p02s02-2').toggleClass('inactive active'); }, 1100);
    //anim_p2_s2_2.playSegments([ 0, 500 ], true );
  setTimeout( function() { anim_p2_s4_0.play(); }, 3000);
    anim_p2_s4_0.addEventListener('loopComplete', function() {
    anim_p2_s4_0.goToAndStop(25, true);
    }, false);
  });
    
    //tip 4-5 off, tip 4-6 on
  $('#tip_p02s04-5 .link').on('click', function(){
    // alert('p02s04-5 five');

    $('#tip_p02s04-5').toggleClass('active inactive');
    $('#anim_p02s04-0').toggleClass('active inactive');
    $('#tip_p02s04-6').toggleClass('inactive active');
    //Activate animation and tooltip
    $('#anim_p02s04-6').toggleClass('inactive active');
    anim_p2_s4_6 = init_anim('anim_p02s04-6', '../bodymovin/p02s04/06/data.json');
    //setTimeout( function() { $('#tip_p02s02-2').toggleClass('inactive active'); }, 1100);
    //anim_p2_s2_2.playSegments([ 0, 500 ], true );
    setTimeout( function() { anim_p2_s4_6.play(); }, 2000);
    anim_p2_s4_6.addEventListener('loopComplete', function() {
    anim_p2_s4_6.goToAndStop(50, true);
    }, false);
  });
    
    //tip 4-6 off, tip 4-7 on 
  $('#tip_p02s04-6 .link').on('click', function(){
              //alert('p02s04-5 five');
    
    $('#tip_p02s04-6').toggleClass('active inactive');
      $('#anim_p02s04-6').toggleClass('active inactive');
  $('#tip_p02s04-7').toggleClass('inactive active');
    //Activate animation and tooltip
  $('#anim_p02s04-7').toggleClass('inactive active');
      anim_p2_s4_7= init_anim('anim_p02s04-7', '../bodymovin/p02s04/07/data.json');
    //setTimeout( function() { $('#tip_p02s02-2').toggleClass('inactive active'); }, 1100);
    //anim_p2_s2_2.playSegments([ 0, 500 ], true );
  setTimeout( function() { anim_p2_s4_7.play(); }, 500);
    anim_p2_s4_7.addEventListener('loopComplete', function() {
    anim_p2_s4_7.goToAndStop(50, true);
    }, false);
  });
    
    //SECTION 05 
    //tip 4-7 off, tip 5-1 on
  $('#tip_p02s04-7 .link').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p02s04-7').toggleClass('active inactive');
    $('#anim_p02s04-7').toggleClass('active inactive');
    // Trigger animation
    anim_p2_s5_1 = init_anim('anim_p02s05-1', '../bodymovin/p02s05/01/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p02s05-1').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s05-1').toggleClass('inactive active');
    setTimeout( function() { anim_p2_s5_1.play(); }, 1100);
    anim_p2_s5_1.addEventListener('loopComplete', function() {
    anim_p2_s5_1.goToAndStop(25, true);
    }, false);
    //Change progression
    $('#path_02_progress .four').toggleClass('active inactive');
    $('#path_02_progress .five').toggleClass('inactive active');
  });


// Tip 5-1 off, tip 5-2 on
  //Check for "next" click
  $('#tip_p02s05-1 .link').on('click', function(){
    $('#tip_p02s05-1').toggleClass('active inactive');
    $('#anim_p02s05-1').toggleClass('active inactive');
    // Trigger animation
    anim_p2_s5_2 = init_anim('anim_p02s05-2', '../bodymovin/p02s05/02/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p02s05-2').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s05-2').toggleClass('inactive active');
    setTimeout( function() { anim_p2_s5_2.play(); }, 2350);
    anim_p2_s5_2.addEventListener('loopComplete', function() {
    anim_p2_s5_2.goToAndStop(50, true);
    }, false);
  });
    
    // Tip 5-2 off, tip 5-3 on
  $('#tip_p02s05-2 .link').on('click', function(){
    $('#tip_p02s05-2').toggleClass('active inactive');
    $('#anim_p02s05-2').toggleClass('active inactive');
    // Trigger animation
    anim_p2_s5_3 = init_anim('anim_p02s05-3', '../bodymovin/p02s05/03/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p02s05-3').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s05-3').toggleClass('inactive active');
    setTimeout( function() { anim_p2_s5_3.play(); }, 2000);
    anim_p2_s5_3.addEventListener('loopComplete', function() {
    anim_p2_s5_3.goToAndStop(100, true);
    }, false);
  });
    
    // Tip 5-3 off, tip 5-4 on
  $('#tip_p02s05-3 .link').on('click', function(){
    $('#tip_p02s05-3').toggleClass('active inactive');
    $('#anim_p02s05-3').toggleClass('active inactive');
    // Trigger animation
    anim_p2_s5_4 = init_anim('anim_p02s05-4', '../bodymovin/p02s05/04/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p02s05-4').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s05-4').toggleClass('inactive active');
    setTimeout( function() { anim_p2_s5_4.play(); }, 1750);
    anim_p2_s5_4.addEventListener('loopComplete', function() {
    anim_p2_s5_4.goToAndStop(2500);
    }, false);
  });
    
    // Tip 5-4 off, tip 5-5 on
  $('#tip_p02s05-4 .link').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p02s05-4').toggleClass('active inactive');
    $('#anim_p02s05-4').toggleClass('active inactive');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p02s06').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s06').toggleClass('inactive active');
    //Change progression
    $('#path_02_progress .five').toggleClass('active inactive');
    $('#path_02_progress .six').toggleClass('inactive active');
  });


  //END
  //Check for "next" click
  $('#tip_p02s06 .link').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p02s06').toggleClass('active inactive');
    $('#anim_p02s06').toggleClass('active inactive');
    //Deactivate Path 01
    $('#path_02').toggleClass('active inactive');
    //Activate End Screen
    $('#end').toggleClass('inactive active');
  });













  //////////////////////
  // PATH 03 || 2 - 7 //
  //////////////////////

  //SECTION 02
  // Check for "next" click
  $('#tip_p03s01 .link').on('click', function(){
    // Deactivate animation and tooltip
    $('#tip_p03s01').toggleClass('active inactive');
    $('#anim_p03s01').toggleClass('active inactive');
    // Activate animation and tooltip
    setTimeout( function() { $('#tip_p03s02').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s02').toggleClass('inactive active');
    // Change progression
    $('#path_03_progress .one').toggleClass('active inactive');
    $('#path_03_progress .two').toggleClass('inactive active');
  });


  //SECTION 03
  //Check for "next" click
  $('#tip_p03s02 .link').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p03s02').toggleClass('active inactive');
    $('#anim_p03s02').toggleClass('active inactive');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p03s03').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s03').toggleClass('inactive active');
    //Change progression
    $('#path_03_progress .two').toggleClass('active inactive');
    $('#path_03_progress .three').toggleClass('inactive active');
  });



  //SECTION 04
  //Check for "next" click
  $('#tip_p03s03 .link').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p03s03').toggleClass('active inactive');
    $('#anim_p03s03').toggleClass('active inactive');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p03s04').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s04').toggleClass('inactive active');
    //Change progression
    $('#path_03_progress .three').toggleClass('active inactive');
    $('#path_03_progress .four').toggleClass('inactive active');
  });

  //SECTION 05
  //Check for "next" click
  $('#tip_p03s04 .link').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p03s04').toggleClass('active inactive');
    $('#anim_p03s04').toggleClass('active inactive');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p03s05').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s05').toggleClass('inactive active');
    //Change progression
    $('#path_03_progress .four').toggleClass('active inactive');
    $('#path_03_progress .five').toggleClass('inactive active');
  });


  //SECTION 06
  //Check for "next" click
  $('#tip_p03s05 .link').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p03s05').toggleClass('active inactive');
    $('#anim_p03s05').toggleClass('active inactive');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p03s06').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s06').toggleClass('inactive active');
    //Change progression
    $('#path_03_progress .five').toggleClass('active inactive');
    $('#path_03_progress .six').toggleClass('inactive active');
  });


    //Check for "next" click
  $('#tip_p03s06 .link').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p03s06').toggleClass('active inactive');
    $('#anim_p03s06').toggleClass('active inactive');
    //Trigger animation
    anim_p3_s7_1 = init_anim('anim_p03s07-1', '../bodymovin/p03s07/01/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p03s07-1').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s07-1').toggleClass('inactive active');
    //Change progression
    $('#path_03_progress .six').toggleClass('active inactive');
    $('#path_03_progress .seven').toggleClass('inactive active');
  });


  //SECTION 07
  //Check for "next" click
  $('#tip_p03s07-1 .link').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p03s07-1').toggleClass('active inactive');
    $('#anim_p03s07-1').toggleClass('active inactive');
    //Trigger animation
    anim_p3_s7_2 = init_anim('anim_p03s07-2', '../bodymovin/p03s07/02/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p03s07-2').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s07-2').toggleClass('inactive active');
  });
    
    
    $('#tip_p03s07-2 .link').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p03s07-2').toggleClass('active inactive');
    $('#anim_p03s07-2').toggleClass('active inactive');
    //Trigger animation
    anim_p3_s7_4 = init_anim('anim_p03s07-4', '../bodymovin/p03s07/04/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p03s07-3').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s07-4').toggleClass('inactive active');
  });


  //END
  //Check for "next" click
  $('#tip_p03s07-3 .link').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p03s07-3').toggleClass('active inactive');
    $('#anim_p03s07-3').toggleClass('active inactive');
    //Deactivate Path 01
    $('#path_03').toggleClass('active inactive');
    //Activate End Screen
    $('#end').toggleClass('inactive active');
  });



  //////////////////////////////////////////////////////////
  //////////////////// PREVIOUS BUTTONS ////////////////////
  //////////////////////////////////////////////////////////

  //////////////////////
  // PATH 01 || 6 - 1 //
  //////////////////////




  //SECTION 06

  //Check for "prev" click
  $( '#tip_p01s06-4 .prev' ).on( 'click', function(){
    //Deactivate tip and animation
    $( '#tip_p01s06-4 ').toggleClass( 'active inactive' );

    //Trigger animation
    anim_p01s06_3(); 
  });


  //Check for "prev" click
  $( '#tip_p01s06-3 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip  
    $( '#tip_p01s06-3' ).toggleClass( 'active inactive' );

    // Trigger Animation
    anim_p01s06_2();
  });


  //Check for "prev" click
  $( '#tip_p01s06-2 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p01s06-2' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s06_1( 'fromPrev' ); 
  });


  //Check for "prev" click
  $( '#tip_p01s06-1 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#anim_p01s06' ).toggleClass( 'active inactive' );
    $( '#tip_p01s06-1' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s05_2();

    //Change progression
    $( '#path_01_progress .six' ).toggleClass( 'active inactive' );
    $( '#path_01_progress .five' ).toggleClass( 'inactive active' ); 
  });



  //SECTION 05

  //Check for "prev" click
  $('#tip_p01s05-2 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p01s05-2').toggleClass('active inactive');

    // Trigger animation
    anim_p01s05_1( 'fromPrev' ); 
  });


  //Check for "prev" click
  $('#tip_p01s05-1 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $( '#anim_p01s05' ).toggleClass( 'active inactive' );
    $('#tip_p01s05-1').toggleClass('active inactive');

    // Trigger animation
    anim_p01s04_2();

    //Change progression
    $('#path_01_progress .five').toggleClass('active inactive');
    $('#path_01_progress .four').toggleClass('inactive active');
  });



  //SECTION 04

  //Check for "previous" click
  $('#tip_p01s04-2 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p01s04-2').toggleClass('active inactive');

    // Trigger animation
    anim_p01s04_1( 'fromPrev' );
  });


  //Check for "previous" click
  $('#tip_p01s04-1 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $( '#anim_p01s04' ).toggleClass( 'active inactive' );
    $( '#tip_p01s04-1' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s03();


    //Change progression
    $('#path_01_progress .four').toggleClass('active inactive');
    $('#path_01_progress .three').toggleClass('inactive active');
  });


  //SECTION 03

  //Check for "previous" click
  $('#tip_p01s03 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $( '#anim_p01s03' ).toggleClass( 'active inactive' );
    $( '#tip_p01s03' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s02_5();

    // Change progression
    $('#path_01_progress .three').toggleClass('active inactive');
    $('#path_01_progress .two').toggleClass('inactive active');
  });
  

  //SECTION 03

  //Check for "previous" click
  $('#tip_p01s02-5 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p01s02-5' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s02_4();
  });


  //Check for "previous" click
  $('#tip_p01s02-4 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p01s02-4' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s02_3();
  });


  //Check for "previous" click
  $('#tip_p01s02-3 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p01s02-3' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s02_2();
  });


  //Check for "previous" click
  $( '#tip_p01s02-2 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p01s02-2' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s02_1( 'fromPrev' );
  });


  //Check for "previous" click
  $( '#tip_p01s02-1 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#anim_p01s02' ).toggleClass( 'active inactive' );
    $( '#tip_p01s02-1' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s01_3();

    // Change progression
    $( '#path_01_progress .two' ).toggleClass('active inactive');
    $( '#path_01_progress .one' ).toggleClass('inactive active');
  });


  //SECTION 01

  //Check for "previous" click
  $( '#tip_p01s01-3 .prev' ).on('click', function(){
      
    // Deactivate animation and tooltip
    $( '#anim_p01s01-3' ).toggleClass( 'active inactive' );
    $( '#tip_p01s01-3' ).toggleClass( 'active inactive' );

    // Call previous screen/animation
    anim_p01s01_2();
  });

  //Check for "previous" click
  $( '#tip_p01s01-2 .prev' ).on('click', function(){
      
    // Deactivate animation and tooltip
    $( '#anim_p01s01-2' ).toggleClass( 'active inactive' );
    $( '#tip_p01s01-2' ).toggleClass( 'active inactive' );

    // Call previous screen/animation
    anim_p01s01_1();
  });








  //////////////////////
  // PATH 02 || 6 - 1 //
  //////////////////////

  //SECTION 06
  //Check for "previous" click
  $('#tip_p02s06 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p02s06').toggleClass('active inactive');
    $('#anim_p02s06').toggleClass('active inactive');
 // Trigger animation
    anim_p2_s5_4 = init_anim('anim_p02s05-4', '../bodymovin/p02s05/04/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p02s05-4').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s05-4').toggleClass('inactive active');
    setTimeout( function() { anim_p2_s5_4.play(); }, 1750);
    anim_p2_s5_4.addEventListener('loopComplete', function() {
    anim_p2_s5_4.goToAndStop(2500);
    }, false);
      
    $('#path_02_progress .six').toggleClass('active inactive');
    $('#path_02_progress .five').toggleClass('inactive active');
  });

  //SECTION 05
  //Check for "previous" click
  $('#tip_p02s05-4 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p02s05-4').toggleClass('active inactive');
    $('#anim_p02s05-4').toggleClass('active inactive');
    // Trigger animation
    anim_p2_s5_3 = init_anim('anim_p02s05-3', '../bodymovin/p02s05/03/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p02s05-3').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s05-3').toggleClass('inactive active');
    setTimeout( function() { anim_p2_s5_3.play(); }, 2000);
    anim_p2_s5_3.addEventListener('loopComplete', function() {
    anim_p2_s5_3.goToAndStop(50, true);
    }, false);
  });

    
    
  //Check for "previous" click
  $('#tip_p02s05-3 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p02s05-3').toggleClass('active inactive');
    $('#anim_p02s05-3').toggleClass('active inactive');
    // Trigger animation
    anim_p2_s5_2 = init_anim('anim_p02s05-2', '../bodymovin/p02s05/02/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p02s05-2').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s05-2').toggleClass('inactive active');
    setTimeout( function() { anim_p2_s5_2.play(); }, 2250);
    anim_p2_s5_2.addEventListener('loopComplete', function() {
    anim_p2_s5_2.goToAndStop(75, true);
    }, false);
     }); 

    //Check for "previous" click
  $('#tip_p02s05-2 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p02s05-2').toggleClass('active inactive');
    $('#anim_p02s05-2').toggleClass('active inactive');
    // Trigger animation
    anim_p2_s5_1 = init_anim('anim_p02s05-1', '../bodymovin/p02s05/01/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p02s05-1').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s05-1').toggleClass('inactive active');
    setTimeout( function() { anim_p2_s5_1.play(); }, 1100);
    anim_p2_s5_1.addEventListener('loopComplete', function() {
    anim_p2_s5_1.goToAndStop(50, true);
    }, false);
      });
      
//tip p3s5-1 here 
//Check for "previous" click
  $('#tip_p02s05-1 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p02s05-1').toggleClass('active inactive');
    $('#anim_p02s05-1').toggleClass('active inactive');
    // Trigger animation
    anim_p2_s4_7 = init_anim('anim_p02s04-7', '../bodymovin/p02s04/07/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p02s04-7').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s04-7').toggleClass('inactive active');
    setTimeout( function() { anim_p2_s4_7.play(); }, 1100);
    anim_p2_s4_7.addEventListener('loopComplete', function() {
    anim_p2_s4_7.goToAndStop(50, true);
    }, false);
    //Change progression
    $('#path_02_progress .five').toggleClass('active inactive');
    $('#path_02_progress .four').toggleClass('inactive active');
  });

  //SECTION 04
  //Check for "previous" click
  $('#tip_p02s04-7 .prev').on('click', function(){
      //Deactivate animation and tooltip
    $('#tip_p02s04-7').toggleClass('active inactive');
 $('#anim_p02s04-7').toggleClass('active inactive');
    // Trigger animation
    anim_p2_s4_6 = init_anim('anim_p02s04-6', '../bodymovin/p02s04/06/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p02s04-6').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s04-6').toggleClass('inactive active');
    setTimeout( function() { anim_p2_s4_6.play(); }, 2500);
    anim_p2_s4_6.addEventListener('loopComplete', function() {
    anim_p2_s4_6.goToAndStop(1100);
    }, false);
  });
    
    
  //Check for "previous" click
  $('#tip_p02s04-6 .prev').on('click', function(){
      //Deactivate animation and tooltip
    $('#tip_p02s04-6').toggleClass('active inactive');
     $('#anim_p02s04-6').toggleClass('active inactive');
    // Trigger animation
    anim_p2_s4_0 = init_anim('anim_p02s04-0', '../bodymovin/p02s04/00/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p02s04-5').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s04-0').toggleClass('inactive active');
    setTimeout( function() { anim_p2_s4_0.play(); }, 1100);
    anim_p2_s4_0.addEventListener('loopComplete', function() {
    anim_p2_s4_0.goToAndStop(25);
    }, false);
  });
    
    
  //Check for "previous" click
  $('#tip_p02s04-5 .prev').on('click', function(){
      //Deactivate animation and tooltip
    $('#tip_p02s04-5').toggleClass('active inactive');
     $('#anim_p02s04-0').toggleClass('active inactive');
    // Trigger animation
    anim_p2_s4_2 = init_anim('anim_p02s04-2', '../bodymovin/p02s04/02/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p02s04-4').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s04-2').toggleClass('inactive active');
    setTimeout( function() { anim_p2_s4_2.play(); }, 2000);
    anim_p2_s4_2.addEventListener('loopComplete', function() {
    anim_p2_s4_2.goToAndStop(30);
    }, false);
  });
    
    
  //Check for "previous" click
  $('#tip_p02s04-4 .prev').on('click', function(){
      //Deactivate animation and tooltip
    $('#tip_p02s04-4').toggleClass('active inactive');
    //Activate tooltip
    setTimeout( function() { $('#tip_p02s04-3').toggleClass('inactive active'); }, 1100);
  });
    
    
    
  //Check for "previous" click
  $('#tip_p02s04-3 .prev').on('click', function(){
      //Deactivate animation and tooltip
    $('#tip_p02s04-3').toggleClass('active inactive');
    $('#anim_p02s04-2').toggleClass('active inactive');
    // Trigger animation
    anim_p2_s4_1 = init_anim('anim_p02s04-1', '../bodymovin/p02s04/01/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p02s04-2').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s04-1').toggleClass('inactive active');
    setTimeout( function() { anim_p2_s4_1.play(); }, 1100);
    anim_p2_s4_1.addEventListener('loopComplete', function() {
    anim_p2_s4_1.goToAndStop(1100);
    }, false);
  });
    
    
  //Check for "previous" click
  $('#tip_p02s04-2 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p02s04-2').toggleClass('active inactive');
    $('#anim_p02s04-1').toggleClass('active inactive');
    // Trigger animation
    anim_p2_s4_0 = init_anim('anim_p02s04-0', '../bodymovin/p02s04/00/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p02s04-1').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s04-0').toggleClass('inactive active');
    setTimeout( function() { anim_p2_s4_0.play(); }, 1100);
    anim_p2_s4_0.addEventListener('loopComplete', function() {
    anim_p2_s4_0.goToAndStop(50);
    }, false);
  });
    
     //SECTION 03
  //Check for "previous" click
  $('#tip_p02s04-1 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p02s04-1').toggleClass('active inactive');
    $('#anim_p02s04-0').toggleClass('active inactive');
    // Trigger animation
    anim_p2_s3 = init_anim('anim_p02s03', '../bodymovin/p02s03/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p02s03').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s03').toggleClass('inactive active');
    setTimeout( function() { anim_p2_s3.play(); }, 1500);
    anim_p2_s3.addEventListener('loopComplete', function() {
    anim_p2_s3.goToAndStop(1100);
    }, false);
    //Change progression
    $('#path_02_progress .four').toggleClass('active inactive');
    $('#path_02_progress .three').toggleClass('inactive active');
  });



  //Check for "previous" click
  $('#tip_p02s03 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p02s03').toggleClass('active inactive');
    $('#anim_p02s03').toggleClass('active inactive');
    // Trigger animation
    anim_p2_s2_3 = init_anim('anim_p02s02-3', '../bodymovin/p02s02/03/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p02s02-3').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s02-3').toggleClass('inactive active');
    setTimeout( function() { anim_p2_s2_3.play(); }, 1100);
    anim_p2_s2_3.addEventListener('loopComplete', function() {
    anim_p2_s2_3.goToAndStop(1100);
    }, false);  
    //Change progression
    $('#path_02_progress .three').toggleClass('active inactive');
    $('#path_02_progress .two').toggleClass('inactive active');
  });

    
  //SECTION 02
  //Check for "previous" click
  $('#tip_p02s02-3 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p02s02-3').toggleClass('active inactive');
    $('#anim_p02s02-3').toggleClass('active inactive');
        // Trigger animation
    anim_p2_s2_2 = init_anim('anim_p02s02-2', '../bodymovin/p02s02/02/data.json');
      //Activate animation and tooltip
    setTimeout( function() { $('#tip_p02s02-2').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s02-2').toggleClass('inactive active');
    setTimeout( function() { anim_p2_s2_2.play(); }, 1000);
    anim_p2_s2_2.addEventListener('loopComplete', function() {
    anim_p2_s2_2.goToAndStop(100, true);
    }, false);
  });
    
  //Check for "previous" click
  $('#tip_p02s02-2 .prev').on('click', function(){
   //Deactivate animation and tooltip
    $('#tip_p02s02-2').toggleClass('active inactive');
    $('#anim_p02s02-2').toggleClass('active inactive');
    // Trigger animation
    anim_p2_s2_1 = init_anim('anim_p02s02-1', '../bodymovin/p02s02/01/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p02s02-1').toggleClass('inactive active'); }, 1750 );
    $('#anim_p02s02-1').toggleClass('inactive active');
    setTimeout( function() { anim_p2_s2_1.play(); }, 1500);
    anim_p2_s2_1.addEventListener('loopComplete', function() {
    anim_p2_s2_1.goToAndStop(100,true);
    }, false); 
  });
    

      //Check for "previous" click
  $('#tip_p02s02-1 .prev').on('click', function(){
   //Deactivate animation and tooltip
    $('#tip_p02s02-1').toggleClass('active inactive');
    $('#anim_p02s02-1').toggleClass('active inactive');
        // Trigger animation
    anim_p2_s1_2 = init_anim('anim_p02s01-2', '../bodymovin/p02s01/data.json');
      //Activate animation and tooltip
    setTimeout( function() { $('#tip_p02s01-2').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s01-2').toggleClass('inactive active');
    setTimeout( function() { anim_p2_s1_2.play(); }, 200);
    anim_p2_s1_2.addEventListener('loopComplete', function() {
    anim_p2_s1_2.goToAndStop(100, true);
    }, false);
    //Change progression
    $('#path_02_progress .two').toggleClass('active inactive');
    $('#path_02_progress .one').toggleClass('inactive active');
  });
  
    
//Check for "previous" click
  $('#tip_p02s01-2 .prev').on('click', function(){
   //Deactivate animation and tooltip
    $('#tip_p02s01-2').toggleClass('active inactive');
    $('#anim_p02s01-2').toggleClass('active inactive');
    // Trigger animation
    anim_p2_s1_1 = init_anim('anim_p02s01-1', '../bodymovin/p02s01/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p02s01-1').toggleClass('inactive active'); }, 2000);
    $('#anim_p02s01-1').toggleClass('inactive active');
    // setTimeout( function() { anim_p2_s1_1.play(); }, 180);
    //  anim_p2_s1_1.addEventListener('data_ready', function() {
    // anim_p2_s1_1.goToAndStop(1, true);
    // }, false);

    anim_p2_s1_1.play();
    anim_p2_s1_1.addEventListener('data_ready', function() {
      anim_p2_s1_1.goToAndStop(10,true);
    }, false);

  });



  //////////////////////
  // PATH 03 || 6 - 1 //
  //////////////////////

   //SECTION 07
  //Check for "previous" click
  $('#tip_p03s07-3 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p03s07-3').toggleClass('active inactive');
    $('#anim_p03s07-4').toggleClass('active inactive');
    //Trigger animation
    anim_p3_s7_2 = init_anim('anim_p03s07-2', '../bodymovin/p03s07/02/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p03s07-2').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s07-2').toggleClass('inactive active');
  });
    
    
  $('#tip_p03s07-2 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p03s07-2').toggleClass('active inactive');
    $('#anim_p03s07-2').toggleClass('active inactive');
    //Trigger animation
    anim_p3_s7_1 = init_anim('anim_p03s07-1', '../bodymovin/p03s07/01/data.json');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p03s07-1').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s07-1').toggleClass('inactive active');
  });
    
    
  $('#tip_p03s07-1 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p03s07-1').toggleClass('active inactive');
    $('#anim_p03s07-1').toggleClass('active inactive');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p03s06').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s06').toggleClass('inactive active');
    //Change progression
    $('#path_03_progress .seven').toggleClass('active inactive');
    $('#path_03_progress .six').toggleClass('inactive active');
  });



  //SECTION 06
  //Check for "next" click
  $('#tip_p03s06 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p03s06').toggleClass('active inactive');
    $('#anim_p03s06').toggleClass('active inactive');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p03s05').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s05').toggleClass('inactive active');
    //Change progression
    $('#path_03_progress .six').toggleClass('active inactive');
    $('#path_03_progress .five').toggleClass('inactive active');
    //Trigger animation
    // anim_p1_s5 = init_anim('anim_p01s05', '../bodymovin/p01s05/data.json');
    // anim_p1_s5.play();
    // anim_p1_s5.addEventListener('loopComplete', function() {
    //   anim_p1_s5.goToAndStop(100, true);
    // }, false);
  });

  //SECTION 04
  //Check for "previous" click
  $('#tip_p03s05 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p03s05').toggleClass('active inactive');
    $('#anim_p03s05').toggleClass('active inactive');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p03s04').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s04').toggleClass('inactive active');
    //Change progression
    $('#path_03_progress .five').toggleClass('active inactive');
    $('#path_03_progress .four').toggleClass('inactive active');
  });

  //SECTION 03
  //Check for "previous" click
  $('#tip_p03s04 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p03s04').toggleClass('active inactive');
    $('#anim_p03s04').toggleClass('active inactive');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p03s03').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s03').toggleClass('inactive active');
    //Change progression
    $('#path_03_progress .four').toggleClass('active inactive');
    $('#path_03_progress .three').toggleClass('inactive active');
  });

  //SECTION 02
  //Check for "previous" click
  $('#tip_p03s03 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p03s03').toggleClass('active inactive');
    $('#anim_p03s03').toggleClass('active inactive');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p03s02').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s02').toggleClass('inactive active');
    //Change progression
    $('#path_03_progress .three').toggleClass('active inactive');
    $('#path_03_progress .two').toggleClass('inactive active');
  });

    //SECTION 01
    //Check for "previous" click
  $('#tip_p03s02 .prev').on('click', function(){
    //Deactivate animation and tooltip
    $('#tip_p03s02').toggleClass('active inactive');
    $('#anim_p03s02').toggleClass('active inactive');
    //Activate animation and tooltip
    setTimeout( function() { $('#tip_p03s01').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s01').toggleClass('inactive active');
    //Change progression
    $('#path_03_progress .two').toggleClass('active inactive');
    $('#path_03_progress .one').toggleClass('inactive active');
  });















  ////////////////////////////////////////////////////
  //////////////////// PAGINATION ////////////////////
  ////////////////////////////////////////////////////


  function pageinationResets()
  {
    //Deactivate all tips
    $('.tip').removeClass('active');
    $('.tip').removeClass('inactive');
    $('.tip').addClass('inactive');

    //Deactivate all sections
    $('.section').removeClass('active');
    $('.section').removeClass('inactive');
    $('.section').addClass('inactive');

    //Deactivate all numbers
    $('.number').removeClass('active');
    $('.number').removeClass('inactive');
    $('.number').addClass('inactive');

    //Deactivate all tips AGAIN, in case another
    // was clicked before this one is activated
    setTimeout( function() { $('.tip').removeClass('active'); }, 500);
    setTimeout( function() { $('.tip').removeClass('inactive'); }, 500);
    setTimeout( function() { $('.tip').addClass('inactive'); }, 500);
  }



  /////////////
  // PATH 01 //
  /////////////

  //Section 01 - Clicked
  $('#path_01_progress .one').on('click', function(){

    // Reset sections and tips
    pageinationResets();

    //Activate Section 01 tip, animation, number
    anim_p01s01_1();
    $('#path_01_progress .one').toggleClass('inactive active');

  });



  //Section 02 - Clicked
  $('#path_01_progress .two').on('click', function(){

    // Reset sections and tips
    pageinationResets();

    //Activate Section 02 tip, animation, number
    anim_p01s02_1();
    $('#path_01_progress .two').toggleClass('inactive active');
  });



  //Section 03 - Clicked
  $('#path_01_progress .three').on('click', function(){

    // Reset sections and tips
    pageinationResets();

    //Activate Section 03 tip, animation, number
    anim_p01s03();
    $('#path_01_progress .three').toggleClass('inactive active');
  });



  //Section 04 - Clicked
  $('#path_01_progress .four').on('click', function(){

    // Reset sections and tips
    pageinationResets();

    //Activate Section 04 tip, animation, number
    anim_p01s04_1();
    $('#path_01_progress .four').toggleClass('inactive active');
  });



  //Section 05 - Clicked
  $('#path_01_progress .five').on('click', function(){

    // Reset sections and tips
    pageinationResets();

    //Activate Section 05 tip, animation, number
    anim_p01s05_1();
    $('#path_01_progress .five').toggleClass('inactive active');
  });



  //Section 06 - Clicked
  $('#path_01_progress .six').on('click', function(){

    // Reset sections and tips
    pageinationResets();

    //Activate Section 06 tip, animation, number
    anim_p01s06_1();
    $('#path_01_progress .six').toggleClass('inactive active');
  });












  /////////////
  // PATH 02 //
  /////////////

  //Section 01 - Clicked
  $('#path_02_progress .one').on('click', function(){
    //Deactivate all tips
    $('.tip').removeClass('active');
    $('.tip').removeClass('inactive');
    $('.tip').addClass('inactive');
    //Deactivate all sections
    $('.section').removeClass('active');
    $('.section').removeClass('inactive');
    $('.section').addClass('inactive');
    //Deactivate all numbers
    $('.number').removeClass('active');
    $('.number').removeClass('inactive');
    $('.number').addClass('inactive');
    //Activate tip, animation, number
    anim_p2_s1_1 = init_anim('anim_p02s01-1', '../bodymovin/p02s01/data.json');
    setTimeout( function() { $('#tip_p02s01-1').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s01-1').toggleClass('inactive active');
    $('#path_02_progress .one').toggleClass('inactive active');
    //Deactivate all tips AGAIN, in case another
    // was clicked before this one is activated
    setTimeout( function() { $('.tip').removeClass('active'); }, 1000);
    setTimeout( function() { $('.tip').removeClass('inactive'); }, 1000);
    setTimeout( function() { $('.tip').addClass('inactive'); }, 1000);
  });



  //Section 02 - Clicked
  $('#path_02_progress .two').on('click', function(){
    //Deactivate all tips
    $('.tip').removeClass('active');
    $('.tip').removeClass('inactive');
    $('.tip').addClass('inactive');
    //Deactivate all sections
    $('.section').removeClass('active');
    $('.section').removeClass('inactive');
    $('.section').addClass('inactive');
    //Deactivate all numbers
    $('.number').removeClass('active');
    $('.number').removeClass('inactive');
    $('.number').addClass('inactive');
    //Activate tip, animation, number
    anim_p2_s2_1 = init_anim('anim_p02s02-1', '../bodymovin/p02s02/01/data.json');
    setTimeout( function() { anim_p2_s2_1.play(); }, 1250);
    anim_p2_s2_1.addEventListener('loopComplete', function() {
    anim_p2_s2_1.goToAndStop(50, true);
     }, false); 
    setTimeout( function() { $('#tip_p02s02-1').toggleClass('inactive active'); }, 1250 );
    $('#anim_p02s02-1').toggleClass('inactive active');
    $('#path_02_progress .two').toggleClass('inactive active');
    //Deactivate all tips AGAIN, in case another
    // was clicked before this one is activated
    setTimeout( function() { $('.tip').removeClass('active'); }, 1000);
    setTimeout( function() { $('.tip').removeClass('inactive'); }, 1000);
    setTimeout( function() { $('.tip').addClass('inactive'); }, 1000);
  });



  //Section 03 - Clicked
  $('#path_02_progress .three').on('click', function(){
    //Deactivate all tips
    $('.tip').removeClass('active');
    $('.tip').removeClass('inactive');
    $('.tip').addClass('inactive');
    //Deactivate all sections
    $('.section').removeClass('active');
    $('.section').removeClass('inactive');
    $('.section').addClass('inactive');
    //Deactivate all numbers
    $('.number').removeClass('active');
    $('.number').removeClass('inactive');
    $('.number').addClass('inactive');
    //Activate tip, animation, number
    anim_p2_s3 = init_anim('anim_p02s03', '../bodymovin/p02s03/data.json');
    setTimeout( function() { anim_p2_s3.play(); }, 2000);
    anim_p2_s3.addEventListener('loopComplete', function() {
    anim_p2_s3.goToAndStop(100, true);
    }, false);
    setTimeout( function() { $('#tip_p02s03').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s03').toggleClass('inactive active');
    $('#path_02_progress .three').toggleClass('inactive active');
    //Deactivate all tips AGAIN, in case another
    // was clicked before this one is activated
    setTimeout( function() { $('.tip').removeClass('active'); }, 1000);
    setTimeout( function() { $('.tip').removeClass('inactive'); }, 1000);
    setTimeout( function() { $('.tip').addClass('inactive'); }, 1000);
  });



  //Section 04 - Clicked
  $('#path_02_progress .four').on('click', function(){
    //Deactivate all tips
    $('.tip').removeClass('active');
    $('.tip').removeClass('inactive');
    $('.tip').addClass('inactive');
    //Deactivate all sections
    $('.section').removeClass('active');
    $('.section').removeClass('inactive');
    $('.section').addClass('inactive');
    //Deactivate all numbers
    $('.number').removeClass('active');
    $('.number').removeClass('inactive');
    $('.number').addClass('inactive');
    //Activate tip, animation, number
    anim_p2_s4_0 = init_anim('anim_p02s04-0', '../bodymovin/p02s04/00/data.json');
    setTimeout( function() { anim_p2_s4_0.goToAndStop(1,true); }, 1250);
    // anim_p2_s4_1.addEventListener('loopComplete', function() {
    // anim_p2_s4_1.goToAndStop(100, true);
    // }, false);
    setTimeout( function() { $('#tip_p02s04-1').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s04-0').toggleClass('inactive active');
    $('#path_02_progress .four').toggleClass('inactive active');
    //Deactivate all tips AGAIN, in case another
    // was clicked before this one is activated
    setTimeout( function() { $('.tip').removeClass('active'); }, 1000);
    setTimeout( function() { $('.tip').removeClass('inactive'); }, 1000);
    setTimeout( function() { $('.tip').addClass('inactive'); }, 1000);
  });



  //Section 05 - Clicked
  $('#path_02_progress .five').on('click', function(){
    //Deactivate all tips
    $('.tip').removeClass('active');
    $('.tip').removeClass('inactive');
    $('.tip').addClass('inactive');
    //Deactivate all sections
    $('.section').removeClass('active');
    $('.section').removeClass('inactive');
    $('.section').addClass('inactive');
    //Deactivate all numbers
    $('.number').removeClass('active');
    $('.number').removeClass('inactive');
    $('.number').addClass('inactive');
    //Activate tip, animation, number
    anim_p2_s5_1 = init_anim('anim_p02s05-1', '../bodymovin/p02s05/01/data.json');
    setTimeout( function() { $('#tip_p02s05-1').toggleClass('inactive active'); }, 1100);
    setTimeout( function() { anim_p2_s5_1.play(); }, 1100);
    anim_p2_s5_1.addEventListener('loopComplete', function() {
    anim_p2_s5_1.goToAndStop(50, true);
    }, false);
    $('#anim_p02s05-1').toggleClass('inactive active');
    $('#path_02_progress .five').toggleClass('inactive active');
    //Deactivate all tips AGAIN, in case another
    // was clicked before this one is activated
    setTimeout( function() { $('.tip').removeClass('active'); }, 1000);
    setTimeout( function() { $('.tip').removeClass('inactive'); }, 1000);
    setTimeout( function() { $('.tip').addClass('inactive'); }, 1000);
  });



    //Section 06 - Clicked
  $('#path_02_progress .six').on('click', function(){
    //Deactivate all tips
    $('.tip').removeClass('active');
    $('.tip').removeClass('inactive');
    $('.tip').addClass('inactive');
    //Deactivate all sections
    $('.section').removeClass('active');
    $('.section').removeClass('inactive');
    $('.section').addClass('inactive');
    //Deactivate all numbers
    $('.number').removeClass('active');
    $('.number').removeClass('inactive');
    $('.number').addClass('inactive');
    //Activate tip, animation, number
    setTimeout( function() { $('#tip_p02s06').toggleClass('inactive active'); }, 1100);
    $('#anim_p02s06').toggleClass('inactive active');
    $('#path_02_progress .six').toggleClass('inactive active');
    //Deactivate all tips AGAIN, in case another
    // was clicked before this one is activated
    setTimeout( function() { $('.tip').removeClass('active'); }, 1000);
    setTimeout( function() { $('.tip').removeClass('inactive'); }, 1000);
    setTimeout( function() { $('.tip').addClass('inactive'); }, 1000);
  }); 













  /////////////
  // PATH 03 //
  /////////////

  //Section 01 - Clicked
  $('#path_03_progress .one').on('click', function(){
    //Deactivate all tips
    $('.tip').removeClass('active');
    $('.tip').removeClass('inactive');
    $('.tip').addClass('inactive');
    //Deactivate all sections
    $('.section').removeClass('active');
    $('.section').removeClass('inactive');
    $('.section').addClass('inactive');
    //Deactivate all numbers
    $('.number').removeClass('active');
    $('.number').removeClass('inactive');
    $('.number').addClass('inactive');
    //Activate Section 01 tip, animation, number
    setTimeout( function() { $('#tip_p03s01').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s01').toggleClass('inactive active');
    $('#path_03_progress .one').toggleClass('inactive active');
    //Deactivate all tips AGAIN, in case another
    // was clicked before this one is activated
    setTimeout( function() { $('.tip').removeClass('active'); }, 1000);
    setTimeout( function() { $('.tip').removeClass('inactive'); }, 1000);
    setTimeout( function() { $('.tip').addClass('inactive'); }, 1000);
  });

  //Section 02 - Clicked
  $('#path_03_progress .two').on('click', function(){
    //Deactivate all tips
    $('.tip').removeClass('active');
    $('.tip').removeClass('inactive');
    $('.tip').addClass('inactive');
    //Deactivate all sections
    $('.section').removeClass('active');
    $('.section').removeClass('inactive');
    $('.section').addClass('inactive');
    //Deactivate all numbers
    $('.number').removeClass('active');
    $('.number').removeClass('inactive');
    $('.number').addClass('inactive');
    //Activate Section 02 tip, animation, number
    setTimeout( function() { $('#tip_p03s02').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s02').toggleClass('inactive active');
    $('#path_03_progress .two').toggleClass('inactive active');
    //Trigger animation
    anim_p1_s2 = init_anim('anim_p01s02', '../bodymovin/p01s02/data.json');
    //Deactivate all tips AGAIN, in case another
    // was clicked before this one is activated
    setTimeout( function() { $('.tip').removeClass('active'); }, 1000);
    setTimeout( function() { $('.tip').removeClass('inactive'); }, 1000);
    setTimeout( function() { $('.tip').addClass('inactive'); }, 1000);
  });

  //Section 03 - Clicked
  $('#path_03_progress .three').on('click', function(){
    //Deactivate all tips
    $('.tip').removeClass('active');
    $('.tip').removeClass('inactive');
    $('.tip').addClass('inactive');
    //Deactivate all sections
    $('.section').removeClass('active');
    $('.section').removeClass('inactive');
    $('.section').addClass('inactive');
    //Deactivate all numbers
    $('.number').removeClass('active');
    $('.number').removeClass('inactive');
    $('.number').addClass('inactive');
    //Activate Section 03 tip, animation, number
    setTimeout( function() { $('#tip_p03s03').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s03').toggleClass('inactive active');
    $('#path_03_progress .three').toggleClass('inactive active');
    //Trigger animation
    // anim_p1_s3 = init_anim('anim_p01s03', '../bodymovin/p01s03/data.json');
    //Deactivate all tips AGAIN, in case another
    // was clicked before this one is activated
    setTimeout( function() { $('.tip').removeClass('active'); }, 1000);
    setTimeout( function() { $('.tip').removeClass('inactive'); }, 1000);
    setTimeout( function() { $('.tip').addClass('inactive'); }, 1000);
  });

  //Section 04 - Clicked
  $('#path_03_progress .four').on('click', function(){
    //Deactivate all tips
    $('.tip').removeClass('active');
    $('.tip').removeClass('inactive');
    $('.tip').addClass('inactive');
    //Deactivate all sections
    $('.section').removeClass('active');
    $('.section').removeClass('inactive');
    $('.section').addClass('inactive');
    //Deactivate all numbers
    $('.number').removeClass('active');
    $('.number').removeClass('inactive');
    $('.number').addClass('inactive');
    //Activate Section 04 tip, animation, number
    setTimeout( function() { $('#tip_p03s04').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s04').toggleClass('inactive active');
    $('#path_03_progress .four').toggleClass('inactive active');
    //Deactivate all tips AGAIN, in case another
    // was clicked before this one is activated
    setTimeout( function() { $('.tip').removeClass('active'); }, 1000);
    setTimeout( function() { $('.tip').removeClass('inactive'); }, 1000);
    setTimeout( function() { $('.tip').addClass('inactive'); }, 1000);
    //Trigger animation
    //anim_p1_s4_1 = init_anim('anim_p01s04-1', '../bodymovin/p01s04/01/data.json');
  });

  //Section 05 - Clicked
  $('#path_03_progress .five').on('click', function(){
    //Deactivate all tips
    $('.tip').removeClass('active');
    $('.tip').removeClass('inactive');
    $('.tip').addClass('inactive');
    //Deactivate all sections
    $('.section').removeClass('active');
    $('.section').removeClass('inactive');
    $('.section').addClass('inactive');
    //Deactivate all numbers
    $('.number').removeClass('active');
    $('.number').removeClass('inactive');
    $('.number').addClass('inactive');
    //Activate Section 05 tip, animation, number
    setTimeout( function() { $('#tip_p03s05').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s05').toggleClass('inactive active');
    $('#path_03_progress .five').toggleClass('inactive active');
    //Deactivate all tips AGAIN, in case another
    // was clicked before this one is activated
    setTimeout( function() { $('.tip').removeClass('active'); }, 1000);
    setTimeout( function() { $('.tip').removeClass('inactive'); }, 1000);
    setTimeout( function() { $('.tip').addClass('inactive'); }, 1000);
    //Trigger animation
    //anim_p1_s5 = init_anim('anim_p01s05', '../bodymovin/p01s05/data.json');
    //anim_p1_s5.play();
    //anim_p1_s5.addEventListener('loopComplete', function() {
      //anim_p1_s5.goToAndStop(100, true);
    //}, false);
  });


   //Section 07 - Clicked
  $('#path_03_progress .six').on('click', function(){
    //Deactivate all tips
    $('.tip').removeClass('active');
    $('.tip').removeClass('inactive');
    $('.tip').addClass('inactive');
    //Deactivate all sections
    $('.section').removeClass('active');
    $('.section').removeClass('inactive');
    $('.section').addClass('inactive');
    //Deactivate all numbers
    $('.number').removeClass('active');
    $('.number').removeClass('inactive');
    $('.number').addClass('inactive');
    //Activate tip, animation, number
    setTimeout( function() { $('#tip_p03s06').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s06').toggleClass('inactive active');
    $('#path_03_progress .six').toggleClass('inactive active');
    //Deactivate all tips AGAIN, in case another
    // was clicked before this one is activated
    setTimeout( function() { $('.tip').removeClass('active'); }, 1000);
    setTimeout( function() { $('.tip').removeClass('inactive'); }, 1000);
    setTimeout( function() { $('.tip').addClass('inactive'); }, 1000);
  });

  //Section 07 - Clicked
  $('#path_03_progress .seven').on('click', function(){
    //Deactivate all tips
    $('.tip').removeClass('active');
    $('.tip').removeClass('inactive');
    $('.tip').addClass('inactive');
    //Deactivate all sections
    $('.section').removeClass('active');
    $('.section').removeClass('inactive');
    $('.section').addClass('inactive');
    //Deactivate all numbers
    $('.number').removeClass('active');
    $('.number').removeClass('inactive');
    $('.number').addClass('inactive');
    //Activate tip, animation, number
    anim_p3_s7_1 = init_anim('anim_p03s07-1', '../bodymovin/p03s07/01/data.json');
    setTimeout( function() { $('#tip_p03s07-1').toggleClass('inactive active'); }, 1100);
    $('#anim_p03s07-1').toggleClass('inactive active');
    $('#path_03_progress .seven').toggleClass('inactive active');
    //Deactivate all tips AGAIN, in case another
    // was clicked before this one is activated
    setTimeout( function() { $('.tip').removeClass('active'); }, 1000);
    setTimeout( function() { $('.tip').removeClass('inactive'); }, 1000);
    setTimeout( function() { $('.tip').addClass('inactive'); }, 1000);
  });

  });