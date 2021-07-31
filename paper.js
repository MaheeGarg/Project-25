class Paper {
    constructor(){
        var options =
        {
            restitution = 0.3,
            friction =0,
            density =1.2
        }
        this.body = Bodies.rectangle(200,20,10,10,options);
        this.width =10;
        this.height =10;
        this.imaginery = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
       
    imageMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    image(this.imagenery,0, 0, this.width, this.height);
    

    }
}