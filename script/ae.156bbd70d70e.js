qx.$$packageData['1024']={"locales":{},"resources":{"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/internet-feed-reader.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/internet-telephony.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/22/apps/utilities-calculator.png":[22,22,"png","qx"],"qx/icon/Tango/32/apps/office-address-book.png":[32,32,"png","qx"],"qx/icon/Tango/32/status/dialog-error.png":[32,32,"png","qx"]},"translations":{"C":{},"en":{}}};
qx.Part.$$notifyLoad("1024", function() {
(function(){var a="Yes",b="Second Window",c="Page 1",d="bottom",f="Use move frame",g="Show Statusbar",h="icon/16/actions/dialog-cancel.png",j="icon/32/status/dialog-error.png",k="Show Close",l="changeValue",m="right",n="Third Window",o="icon/22/apps/utilities-calculator.png",p="Show Maximize",q="Demo loaded",r="Allow Close",s="Use resize frame",t="No",u="resizable",v="icon/16/apps/office-calendar.png",w="Allow Maximize",x="value",y="The second window",z="execute",A="Page 3",B="move",C="Resizable ",D="First Window",E="Resized to: ",F="resize",G="Moveable",H="#ddd",I="Allow Minimize",J="Moved to: ",K="Open Modal Dialog 2",L="Do you want to fly to Berlin?",M="Open Modal Dialog 1",N="Resizable",O="top",P="Movable",Q="icon/32/apps/office-address-book.png",R="Basics",S="Modal",T="icon/16/apps/internet-telephony.png",U="Welcome to your first own Window.<br/>Have fun!",V="Application is ready",W="icon/16/apps/internet-feed-reader.png",X="Second Modal Dialog",Y="icon/16/actions/dialog-ok.png",bl="widgetbrowser.pages.Window",bm="Page 2",bn="left",bh="Sorry, please tap 'Yes'!",bi="x",bj="Show Minimize",bk="First Modal Dialog";qx.Class.define(bl,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);var bo=new qx.ui.decoration.Decorator().set({width:10,color:H});this.__nq=new qx.ui.window.Desktop().set({decorator:bo});this.add(this.__nq,{edge:0,top:0});this.initWidgets();},members:{__nq:null,initWidgets:function(){var bs,br,bq;var bp=this._widgets;bs=this.__yU();bp.push(bs);bs.open();this.__nq.add(bs,{left:0,top:0});br=this.__yV();bp.push(br);br.open();this.__nq.add(br,{left:300,top:100});bq=this.__yW();bp.push(bq);bq.open();this.__nq.add(bq,{left:80,top:230});},__yU:function(){var bv=new qx.ui.window.Window(D,v);bv.setLayout(new qx.ui.layout.VBox(10));bv.setShowStatusbar(true);bv.setStatus(q);bv.addListener(B,function(e){this.debug(J+e.getData().left+bi+e.getData().top);},this);bv.addListener(F,function(e){this.debug(E+e.getData().width+bi+e.getData().height);},this);var bu=new qx.ui.basic.Atom(U,Q);bu.setRich(true);bv.add(bu);var bt=new qx.ui.tabview.TabView;bv.add(bt,{flex:1});var by=new qx.ui.tabview.Page(c);bt.add(by);var bw=new qx.ui.tabview.Page(bm);bt.add(bw);var bx=new qx.ui.tabview.Page(A);bt.add(bx);return bv;},__yV:function(){var bF=new qx.ui.window.Window(b,W);bF.setLayout(new qx.ui.layout.VBox(10));bF.setStatus(V);var bM=new qx.ui.basic.Atom(y,o);bF.add(bM);var bz=new qx.ui.container.Composite;bz.setLayout(new qx.ui.layout.HBox(10));bF.add(bz,{flex:1});var bH=new qx.ui.groupbox.GroupBox(R);bH.setLayout(new qx.ui.layout.VBox(4));bz.add(bH,{flex:1});var bC=new qx.ui.form.CheckBox(k);bC.setValue(true);bC.addListener(l,function(e){bF.setShowClose(e.getData());});bH.add(bC);var bO=new qx.ui.form.CheckBox(p);bO.setValue(true);bO.addListener(l,function(e){bF.setShowMaximize(e.getData());});bH.add(bO);var bP=new qx.ui.form.CheckBox(bj);bP.setValue(true);bP.addListener(l,function(e){bF.setShowMinimize(e.getData());});bH.add(bP);var bJ=new qx.ui.form.CheckBox(r);bJ.setValue(true);bJ.addListener(l,function(e){bF.setAllowClose(e.getData());});bH.add(bJ);var bQ=new qx.ui.form.CheckBox(w);bQ.setValue(true);bQ.addListener(l,function(e){bF.setAllowMaximize(e.getData());});bH.add(bQ);var bE=new qx.ui.form.CheckBox(I);bE.setValue(true);bE.addListener(l,function(e){bF.setAllowMinimize(e.getData());});bH.add(bE);var bA=new qx.ui.form.CheckBox(g);bA.setValue(false);bA.addListener(l,function(e){bF.setShowStatusbar(e.getData());});bH.add(bA);var bR=new qx.ui.groupbox.GroupBox(N);bR.setLayout(new qx.ui.layout.VBox(4));bz.add(bR,{flex:1});var bL=new qx.ui.form.CheckBox(s);bL.setValue(true);bL.addListener(l,function(e){bF.setUseResizeFrame(e.getData());});bR.add(bL);var bN=[O,m,d,bn];for(var i=0;i<bN.length;i++ ){var bK=bN[i];var bD=new qx.ui.form.CheckBox(C+bK).set({value:true});bD.bind(x,bF,u+qx.lang.String.firstUp(bK));bR.add(bD);};var bG=new qx.ui.groupbox.GroupBox(G);bG.setLayout(new qx.ui.layout.VBox(4));bz.add(bG,{flex:1});var bI=new qx.ui.form.CheckBox(P);bI.setValue(true);bI.addListener(l,function(e){bF.setMovable(e.getData());});bG.add(bI);var bB=new qx.ui.form.CheckBox(f);bB.addListener(l,function(e){bF.setUseMoveFrame(e.getData());});bG.add(bB);return bF;},__yW:function(){var bS=new qx.ui.window.Window(n,T);bS.setLayout(new qx.ui.layout.VBox);bS.setMinWidth(200);bS.setMaxWidth(450);bS.setMaxHeight(400);bS.setAllowMaximize(false);var bT=this.__yX();this._widgets.push(bT);var bU=new qx.ui.form.Button(M,v);bU.addListener(z,bT.open,bT);bS.add(bU);return bS;},__yX:function(){var bW=new qx.ui.window.Window(bk);bW.setLayout(new qx.ui.layout.VBox(10));bW.setModal(true);bW.moveTo(150,150);this.__nq.add(bW);var bV=this.__yY();this._widgets.push(bV);var bY=new qx.ui.form.Button(K,v);bY.addListener(z,bV.open,bV);bW.add(bY);var bX=new qx.ui.form.CheckBox(S);bX.setValue(true);bW.add(bX);bX.addListener(l,function(e){bW.setModal(e.getData());});return bW;},__yY:function(){var cb=new qx.ui.window.Window(X);cb.setLayout(new qx.ui.layout.VBox(10));cb.setModal(true);cb.setShowClose(false);cb.moveTo(300,300);this.__nq.add(cb);var cc=new qx.ui.basic.Atom(L,j);cb.add(cc);var ca=new qx.ui.container.Composite;ca.setLayout(new qx.ui.layout.HBox(10,m));cb.add(ca);var ce=new qx.ui.form.Button(a,Y);ce.addListener(z,function(e){cb.close();});ca.add(ce);var cd=new qx.ui.form.Button(t,h);cd.addListener(z,function(e){alert(bh);});ca.add(cd);return cb;}}});})();(function(){var a="qx.ui.window.Desktop";qx.Class.define(a,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.window.MDesktop,qx.ui.core.MBlocker],implement:qx.ui.window.IDesktop,construct:function(b){qx.ui.core.Widget.call(this);b=b||new qx.ui.window.Window.DEFAULT_MANAGER_CLASS();this.getContentElement().disableScrolling();this._setLayout(new qx.ui.layout.Canvas().set({desktop:true}));this.setWindowManager(b);}});})();
});