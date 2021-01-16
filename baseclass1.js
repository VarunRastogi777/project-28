class BaseClass1{
    constructor(x,y,diameter){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
    this.body=Bodies.circle(x,y,diameter,options)
    this.diameter=diameter
    this.image=loadImage("pictures/mango.png")
    World.add(world,this.body)
    }
        display(){
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,50,50);
          }
}