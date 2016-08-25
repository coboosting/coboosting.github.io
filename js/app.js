(function(window, $) {
    var resizeTimeout = null;
    function resizeHandler() {
        if (resizeTimeout) {
            window.clearTimeout(resizeTimeout);
        }
        resizeTimeout = setTimeout(function() {
            var winHeight = $(window).height();
            $('.section').each(function() {
                $content = $(this).find('.section-content');
                var mt = $content.css('margin-top');
                $container = $(this).find('.container');
                var contentHeight = $content.height();
                if ($content.length > 0 && $container.position().top === 0 && winHeight > contentHeight) {
                    $content.css({
                        marginTop: (winHeight - contentHeight) / 2
                    });
                } else {
                    $content.css({
                        marginTop: mt
                    });
                }
            });
        }, 300);
    }

    function init() {
        $(window).resize(resizeHandler);
        $('.nav-language a').on('click', function(e) {
            var href = location.href;
            var enReg = /(en)\/([^\.]*.html)/g;
            var regRs = enReg.exec(href);
            if (regRs) {
                location.href = '../' + regRs[2];
            } else {
                regRs = /([\w\-]*).html/.exec(href)[1];
                if (regRs == "milestone" || regRs == "new-1" || regRs == "new-2") {
                    location.href = './' + regRs + '.html';
                } else {
                    location.href = './en/' + regRs + '.html';
                }
            }
            e.preventDefault();
        });

        var pages = ['nav-index', 'nav-partner', 'nav-career', 'nav-milestone', 'nav-contactus'];

        $.each(pages, function(index, nav) {
            var $ele = $('.' + nav + ' .'+ nav);
            $ele.on('click', function(e) {
                e.preventDefault();
            });
            $ele.css({
                cursor: 'default'
            });
        });
    }

    $(document).ready(function() {
        init();
        resizeHandler();
        $('.navbar-toggle').on('click', function() {
            var winHeight = $(window).height(),
                $content = $('.popup-container');

            $('.popup-menu').show();

            var contentHeight = $content.height();

            $content.css({
                top: (winHeight - contentHeight) / 2
            });

            $('.backdrop').bind('click', function() {
                $('.backdrop').off('click');
                $('.popup-menu').hide();
            });

        });
    });

})(window, $);
