class Stone {
    constructor(){
        var options={
            isStatic:false,
            restitution:0,
            friction:0.5,
            density:0.004
        }
        this.body=Bodies.rectangle(200,200,50,50,options)
        this.image=loadImage("pictures/stone.png")
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,50,50)
    }
}