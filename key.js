
var _nowkey={
    '_U':'w',
    '_L':'a',
    '_D':'s',
    '_R':'d',
    
    'A':'z',
    'B':'c',
    'X':'x',
    'Y':'v',

    'L':'q',
    'R':'e',
    
    'S':'Enter',
    'P':' '
}

var nowkey=void 0;

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function keyconfig(obj){
  if(!obj) nowkey=Object.assign({},_nowkey);
  nowkey = Object.assign({},nowkey,obj);
  console.log('keyconfig')
  console.log(JSON.stringify(nowkey,null,2))
  return;
}

export function key(){return new Promise(sol=>{
  if(!nowkey) keyconfig();
  var dde =document.documentElement;
  dde.onkeydown = (ev)=>{
    var one = Object.keys(nowkey)
     .filter(d=>nowkey[d]===ev.key).join('')
    if(one)return dde.onkeydown = null,sol(one)
  }
})
}

export async function keyloop(caller){
    await caller(await key(),sleep)
    return keyloop(caller)
}

/*
import {keyloop} from "https://pinkromeo18.github.io/goz/key.js";
keyloop(async(k,wait)=>{
  
  debug(k)
  await wait(1000)
  debug('next');
  
})
*/
