var fw = (function()
{
    var Fw =
    {
        /**
         * Returns a random value between @min and @max.
         * @param  {number} min The minimal value of the random interval.
         * @param  {number} max The maximal value of the random interval.
         * @return {number}
         */
        rand: function(min, max) {
            return Math.random()* (max - min) + min;
        },

        /**
         * Returns a random hexa color.
         * @return {string}
         */
        randColor: function() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.round(Math.random() * 15)];
            }
            return color;
        },

        /**
         * Returns an array of colors. Theses colors are scaled proportionnaly between 2 values.
         * @param  {string} start The start RGB color.
         * @param  {string} end   The end RGB color.
         * @param  {int} steps The number of colors to be returned.
         * @return {array}
         */
        createRGBRange: function(start, end, steps) {
            var colors = [],
                amount = [],
                last = end,
                first = start;
            steps = Math.min(steps, 256) - 1; // High number of steps is not supported.

            colors.push(start);
            start = start.replace('rgb(', '').replace(')', '').split(',');
            end = end.replace('rgb(', '').replace(')', '').split(',');

            for(var i=0; i < 3; i++) {
                amount[i] = ~~((end[i] - start[i]) / steps);
            }

            var midpoint, red, green, blue;
            for(var j=1; j < steps; j++) {
                red = ~~(start[0]) + ~~(amount[0])*j;
                green = ~~(start[1]) + ~~(amount[1])*j;
                blue = ~~(start[2]) + ~~(amount[2])*j;
                midpoint = 'rgb(' + red + ',' + green + ',' + blue + ')';
                colors.push(midpoint);
            }
            colors.push(last);
            return colors;
        },

        // DEPRECATED
        createColorRange: function(start, end, steps) {
            var colors, rgb, hex, amount, last, first;
            steps = Math.min(steps, 256);
            steps--;
            hex = /^#[0-9a-fA-F]{6}$/;
            rgb = /(^rgb\((\d+),\s*(\d+),\s*(\d+)\))$/;
            colors = [];
            amount = [];

            if(hex.test(start) && hex.test(end)) {
                start = this.hexToRgb(start);
                end = this.hexToRgb(end);
            }
            if(rgb.test(start) && rgb.test(end)) {
                last = end;
                first = start;
                colors.push(start);
                start = start.replace('rgb(', '').replace(')', '').split(',');
                end = end.replace('rgb(', '').replace(')', '').split(',');
            }
            else {
                console.log('This function takes RGB or HEX colors only.', start, end);
            }

            // processing colors
            for(var i = 0; i < 3; i++) {
                amount[i] = ~~((end[i] - start[i]) / steps);
            }

            var midpoint, red, green, blue;
            for(var j = 1; j < steps; j++) {
                red = ~~(start[0]) + ~~(amount[0])*j;
                green = ~~(start[1]) + ~~(amount[1])*j;
                blue = ~~(start[2]) + ~~(amount[2])*j;
                midpoint = 'rgb(' + red + ',' + green + ',' + blue + ')';
                colors.push(midpoint);
            }
            colors.push(last);
            return colors;
        },

        /**
         * Returns a color from a colors array. If the alpha parameter is specified, it changes the color to RGBA.
         * @param  {array} toneArray An array of RGB colors.
         * @param  {number} alpha An alpha value for the color to be returned, between 0 and 1.
         * @return {string}
         */
        getColorInRange: function(toneArray, alpha) {
            var color,colorIndex, length;
            length = toneArray.length;
            colorIndex  = ~~(Math.random()*length);
            color = toneArray[colorIndex];
            if(alpha) {
                color = color.replace('rgb', 'rgba');
                color = color.split(')') + alpha + ')';
            }
            return color;
        },

        /**
         * Converts a Hexa color to RGB.
         * @param  {string} hex A color, Hexa format.
         * @return {string}
         */
        hexToRgb: function(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            var r, g, b;
            r = parseInt(result[1], 16);
            g = parseInt(result[2], 16);
            b = parseInt(result[3], 16);

            return 'rgb(' + r + ',' + g + ',' + b + ')';
        },

        /**
         * Returns the distance between two sets of coordinates.
         * @param  {number} x1   x of the first point.
         * @param  {number} x2   x of the second point.
         * @param  {number} y1   y of the first point.
         * @param  {number} y2   y of the second point.
         * @param  {boolean} sqrt Specifies if it returns a sqrt or no (faster).
         * @return {number}
         */
        getDistance: function(x1, x2, y1, y2, sqrt) {
            var dist = ((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1));
            if(sqrt) {
                dist = Math.sqrt(dist);
            }
            return dist;
        },

        /**
         * Returns a value from an array.
         * @param  {array} array The array the value should come from.
         * @return {any}
         */
        randValueFromArray: function(array) {
            var l = array.length, index;
            index = ~~(Math.random() * l);
            return array[index];
        }
    };
    return Fw;
})();