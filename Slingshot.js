class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.sling1image=loadImage("sprites/sling1.png");
        this.sling2image=loadImage("sprites/sling2.png");
        this.sling3image=loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            image(this.sling1image, 112, 20, )
            image(this.sling2image, 80, 35)
            image(this.sling3image, 100, 55, 50, 20)
        }
    }
    

    
}