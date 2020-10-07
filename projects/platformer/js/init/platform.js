(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        createPlatform(0, game.world.height - 32, 3, 2);    // DO NOT DELETE

        // example:
        createPlatform(400, 250);
        createPlatform(170, 460, 0.5);
        createPlatform(400, 460);           // normal platform
        createPlatform(300, 200, 0.3)       // small horizontal platform (30% the normal width)
        createPlatform(500, 500, 0.3, 10)   // tall vertical wall (30% the normal width and 10x the height)
        
        createCollectable(type.steve, 200, 170, 6, 0.7);
        createCollectable(type.grace, 510, 510, 6, 0.7);
        createCollectable(type.kennedi, 310, 215, 6, 0.7)

        createCannon("top", 450); // a cannon on the top of the screen, located at x = 450
        createCannon("left", 300, 1000); // a cannon on the left side of the screen, located at y = 300, with a 1 second delay (1000ms) 

        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    }
    
    platform.init = init;
})(window);