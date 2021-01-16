class Tree {
    constructor(){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.rectangle(750,400,50,50,options)
        this.image=loadImage("pictures/tree.png")
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image(this.image,750,400,500,500)
    }
}