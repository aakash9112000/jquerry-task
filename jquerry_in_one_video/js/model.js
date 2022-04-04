$('#save').on('click', function(key) {
      $('main').append( "<section><h2>"+$('#newGoal').val()+'</h2></section>');
      var t= $('#newGoal').val()     
      $('#div option').remove()
      $('#div').append('<option disabled>defaults</option>')
      $('#div-f option').remove()
      $('#div-f').append('<option disabled selected>defaults</option>')

      // $('#div2 option').remove()
      // $('#div2').append('<option>default</option>')
      $("main h2").each(function(key){
      key=key+1
      var h=$(this).text()
      // var t_sub= $('#newGoals').val()
      $('#div-f').append('<option value = '+key+'>'+h+'</option>')
      $('#div').append('<option value = '+key+'> '+h+' </option>')
      // $('#div2').append('<option value = '+key+'>'+h+'</option>')
      // $('#div').append('<option>'+id+'</option>')
      $("#myForm").trigger("reset");
      
    });  
    });
    // function myFunction()  {
    //   document.getElementById("myForm").reset();}
$('#saves').on('click', function() {
  // $('main').append( "<section><h5>"+$('#newGoals').val()+'</h5></section>');
  // $('#div2').append('<option value = '+key+'>'+t_sub+'</option>')
  //   var st =$("#div option:selected").val();
  //   console.log(st)
  // $('main section:nth-child('+st+')').append('<p>'+t_sub+'</p>');
    var st =$("#div option:selected").val();
     console.log("st",st)
    // // var st1 =$("#div2 option:selected").val();
    // // console.log("selected choice 3rd form",st1)
    
     var t2= $('#newGoals').val()
     console.log("newgoals",t2)
     console.log(t2)
     $('main section:nth-child('+st+')').append('<div><p>'+t2+'</p></div>');
     $("#myForm2").trigger("reset");
    });
    // // $('main section:nth-child('+st1+')').append('<p>'+t2+'</p>');
    // // $('main section:nth-child('+st1+')').append('<p>'+t2+'</p>');
    // $("#myForm7").each(function(keys){
    //  keys=keys+1
    // //  $('#div2').append('<option value = '+keys+'>'+t2+'</opton>')  
    //  console.log("keys",keys)
     
    // });
    // $('#div2 option').remove()
    // $('#div2').append('<option disabled>default</option>')

    $('#div-f').on('change', function() {
      var st3 =$( "#div-f option:selected").val();
      console.log("st for first",st3)
      var t_sub= $('#newGoals').val()
      $('#div2 option').remove()
      $('#div2').append('<option disabled>default</option>')
      $('main section:nth-child('+st3+')  div p').each(function(key){
        var hi=$(this).text();
        key=key+1
      console.log(hi,"hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
      console.log("keys" ,key)
      // $('#div2').append('<option value = '+key+'>'+hi+'</option>') 
      $('#div2').append('<option value = '+key+'> '+hi+'</option>')
  });

 
});

 

  // (function($){
      // $('#field_1').show();
      // $('select[name=serviceChoice]').change(function(){
  $('#btn1').on('click', function() {
      var st3 =$( "#div-f option:selected").val();
      var fm3 =$( "#div2 option:selected").val();

      var t3= $('#serviceChoice option:selected').text()
      console.log("fm3",fm3)
      console.log("st3",st3)
      console.log(t3,'sssssssssssssssssssssssssss')
// if ($('select[name=serviceChoice] option:selected').val() == '0') {
      var t5= $('#newGoals-id').val()
      console.log("id",t5)
      var t6= $('#newGoals-name').val()
      console.log("name",t6)

      var t7= $('#newGoals-class').val()
      console.log("class",t7)

      var t8= $('#newGoals-label').val()
      console.log("label",t8)

      var t9= $('#newGoals-value').val()
      console.log("value",t9)

      var t10= $('#newGoals-placeholder').val()
      console.log("value",t10)
      
      var t11= $('#newGoals-options').val()
      console.log("options",t11)
      separatedArray = t11.split(',');
      console.log(separatedArray);
      var arrayLength = separatedArray.length;

        // document.querySelector('.output').textContent = separatedArray;
      // var t9= $('#txtText').val()
      // console.log("ddlFruits",t9)
      // var option = $("<option />");
      //       option.html($("#newGoals-options").val());
      //       $("t5").append(option);

      
        // var t4= $('#serviceChoice').val()
        // if (t5<4){ 
        var s = document.getElementById('serviceChoice');
        var serviceChoice = s.options[s.selectedIndex].value;

        // if( serviceChoice <=21)
        // {
        // $('main section:nth-child('+st3+') div p:nth-child('+fm3+')').append("<p>"+t8+" <input type= "+t3+"  id ="+t5+" name ="+t6+"  class ="+t7+"  value ="+t9+" placeholder ="+t10+" > </p>");
        
        // console.log("main  ",'main section:nth-child('+st3+') div p:nth-child('+fm3+')')
        // console.log("if parth","<p>"+t8+" <input type= "+t3+"  id ="+t5+" name ="+t6+"  class ="+t7+"  value ="+t9+" placeholder ="+t10+" > </p>",serviceChoice)
        // }
        if( serviceChoice == 0)
        {
        $('main section:nth-child('+st3+') div p:nth-child('+fm3+')').append("<p>"+t8+" <input type= "+t3+"  id ="+t5+" name ="+t6+"  class ="+t7+"  value ="+t9+" placeholder ="+t10+" > </p>");
        
        
        }
        else if( serviceChoice ==1 ) 
        {
        $('main section:nth-child('+st3+') div p:nth-child('+fm3+')').append("<p>"+t8+" <input type= "+t3+"  id ="+t5+" name ="+t6+"  class ="+t7+"  value ="+t9+" placeholder ="+t10+" > </p>");
        
        
        }      
        else if( serviceChoice ==2 && serviceChoice ==3)
        {
        $('main section:nth-child('+st3+') div p:nth-child('+fm3+')').append("<p>"+t8+" <input type= "+t3+"  id ="+t5+" name ="+t6+"  class ="+t7+"  value ="+t9+" placeholder ="+t10+" > </p>");
        
       
        }
        else if( serviceChoice ==4)
        {
        $('main section:nth-child('+st3+') div p:nth-child('+fm3+')').append("<p>"+t8+" <input type= "+t3+"  id ="+t5+" name ="+t6+"  class ="+t7+"  value ="+t9+" placeholder ="+t10+" > </p>");
        
        
        }
        else if( serviceChoice ==20)
        {
        $('main section:nth-child('+st3+') div p:nth-child('+fm3+')').append("<p>"+t8+" <input type= "+t3+"  id ="+t5+" name ="+t6+"  class ="+t7+"  value ="+t9+" placeholder ="+t10+" > </p>");
        
        
        }
        else if( serviceChoice ==20)
        {
        $('main section:nth-child('+st3+') div p:nth-child('+fm3+')').append("<p>"+t8+" <input type= "+t3+"  id ="+t5+" name ="+t6+"  class ="+t7+"  value ="+t9+" placeholder ="+t10+" > </p>");
        
        }
        else if( serviceChoice ==20)
        {
        $('main section:nth-child('+st3+') div p:nth-child('+fm3+')').append("<p>"+t8+" <input type= "+t3+"  id ="+t5+" name ="+t6+"  class ="+t7+"  value ="+t9+" placeholder ="+t10+" > </p>");

        }
        else if( serviceChoice ==20)
        {
        $('main section:nth-child('+st3+') div p:nth-child('+fm3+')').append("<p>"+t8+" <input type= "+t3+"  id ="+t5+" name ="+t6+"  class ="+t7+"  value ="+t9+" placeholder ="+t10+" > </p>");

        
        }
        else if( serviceChoice ==20)
        {
        $('main section:nth-child('+st3+') div p:nth-child('+fm3+')').append("<p>"+t8+" <input type= "+t3+"  id ="+t5+" name ="+t6+"  class ="+t7+"  value ="+t9+" placeholder ="+t10+" > </p>");

        
        }
        else if( serviceChoice ==20)
        {
        $('main section:nth-child('+st3+') div p:nth-child('+fm3+')').append("<p>"+t8+" <input type= "+t3+"  id ="+t5+" name ="+t6+"  class ="+t7+"  value ="+t9+" placeholder ="+t10+" > </p>");

        
        }
        else if( serviceChoice ==20)
        {
        $('main section:nth-child('+st3+') div p:nth-child('+fm3+')').append("<p>"+t8+" <input type= "+t3+"  id ="+t5+" name ="+t6+"  class ="+t7+"  value ="+t9+" placeholder ="+t10+" > </p>");

        
        }
        else if( serviceChoice ==20)
        {
        $('main section:nth-child('+st3+') div p:nth-child('+fm3+')').append("<p>"+t8+" <input type= "+t3+"  id ="+t5+" name ="+t6+"  class ="+t7+"  value ="+t9+" placeholder ="+t10+" > </p>");

        
        }
        else if( serviceChoice ==20)
        {
        $('main section:nth-child('+st3+') div p:nth-child('+fm3+')').append("<p>"+t8+" <input type= "+t3+"  id ="+t5+" name ="+t6+"  class ="+t7+"  value ="+t9+" placeholder ="+t10+" > </p>");

        
        }
        else if( serviceChoice ==20)
        {
        $('main section:nth-child('+st3+') div p:nth-child('+fm3+')').append("<p>"+t8+" <input type= "+t3+"  id ="+t5+" name ="+t6+"  class ="+t7+"  value ="+t9+" placeholder ="+t10+" > </p>");

        
        }
      //  if( serviceChoice ==20)
      //   {
      //   $('main section:nth-child('+st3+') div p:nth-child('+fm3+')').append("<p>"+t8+" <input type= "+t3+"  id ="+t5+" name ="+t6+"  class ="+t7+"  value ="+t9+" placeholder ="+t10+" > </p>");

        
      //   }
        
      else{
        $('main section:nth-child('+st3+') div p:nth-child('+fm3+')').append("<p> <select  id ="+t5+" ></select> </p>");
        console.log("main ",'main section:nth-child('+st3+') div p:nth-child('+fm3+')')
        console.log("else","<p> <select  id ="+t5+" ></select> </p>")
            // $("#btn1").click(function () {
            // var option = $("<option />");
            // // option.html($("#newGoals-options").val());
            // option.html($("#newGoals-options").val());
            // $("#"+t5).append(option);
            // });      

            for (i = 0; i < arrayLength; i++) 
                {
                  console.log("nnnnmmmmmmmmmmmmm",separatedArray[i]);
                  var option = $("<option />");
                  // option.html($("#newGoals-options").val());
                  option.text((separatedArray[i]))
                  // $("#"+t5).append(option);
                }
        }

//  var myStringArray = ["Hello","World"];
// var arrayLength = myStringArray.length;
// for (var i = 0; i < arrayLength; i++) {
//     console.log(myStringArray[i]);
//     //Do something
// }


//                       <select id = "ddlFruits"></select>
// <hr />
// Text: <input type="text" id = "txtText" />

// <input type="button" id = "btnAdd" value = "Add" />

// <script type="text/javascript">
//     $(function () {
//         $("#btnAdd").click(function () {
//             var option = $("<option />");
//             option.html($("#txtText").val());
//             $("#ddlFruits").append(option);
//         });
//     });









            // alert("1 is greater than 0");
               
            // else{
            //   <select ></select>
            // }

            // if ($('select[name=serviceChoice] option:selected').val() == '0') {

            // }

            // $('main section:nth-child('+st3+')').append("<p>"+t8+" <input type= "+t3+" id ="+t5+" name ="+t6+" class ="+t7+"  value ="+t9+"  placeholder ="+t10+"> </p>");
            // .append('<label var id="1">"<p>"+t3+"</p>" <input type= "+t3+" name="bday"></label>');

          // if ($('select[name=serviceChoice] option:selected').val() == '0') {
          //   $(".optionBox").append('<label var id="1">checkbox:<input type="checkbox" name="bday"></label>');

          // } else if ($('select[name=serviceChoice] option:selected').val() == '1') {
          //   $(".optionBox").append('<label var id="2">color:<input type="color" name="bday"></label>');

          // } else if ($('select[name=serviceChoice] option:selected').val() == '2') {
          //   $(".optionBox").append('<label var id="2">date:<input type="date" name="bday"></label>');

          // } else if ($('select[name=serviceChoice] option:selected').val() == '3') {
          //   $(".optionBox").append('<label var id="2">datetime-local  :<input type="datetime-local" name="bday"></label>');

          // } else if ($('select[name=serviceChoice] option:selected').val() == '4') {
          //   $(".optionBox").append('<label var i$( "#myselect option:selected" ).text();d="2">email   :<input type="email" name="bday"></label>');

          // } else if ($('select[name=serviceChoice] option:selected').val() == '5') {
          //   $(".optionBox").append('<label var id="2">file:<input type="file" name="bday"></label>');

          // } else if ($('select[name=serviceChoice] option:selected').val() == '6') {
          //   $(".optionBox").append('<label var id="2">hidden:<input type="hidden" name="bday"></label>');

          // } else if ($('select[name=serviceChoice] option:selected').val() == '7') {
          //   $(".optionBox").append('<label var id="2">image  :<input type="image" name="bday"></label>');

          // } else if ($('select[name=serviceChoice] option:selected').val() == '8') {
          //   $(".optionBox").append('<label var id="2">month  :<input type="month" name="bday"></label>');

          // } else if ($('select[name=serviceChoice] option:selected').val() == '9') {
          //   $(".optionBox").append('<label var id="2">number  :<input type="number" name="bday"></label>');

          // } else if ($('select[name=serviceChoice] option:selected').val() == '10') {
          //   $(".optionBox").append('<label var id="2">password  :<input type="password" name="bday"></label>');

          // } else if ($('select[name=serviceChoice] option:selected').val() == '11') {
          //   $(".optionBox").append('<label var id="2">radio  :<input type="radio" name="bday"></label>');

          // } else if ($('select[name=serviceChoice] option:selected').val() == '12') {
          //   $(".optionBox").append('<label var id="2">range  :<input type="range" name="bday"></label>');

          // } else if ($('select[name=serviceChoice] option:selected').val() == '13') {
          //   $(".optionBox").append('<label var id="2">reset  :<input type="reset" name="bday"></label>');

          // } else if ($('select[name=serviceChoice] option:selected').val() == '14') {
          //   $(".optionBox").append('<label var id="2">search    :<input type="search" name="bday"></label>');

          // } else if ($('select[name=serviceChoice] option:selected').val() == '15') {
          //   $(".optionBox").append('<label var id="2">submit   :<input type="submit" name="bday"></label>');

          // } else if ($('select[name=serviceChoice] option:selected').val() == '16') {
          //   $(".optionBox").append('<label var id="2">tel   :<input type="tel" name="bday"></label>');

          // } else if ($('select[name=serviceChoice] option:selected').val() == '17') {
          //   $(".optionBox").append('<label var id="2">time   :<input type="time" name="bday"></label>');

          // } else if ($('select[name=serviceChoice] option:selected').val() == '18') {
          //   $(".optionBox").append('<label var id="2">url  :<input type="url" name="bday"></label>');

          // } else if ($('select[name=serviceChoice] option:selected').val() == '19') {
          //   $(".optionBox").append('<label var id="2">week   :<input type="week" name="bday"></label>');

          // } else if ($('select[name=serviceChoice] option:selected').val() == '20') {
          //   $(".optionBox").append('<label var id="2">button  :<input type="button" name="bday"></label>');

          // } else {
          //   $('.optionBox').show();
          // }
        });
      
    // });

    // $('#btn1').on('click', function() {

    



    //   var stp =$("#div2 option:selected").val();
    //   console.log("    ",st2)
    //   var st2 =$("#serviceChoice option:selected").val();
    //   console.log("input type 3rd form",st2)
    //   $('main section:nth-child('+stp+')').append('<p>'+st2+'</p>');
    //   $("#myForm7").trigger("reset");
    // // // $('#btn1').on('click', function() {
    // // //   var st =$( "#div option:selected").val();
    // // //   console.log(st)
    // // //   var t2= $('#newGoals').val()

    // // //   console.log(t2)
    // // //   $('main section:nth-child('+st+')').append('<p>'+t2+'</p>');
    // });













    

// $('#save ').on('click', function() {
//     $('main').append( "<section><h2>"+$('#newGoal').val()+'</h2></section>');

//     var t= $('#newGoal').val()
//     // $()
//     // $('#div').append('<option>'+t+'</option>')
    


//     $("main section h2").each(function(key){
//       // alert($(this).text())
//       key =key+1
//       var h=$(this).text()
//          $('#div').append('<option value ='+key+'>'+h+'</option>')


//     });


// //  <main section h2> .each(function(key))>

//     // console.log(t);
// // en
//     // document.getElementById("demo").innerHTML = $(this).index();

//     // var index = $( "p" ).index( this );
//     // $( "main" ).text( "index" + index );
//     // $('#div').append('<option id = '+e+'> '+t+' </option>')
//     // $('#div').append('<option>'+id+'</option>')

    
//     // $('#div-f').append('<option>'+t+'</option>')
    
//   });

//   $('#saves').on('click', function() {
//     $('main').append("<h4>"+$('#newGoals').val()+'</h4>' );
//     var t2= $('#newGoals').val()
//     var select = document.getElementById('div');
//     var value = select.options[select.selectedIndex].value;
//     console.log(value); 
//     //  console.log(t2);
//     $("main section h2").each(function(key){
//       // alert($(this).text())
//       key =key+1
//       var hh=$(this).text()
//     $('#div2').append('<option value ='+key+'>'+hh+'</option>')
//     // $('#div').append('<option>'+t+'</opton>')
//   });
// });
//   $('#saves-f').on('click', function() {
//     $('#values-f').text( $('#newGoals-f').val() );


  
