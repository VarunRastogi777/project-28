class Boy {
    constructor(){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.rectangle(150,575,50,50,options)
        this.image=loadImage("pictures/boy.png")
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image(this.image,150,575,150,250)
    }
}