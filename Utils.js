var Utils =
{
	rand: function(min, max)
	{
		return Math.random()* (max - min) + min;
	},

	// Returns an array of rgb colors from start to
	// end width "steps" midpoints
	createColorRange: function(start, end, steps)
	{
		var colors, rgb, hex, amount, last, first;
		steps--;
		hex = /^#[0-9a-fA-F]{6}$/;
		rgb = /(^rgb\((\d+),\s*(\d+),\s*(\d+)\))$/;
		colors = [];
		amount = [];

		if(hex.test(start) && hex.test(end))
		{
			start = this.hexToRgb(start);
			end = this.hexToRgb(end);
		}
		if(rgb.test(start) && rgb.test(end))
		{
			last = end;
			first = start;
			colors.push(start);
			start = start.replace('rgb(', '').replace(')', '').split(',');
			end = end.replace('rgb(', '').replace(')', '').split(',');
		}
		else
		{
			console.log('This function takes RGB or HEX colors only.');
		}

		// processing colors
		for(var i = 0; i < 3; i++)
		{
			amount[i] = Math.floor((end[i] - start[i]) / steps);
		}

		var midpoint, red, green, blue;
		for(var j = 1; j < steps; j++)
		{
			red = parseInt(start[0],10) + parseInt(amount[0],10)*j;
			green = parseInt(start[1],10) + parseInt(amount[1],10)*j;
			blue = parseInt(start[2],10) + parseInt(amount[2],10)*j;
			midpoint = 'rgb(' + red + ',' + green + ',' + blue + ')';
			colors.push(midpoint);
		}
		colors.push(last);
		return colors;
	},

	// Returns a random rgba color from an array of
	// rgb colors, generated on
	// http://meyerweb.com/eric/tools/color-blend/
	getColorInRange: function(toneArray, alpha)
	{
		var color,colorIndex, length;
		length = toneArray.length;
		colorIndex	= ~~(Math.random()*length);
		color = this.colors[colorIndex];
		color = color.replace('rgb', 'rgba');
		color = color.split(')') + alpha + ')';
		return color;
	},

	hexToRgb: function(hex)
	{
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		var r, g, b;
		r = parseInt(result[1], 16);
		g = parseInt(result[2], 16);
		b = parseInt(result[3], 16);

		return 'rgb(' + r + ',' + g + ',' + b + ')';
	}
};