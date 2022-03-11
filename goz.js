import "https://pinkromeo18.github.io/use/use.js";
import {tab} from "https://pinkromeo18.github.io/goz/tab.js"
import {v3d} from "https://pinkromeo18.github.io/goz/v3d.js"


export function Goz(query,url){
  var parent=fn.q(query);
  parent.classList.add('goz');
  
  var canvas=fn.ce('canvas');
  canvas.width=canvas.height=320;
  fn.a2(canvas,parent);  
  var ctx=canvas.getContext('2d');
  ctx.strokeStyle="white",ctx.lineWidth=1;
  var unit=10;
  var o={ctx,unit,query,url}
  o.els={parent,canvas}
  o.add=(name,w,h)=>{
    var el = fn.ce('div')
    el.style.width = w*unit +'px'
    el.style.height = h*unit +'px'
    el.classList.add(name)
    fn.a2(el,parent)
    o.els[name]=el
    return o;
  }
  o.pos=(name,x,y)=>{
    var el = o.els[name]
    el.style.left = x*unit +'px'
    el.style.top = y*unit +'px'
    return o;
  }
  o.show=(...names)=>{
    names.map(name=>{
      var el=o.els[name];
      el.style.display = 'block'
    })
    return o;
  }
  o.hide=(...names)=>{
    names.map(name=>{
      var el=o.els[name];
      el.style.display = 'none'
    })
    return o;
  }
  o.text=o.txt=(name,str)=>{
    var el=o.els[name];
    
    if(/\||｜/.test(str)){
      var len = ~~(parseInt(el.style.width)/unit);
      str = tab(str,len,1);      
    }
        
    el.textContent = str
    return o;
  }
  o.img=(name,file)=>{
    var el=o.els[name];
    if(!file){
      el.style.backgroundImage=''
      el.style.backgroundColor=''
      return o;
    }
    if(/^#/.test(file)){
      el.style.backgroundImage='';
      el.style.backgroundColor=file;
      return o;
    }
    if(url) file = url + file
    el.style.backgroundColor='';    
    el.style.backgroundImage= `url(${file})`;
    return o;
  }  
  o.v3d=(a)=>{
    v3d(ctx,a)
    return o;
  }
  
  ;
  console.log('goz.js v1.0')
  console.log(JSON.stringify( Object.keys(o),null,2))
  return o;
}

/* usage
var goz =Goz('.goz','https://pinkromeo18.github.io/goz/mons/');

var names=`
NAME|CLASS|AC|HP|STAT
ロンメル|FIG|-4|200|200
ルッキーナ|MAG|4|20|200
ウルチン|BIS|3|200|200
アナナン|SUM|2|200|200
チャクミ|PRI|10|20|200
ファイアドレイク|FIG|LX|20|9999
`

goz.add('party',30,7).pos('party',1,24).img('party','#000a')
goz.txt('party',names) //tab(names,30,1) )

goz.add('mons',16,16)
goz.img('mons','man1-min.png')
goz.pos('mons',8,7)

goz.add('hint',30,1).pos('hint',1,0)
goz.txt('hint','|モンスターが あらわれた！')

fn.rotL= a => a[0].map((_, c) => a.map(r => r[c])).reverse();
fn.rotR= a => a[0].map((_, c) => a.map(r => r[c]).reverse());
fn.xyary= a => a.trim().split(/\s/).map(d=>d.split(''));

var a=fn.xyary(`
101
001
101
`)

goz.v3d(a)

*/
