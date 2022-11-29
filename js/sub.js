      //relative nav
      $(function(){
        $("#nav_icon").click(function(){
          $("#hide_nav").slideToggle();
        });
      });

      $(window).resize(function(){
        if(window.innerWidth>=1100){
          $('#hide_nav').hide();
        }
      });

      var currentScrollTop=0;
      $(document).ready(function(){
      	scrollController();
      	$(window).scroll(function(){
      		scrollController();
      	});
      });

      function scrollController(){
      	currentScrollTop = $(window).scrollTop();
      	if(currentScrollTop > 300){
      		$("nav").addClass("fixed");
      	}
      	else {
      		$("nav").removeClass("fixed");
      	}
      }

      //countdown
      var countDownDate = new Date("Jun 5, 2020 15:37:25").getTime();
      var x = setInterval(function() {

        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("cntdate").innerHTML = days + "d " + hours + "h "  + minutes + "m " + seconds + "s ";

        if (distance < 0) {
          clearInterval(x);
          document.getElementById("cntdate").innerHTML = "EXPIRED";
        }
      }, 1000);