/**
 * Sample Javascript class
 * Created by Brian Crescimanno <brian.crescimanno@gmail.com>
 * http://briancrescimanno.com/2010/02/10/mimic-a-class-in-javascript/
 * Copyright 2010 Brian Crescimanno
 * Licensed under the Creative Commons Attribution-Share Alike 3.0 United States License
 * http://creativecommons.org/licenses/by-sa/3.0/us/
 */

function testClass(def) {  
    this.property = def;  
}  
  
testClass.prototype = {      
  
    property: null,  
  
    exposeProperty: function() {  
        alert("property is: " + this.property);  
    }  
  
}  
  
var obj = new testClass();  
var obj2 = new testClass("some default value");  
  
obj.exposeProperty();  
obj2.exposeProperty();