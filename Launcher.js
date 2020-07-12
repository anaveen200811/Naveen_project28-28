class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.launchero = Constraint.create(options);
        World.add(world, this.launchero);
    }

    fly(){
        this.launchero.bodyA = null;
    }

    display(){
        if(this.launchero.bodyA){
            var pointA = this.launchero.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}