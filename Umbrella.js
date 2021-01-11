class Umbrella{
    constructor(x,y){

        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.r=50;

        this.image=loadImage("Images/Walking Frame/walking_1.png");
        this.body=Bodies.circle(this.x, this.y, this.r/2, options);
		World.add(world, this.body);
    }

    display(){
        var pos=this.body.position;		
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}