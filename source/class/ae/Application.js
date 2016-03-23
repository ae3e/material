/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/**
 * This is the main application class of your custom application "qx"
 *
 * @asset(ae/*)
 */
qx.Class.define("ae.Application",
{
  extend : widgetbrowser.Application,



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main : function()
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }
      
      /*var tabs = this.__tabs.getChildren()[3];
      tabs.addListenerOnce("appear",function(){
    	  console.log(tabs.getChildren()[2]);
      },tabs);
      console.log(tabs);*/

    },
    
    members :
    {
      // extend the 'getThemes' method and add your own theme to the list
      getThemes: function() {
        return ([
          {"Indigo" : "qx.theme.Indigo"},
          {"Modern" : "qx.theme.Modern"},
          {"Simple" : "qx.theme.Simple"},
          {"Classic" : "qx.theme.Classic"},
          {"Material" : "ae.theme.Material"}
        ]);
      }
    }
  }
});
