!function(t,e,s,o){function i(t){this.settings=t,this.containers=[],this.
    init()}function n(t){this.settings=t,this.elements=[],this.init()}function r(e){this.settings=e.settings,this.defaults=t.extend(!0,{},d),this.
    elementSpecificDefaults={},this.options=o,this.init(e)}function a(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),
        g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}var l=new Array;t.squaresRendererRegisterElement=function(t){l[t.name]=t},t.squaresRendererRenderObject=function(t){if("object"!=typeof
         t)try{t=JSON.parse(t)}catch(t){return console.log(t),console.log("Squares renderer failed to parse JSON: "),console.log(json),""}var e=new i(t),s=e.render();return s},i.prototype.init=function(){
            for(var t=0;t<this.settings.containers.length;t++)this.containers[t]=new n(this.settings.containers[t])},i.prototype.render=function(){for(var t="",e=0;e<this.containers.length;e++)t+=this.containers[e].
            render();return t},n.prototype.init=function(){if(this.settings.settings)for(var t=0;t<this.settings.settings.elements.length;t++)this.elements[t]=new r(this.settings.settings.elements[t])},n.prototype.render=function()
            {var t="";if(t+='<div class="squares-container">',this.settings.settings)for(var e=0;e<this.settings.settings.elements.length;e++)t+=this.elements[e].render();return t+='\t<div class="squares-clear"></div>',t+="</div>"};
            var d={layout:{box_model:{margin:{top:0,bottom:0,left:0,right:0},padding:{top:10,bottom:10,left:10,right:10}},use_grid:1,column_span:{xs:{use:0,class:"sq-col-xs-12",visible:0},sm:{use:0,class:"sq-col-sm-12",visible:0},md:
            {use:0,class:"sq-col-md-12",visible:1},lg:{use:1,class:"sq-col-lg-12",visible:1}},width:"100",auto_width:1,height:"100",auto_height:1},style:{background_color:"#ffffff",background_opacity:"0",opacity:"1",box_shadow:"none",border_width:"0",border_style:"none",border_color:"#000000",border_opacity:
            "1",border_radius:"0"},font:{font_family:"sans-serif",font_size:"14",font_weight:"normal",font_style:"normal",line_height:"22",text_color:"#ffffff",text_align:"left",text_decoration:"none",text_transform:"none",text_shadow:""},general:{id:"",classes:"",css:""}};r.prototype.init=function(e){var s=t.
                extend(!0,{},l[this.settings.name].controls);for(var o in s){var i=s[o];this.elementSpecificDefaults[o]={};for(var n in i){var r=i[n];this.elementSpecificDefaults[o][n]=r.default}}this.defaults=t.extend(!0,{},this.defaults,this.elementSpecificDefaults),this.options=t.extend(!0,{},this.defaults,e.options)},r.
                prototype.render=function(){var t="";return t+='<div class="squares-element '+this.generateLayoutClass(this.options.layout)+'" style="'+this.generateCSS(this.options)+'">',t+=l[this.settings.name].render(this.options),t+="</div>"},r.prototype.generateLayoutClass=function(){var t=this.options.layout;
                    if(1==parseInt(t.use_grid,10)){var e="",s=t.column_span;return 1==parseInt(s.xs.use,10)&&(e+=s.xs.class+" ",0==parseInt(s.xs.visible,10)&&(e+="sq-hidden-xs ")),1==parseInt(s.sm.use,10)&&(e+=s.sm.class+" ",0==parseInt(s.sm.visible,10)&&(e+="sq-hidden-sm ")),1==parseInt(s.md.use,10)&&(e+=s.md.class+" ",
                    0==parseInt(s.md.visible,10)&&(e+="sq-hidden-md ")),1==parseInt(s.lg.use,10)&&(e+=s.lg.class+" ",0==parseInt(s.lg.visible,10)&&(e+="sq-hidden-lg ")),e}return""},r.prototype.generateCSS=function(){var t="",e=this.options.layout;t+="margin-top: "+e.box_model.margin.top+"px; ",t+="margin-bottom: "+e.box_model.margin.bottom+"px; ",t+="margin-left: "+e.box_model.margin.left+"px; ",t+="margin-right: "+e.box_model.margin.right+"px; ",t+="padding-top: "+e.box_model.padding.top+"px; ",t+="padding-bottom: "+e.box_model.padding.bottom+"px; ",t+="padding-left: "+e.box_model.padding.left+"px; ",t+="padding-right: "+e.box_model.padding.right+"px; ",1==parseInt(e.use_grid,10)||(1==parseInt(e.auto_width,10)?t+="width: auto; ":""===e.width||isNaN(e.width)||(t+="width: "+e.width+"px; "),1==parseInt(e.auto_height,10)?t+="height: auto; ":""===e.height||isNaN(e.height)||(t+="height: "+e.height+"px; ")),t+="float: left; ";var e=this.options.font;this.options.fontStyles="",e&&(t+="font-family: "+e.font_family+"; ",this.options.fontStyles+="font-family: "+e.font_family+"; ",t+="font-size: "+e.font_size+"px; ",this.options.fontStyles+="font-size: "+e.font_size+"px; ",t+="font-weight: "+e.font_weight+"; ",this.options.fontStyles+="font-weight: "+e.font_weight+"; ",t+="font-style: "+e.font_style+"; ",this.options.fontStyles+="font-style: "+e.font_style+"; ",t+="line-height: "+e.line_height+"px; ",this.options.fontStyles+="line-height: "+e.line_height+"px; ",t+="color: "+e.text_color+"; ",this.options.fontStyles+="color: "+e.text_color+"; ",t+="text-align: "+e.text_align+"; ",this.options.fontStyles+="text-align: "+e.text_align+"; ",t+="text-decoration: "+e.text_decoration+"; ",this.options.fontStyles+="text-decoration: "+e.text_decoration+"; ",t+="text-transform: "+e.text_transform+"; ",this.options.fontStyles+="text-transform: "+e.text_transform+"; ",t+="text-shadow: "+e.text_shadow+"; ",this.options.fontStyles+="text-shadow: "+e.text_shadow+"; ");var e=this.options.style;if(e){var s=a(e.background_color);t+="background-color: rgba("+s.r+", "+s.g+", "+s.b+", "+e.background_opacity+"); ",t+="opacity: "+e.opacity+"; ",t+="box-shadow: "+e.box_shadow+"; ",t+="border-width: "+e.border_width+"px; ",t+="border-style: "+e.border_style+"; ";var s=a(e.border_color);t+="border-color: rgba("+s.r+", "+s.g+", "+s.b+", "+e.border_opacity+"); ",t+="border-radius: "+e.border_radius+"px; "}return t}}(jQuery,window,document);