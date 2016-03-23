(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.application":"ae.Application","qx.revision":"","qx.theme":"ae.theme.Material","qx.version":"5.0.1","widgetbrowser.themes":"qx.theme.Indigo qx.theme.Modern qx.theme.Simple qx.theme.Classic ae.theme.Material"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"ae":{"resourceUri":"../source/resource","sourceUri":"../source/class"},"qx":{"resourceUri":"../../qooxdoo/webcontent/framework/source/resource","sourceUri":"../../qooxdoo/webcontent/framework/source/class","sourceViewUri":"https://github.com/qooxdoo/qooxdoo/blob/%{qxGitBranch}/framework/source/class/%{classFilePath}#L%{lineNumber}"},"qxc.application.formdemo":{"resourceUri":"../../qooxdoo/webcontent/component/library/formdemo/source/resource","sourceUri":"../../qooxdoo/webcontent/component/library/formdemo/source/class"},"qxc.ui.versionlabel":{"resourceUri":"../../qooxdoo/webcontent/component/library/versionlabel/source/resource","sourceUri":"../../qooxdoo/webcontent/component/library/versionlabel/source/class"},"widgetbrowser":{"resourceUri":"../../qooxdoo/webcontent/application/widgetbrowser/source/resource","sourceUri":"../../qooxdoo/webcontent/application/widgetbrowser/source/class"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":null,"en":null};
qx.$$locales = {"C":null,"en":null};
qx.$$packageData = {};
qx.$$g = {}

qx.$$loader = {
  parts : {"basic":[131071,130853,8192],"boot":[131071],"classic":[131071,8],"control":[131071,130853,19713,82181,16645,17665,16641,1029,65541,5,1],"embed":[131071,130853,32768],"embedframe":[131071,130853,512],"form":[131071,130853,82181,16645,82180,1029,292,65541,5,1028,36,65540,4],"indigo":[131071,82,18,2],"list":[131071,130853,292,36,288,32],"misc":[131071,130853,19713,2048],"modern":[131071,82,64],"simple":[131071,82,18,16],"tab":[131071,130853,4096],"table":[131071,130853,19713,82181,16645,82180,17665,16641,82176,16640,16384],"toolbar":[131071,130853,82181,82180,82176,65541,65540,65536],"tree":[131071,130853,19713,82181,16645,82180,17665,16641,82176,292,288,16640,256],"window":[131071,130853,19713,17665,1029,1028,1024]},
  packages : {"1":{"uris":["__out__:ae.45a12165f86b.js","widgetbrowser:widgetbrowser/pages/Control.js","qx:qx/ui/control/ColorSelector.js","qx:qx/ui/control/ColorPopup.js","qx:qx/ui/layout/Basic.js"]},"2":{"uris":["__out__:ae.f2dd2a9db4f0.js","qx:qx/theme/indigo/Font.js","qx:qx/theme/indigo/Appearance.js","qx:qx/theme/indigo/Decoration.js","qx:qx/theme/indigo/Color.js","qx:qx/theme/Indigo.js"]},"4":{"uris":["__out__:ae.c36ed62baa19.js","widgetbrowser:widgetbrowser/pages/Form.js","qxc.application.formdemo:qxc/application/formdemo/FormItems.js","qx:qx/ui/form/Form.js","qx:qx/ui/form/validation/Manager.js","qx:qx/ui/form/validation/AsyncValidator.js","qx:qx/ui/form/Resetter.js","qx:qx/ui/form/PasswordField.js","qx:qx/ui/form/TextArea.js","qx:qx/ui/form/ComboBox.js","qx:qx/ui/form/core/AbstractVirtualBox.js","qx:qx/ui/form/core/VirtualDropDownList.js","qx:qx/ui/form/VirtualComboBox.js","qx:qx/ui/form/DateField.js","qx:qx/ui/form/renderer/IFormRenderer.js","qx:qx/ui/form/renderer/AbstractRenderer.js","qx:qx/ui/form/renderer/Single.js","qx:qx/ui/form/VirtualSelectBox.js"]},"5":{"uris":["__out__:ae.7fc8de27d31d.js","qx:qx/ui/form/IColorForm.js","qx:qx/ui/form/Spinner.js","qx:qx/ui/form/IDateForm.js","qx:qx/ui/control/DateChooser.js"]},"8":{"uris":["__out__:ae.519b1d77bf67.js","qx:qx/theme/classic/Decoration.js","qx:qx/theme/classic/Appearance.js","qx:qx/theme/classic/Font.js","qx:qx/theme/icon/Oxygen.js","qx:qx/theme/classic/Color.js","qx:qx/theme/Classic.js"]},"16":{"uris":["__out__:ae.3a5fe75e6e3b.js","qx:qx/theme/simple/Font.js","qx:qx/theme/simple/Color.js","qx:qx/theme/Simple.js"]},"18":{"uris":["__out__:ae.9856c80df2fe.js","qx:qx/theme/simple/Appearance.js","qx:qx/theme/simple/Image.js","qx:qx/theme/simple/Decoration.js"]},"32":{"uris":["__out__:ae.b4143f0f7f1e.js","widgetbrowser:widgetbrowser/pages/List.js"]},"36":{"uris":["__out__:ae.11e6c93bf7c8.js","qx:qx/ui/list/List.js","qx:qx/ui/virtual/layer/AbstractBackground.js","qx:qx/ui/virtual/layer/Row.js","qx:qx/ui/list/provider/IListProvider.js","qx:qx/ui/list/core/MWidgetController.js","qx:qx/ui/list/provider/WidgetProvider.js"]},"64":{"uris":["__out__:ae.2cec3d265caa.js","qx:qx/theme/modern/Appearance.js","qx:qx/theme/modern/Decoration.js","qx:qx/theme/modern/Color.js","qx:qx/theme/modern/Font.js","qx:qx/theme/Modern.js"]},"82":{"uris":["__out__:ae.ea76bcfd2c7c.js","qx:qx/theme/icon/Tango.js"]},"256":{"uris":["__out__:ae.ba3538e37fd2.js","widgetbrowser:widgetbrowser/pages/Tree.js","qx:qx/ui/tree/selection/SelectionManager.js","qx:qx/ui/tree/core/AbstractItem.js","qx:qx/ui/tree/core/FolderOpenButton.js","qx:qx/ui/tree/core/AbstractTreeItem.js","qx:qx/ui/tree/Tree.js","qx:qx/ui/tree/TreeFolder.js","qx:qx/ui/tree/TreeFile.js","qx:qx/ui/tree/core/IVirtualTree.js","qx:qx/ui/tree/VirtualTree.js","qx:qx/ui/tree/provider/IVirtualTreeProvider.js","qx:qx/ui/tree/core/MWidgetController.js","qx:qx/ui/tree/provider/WidgetProvider.js","qx:qx/ui/tree/VirtualTreeItem.js","qx:qx/ui/tree/core/Util.js","qx:qx/ui/treevirtual/TreeVirtual.js","qx:qx/ui/treevirtual/MTreePrimitive.js","qx:qx/ui/treevirtual/SimpleTreeDataModel.js","qx:qx/ui/treevirtual/SimpleTreeDataCellRenderer.js","qx:qx/ui/treevirtual/DefaultDataCellRenderer.js","qx:qx/ui/treevirtual/SimpleTreeDataRowRenderer.js","qx:qx/ui/treevirtual/SelectionManager.js","qx:qx/ui/table/columnmodel/Resize.js","qx:qx/ui/core/ColumnData.js","qx:qx/ui/table/columnmodel/resizebehavior/Abstract.js","qx:qx/ui/table/columnmodel/resizebehavior/Default.js"]},"288":{"uris":["__out__:ae.f5733d307898.js","qx:qx/io/request/AbstractRequest.js","qx:qx/util/Request.js","qx:qx/util/Serializer.js","qx:qx/io/request/Xhr.js","qx:qx/bom/request/Xhr.js","qx:qx/util/ResponseParser.js","qx:qx/data/store/Json.js","qx:qx/data/marshal/IMarshaler.js","qx:qx/data/marshal/Json.js"]},"292":{"uris":["__out__:ae.1ef17a5c9ba6.js","qx:qx/data/controller/ISelection.js","qx:qx/ui/virtual/core/Scroller.js","qx:qx/ui/virtual/core/Pane.js","qx:qx/ui/virtual/core/Axis.js","qx:qx/ui/virtual/core/ILayer.js","qx:qx/ui/virtual/core/CellEvent.js","qx:qx/ui/virtual/selection/MModel.js","qx:qx/ui/virtual/selection/Abstract.js","qx:qx/ui/virtual/selection/Row.js","qx:qx/ui/virtual/layer/Abstract.js","qx:qx/ui/virtual/core/IWidgetCellProvider.js","qx:qx/ui/virtual/layer/WidgetCell.js","qx:qx/util/Delegate.js","qx:qx/ui/virtual/cell/IWidgetCell.js","qx:qx/ui/virtual/cell/AbstractWidget.js","qx:qx/ui/virtual/cell/WidgetCell.js"]},"512":{"uris":["__out__:ae.85e0b69abe26.js","widgetbrowser:widgetbrowser/pages/EmbedFrame.js","qx:qx/ui/splitpane/Pane.js","qx:qx/ui/splitpane/Slider.js","qx:qx/ui/splitpane/Splitter.js","qx:qx/ui/splitpane/Blocker.js","qx:qx/ui/splitpane/VLayout.js","qx:qx/ui/splitpane/HLayout.js","qx:qx/ui/embed/AbstractIframe.js","qx:qx/ui/embed/Iframe.js","qx:qx/html/Iframe.js","qx:qx/event/handler/Iframe.js","qx:qx/bom/Iframe.js","qx:qx/ui/embed/ThemedIframe.js"]},"1024":{"uris":["__out__:ae.62f110e6f01b.js","widgetbrowser:widgetbrowser/pages/Window.js","qx:qx/ui/window/Desktop.js"]},"1028":{"uris":["__out__:ae.aa217c7510bb.js","qx:qx/ui/form/CheckBox.js"]},"1029":{"uris":["__out__:ae.1ca6b822f47b.js","qx:qx/ui/groupbox/GroupBox.js"]},"2048":{"uris":["__out__:ae.e0f06a963008.js","widgetbrowser:widgetbrowser/pages/Misc.js","qx:qx/ui/indicator/ProgressBar.js","qx:qx/ui/container/Resizer.js"]},"4096":{"uris":["__out__:ae.223818cae8f3.js","widgetbrowser:widgetbrowser/pages/Tab.js"]},"8192":{"uris":["__out__:ae.a8adb5653f1b.js","widgetbrowser:widgetbrowser/pages/Basic.js"]},"16384":{"uris":["__out__:ae.05022bd9d921.js","widgetbrowser:widgetbrowser/pages/Table.js","qx:qx/ui/table/cellrenderer/AbstractImage.js","qx:qx/ui/table/cellrenderer/Boolean.js","qx:qx/ui/table/headerrenderer/Icon.js"]},"16640":{"uris":["__out__:ae.8f7f255cf31c.js","qx:qx/ui/table/selection/Model.js","qx:qx/ui/table/Table.js","qx:qx/ui/table/IRowRenderer.js","qx:qx/ui/table/rowrenderer/Default.js","qx:qx/ui/table/IColumnMenuButton.js","qx:qx/ui/table/columnmenu/Button.js","qx:qx/ui/table/IColumnMenuItem.js","qx:qx/ui/table/columnmenu/MenuItem.js","qx:qx/ui/table/selection/Manager.js","qx:qx/ui/table/ICellRenderer.js","qx:qx/ui/table/cellrenderer/Abstract.js","qx:qx/ui/table/cellrenderer/Default.js","qx:qx/util/format/NumberFormat.js","qx:qx/ui/table/ICellEditorFactory.js","qx:qx/ui/table/celleditor/AbstractField.js","qx:qx/ui/table/celleditor/TextField.js","qx:qx/ui/table/IHeaderRenderer.js","qx:qx/ui/table/headerrenderer/Default.js","qx:qx/ui/table/headerrenderer/HeaderCell.js","qx:qx/ui/table/columnmodel/Basic.js","qx:qx/ui/table/pane/Pane.js","qx:qx/ui/table/pane/Header.js","qx:qx/ui/table/pane/Scroller.js","qx:qx/ui/table/pane/FocusIndicator.js","qx:qx/ui/table/pane/Clipper.js","qx:qx/ui/table/pane/CellEvent.js","qx:qx/ui/table/pane/Model.js","qx:qx/ui/table/ITableModel.js","qx:qx/ui/table/model/Abstract.js","qx:qx/ui/table/model/Simple.js"]},"16641":{"uris":["__out__:ae.ae9d22b19f37.js","qx:qx/lang/Number.js"]},"16645":{"uris":["__out__:ae.6d9210d93169.js","qx:qx/ui/form/AbstractField.js","qx:qx/html/Input.js","qx:qx/bom/Input.js","qx:qx/ui/form/TextField.js","qx:qx/locale/Number.js","qx:qx/locale/Date.js","qx:qx/util/format/IFormat.js","qx:qx/util/format/DateFormat.js"]},"17665":{"uris":["__out__:ae.cd31b0b7c172.js","qx:qx/ui/window/IWindowManager.js","qx:qx/ui/window/IDesktop.js","qx:qx/ui/window/Manager.js","qx:qx/ui/core/MMovable.js","qx:qx/ui/window/Window.js"]},"19713":{"uris":["__out__:ae.bd6c23cb4071.js","qx:qx/ui/core/MResizable.js"]},"32768":{"uris":["__out__:ae.8855f49947b0.js","widgetbrowser:widgetbrowser/pages/Embed.js","qx:qx/ui/embed/Flash.js","qx:qx/html/Flash.js","qx:qx/bom/Flash.js","qx:qx/util/TimerManager.js","qx:qx/ui/embed/Canvas.js","qx:qx/html/Canvas.js","qx:qx/ui/core/MNativeOverflow.js","qx:qx/ui/embed/Html.js"]},"65536":{"uris":["__out__:ae.226a5ec1f619.js","widgetbrowser:widgetbrowser/pages/ToolBar.js","qx:qx/ui/toolbar/SplitButton.js","qx:qx/ui/toolbar/MenuButton.js","qx:qx/ui/toolbar/CheckBox.js","qx:qx/ui/toolbar/RadioButton.js","qx:qx/ui/menubar/MenuBar.js"]},"65540":{"uris":["__out__:ae.b3f8e0163995.js","qx:qx/ui/form/SplitButton.js","qx:qx/ui/menu/RadioButton.js"]},"65541":{"uris":["__out__:ae.21ab5c60875f.js","qx:qx/ui/toolbar/Button.js"]},"82176":{"uris":["__out__:ae.14611e5c75ac.js","qx:qx/ui/menu/CheckBox.js"]},"82180":{"uris":["__out__:ae.61adc0511035.js","qx:qx/ui/form/MenuButton.js","qx:qx/ui/menu/Manager.js","qx:qx/ui/menu/Menu.js","qx:qx/ui/menu/Layout.js","qx:qx/ui/menu/Separator.js","qx:qx/ui/menu/AbstractButton.js","qx:qx/ui/menu/ButtonLayout.js","qx:qx/ui/menu/MenuSlideBar.js","qx:qx/ui/form/HoverButton.js","qx:qx/ui/menubar/Button.js","qx:qx/ui/toolbar/ToolBar.js","qx:qx/ui/toolbar/Separator.js","qx:qx/ui/toolbar/Part.js","qx:qx/ui/menu/Button.js"]},"82181":{"uris":["__out__:ae.84361b085fa4.js","qx:qx/ui/toolbar/PartContainer.js"]},"130853":{"uris":["__out__:ae.79b4f81bafc6.js","widgetbrowser:widgetbrowser/pages/AbstractPage.js"]},"131071":{"uris":["__out__:ae.c82a9dfc132e.js","qx:qx/Bootstrap.js","qx:qx/util/OOUtil.js","qx:qx/core/Environment.js","qx:qx/bom/client/EcmaScript.js","qx:qx/lang/normalize/String.js","qx:qx/lang/normalize/Date.js","qx:qx/lang/Type.js","qx:qx/core/Assert.js","qx:qx/type/BaseError.js","qx:qx/core/AssertionError.js","qx:qx/dev/StackTrace.js","qx:qx/lang/Array.js","qx:qx/bom/client/Engine.js","qx:qx/lang/Function.js","qx:qx/event/GlobalError.js","qx:qx/core/WindowError.js","qx:qx/core/GlobalError.js","qx:qx/core/ObjectRegistry.js","qx:qx/lang/Json.js","qx:qx/lang/String.js","qx:qx/dom/Node.js","qx:qx/bom/Style.js","qx:qx/bom/client/OperatingSystem.js","qx:qx/bom/client/Browser.js","qx:qx/bom/client/Css.js","qx:qx/Theme.js","qx:qx/lang/normalize/Function.js","qx:qx/lang/normalize/Array.js","qx:qx/Mixin.js","qx:qx/core/Aspect.js","qx:qx/lang/normalize/Object.js","qx:qx/Interface.js","qx:qx/lang/normalize/Error.js","qx:qx/core/Property.js","qx:qx/Class.js","qx:qx/data/MBinding.js","qx:qx/data/SingleValueBinding.js","qx:qx/data/IListData.js","qx:qx/core/ValidationError.js","qx:qx/util/RingBuffer.js","qx:qx/log/appender/RingBuffer.js","qx:qx/log/Logger.js","qx:qx/core/MLogging.js","qx:qx/bom/Event.js","qx:qx/bom/client/CssTransition.js","qx:qx/event/Manager.js","qx:qx/event/IEventHandler.js","qx:qx/event/Registration.js","qx:qx/core/MEvent.js","qx:qx/event/IEventDispatcher.js","qx:qx/core/MProperty.js","qx:qx/core/MAssert.js","qx:qx/core/Object.js","qx:qx/util/DisposeUtil.js","qx:qx/event/type/Event.js","qx:qx/util/ObjectPool.js","qx:qx/event/Pool.js","qx:qx/event/dispatch/Direct.js","qx:qx/event/handler/Object.js","qx:qx/event/type/Data.js","qx:qx/ui/core/MLayoutHandling.js","qx:qx/locale/MTranslation.js","qx:qx/ui/core/LayoutItem.js","qx:qx/theme/manager/Meta.js","qx:qx/util/ValueManager.js","qx:qx/theme/manager/Color.js","qx:qx/util/ColorUtil.js","qx:qx/theme/manager/Decoration.js","qx:qx/ui/style/Stylesheet.js","qx:qx/bom/Stylesheet.js","qx:qx/dom/Element.js","qx:qx/bom/client/Html.js","qx:qx/bom/element/Attribute.js","qx:qx/util/Uri.js","qx:qx/bom/client/Stylesheet.js","qx:qx/lang/Object.js","qx:qx/ui/decoration/MBackgroundColor.js","qx:qx/ui/decoration/IDecorator.js","qx:qx/ui/decoration/Abstract.js","qx:qx/ui/decoration/MBackgroundImage.js","qx:qx/util/AliasManager.js","qx:qx/bom/client/Transport.js","qx:qx/util/LibraryManager.js","qx:qx/util/ResourceManager.js","qx:qx/ui/decoration/MSingleBorder.js","qx:qx/ui/decoration/MDoubleBorder.js","qx:qx/ui/decoration/MBorderRadius.js","qx:qx/ui/decoration/MBorderImage.js","qx:qx/ui/decoration/MLinearBackgroundGradient.js","qx:qx/ui/decoration/MBoxShadow.js","qx:qx/ui/decoration/Decorator.js","qx:qx/theme/manager/Font.js","qx:qx/bom/Font.js","qx:qx/bom/webfonts/WebFont.js","qx:qx/bom/webfonts/Manager.js","qx:qx/event/Timer.js","qx:qx/bom/webfonts/Validator.js","qx:qx/bom/element/Dimension.js","qx:qx/dom/Hierarchy.js","qx:qx/bom/element/Opacity.js","qx:qx/bom/element/Cursor.js","qx:qx/bom/element/BoxSizing.js","qx:qx/bom/element/Clip.js","qx:qx/bom/element/Style.js","qx:qx/bom/Document.js","qx:qx/bom/Viewport.js","qx:qx/theme/manager/Icon.js","qx:qx/theme/manager/Appearance.js","qx:qx/util/PropertyUtil.js","qx:qx/ui/core/queue/Layout.js","qx:qx/type/BaseArray.js","qx:qxWeb.js","qx:qx/bom/Selector.js","qx:qx/module/Css.js","qx:qx/bom/element/Location.js","qx:qx/bom/element/Class.js","qx:qx/bom/client/Device.js","qx:qx/bom/client/Event.js","qx:qx/module/Environment.js","qx:qx/module/Polyfill.js","qx:qx/module/Event.js","qx:qx/module/event/PointerHandler.js","qx:qx/event/Emitter.js","qx:qx/event/handler/PointerCore.js","qx:qx/event/type/dom/Custom.js","qx:qx/event/type/dom/Pointer.js","qx:qx/module/Animation.js","qx:qx/bom/element/Animation.js","qx:qx/bom/client/CssAnimation.js","qx:qx/bom/element/AnimationCss.js","qx:qx/bom/element/AnimationHandle.js","qx:qx/bom/element/AnimationJs.js","qx:qx/bom/client/CssTransform.js","qx:qx/bom/element/Transform.js","qx:qx/bom/AnimationFrame.js","qx:qx/util/DeferredCallManager.js","qx:qx/util/DeferredCall.js","qx:qx/html/Element.js","qx:qx/event/handler/Appear.js","qx:qx/event/dispatch/AbstractBubbling.js","qx:qx/event/dispatch/DomBubbling.js","qx:qx/event/type/Native.js","qx:qx/event/type/Dom.js","qx:qx/event/type/Mouse.js","qx:qx/event/type/Pointer.js","qx:qx/event/handler/Pointer.js","qx:qx/event/type/Tap.js","qx:qx/event/type/Track.js","qx:qx/event/type/Swipe.js","qx:qx/event/type/Rotate.js","qx:qx/event/type/Roll.js","qx:qx/event/type/Pinch.js","qx:qx/event/handler/GestureCore.js","qx:qx/util/Wheel.js","qx:qx/event/handler/Gesture.js","qx:qx/event/handler/Element.js","qx:qx/event/handler/UserAction.js","qx:qx/event/handler/Mouse.js","qx:qx/event/type/MouseWheel.js","qx:qx/event/handler/Keyboard.js","qx:qx/event/type/KeyInput.js","qx:qx/event/type/KeySequence.js","qx:qx/event/util/Keyboard.js","qx:qx/event/handler/Focus.js","qx:qx/core/BaseInit.js","qx:qx/event/handler/Window.js","qx:qx/event/handler/Application.js","qx:qx/core/Init.js","qx:qx/bom/Selection.js","qx:qx/bom/Range.js","qx:qx/util/StringSplit.js","qx:qx/event/type/Focus.js","qx:qx/event/handler/TouchCore.js","qx:qx/event/handler/Orientation.js","qx:qx/event/type/Orientation.js","qx:qx/event/handler/Touch.js","qx:qx/event/type/Touch.js","qx:qx/event/handler/Input.js","qx:qx/event/handler/Offline.js","qx:qx/bom/Element.js","qx:qx/event/dispatch/MouseCapture.js","qx:qx/event/handler/Capture.js","qx:qx/bom/client/Plugin.js","qx:qx/xml/Document.js","qx:qx/bom/client/Xml.js","qx:qx/bom/element/Scroll.js","qx:qx/ui/core/queue/Manager.js","qx:qx/ui/core/queue/Widget.js","qx:qx/ui/core/queue/Visibility.js","qx:qx/ui/core/queue/Appearance.js","qx:qx/ui/core/queue/Dispose.js","qx:qx/ui/core/Widget.js","qx:qx/ui/core/EventHandler.js","qx:qx/event/handler/DragDrop.js","qx:qx/event/type/Drag.js","qx:qx/ui/core/MPlacement.js","qx:qx/event/Idle.js","qx:qx/util/placement/Placement.js","qx:qx/util/placement/AbstractAxis.js","qx:qx/util/placement/DirectAxis.js","qx:qx/util/placement/KeepAlignAxis.js","qx:qx/util/placement/BestFitAxis.js","qx:qx/ui/basic/Image.js","qx:qx/io/ImageLoader.js","qx:qx/html/Image.js","qx:qx/bom/element/Decoration.js","qx:qx/bom/element/Background.js","qx:qx/ui/core/DragDropCursor.js","qx:qx/ui/layout/Abstract.js","qx:qx/type/BaseString.js","qx:qx/locale/LocalizedString.js","qx:qx/locale/Manager.js","qx:qx/bom/client/Locale.js","qx:qx/ui/core/MChildrenHandling.js","qx:qx/ui/container/Composite.js","qx:qx/ui/layout/Canvas.js","qx:qx/ui/layout/Util.js","qx:qx/type/Array.js","qx:qx/ui/form/IStringForm.js","qx:qx/ui/basic/Label.js","qx:qx/html/Label.js","qx:qx/bom/Label.js","qx:qx/ui/layout/VBox.js","qx:qx/ui/layout/Grid.js","qx:qx/ui/layout/HBox.js","qx:qx/ui/basic/Atom.js","qx:qx/ui/layout/Atom.js","qx:qx/ui/form/IForm.js","qx:qx/ui/core/MExecutable.js","qx:qx/ui/form/IExecutable.js","qx:qx/ui/form/Button.js","qx:qx/ui/form/RepeatButton.js","qx:qx/event/AcceleratingTimer.js","qx:qx/html/Blocker.js","qx:qx/ui/core/Blocker.js","qx:qx/ui/core/MRemoteChildrenHandling.js","qx:qx/ui/layout/Grow.js","qx:qx/ui/core/scroll/ScrollPane.js","qx:qx/ui/core/Spacer.js","qx:qx/bom/String.js","qx:qx/util/StringEscape.js","qx:qx/ui/core/ISingleSelection.js","qx:qx/ui/form/MModelSelection.js","qx:qx/data/marshal/MEventBubbling.js","qx:qx/data/Array.js","qx:qx/ui/form/IModelSelection.js","qx:qx/ui/form/MModelProperty.js","qx:qx/ui/form/IModel.js","qx:qx/ui/core/MRemoteLayoutHandling.js","qx:qx/ui/popup/Popup.js","qx:qx/ui/popup/Manager.js","qx:qx/ui/tooltip/ToolTip.js","qx:qx/ui/core/MContentPadding.js","qx:qx/ui/container/SlideBar.js","qx:qx/ui/form/IBooleanForm.js","qx:qx/ui/form/MForm.js","qx:qx/ui/core/FocusHandler.js","qx:qx/ui/form/IRange.js","qx:qx/ui/form/INumberForm.js","qx:qx/ui/core/scroll/MRoll.js","qx:qx/ui/core/scroll/IScrollBar.js","qx:qx/ui/core/scroll/ScrollBar.js","qx:qx/ui/form/Slider.js","qx:qx/ui/core/scroll/ScrollSlider.js","qx:qx/ui/core/MDragDropScrolling.js","qx:qx/ui/core/DragDropScrolling.js","qx:qx/ui/core/scroll/MScrollBarFactory.js","qx:qx/ui/core/scroll/NativeScrollBar.js","qx:qx/ui/core/scroll/AbstractScrollArea.js","qx:qx/bom/client/Scroll.js","qx:qx/ui/core/selection/Abstract.js","qx:qx/ui/core/selection/Widget.js","qx:qx/ui/core/selection/ScrollArea.js","qx:qx/ui/core/MMultiSelectionHandling.js","qx:qx/ui/core/IMultiSelection.js","qx:qx/ui/form/List.js","qx:qx/ui/form/ListItem.js","qx:qx/ui/core/MSingleSelectionHandling.js","qx:qx/ui/core/SingleSelectionManager.js","qx:qx/ui/core/ISingleSelectionProvider.js","qx:qx/ui/form/RadioGroup.js","qx:qx/ui/form/IRadioItem.js","qx:qx/ui/form/ToggleButton.js","qx:qx/ui/form/RadioButton.js","qx:qx/ui/form/AbstractSelectBox.js","qx:qx/ui/form/SelectBox.js","qx:qx/ui/form/RadioButtonGroup.js","qx:qx/ui/tabview/TabView.js","qx:qx/ui/container/Stack.js","qx:qx/ui/tabview/Page.js","qx:qx/ui/tabview/TabButton.js","qx:qx/ui/window/MDesktop.js","qx:qx/ui/core/MBlocker.js","qx:qx/application/IApplication.js","qx:qx/application/AbstractGui.js","qx:qx/ui/tooltip/Manager.js","qx:qx/application/Standalone.js","qx:qx/ui/root/Abstract.js","qx:qx/ui/root/Application.js","qx:qx/html/Root.js","widgetbrowser:widgetbrowser/Application.js","qx:qx/log/appender/Util.js","qx:qx/log/appender/Native.js","qx:qx/log/appender/Console.js","qx:qx/ui/layout/Dock.js","qx:qx/ui/container/Scroll.js","widgetbrowser:widgetbrowser/view/Header.js","qxc.ui.versionlabel:qxc/ui/versionlabel/VersionLabel.js","qx:qx/io/PartLoader.js","qx:qx/Part.js","qx:qx/io/part/Package.js","qx:qx/bom/request/Script.js","qx:qx/io/part/Part.js","qx:qx/io/part/ClosurePart.js","widgetbrowser:widgetbrowser/view/TabView.js","widgetbrowser:widgetbrowser/MControls.js","widgetbrowser:widgetbrowser/view/TabPage.js","qx:qx/bom/Cookie.js","ae:ae/Application.js","ae:ae/theme/material/Color.js","ae:ae/theme/icon/Material.js","ae:ae/theme/material/Font.js","ae:ae/theme/material/Decoration.js","ae:ae/theme/material/Appearance.js","ae:ae/theme/material/Image.js","ae:ae/theme/Material.js"]}},
  urisBefore : [],
  cssBefore : [],
  boot : "boot",
  closureParts : {},
  bootIsInline : false,
  addNoCacheParam : false,

  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      if (qx.$$loader.addNoCacheParam) {
        euri += "?nocache=" + Math.random();
      }
      
      uris.push(euri);
    }
    return uris;
  }
};

