/* Lightweight, dependency-free SVG chart. Edit the source array to update monthly data. */
(() => {
  const svg = document.getElementById('subscription-chart');
  if (!svg) return;
  const values = [2,18,41,40,47,51,57,55,66,79];
  const months = ['01','02','03','04','05','06','07','08','09','10'];
  const NS = 'http://www.w3.org/2000/svg';
  const make=(tag,attrs,text)=>{const n=document.createElementNS(NS,tag);Object.entries(attrs||{}).forEach(([k,v])=>n.setAttribute(k,v));if(text!==undefined)n.textContent=text;svg.appendChild(n);return n;};
  const pad={left:43,right:20,top:29,bottom:52}, w=700,h=350;
  const x=i=>pad.left+(w-pad.left-pad.right)*i/(values.length-1);
  const y=v=>h-pad.bottom-(h-pad.top-pad.bottom)*v/80;
  [0,20,40,60,80].forEach(v=>{make('line',{x1:pad.left,y1:y(v),x2:w-pad.right,y2:y(v),stroke:'#cbd6e1','stroke-width':'1'});make('text',{x:pad.left-11,y:y(v)+4,'text-anchor':'end','font-size':'12',fill:'#7890a7'},String(v));});
  const path=values.map((v,i)=>`${i===0?'M':'L'} ${x(i)} ${y(v)}`).join(' ');
  const area=path+` L ${x(values.length-1)} ${y(0)} L ${x(0)} ${y(0)} Z`;
  make('path',{d:area,fill:'#dbe7f3'});
  make('path',{d:path,fill:'none',stroke:'#214e83','stroke-width':'3.5','stroke-linejoin':'round','stroke-linecap':'round'});
  values.forEach((v,i)=>{make('circle',{cx:x(i),cy:y(v),r:i===0||i===9?'6':'3.8',fill:'#214e83'});make('text',{x:x(i),y:h-pad.bottom+27,'text-anchor':'middle','font-size':'12',fill:'#67809a'},months[i]);});
  [0,9].forEach(i=>make('text',{x:x(i),y:y(values[i])-16,'text-anchor':'middle','font-size':'19','font-weight':'700',fill:'#15385f'},`${values[i]}`));
})();
