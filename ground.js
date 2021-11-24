class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }
  
 show(){
   var pos = this.body.position;
   Matter.Body.rotate(this.body,angle);
   Push();
   retMode(Center);
   stroke(255);
   fill(127);
   Translate(pose.x,pose.y);
   rotate(angle);
   Pop();
   angle +=0.1;
 } 
 
   
}
