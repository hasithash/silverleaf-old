export const calcAngle = (pointOfView:{x:number,y:number,z:number},targetPoint:{x:number,y:number,z:number})=>{
    //sample point
   
    //the target relative to the point of view, as if the last was 0 0 0.
    const relativeTarget = {
      x: targetPoint.x-pointOfView.x,
      y: targetPoint.y-pointOfView.y,
      z: targetPoint.z-pointOfView.z,
    }
    // Side A * Side B = |Side A| * |Side B| * cos(θ)
    const xAngle = angleFormula(pointOfView,targetPoint,"x")
    const yAngle = angleFormula({x:1,y:0,z:0},relativeTarget,"y")
    const zAngle = angleFormula(pointOfView,relativeTarget,"z")
    return {x:xAngle,y:yAngle,z:zAngle};
  }
  
  const angleFormula = (samplePoint:{x:number,y:number,z:number},target:{x:number,y:number,z:number},axis:string)=>{
    const zGreater = samplePoint.z > target.z
    const yGreater = samplePoint.y > target.y
    if(axis == "x"){
      //use y and z
      const firstPoint = {x:samplePoint.y,y:samplePoint.z}
      const secondPoint = {x:target.y,y:target.z}
      const base = target.z
      const height = target.y
      console.log(`${base}`)
      let angle = Math.atan(height/base);
      if(!zGreater){
        angle -= angle
      }
      return angle;
    }
    else if(axis == "y"){
      //use x and z
      const firstPoint = {x:samplePoint.x,y:samplePoint.z}
      const secondPoint = {x:target.x,y:target.z}
      let angle = (Math.acos(
        vectorMultiply( firstPoint, secondPoint ) / 
        (length(firstPoint) * length(secondPoint))
      )) + (zGreater ? (-Math.PI/2) : (Math.PI/2))
      if(!zGreater) angle -= (angle)*2;
      return angle;
    }
    else if(axis == "z"){
      //use x and y
      const firstPoint = {x:samplePoint.x,y:samplePoint.y}
      const secondPoint = {x:target.x,y:target.y}
      const base = Math.abs(secondPoint.x-firstPoint.x)
      const height = Math.abs(secondPoint.y - firstPoint.y)
      let angle = (Math.atan(height/base));
      if(zGreater){
        angle -= 2*angle
      }
      return angle;
    }
    else{
      return 0
    }
  }

export const length = (vector:{x:number,y:number})=>{
return pythagoreanTheorem([vector.x,vector.y])
}

export const vectorMultiply = (pointA:{x:number,y:number},pointB:{x:number,y:number})=>{
return pointA.x * pointB.x +
        pointA.y * pointB.y;
}

export const pythagoreanTheorem = (numbers:Array<number>)=>{
let sum = 0
numbers.forEach((num)=>{
    sum += num**2
})
return sum**0.5
}