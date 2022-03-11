export function v3d(ctx,a){
  var fn={}
  fn.path=(ary,gain)=>{
    gain=gain||1
    ary=ary.map(d=>d*gain);
    var path = new Path2D();
    path.moveTo(ary[0],ary[1])
    for(var i=0+2;i<ary.length;i+=2)
      path.lineTo(ary[i],ary[i+1])
    ;
    path.closePath()
    return path;
  }

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //var ctx=fn.q('canvas').getContext('2d');
  //ctx.strokeStyle="white",ctx.lineWidth=1;
  var g=20

  //and door upstair downstair

  var _0f = fn.path([0,5,5,5,5,11,0,11],g)
  var _0fo = fn.path([0,5,3,5,3,11,0,11],g) //outer  
  var _0fm = fn.path([3,5,5,5,5,11,3,11],g) //inner
  var _0s = fn.path([5,5,6,6,6,10,5,11],g)
  var _1f = fn.path([5,5,11,5,11,11,5,11],g)
  var _2f = fn.path([11,5,16,5,16,11,11,11],g)
  var _2fo = fn.path([13,5,16,5,16,11,13,11],g) //outer
  var _2fm = fn.path([11,5,13,5,13,11,11,11],g) //inner

  var _2s = fn.path([10,6,11,5,11,11,10,10],g)
  var _3f = fn.path([0,3,3,3,3,13,0,13],g)
  var _3s = fn.path([3,3,5,5,5,11,3,13],g)
  var _4f = fn.path([3,3,13,3,13,13,3,13],g)
  var _5f = fn.path([13,3,16,3,16,13,13,13],g)
  var _5s = fn.path([11,5,13,3,13,13,11,11],g)
  var _6s = fn.path([0,0,3,3,3,13,0,16],g)
  var _8s = fn.path([13,3,16,0,16,16,13,13],g)

  //
  if(Array.isArray(a)) a=a.flat();
  else a=a.replace(/\s/g,'').split('');
  a=a.map(d=>parseInt(d))
  //
  var road=0,wall=1,door=2,ups=3,downs=4;
  var tobit=(d)=>{
    if(d==road || d==ups || d==downs) return road;
    else return wall;
  }  

  var _a =a; //_a is original
  a =a.map(tobit);


  //  0 1 2
  //  3 4 5
  //  6 ^ 8
  var draw=[];
  if(a[0]!=road){
    if(a[6]==road && a[3]==road && a[4]==road) draw.push(_0f)
    if(a[6]==road && a[3]==road && a[4]!=road) draw.push(_0fo)  
    if(a[6]!=road && a[3]==road && a[4]==road) draw.push(_0fm)
    if(a[4]==road && a[1]==road) draw.push(_0s)
  }

  if(a[4]==road && a[1]!=road) draw.push(_1f) ///

  if(a[2]!=road){
    if(a[8]==road && a[5]==road && a[4]==road) draw.push(_2f)
    if(a[8]==road && a[5]==road && a[4]!=road) draw.push(_2fo)  
    if(a[8]!=road && a[5]==road && a[4]==road) draw.push(_2fm)
    if(a[4]==road && a[1]==road) draw.push(_2s)
  }

  if(a[6]==road && a[3]!=road) draw.push(_3f)
  if(a[4]==road && a[3]!=road) draw.push(_3s)
  if(a[4]!==road) draw.push(_4f) ///
  if(a[8]==road && a[5]!=road) draw.push(_5f)
  if(a[4]==road && a[5]!=road) draw.push(_5s)

  if(a[6]!=road) draw.push(_6s)
  if(a[8]!=road) draw.push(_8s)

  draw.reverse().map(d=>ctx.stroke(d))
}

/*
var ctx;
v3d(ctx,`
101
001
101
`);
*/


