class Paper 
{
    constructor (x,y)
    {
        var options = {
            isStatic:false,
            restitution:0.8,
            friction:0.3,
            density:1.0
        }
        this.body=Bodies.circle (x, y, 20, options);
        this.width=20;
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }

    display()
    {
        var pos =this.body.position;        
        var angle = this.body.angle;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 40, 40);
        push();
        rotate(angle);
        fill("green");
        //ellipseMode(CENTER);
        //ellipse(pos.x,pos.y,20,20);
        pop();
    }
};