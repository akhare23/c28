class Chain{
    constructor(bodyA,bodyB){
        var options = {
            stiffness:0.04,
            bodyA:bodyA,
            bodyB:bodyB,
            length:15
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        strokeWeight(4)
        line(posA.x,posA.y,posB.x,posB.y);
    }
}