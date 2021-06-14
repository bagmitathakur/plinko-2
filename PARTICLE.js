class Particle{
constructor(x,y,r){
var options={
    isStatic:false,
restitution:0.3,
friction:0.5,
density:1


}


this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(x,y,this.r,options);
this.color=color(random(0,255),random(0,255),random(0,255));
World.add(world,this.body,this.color);
}
display(){ 
var particlepos=this.body.position;
var particleangle=this.body.angle;
push();
translate(particlepos.x,particlepos.y);
rotate(particleangle);
stroke (0);
fill (this.color);
ellipseMode(RADIUS);

ellipse (0,0,this.r,this.r);
pop ();

}


}