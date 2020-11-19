class Box{
    constructor(x,y,width,height){
        var options ={
            isStatic: false, 
            restitution: 1.0,
            friction: 0.5,
            density:1.2
        }

    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);

    this.width = width;
    this.height = height;
    }
    display(){
        var pos = this.body.position

        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
    }
}