qx.$$packageData['36']={"locales":{},"resources":{},"translations":{"C":{},"en":{}}};
qx.Part.$$notifyLoad("36", function() {
(function(){var c="changeModel",d="resize",f="_applyLabelOptions",g="_applyLabelPath",h="qx.data.Array",j="_applyGroupLabelOptions",m="changeLength",n="row-layer",o="_applyModel",p="changeGroups",q="Boolean",r="GroupingTypeError: You can't mix 'Objects' and 'Strings' as",s="Integer",t="sorter",u="_applyGroupRowHeight",v="group",w="_applyIconPath",x="_applyDelegate",y="changeDelegate",z=" group identifier!",A="???",B="_applyRowHeight",C="qx.data.IListData",D="filter",E="virtual-list",F="String",G="_applyGroupLabelPath",H="_applyIconOptions",I="qx.ui.list.List";qx.Class.define(I,{extend:qx.ui.virtual.core.Scroller,include:[qx.ui.virtual.selection.MModel],implement:qx.data.controller.ISelection,construct:function(J){qx.ui.virtual.core.Scroller.call(this,0,1,20,100);this._init();this.__xM=new qx.data.Array();this.initGroups(this.__xM);if(J!=null){this.initModel(J);};this.initItemHeight();},properties:{appearance:{refine:true,init:E},focusable:{refine:true,init:true},width:{refine:true,init:100},height:{refine:true,init:200},model:{check:C,apply:o,event:c,nullable:true,deferredInit:true},itemHeight:{check:s,init:25,apply:B,themeable:true},groupItemHeight:{check:s,init:null,nullable:true,apply:u,themeable:true},labelPath:{check:F,apply:g,nullable:true},iconPath:{check:F,apply:w,nullable:true},groupLabelPath:{check:F,apply:G,nullable:true},labelOptions:{apply:f,nullable:true},iconOptions:{apply:H,nullable:true},groupLabelOptions:{apply:j,nullable:true},delegate:{apply:x,event:y,init:null,nullable:true},autoGrouping:{check:q,init:true},groups:{check:h,event:p,nullable:false,deferredInit:true}},members:{_background:null,_provider:null,_layer:null,__tq:null,__xN:null,__xO:null,__xP:false,__xQ:false,__xR:false,__xM:null,refresh:function(){this.__tE();},_createChildControlImpl:function(M,L){var K;switch(M){case n:K=new qx.ui.virtual.layer.Row(null,null);break;};return K||qx.ui.virtual.core.Scroller.prototype._createChildControlImpl.call(this,M);},_init:function(){this._provider=new qx.ui.list.provider.WidgetProvider(this);this.__tq=[];this.__xN=[];this.__xO={};this.__xP=false;this.__xQ=false;this.__xR=false;this.getPane().addListener(d,this._onResize,this);this._initBackground();this._initLayer();},_initBackground:function(){this._background=this.getChildControl(n);this.getPane().addLayer(this._background);},_initLayer:function(){this._layer=this._provider.createLayer();this.getPane().addLayer(this._layer);},_getDataFromRow:function(P){var O=null;var N=this.getModel();if(N==null){return null;};if(this._isGroup(P)){O=this.getGroups().getItem(this._lookupGroup(P));}else {O=N.getItem(this._lookup(P));};if(O!=null){return O;}else {return null;};},_getLookupTable:function(){return this.__tq;},_lookup:function(Q){return this.__tq[Q];},_lookupGroup:function(R){return this.__xN.indexOf(R);},_reverseLookup:function(S){if(S<0){return -1;};return this.__tq.indexOf(S);},_isGroup:function(T){return this._lookup(T)==-1;},_getSelectables:function(){return this.getModel();},_applyModel:function(V,U){if(V!=null){V.addListener(m,this._onModelChange,this);};if(U!=null){U.removeListener(m,this._onModelChange,this);};this._provider.removeBindings();this._onModelChange();},_applyRowHeight:function(X,W){this.getPane().getRowConfig().setDefaultItemSize(X);},_applyGroupRowHeight:function(ba,Y){this.__xT();},_applyLabelPath:function(bc,bb){this._provider.setLabelPath(bc);},_applyIconPath:function(be,bd){this._provider.setIconPath(be);},_applyGroupLabelPath:function(bg,bf){this._provider.setGroupLabelPath(bg);},_applyLabelOptions:function(bi,bh){this._provider.setLabelOptions(bi);},_applyIconOptions:function(bk,bj){this._provider.setIconOptions(bk);},_applyGroupLabelOptions:function(bm,bl){this._provider.setGroupLabelOptions(bm);},_applyDelegate:function(bo,bn){this._provider.setDelegate(bo);this.__tE();},_onResize:function(e){this.getPane().getColumnConfig().setItemSize(0,e.getData().width);},_onModelChange:function(e){this.__tE();this._applyDefaultSelection();},__xS:function(){this.getPane().getRowConfig().setItemCount(this.__tq.length);this.getPane().fullUpdate();},__xT:function(){var bp=this.getPane().getRowConfig();var bq=this.getGroupItemHeight();bp.resetItemSizes();if(bq){for(var i=0,l=this.__tq.length;i<l; ++i){if(this.__tq[i]==-1){bp.setItemSize(i,bq);};};};},__tE:function(){this.__tq=[];this.__xN=[];this.__xO={};if(this.isAutoGrouping()){this.getGroups().removeAll();};var br=this.getModel();if(br!=null){this._runDelegateFilter(br);this._runDelegateSorter(br);this._runDelegateGroup(br);};this._updateSelection();this.__xT();this.__xS();},_runDelegateFilter:function(bt){var bs=qx.util.Delegate.getMethod(this.getDelegate(),D);for(var i=0,l=bt.length;i<l; ++i){if(bs==null||bs(bt.getItem(i))){this.__tq.push(i);};};},_runDelegateSorter:function(bu){if(this.__tq.length==0){return;};var bv=qx.util.Delegate.getMethod(this.getDelegate(),t);if(bv!=null){this.__tq.sort(function(a,b){return bv(bu.getItem(a),bu.getItem(b));});};},_runDelegateGroup:function(bz){var bA=qx.util.Delegate.getMethod(this.getDelegate(),v);if(bA!=null){for(var i=0,l=this.__tq.length;i<l; ++i){var bw=this.__tq[i];var by=this.getModel().getItem(bw);var bx=bA(by);this.__xU(bx,bw);};this.__tq=this.__xV();};},__xU:function(bC,bB){if(bC==null){this.__xR=true;bC=A;};var name=this.__xW(bC);if(this.__xO[name]==null){this.__xO[name]=[];if(this.isAutoGrouping()){this.getGroups().push(bC);};};this.__xO[name].push(bB);},__xV:function(){this.__xX();var bG=[];var bI=0;var bE=this.getGroups();for(var i=0;i<bE.getLength();i++ ){var bD=bE.getItem(i);bG.push(-1);this.__xN.push(bI);bI++ ;var bH=this.__xW(bD);var bF=this.__xO[bH];if(bF!=null){for(var k=0;k<bF.length;k++ ){bG.push(bF[k]);bI++ ;};};};return bG;},__xW:function(bK){var name=null;if(!qx.lang.Type.isString(bK)){var bJ=this.getGroups().indexOf(bK);this.__xQ=true;name=v;if(bJ==-1){name+=this.getGroups().getLength();}else {name+=bJ;};}else {this.__xP=true;var name=bK;};return name;},__xX:function(){if(this.__xQ&&this.__xR||this.__xQ&&this.__xP){throw new Error(r+z);};}},destruct:function(){var bL=this.getModel();if(bL!=null){bL.removeListener(m,this._onModelChange,this);};var bM=this.getPane();if(bM!=null){bM.removeListener(d,this._onResize,this);};this._background.dispose();this._provider.dispose();this._layer.dispose();this._background=this._provider=this._layer=this.__tq=this.__xN=this.__xO=null;if(this.__xM){this.__xM.dispose();};}});})();(function(){var a="_applyColorOdd",b="_applyColorEven",c="Color",d="qx.ui.virtual.layer.AbstractBackground";qx.Class.define(d,{extend:qx.ui.virtual.layer.Abstract,construct:function(e,f){qx.ui.virtual.layer.Abstract.call(this);if(e){this.setColorEven(e);};if(f){this.setColorOdd(f);};this.__yb={};this.__yc={};},properties:{colorEven:{nullable:true,check:c,apply:b,themeable:true},colorOdd:{nullable:true,check:c,apply:a,themeable:true}},members:{__yd:null,__ye:null,__yb:null,__yc:null,setColor:function(h,g){if(g){this.__yb[h]=qx.theme.manager.Color.getInstance().resolve(g);}else {delete (this.__yb[h]);};},clearCustomColors:function(){this.__yb={};this.updateLayerData();},getColor:function(i){var j=this.__yb[i];if(j){return j;}else {return i%2==0?this.__yd:this.__ye;};},_applyColorEven:function(l,k){if(l){this.__yd=qx.theme.manager.Color.getInstance().resolve(l);}else {this.__yd=null;};this.updateLayerData();},_applyColorOdd:function(n,m){if(n){this.__ye=qx.theme.manager.Color.getInstance().resolve(n);}else {this.__ye=null;};this.updateLayerData();},setBackground:function(o,p){if(p){this.__yc[o]=qx.theme.manager.Decoration.getInstance().resolve(p);}else {delete (this.__yc[o]);};this.updateLayerData();},getBackground:function(q){return this.__yc[q];}},destruct:function(){this.__yb=this.__yc=null;}});})();(function(){var a="left: 0;",b="width:",c="background-color:",d="qx.ui.virtual.layer.Row",e="",f="block",g="position: absolute;",h="</div>",i="height:",j="row-layer",k="<div style='",l="'>",m=";",n="px;",o="none",p="top:";qx.Class.define(d,{extend:qx.ui.virtual.layer.AbstractBackground,properties:{appearance:{refine:true,init:j}},members:{_fullUpdate:function(x,u,t,w){var A=[];var z=qx.lang.Array.sum(w);var top=0;var D=x;var s=0;for(var y=0;y<t.length;y++ ){var v=this.getColor(D);var B=v?c+v+m:e;var C=this.getBackground(D);var q=C?qx.bom.element.Style.compile(C.getStyles()):e;A.push(k,g,a,p,top,n,i,t[y],n,b,z,n,B,q,l,h);s++ ;top+=t[y];D+=1;};var r=this.getContentElement().getDomElement();r.style.display=o;r.innerHTML=A.join(e);r.style.display=f;this._width=z;},_updateLayerWindow:function(G,H,F,E){if(G!==this.getFirstRow()||F.length!==this.getRowSizes().length||this._width<qx.lang.Array.sum(E)){this._fullUpdate(G,H,F,E);};},setColor:function(J,I){qx.ui.virtual.layer.AbstractBackground.prototype.setColor.call(this,J,I);if(this.__yf(J)){this.updateLayerData();};},setBackground:function(K,L){qx.ui.virtual.layer.AbstractBackground.prototype.setBackground.call(this,K,L);if(this.__yf(K)){this.updateLayerData();};},__yf:function(M){var O=this.getFirstRow();var N=O+this.getRowSizes().length-1;return M>=O&&M<=N;}}});})();(function(){var a="qx.ui.list.provider.IListProvider";qx.Interface.define(a,{members:{createLayer:function(){},createItemRenderer:function(){},createGroupRenderer:function(){},styleSelectabled:function(b){},styleUnselectabled:function(c){},isSelectable:function(d){},setLabelPath:function(e){},setIconPath:function(f){},setLabelOptions:function(g){},setIconOptions:function(h){},setDelegate:function(i){},removeBindings:function(){}}});})();(function(){var a="cell.type",b="model[",c="groups[",d="model",f="",g="changeDelegate",h="label",i="qx.ui.list.core.MWidgetController",j="icon",k="]",l="value",m="BindingIds",n=".",o="group",p="String";qx.Mixin.define(i,{construct:function(){this.__yg=[];},properties:{labelPath:{check:p,nullable:true},iconPath:{check:p,nullable:true},groupLabelPath:{check:p,nullable:true},labelOptions:{nullable:true},iconOptions:{nullable:true},groupLabelOptions:{nullable:true},delegate:{event:g,init:null,nullable:true}},members:{__yg:null,bindDefaultProperties:function(q,r){if(q.getUserData(a)!=o){this.bindProperty(f,d,null,q,r);this.bindProperty(this.getLabelPath(),h,this.getLabelOptions(),q,r);if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),j,this.getIconOptions(),q,r);};}else {this.bindProperty(this.getGroupLabelPath(),l,this.getGroupLabelOptions(),q,r);};},bindProperty:function(u,x,v,t,s){var y=t.getUserData(a);var w=this.__yh(s,u,y);if(v){v.ignoreConverter=d;};var z=this._list.bind(w,t,x,v);this.__uM(t,z);},bindPropertyReverse:function(D,B,E,F,A){var G=F.getUserData(a);var C=this.__yh(A,D,G);var H=F.bind(B,this._list,C,E);this.__uM(F,H);},removeBindings:function(){while(this.__yg.length>0){var I=this.__yg.pop();this._removeBindingsFrom(I);};},_configureItem:function(J){var K=this.getDelegate();if(K!=null&&K.configureItem!=null){K.configureItem(J);};},_configureGroupItem:function(L){var M=this.getDelegate();if(M!=null&&M.configureGroupItem!=null){M.configureGroupItem(L);};},_bindItem:function(N,P){var O=this.getDelegate();if(O!=null&&O.bindItem!=null){O.bindItem(this,N,P);}else {this.bindDefaultProperties(N,P);};},_bindGroupItem:function(Q,S){var R=this.getDelegate();if(R!=null&&R.bindGroupItem!=null){R.bindGroupItem(this,Q,S);}else {this.bindDefaultProperties(Q,S);};},_removeBindingsFrom:function(T){var U=this.__yi(T);while(U.length>0){var V=U.pop();try{this._list.removeBinding(V);}catch(e){T.removeBinding(V);};};if(qx.lang.Array.contains(this.__yg,T)){qx.lang.Array.remove(this.__yg,T);};},__yh:function(X,ba,Y){var W=b+X+k;if(Y==o){W=c+X+k;};if(ba!=null&&ba!=f){W+=n+ba;};return W;},__uM:function(bc,bd){var bb=this.__yi(bc);if(!qx.lang.Array.contains(bb,bd)){bb.push(bd);};if(!qx.lang.Array.contains(this.__yg,bc)){this.__yg.push(bc);};},__yi:function(be){var bf=be.getUserData(m);if(bf==null){bf=[];be.setUserData(m,bf);};return bf;}},destruct:function(){this.__yg=null;}});})();(function(){var a="cell.type",b="changeDelegate",c="qx.ui.list.provider.WidgetProvider",d="createItem",e="group-item",f="onPool",g="item",h="createGroupItem",i="created",j="group";qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.virtual.core.IWidgetCellProvider,qx.ui.list.provider.IListProvider],include:[qx.ui.list.core.MWidgetController],construct:function(k){qx.core.Object.call(this);this._list=k;this._itemRenderer=this.createItemRenderer();this._groupRenderer=this.createGroupRenderer();this._itemRenderer.addListener(i,this._onItemCreated,this);this._groupRenderer.addListener(i,this._onGroupItemCreated,this);this._list.addListener(b,this._onChangeDelegate,this);},members:{_itemRenderer:null,_groupRenderer:null,getCellWidget:function(n,l){var m=null;if(!this._list._isGroup(n)){m=this._itemRenderer.getCellWidget();m.setUserData(a,g);this._bindItem(m,this._list._lookup(n));if(this._list._manager.isItemSelected(n)){this._styleSelectabled(m);}else {this._styleUnselectabled(m);};}else {m=this._groupRenderer.getCellWidget();m.setUserData(a,j);this._bindGroupItem(m,this._list._lookupGroup(n));};return m;},poolCellWidget:function(o){this._removeBindingsFrom(o);if(o.getUserData(a)==g){this._itemRenderer.pool(o);}else if(o.getUserData(a)==j){this._groupRenderer.pool(o);};this._onPool(o);},createLayer:function(){return new qx.ui.virtual.layer.WidgetCell(this);},createItemRenderer:function(){var p=qx.util.Delegate.getMethod(this.getDelegate(),d);if(p==null){p=function(){return new qx.ui.form.ListItem();};};var q=new qx.ui.virtual.cell.WidgetCell();q.setDelegate({createWidget:p});return q;},createGroupRenderer:function(){var r=qx.util.Delegate.getMethod(this.getDelegate(),h);if(r==null){r=function(){var t=new qx.ui.basic.Label();t.setAppearance(e);return t;};};var s=new qx.ui.virtual.cell.WidgetCell();s.setDelegate({createWidget:r});return s;},styleSelectabled:function(v){var u=this.__yj(v);this._styleSelectabled(u);},styleUnselectabled:function(x){var w=this.__yj(x);this._styleUnselectabled(w);},isSelectable:function(z){if(this._list._isGroup(z)){return false;};var y=this._list._layer.getRenderedCellWidget(z,0);if(y!=null){return y.isEnabled();}else {return true;};},_styleSelectabled:function(A){this.__yk(A,{selected:1});},_styleUnselectabled:function(B){this.__yk(B,{});},_onPool:function(C){var D=qx.util.Delegate.getMethod(this.getDelegate(),f);if(D!=null){D(C);};},_onItemCreated:function(event){var E=event.getData();this._configureItem(E);},_onGroupItemCreated:function(event){var F=event.getData();this._configureGroupItem(F);},_onChangeDelegate:function(event){this._itemRenderer.dispose();this._itemRenderer=this.createItemRenderer();this._itemRenderer.addListener(i,this._onItemCreated,this);this._groupRenderer.dispose();this._groupRenderer=this.createGroupRenderer();this._groupRenderer.addListener(i,this._onGroupItemCreated,this);this.removeBindings();this._list.getPane().fullUpdate();},__yj:function(G){return this._list._layer.getRenderedCellWidget(G,0);},__yk:function(I,H){if(I==null){return;};this._itemRenderer.updateStates(I,H);}},destruct:function(){this._itemRenderer.dispose();this._groupRenderer.dispose();this._itemRenderer=this._groupRenderer=null;}});})();
});