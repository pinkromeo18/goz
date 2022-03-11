export function tab(str,maxlen,headspace){
  str=str||'';
  var sp=' ',h=''
  if(headspace) h=sp;
  var maxs=[],add=0
  var ary=str.split('\n').filter(d=>d).map((d,i)=>{
    var col = d.split(/\||｜/)
    if(i===0){
      col.map(d=> maxs.push(d.length))
    }else{
      col.map((d,i)=>maxs[i] = Math.max( maxs[i],d.length) )
    }
    return col;
  })
  ;
  if(maxlen){    
    var wk=maxs.reduce((a,b)=>a+b) + maxs.length
    if(headspace) wk+=1;
    add = Math.max(maxlen - wk,0)
  }
  
  var tabstr=ary.map(col=>{
    var dat= col.map((d,i)=>{
      var n=maxs[i] + 1   
      if(i===0)return h+d.padEnd(n + add,sp)
      else return d.padStart(n,sp)      
    }).join('')
    //console.log(dat)
    return dat;
  }).join('\n')
  
  return tabstr;
}

/*
var names=`
NAME|CLASS|AC|HP|STAT
ロンメル|FIG|-4|200|200
ルッキーナ|MAG|4|20|200
ウルチン|BIS|3|200|200
アナナン|SUM|2|200|200
チャクミ|PRI|10|20|200
ファイアドレイク|FIG|LX|20|9999
`
tab(names)
*/

