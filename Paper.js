class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        };
        this.body = Matter.Bodies.circle(ground.height+10, 200, 20,options);
        this.radius = 70;
        this.image=loadImage("sprites/paper.png");
        World.add(world, this.body);
        
    };

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255,0,255)
		imageMode(CENTER);
		image(this.image, 0,0,100);
        pop();
    }
      
};

