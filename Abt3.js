!function(t,e,i,o){function s(e,i){this.element=e,this.settings=t.extend(!0,{},c,i),this.root=t(e),this.wrap=o,this.shapeContainer=o,this.shapeSvgContainer=o,this.fullscreenTooltipsContainer=o,this.visibleTooltip=o,this.visibleTooltipIndex=o,this.highlightedShape=o,this.highlightedShapeIndex=o,this.clickedShape=o,this.clickedShapeIndex=o,this.initTimeout=o,this.touch=!1,this.fullscreenTooltipVisible=!1,this.init()}function a(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}function r(t,e,i,o,s,a){return t>=i&&t<=i+s&&e>=o&&e<=o+a}function l(t,e,i){for(var o=!1,s=0,a=i.length-1;s<i.length;a=s++){var r=i[s][0],l=i[s][1],n=i[a][0],p=i[a][1],h=l>e!=p>e&&t<(n-r)*(e-l)/(p-l)+r;h&&(o=!o)}return o}function n(t,e,i,o,s,a){var r=(t-i)*(t-i),l=s*s,n=(e-o)*(e-o),p=a*a;return r/l+n/p<=1}function p(e,o,s,a){return e<0&&(e=0),o<0&&(o=0),e>t(i).width()-s&&(e=t(i).width()-s),o>t(i).height()-a&&(o=t(i).height()-a),{x:e,y:o}}function h(t){for(var e,i,o=t.length;0!==o;)i=Math.floor(Math.random()*o),o-=1,e=t[o],t[o]=t[i],t[i]=e;return t}function d(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}t.imageMapProInitialized=function(t){},t.
imageMapProEventHighlightedShape=function(t,e){},t.imageMapProEventUnhighlightedShape=function(t,e){},t.imageMapProEventClickedShape=function(t,e){},t.imageMapProEventOpenedTooltip=function(t,e){},t.imageMapProEventClosedTooltip=function(t){},t.imageMapProHighlightShape=function(e,i){var o=t("#"+i).data("index");y[e].highlightedShapeIndex!=o&&(y[e].highlightedShape&&y[e].unhighlightShape(),y[e].manuallyHighlightedShape=!0,y[e].highlightShape(o,!1))},t.imageMapProUnhighlightShape=function(t){y[t].highlightedShape&&y[t].unhighlightShape()},t.imageMapProOpenTooltip=function(e,i){var o=t("#"+i).data("index");y[e].manuallyShownTooltip=!0,y[e].showTooltip(o),y[e].updateTooltipPosition(o)},t.imageMapProHideTooltip=function(t){y[t].hideTooltip()},t.imageMapProReInitMap=function(t){y[t].init()},t.imageMapProIsMobile=function(){return d()};var g="imageMapPro",c={id:Math.round(1e4*Math.random())+1,editor:{previewMode:0,selected_shape:-1,tool:"spot"},general:{name:"",shortcode:"",width:1050,height:700,responsive:1,sticky_tooltips:0,constrain_tooltips:1,image_url:"https://webcraftplugins.com/uploads/image-map-pro/demo.jpg",tooltip_animation:"grow",pageload_animation:"none",fullscreen_tooltips:"none",late_initialization:0},spots:[]},u={id:"spot-0",type:"spot",x:-1,y:-1,width:44,height:44,actions:{mouseover:"show-tooltip",click:"no-action",link:"#",open_link_in_new_window:1},default_style:{opacity:1,border_radius:50,background_color:"#000000",background_opacity:.4,border_width:0,border_style:"solid",
border_color:"#ffffff",border_opacity:1,fill:"#000000",fill_opacity:.4,stroke_color:"#ffffff",stroke_opacity:.75,stroke_width:0,stroke_dasharray:"10 10",stroke_linecap:"round",use_icon:0,icon_type:"library",icon_svg_path:"M409.81,160.113C409.79,71.684,338.136,0,249.725,0C161.276,0,89.583,71.684,89.583,160.113     c0,76.325,119.274,280.238,151.955,334.638c1.72,2.882,4.826,4.641,8.178,4.641c3.351,0,6.468-1.759,8.168-4.631     C290.545,440.361,409.81,236.438,409.81,160.113z M249.716,283.999c-68.303,0-123.915-55.573-123.915-123.895     c0-68.313,55.592-123.895,123.915-123.895s123.876,55.582,123.876,123.895S318.029,283.999,249.716,283.999z",icon_svg_viewbox:"0 0 499.392 499.392",icon_fill:"#000000",icon_url:"",icon_is_pin:0,icon_shadow:0},mouseover_style:{opacity:1,border_radius:50,background_color:"#ffffff",background_opacity:.4,border_width:0,border_style:"solid",border_color:"#ffffff",border_opacity:1,fill:"#ffffff",fill_opacity:.4,stroke_color:"#ffffff",stroke_opacity:.75,stroke_width:0,stroke_dasharray:"10 10",stroke_linecap:"round",icon_fill:"#000000"},tooltip_style:{border_radius:5,padding:20,background_color:"#000000",background_opacity:.9,position:"top",width:300,auto_width:0},tooltip_content:{content_type:"plain-text",plain_text:"Lorem Ipsum",
plain_text_color:"#ffffff",squares_settings:{containers:[{id:"sq-container-403761",settings:{elements:[{settings:{name:"Paragraph",iconClass:"fa fa-paragraph"}}]}}]}},points:[],vs:[]},y=new Array;MutationObserver=e.MutationObserver||e.WebKitMutationObserver;var f;t.extend(s.prototype,{init:function(){var i=this;y[this.settings.general.name]=this,this.id=100*Math.random();for(var o=0;o<i.settings.spots.length;o++){var s=i.settings.spots[o],a=t.extend(!0,{},u);s=t.extend(!0,a,s),i.settings.spots[o]=t.extend(!0,{},s)}i.root.addClass("imp-initialized"),i.root.html('<div class="imp-wrap"></div>'),i.wrap=i.root.find(".imp-wrap");var r=new Image;r.src=i.settings.general.image_url,i.loadImage(r,function(){},function(){var e="";e+='<img src="'+i.settings.general.image_url+'">',i.wrap.html(e),i.adjustSize(),i.drawShapes(),i.addTooltips(),i.events(),i.animateShapesLoop(),t.imageMapProInitialized(i.settings.general.name)}),t(e).on("resize",function(){i.adjustSize()})},loadImage:function(e,i,s){e.complete&&e.naturalWidth!==o&&e.naturalHeight!==o?s():(i(),t(e).on("load",function(){t(e).off("load"),s()}))},adjustSize:function(){var t=this;if(1==parseInt(t.settings.general.
    responsive,10)){for(var e=t.root.width(),i=t.root;0==e&&(i=i.parent(),e=i.width(),!i.is("body")););var o=t.settings.general.width/t.settings.general.height;t.wrap.css({width:e,height:e/o})}else t.wrap.css({width:t.settings.general.width,height:t.settings.general.height})},drawShapes:function(){for(var t=this,e=0;e<t.settings.spots.length;e++){var i=t.settings.spots[e];if(i.x=parseFloat(i.x),i.y=parseFloat(i.y),i.width=parseFloat(i.width),i.height=parseFloat(i.height),i.default_style.stroke_width=parseInt(i.default_style.stroke_width),i.mouseover_style.stroke_width=parseInt(i.mouseover_style.stroke_width),"poly"==i.type)for(var o=0;o<i.points.length;o++)i.points[o].x=parseFloat(i.points[o].x),i.points[o].y=parseFloat(i.points[o].y)}t.settings.general.width=parseInt(t.settings.general.width),t.settings.general.height=parseInt(t.settings.general.height),t.wrap.prepend('<div class="imp-shape-container"></div>'),t.shapeContainer=t.wrap.find(".imp-shape-container");for(var s="",r=!1,l='<svg class="hs-poly-svg" viewBox="0 0 '+t.settings.general.width+" "+t.settings.general.height+'" preserveAspectRatio="none">',e=0;e<t.settings.spots.length;e++){var i=t.settings.spots[e];if("spot"==i.type)if(1==parseInt(i.default_style.use_icon,10)){var n="";if(n+="left: "+i.x+"%;",n+="top: "+i.y+"%;",n+="width: "+i.width+"px;",n+="height: "+i.height+"px;",n+="margin-left: -"+i.width/2+"px;",n+=1==parseInt(i.default_style.icon_is_pin,10)?"margin-top: -"+i.height+"px;":"margin-top: -"+i.height/2+"px;",n+="background-image: url("+i.default_style.icon_url+")",n+="background-position: center;",n+="background-repeat: no-repeat;",
    "fade"==t.settings.general.pageload_animation&&(n+="opacity: 0;"),"grow"==t.settings.general.pageload_animation&&(n+="opacity: "+i.default_style.opacity+";",n+="transform: scale(0, 0);-moz-transform: scale(0, 0);-webkit-transform: scale(0, 0);",1==parseInt(i.default_style.icon_is_pin,10)&&(n+="transform-origin: 50% 100%;-moz-transform-origin: 50% 100%;-webkit-transform-origin: 50% 100%;")),"none"==t.settings.general.pageload_animation&&(n+="opacity: "+i.default_style.opacity+";"),s+='<div class="imp-shape imp-shape-spot" id="'+i.id+'" style="'+n+'" data-index='+e+">","library"==i.default_style.icon_type?(s+='   <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="'+i.default_style.icon_svg_viewbox+'" xml:space="preserve" width="'+i.width+'px" height="'+i.height+'px">',s+='       <path style="fill:'+i.default_style.icon_fill+'" d="'+i.default_style.icon_svg_path+'"></path>',s+="   </svg>"):s+='<img src="'+i.default_style.icon_url+'">',1==parseInt(i.default_style.icon_shadow,10)){var p="";p+="width: "+i.width+"px;",p+="height: "+i.height+"px;",p+="top: "+i.height/2+"px;",s+='<div style="'+p+'" class="imp-shape-icon-shadow"></div>'}s+="</div>"}else{var n="",h=a(i.default_style.background_color),d=a(i.default_style.border_color);n+="left: "+i.x+"%;",n+="top: "+i.y+"%;",n+="width: "+i.width+"px;",n+="height: "+i.height+"px;",n+="margin-left: -"+i.width/2+"px;",n+="margin-top: -"+i.height/2+"px;",n+="border-radius: "+i.default_style.border_radius+"px;",n+="background: rgba("+h.r+", "+h.g+", "+h.b+", "+i.default_style.background_opacity+");",n+="border-width: "+i.default_style.border_width+"px;",n+="border-style: "+i.default_style.border_style+";",n+="border-color: rgba("+d.r+", "+d.g+", "+d.b+", "+i.default_style.border_opacity+");","fade"==t.settings.general.pageload_animation&&(n+="opacity: 0;"),
"grow"==t.settings.general.pageload_animation&&(n+="opacity: "+i.default_style.opacity+";",n+="transform: scale(0, 0);-moz-transform: scale(0, 0);-webkit-transform: scale(0, 0);"),"none"==t.settings.general.pageload_animation&&(n+="opacity: "+i.default_style.opacity+";"),s+='<div class="imp-shape imp-shape-spot" id="'+i.id+'" style="'+n+'" data-index='+e+"></div>"}if("rect"==i.type){var n="",h=a(i.default_style.background_color),d=a(i.default_style.border_color);n+="left: "+i.x+"%;",n+="top: "+i.y+"%;",n+="width: "+i.width+"%;",n+="height: "+i.height+"%;",n+="border-radius: "+i.default_style.border_radius+"px;",n+="background: rgba("+h.r+", "+h.g+", "+h.b+", "+i.default_style.background_opacity+");",n+="border-width: "+i.default_style.border_width+"px;",n+="border-style: "+i.default_style.border_style+";",n+="border-color: rgba("+d.r+", "+d.g+", "+d.b+", "+i.default_style.border_opacity+");","fade"==t.settings.general.pageload_animation&&(n+="opacity: 0;"),"grow"==t.settings.general.pageload_animation&&(n+="opacity: "+i.default_style.opacity+";",n+="transform: scale(0, 0);-moz-transform: scale(0, 0);-webkit-transform: scale(0, 0);"),"none"==t.settings.general.pageload_animation&&(n+="opacity: "+i.default_style.opacity+";"),s+='<div class="imp-shape imp-shape-rect" id="'+i.id+'" style="'+n+'" data-index='+e+"></div>"}if("oval"==i.type){var n="",h=a(i.default_style.background_color),d=a(i.default_style.border_color);n+="left: "+i.x+"%;",n+="top: "+i.y+"%;",n+="width: "+i.width+"%;",n+="height: "+i.height+"%;",n+="border-radius: 50% 50%;",n+="background: rgba("+h.r+", "+h.g+", "+h.b+", "+i.default_style.background_opacity+");",n+="border-width: "+i.default_style.border_width+"px;",n+="border-style: "+i.default_style.border_style+";",n+="border-color: rgba("+d.r+", "+d.g+", "+d.b+", "+i.
default_style.border_opacity+");","fade"==t.settings.general.pageload_animation&&(n+="opacity: 0;"),"grow"==t.settings.general.pageload_animation&&(n+="opacity: "+i.default_style.opacity+";",n+="transform: scale(0, 0);-moz-transform: scale(0, 0);-webkit-transform: scale(0, 0);"),"none"==t.settings.general.pageload_animation&&(n+="opacity: "+i.default_style.opacity+";"),s+='<div class="imp-shape imp-shape-oval" id="'+i.id+'" style="'+n+'" data-index='+e+"></div>"}if("poly"==i.type){r=!0;var g=a(i.default_style.fill),c=a(i.default_style.stroke_color),u="";if(u+="width: 100%;",u+="height: 100%;",u+="fill: rgba("+g.r+", "+g.g+", "+g.b+", "+i.default_style.fill_opacity+");",u+="stroke: rgba("+c.r+", "+c.g+", "+c.b+", "+i.default_style.stroke_opacity+");",u+="stroke-width: "+i.default_style.stroke_width+"px;",u+="stroke-dasharray: "+i.default_style.stroke_dasharray+";",u+="stroke-linecap: "+i.default_style.stroke_linecap+";","fade"==t.settings.general.pageload_animation&&(u+="opacity: 0;"),"grow"==t.settings.general.pageload_animation){u+="opacity: "+i.default_style.opacity+";",u+="transform: scale(0, 0);-moz-transform: scale(0, 0);-webkit-transform: scale(0, 0);";var y=i.x+i.width/2,f=i.y+i.height/2;u+="transform-origin: "+y+"% "+f+"%;-moz-transform-origin: "+y+"% "+f+"%;-webkit-transform-origin: "+y+"% "+f+"%;"}"none"==t.settings.general.pageload_animation&&(u+="opacity: "+i.default_style.opacity+";");var _=t.settings.general.width*(i.width/100),m=t.settings.general.height*(i.height/100);l+='           <polygon class="imp-shape imp-shape-poly" style="'+u+'" data-index='+e+' id="'+i.id+'" points="',i.vs=new Array;for(var o=0;o<i.points.length;o++){var b=t.settings.general.width*(i.x/100)+i.points[o].x/100*_,v=t.settings.general.height*(i.y/100)+i.points[o].y/100*m;l+=b+","+v+" ",i.vs.push([b,v])}l+='           "></polygon>'}}l+="</svg>",r?t.shapeContainer.html(s+l):t.shapeContainer.html(s)},addTooltips:function(){var e=this;if("always"==e.settings.general.fullscreen_tooltips||"mobile-only"==e.settings.general.
fullscreen_tooltips&&d()){e.fullscreenTooltipsContainer||(t('.imp-fullscreen-tooltips-container[data-image-map-id="'+e.settings.id+'"]').remove(),t("body").prepend('<div class="imp-fullscreen-tooltips-container" data-image-map-id="'+e.settings.id+'"></div>'),e.fullscreenTooltipsContainer=t('.imp-fullscreen-tooltips-container[data-image-map-id="'+e.settings.id+'"]'));for(var i="",o=0;o<e.settings.spots.length;o++){var s=e.settings.spots[o];s.tooltip_content.plain_text=s.tooltip_content.plain_text.replace(/\n/g,"<br>");var r="",l=a(s.tooltip_style.background_color);if(r+="padding: "+s.tooltip_style.padding+"px;",r+="background: rgba("+l.r+", "+l.g+", "+l.b+", "+s.tooltip_style.background_opacity+");","none"==e.settings.general.tooltip_animation&&(r+="opacity: 0;"),"fade"==e.settings.general.tooltip_animation&&(r+="opacity: 0;",r+="transition-property: opacity;-moz-transition-property: opacity;-webkit-transition-property: opacity;"),"grow"==e.settings.general.tooltip_animation&&(r+="transform: scale(0, 0);-moz-transform: scale(0, 0);-webkit-transform: scale(0, 0);",r+="transition-property: transform;-moz-transition-property: -moz-transform;-webkit-transition-property: -webkit-transform;",r+="transform-origin: 50% 50%;-moz-transform-origin: 50% 50%;-webkit-transform-origin: 50% 50%;"),i+='<div class="imp-fullscreen-tooltip" style="'+r+'" data-index="'+o+'">',i+='   <div class="imp-tooltip-close-button" data-index="'+o+'"><i class="fa fa-times" aria-hidden="true"></i></div>',"plain-text"==s.tooltip_content.content_type){var r="";r+="color: "+s.tooltip_content.plain_text_color+";",i+='<div class="imp-tooltip-plain-text" style="'+r+'">'+s.tooltip_content.plain_text+"</div>"}else s.tooltip_content.squares_json?(console.log("rendering json"),i+=t.
squaresRendererRenderObject(s.tooltip_content.squares_json)):i+=t.squaresRendererRenderObject(s.tooltip_content.squares_settings);i+="</div>"}e.fullscreenTooltipsContainer.html(i)}else{for(var i="",o=0;o<e.settings.spots.length;o++){var s=e.settings.spots[o];s.tooltip_content.plain_text=s.tooltip_content.plain_text.replace(/\n/g,"<br>");var r="",l=a(s.tooltip_style.background_color),n="poly"==s.type?"imp-tooltip-buffer-large":"";if(r+="border-radius: "+s.tooltip_style.border_radius+"px;",r+="padding: "+s.tooltip_style.padding+"px;",r+="background: rgba("+l.r+", "+l.g+", "+l.b+", "+s.tooltip_style.background_opacity+");","none"==e.settings.general.tooltip_animation&&(r+="opacity: 0;"),"fade"==e.settings.general.tooltip_animation&&(r+="opacity: 0;",r+="transition-property: opacity;-moz-transition-property: opacity;-webkit-transition-property: opacity;"),"grow"==e.settings.general.
tooltip_animation&&(r+="transform: scale(0, 0);-moz-transform: scale(0, 0);-webkit-transform: scale(0, 0);",r+="transition-property: transform;-moz-transition-property: -moz-transform;-webkit-transition-property: -webkit-transform;","top"==s.tooltip_style.position&&(r+="transform-origin: 50% 100%;-moz-transform-origin: 50% 100%;-webkit-transform-origin: 50% 100%;"),"bottom"==s.tooltip_style.position&&(r+="transform-origin: 50% 0%;-moz-transform-origin: 50% 0%;-webkit-transform-origin: 50% 0%;"),"left"==s.tooltip_style.position&&(r+="transform-origin: 100% 50%;-moz-transform-origin: 100% 50%;-webkit-transform-origin: 100% 50%;"),"right"==s.tooltip_style.position&&(r+="transform-origin: 0% 50%;-moz-transform-origin: 0% 50%;-webkit-transform-origin: 0% 50%;")),i+='<div class="imp-tooltip" style="'+r+'" data-index="'+o+'">',"top"==s.tooltip_style.position&&(i+='   <div class="hs-arrow hs-arrow-bottom" style="border-top-color: rgba('+l.r+", "+l.g+", "+l.b+", "+s.tooltip_style.background_opacity+');"></div>',0==parseInt(e.settings.
    general.sticky_tooltips,10)&&(i+='   <div class="imp-tooltip-buffer imp-tooltip-buffer-bottom '+n+'"></div>')),"bottom"==s.tooltip_style.position&&(i+='   <div class="hs-arrow hs-arrow-top" style="border-bottom-color: rgba('+l.r+", "+l.g+", "+l.b+", "+s.tooltip_style.background_opacity+');"></div>',0==parseInt(e.settings.general.sticky_tooltips,10)&&(i+='   <div class="imp-tooltip-buffer imp-tooltip-buffer-top '+n+'"></div>')),"left"==s.tooltip_style.position&&(i+='   <div class="hs-arrow hs-arrow-right" style="border-left-color: rgba('+l.r+", "+l.g+", "+l.b+", "+s.tooltip_style.background_opacity+');"></div>',0==parseInt(e.settings.general.sticky_tooltips,10)&&(i+='   <div class="imp-tooltip-buffer imp-tooltip-buffer-right '+n+'"></div>')),"right"==s.tooltip_style.position&&(i+='   <div class="hs-arrow hs-arrow-left" style="border-right-color: rgba('+l.r+", "+l.g+", "+l.b+", "+s.tooltip_style.background_opacity+');"></div>',0==parseInt(e.settings.general.sticky_tooltips,10)&&(i+='   <div class="imp-tooltip-buffer imp-tooltip-buffer-left '+n+'"></div>')),"plain-text"==s.tooltip_content.content_type){var r="";r+="color: "+s.tooltip_content.plain_text_color+";",i+='<div class="imp-tooltip-plain-text" style="'+r+'">'+s.tooltip_content.plain_text+"</div>"}else s.tooltip_content.squares_json?(console.log("rendering json"),i+=t.squaresRendererRenderObject(s.tooltip_content.squares_json)):i+=t.squaresRendererRenderObject(s.tooltip_content.squares_settings);i+="</div>"}e.wrap.prepend(i)}},measureTooltipSize:function(t){if(!("always"==this.settings.general.fullscreen_tooltips||"mobile"==this.settings.general.fullscreen_tooltips&&d())){var e=this.settings.spots[t],i=this.wrap.find('.imp-tooltip[data-index="'+t+'"]');0==parseInt(e.
        tooltip_style.auto_width,10)&&i.css({width:e.tooltip_style.width}),i.data("imp-measured-width",i.outerWidth()),i.data("imp-measured-height",i.outerHeight())}},animateShapesLoop:function(){if("none"!=this.settings.general.pageload_animation)for(var t=750/this.settings.spots.length,e=h(this.settings.spots.slice()),i=0;i<e.length;i++)this.animateShape(e[i],t*i)},animateShape:function(e,i){var o=this,s=t("#"+e.id);setTimeout(function(){"fade"==o.settings.general.pageload_animation&&s.css({opacity:e.default_style.opacity}),"grow"==o.settings.general.pageload_animation&&s.css({transform:"scale(1, 1)","-moz-transform":"scale(1, 1)","-webkit-transform":"scale(1, 1)"})},i)},events:function(){var e=this;this.wrap.off("mousemove"),this.wrap.on("mousemove",function(t){e.touch||e.handleEventMove(t)}),this.wrap.off("mouseup"),this.wrap.on("mouseup",function(t){e.touch||e.handleEventEnd(t)}),this.wrap.off("touchstart"),this.wrap.on("touchstart",function(t){e.touch=!0,e.handleEventMove(t)}),this.wrap.off("touchmove"),this.wrap.on("touchmove",function(t){e.handleEventMove(t)}),this.
        wrap.off("touchend"),this.wrap.on("touchend",function(t){e.handleEventEnd(t)}),t(i).off("mousemove."+this.settings.id),t(i).on("mousemove."+this.settings.id,function(i){e.touch||e.manuallyHighlightedShape||e.manuallyShownTooltip||0==t(i.target).closest(".imp-wrap").length&&0==t(i.target).closest(".imp-fullscreen-tooltips-container").length&&(e.visibleTooltip&&e.hideTooltip(),e.clickedShape&&e.unclickShape(),e.highlightedShape&&e.unhighlightShape())}),t(i).off("touchstart."+this.settings.id),t(i).on("touchstart."+this.settings.id,function(i){e.manuallyHighlightedShape||e.manuallyShownTooltip||0==t(i.target).closest(".imp-wrap").length&&0==t(i.target).closest(".imp-fullscreen-tooltips-container").length&&(e.visibleTooltip&&e.hideTooltip(),e.clickedShape&&e.unclickShape(),e.highlightedShape&&e.unhighlightShape())}),t(i).off("click."+this.settings.id,".imp-tooltip-close-button"),t(i).on("click."+this.settings.id,".imp-tooltip-close-button",function(){e.hideTooltip(),e.clickedShape&&e.unclickShape(),e.highlightedShape&&e.unhighlightShape()}),1==parseInt(this.settings.general.late_initialization,10)?f||(f=new MutationObserver(function(i,o){clearTimeout(e.initTimeout),e.initTimeout=setTimeout(function(){for(var o=0;o<i.length;o++)if(0==t(i[o].target).closest(".imp-initialized").length&&!t(i[o].target).hasClass("imp-initialized")){e.init();break}},50)}),f.observe(i,{subtree:!0,attributes:!0})):f&&(f.disconnect(),f=o)},handleEventMove:function(e){if(!this.fullscreenTooltipVisible&&(0==t(e.target).closest(".imp-tooltip").length&&!t(e.target).hasClass("imp-tooltip")||0!=parseInt(this.settings.general.sticky_tooltips,10))){(this.manuallyHighlightedShape||this.manuallyShownTooltip)&&(this.manuallyHighlightedShape=!1,this.manuallyShownTooltip=!1);var i=this.getEventRelativeCoordinates(e),o=this.matchShapeToCoords(i);o!=-1&&o!=this.highlightedShapeIndex?(this.highlightedShape&&this.highlightedShapeIndex!=this.clickedShapeIndex&&this.unhighlightShape(),this.highlightShape(o,!0)):o==-1&&this.highlightedShape&&this.highlightedShapeIndex!=this.clickedShapeIndex&&this.unhighlightShape(),this.highlightedShape&&this.visibleTooltipIndex!=this.highlightedShapeIndex?(this.clickedShape&&this.unclickShape(),this.visibleTooltip&&this.hideTooltip(),"show-tooltip"==this.highlightedShape.actions.mouseover&&(this.showTooltip(this.highlightedShapeIndex),this.updateTooltipPosition(o,e))):!this.visibleTooltip||this.highlightedShape||this.clickedShape||this.visibleTooltip&&this.
        hideTooltip(),this.visibleTooltip&&this.highlightedShape&&1==parseInt(this.settings.general.sticky_tooltips,10)&&"show-tooltip"==this.highlightedShape.actions.mouseover&&this.updateTooltipPosition(this.highlightedShapeIndex,e)}},handleEventEnd:function(e){if(0==t(e.target).closest(".imp-tooltip").length&&!this.fullscreenTooltipVisible){(this.manuallyHighlightedShape||this.manuallyShownTooltip)&&(this.manuallyHighlightedShape=!1,this.manuallyShownTooltip=!1);var i=this.getEventRelativeCoordinates(e),o=this.matchShapeToCoords(i);o!=-1&&o!=this.clickedShapeIndex?(this.clickedShape&&this.unclickShape(),this.clickShape(o,e)):o==-1&&this.clickedShape&&this.unclickShape()}},getEventRelativeCoordinates:function(t){var e,i;if("touchstart"==t.type||"touchmove"==t.type||"touchend"==t.type||"touchcancel"==t.type){var o=t.originalEvent.
            touches[0]||t.originalEvent.changedTouches[0];e=o.pageX,i=o.pageY}else"mousedown"!=t.type&&"mouseup"!=t.type&&"mousemove"!=t.type&&"mouseover"!=t.type&&"mouseout"!=t.type&&"mouseenter"!=t.type&&"mouseleave"!=t.type||(e=t.pageX,i=t.pageY);return e-=this.wrap.offset().left,i-=this.wrap.offset().top,e=e/this.wrap.width()*100,i=i/this.wrap.height()*100,{x:e,y:i}},getEventCoordinates:function(t){var e,i;if("touchstart"==t.type||"touchmove"==t.type||"touchend"==t.type||"touchcancel"==t.type){var o=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0];e=o.pageX,i=o.pageY}else"mousedown"!=t.type&&"mouseup"!=t.type&&"mousemove"!=t.type&&"mouseover"!=t.type&&"mouseout"!=t.type&&"mouseenter"!=t.type&&"mouseleave"!=t.type||(e=t.pageX,i=t.pageY);return{x:e,y:i}},matchShapeToCoords:function(t){for(var e=0;e<this.settings.spots.length;e++){var i=this.settings.spots[e];if("poly"==i.type){var o=t.x/100*this.wrap.width(),s=t.y/100*this.wrap.height();if(o=o*this.settings.general.width/this.wrap.width(),s=s*this.settings.general.height/this.wrap.height(),l(o,s,i.vs))return e}if("spot"==i.type){var o=t.x/100*this.wrap.width(),s=t.y/100*this.wrap.height(),a=i.x/100*this.wrap.width()-i.width/2,p=i.y/100*this.wrap.height()-i.height/2,h=i.width,d=i.height;if(1==parseInt(i.default_style.icon_is_pin,10)&&(p-=i.height/2),r(o,s,a,p,h,d))return e}if("rect"==i.type&&r(t.x,t.y,i.x,i.y,i.width,i.height))return e;if("oval"==i.type){var o=t.x,s=t.y,g=i.x+i.width/2,c=i.y+i.height/2,a=i.width/2,p=i.height/2;if(n(o,s,g,c,a,p))return e}}return-1},applyMouseoverStyles:function(t){var e=this,i=e.settings.spots[t],o=this.wrap.find("#"+i.id),s="";if("spot"==i.type&&0==parseInt(i.default_style.use_icon,10)){var r=a(i.mouseover_style.background_color),l=a(i.mouseover_style.border_color);s+="left: "+i.x+"%;",s+="top: "+i.y+"%;",s+="width: "+i.width+"px;",s+="height: "+i.height+"px;",s+="margin-left: -"+i.
            width/2+"px;",s+="margin-top: -"+i.height/2+"px;",s+="opacity: "+i.mouseover_style.opacity+";",s+="border-radius: "+i.mouseover_style.border_radius+"px;",s+="background: rgba("+r.r+", "+r.g+", "+r.b+", "+i.mouseover_style.background_opacity+");",s+="border-width: "+i.mouseover_style.border_width+"px;",s+="border-style: "+i.mouseover_style.border_style+";",s+="border-color: rgba("+l.r+", "+l.g+", "+l.b+", "+i.mouseover_style.border_opacity+");"}if("spot"==i.type&&1==parseInt(i.default_style.use_icon,10)&&(s+="left: "+i.x+"%;",s+="top: "+i.y+"%;",s+="width: "+i.width+"px;",s+="height: "+i.height+"px;",s+="margin-left: -"+i.width/2+"px;",s+=1==parseInt(i.default_style.icon_is_pin,10)?"margin-top: -"+i.height+"px;":"margin-top: -"+i.height/2+"px;",s+="opacity: "+i.mouseover_style.opacity+";"),"spot"==i.type&&1==parseInt(i.default_style.use_icon,10)&&"library"==i.default_style.icon_type&&o.find("path").attr("style","fill:"+i.mouseover_style.icon_fill),"rect"==i.type){var r=a(i.mouseover_style.background_color),l=a(i.mouseover_style.border_color);s+="left: "+i.x+"%;",s+="top: "+i.y+"%;",s+="width: "+i.width+"%;",s+="height: "+i.height+"%;",s+="opacity: "+i.mouseover_style.opacity+";",s+="border-radius: "+i.mouseover_style.border_radius+"px;",s+="background: rgba("+r.r+", "+r.g+", "+r.b+", "+i.mouseover_style.background_opacity+");",s+="border-width: "+i.mouseover_style.border_width+"px;",s+="border-style: "+i.
            mouseover_style.border_style+";",s+="border-color: rgba("+l.r+", "+l.g+", "+l.b+", "+i.mouseover_style.border_opacity+");"}if("oval"==i.type){var r=a(i.mouseover_style.background_color),l=a(i.mouseover_style.border_color);s+="left: "+i.x+"%;",s+="top: "+i.y+"%;",s+="width: "+i.width+"%;",s+="height: "+i.height+"%;",s+="opacity: "+i.mouseover_style.opacity+";",s+="border-radius: 50% 50%;",s+="background: rgba("+r.r+", "+r.g+", "+r.b+", "+i.mouseover_style.background_opacity+");",s+="border-width: "+i.mouseover_style.border_width+"px;",s+="border-style: "+i.mouseover_style.border_style+";",s+="border-color: rgba("+l.r+", "+l.g+", "+l.b+", "+i.mouseover_style.border_opacity+");"}if("poly"==i.type){var n=a(i.mouseover_style.fill),p=a(i.mouseover_style.stroke_color);s+="opacity: "+i.mouseover_style.opacity+";",s+="fill: rgba("+n.r+", "+n.g+", "+n.b+", "+i.mouseover_style.fill_opacity+");",s+="stroke: rgba("+p.r+", "+p.g+", "+p.b+", "+i.mouseover_style.stroke_opacity+");",s+="stroke-width: "+i.mouseover_style.stroke_width+"px;",s+="stroke-dasharray: "+i.mouseover_style.stroke_dasharray+";",s+="stroke-linecap: "+i.mouseover_style.stroke_linecap+";"}o.attr("style",s)},applyDefaultStyles:function(t){var e=this,i=e.settings.spots[t],o=this.wrap.find("#"+i.id),s="";if("spot"==i.type&&0==parseInt(i.default_style.use_icon,10)){var r=a(i.default_style.background_color),l=a(i.default_style.border_color);s+="left: "+i.x+"%;",s+="top: "+i.y+"%;",s+="width: "+i.width+"px;",s+="height: "+i.height+"px;",s+="margin-left: -"+i.
            width/2+"px;",s+="margin-top: -"+i.height/2+"px;",s+="opacity: "+i.default_style.opacity+";",s+="border-radius: "+i.default_style.border_radius+"px;",s+="background: rgba("+r.r+", "+r.g+", "+r.b+", "+i.default_style.background_opacity+");",s+="border-width: "+i.default_style.border_width+"px;",s+="border-style: "+i.default_style.border_style+";",s+="border-color: rgba("+l.r+", "+l.g+", "+l.b+", "+i.default_style.border_opacity+");"}if("spot"==i.type&&1==parseInt(i.default_style.use_icon,10)&&(s+="left: "+i.x+"%;",s+="top: "+i.y+"%;",s+="width: "+i.width+"px;",s+="height: "+i.height+"px;",s+="margin-left: -"+i.width/2+"px;",s+=1==parseInt(i.default_style.icon_is_pin,10)?"margin-top: -"+i.height+"px;":"margin-top: -"+i.height/2+"px;",s+="opacity: "+i.default_style.opacity+";"),"spot"==i.type&&1==parseInt(i.default_style.use_icon,10)&&"library"==i.default_style.icon_type&&o.find("path").attr("style","fill:"+i.default_style.icon_fill),"rect"==i.type){var r=a(i.default_style.background_color),l=a(i.default_style.border_color);s+="left: "+i.x+"%;",s+="top: "+i.y+"%;",s+="width: "+i.width+"%;",s+="height: "+i.height+"%;",s+="opacity: "+i.default_style.opacity+";",s+="border-radius: "+i.default_style.border_radius+"px;",s+="background: rgba("+r.r+", "+r.g+", "+r.b+", "+i.default_style.background_opacity+");",s+="border-width: "+i.default_style.border_width+"px;",s+="border-style: "+i.default_style.border_style+";",s+="border-color: rgba("+l.r+", "+l.g+", "+l.b+", "+i.default_style.border_opacity+");"}if("oval"==i.type){var r=a(i.default_style.background_color),l=a(i.default_style.border_color);s+="left: "+i.x+"%;",s+="top: "+i.y+"%;",s+="width: "+i.width+"%;",s+="height: "+i.height+"%;",s+="opacity: "+i.default_style.opacity+";",s+="border-radius: 50% 50%;",s+="background: rgba("+r.r+", "+r.g+", "+r.b+", "+i.default_style.background_opacity+");",s+="border-width: "+i.default_style.border_width+"px;",s+="border-style: "+i.default_style.border_style+";",s+="border-color: rgba("+l.r+", "+l.g+", "+l.b+", "+i.default_style.border_opacity+");"}if("poly"==i.type){var n=a(i.default_style.fill),p=a(i.default_style.stroke_color);s+="opacity: "+i.default_style.opacity+";",s+="fill: rgba("+n.r+", "+n.g+", "+n.b+", "+i.default_style.
            fill_opacity+");",s+="stroke: rgba("+p.r+", "+p.g+", "+p.b+", "+i.default_style.stroke_opacity+");",s+="stroke-width: "+i.default_style.stroke_width+"px;",s+="stroke-dasharray: "+i.default_style.stroke_dasharray+";",s+="stroke-linecap: "+i.default_style.stroke_linecap+";"}o.attr("style",s)},highlightShape:function(e,i){this.applyMouseoverStyles(e),this.highlightedShapeIndex=e,this.highlightedShape=this.settings.spots[e],i&&t.imageMapProEventHighlightedShape(this.settings.general.name,this.highlightedShape.id)},unhighlightShape:function(){this.applyDefaultStyles(this.highlightedShapeIndex),t.imageMapProEventUnhighlightedShape(this.settings.general.name,this.highlightedShape.id),this.highlightedShapeIndex=o,this.highlightedShape=o},clickShape:function(e,i){"show-tooltip"==this.settings.spots[e].actions.click&&(this.applyMouseoverStyles(e),this.showTooltip(e),this.updateTooltipPosition(e,i),this.clickedShapeIndex=e,this.clickedShape=this.settings.spots[e]),"follow-link"==this.settings.spots[e].actions.click&&(0==t("#imp-temp-link").length&&t("body").append('<a href="" id="imp-temp-link" target="_blank"></a>'),t("#imp-temp-link").attr("href",this.settings.spots[e].actions.link),1==parseInt(this.settings.spots[e].actions.open_link_in_new_window,10)?t("#imp-temp-link").attr("target","_blank"):t("#imp-temp-link").removeAttr("target"),t("#imp-temp-link")[0].click()),t.imageMapProEventClickedShape(this.settings.general.name,this.settings.spots[e].id)},unclickShape:function(){this.applyDefaultStyles(this.clickedShapeIndex),"show-tooltip"==this.clickedShape.actions.click&&this.hideTooltip(),this.clickedShapeIndex=o,this.clickedShape=o},showTooltip:function(e){if("mobile-only"==this.settings.general.fullscreen_tooltips&&d()||"always"==this.settings.general.fullscreen_tooltips){this.visibleTooltip=t('.imp-fullscreen-tooltip[data-index="'+e+'"]'),this.visibleTooltipIndex=e,this.fullscreenTooltipsContainer.show();var i=this;setTimeout(function(){i.visibleTooltip.addClass("imp-tooltip-visible")},20),this.fullscreenTooltipVisible=!0}else t(".imp-tooltip-visible").removeClass("imp-tooltip-visible"),this.visibleTooltip=this.wrap.find('.imp-tooltip[data-index="'+e+'"]'),this.visibleTooltipIndex=e,this.visibleTooltip.addClass("imp-tooltip-visible"),this.measureTooltipSize(e);t.imageMapProEventOpenedTooltip(this.settings.general.name,this.settings.spots[e].id)},hideTooltip:function(){if(t(".imp-tooltip-visible").removeClass("imp-tooltip-visible"),
this.visibleTooltip=o,this.visibleTooltipIndex=o,"mobile-only"==this.settings.general.fullscreen_tooltips&&d()||"always"==this.settings.general.fullscreen_tooltips){var e=this;setTimeout(function(){e.fullscreenTooltipsContainer.hide()},200),this.fullscreenTooltipVisible=!1}t.imageMapProEventClosedTooltip(this.settings.general.name)},updateTooltipPosition:function(i,o){if(!this.fullscreenTooltipVisible){var s,a,r,l,n,h,d,g,c,u,y=20;if(s=this.visibleTooltip,a=this.visibleTooltip.data("imp-measured-width"),r=this.visibleTooltip.data("imp-measured-height"),u=this.settings.spots[i],1==parseInt(this.settings.general.sticky_tooltips,10)&&"show-tooltip"==u.actions.mouseover&&o){var f=this.getEventCoordinates(o);g=f.x,c=f.y,l=g-this.wrap.offset().left,n=c-this.wrap.offset().top,h=0,d=0}else"spot"==u.type?(h=u.width,d=u.height,l=Math.round(10*u.x)/10/100*this.wrap.width()-h/2,n=Math.round(10*u.y)/10/100*this.wrap.height()-d/2):(h=u.width/100*this.wrap.width(),d=u.height/100*this.wrap.height(),l=Math.round(10*u.x)/10/100*this.wrap.width(),n=Math.round(10*u.y)/10/100*this.wrap.height());var _,m;"left"==u.tooltip_style.position&&(_=l-a-y,m=n+d/2-r/2),"right"==u.tooltip_style.position&&(_=l+h+y,m=n+d/2-r/2),"top"==u.tooltip_style.position&&(_=l+h/2-a/2,m=n-r-y),"bottom"==u.tooltip_style.position&&(_=l+h/2-a/2,m=n+d+y),"spot"==u.type&&1==parseInt(u.default_style.icon_is_pin,10)&&(m-=d/2);var b={x:_,y:m};if(1==parseInt(this.settings.general.constrain_tooltips,10)){var v=this.wrap.offset().left-t(e).scrollLeft(),w=this.wrap.offset().top-t(e).scrollTop();b=p(_+v,m+w,a,r),b.x-=v,b.y-=w}s.css({left:b.x,top:b.y})}}}),t.fn[g]=function(e){return this.each(function(){t.data(this,"plugin_"+g,new s(this,e))})}}(jQuery,window,document);