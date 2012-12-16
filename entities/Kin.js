// class for handling kinematics (moving arms, legs, scarf...)
var Kin = function(x, y, width, height, color)
{
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.theta = 2.5;
    this.thetaDirection = 1;
};

Kin.prototype = {
    update: function(c)
    {
        this.draw(c);
    },

    getPin: function()
    {
        return {
            x: this.x + Math.cos(this.theta) * this.width,
            y: this.y + Math.sin(this.theta) * this.width
        };
    },

    draw: function(c)
    {
        c.save();
        c.translate(this.x, this.y);
        c.rotate(this.theta);
        c.fillStyle = this.color;
        c.fillRect(0, 0, this.width, this.height);
        c.restore();
    }
};