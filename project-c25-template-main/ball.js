class paper
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:100,
            density:1.2
            }
        this.r=r;

        this.image=loadImage("paper.png");
        this.body=Bodies.circle(x, y, r, options)
        World.add(world, this.body);
    }
    display()
    {

        var paperpos=this.body.positions;

        Push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTRE)

        fill(255)
        imageMode(CENTRE);

        image(this.image, 0,0,2*this.r, 2*this.r)
        Pop()
    }
}