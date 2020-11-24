class Obstacle{
    constructor(x,y,width,height) {
        var options = {
            isStatic: false,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.pinImage=loadImage("pin.png")
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.pinImage,pos.x, pos.y, this.width, this.height);
      }
    }; 
