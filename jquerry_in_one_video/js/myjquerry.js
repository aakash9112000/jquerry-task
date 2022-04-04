
// (document).ready(function() it is use to ready the document then apply the jquerry so that we will run the program nicely beacause sometime it happen that aur document is not ready and we will run jquerry it will scape us from problem
$(document).ready(function () {
    // console.log($);
    // here $ is noting but jquerrry itself
    console.log(" i am using it");
    console.log("we are here to learn");
    //$('selector').action()
    // $('p').click();
    $('p').click(function () {
        console.log('you clicked on p', this);
        // $('p').hide();
        // $(this).hide();
        // $('.class').hide();
        // $('#id').hide();
    });
    $('p').dbclick(function () {
        console.log('you double  clicked on p', this);
        // $('p').hide();
        // $(this).hide();
        // $('.class').hide();
        // $('#id').hide();
    });

    $('p').mouseclick(function () {
        console.log('you entered', this);
        // $('p').hide();
        // $(this).hide();
        // $('.class').hide();
        // $('#id').hide();
    });

    $('p').hover(function () {
        console.log('you hover', this);
        // $('p').hide();
        // $(this).hide();
        // $('.class').hide();
        // $('#id').hide();

    },

    function()
    console.log('you entered');

    });




    // there are three type of selectors in jquerry
    // 1. element selector
    // 2. class selector
    // 3. id  selector

    // 1. element selector-  this is the example of element selector which click on all p
    // $('p').click()

    // 2. id  selector - this is ana example of id selector
    // $('p').click()

    // 3. class selector - this is an example of class selector
    // $('.odd').click()
    ///////////////////////////
    //other selectors
    // $('*').click()
    // $('p:first').click()
    // $('p:fourth').click()
    $('p:third').click()


})



//  models.js ka

// $('#save ').on('click', function(e) {
//     $('#value').append( "<p>"+$('#newGoal').val()+'</p>');
//     var t= $('#newGoal').val()
//    e =e+1
//     $('#div').append('<option id = '+e+'> '+t+' </option>')
//     // $('#div').append('<option>'+id+'</option>')
//     $('#div-f').append('<option>'+t+'</option>')
 

//   });
//   $('#saves').on('click', function() {
//     $('#values').append("<p>"+$('#newGoals').val()+'</p>' );
//     var t2= $('#newGoals').val()
//     $('#div2').append('<option>'+t2+'</option>')
//     // $('#div').append('<option>'+t+'</opton>')
 
//   });
//   $('#saves-f').on('click', function() {
//     $('#values-f').text( $('#newGoals-f').val() );
//   });


// $('#save ').on('click', function() {
//     $('main').append( "<p>"+$('#newGoal').val()+'</p>');

//     var t= $('#newGoal').val()
//     $('#div').append('<option>'+t+'</option>')
//     console.log(t);
//     // document.getElementById("demo").innerHTML = $(this).index();

//     // var index = $( "p" ).index( this );
//     // $( "main" ).text( "index" + index );
//     // $('#div').append('<option id = '+e+'> '+t+' </option>')
//     // $('#div').append('<option>'+id+'</option>')
//     $('#div-f').append('<option>'+t+'</option>')
    
//   });
//   $('#saves').on('click', function() {
//     $('main').append("<p>"+$('#newGoals').val()+'</p>' );
//     var t2= $('#newGoals').val()
//      console.log(t2);
//     $('#div2').append('<option>'+t2+'</option>')
//     // $('#div').append('<option>'+t+'</opton>')
 
//   });
//   $('#saves-f').on('click', function() {
//     $('#values-f').text( $('#newGoals-f').val() );
//   });









// $('#div2 option').remove()
//       $('#div2').append('<option>default</option>')
//       $("main h5").each(function(key){
//       key=key+1
//       var n=$(this).text()
//       $('#div2').append('<option value = '+key+'>'+n+'</option>')