var Particle = function()
{
	this.x = fw.rand(0, screenWidth);
	this.y = fw.rand(0, screenHeight);

	this.radius = 1;
	this.color = 'white';
	this.alpha = 1;

	this.velocityX = fw.rand(5, 10);
	this.velocityY = fw.rand(5, 10);

	var tabDirection = [-1, 1];
	this.directionX = randValueFromArray(tabDirection);
	this.directionY = randValueFromArray(tabDirection);

	this.inertia = 0.1;
};

Particle.prototype.update = function(context)
{
	if(this.x >= screenWidth || this.x <= 0) this.directionX = -this.directionX;
	if(this.y >= screenHeight || this.y <= 0) this.directionY = -this.directionY;
	this.x += this.velocityX * this.directionX * this.inertia;
	this.y += this.velocityY * this.directionY * this.inertia;

	this.draw(context);
};

Particle.prototype.draw = function(context)
{
	context.save();
	context.translate(this.x, this.y);
	context.beginPath();
	context.fillStyle = this.color;
	context.arc(0, 0, this.radius, 0, Math.PI*2, true);
	context.closePath();
	context.fill();
	context.restore();
};