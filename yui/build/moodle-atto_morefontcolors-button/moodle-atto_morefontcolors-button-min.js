YUI.add("moodle-atto_morefontcolors-button",function(e,t){e.namespace("M.atto_morefontcolors").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){var t=[],n=this.get("colors");e.Array.each(n,function(e){t.push({text:'<div style="width: 20px; height: 20px; border: 1px solid #CCC; background-color: '+e+'"></div>',callbackArgs:e,callback:this._changeStyle})}),this.addToolbarMenu({icon:"e/text_color",overlayWidth:"4",menuColor:"#333333",globalItemConfig:{inlineFormat:!0,callback:this._changeStyle},items:t})},_changeStyle:function(e,t){this.get("host").formatSelectionInlineStyle({color:t})}},{ATTRS:{colors:{value:{}}}})},"@VERSION@");
