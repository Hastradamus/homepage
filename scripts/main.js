    var on = true;
    var myElement = document.getElementById("striderParag");
    var myElement2 = document.getElementById("adventParag");
    
    var blinkOn = function() {
        myElement.innerHTML = ">SandStrider! A game about collecting spices, and not getting killed by sand. Use the arrow keys to move. Don't walk the same direction twice! (Completed)|";
        myElement2.innerHTML = ">AdventureLand! Have you ever wanted to walk around in a very small square, and pick up a single item? Then AdventureLand is for you! \"WASD\" to move. \"E\" to interact. \"I\" to view Inventory. (Work in progress)|"
        on = false;
    };
    var blinkOff = function() {
        myElement.innerHTML =  ">SandStrider! A game about collecting spices, and not getting killed by sand. Use the arrow keys to move. Don't walk the same direction twice! (Completed)&nbsp";
        myElement2.innerHTML = ">AdventureLand! Have you ever wanted to walk around in a very small square, and pick up a single item? Then AdventureLand is for you! \"WASD\" to move. \"E\" to interact. \"I\" to view Inventory. (Work in progress)&nbsp"
        on = true;
    };
    
    var blink = function() {
    if (on) {
        blinkOn();
    }
    else blinkOff();
    };
    window.setInterval(blink, 600);
    var taco = document.getElementsByClassName("blocktext");
        
//Intro text roll in
var headerText = document.getElementById("headerText");
var rolloutText = function(str) {
    var curIndex = 1;
    var looper = function() {
        var newStr = str.substring(0, curIndex);
        headerText.innerHTML = newStr;
        curIndex++;
        console.log(curIndex);
        if (curIndex >= str.length + 1) window.clearInterval(this.rollOutLoop), switchTextHolder(), console.log("butt");
    }
    this.rollOutLoop = window.setInterval(looper, 70);
}
//call to rollout

//window.setTimeout(rolloutText, 1800, "Welcome to Hasan Yusuf Ahmed's Website|");

//var preRolloutBlinkTimer = window.setInterval(blinkInnerHTML, 600, "headerText", "&nbsp", "|");

//blink "curser" after roll in

//*************** Wrap this function in an object, so you can give it a counter funciton in order to be able to
//determine when you should clear timers and such.


var blinkInnerHTML = {
    main: function(elementID, speedOfBlink, onText, offText) {
     var e = document.getElementById(elementID);
     var textShowing = false;
     self = this;
        on1 = function() {
            e.innerHTML = onText;
            textShowing = true;
            self.incr();
            if (self.incr() > 5) {
                window.clearInterval(self.interval);
                self.callRollout("Welcome to Hasan Yusuf Ahmed's Website|");
            }
            
        }
        off = function() {
             e.innerHTML = offText;
             textShowing = false;
        }
            helper = function() {
                if (textShowing) off();
                else on1();
            }
    this.interval = window.setInterval(helper, speedOfBlink); 
    },
    incr: (function() {
        var x = 0;
        return function() {
        x++;
        return x;
        }
    }()),
    callRollout: function(str){
        rolloutText(str);
    }
}
    
    var callBlinkPre = function() {
    blinkInnerHTML.main("headerText", 600, "&nbsp", "|");
    }
    callBlinkPre();
    
switchElementBetweenTexts = function(elementID, speedOfBlink, text1, text2) {
     var e = document.getElementById(elementID);
     var text1Showing = true;
        showText1 = function() {
            e.innerHTML = text1;
            text1Showing = true;
            console.log("setting text 1");
        }
        showText2 = function() {
             e.innerHTML = text2;
             text1Showing = false;
             console.log("setting text 2");
        }
            helper = function() {
                if (text1Showing) showText2();
                else showText1();
            }
    this.interval = window.setInterval(helper, speedOfBlink); 
    }
    
    var switchTextHolder = function() {
    switchElementBetweenTexts("headerText", 600, "Welcome to Hasan Yusuf Ahmed's Website|", "Welcome to Hasan Yusuf Ahmed's Website&nbsp");
    console.log("butt");
    }
    