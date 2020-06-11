$(document).ready(function(){


  // Border navigation animation
  $('.navbar-nav li a').addClass('border-animation');

  // Button 1 and Button 2 functions
          $('.btn-sub1').hover(
            function(){
            $('.fa-angle-right').css("transform","rotate(180deg)");
           
          },
          function(){
            $('.fa-angle-right').css("transform","rotate(0deg)");
          }
        );
           
        $('.btn-sub2').hover(
          function () {  
            $('.fa-angle-double-right').css({
              "transform":"rotate(180deg)",
              "margin-right": "5px"
            });
        },
        function(){
          $('.fa-angle-double-right').css({
            "transform":"rotate(0deg)",
            "margin-right":"0px"
          });
          $(this).addClass('btn2');
        }
      );
      
      // content-1 functions
      $('.content-1 .col-md-4 .curcle').hover(
        function(){
          $(this).css({
            "width":"105px",
            "height":"105px",
            "color": "#3F494C"
          }
        );
        
      },
    function(){
      $(this).css({
        "width": "100px",
        "height": "100px",
        "color": "#EF233C"
      })
    });

    // Progress Bar animation 
    const x = 854.4000244140625;
    const y = 672.7999877929688;
    x1 = 0;
    
      $(window).on("scroll",function(){
       // var scrollh = $(document).height();
       var scrollt = $(document).scrollTop();

       if(x < scrollt){
          $('.pro-1').css("width","91%");
          $('.pro-2').css("width","94%");
          $('.pro-3').css("width","89%");
        } else if(y > scrollt){
          $('.pro-1,.pro-2,.pro-3').css("width","0%");
        }
      //  $('.progress .sp-1').text(scrollh);
      //  $('.progress .sp-2').text(scrollt);
      });

      // Pricing Animation
      
      var basic_span = '.basic .basic-border:nth-child';
      var enterprise_span = '.enterprise .basic-border:nth-child';
      $('.basic a').hover(
        function(){
        $( basic_span+'(1)').css("width","100%");
        $( basic_span+'(2)').css("height","100%");
        $( basic_span+'(3)').css("height","100%");
        $( basic_span+'(4)').css("width","100%");

        $('.basic hr').css("background-color","red");
      },
      function(){
        $(basic_span+'(1)').css("width","30px");
        $(basic_span+'(2)').css("height","30px");
        $(basic_span+'(3)').css("height","30px");
        $(basic_span+'(4)').css("width","30px");

        $('.basic hr').css("background-color","inherit");
      }
    );

    $('.enterprise a').hover(
      function(){
        $( enterprise_span+'(1)').css("width","100%");
        $( enterprise_span+'(2)').css("height","100%");
        $( enterprise_span+'(3)').css("height","100%");
        $( enterprise_span+'(4)').css("width","100%"); 
        
        $('.enterprise hr').css("background-color","red");
    },
    function(){
      $(enterprise_span+'(1)').css("width","30px");
      $(enterprise_span+'(2)').css("height","30px");
      $(enterprise_span+'(3)').css("height","30px");
      $(enterprise_span+'(4)').css("width","30px");

      $('.enterprise hr').css("background-color","inherit");
    }  
  );


  // Pro animation
 var pro_span = '.pro .pro-span:nth-child';
  $('.pro #pro-button').hover(
    function(){
      $(pro_span+'(1)').css({
        "height" : "100%",
        "bottom" : "0%"
      });

      $(pro_span+'(2)').css({
        "height" : "100%",
        "bottom" : "0%"
      });
  },
  function(){
    $(pro_span+'(1)').css({
      "height" : "130px",
      "bottom" : "40%"
    });

    $(pro_span+'(2)').css({
      "height" : "130px",
      "bottom" : "40%"
    });
  });


  // our Services

  // tab 1
  $('.content-4 .nav-tabs:nth-child(1)').css({
    "background-color" : "#ffffff",
    "border-top" : "3px solid #E30022",
  });

  $('.content-4 .nav-tabs:nth-child(1)').on('focusin', function(){
    $('.content-4 .nav-tabs:nth-child(1)').css({
      "background-color" : "#ffffff",
      "border-top" : "3px solid #E30022"
    });
  });

  $('.content-4 .nav-tabs:nth-child(1)').on('focusout', function(){
    $('.content-4 .nav-tabs:nth-child(1)').css({
      "background-color": "#EDF2F4",
      "border-top" : "0px"
    });
  });

  //tab 2
  $('.content-4 .nav-tabs:nth-child(2)').on('focusin', function(){

    // change default tab style
    $('.content-4 .nav-tabs:nth-child(1)').css({
      "background-color" : "#EDF2F4",
      "border-top" : "0px",
    });

    $('.content-4 .nav-tabs:nth-child(2)').css({
      "background-color" : "#ffffff",
      "border-top" : "3px solid #E30022"
    });
  });

  $('.content-4 .nav-tabs:nth-child(2)').on('focusout', function(){
    $('.content-4 .nav-tabs:nth-child(2)').css({
      "background-color": "#EDF2F4",
      "border-top" : "0px"
    });
  });

  // tab 3
  $('.content-4 .nav-tabs:nth-child(3)').on('focusin', function(){
    $('.content-4 .nav-tabs:nth-child(3)').css({
      "background-color" : "#ffffff",
      "border-top" : "3px solid #E30022"
    });
  });

  $('.content-4 .nav-tabs:nth-child(3)').on('focusout', function(){
    $('.content-4 .nav-tabs:nth-child(3)').css({
      "background-color": "#EDF2F4",
      "border-top" : "0px"
    });
  });

  //tab 4

  $('.content-4 .nav-tabs:nth-child(4)').on('focusin', function(){
    $('.content-4 .nav-tabs:nth-child(4)').css({
      "background-color" : "#ffffff",
      "border-top" : "3px solid #E30022"
    });
  });

  $('.content-4 .nav-tabs:nth-child(4)').on('focusout', function(){
    $('.content-4 .nav-tabs:nth-child(4)').css({
      "background-color": "#EDF2F4",
      "border-top" : "0px"
    });
  });

// End of the Services Section


// Form Validation

function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}

  $('#email').on('focusout',function(){
    if($(this).val() != ""){
      if( validateEmail($(this).val())) {
        $(this).css('border','1px solid green');
        $('#error').text('');
      }else{
        $(this).css('border','1px solid red');
        $('#error').text("Invalid Email Address");
      }
    }else{
      $(this).css('border','1px solid red');
      $('#error').text('Email is Required');
    }
  });

  $('#comment').on('focusout', function(){
    if($(this).val() != ""){
      $(this).css("border","1px solid green");
      $('#error').text('');
    }else{
      $(this).css("border","1px solid red");
      $('#error').text('Message is Required');
    }
  });

  $('#name, #subject').on('focusout',function(){

      if($(this).val() != ""){
        $(this).css("border","1px solid green");
      }else{
        $(this).css("border","1px solid rgb(212,212,212)");
      }
  });


  // scroll up

  $('.top a').on('click', function(){
    $('html, body').animate({
      scrollTop:0
    }, 1500);
  });

  // on Scroll Navigation

  $(window).scroll(function(){
    if($(document).scrollTop() > 450){
      $('nav').addClass("fixed-top").addClass("sticky");
    }else{
      $('nav').removeClass("fixed-top").removeClass("sticky");
    }
  });

  // Navigation link Scrolling

  $('.nav-item #home').on('click',function(){
    $('html, body').animate({scrollTop:500},1000);
  });
  $('.nav-item #features').on('click',function(){
    $('html, body').animate({scrollTop:950},1000);
  });
  $('.nav-item #pricing').on('click',function(){
    $('html, body').animate({scrollTop:1570},1000);
  });
  $('.nav-item #services').on('click',function(){
    $('html, body').animate({scrollTop:2050},1000);
  });
  $('.nav-item #about-us').on('click',function(){
    $('html, body').animate({scrollTop:2620},1000);
  });
  $('.nav-item #contact-us').on('click',function(){
    $('html, body').animate({scrollTop:3120},1000);
  });
  

}); 