var readyStateValue = {"complete" : true};
if (document.documentMode && document.documentMode < 10 ||
    (typeof window.ActiveXObject !== "undefined" && !document.documentMode)) {
  readyStateValue["loaded"] = true;
}

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function() {
    if (!this.readyState || readyStateValue[this.readyState]) {
      elem.onreadystatechange = elem.onload = null;
      if (typeof callback === "function") {
        callback();
      }
    }
  };

  if (isLoadParallel) {
    elem.async = null;
  }

  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

function loadCss(uri) {
  var elem = document.createElement("link");
  elem.rel = "stylesheet";
  elem.type= "text/css";
  elem.href= uri;
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);
var isLoadParallel = 'async' in document.createElement('script');

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }

  var item;

  if (isLoadParallel) {
    while (list.length) {
      item = list.shift();
      if (list.length) {
        loadScript(item);
      } else {
        loadScript(item, callback);
      }
    }
  } else {
    item = list.shift();
    loadScript(item,  function() {
      if (isWebkit) {
        // force async, else Safari fails with a "maximum recursion depth exceeded"
        window.setTimeout(function() {
          loadScriptList(list, callback);
        }, 0);
      } else {
        loadScriptList(list, callback);
      }
    });
  }
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap, callback) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]){
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap){
      if (!qxlocs[lang]) qxlocs[lang] = locMap[lang];
      else
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]){
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap){
      if (!qxtrans[lang]) qxtrans[lang] = trMap[lang];
      else
        for (var k in trMap[lang]) qxtrans[lang][k] = trMap[lang][k];
    }
  }
  if (callback){
    callback(dataMap);
  }
}

qx.$$loader.signalStartup = function ()
{
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
    qx.event.handler.Application.onScriptLoaded();
    qx.$$loader.applicationHandlerReady = true;
  } else {
    qx.$$loader.applicationHandlerReady = false;
  }
}

// Load all stuff
qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.cssBefore.length>0) {
    for (var i=0, m=l.cssBefore.length; i<m; i++) {
      loadCss(l.cssBefore[i]);
    }
  }
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){
      l.initUris();
    });
  } else {
    l.initUris();
  }
}

// Load qooxdoo boot stuff
qx.$$loader.initUris = function(){
  var l=qx.$$loader;
  var bootPackageHash=l.parts[l.boot][0];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.packages[l.parts[l.boot][0]].uris), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();



qx.$$loader.init();

