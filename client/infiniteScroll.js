Session.set("profLimit", 6);
let lastScrollTop =0

$(window).scroll(function(event){
    //check if we are close to the bottom of the page
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100){
        //where on the page are we
        let scrollTop = $(this).scrollTop();
        //are we scrolling down?
        if (scrollTop > lastScrollTop){
            //yes we ar scrolling down, increase number of results
            Session.set("profLimit", Session.get("profLimit" + 3));
        }
        // record the last scrollTop
        lastScrollTop = scrollTop;
    }
});