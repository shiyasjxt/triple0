!(function($) {
    // regular js
        function formatDate(pubDate)
    {
        var monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var dateObj = new Date(Date.parse(pubDate));
        var myDay = "<span class='rss-item-pubDate-date'>" + dateObj.getUTCDate() + "</span> ";
        var myMonth = "<span class='rss-item-pubDate-month'>" + monthList[dateObj.getUTCMonth()] + "</span> ";
        var myYear = "<span class='rss-item-pubDate-full-year'>" + dateObj.getUTCFullYear() + "</span> ";
        return myDay + '<br>' + myMonth;
    }
    // jquery
    $(function() {
        $('select, input[type="text"], input[type="password"], input[type="date"], input[type="datetime"], input[type="datetime-local"], input[type="month"], input[type="week"], input[type="email"], input[type="number"], input[type="search"], input[type="tel"], input[type="time"], input[type="url"], textarea').addClass('ef-radius');
        $('#keywords').attr('placeholder', 'site search');
        $('.top-bar-section > ul:not(.right)').addClass('left');
        $('.top-bar-section > ul > li').has('ul').addClass('has-dropdown');
        $('.top-bar-section > ul > li > ul').addClass('dropdown');
        //$('.button, .mini-new-buttons, .jobdetail-top .backtoresults').addClass('button small radius');
        //$('.apply-now-link a').addClass('button radius');
        $('#side-left, #dynamic-side-left-container, #job-side-column').addClass('ef-sidebar large-3 small-12 columns');
        //        $('#dynamic-content').addClass('dynamic-content-holder large-9 small-12 columns');
        //		if ($('#dynamic-side-left-container').length) {
        //        	$('#content').addClass('large-9 small-12 columns');
        //        }
        if ($('#side-left ul').length) {
            $('#content').addClass('large-9 small-12 columns');
        }
        if ($('#job-side-column ul').length) {
            $('#content').addClass('large-9 small-12 columns right');
        }
        //Add new options on register page
        /*if((window.location.pathname.indexOf('/member/register.aspx')) > -1){
            $('<div id="linkedInURL" class="ctrlHolder"><label>Linkedin URL</label><input type="text"/></div>').insertAfter('#socialLoginWrapper');  
            var sel_doc = $('#Label10').parent('.ctrlHolder');
            $(sel_doc).addClass('attach_cv');
            $('.attach_cv').prepend('<label class="attach_CV_lbl">Attach CV</label>');
            $(sel_doc).insertAfter('#socialLoginWrapper');
        }*/
        // remove empty li's on the system pages.
        $("#side-left li:empty").remove();
        // add active class to links.
        $("li a[href='" + window.location.pathname.toLowerCase() + "']").parent().addClass("active");
        $("li.active li.active").parent().closest("li.active").removeClass("active");
        // add last-child class to navigation
        $("#r3-navigation > ul > li:last").addClass("last-child");
        $.getScript('/media/COMMON/js/responsive-plugins-0.js', function() {
            // generate select navigation from sidebar
            $("#dynamic-content").convertNavigation({
                title: "Navigate to&hellip;",
                links: "#dynamic-side-left-container a"
            });
            // generate actions button
            $(".job-navbtns").convertButtons({
                buttonTitle: "Actions&hellip;",
                title: "Please choose&hellip;",
                links: ".job-navbtns a"
            });
            //consultant-gallary
            // if ($('.owl-carousel').children('li').length > 1) {
                $('.owl-carousel').owlCarousel({
                    loop: false,  /* please set it false in order to avoid cloning when actual items < items */
                    margin: 10,
                    nav: true,
                    autoplay: true,
                    rewind: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 4
                        }
                    }
                })
            // }
            //video popup
            $(document).ready(function() {
                $('a.video').magnificPopup({
                    type: 'iframe',
                    /*iframe: {
                        markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '<div class="mfp-title">Some caption</div>' + '</div>'
                    },
                    callbacks: {
                        markupParse: function(template, values, item) {
                            values.title = item.el.attr('title');
                        }
                    }*/
                });

            });
            //image popup
            $('.image-popup').magnificPopup({
                type: 'image',
                closeBtnInside: false,
                closeOnContentClick: false,
                callbacks: {
                    open: function() {
                        var self = this;
                        self.wrap.on('click.pinhandler', 'img', function() {
                            self.wrap.toggleClass('mfp-force-scrollbars');
                        });
                    },
                    beforeClose: function() {
                        this.wrap.off('click.pinhandler');
                        this.wrap.removeClass('mfp-force-scrollbars');
                    }
                },
                image: {
                    verticalFit: false
                }
            });
            // Testimonials widget
            $(".testimonial-area ul").each(function() {
                var dataURL = $(this).attr("data-url");
                $(this).includeFeed({
                    baseSettings: {
                        rssURL: [dataURL || "/NewsRSS.aspx"]
                    },
                    templates: {
                        itemTemplate: "<li><div class='rss-item' id='rss-item-{{item-index}}'><span class='rss-item-description'>{{description}}</span><span class='rss-item-title'><a target='_blank' href='{{link}}'>{{title}}</a></span></div></li>"
                    },
                    complete: function() {
                        $('.bxslider').bxSlider({
                            mode: 'vertical',
                            auto: true,
                            pager: false
                        });
                    }
                });
            });
            
            // generate filters button
            $(".job-navbtns").convertFilters({
                buttonTitle: "Filters&hellip;",
                filteredTitle: "Applied Filters",
                title: "Please choose&hellip;",
                filtered: ".search-query p",
                list: "ul#side-drop-menu",
                excludeFromList: "#AdvancedSearchFilter_PnlCompany"
            });
        });
        //inner page
        $('.dynamic-content-holder h1:first').appendTo($('.page-title .container .row div.col-md-12.inner-title'));
        if(!$('.page-title .container .row div.col-md-12.inner-title h1').length){
            $('.page-title .container .row div.col-md-12.inner-title').append('<h1 style="opacity:0">Triple</h1>');
        }

        //landing page
        $('.dynamic-content-holder h1:first').appendTo($('.landing-title .container .row div.large-7.columns.landing-banner'));
        if(!$('.page-title .container .row div.col-md-12.landing-title h1').length){
            $('.page-title .container .row div.col-md-12.landing-title').append('<h1 style="opacity:0">Triple</h1>');
        }

            // Customize twitter feed                                     
            var hideTwitterAttempts = 0;                                 
            function hideTwitterBoxElements() {
              setTimeout( function() {
                    $(".twitter-timeline").contents().find(".timeline-Tweet-text").attr("style", "color:white !important;");
                    $(".twitter-timeline").contents().find(".TweetAuthor-name").attr("style", "color:white !important;");
                    //Increase attempt count
                    hideTwitterAttempts++;
                    //Attempts to style widget 3 times, at 1.5s increments
                    //Basically ensures that it gets styled
                    if ( hideTwitterAttempts < 3 ) {
                        hideTwitterBoxElements();     
                    }
                }, 1500);
            }
            //Trigger Styling
            hideTwitterBoxElements();
        // registation page
        $('#ctl00_ContentPlaceHolder1_ddlTitle').val('Dr');
        $('#ctl00_ContentPlaceHolder1_pnlFullRegistration .ctrlHolder:first-child').appendTo('#ctl00_ContentPlaceHolder1_pnlRequiredRegistration .ctrlHolder:nth-child(8)');
        $('#ctl00_ContentPlaceHolder1_pnlRequiredRegistration #Label7').empty();
        $('#ctl00_ContentPlaceHolder1_pnlRequiredRegistration #Label7').append('Specialty');
        $('#ctl00_ContentPlaceHolder1_pnlRequiredRegistration #ctl00_ContentPlaceHolder1_ddlClassification option[value="0"]').text('- All Specialties -');
        $('#ctl00_ContentPlaceHolder1_pnlFullRegistration #Label8').empty();
        $('#ctl00_ContentPlaceHolder1_pnlFullRegistration #Label8').append('Grade');
        $('#ctl00_ContentPlaceHolder1_pnlFullRegistration #ddlSubClassification option[value="0"]').text('- Select a Specialty First -');

        var currentURL =  window.location.href;
        if(currentURL.indexOf('advancedsearch.aspx')>-1){
            $('#advanced_search-holder #professionID option[value="-1"]').text('- All Specialties -');
            $('#advanced_search-holder #roleIDs option[value="-1"]').text('- Select a Specialty First -');
        }
        if(currentURL.indexOf('createjobalert.aspx')>-1){
            $('#search-classification p:first-child').empty();
            $('#search-classification p:first-child').append('Specialty / Grade');
            $('#search-classification #ctl00_ContentPlaceHolder1_ucJobAlert1_lbProfession').empty();
            $('#search-classification #ctl00_ContentPlaceHolder1_ucJobAlert1_lbProfession').append('Specialty');
            $('#search-classification #ctl00_ContentPlaceHolder1_ucJobAlert1_ddlProfession option[value="0"]').text('- All Specialties -');
            $('#search-classification #ctl00_ContentPlaceHolder1_ucJobAlert1_lbRole').empty();
            $('#search-classification #ctl00_ContentPlaceHolder1_ucJobAlert1_lbRole').append('Grade');
            $('#search-classification #ctl00_ContentPlaceHolder1_ucJobAlert1_ddlRole option[value="0"]').text('- Select a Specialty First -');
            $('#ctl00_ContentPlaceHolder1_ucJobAlert1_UpdatePanel2 #ctl00_ContentPlaceHolder1_ucJobAlert1_ddlLocation option[value="19"]').insertBefore('#ctl00_ContentPlaceHolder1_ucJobAlert1_UpdatePanel2 #ctl00_ContentPlaceHolder1_ucJobAlert1_ddlLocation option[value="1"]');
            // $('#advanced_search-holder #roleIDs option[value="-1"]').text('- Select a Specialty First -');
        }
        if(currentURL.indexOf('thank-you-registration?n')>-1){
            var path = window.location.href;
			var fn = path.split('=')[1];
			$('h3 .fn').text(fn);
        }

        if(currentURL.indexOf('australian-locum-opportunities')>-1){
            $(".landing-slogan").html('The team at <span>Triple0 always go the extra mile</span> to ensure being a locum is as easy as possible.');
            $(".landing-newsletter").find('p').html('No problem, sign up to our locum newsletter to keep informed about all the latest locum news, tips and locum opportunities.');
            
        }
        if(currentURL.indexOf('new-zealand-locum-opportunities')>-1){
            $(".landing-slogan").html('The team at <span>Triple0 always go the extra mile</span> to ensure being a locum is as easy as possible.');
            $(".landing-newsletter").find('p').html('No problem, sign up to our locum newsletter to keep informed about all the latest locum news, tips and locum opportunities.');
            
        }
        if(currentURL.indexOf('new-zealand-doctor-opportunities')>-1){
            $(".landing-slogan").html('The team at <span>Triple0 always go the extra mile</span> to ensure being a doctor is as easy as possible.');
            $(".landing-newsletter").find('p').html('No problem, sign up to our doctor newsletter to keep informed about all the latest doctor news, tips and doctor opportunities.');
            
        }
        if(currentURL.indexOf('australian-doctor-opportunities')>-1){
            $(".landing-slogan").html('The team at <span>Triple0 always go the extra mile</span> to ensure being a doctor is as easy as possible.');
            $(".landing-newsletter").find('p').html('No problem, sign up to our doctor newsletter to keep informed about all the latest doctor news, tips and doctor opportunities.');
            
        }



        
        //$.getScript('/media/responsive-3/js/include-feed.js', function() {
        //
        //			// Latest Jobs widget
        //			$("#myJobsDiv").includeFeed({
        //				baseSettings: { rssURL: "job/rss.aspx" },
        //				elements: { pubDate: 1, title: 1, description: 1},
        //				complete: function(){
        //				}
        //			});
        //
        //			// Latest News widget
        //			$("#myNewsDiv").includeFeed({
        //				baseSettings: { rssURL: "NewsRSS.aspx" },
        //				elements: { pubDate: 1, title: 1, description: 1},
        //				complete: function(){
        //				}
        //			});
        //		});
        $.when($.getScript("/media/responsive-3/js/jquery.simplyscroll.js"), $.Deferred(function(deferred) {
            $(deferred.resolve);
        })).done(function() {
            var dataURL = $("#myJobsDiv").attr("data-url");
            $("#myJobsDiv").includeFeed({
                baseSettings: {
                    rssURL: [dataURL || "/job/rss.aspx"]
                },
                elements: {
                    pubDate: 1,
                    title: 1,
                    description: 1
                },
                complete: function() {
                    if ($(this).children().length > 1) {
                        $(this).simplyScroll({
                            orientation: 'vertical',
                            auto: true,
                            manualMode: 'loop'
                        });
                    }
                }
            });
            $("#myNewsDiv").each(function() {
                var dataURL = $(this).attr("data-url");
                $(this).includeFeed({
                    baseSettings: {
                        rssURL: [dataURL || "/NewsRSS.aspx"]
                    },
                    elements: {
                        pubDate: 1,
                        title: 1,
                        description: 1
                    },
                    complete: function() {
                        if ($(this).children().length > 1) {
                            $(this).simplyScroll({
                                orientation: 'vertical',
                                auto: true,
                                manualMode: 'loop'
                            });
                        }
                    }
                });
            });
        });
        // contact page stop scrolling until clicked.
        $(".r27_map-overlay").click(function() {
            $(this).hide();
        });
    });
    $(document).ready(function() {
        $(".teamList").each(function() {
            var dataURL = $(this).attr("data-url");
            $(this).includeFeed({
                baseSettings: {
                    rssURL: [dataURL || "/ConsultantsRSS.aspx?featured=1"],
                    limit: 200,
                    addNBSP: false,
                    repeatTag: "consultant"
                },
                templates: {
                    itemTemplate: '<div class="consultant-profile">\n\
	<div class="row">\n\
		<div class="large-3 columns consultant-image">\n\
			<div class="image-area">\n\
			  <a href="/t/{{FriendlyURL}}">\n\
				<img alt="{{FirstName}} {{LastName}}" src="{{ImageURL}}" />\n\
			  </a>\n\
			</div>\n\
			<div class="social-icon">\n\
				<ul>\n\
					<li>\n\
						<a href="{{FacebookURL}}" target="_blank" title="facebook"><i class="fa fa-facebook"><!-- --></i></a>\n\</li>\n\
					<li>\n\
						<a href="{{LinkedInURL}}" target="_blank" title="linkedin"><i class="fa fa-linkedin"><!-- --></i></a>\n\</li>\n\
					<li>\n\
						<a href="{{TwitterURL}}" target="_blank" title="Twitter"><i class="fa fa-twitter"><!-- --></i></a>\n\</li>\n\
					<li>\n\
						<a href="mailto:{{Email}}" title="Email Us"><i class="fa fa-envelope"><!-- --></i></a>\n\</li>\n\
				</ul>\n\
			</div>\n\
		</div>\n\
		<div class="large-9 columns consultant-contain">\n\
			<h2>\n\
				<a href="/t/{{FriendlyURL}}">\n\
				{{FirstName}} {{LastName}}</a>\n\
			</h2>\n\
			<span>\n\
				{{PositionTitle}}</span>\n\
			<p>\n\
				{{ShortDescription}}</p>\n\
			<ul class="button-area">\n\
				<li>\n\
					<a class="mini-new-buttons" href="#" title="{{FirstName}}&apos;S JOBS">{{FirstName}}&apos;S JOBS</a> <a class="mini-new-buttons" href="/member/register.aspx" title="REGISTER WITH US">REGISTER WITH US</a> <a class="mini-new-buttons" href="#" title="HELPFUL LINKS">HELPFUL LINKS</a> <a class="mini-new-buttons" href="#" title="ABOUT NZ/AUS "> ABOUT NZ/AUS </a><a class="mini-new-buttons" href="/moving-to-new-zealand" title="moving to NZ "> moving to NZ </a><a class="mini-new-buttons" href="/moving-to-australia" title="moving to AUS "> moving to AUS </a></li>\n\
			</ul>\n\
		</div>\n\
		</div>\n\
         </div>'
                },
                complete: function() {
                    // Callback
                }
            });
        });
        $(".teammember").each(function() {
            var dataURL = $(this).attr("data-url");
            $(this).includeFeed({
                baseSettings: {
                    rssURL: [dataURL || "/ConsultantsRSS.aspx"],
                    limit: 200,
                    addNBSP: false,
                    repeatTag: "consultant"
                },
                templates: {
                    itemTemplate: '<div class="medium-4 large-3 columns"><div class="team-profile"><img alt="{{FirstName}} {{LastName}}" src="{{ImageURL}}"><img alt="{{FirstName}} {{LastName}}" src="{{Link}}" class="hover-img"><div class="overlay"><h3>{{FirstName}} {{LastName}}</h3><h4>{{PositionTitle}}</h4><a class="mini-new-buttons" href="/t/{{FriendlyURL}}" title="click about {{FirstName}}">CLICK ABOUT {{FirstName}}</a></div></div></div>'
                },
                complete: function() {
                    // Callback
                }
            });
        });
    });
})(jQuery);
