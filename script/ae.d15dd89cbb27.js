qx.$$packageData['292']={"locales":{},"resources":{},"translations":{"C":{},"en":{}}};
qx.Part.$$notifyLoad("292", function() {
(function(){var a="qx.data.controller.ISelection";qx.Interface.define(a,{members:{setSelection:function(b){},getSelection:function(){},resetSelection:function(){}}});})();(function(){var a="scrollY",b="The method 'getItemRight' is not implemented!",c="update",d="scrollX",f="The method 'getItemLeft' is not implemented!",g="The method 'getItemBottom' is not implemented!",h="The method 'getItemTop' is not implemented!",i="pane",j="os.scrollBarOverlayed",k="qx.ui.virtual.core.Scroller";qx.Class.define(k,{extend:qx.ui.core.scroll.AbstractScrollArea,construct:function(o,l,n,m){qx.ui.core.scroll.AbstractScrollArea.call(this);this.__xn=new qx.ui.virtual.core.Pane(o,l,n,m);this.__xn.addListener(c,this._computeScrollbars,this);this.__xn.addListener(d,this._onScrollPaneX,this);this.__xn.addListener(a,this._onScrollPaneY,this);if(qx.core.Environment.get(j)){this._add(this.__xn,{edge:0});}else {this._add(this.__xn,{row:0,column:0});};},properties:{width:{refine:true,init:null},height:{refine:true,init:null}},members:{__xn:null,getPane:function(){return this.__xn;},_createChildControlImpl:function(q,p){if(q==i){return this.__xn;}else {return qx.ui.core.scroll.AbstractScrollArea.prototype._createChildControlImpl.call(this,q);};},getItemTop:function(r){throw new Error(h);},getItemBottom:function(s){throw new Error(g);},getItemLeft:function(t){throw new Error(f);},getItemRight:function(u){throw new Error(b);},_onScrollBarX:function(e){this.__xn.setScrollX(e.getData());},_onScrollBarY:function(e){this.__xn.setScrollY(e.getData());}},destruct:function(){this.__xn.dispose();this.__xn=null;}});})();(function(){var a="qx.ui.virtual.core.Pane",b="resize",c="qx.ui.virtual.core.CellEvent",d="update",f="scrollX",g="scrollY",h="change",j="contextmenu",k="__xv",l="__xo",m="__xp",n="appear",o="cellDbltap",p="pointerdown",q="__xw",r="tap",s="qx.event.type.Event",t="qx.event.type.Data",u="cellTap",v="cellContextmenu",w="dbltap";qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(A,x,z,y){qx.ui.core.Widget.call(this);this.__xo=new qx.ui.virtual.core.Axis(z,A);this.__xp=new qx.ui.virtual.core.Axis(y,x);this.__xq=0;this.__xr=0;this.__xs=0;this.__xt=0;this.__xu={};this.__jj={};this.__xv=new qx.ui.container.Composite();this.__xv.setUserBounds(0,0,0,0);this._add(this.__xv);this.__xw=[];this.__xo.addListener(h,this.fullUpdate,this);this.__xp.addListener(h,this.fullUpdate,this);this.addListener(b,this._onResize,this);this.addListenerOnce(n,this._onAppear,this);this.addListener(p,this._onPointerDown,this);this.addListener(r,this._onTap,this);this.addListener(w,this._onDbltap,this);this.addListener(j,this._onContextmenu,this);},events:{cellTap:c,cellContextmenu:c,cellDbltap:c,update:s,scrollX:t,scrollY:t},properties:{width:{refine:true,init:400},height:{refine:true,init:300}},members:{__xo:null,__xp:null,__xq:null,__xr:null,__xs:null,__xt:null,__xu:null,__jj:null,__xv:null,__xw:null,__xx:null,__oN:null,__xy:null,__xz:null,getRowConfig:function(){return this.__xo;},getColumnConfig:function(){return this.__xp;},getChildren:function(){return [this.__xv];},addLayer:function(B){{};this.__xw.push(B);B.setUserBounds(0,0,0,0);this.__xv.add(B);},getLayers:function(){return this.__xw;},getVisibleLayers:function(){var C=[];for(var i=0;i<this.__xw.length;i++ ){var D=this.__xw[i];if(D.isVisible()){C.push(D);};};return C;},getScrollMaxX:function(){var E=this.getInnerSize();if(E){return Math.max(0,this.__xp.getTotalSize()-E.width);};return 0;},getScrollMaxY:function(){var F=this.getInnerSize();if(F){return Math.max(0,this.__xo.getTotalSize()-F.height);};return 0;},setScrollY:function(I){var G=this.getScrollMaxY();if(I<0){I=0;}else if(I>G){I=G;};if(this.__xq!==I){var H=this.__xq;this.__xq=I;this._deferredUpdateScrollPosition();this.fireDataEvent(g,I,H);};},getScrollY:function(){return this.__xq;},setScrollX:function(L){var J=this.getScrollMaxX();if(L<0){L=0;}else if(L>J){L=J;};if(L!==this.__xr){var K=this.__xr;this.__xr=L;this._deferredUpdateScrollPosition();this.fireDataEvent(f,L,K);};},getScrollX:function(){return this.__xr;},getScrollSize:function(){return {width:this.__xp.getTotalSize(),height:this.__xo.getTotalSize()};},scrollRowIntoView:function(O){var P=this.getBounds();if(!P){this.addListenerOnce(n,function(){qx.event.Timer.once(function(){this.scrollRowIntoView(O);},this,0);},this);return;};var Q=this.__xo.getItemPosition(O);var N=Q+this.__xo.getItemSize(O);var M=this.getScrollY();if(Q<M){this.setScrollY(Q);}else if(N>M+P.height){this.setScrollY(N-P.height);};},scrollColumnIntoView:function(R){var U=this.getBounds();if(!U){this.addListenerOnce(n,function(){qx.event.Timer.once(function(){this.scrollColumnIntoView(R);},this,0);},this);return;};var T=this.__xp.getItemPosition(R);var S=T+this.__xp.getItemSize(R);var V=this.getScrollX();if(T<V){this.setScrollX(T);}else if(S>V+U.width){this.setScrollX(S-U.width);};},scrollCellIntoView:function(W,Y){var X=this.getBounds();if(!X){this.addListenerOnce(n,function(){qx.event.Timer.once(function(){this.scrollCellIntoView(W,Y);},this,0);},this);return;};this.scrollColumnIntoView(W);this.scrollRowIntoView(Y);},getCellAtPosition:function(ba,bb){var be,bd;var bc=this.getContentLocation();if(!bc||bb<bc.top||bb>=bc.bottom||ba<bc.left||ba>=bc.right){return null;};be=this.__xo.getItemAtPosition(this.getScrollY()+bb-bc.top);bd=this.__xp.getItemAtPosition(this.getScrollX()+ba-bc.left);if(!be||!bd){return null;};return {row:be.index,column:bd.index};},prefetchX:function(bi,bl,bj,bh){var bf=this.getVisibleLayers();if(bf.length==0){return;};var bk=this.getBounds();if(!bk){return;};var bm=this.__xr+bk.width;var bn=this.__xt-bm;if(this.__xr-this.__xu.left<Math.min(this.__xr,bi)||this.__xu.right-bm<Math.min(bn,bj)){var bo=Math.min(this.__xr,bl);var bg=Math.min(bn,bh);this._setLayerWindow(bf,this.__xr-bo,this.__xq,bk.width+bo+bg,bk.height,false);};},prefetchY:function(by,bu,bq,bt){var bp=this.getVisibleLayers();if(bp.length==0){return;};var bv=this.getBounds();if(!bv){return;};var br=this.__xq+bv.height;var bs=this.__xs-br;if(this.__xq-this.__xu.top<Math.min(this.__xq,by)||this.__xu.bottom-br<Math.min(bs,bq)){var bx=Math.min(this.__xq,bu);var bw=Math.min(bs,bt);this._setLayerWindow(bp,this.__xr,this.__xq-bx,bv.width,bv.height+bx+bw,false);};},_onResize:function(){if(this.getContentElement().getDomElement()){this.__xx=true;this._updateScrollPosition();this.__xx=null;this.fireEvent(d);};},_onAppear:function(){this.fullUpdate();},_onPointerDown:function(e){this.__xz=this.getCellAtPosition(e.getDocumentLeft(),e.getDocumentTop());},_onTap:function(e){this.__xA(e,u);},_onContextmenu:function(e){this.__xA(e,v);},_onDbltap:function(e){this.__xA(e,o);},__xA:function(e,bB){var bA=this.getCellAtPosition(e.getDocumentLeft(),e.getDocumentTop());if(!bA){return;};var bz=this.__xz;if(bz==null||bz.row!==bA.row||bz.column!==bA.column){return;};this.fireNonBubblingEvent(bB,qx.ui.virtual.core.CellEvent,[this,e,bA.row,bA.column]);},syncWidget:function(bC){if(this.__jj._fullUpdate){this._fullUpdate();}else if(this.__jj._updateScrollPosition){this._updateScrollPosition();};this.__jj={};},_setLayerWindow:function(bD,bS,top,bO,bK,bU){var bJ=this.__xo.getItemAtPosition(top);if(bJ){var bM=bJ.index;var bQ=this.__xo.getItemSizes(bM,bK+bJ.offset);var bL=qx.lang.Array.sum(bQ);var bT=top-bJ.offset;var bP=top-bJ.offset+bL;}else {var bM=0;var bQ=[];var bL=0;var bT=0;var bP=0;};var bE=this.__xp.getItemAtPosition(bS);if(bE){var bI=bE.index;var bG=this.__xp.getItemSizes(bI,bO+bE.offset);var bN=qx.lang.Array.sum(bG);var bR=bS-bE.offset;var bH=bS-bE.offset+bN;}else {var bI=0;var bG=[];var bN=0;var bR=0;var bH=0;};this.__xu={top:bT,bottom:bP,left:bR,right:bH};this.__xv.setUserBounds((this.getPaddingLeft()||0)+(this.__xu.left-this.__xr),(this.getPaddingTop()||0)+(this.__xu.top-this.__xq),bN,bL);this.__oN=bG;this.__xy=bQ;for(var i=0;i<this.__xw.length;i++ ){var bF=this.__xw[i];bF.setUserBounds(0,0,bN,bL);if(bU){bF.fullUpdate(bM,bI,bQ,bG);}else {bF.updateLayerWindow(bM,bI,bQ,bG);};};},__xB:function(){if(this.__xx){return;};var bV=this.getScrollSize();if(this.__xs!==bV.height||this.__xt!==bV.width){this.__xs=bV.height;this.__xt=bV.width;this.fireEvent(d);};},fullUpdate:function(){this.__jj._fullUpdate=1;qx.ui.core.queue.Widget.add(this);},isUpdatePending:function(){return !!this.__jj._fullUpdate;},_fullUpdate:function(){var bW=this.getVisibleLayers();if(bW.length==0){this.__xB();return;};var bX=this.getBounds();if(!bX){return;};this._setLayerWindow(bW,this.__xr,this.__xq,bX.width,bX.height,true);this.__xB();},_deferredUpdateScrollPosition:function(){this.__jj._updateScrollPosition=1;qx.ui.core.queue.Widget.add(this);},_updateScrollPosition:function(){var bY=this.getVisibleLayers();if(bY.length==0){this.__xB();return;};var cb=this.getBounds();if(!cb){return;};var ca={top:this.__xq,bottom:this.__xq+cb.height,left:this.__xr,right:this.__xr+cb.width};if(this.__xu.top<=ca.top&&this.__xu.bottom>=ca.bottom&&this.__xu.left<=ca.left&&this.__xu.right>=ca.right){this.__xv.setUserBounds((this.getPaddingLeft()||0)+(this.__xu.left-ca.left),(this.getPaddingTop()||0)+(this.__xu.top-ca.top),this.__xu.right-this.__xu.left,this.__xu.bottom-this.__xu.top);}else {this._setLayerWindow(bY,this.__xr,this.__xq,cb.width,cb.height,false);};this.__xB();}},destruct:function(){this._disposeArray(q);this._disposeObjects(l,m,k);this.__xu=this.__jj=this.__oN=this.__xy=null;}});})();(function(){var c="change",d="qx.event.type.Event",e="qx.ui.virtual.core.Axis";qx.Class.define(e,{extend:qx.core.Object,construct:function(f,g){qx.core.Object.call(this);this.itemCount=g;this.defaultItemSize=f;this.customSizes={};},events:{"change":d},members:{__xC:null,getDefaultItemSize:function(){return this.defaultItemSize;},setDefaultItemSize:function(h){if(this.defaultItemSize!==h){this.defaultItemSize=h;this.__xC=null;this.fireNonBubblingEvent(c);};},getItemCount:function(){return this.itemCount;},setItemCount:function(j){if(this.itemCount!==j){this.itemCount=j;this.__xC=null;this.fireNonBubblingEvent(c);};},setItemSize:function(k,l){{};if(this.customSizes[k]==l){return;};if(l===null){delete this.customSizes[k];}else {this.customSizes[k]=l;};this.__xC=null;this.fireNonBubblingEvent(c);},getItemSize:function(m){return this.customSizes[m]||this.defaultItemSize;},resetItemSizes:function(){this.customSizes={};this.__xC=null;this.fireNonBubblingEvent(c);},__xD:function(){if(this.__xC){return this.__xC;};var q=this.defaultItemSize;var o=this.itemCount;var w=[];for(var t in this.customSizes){var n=parseInt(t,10);if(n<o){w.push(n);};};if(w.length==0){var s=[{startIndex:0,endIndex:o-1,firstItemSize:q,rangeStart:0,rangeEnd:o*q-1}];this.__xC=s;return s;};w.sort(function(a,b){return a>b?1:-1;});var s=[];var p=0;for(var i=0;i<w.length;i++ ){var n=w[i];if(n>=o){break;};var v=this.customSizes[n];var r=n*q+p;p+=v-q;s[i]={startIndex:n,firstItemSize:v,rangeStart:r};if(i>0){s[i-1].rangeEnd=r-1;s[i-1].endIndex=n-1;};};if(s[0].rangeStart>0){s.unshift({startIndex:0,endIndex:s[0].startIndex-1,firstItemSize:q,rangeStart:0,rangeEnd:s[0].rangeStart-1});};var x=s[s.length-1];var u=(o-x.startIndex-1)*q;x.rangeEnd=x.rangeStart+x.firstItemSize+u-1;x.endIndex=o-1;this.__xC=s;return s;},__xE:function(D){var z=this.__xC||this.__xD();var A=0;var y=z.length-1;while(true){var C=A+((y-A)>>1);var B=z[C];if(B.rangeEnd<D){A=C+1;}else if(B.rangeStart>D){y=C-1;}else {return B;};};},getItemAtPosition:function(I){if(I<0||I>=this.getTotalSize()){return null;};var H=this.__xE(I);var J=H.rangeStart;var E=H.startIndex;var G=H.firstItemSize;if(J+G>I){return {index:E,offset:I-J};}else {var F=this.defaultItemSize;return {index:E+1+Math.floor((I-J-G)/F),offset:(I-J-G)%F};};},__xF:function(K){var M=this.__xC||this.__xD();var N=0;var L=M.length-1;while(true){var P=N+((L-N)>>1);var O=M[P];if(O.endIndex<K){N=P+1;}else if(O.startIndex>K){L=P-1;}else {return O;};};},getItemPosition:function(Q){if(Q<0||Q>=this.itemCount){return null;};var R=this.__xF(Q);if(R.startIndex==Q){return R.rangeStart;}else {return R.rangeStart+R.firstItemSize+(Q-R.startIndex-1)*this.defaultItemSize;};},getTotalSize:function(){var S=this.__xC||this.__xD();return S[S.length-1].rangeEnd+1;},getItemSizes:function(Y,T){var X=this.customSizes;var W=this.defaultItemSize;var V=0;var U=[];var i=0;while(V<T){var ba=X[Y]!=null?X[Y]:W;Y++ ;V+=ba;U[i++ ]=ba;if(Y>=this.itemCount){break;};};return U;}},destruct:function(){this.customSizes=this.__xC=null;}});})();(function(){var a="qx.ui.virtual.core.CellEvent",b="Integer";qx.Class.define(a,{extend:qx.event.type.Pointer,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(e,c,f,d){c.clone(this);this.setBubbles(false);this.setRow(f);this.setColumn(d);}}});})();(function(){var a="one",b="Boolean",c="qx.ui.virtual.selection.MModel",d="qx.data.Array",f="multi",g="selected",h="_applySelection",j="change",k="_applyDragSelection",l="single",m="_applyQuickSelection",n="changeSelection",o="_applySelectionMode",p="additive",q="qx.event.type.Data";qx.Mixin.define(c,{construct:function(){this._initSelectionManager();this.__xG=new qx.data.Array();this.initSelection(this.__xG);},properties:{selection:{check:d,event:n,apply:h,nullable:false,deferredInit:true},selectionMode:{check:[l,f,p,a],init:l,apply:o},dragSelection:{check:b,init:false,apply:k},quickSelection:{check:b,init:false,apply:m}},events:{"changeSelection":q},members:{_manager:null,__xH:false,__xI:false,__xG:null,_initSelectionManager:function(){var self=this;var r={isItemSelectable:function(s){return self._provider.isSelectable(s);},styleSelectable:function(t,u,v){if(u!=g){return;};if(v){self._provider.styleSelectabled(t);}else {self._provider.styleUnselectabled(t);};}};this._manager=new qx.ui.virtual.selection.Row(this.getPane(),r);this._manager.attachPointerEvents(this.getPane());this._manager.attachKeyEvents(this);this._manager.addListener(n,this._onManagerChangeSelection,this);},setAutoScrollIntoView:function(w){this._manager._autoScrollIntoView=w;},getAutoScrollIntoView:function(){return this._manager._autoScrollIntoView;},_updateSelection:function(){if(this._manager==null){return;};this._onChangeSelection();},_applySelection:function(y,x){y.addListener(j,this._onChangeSelection,this);if(x!=null){x.removeListener(j,this._onChangeSelection,this);};this._onChangeSelection();},_applySelectionMode:function(A,z){this._manager.setMode(A);},_applyDragSelection:function(C,B){this._manager.setDrag(C);},_applyQuickSelection:function(E,D){this._manager.setQuick(E);},_onChangeSelection:function(e){if(this.__xI==true){return;};this.__xH=true;var G=this.getSelection();var I=[];for(var i=0;i<G.getLength();i++ ){var H=G.getItem(i);var J=this._getSelectables();var F=-1;if(J!=null){F=J.indexOf(H);};var K=this._reverseLookup(F);if(K>=0){I.push(K);};};if(this._beforeApplySelection!=null&&qx.lang.Type.isFunction(this._beforeApplySelection)){this._beforeApplySelection(I);};try{if(!qx.lang.Array.equals(I,this._manager.getSelection())){this._manager.replaceSelection(I);};}catch(L){this._manager.selectItem(I[I.length-1]);};this.__xJ();if(this._afterApplySelection!=null&&qx.lang.Type.isFunction(this._afterApplySelection)){this._afterApplySelection();};this.__xH=false;},_onManagerChangeSelection:function(e){if(this.__xH==true){return;};this.__xI=true;this.__xJ();this.__xI=false;},__xJ:function(){if(this.__xL()){return;};var M=this._manager.getSelection();var N=[];for(var i=0;i<M.length;i++ ){var O=this._getDataFromRow(M[i]);if(O!=null){N.push(O);};};this.__xK(N);},__xK:function(R){var Q=this.getSelection();if(R.length>0){var P=[0,Q.getLength()];P=P.concat(R);var S=Q.splice.apply(Q,P);S.dispose();}else {Q.removeAll();};},__xL:function(){var U=this.getSelection();var W=this._manager.getSelection();if(U.getLength()!==W.length){return false;};for(var i=0;i<U.getLength();i++ ){var V=U.getItem(i);var X=this._getSelectables();var T=-1;if(X!=null){T=X.indexOf(V);};var Y=this._reverseLookup(T);if(Y!==W[i]){return false;};};return true;},_applyDefaultSelection:function(){if(this._manager!=null){this._manager._applyDefaultSelection();};}},destruct:function(){this._manager.dispose();this._manager=null;if(this.__xG){this.__xG.dispose();};}});})();(function(){var a="qx.ui.virtual.selection.Abstract",b="keypress",c="losecapture",d="pointerover",e="pointerdown",f="removeItem",g="tap",h="pointermove",i="addItem";qx.Class.define(a,{extend:qx.ui.core.selection.Abstract,construct:function(k,j){qx.ui.core.selection.Abstract.call(this);{};this._pane=k;this._delegate=j||{};},members:{_autoScrollIntoView:true,_isSelectable:function(l){return this._delegate.isItemSelectable?this._delegate.isItemSelectable(l):true;},_styleSelectable:function(m,n,o){if(this._delegate.styleSelectable){this._delegate.styleSelectable(m,n,o);};},attachPointerEvents:function(){var p=this._pane.getContentElement();p.addListener(e,this.handlePointerDown,this);p.addListener(g,this.handleTap,this);p.addListener(d,this.handlePointerOver,this);p.addListener(h,this.handlePointerMove,this);p.addListener(c,this.handleLoseCapture,this);},detatchPointerEvents:function(){var q=this._pane.getContentElement();q.removeListener(e,this.handlePointerDown,this);q.removeListener(g,this.handleTap,this);q.removeListener(d,this.handlePointerOver,this);q.removeListener(h,this.handlePointerMove,this);q.removeListener(c,this.handleLoseCapture,this);},attachKeyEvents:function(r){r.addListener(b,this.handleKeyPress,this);},detachKeyEvents:function(s){s.removeListener(b,this.handleKeyPress,this);},attachListEvents:function(t){t.addListener(i,this.handleAddItem,this);t.addListener(f,this.handleRemoveItem,this);},detachListEvents:function(u){u.removeListener(i,this.handleAddItem,this);u.removeListener(f,this.handleRemoveItem,this);},_capture:function(){this._pane.capture();},_releaseCapture:function(){this._pane.releaseCapture();},_getScroll:function(){return {left:this._pane.getScrollX(),top:this._pane.getScrollY()};},_scrollBy:function(v,w){this._pane.setScrollX(this._pane.getScrollX()+v);this._pane.setScrollY(this._pane.getScrollY()+w);},_getLocation:function(){var x=this._pane.getContentElement().getDomElement();return x?qx.bom.element.Location.get(x):null;},_getDimension:function(){return this._pane.getInnerSize();}},destruct:function(){this._pane=this._delegate=null;}});})();(function(){var a="qx.ui.virtual.selection.Row",b="above",c="under";qx.Class.define(a,{extend:qx.ui.virtual.selection.Abstract,members:{_getItemCount:function(){return this._pane.getRowConfig().getItemCount();},_getSelectableFromPointerEvent:function(event){var d=this._pane.getCellAtPosition(event.getDocumentLeft(),event.getDocumentTop());if(!d){return null;};return this._isSelectable(d.row)?d.row:null;},getSelectables:function(f){var e=[];for(var i=0,l=this._getItemCount();i<l;i++ ){if(this._isSelectable(i)){e.push(i);};};return e;},_getSelectableRange:function(j,k){var m=[];var g=Math.min(j,k);var h=Math.max(j,k);for(var i=g;i<=h;i++ ){if(this._isSelectable(i)){m.push(i);};};return m;},_getFirstSelectable:function(){var n=this._getItemCount();for(var i=0;i<n;i++ ){if(this._isSelectable(i)){return i;};};return null;},_getLastSelectable:function(){var o=this._getItemCount();for(var i=o-1;i>=0;i-- ){if(this._isSelectable(i)){return i;};};return null;},_getRelatedSelectable:function(q,s){if(s==b){var r=q-1;var p=0;var t=-1;}else if(s==c){var r=q+1;var p=this._getItemCount()-1;var t=1;}else {return null;};for(var i=r;i!==p+t;i+=t){if(this._isSelectable(i)){return i;};};return null;},_getPage:function(v,u){if(u){return this._getFirstSelectable();}else {return this._getLastSelectable();};},_selectableToHashCode:function(w){return w;},_scrollItemIntoView:function(x){if(this._autoScrollIntoView){this._pane.scrollRowIntoView(x);};},_getSelectableLocationX:function(y){return {left:0,right:this._pane.getColumnConfig().getTotalSize()-1};},_getSelectableLocationY:function(z){var C=this._pane.getRowConfig();var B=C.getItemPosition(z);var A=B+C.getItemSize(z)-1;return {top:B,bottom:A};}}});})();(function(){var a="qx.ui.virtual.core.ILayer";qx.Interface.define(a,{members:{fullUpdate:function(d,e,c,b){this.assertArgumentsCount(arguments,6,6);this.assertPositiveInteger(d);this.assertPositiveInteger(e);this.assertArray(c);this.assertArray(b);},updateLayerWindow:function(h,i,g,f){this.assertArgumentsCount(arguments,6,6);this.assertPositiveInteger(h);this.assertPositiveInteger(i);this.assertArray(g);this.assertArray(f);},updateLayerData:function(){}}});})();(function(){var a="qx.ui.virtual.layer.Abstract",b="abstract",c="Abstract method '_fullUpdate' called!";qx.Class.define(a,{extend:qx.ui.core.Widget,type:b,implement:[qx.ui.virtual.core.ILayer],construct:function(){qx.ui.core.Widget.call(this);this.__jj={};},properties:{anonymous:{refine:true,init:true}},members:{__jj:null,__bN:null,__xY:null,__ya:null,__xy:null,__oN:null,getFirstRow:function(){return this.__xY;},getFirstColumn:function(){return this.__ya;},getRowSizes:function(){return this.__xy||[];},getColumnSizes:function(){return this.__oN||[];},syncWidget:function(e){if(!this.getContentElement().getDomElement()){return;};if(this.__jj.fullUpdate||this.__jj.updateLayerWindow&&this.__jj.updateLayerData){this._fullUpdate.apply(this,this.__bN);}else if(this.__jj.updateLayerWindow){this._updateLayerWindow.apply(this,this.__bN);}else if(this.__jj.updateLayerData&&this.__xy){this._updateLayerData();};if(this.__jj.fullUpdate||this.__jj.updateLayerWindow){var d=this.__bN;this.__xY=d[0];this.__ya=d[1];this.__xy=d[2];this.__oN=d[3];};this.__jj={};},_updateLayerData:function(){this._fullUpdate(this.__xY,this.__ya,this.__xy,this.__oN);},_fullUpdate:function(g,i,h,f){throw new Error(c);},_updateLayerWindow:function(k,m,l,j){this._fullUpdate(k,m,l,j);},updateLayerData:function(){this.__jj.updateLayerData=true;qx.ui.core.queue.Widget.add(this);},fullUpdate:function(p,q,o,n){this.__bN=arguments;this.__jj.fullUpdate=true;qx.ui.core.queue.Widget.add(this);},updateLayerWindow:function(t,u,s,r){this.__bN=arguments;this.__jj.updateLayerWindow=true;qx.ui.core.queue.Widget.add(this);}},destruct:function(){this.__jj=this.__bN=this.__xy=this.__oN=null;}});})();(function(){var a="qx.ui.virtual.core.IWidgetCellProvider";qx.Interface.define(a,{members:{getCellWidget:function(c,b){},poolCellWidget:function(d){}}});})();(function(){var a="cell.column",b="updated",c="qx.event.type.Event",d="qx.ui.virtual.layer.WidgetCell",e="cell.row",f="cell.empty";qx.Class.define(d,{extend:qx.ui.virtual.layer.Abstract,include:[qx.ui.core.MChildrenHandling],construct:function(g){qx.ui.virtual.layer.Abstract.call(this);this.setZIndex(12);{};this._cellProvider=g;this.__yl=[];},properties:{anonymous:{refine:true,init:false}},events:{updated:c},members:{__yl:null,getRenderedCellWidget:function(p,m){if(this._getChildren().length===0){return null;};var h=this.getColumnSizes().length;var o=this.getRowSizes().length;var n=this.getFirstRow();var l=this.getFirstColumn();if(p<n||p>=n+o||m<l||m>=l+h){return null;};var k=(m-l)+(p-n)*h;var j=this._getChildren()[k];if(!j||j.getUserData(f)){return null;}else {return j;};},_getSpacer:function(){var q=this.__yl.pop();if(!q){q=new qx.ui.core.Spacer();q.setUserData(f,1);};return q;},_activateNotEmptyChild:function(r){var s=qx.ui.core.FocusHandler.getInstance().getActiveWidget();if(s==r||qx.ui.core.Widget.contains(r,s)){var t=this._getChildren();for(var i=t.length-1;i>=0;i-- ){if(!t[i].getUserData(f)){t[i].activate();break;};};};},_fullUpdate:function(A,u,z,w){var B=this._cellProvider;var G=this._getChildren().concat();for(var i=0;i<G.length;i++ ){var E=G[i];if(E.getUserData(f)){this.__yl.push(E);}else {this._activateNotEmptyChild(E);B.poolCellWidget(E);};};var top=0;var F=0;var D=[];for(var y=0;y<z.length;y++ ){for(var x=0;x<w.length;x++ ){var H=A+y;var v=u+x;var C=B.getCellWidget(H,v)||this._getSpacer();D.push(C);C.setUserBounds(F,top,w[x],z[y]);C.setUserData(e,H);C.setUserData(a,v);this._add(C);F+=w[x];};top+=z[y];F=0;};G.forEach(function(I){if(D.indexOf(I)===-1){this._remove(I);};}.bind(this));this.fireEvent(b);},_updateLayerWindow:function(W,J,M,bb){{};var N=W+M.length-1;var X=J+bb.length-1;var L={firstRow:Math.max(W,this.getFirstRow()),lastRow:Math.min(N,this._lastRow),firstColumn:Math.max(J,this.getFirstColumn()),lastColumn:Math.min(X,this._lastColumn)};this._lastColumn=X;this._lastRow=N;if(L.firstRow>L.lastRow||L.firstColumn>L.lastColumn){return this._fullUpdate(W,J,M,bb);};var O=this._getChildren();var Q=this.getColumnSizes().length;var T=[];var ba={};for(var P=W;P<=N;P++ ){T[P]=[];for(var Y=J;Y<=X;Y++ ){if(P>=L.firstRow&&P<=L.lastRow&&Y>=L.firstColumn&&Y<=L.lastColumn){var x=Y-this.getFirstColumn();var y=P-this.getFirstRow();var R=y*Q+x;T[P][Y]=O[R];ba[R]=true;};};};var K=this._cellProvider;var O=this._getChildren().concat();for(var i=0;i<O.length;i++ ){if(!ba[i]){var V=O[i];if(V.getUserData(f)){this.__yl.push(V);}else {this._activateNotEmptyChild(V);K.poolCellWidget(V);};};};var top=0;var bc=0;var U=[];for(var y=0;y<M.length;y++ ){for(var x=0;x<bb.length;x++ ){var P=W+y;var Y=J+x;var S=T[P][Y]||K.getCellWidget(P,Y)||this._getSpacer();U.push(S);S.setUserBounds(bc,top,bb[x],M[y]);S.setUserData(e,P);S.setUserData(a,Y);this._add(S);bc+=bb[x];};top+=M[y];bc=0;};O.forEach(function(bd){if(U.indexOf(bd)===-1){this._remove(bd);};}.bind(this));this.fireEvent(b);}},destruct:function(){var be=this._getChildren();for(var i=0;i<be.length;i++ ){be[i].dispose();};this._cellProvider=this.__yl=null;}});})();(function(){var a="qx.util.Delegate";qx.Class.define(a,{statics:{getMethod:function(b,c){if(qx.util.Delegate.containsMethod(b,c)){return qx.lang.Function.bind(b[c],b);};return null;},containsMethod:function(e,f){var d=qx.lang.Type;if(d.isObject(e)){return d.isFunction(e[f]);};return false;}}});})();(function(){var a="qx.ui.virtual.cell.IWidgetCell";qx.Interface.define(a,{members:{getCellWidget:function(c,b){},pool:function(d){},updateStates:function(f,e){},updateData:function(g,h){}}});})();(function(){var a="created",b="qx.ui.virtual.cell.AbstractWidget",c="cell.states",d="abstract method call",e="qx.event.type.Data";qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.virtual.cell.IWidgetCell],construct:function(){qx.core.Object.call(this);this.__cO=[];},events:{"created":e},members:{__cO:null,_createWidget:function(){throw new Error(d);},updateData:function(f,g){throw new Error(d);},updateStates:function(j,h){var k=j.getUserData(c);if(k){var i=h||{};for(var l in k){if(!i[l]){j.removeState(l);};};}else {k={};};if(h){for(var l in h){if(!k.state){j.addState(l);};};};j.setUserData(c,h);},getCellWidget:function(o,m){var n=this.__ym();this.updateStates(n,m);this.updateData(n,o);return n;},pool:function(p){this.__cO.push(p);},_cleanupPool:function(){var q=this.__cO.pop();while(q){q.destroy();q=this.__cO.pop();};},__ym:function(){var r=this.__cO.shift();if(r==null){r=this._createWidget();this.fireDataEvent(a,r);};return r;}},destruct:function(){this._cleanupPool();this.__cO=null;}});})();(function(){var a="_applyDelegate",b="qx.ui.virtual.cell.WidgetCell",c="Can't update data! The key '",d="' is not a Property!";qx.Class.define(b,{extend:qx.ui.virtual.cell.AbstractWidget,properties:{delegate:{apply:a,init:null,nullable:true}},members:{_applyDelegate:function(f,e){this._cleanupPool();},_createWidget:function(){var g=this.getDelegate();if(g!=null&&g.createWidget!=null){return g.createWidget();}else {return new qx.ui.core.Widget();};},updateData:function(h,i){for(var j in i){if(qx.Class.hasProperty(h.constructor,j)){qx.util.PropertyUtil.setUserValue(h,j,i[j]);}else {throw new Error(c+j+d);};};}}});})();
});