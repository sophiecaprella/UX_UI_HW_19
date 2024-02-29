$('nav ul li, nav ul h1, nav ul h2, nav ul h3').on('click', function(){

        // Remove 'active' class from all nav tabs
        $('nav ul li, nav ul h1, nav ul h2, nav ul h3').removeClass('active');
        // Add 'active' class to the clicked nav tab
        $(this).addClass('active');
      });
