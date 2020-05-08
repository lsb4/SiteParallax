$(document).ready(
    function(){

        // Nav Description effect
        $("a.tooltip").mouseover(
            function(){
                var text = $(this).attr('data-tooltip');
                $(this).children(".textTip").html(text);
                $(this).children(".textTip").css('opacity','1');
            }
        );
        $("a.tooltip").mouseout(
            function(){
                $(this).children(".textTip").css('opacity','0');
            }
        );
        $(".textTip").mouseover(
            function(e){
               e.stopPropagation();
            }
        );

        // Nav Scroll Effect
        $('a.tip1').click(function(){ 
            $('html,body').animate({ scrollTop: 0 }, 800);
            return false; 
        });
        $('a.tip2').click(function(){ 
            $('html,body').animate({ scrollTop: 760 }, 800);
            return false; 
        });
        $('a.tip3').click(function(){ 
            $('html,body').animate({ scrollTop: 1460 }, 800);
            return false; 
        });
        $('a.tip4').click(function(){ 
            $('html,body').animate({ scrollTop: 2180 }, 800);
            return false; 
        });


        // Nav effect
        $("nav").mouseover( 
            function(){
                $(".navItens").addClass("navShow");
            }
        );
        $("nav").mouseout(
            function(){
                $(".navItens").removeClass("navShow");
            }
        );

        // Header effect
        $(document).scroll(
            function(){
                var topWindow = $(window).scrollTop();
                if(topWindow > 60){
                    $("header").addClass('headerFixed');
                }else{
                    $("header").removeClass('headerFixed');
                }
            }
        )
    }
);
