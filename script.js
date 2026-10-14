const base='https://github.com/SRLLabNITDGP/System-Design-Lab-NIT-Durgapur/tree/main/';
const ex=[
['01','Smart Ring','01-Smart-Ring',['V1','V2'],'Compact wearable sensing and interaction platform developed across two design iterations.','fa-ring'],
['02','Smart Watch','02-Smart-Watch',['V1','V2'],'Wrist-worn embedded system integrating sensing, processing and user interaction.','fa-clock'],
['03','Smart Band','03-Smart-Band',['V1'],'Lightweight wearable band for sensor-driven monitoring and edge processing.','fa-wave-square'],
['04','Smart Toy','04-Smart-Toy',['V1'],'Interactive embedded platform for sensing, actuation and human-device interaction.','fa-robot'],
['05','Smart HAT','05-Smart-HAT',['V1','V2'],'Head-worn sensing platform for motion, gesture and intelligent wearable experiments.','fa-hat-cowboy'],
['06','ESP32-P4 + mmWave','06-ESP32-P4-mmWave',['V1'],'Embedded sensing experiment combining ESP32-P4 compute with mmWave sensing.','fa-satellite-dish'],
['07','EMD','07-EMD',['V1'],'Experimental system-design platform for embedded measurement, development and validation.','fa-microchip']
];
function render(items){const g=document.getElementById('expgrid');g.innerHTML='';items.forEach(x=>{const a=document.createElement('article');a.className='card exp reveal';a.innerHTML=`<div class="exp-top"><div><div class="num">Experiment ${x[0]}</div><div class="title">${x[1]}</div></div><div class="icon"><i class="fas ${x[5]}"></i></div></div><div class="desc">${x[4]}</div><div class="versions">${x[3].map(v=>`<span class="v"><i class="fas fa-code-branch"></i> ${v}</span>`).join('')}<a class="open" href="${base+x[2]}" target="_blank" rel="noopener">View <i class="fas fa-arrow-up-right-from-square"></i></a></div>`;g.appendChild(a)});observe()}
function observe(){document.querySelectorAll('.reveal:not([data-r])').forEach(el=>{el.dataset.r=1;io.observe(el)})}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.1});
render(ex);observe();
document.getElementById('q').addEventListener('input',e=>{const q=e.target.value.toLowerCase();render(ex.filter(x=>x.join(' ').toLowerCase().includes(q)))});
document.getElementById('menu').onclick=()=>document.getElementById('links').classList.toggle('show');
document.querySelectorAll('.links a').forEach(a=>a.onclick=()=>document.getElementById('links').classList.remove('show'));
if(matchMedia('(hover:hover) and (pointer:fine)').matches){document.addEventListener('pointermove',e=>{document.querySelectorAll('.card,.research,.contact').forEach(c=>{if(c.matches(':hover')){const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=.5-(e.clientY-r.top)/r.height;c.style.transform=`perspective(900px) rotateX(${y*3.5}deg) rotateY(${x*4.5}deg) translateY(-2px)`}else c.style.transform=''})})}