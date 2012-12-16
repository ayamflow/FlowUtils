var Particle = function(x, y, color, context)
{
    this.x = x;
    this.y = y;
    this.context = context;
    this.radius = fw.rand(5, 10);

    this.vx = fw.rand(-10, -5);
    this.vy = fw.rand(-2, 2);
    this.thetaX = fw.rand(0, Math.PI*2);
    this.thetaY = fw.rand(0, Math.PI*2);

    this.thetaXAdd = 0.07;
    this.thetaYAdd = 0.03;
    this.inertia = 0.5;
    this.gravity = -0.1;

    this.color = color;//'rgba(255, 255, 255, 0.7)'; // to change

    var direction = [-1, 1];
    this.directionX = -1;
    this.directionY = direction[~~(Math.random() * 2)];
};

Particle.prototype = {
    update: function()
    {
        //this.thetaX += this.thetaXAdd;
        //this.thetaY += this.thetaYAdd;
        //var dx = this.x + Math.cos(this.angleX) + fw.rand(-50, 50);
        //var dy = this.y + Math.sin(this.angleY) + fw.rand(-50, 50);
        //this.x = (dx - this.x) * this.vx * this.directionX * this.inertia;
        //this.y = (dy - this.y) * this.vy * this.directionY * this.inertia;

        //this.x -= this.vx * Math.cos(this.thetaX);
        //this.y += this.vy * this.inertia * Math.sin(this.thetaY);

        this.vx += this.gravity;

        this.x += this.vx;
        this.y += this.vy;

        this.radius *= fw.rand(0.98, 0.999);
        this.draw();
    },

    draw: function()
    {
        this.context.save();
        this.context.translate(this.x, this.y);
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.arc(0, 0, this.radius, 0, Math.PI*2, true);
        this.context.closePath();
        this.context.fill();
        this.context.restore();
    }
};