(function(a){a.dssOptionsList=[];a.fn.divSlideShow=function(b){var c={width:200,height:100,arrow:"begin",delay:5000,loop:1,leftArrowClass:"",rightArrowClass:"",slideContainerClass:"",controlClass:"",controlActiveClass:"",controlHoverClass:"",controlContainerClass:"",separatorClass:""};if(b){a.extend(c,b)}for(var d in c){a.dssOptionsList.push(d)}if(c.loop>30){c.loop=30}return this.each(function(){for(d in c){a(this).attr(d,c[d])}a.divSlideShow(this)})};a.divSlideShow=function(c){var e=a.divSlideShow.getOptionsObject(c);var d=a(c).children().length;a(c).css({width:e.width,overflow:"hidden",display:"block"});a(c).children().wrap('<div class="dssSlide"></div>');a(c).children(".dssSlide").wrapAll('<div class="dssSlideContainer" page=0 max='+d+"/>");a(c).find(".dssSlide").css({"float":"left",width:e.width,height:e.height,"overflow-y":"auto"});var g='<div class="dssControl" direction=-1><span class="'+e.leftArrowClass+'">&lt</span></<div>';var b='<div class="dssControl" direction=1><span class="'+e.rightArrowClass+'">&gt;</span></<div>';a(c).append('<div class="dssSeparator"></div>').find(".dssSeparator").addClass(e.separatorClass);if(e.arrow=="begin"){a(c).append(g);a(c).append(b)}if(e.arrow=="split"){a(c).append(g)}for(var f=0;f<d;f++){a(c).append('<div class="dssControl" page='+f+">"+(f+1)+"</div>")}if(e.arrow=="split"){a(c).append(b)}if(e.arrow=="end"){a(c).append(g);a(c).append(b)}a(c).find(".dssSlideContainer").css({width:e.width*d,height:e.height,overflow:"hidden"}).addClass(e.slideContainerClass);a(c).find(".dssControl").addClass(e.controlClass).css("float","left").hover(function(){a(this).toggleClass(e.controlHoverClass)}).wrapAll('<div class="dssControlContainer"/>');a(c).find(".dssControlContainer").css({height:"100%",overflow:"hidden"}).addClass(e.controlContainerClass);for(f=1;f<Math.floor(d*e.loop);f++){a(c).find(".dssSlideContainer").delay(e.delay);a.divSlideShow.slideTo(c,f%d,true)}a.divSlideShow.manageControls(c,0);a(c).find(".dssControl").click(function(){var h=a(c).find(".dssSlideContainer").children().length;var i=parseInt(a(this).attr("direction"));if(i){var j=parseInt(a(c).find(".dssSlideContainer").attr("page"));var k=(j+i<h&&j+i>=0)?j+i:j}else{var k=parseInt(a(this).attr("page"))}a.divSlideShow.slideTo(c,k)})};a.divSlideShow.slideTo=function(d,g,c){if(!c){a(d).find(".dssSlideContainer").clearQueue()}var e=a.divSlideShow.getOptionsObject(d);var b=a(d).find(".dssSlideContainer").children().length;if(g>=b){g=b-1}if(g<0){g=0}var f=a(d).find(".dssSlideContainer .dssSlide").width();a(d).find(".dssSlideContainer").queue(function(){a.divSlideShow.manageControls(d,g);a(this).attr("page",g);a(this).dequeue()});a(d).find(".dssSlideContainer").animate({"margin-left":-g*f})};a.divSlideShow.getOptionsObject=function(b){var c={};var f=a.dssOptionsList;for(var d in f){var e=a(b).attr(f[d]);if(isNaN(parseInt(e))){c[f[d]]=e}else{c[f[d]]=parseInt(e)}}return c};a.divSlideShow.manageControls=function(c,e){var d=a.divSlideShow.getOptionsObject(c);var b=a(c).find(".dssSlideContainer").children().length;a(c).find(".dssControl").each(function(){if(a(this).attr("direction")=="1"){}else{if(a(this).attr("direction")=="-1"){}else{if(a(this).attr("page")!=e){a(this).toggleClass(d.controlActiveClass,false)}else{a(this).toggleClass(d.controlActiveClass,true)}}}})}})(jQuery);