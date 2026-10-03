'use strict';
const $=(s,c=document)=>c.querySelector(s);const $$=(s,c=document)=>[...c.querySelectorAll(s)];
const secciones=$$('.seccion');const navItems=$$('.nav-item');const visitadas=new Set(JSON.parse(localStorage.getItem('acd-v5-visitadas')||'[]'));
const CLAVE_MODULO_1='DATOS2026';
const CLAVE_MODULO_2='PROBA2026';
const CLAVE_MODULO_3='DISTRIB2026';
const CLAVE_MODULO_4='INFER2026';
const seccionesModulo1=new Set(['e1','e2','e3','e4','e5','e6','e7','e8','e9','e10','e11','e12','e13','autoevaluacion']);
const seccionesModulo2=new Set(['e14','e15','e16','e17','e18','e19','e20','e21','e22','e23','autoevaluacion-u3']);
const seccionesModulo3=new Set(['e24','e25','e26','e27','e28','e29','e30','e31','e32','e33','autoevaluacion-u4']);
const seccionesModulo4=new Set(['e34','e35','e36','e37','e38','e39','e40','e41','e42','e43','e44','e45','e46','e47','e48','autoevaluacion-u5']);
let modulo1Desbloqueado=localStorage.getItem('acd-modulo-1-desbloqueado')==='si';
let modulo2Desbloqueado=localStorage.getItem('acd-modulo-2-desbloqueado')==='si';
let modulo3Desbloqueado=localStorage.getItem('acd-modulo-3-desbloqueado')==='si';
let modulo4Desbloqueado=localStorage.getItem('acd-modulo-4-desbloqueado')==='si';
function setModuloAbierto(numero,abierto){const boton=$(`[data-modulo-toggle="${numero}"]`),contenido=$(`#menu-modulo-${numero}`);if(!boton||!contenido)return;boton.setAttribute('aria-expanded',String(abierto));contenido.classList.toggle('oculto',!abierto);$('.icono-plegado',boton).textContent=abierto?'▾':'▸'}
function actualizarBloqueoModulo1(){const boton=$('[data-modulo-toggle="1"]'),candado=$('.candado-modulo',boton),desbloqueo=$('#desbloqueo-modulo-1'),estaciones=$('#estaciones-modulo-1');boton.classList.toggle('bloqueado',!modulo1Desbloqueado);candado.textContent=modulo1Desbloqueado?'':'🔒';desbloqueo.classList.toggle('oculto',modulo1Desbloqueado);estaciones.classList.toggle('oculto',!modulo1Desbloqueado);if($('#texto-progreso'))actualizarProgreso()}
function actualizarBloqueoModulo2(){const boton=$('[data-modulo-toggle="2"]'),candado=$('.candado-modulo',boton),desbloqueo=$('#desbloqueo-modulo-2'),estaciones=$('#estaciones-modulo-2');boton.classList.toggle('bloqueado',!modulo2Desbloqueado);candado.textContent=modulo2Desbloqueado?'':'🔒';desbloqueo.classList.toggle('oculto',modulo2Desbloqueado);estaciones.classList.toggle('oculto',!modulo2Desbloqueado);if($('#texto-progreso'))actualizarProgreso()}
function actualizarBloqueoModulo3(){const boton=$('[data-modulo-toggle="3"]'),candado=$('.candado-modulo',boton),desbloqueo=$('#desbloqueo-modulo-3'),estaciones=$('#estaciones-modulo-3');boton.classList.toggle('bloqueado',!modulo3Desbloqueado);candado.textContent=modulo3Desbloqueado?'':'🔒';desbloqueo.classList.toggle('oculto',modulo3Desbloqueado);estaciones.classList.toggle('oculto',!modulo3Desbloqueado);if($('#texto-progreso'))actualizarProgreso()}
actualizarBloqueoModulo1();
actualizarBloqueoModulo2();
actualizarBloqueoModulo3();
function actualizarBloqueoModulo4(){const boton=$('[data-modulo-toggle="4"]'),candado=$('.candado-modulo',boton),desbloqueo=$('#desbloqueo-modulo-4'),estaciones=$('#estaciones-modulo-4');if(!boton)return;boton.classList.toggle('bloqueado',!modulo4Desbloqueado);candado.textContent=modulo4Desbloqueado?'':'🔒';desbloqueo.classList.toggle('oculto',modulo4Desbloqueado);estaciones.classList.toggle('oculto',!modulo4Desbloqueado);if($('#texto-progreso'))actualizarProgreso()}
actualizarBloqueoModulo4();
$$('[data-modulo-toggle]').forEach(b=>b.addEventListener('click',()=>{const n=b.dataset.moduloToggle;setModuloAbierto(n,b.getAttribute('aria-expanded')!=='true')}));
$('#desbloquear-modulo-1').addEventListener('click',()=>{const entrada=$('#clave-modulo-1'),mensaje=$('#mensaje-clave-modulo-1');if(entrada.value.trim().toUpperCase()===CLAVE_MODULO_1){modulo1Desbloqueado=true;localStorage.setItem('acd-modulo-1-desbloqueado','si');entrada.value='';mensaje.textContent='Módulo habilitado en este navegador.';mensaje.className='mensaje-clave correcto';actualizarBloqueoModulo1();setModuloAbierto('1',true)}else{mensaje.textContent='La clave no coincide. Revisala e intentá nuevamente.';mensaje.className='mensaje-clave incorrecto'}});
$('#clave-modulo-1').addEventListener('keydown',e=>{if(e.key==='Enter'){$('#desbloquear-modulo-1').click()}});
$('#desbloquear-modulo-2').addEventListener('click',()=>{const entrada=$('#clave-modulo-2'),mensaje=$('#mensaje-clave-modulo-2');if(entrada.value.trim().toUpperCase()===CLAVE_MODULO_2){modulo2Desbloqueado=true;localStorage.setItem('acd-modulo-2-desbloqueado','si');entrada.value='';mensaje.textContent='Módulo habilitado en este navegador.';mensaje.className='mensaje-clave correcto';actualizarBloqueoModulo2();setModuloAbierto('2',true)}else{mensaje.textContent='La clave no coincide. Revisala e intentá nuevamente.';mensaje.className='mensaje-clave incorrecto'}});
$('#clave-modulo-2').addEventListener('keydown',e=>{if(e.key==='Enter'){$('#desbloquear-modulo-2').click()}});
$('#desbloquear-modulo-3').addEventListener('click',()=>{const entrada=$('#clave-modulo-3'),mensaje=$('#mensaje-clave-modulo-3');if(entrada.value.trim().toUpperCase()===CLAVE_MODULO_3){modulo3Desbloqueado=true;localStorage.setItem('acd-modulo-3-desbloqueado','si');entrada.value='';mensaje.textContent='Módulo habilitado en este navegador.';mensaje.className='mensaje-clave correcto';actualizarBloqueoModulo3();setModuloAbierto('3',true)}else{mensaje.textContent='La clave no coincide. Revisala e intentá nuevamente.';mensaje.className='mensaje-clave incorrecto'}});
$('#clave-modulo-3').addEventListener('keydown',e=>{if(e.key==='Enter'){$('#desbloquear-modulo-3').click()}});
$('#desbloquear-modulo-4').addEventListener('click',()=>{const entrada=$('#clave-modulo-4'),mensaje=$('#mensaje-clave-modulo-4');if(entrada.value.trim().toUpperCase()===CLAVE_MODULO_4){modulo4Desbloqueado=true;localStorage.setItem('acd-modulo-4-desbloqueado','si');entrada.value='';mensaje.textContent='Módulo habilitado en este navegador.';mensaje.className='mensaje-clave correcto';actualizarBloqueoModulo4();setModuloAbierto('4',true)}else{mensaje.textContent='La clave no coincide. Revisala e intentá nuevamente.';mensaje.className='mensaje-clave incorrecto'}});
$('#clave-modulo-4').addEventListener('keydown',e=>{if(e.key==='Enter')$('#desbloquear-modulo-4').click()});
function mostrar(id){if(seccionesModulo4.has(id)&&!modulo4Desbloqueado){setModuloAbierto('1',false);setModuloAbierto('2',false);setModuloAbierto('3',false);setModuloAbierto('4',true);$('#clave-modulo-4').focus();return}if(seccionesModulo1.has(id)&&!modulo1Desbloqueado){setModuloAbierto('2',false);setModuloAbierto('3',false);setModuloAbierto('1',true);$('#clave-modulo-1').focus();return}if(seccionesModulo2.has(id)&&!modulo2Desbloqueado){setModuloAbierto('1',false);setModuloAbierto('3',false);setModuloAbierto('2',true);$('#clave-modulo-2').focus();return}if(seccionesModulo3.has(id)&&!modulo3Desbloqueado){setModuloAbierto('1',false);setModuloAbierto('2',false);setModuloAbierto('3',true);$('#clave-modulo-3').focus();return}if(seccionesModulo4.has(id)){setModuloAbierto('1',false);setModuloAbierto('2',false);setModuloAbierto('3',false);setModuloAbierto('4',true)}else if(seccionesModulo3.has(id)){setModuloAbierto('1',false);setModuloAbierto('2',false);setModuloAbierto('3',true);setModuloAbierto('4',false)}else if(seccionesModulo2.has(id)){setModuloAbierto('1',false);setModuloAbierto('2',true);setModuloAbierto('3',false)}else if(seccionesModulo1.has(id)){setModuloAbierto('1',true);setModuloAbierto('2',false);setModuloAbierto('3',false)}secciones.forEach(s=>s.classList.toggle('visible',s.id===id));navItems.forEach(b=>b.classList.toggle('activo',b.dataset.seccion===id));if(/^e\d+$/.test(id)){visitadas.add(id);localStorage.setItem('acd-v5-visitadas',JSON.stringify([...visitadas]));actualizarProgreso()}history.replaceState(null,'','#'+id);$('#contenido').focus({preventScroll:true});window.scrollTo({top:0,behavior:'smooth'});$('#navegacion').classList.remove('abierto')}
navItems.forEach(b=>b.addEventListener('click',()=>mostrar(b.dataset.seccion)));$$('[data-destino]').forEach(b=>b.addEventListener('click',()=>mostrar(b.dataset.destino)));$$('[data-seccion-directa]').forEach(b=>b.addEventListener('click',()=>mostrar(b.dataset.seccionDirecta)));
function actualizarProgreso(){const disponibles=new Set();if(modulo1Desbloqueado)for(let i=1;i<=13;i++)disponibles.add(`e${i}`);if(modulo2Desbloqueado)for(let i=14;i<=23;i++)disponibles.add(`e${i}`);if(modulo3Desbloqueado)for(let i=24;i<=33;i++)disponibles.add(`e${i}`);if(modulo4Desbloqueado)for(let i=34;i<=48;i++)disponibles.add(`e${i}`);const total=disponibles.size;const n=[...visitadas].filter(x=>disponibles.has(x)).length;$('#texto-progreso').textContent=total?`${n} de ${total} estaciones disponibles visitadas`:'0 estaciones disponibles · desbloqueá un módulo para comenzar';$('#barra-progreso').style.width=total?`${n/total*100}%`:'0%'}actualizarProgreso();
$('#boton-menu').addEventListener('click',()=>{const n=$('#navegacion');n.classList.toggle('abierto');$('#boton-menu').setAttribute('aria-expanded',n.classList.contains('abierto'))});$('#boton-imprimir').addEventListener('click',()=>window.print());
$$('.comprobar').forEach(btn=>btn.addEventListener('click',()=>{const act=btn.closest('.actividad');const elegido=$('input[type=radio]:checked',act);const m=$('.mensaje',act);const devolucion=$('.devolucion-conceptual.oculto',act);if(!elegido){m.textContent='Seleccioná una opción antes de comprobar.';m.className='mensaje incorrecto';return}if(elegido.value===btn.dataset.correcta){m.textContent='Correcto. La elección está bien fundamentada.';m.className='mensaje correcto';if(devolucion)devolucion.classList.remove('oculto')}else{m.textContent=act.dataset.id==='e18-cond'?'Revisá cuál es el grupo que la frase “entre quienes…” toma como referencia y volvé a intentarlo.':'Revisá la explicación de la estación y volvé a intentarlo.';m.className='mensaje incorrecto'}}));$$('.pista').forEach(b=>b.addEventListener('click',()=>$('.contenido-pista',b.closest('.actividad')).classList.toggle('oculto')));
const etapas={problema:['Problema','¿Qué queremos comprender? ¿Cuál es la pregunta concreta y por qué importa?'],plan:['Plan','¿Qué unidades observaremos? ¿Qué variables registraremos? ¿Cómo seleccionaremos los casos?'],datos:['Datos','¿Cómo se obtendrán, registrarán y revisarán los datos? ¿Hay faltantes, errores o unidades inconsistentes?'],analisis:['Análisis','¿Qué tablas, gráficos y medidas responden a la pregunta? ¿Qué patrones o diferencias aparecen?'],conclusiones:['Conclusiones','¿Qué aprendimos, con qué límites y cómo lo comunicaremos? ¿Qué nuevas preguntas surgen?']};
$$('.nodo-ppdac').forEach(n=>{const activar=()=>{$$('.nodo-ppdac').forEach(x=>x.classList.remove('activo'));n.classList.add('activo');const [t,p]=etapas[n.dataset.etapa];$('#panel-ppdac').innerHTML=`<h3>${t}</h3><p>${p}</p>`};n.addEventListener('click',activar);n.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();activar()}})});
$('#comprobar-e3').addEventListener('click',()=>{const campos=[['e3p','a','La población es el conjunto completo: todas las aulas de la universidad.'],['e3m','a','La muestra son las 60 aulas efectivamente seleccionadas.'],['e3u','a','La unidad estadística es cada aula observada.']];let ok=true;campos.forEach(([id,correcta,texto])=>{const bien=$('#'+id).value===correcta;ok=ok&&bien;const r=$('#retro-'+id);r.textContent=bien?'✓ '+texto:'Revisá esta elección.';r.className='retro-campo '+(bien?'correcto':'incorrecto')});const m=$('#mensaje-e3');m.textContent=ok?'Correcto: población, muestra y unidad estadística quedaron diferenciadas.':'Hay al menos una elección para revisar.';m.className='mensaje '+(ok?'correcto':'incorrecto')});
$('#comprobar-e6').addEventListener('click',()=>{let v=$('#e6resp').value.trim().replace(',','.').replace('%','');let n=parseFloat(v);let ok=Math.abs(n-.30)<.001||Math.abs(n-30)<.001;const m=$('#mensaje-e6');m.textContent=ok?'Correcto: 12/40 = 0,30 = 30%.':'La frecuencia relativa se calcula como 12/40.';m.className='mensaje '+(ok?'correcto':'incorrecto')});
function ejesBase(titulo,xlab,ylab){return `<text x="280" y="22" text-anchor="middle" font-size="18" font-weight="700">${titulo}</text><line x1="65" y1="270" x2="520" y2="270" stroke="#51676b"/><line x1="65" y1="40" x2="65" y2="270" stroke="#51676b"/><text x="290" y="318" text-anchor="middle">${xlab}</text><text x="18" y="155" transform="rotate(-90 18 155)" text-anchor="middle">${ylab}</text>`}
function yGrid(max,step,scale=210){let out='';for(let v=0;v<=max;v+=step){const y=270-v/max*scale;out+=`<text x="55" y="${y+5}" text-anchor="end">${v}</text><line x1="65" y1="${y}" x2="520" y2="${y}" stroke="#d9e3e4" stroke-dasharray="4 4"/>`}return out}
function svgBarras(){const vals=[6,4,3,2];return `<svg viewBox="0 0 560 370" aria-label="Distribución de los accidentes registrados según su tipo"><text x="280" y="22" text-anchor="middle" font-size="18" font-weight="700">Accidentes registrados según su tipo</text><line x1="65" y1="270" x2="520" y2="270" stroke="#51676b"/><line x1="65" y1="40" x2="65" y2="270" stroke="#51676b"/><text x="290" y="322" text-anchor="middle">Tipo de accidente</text><text x="18" y="155" transform="rotate(-90 18 155)" text-anchor="middle">Frecuencia absoluta</text>${yGrid(8,2)}${vals.map((v,i)=>`<rect x="${95+i*110}" y="${270-v/8*210}" width="70" height="${v/8*210}" rx="5" fill="#168f9c"/>`).join('')}<g text-anchor="middle" font-size="14"><text x="130" y="295">Caídas</text><text x="240" y="295">Golpes</text><text x="350" y="295">Cortes</text><text x="460" y="295">Otros</text></g><text x="280" y="354" text-anchor="middle" font-size="12">15 accidentes registrados en 5 años · datos didácticos</text></svg>`}

function svgCircular(){return `<svg viewBox="0 0 560 340" aria-label="Distribución porcentual de 15 accidentes registrados en cinco años"><text x="280" y="22" text-anchor="middle" font-size="18" font-weight="700">Accidentes registrados durante los últimos cinco años</text><circle cx="220" cy="165" r="95" fill="none" stroke="#168f9c" stroke-width="65" stroke-dasharray="319 578" transform="rotate(-90 220 165)"/><circle cx="220" cy="165" r="95" fill="none" stroke="#4b8f29" stroke-width="65" stroke-dasharray="160 737" stroke-dashoffset="-319" transform="rotate(-90 220 165)"/><circle cx="220" cy="165" r="95" fill="none" stroke="#b8d532" stroke-width="65" stroke-dasharray="119 778" stroke-dashoffset="-479" transform="rotate(-90 220 165)"/><text x="220" y="170" text-anchor="middle" font-size="22" font-weight="700">n = 15</text><g font-size="14"><rect x="370" y="105" width="16" height="16" fill="#168f9c"/><text x="395" y="118">Caídas: 8 (53,3%)</text><rect x="370" y="140" width="16" height="16" fill="#4b8f29"/><text x="395" y="153">Golpes: 4 (26,7%)</text><rect x="370" y="175" width="16" height="16" fill="#b8d532"/><text x="395" y="188">Cortes: 3 (20%)</text></g><text x="280" y="325" text-anchor="middle">Distribución de los accidentes, no indicador de riesgo por sí sola</text></svg>`}

function svgHist(){const h=[2,5,11,12,7,3],bounds=[70,75,80,85,90,95,100];return `<svg viewBox="0 0 560 330" aria-label="Histograma de niveles de ruido en dB(A)">${ejesBase('Distribución de los niveles de ruido','Nivel de ruido [dB(A)]','Frecuencia absoluta')}${yGrid(12,2)}${h.map((v,i)=>`<rect x="${85+i*70}" y="${270-v/12*210}" width="70" height="${v/12*210}" fill="#168f9c" opacity=".75"/>`).join('')}${bounds.map((v,i)=>`<text x="${85+i*70}" y="292" text-anchor="middle">${v}</text>`).join('')}</svg>`}

function svgLineas(){const a=[8,7,6,5,4,3],b=[3,4,5,4,6,7];const sx=i=>85+i*78,sy=v=>270-v/8*210;const pts=x=>x.map((v,i)=>[sx(i),sy(v)]);return `<svg viewBox="0 0 560 375" aria-label="Evolución mensual de incidentes reportados por dos plantas">${ejesBase('Evolución mensual de incidentes reportados','Mes','Cantidad de incidentes')}${yGrid(8,2)}${['Ene','Feb','Mar','Abr','May','Jun'].map((m,i)=>`<text x="${sx(i)}" y="292" text-anchor="middle">${m}</text>`).join('')}<polyline points="${pts(a).map(p=>p.join(',')).join(' ')}" fill="none" stroke="#4b8f29" stroke-width="5"/>${pts(a).map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="6" fill="#4b8f29"/>`).join('')}<polyline points="${pts(b).map(p=>p.join(',')).join(' ')}" fill="none" stroke="#168f9c" stroke-width="5"/>${pts(b).map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="6" fill="#168f9c"/>`).join('')}<g font-size="13"><line x1="165" y1="350" x2="205" y2="350" stroke="#4b8f29" stroke-width="4"/><text x="213" y="355">Planta A</text><line x1="320" y1="350" x2="360" y2="350" stroke="#168f9c" stroke-width="4"/><text x="368" y="355">Planta B</text></g></svg>`}

function svgDispersion(data){return `<svg viewBox="0 0 560 330" aria-label="Nube de puntos de dos variables cuantitativas">${ejesBase('Relación entre dos variables cuantitativas','Variable X','Variable Y')}${[0,2,4,6,8,10].map((v,i)=>`<text x="${65+i*91}" y="292" text-anchor="middle">${v}</text>`).join('')}${[0,2,4,6,8,10].map((v,i)=>`<text x="55" y="${270-i*42+5}" text-anchor="end">${v}</text><line x1="65" y1="${270-i*42}" x2="520" y2="${270-i*42}" stroke="#d9e3e4" stroke-dasharray="4 4"/>`).join('')}${data.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="7" fill="#168f9c" opacity=".8"/>`).join('')}</svg>`}

function svgBarrasApiladas(){const datos=[[105,92],[245,85],[385,70]];return `<svg viewBox="0 0 560 380" aria-label="Trabajadores con capacitación obligatoria vigente por sector">${ejesBase('Capacitación obligatoria vigente por sector','Sector','Porcentaje de trabajadores')}${[0,25,50,75,100].map((v,i)=>`<text x="55" y="${270-i*55+5}" text-anchor="end">${v}%</text><line x1="65" y1="${270-i*55}" x2="520" y2="${270-i*55}" stroke="#d9e3e4"/>`).join('')}${datos.map(([x,p])=>`<rect x="${x}" y="${270-p*2.2}" width="85" height="${p*2.2}" fill="#168f9c"/><rect x="${x}" y="50" width="85" height="${(100-p)*2.2}" fill="#b8d532"/>`).join('')}<g text-anchor="middle"><text x="147" y="295">Producción</text><text x="287" y="295">Mantenimiento</text><text x="427" y="295">Oficinas</text></g><g font-size="13"><rect x="145" y="345" width="16" height="16" fill="#168f9c"/><text x="168" y="358">Con capacitación vigente</text><rect x="355" y="345" width="16" height="16" fill="#b8d532"/><text x="378" y="358">Pendiente</text></g></svg>`}

function svgPictograma(){const filas=[['Producción',6,80],['Mantenimiento',5,155],['Oficinas',4,230]];return `<svg viewBox="0 0 560 340" aria-label="Trabajadores que completaron la capacitación obligatoria anual"><text x="280" y="25" text-anchor="middle" font-size="18" font-weight="700">Capacitación obligatoria anual completada</text>${filas.map(([n,c,y])=>`<text x="55" y="${y+5}">${n}</text>${Array.from({length:c},(_,i)=>`<g transform="translate(${180+i*55} ${y-28})"><circle cx="20" cy="15" r="10" fill="#168f9c"/><path d="M8 52 q12-26 24 0z" fill="#4b8f29"/></g>`).join('')}`).join('')}<text x="280" y="315" text-anchor="middle">Cada ícono representa 5 trabajadores</text></svg>`}

function svgPoligono(){const h=[2,5,11,12,7,3],marks=[72.5,77.5,82.5,87.5,92.5,97.5],sx=v=>65+(v-67.5)/35*455,sy=v=>270-v/12*210;const pts=[[67.5,0],...marks.map((m,i)=>[m,h[i]]),[102.5,0]];return `<svg viewBox="0 0 560 330" aria-label="Polígono de frecuencias cerrado sobre el eje horizontal">${ejesBase('Polígono de frecuencias sobre el histograma','Marca de clase [dB(A)]','Frecuencia absoluta')}${yGrid(12,2)}${h.map((v,i)=>`<rect x="${sx(70+i*5)}" y="${sy(v)}" width="${sx(75)-sx(70)}" height="${270-sy(v)}" fill="#168f9c" opacity=".18"/>`).join('')}<polyline points="${pts.map(([x,y])=>`${sx(x)},${sy(y)}`).join(' ')}" fill="none" stroke="#168f9c" stroke-width="5"/>${marks.map((m,i)=>`<circle cx="${sx(m)}" cy="${sy(h[i])}" r="6" fill="#168f9c"/>`).join('')}${[67.5,72.5,77.5,82.5,87.5,92.5,97.5,102.5].map(v=>`<text x="${sx(v)}" y="292" text-anchor="middle" font-size="12">${String(v).replace('.',',')}</text>`).join('')}</svg>`}

function svgOjiva(){const xs=[70,75,80,85,90,95,100],vals=[0,5,17.5,45,75,92.5,100],sx=v=>65+(v-70)/30*455,sy=v=>270-v*2.1;return `<svg viewBox="0 0 560 330" aria-label="Ojiva de porcentajes acumulados de niveles de ruido">${ejesBase('Porcentaje acumulado de niveles de ruido','Límite superior del intervalo [dB(A)]','Porcentaje acumulado')}${[0,20,40,60,80,100].map((v,i)=>`<text x="55" y="${270-i*42+5}" text-anchor="end">${v}%</text><line x1="65" y1="${270-i*42}" x2="520" y2="${270-i*42}" stroke="#d9e3e4" stroke-dasharray="4 4"/>`).join('')}${xs.map(v=>`<text x="${sx(v)}" y="292" text-anchor="middle">${v}</text>`).join('')}<polyline points="${xs.map((x,i)=>`${sx(x)},${sy(vals[i])}`).join(' ')}" fill="none" stroke="#4b8f29" stroke-width="5"/>${xs.map((x,i)=>`<circle cx="${sx(x)}" cy="${sy(vals[i])}" r="6" fill="#4b8f29"/>`).join('')}</svg>`}

function svgEscalonado(){const xs=[0,1,2,3],F=[4,11,17,20],sx=x=>105+x*120,sy=v=>270-v/20*210;let path=`M65 ${sy(0)} H${sx(0)} V${sy(F[0])}`;for(let i=0;i<xs.length-1;i++)path+=` H${sx(xs[i+1])} V${sy(F[i+1])}`;path+=` H520`;return `<svg viewBox="0 0 560 330">${ejesBase('Frecuencia acumulada de observaciones preventivas','Cantidad de observaciones preventivas','Frecuencia absoluta acumulada')}${[0,5,10,15,20].map((v,i)=>`<text x="55" y="${270-i*52.5+5}" text-anchor="end">${v}</text><line x1="65" y1="${270-i*52.5}" x2="520" y2="${270-i*52.5}" stroke="#d9e3e4" stroke-dasharray="4 4"/>`).join('')}${[0,1,2,3].map(x=>`<text x="${sx(x)}" y="292" text-anchor="middle">${x}</text>`).join('')}<path d="${path}" fill="none" stroke="#168f9c" stroke-width="5"/></svg>`}
function svgDispersionObservada(){const datos=[[1,54],[2,61],[3,58],[4,67],[5,72],[6,69],[7,79],[8,76],[9,86],[10,82],[11,91],[12,88]],sx=v=>85+(v-1)/11*390,sy=v=>270-(v-50)/45*210;return `<svg viewBox="0 0 560 350" aria-label="Nube de puntos observada entre horas de capacitación y puntaje obtenido"><text x="280" y="22" text-anchor="middle" font-size="18" font-weight="700">Horas de capacitación y puntaje obtenido</text><line x1="65" y1="270" x2="520" y2="270" stroke="#51676b"/><line x1="65" y1="40" x2="65" y2="270" stroke="#51676b"/><text x="290" y="318" text-anchor="middle">Horas de capacitación</text><text x="18" y="155" transform="rotate(-90 18 155)" text-anchor="middle">Puntaje obtenido</text>${[1,2,3,4,5,6,7,8,9,10,11,12].map(v=>`<text x="${sx(v)}" y="292" text-anchor="middle">${v}</text>`).join('')}${[50,60,70,80,90].map(v=>`<text x="55" y="${sy(v)+5}" text-anchor="end">${v}</text><line x1="65" y1="${sy(v)}" x2="520" y2="${sy(v)}" stroke="#d9e3e4" stroke-dasharray="4 4"/>`).join('')}${datos.map(([x,y])=>`<circle cx="${sx(x)}" cy="${sy(y)}" r="7" fill="#168f9c" opacity=".82"/>`).join('')}<text x="280" y="342" text-anchor="middle" font-size="12">Cada punto representa un trabajador · datos didácticos</text></svg>`}

const infoGraficos={
barras:['Gráfico de barras','Representa frecuencias simples de una variable cualitativa o discreta. En este ejemplo se comparan tipos de accidentes de trabajo.'],
barras_apiladas:['Barras subdivididas al 100%','Comparan la composición interna de varios grupos mediante porcentajes.'],
circular:['Gráfico circular','Muestra partes de un total cuando hay pocas categorías excluyentes.'],
pictograma:['Pictograma','Comunica recuentos mediante íconos; siempre debe indicarse cuántas unidades representa cada figura.'],
histograma:['Histograma','Representa frecuencias simples de una variable cuantitativa continua agrupada. Las barras son contiguas.'],
poligono:['Polígono de frecuencias','Se obtiene uniendo las frecuencias en las marcas de clase; se muestra sobre el histograma para hacer visible su construcción.'],
ojiva:['Ojiva','Representa frecuencias acumuladas de una variable cuantitativa continua agrupada; cada punto se ubica en el límite superior del intervalo.'],
escalonado:['Gráfico escalonado','Representa frecuencias acumuladas de una variable cuantitativa discreta. Comienza en cero y salta en cada valor observado.'],
lineas:['Gráfico de líneas','Permite comparar tendencias en períodos ordenados. Las dos plantas muestran comportamientos diferentes y sus líneas se cruzan.'],
dispersion:['Diagrama de dispersión','Cada punto representa un trabajador. En el eje horizontal se muestran las horas de capacitación recibidas y en el vertical, el puntaje obtenido en una evaluación posterior. La nube permite reconocer una asociación lineal positiva, aunque no perfecta. Esto no demuestra por sí solo una relación de causa y efecto.']};
const graficos={barras:svgBarras,barras_apiladas:svgBarrasApiladas,circular:svgCircular,pictograma:svgPictograma,histograma:svgHist,poligono:svgPoligono,ojiva:svgOjiva,escalonado:svgEscalonado,lineas:svgLineas,dispersion:svgDispersionObservada};
function renderGrafico(){const v=$('#situacion-grafico').value;const [t,d]=infoGraficos[v];$('#explicacion-grafico').innerHTML=`<h3>${t}</h3><p>${d}</p>`;$('#grafico-elegido').innerHTML=graficos[v]()}$('#situacion-grafico').addEventListener('change',renderGrafico);renderGrafico();
function renderSimetria(){const grupos=[{t:'Asimétrica a izquierda',h:[1,2,3,5,8,11,13,10,6]},{t:'Aproximadamente simétrica',h:[2,4,7,11,14,11,7,4,2]},{t:'Asimétrica a derecha',h:[6,10,13,11,8,5,3,2,1]}];$('#visual-simetria').innerHTML=`<svg viewBox="0 0 900 285" aria-label="Histogramas con asimetría a izquierda, simetría y asimetría a derecha">${grupos.map((g,k)=>{const x0=35+k*295,w=26,base=220;const bars=g.h.map((v,i)=>`<rect x="${x0+i*w}" y="${base-v*10}" width="${w}" height="${v*10}" fill="#168f9c" opacity=".25"/>`).join('');const curvePts=[`${x0-w/2},${base}`,...g.h.map((v,i)=>`${x0+w/2+i*w},${base-v*10}`),`${x0+g.h.length*w+w/2},${base}`].join(' ');return `<line x1="${x0-w/2}" y1="${base}" x2="${x0+g.h.length*w+w/2}" y2="${base}" stroke="#51676b"/>${bars}<polyline points="${curvePts}" fill="none" stroke="#168f9c" stroke-width="4" stroke-linejoin="round"/><text x="${x0+117}" y="255" text-anchor="middle" font-weight="700">${g.t}</text>`}).join('')}</svg>`}renderSimetria();
function mediana(a){const b=[...a].sort((x,y)=>x-y),n=b.length;return n%2?b[(n-1)/2]:(b[n/2-1]+b[n/2])/2}function moda(a){const f={};a.forEach(x=>f[x]=(f[x]||0)+1);const m=Math.max(...Object.values(f));return Object.keys(f).filter(k=>f[k]===m).join(' y ')}function actCentro(){const x=+$('#valor-extremo').value;const a=[18,19,20,20,20,21,22,23,24,x];const media=a.reduce((s,v)=>s+v,0)/a.length;$('#datos-centro').textContent='Datos: '+a.join(', ');$('#media-centro').textContent=media.toFixed(1).replace('.',',');$('#mediana-centro').textContent=mediana(a).toFixed(1).replace('.',',');$('#moda-centro').textContent=moda(a);$('#interpretacion-centro').textContent=x>35?'El extremo desplaza la media; mediana y moda permanecen estables.':'Sin un extremo marcado, las tres medidas resultan más próximas.'}$('#valor-extremo').addEventListener('input',actCentro);actCentro();
function renderDisp(){const a=[38,39,40,40,41,42,42],b=[25,32,39,40,41,48,55];const scale=x=>70+(x-20)*9;const dots=(arr,y,c)=>arr.map(x=>`<circle cx="${scale(x)}" cy="${y}" r="8" fill="${c}"/>`).join('');$('#comparador-dispersion').innerHTML=`<svg viewBox="0 0 560 270"><text x="280" y="24" text-anchor="middle" font-size="18" font-weight="700">Tiempos de evacuación por planta</text><line x1="70" y1="215" x2="500" y2="215" stroke="#51676b"/>${[20,30,40,50,60].map(x=>`<text x="${scale(x)}" y="240" text-anchor="middle">${x}</text>`).join('')}<text x="285" y="260" text-anchor="middle">Tiempo de evacuación (s)</text><text x="18" y="75">Planta A</text><text x="18" y="155">Planta B</text>${dots(a,70,'#168f9c')}${dots(b,150,'#4b8f29')}<line x1="${scale(40.3)}" y1="40" x2="${scale(40.3)}" y2="180" stroke="#b8d532" stroke-width="4" stroke-dasharray="7 5"/></svg><p>Las medias son semejantes, pero la Planta B presenta mucha mayor dispersión.</p>`}renderDisp();
const boxData=[12,14,15,16,17,18,19,20,22,24,42];function renderBox(paso){const min=10,max=45,sc=x=>45+(x-min)/(max-min)*490;const q1=15.5,med=18,q3=22,ric=q3-q1,li=q1-1.5*ric,ls=q3+1.5*ric,whL=12,whR=24;let content=`<line x1="45" y1="220" x2="535" y2="220" stroke="#51676b"/>${[10,15,20,25,30,35,40,45].map(x=>`<text x="${sc(x)}" y="245" text-anchor="middle">${x}</text>`).join('')}`;if(paso>=1)content+=boxData.map((x,i)=>`<circle cx="${sc(x)}" cy="175" r="6" fill="#168f9c"/><text x="${sc(x)}" y="160" text-anchor="middle" font-size="11">${x}</text>`).join('');if(paso===2)content+=`<line x1="${sc(q1)}" y1="80" x2="${sc(q1)}" y2="205" stroke="#4b8f29" stroke-width="3"/><line x1="${sc(med)}" y1="65" x2="${sc(med)}" y2="205" stroke="#b8d532" stroke-width="4"/><line x1="${sc(q3)}" y1="80" x2="${sc(q3)}" y2="205" stroke="#4b8f29" stroke-width="3"/><text x="${sc(q1)}" y="55" text-anchor="middle">Q1</text><text x="${sc(med)}" y="40" text-anchor="middle">Mediana</text><text x="${sc(q3)}" y="55" text-anchor="middle">Q3</text>`;if(paso>=3)content+=`<rect x="${sc(q1)}" y="95" width="${sc(q3)-sc(q1)}" height="70" fill="#bfe5df" stroke="#168f9c" stroke-width="3"/><line x1="${sc(med)}" y1="95" x2="${sc(med)}" y2="165" stroke="#4b8f29" stroke-width="5"/>`;if(paso>=4)content+=`<line x1="${sc(whL)}" y1="130" x2="${sc(q1)}" y2="130" stroke="#20343a" stroke-width="3"/><line x1="${sc(q3)}" y1="130" x2="${sc(whR)}" y2="130" stroke="#20343a" stroke-width="3"/><line x1="${sc(whL)}" y1="110" x2="${sc(whL)}" y2="150" stroke="#20343a" stroke-width="3"/><line x1="${sc(whR)}" y1="110" x2="${sc(whR)}" y2="150" stroke="#20343a" stroke-width="3"/><circle cx="${sc(42)}" cy="130" r="8" fill="#d58b36"/><text x="${sc(42)}" y="105" text-anchor="middle">posible atípico</text>`;$('#boxplot-svg').innerHTML=`<svg viewBox="0 0 580 270">${content}</svg>`;const textos={1:'Primero se ordenan los datos. El orden es indispensable para localizar mediana y cuartiles.',2:'Se identifican Q1, mediana y Q3. Estos tres valores dividen la distribución ordenada.',3:`La caja va de Q1 a Q3. Su longitud es RIC = ${ric.toFixed(1).replace('.',',')}.`,4:`Los límites internos son ${li.toFixed(2).replace('.',',')} y ${ls.toFixed(2).replace('.',',')}. Los bigotes terminan en 12 y 24, que son los datos no atípicos más extremos. El valor 42 queda fuera del límite superior y se dibuja por separado.`};$('#texto-boxplot').textContent=textos[paso]}
$$('.paso-box').forEach(b=>b.addEventListener('click',()=>{$$('.paso-box').forEach(x=>x.classList.remove('activo'));b.classList.add('activo');renderBox(+b.dataset.paso)}));renderBox(1);
function actZ(){const x=+$ ('#zx').value,m=+$ ('#zmedia').value,s=+$ ('#zdesvio').value;const z=(x-m)/s;$('#zresultado').textContent=z.toFixed(2).replace('.',',');$('#zinterpretacion').textContent=`El valor está ${Math.abs(z).toFixed(2).replace('.',',')} desvíos ${z>=0?'por encima':'por debajo'} de la media.`}['zx','zmedia','zdesvio'].forEach(id=>$('#'+id).addEventListener('input',actZ));actZ();
const corrData={positiva:[[80,245],[125,230],[165,210],[210,190],[255,165],[305,150],[350,125],[400,100],[455,75],[500,55]],positiva_mod:[[80,230],[125,205],[170,220],[215,170],[260,185],[305,130],[350,145],[400,105],[455,120],[500,70]],positiva_debil:[[80,225],[125,170],[170,235],[215,160],[260,195],[305,125],[350,185],[400,115],[455,160],[500,95]],negativa:[[80,60],[125,80],[170,100],[215,120],[260,145],[310,165],[355,190],[405,210],[455,230],[500,250]],negativa_mod:[[80,85],[125,125],[170,100],[215,155],[260,135],[305,185],[350,165],[400,215],[455,195],[500,245]],negativa_debil:[[80,110],[125,175],[170,100],[215,195],[260,145],[305,220],[350,155],[400,230],[455,185],[500,245]],nula:[[80,180],[125,100],[170,230],[215,135],[260,205],[305,85],[350,220],[400,120],[455,195],[500,105]],curva:[[80,80],[120,120],[160,165],[205,205],[250,235],[300,245],[350,230],[400,200],[455,150],[500,85]],atipico:[[80,240],[125,225],[170,205],[215,185],[260,165],[305,145],[350,125],[400,105],[455,85],[500,255]]};
const corrText={positiva:'Dirección directa (positiva), forma aproximadamente lineal e intensidad fuerte.',positiva_mod:'Dirección directa (positiva), forma aproximadamente lineal e intensidad moderada.',positiva_debil:'Dirección directa (positiva), pero la nube es dispersa: intensidad débil.',negativa:'Relación lineal inversa fuerte: al aumentar una variable, la otra tiende a disminuir.',negativa_mod:'Relación lineal inversa moderada: la tendencia descendente es visible, aunque existe dispersión.',negativa_debil:'Relación lineal inversa débil: la tendencia es descendente, pero poco marcada.',nula:'No se observa una relación lineal apreciable. Esto no permite afirmar independencia en todo sentido.',curva:'Existe una relación clara, pero no lineal. El coeficiente de Pearson puede ser cercano a cero.',atipico:'Un único punto alejado puede modificar mucho el coeficiente. Siempre hay que mirar el gráfico.'};
function renderCorr(){const v=$('#patron-correlacion').value;$('#grafico-correlacion').innerHTML=svgDispersion(corrData[v]);$('#texto-correlacion').innerHTML=`<h3>${$('#patron-correlacion option:checked').textContent}</h3><p>${corrText[v]}</p>`}$('#patron-correlacion').addEventListener('change',renderCorr);renderCorr();
function arbolMaquinas(){const el=$('#arbol-maquinas');if(!el)return;el.innerHTML=`<p class="nota arbol-leyenda"><strong>Lectura:</strong> el valor entre paréntesis indica la probabilidad correspondiente a esa rama.</p><svg viewBox="0 0 700 430" role="img" aria-label="Tres ramas para M1, M2 y M3, cada una dividida en defectuoso y no defectuoso, con la probabilidad conjunta calculada al final de cada camino"><g class="ramas"><path d="M55 215 L245 75 M55 215 L245 215 M55 215 L245 355"/><path d="M245 75 L500 45 M245 75 L500 115 M245 215 L500 185 M245 215 L500 255 M245 355 L500 325 M245 355 L500 395"/></g><g class="nodos"><circle cx="55" cy="215" r="9"/><circle cx="245" cy="75" r="8"/><circle cx="245" cy="215" r="8"/><circle cx="245" cy="355" r="8"/></g><g class="etiquetas"><text x="145" y="125">M1 (0,50)</text><text x="145" y="205">M2 (0,30)</text><text x="145" y="315">M3 (0,20)</text><text x="355" y="48">D (0,03)</text><text x="355" y="112">No D (0,97)</text><text x="355" y="188">D (0,04)</text><text x="355" y="252">No D (0,96)</text><text x="355" y="328">D (0,05)</text><text x="355" y="392">No D (0,95)</text><text class="resultado" x="520" y="48">0,015</text><text class="resultado" x="520" y="112">0,485</text><text class="resultado" x="520" y="188">0,012</text><text class="resultado" x="520" y="252">0,288</text><text class="resultado" x="520" y="328">0,010</text><text class="resultado" x="520" y="392">0,190</text></g></svg>`}arbolMaquinas();
function arbolTest(){const el=$('#arbol-test');if(!el)return;el.innerHTML=`<p class="nota arbol-leyenda"><strong>Lectura:</strong> el valor entre paréntesis indica la probabilidad de esa rama.</p><svg viewBox="0 0 700 360" role="img" aria-label="Árbol con presencia o ausencia de concentración peligrosa y activación o no de la alarma"><g class="ramas"><path d="M55 180 L250 95 M55 180 L250 275"/><path d="M250 95 L500 55 M250 95 L500 135 M250 275 L500 235 M250 275 L500 315"/></g><g class="nodos"><circle cx="55" cy="180" r="9"/><circle cx="250" cy="95" r="8"/><circle cx="250" cy="275" r="8"/></g><g class="etiquetas"><text x="140" y="120">G (0,01)</text><text x="140" y="255">No G (0,99)</text><text x="360" y="58">A (0,99)</text><text x="360" y="132">No A (0,01)</text><text x="360" y="238">A (0,01)</text><text x="360" y="312">No A (0,99)</text><text class="resultado" x="520" y="58">0,0099</text><text class="resultado" x="520" y="138">0,0001</text><text class="resultado" x="520" y="238">0,0099</text><text class="resultado" x="520" y="318">0,9801</text></g></svg>`}arbolTest();

if($('#comprobar-e25-va'))$('#comprobar-e25-va').addEventListener('click',()=>{const r=$('input[name=e25va]:checked'),m=$('#mensaje-e25-va');if(!r){m.textContent='Seleccioná una opción antes de comprobar.';m.className='mensaje incorrecto';return}const ok=r.value==='c';m.textContent=ok?'Correcto. La concentración es una variable continua: puede tomar valores reales dentro de un intervalo.':'Revisá qué valores puede tomar la concentración, no cuántas unidades se observan ni con qué instrumento se mide.';m.className='mensaje '+(ok?'correcto':'incorrecto')});
if($('#comprobar-e26'))$('#comprobar-e26').addEventListener('click',()=>{const entrada=$('#respuesta-e26'),m=$('#mensaje-e26');const v=parseFloat(entrada.value.trim().replace(',','.').replace('%',''));const ok=Math.abs(v-.69)<.001||Math.abs(v-69)<.001;m.textContent=ok?'Correcto: “como máximo uno” incluye X=0 y X=1, por lo que 0,25 + 0,44 = 0,69.':'“Como máximo uno” incluye los valores 0 y 1. Sumá las probabilidades correspondientes.';m.className='mensaje '+(ok?'correcto':'incorrecto')});
if($('#comprobar-e27'))$('#comprobar-e27').addEventListener('click',()=>{const elegido=document.querySelector('input[name="e27esp"]:checked'),m=$('#mensaje-e27');if(!elegido){m.textContent='Elegí una opción antes de comprobar.';m.className='mensaje incorrecto';return}const ok=elegido.value==='b';m.textContent=ok?'Correcto. La esperanza es un promedio teórico de largo plazo; no predice el valor exacto de una observación.':'Revisá la idea de largo plazo: la esperanza no indica qué ocurrirá exactamente en la próxima semana.';m.className='mensaje '+(ok?'correcto':'incorrecto')});

const glosario=[
['Población','Conjunto completo de unidades sobre las que se desea obtener información.'],
['Muestra','Subconjunto de la población efectivamente observado.'],
['Unidad estadística','Elemento individual sobre el que se registran datos.'],
['Variable','Característica que puede tomar distintos valores o categorías.'],
['Frecuencia absoluta','Cantidad de observaciones de una categoría o valor.'],
['Frecuencia relativa','Proporción de observaciones: frecuencia absoluta dividida por el total.'],
['Media muestral (\\(\\bar x\\))','Media calculada a partir de los valores observados en una muestra. En Inferencia, \\(\\bar X\\) representa el estadístico antes de observar la muestra y \\(\\bar x_{\\mathrm{obs}}\\), el valor obtenido en la muestra observada.'],
['Media poblacional (μ)','Media de los valores de una variable en toda la población. Se simboliza μ.'],
['Mediana','Valor central de los datos ordenados; coincide con el segundo cuartil (Q2) y el percentil 50.'],
['Moda','Valor o categoría de mayor frecuencia.'],
['Varianza muestral (\\(s^2\\))','Describe la dispersión de los valores observados en una muestra respecto de su media \\(\\bar x\\), utilizando los cuadrados de esas diferencias. En su cálculo se divide por \\(n-1\\), lo que permite que \\(S^2\\) sea un estimador insesgado de la varianza poblacional \\(\\sigma^2\\). Se expresa en unidades al cuadrado. Su raíz cuadrada es el desvío estándar muestral \\(s\\), que vuelve a expresarse en las unidades originales. En Inferencia, \\(S^2\\) representa el estadístico antes de observar la muestra y \\(s^2_{\\mathrm{obs}}\\), el valor calculado.'],
['Varianza poblacional (\\(\\sigma^2\\))','Describe la dispersión de los valores de toda la población respecto de la media poblacional \\(\\mu\\), utilizando los cuadrados de esas diferencias. Es un parámetro fijo, aunque generalmente desconocido, y se expresa en unidades al cuadrado. Su raíz cuadrada es el desvío estándar poblacional \\(\\sigma\\).'],
['Desvío estándar muestral (\\(s\\))','Es la raíz cuadrada de la varianza muestral. Describe cuánto se separan los valores observados en una muestra respecto de su media \\(\\bar x\\). Un \\(s\\) pequeño indica datos concentrados alrededor de \\(\\bar x\\); un \\(s\\) grande, datos más dispersos. Se expresa en las mismas unidades que la variable. En Inferencia, \\(S\\) representa el estadístico antes de observar la muestra y \\(s_{\\mathrm{obs}}\\), el valor calculado con la muestra obtenida.'],
['Desvío estándar poblacional (\\(\\sigma\\))','Es la raíz cuadrada de la varianza poblacional. Describe cuánto se separan los valores de toda la población respecto de la media poblacional \\(\\mu\\). Es un parámetro fijo, aunque normalmente desconocido. Un \\(\\sigma\\) pequeño indica valores concentrados alrededor de \\(\\mu\\); un \\(\\sigma\\) grande, mayor dispersión. Se expresa en las mismas unidades que la variable.'],
['Rango intercuartílico','Diferencia Q3−Q1; amplitud del 50% central.'],
['Coeficiente de variación','Desvío estándar en relación con la media, expresado generalmente en porcentaje.'],
['Valor tipificado','Posición de un valor medida en cantidad de desvíos estándar respecto de la media.'],
['Simetría','Forma aproximadamente equilibrada de una distribución alrededor de su centro.'],
['Asimetría','Forma de una distribución con una cola más prolongada hacia valores grandes o pequeños.'],
['Cuartil (Q₁, Q₂, Q₃)','Medidas de posición que dividen los datos ordenados en cuatro partes aproximadamente iguales. Q₁ deja aproximadamente el 25% de los datos por debajo, Q₂ coincide con la mediana y Q₃ deja aproximadamente el 75% por debajo.'],
['Correlación lineal de Pearson (r)','Coeficiente r que resume la dirección y la intensidad de la relación lineal entre dos variables cuantitativas. Toma valores entre −1 y 1.'],
['Experimento aleatorio','Proceso u observación cuyo resultado no puede conocerse con certeza antes de realizarlo, aunque se describan sus resultados posibles.'],
['Espacio muestral','Conjunto de todos los resultados posibles de un experimento aleatorio; se representa habitualmente con Ω.'],
['Evento o suceso','Conjunto de uno o más resultados del espacio muestral que cumplen una condición de interés; es un subconjunto de Ω.'],
['Cardinal de un conjunto','Cantidad de elementos que contiene un conjunto. En la notación usada aquí se representa con #.'],
['Probabilidad clásica','Cociente entre casos favorables y casos posibles cuando los resultados elementales son equiprobables.'],
['Probabilidad frecuencial','Interpretación de la probabilidad a partir de la estabilización de frecuencias relativas en muchas repeticiones comparables.'],
['Probabilidad simple o marginal','Probabilidad de un solo evento, obtenida por ejemplo a partir de un total marginal de una tabla.'],
['Probabilidad compuesta','En esta materia, probabilidad que combina dos o más eventos mediante operaciones como intersección o unión.'],
['Probabilidad conjunta','Probabilidad de que ocurran simultáneamente dos eventos; corresponde a una intersección.'],
['Probabilidad condicionada','Probabilidad de un evento cuando se sabe que otro ya ocurrió; la información dada cambia el espacio de referencia.'],
['Probabilidad total','Regla que obtiene la probabilidad de un evento sumando las probabilidades de los distintos caminos que conducen a él a través de una partición.'],
['Eventos mutuamente excluyentes','Eventos que no pueden ocurrir simultáneamente; su intersección es vacía.'],
['Eventos exhaustivos','Eventos que, considerados en conjunto, cubren todo el espacio muestral.'],
['Eventos independientes','Eventos para los que conocer la ocurrencia de uno no modifica la probabilidad del otro.'],
['Eventos dependientes','Eventos para los que conocer la ocurrencia de uno modifica la probabilidad del otro.'],
['Teorema de Bayes','Resultado general que permite actualizar la probabilidad de un suceso cuando se dispone de nueva información. En esta materia se utiliza su forma operativa para resolver situaciones de probabilidad condicionada.'],
['Variable aleatoria','Función que asigna un valor numérico a cada resultado de un experimento aleatorio.'],
['Recorrido de una variable aleatoria (Rₓ)','Conjunto de valores posibles que puede tomar una variable aleatoria. En este material se representa con Rₓ.'],
['Variable aleatoria discreta','Variable aleatoria cuyo recorrido es finito o infinito numerable.'],
['Variable aleatoria continua','Variable aleatoria que puede tomar cualquier valor dentro de un intervalo o conjunto continuo de valores.'],
['Distribución de probabilidad','Descripción de cómo se reparte la probabilidad entre los valores posibles de una variable aleatoria o entre intervalos de valores.'],
['Función de cuantía (o función de probabilidad)','En una variable aleatoria discreta, función que asigna a cada valor x la probabilidad P(X=x). Cumple la ley de no negatividad, P(X=x)≥0, y la ley de cierre: la suma de las probabilidades sobre todos los valores del recorrido es 1.'],
['Función de densidad','Función que describe cómo se distribuye la probabilidad para una variable aleatoria continua. La probabilidad se asigna a intervalos y corresponde al área bajo la curva de densidad. La densidad no puede ser negativa y el área total bajo la curva es 1. Para una variable continua, P(X=x)=0.'],
['Función de distribución acumulada','Función F(x)=P(X≤x), que representa la probabilidad acumulada hasta un valor x. Si X es discreta, se obtiene sumando las probabilidades de los valores menores o iguales que x. Si X es continua, corresponde al área acumulada bajo la curva de densidad desde −∞ hasta x (o, si el recorrido tiene un límite inferior, desde ese límite hasta x).'],
['Esperanza o valor esperado','Media teórica de una variable aleatoria. Se simboliza E(X) y también μ para la media de su distribución. En una variable discreta se obtiene ponderando cada valor por su probabilidad.'],
['Varianza de una variable aleatoria','Describe la dispersión teórica de los posibles valores de \\(X\\) respecto de su esperanza \\(E(X)\\), utilizando los cuadrados de esas diferencias y teniendo en cuenta sus probabilidades. Se simboliza \\(V(X)\\) o \\(\\sigma_X^2\\) y se expresa en unidades al cuadrado. Su raíz cuadrada es el desvío estándar de la variable aleatoria: \\(\\sigma_X=\\sqrt{V(X)}\\).'],
['Desvío estándar de una variable aleatoria <span class="notacion-nowrap">(\\(\\sigma_X\\))</span>','Es la raíz cuadrada de la varianza de \\(X\\). Describe la dispersión teórica de sus posibles valores alrededor de \\(E(X)\\), teniendo en cuenta sus probabilidades: \\(\\sigma_X=\\sqrt{V(X)}\\). Se expresa en las mismas unidades que \\(X\\). Si \\(X\\) modela la variable medida en una población, \\(\\sigma_X\\) coincide con el desvío estándar poblacional \\(\\sigma\\): no es una tercera dispersión diferente, sino la misma idea expresada desde el modelo probabilístico.'],
['Ensayo de Bernoulli','Experiencia aleatoria con dos resultados posibles, convencionalmente denominados éxito y fracaso, con probabilidades p y 1−p.'],
['Distribución Binomial','Modelo de probabilidad discreto para el número de éxitos en un número fijo de ensayos independientes, con la misma probabilidad de éxito en cada ensayo. Se escribe X∼B(n,p).'],
['Parámetros de la Binomial (n, p)','n es el número fijo de ensayos y p es la probabilidad de éxito en cada ensayo.'],
['Media y variabilidad de la Binomial','<span class="formula-glosario">\\(E(X)=\\mu=np\\)</span><span class="formula-glosario">\\(V(X)=\\sigma^2=np(1-p)\\)</span><span class="formula-glosario">\\(\\sigma=\\sqrt{np(1-p)}\\)</span>'],
['Distribución de Poisson','Modelo de probabilidad discreto para contar ocurrencias de un evento sobre una extensión o región continua determinada, bajo las condiciones del modelo. Se escribe X∼Po(λ).'],
['Parámetro de Poisson (λ)','Número medio de ocurrencias esperado sobre la extensión o región considerada.'],
['Media y variabilidad de Poisson','<span class="formula-glosario">\\(E(X)=\\mu=\\lambda\\)</span><span class="formula-glosario">\\(V(X)=\\sigma^2=\\lambda\\)</span><span class="formula-glosario">\\(\\sigma=\\sqrt{\\lambda}\\)</span>'],
['Número combinatorio','El número combinatorio \\(\\binom{n}{x}\\) indica cuántas formas hay de elegir \\(x\\) elementos entre \\(n\\) sin importar el orden. Se calcula como \\(\\binom{n}{x}=\\frac{n!}{x!(n-x)!}\\).'],
['Factorial','Producto de los números enteros positivos desde un número natural x hasta 1. Se escribe x!. Por definición, 0!=1.'],
['Modelo probabilístico','Representación teórica que describe el comportamiento probabilístico de una variable bajo determinados supuestos y parámetros. Se elige cuando esos supuestos resultan razonables para el fenómeno y el propósito del análisis.'],
['Distribución Normal','Modelo de probabilidad continuo, de forma acampanada y simétrica respecto de su media μ. Queda determinado por μ y σ; en este modelo media, mediana y moda coinciden.'],
['Parámetros de la Normal (μ, σ)','μ determina el centro o ubicación de la distribución Normal y σ su dispersión. Un cambio en μ desplaza la curva; un cambio en σ modifica su extensión manteniendo el área total igual a 1.'],
['Normal estándar','Distribución Normal de la variable tipificada Z, con media 0 y desvío estándar 1. Se escribe Z∼N(0,1).'],
['Tipificación','Transformación Z=(X−μ)/σ que expresa la posición de un valor en cantidad de desvíos estándar respecto de la media. En este material se usa principalmente para interpretar posiciones relativas y comparar escalas; la herramienta digital permite calcular probabilidades sin tipificar previamente.'],
['Regla empírica 68–95–99,7','Referencia aproximada para una distribución Normal: alrededor del 68% de los valores queda entre μ±σ, el 95% entre μ±2σ y el 99,7% entre μ±3σ.'],
['Percentil en un modelo continuo','Valor que deja acumulada por debajo una proporción determinada de la distribución. Por ejemplo, el percentil 10 deja aproximadamente el 10% del área a su izquierda.'],
['Distribución muestral','Distribución de probabilidad de un estimador cuando se consideran todas las muestras aleatorias posibles de un mismo tamaño obtenidas bajo el mismo procedimiento.'],
['Estadístico','Función o regla calculada únicamente a partir de los datos de una muestra, sin incluir parámetros poblacionales desconocidos. Antes de observar la muestra es una variable aleatoria; después de observarla toma un valor numérico concreto. Según su finalidad, puede utilizarse como estimador o como estadístico de prueba.'],
['Estimador','Estadístico o regla calculada a partir de una muestra que se utiliza para estimar un parámetro poblacional.'],
['Estimación puntual','Valor numérico concreto que toma un estimador después de observar una muestra.'],
['Error estándar','Describe cuánto varía un estimador —por ejemplo, X̄ o h— al repetir el muestreo muchas veces bajo las mismas condiciones. Es el desvío estándar de su distribución muestral y permite valorar la precisión de la estimación. No mide la dispersión de los individuos: mide la dispersión de las estimaciones entre muestras.'],
['Sesgo','Diferencia entre la esperanza de un estimador y el parámetro que se desea estimar. Un estimador es insesgado cuando esa diferencia es cero.'],
['Precisión de un estimador','Grado de concentración de las estimaciones obtenidas en muestreos repetidos. A menor variabilidad muestral, mayor precisión.'],
['Consistencia','Propiedad por la cual un estimador se concentra alrededor del verdadero parámetro a medida que aumenta el tamaño muestral.'],
['Teorema Central del Límite (TCL)','Si las observaciones se seleccionan aleatoriamente, son independientes y provienen de una misma población con media y varianza finitas, la distribución muestral de \\(\\bar X\\) se aproxima a una distribución Normal cuando aumenta el tamaño muestral. Su centro es \\(\\mu\\) y su desvío estándar es \\(\\sigma/\\sqrt n\\). El tamaño necesario para que la aproximación sea adecuada depende de la forma de la población original; el TCL no afirma que los datos originales se vuelvan normales.'],
['Ley de los Grandes Números (LGN)','Si las observaciones se seleccionan aleatoriamente, son independientes y provienen de una misma población con media finita \\(\\mu\\), la media muestral \\(\\bar X\\) se aproxima a \\(\\mu\\) cuando aumenta el tamaño de la muestra. Describe la convergencia de la media muestral, no la forma de su distribución.'],
['Intervalo de confianza','Intervalo calculado a partir de una muestra mediante un procedimiento que, en repeticiones comparables, contiene al parámetro con una frecuencia determinada por el nivel de confianza.'],
['Nivel de confianza','Proporción de intervalos que contendrían al parámetro en repeticiones comparables del procedimiento. Se expresa como 1−α.'],
['Margen de error','Semiamplitud de un intervalo de confianza; mide la distancia entre la estimación puntual central y cada límite del intervalo.'],
['Hipótesis estadística','Afirmación sobre una característica de una población o sobre su distribución.'],
['Hipótesis nula (H₀)','Afirmación de referencia que se supone provisionalmente verdadera para construir la distribución de una prueba de hipótesis.'],
['Hipótesis alternativa (H₁)','Afirmación que expresa la diferencia o dirección que se busca evaluar frente a la hipótesis nula.'],
['Nivel de significación (α)','Probabilidad de rechazar la hipótesis nula cuando es verdadera; corresponde a la probabilidad de error tipo I fijada para la prueba.'],
['Estadístico de prueba','Estadístico cuya distribución bajo la hipótesis nula se utiliza para medir cuán extremo resulta el resultado observado.'],
['Región de rechazo','Conjunto de valores suficientemente extremos del estadístico de prueba que conducen a rechazar la hipótesis nula.'],
['Valor crítico','Valor que separa la región de rechazo de la región de no rechazo en una prueba de hipótesis.'],
['p-valor','Probabilidad, calculada suponiendo verdadera la hipótesis nula, de obtener un resultado tan extremo como el observado o más extremo en la dirección indicada por la hipótesis alternativa.'],
['Error tipo I','Decisión de rechazar la hipótesis nula cuando en realidad es verdadera. Su probabilidad es α.'],
['Error tipo II','Decisión de no rechazar la hipótesis nula cuando en realidad es falsa. Su probabilidad se representa con β.'],
['Potencia','Probabilidad de rechazar la hipótesis nula cuando es falsa. Se expresa como 1−β.'],
['Prueba unilateral','Prueba cuya hipótesis alternativa establece una dirección y cuya región de rechazo se ubica en una sola cola de la distribución de referencia.'],
['Prueba bilateral','Prueba cuya hipótesis alternativa plantea una diferencia en cualquier dirección y cuya región de rechazo se reparte entre ambas colas.'],
['Grados de libertad','Cantidad de valores que pueden variar independientemente al calcular un estadístico, una vez consideradas las restricciones del procedimiento.']
];
const glosarioOrdenado=[...glosario].sort(([a],[b])=>a.localeCompare(b,'es',{sensitivity:'base'}));
function renderGlosario(f=''){const q=f.trim().toLocaleLowerCase('es');$('#lista-glosario').innerHTML=glosarioOrdenado.filter(([t,d])=>(t+' '+d).toLocaleLowerCase('es').includes(q)).map(([t,d])=>`<article class="glosario-item"><h3>${t}</h3><p>${d}</p></article>`).join('')||'<p>No se encontraron conceptos.</p>';if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([$('#lista-glosario')]).catch(()=>{})}$('#buscar-glosario').addEventListener('input',e=>renderGlosario(e.target.value));renderGlosario();
function prepararFeedbackAuto(formulario){
  if(!formulario)return;
  $$('fieldset',formulario).forEach(fs=>{
    if(!$('.feedback-autoeval',fs)){
      const p=document.createElement('p');
      p.className='feedback-autoeval';
      fs.appendChild(p);
    }
  });
}
function corregirAutoevaluacion({form,claves,pistas,resultado,umbral}){
  prepararFeedbackAuto(form);
  let c=0;
  for(const [n,v] of Object.entries(claves)){
    const r=$(`input[name=${n}]:checked`,form);
    const fs=$(`input[name=${n}]`,form)?.closest('fieldset');
    const f=fs?$('.feedback-autoeval',fs):null;
    if(r&&r.value===v){
      c++;
      if(f){f.textContent='✓ Correcta';f.className='feedback-autoeval correcto';}
      if(fs)fs.classList.remove('respuesta-incorrecta');
    }else{
      const pista=pistas[n]||'Revisá esta respuesta y volvé a la estación relacionada.';
      if(f){f.textContent='✗ Revisá esta respuesta. '+pista;f.className='feedback-autoeval incorrecto';}
      if(fs)fs.classList.add('respuesta-incorrecta');
    }
  }
  const total=Object.keys(claves).length;
  resultado.textContent=`Resultado: ${c}/${total}. ${c===total?'Dominás las ideas centrales del módulo.':c>=umbral?'Buen avance. Revisá las preguntas señaladas para completar el recorrido.':'Conviene revisar las preguntas señaladas y volver a las estaciones relacionadas antes de reintentar.'}`;
  resultado.className='mensaje '+(c>=umbral?'correcto':'incorrecto');
}
const formAuto1=$('#form-autoevaluacion');
prepararFeedbackAuto(formAuto1);
formAuto1.addEventListener('submit',e=>{e.preventDefault();corregirAutoevaluacion({
  form:formAuto1,
  claves:{a1:'b',a2:'a',a3:'a',a4:'a',a5:'a',a6:'a',a7:'a',a8:'a',a9:'a',a10:'a'},
  pistas:{
    a1:'Revisá la diferencia entre una variable cualitativa y una cuantitativa.',
    a2:'Volvé a distinguir población, muestra y unidad estadística.',
    a3:'Revisá qué tipo de muestreo garantiza representación de grupos definidos previamente.',
    a4:'Pensá qué gráfico corresponde al tipo de variable planteado.',
    a5:'Revisá qué medida de posición es más resistente a valores extremos.',
    a6:'Volvé a la interpretación de los cuartiles y del rango intercuartílico.',
    a7:'Revisá qué mide el coeficiente de variación y cuándo permite comparar dispersiones.',
    a8:'Volvé a la lectura del diagrama de caja y sus componentes.',
    a9:'Revisá qué expresa un valor tipificado respecto de la media y el desvío estándar.',
    a10:'Para comparar visualmente dos distribuciones, revisá qué condiciones de escala hacen válida la comparación.'
  },resultado:$('#resultado-auto'),umbral:7});
});
const formAuto2=$('#form-autoevaluacion-u3');
prepararFeedbackAuto(formAuto2);
formAuto2.addEventListener('submit',e=>{e.preventDefault();corregirAutoevaluacion({
  form:formAuto2,
  claves:{p1:'a',p2:'a',p3:'a',p4:'a',p5:'a',p6:'a',p7:'a',p8:'a'},
  pistas:{
    p1:'Revisá qué caracteriza a un experimento aleatorio y a su espacio muestral.',
    p2:'Volvé a distinguir probabilidad clásica de frecuencia relativa.',
    p3:'Revisá la regla del complemento y qué evento representa.',
    p4:'Pensá cuándo se suman probabilidades y qué papel cumple la intersección.',
    p5:'Revisá cómo se lee una tabla de contingencia para construir el denominador correcto.',
    p6:'En una probabilidad condicionada, fijate cuál es el grupo que queda como nuevo espacio de referencia.',
    p7:'Revisá la diferencia entre independencia y exclusión: no significan lo mismo.',
    p8:'Invertir una condición cambia el grupo de referencia; revisá qué información adicional hace falta.'
  },resultado:$('#resultado-auto-u3'),umbral:6});
});

if($('#form-autoevaluacion-u4'))$('#form-autoevaluacion-u4').addEventListener('submit',e=>{e.preventDefault();
const claves={d1:'b',d2:'a',d3:'b',d4:'b',d5:'b',d6:'a',d7:'b',d8:'b',d9:'c',d10:'b'};
const pistas={
d1:'Revisá la diferencia entre contar valores separados y medir una magnitud que puede tomar cualquier valor dentro de un intervalo.',
d2:'Revisá qué información asigna la función de cuantía a cada valor posible de una variable aleatoria discreta.',
d3:'Recordá que F(x) acumula la probabilidad de todos los valores menores o iguales que x.',
d4:'La esperanza describe un comportamiento promedio a largo plazo; no tiene que ser un valor que la variable pueda tomar en una observación.',
d5:'Al transformar Y=a+bX, el desvío estándar se multiplica por |b|; sumar una constante no modifica la dispersión.',
d6:'Identificá qué se está contando, cuántos ensayos hay, la probabilidad de éxito y qué significa “al menos 5”.',
d7:'Se cuentan sucesos en un intervalo con una frecuencia media conocida. Revisá el modelo correspondiente y calculá la probabilidad de observar 0.',
d8:'Compará las curvas con igual centro y distinta dispersión: el área total no cambia.',
d9:'Si buscamos el 10 % de las mediciones más altas, el límite deja el 90 % acumulado a su izquierda.',
d10:'Revisá qué modelo usamos para contar sucesos poco frecuentes en un intervalo cuando puede considerarse estable su frecuencia media.'
};
let c=0;
for(const [n,v] of Object.entries(claves)){
 const r=$(`input[name=${n}]:checked`);
 const f=$(`#feedback-${n}`);
 const fs=r?r.closest('fieldset'):$(`input[name=${n}]`).closest('fieldset');
 if(r&&r.value===v){
   c++;
   if(f){f.textContent='✓ Correcta';f.className='feedback-auto-u4 correcto';}
   if(fs)fs.classList.remove('respuesta-incorrecta');
 }else{
   if(f){f.textContent='✗ Revisá esta respuesta. '+pistas[n];f.className='feedback-auto-u4 incorrecto';}
   if(fs)fs.classList.add('respuesta-incorrecta');
 }
}
const m=$('#resultado-auto-u4');
m.textContent=`Resultado: ${c}/10. ${c===10?'Dominás las ideas centrales del módulo.':c>=7?'Buen avance. Revisá las preguntas señaladas para completar el recorrido.':'Conviene revisar las preguntas señaladas y volver a las estaciones relacionadas antes de reintentar.'}`;
m.className='mensaje '+(c>=7?'correcto':'incorrecto');
});
const inicial=location.hash.slice(1);if(inicial&&$('#'+inicial))mostrar(inicial);

if($('#comprobar-e28'))$('#comprobar-e28').addEventListener('click',()=>{const elegidos=[...document.querySelectorAll('input[name="e28rec"]:checked')].map(x=>x.value),m=$('#mensaje-e28');if(!elegidos.length){m.textContent='Marcá al menos una situación antes de comprobar.';m.className='mensaje incorrecto';return}const ok=elegidos.length===2&&elegidos.includes('b')&&elegidos.includes('d');m.textContent=ok?'Correcto. Las situaciones 2 y 4 no responden a una Binomial. En la 2, al extraer sin reposición de una población finita, cada extracción modifica la composición del lote y puede cambiar la probabilidad de las siguientes; este tipo de situación abre la puerta al modelo Hipergeométrico. En la 4, el número de ensayos no está fijado de antemano: se continúa hasta alcanzar el tercer defectuoso. En cambio, la situación del dado sí puede modelarse con una Binomial: en cada lanzamiento definimos éxito como obtener 5 o 6, de modo que p=2/6=1/3.':'Revisá una por una las condiciones. Hay dos situaciones que no corresponden a una Binomial. Ojo: que un dado tenga seis resultados posibles no impide usar una Binomial si cada lanzamiento puede clasificarse en éxito o fracaso para el evento que queremos contar.';m.className='mensaje '+(ok?'correcto':'incorrecto')});



/* Analytics · Aprender con Datos
   Eventos anónimos para conocer alcance y uso del material.
   No se envían nombres, respuestas elegidas, claves ni datos personales. */
(function(){
  const enviarEvento=(nombre,parametros={})=>{
    if(typeof window.gtag==='function'){
      window.gtag('event',nombre,parametros);
    }
  };

  const nombreSeccion=(id)=>{
    const seccion=document.getElementById(id);
    if(!seccion) return id;
    const titulo=seccion.querySelector('h2');
    return titulo ? titulo.textContent.trim() : id;
  };

  document.addEventListener('click',e=>{
    const modulo=e.target.closest('[data-modulo-toggle]');
    if(modulo){
      enviarEvento('modulo_menu',{
        modulo:String(modulo.dataset.moduloToggle || ''),
        estado_previo:modulo.getAttribute('aria-expanded')==='true' ? 'abierto' : 'cerrado'
      });
    }

    const navegacion=e.target.closest('[data-seccion],[data-seccion-directa],[data-destino]');
    if(navegacion){
      const destino=navegacion.dataset.seccion || navegacion.dataset.seccionDirecta || navegacion.dataset.destino;
      if(destino){
        enviarEvento('seccion_visitada',{
          seccion_id:destino,
          seccion_nombre:nombreSeccion(destino)
        });
        if(['e13','e23','e33','e48'].includes(destino)){
          enviarEvento('acceso_tp',{seccion_id:destino,seccion_nombre:nombreSeccion(destino)});
        }
        if(['autoevaluacion','autoevaluacion-u3','autoevaluacion-u4','autoevaluacion-u5'].includes(destino)){
          enviarEvento('autoevaluacion_abierta',{seccion_id:destino,seccion_nombre:nombreSeccion(destino)});
        }
      }
    }

    const enlace=e.target.closest('a.enlace-herramienta,a.enlace-externo');
    if(enlace){
      enviarEvento('herramienta_externa',{
        enlace_texto:(enlace.textContent || '').trim().slice(0,100),
        enlace_url:enlace.href
      });
    }
  });

  document.addEventListener('submit',e=>{
    const ids={
      'form-autoevaluacion':'Modulo 1',
      'form-autoevaluacion-u3':'Modulo 2',
      'form-autoevaluacion-u4':'Modulo 3',
      'form-autoevaluacion-u5':'Modulo 4'
    };
    const modulo=ids[e.target.id];
    if(!modulo) return;
    setTimeout(()=>{
      const resultado=e.target.querySelector('.mensaje[id^="resultado-"]');
      const texto=resultado ? resultado.textContent : '';
      const m=texto.match(/Resultado:\s*(\d+)\/(\d+)/i);
      const params={modulo};
      if(m){
        params.aciertos=Number(m[1]);
        params.total=Number(m[2]);
      }
      enviarEvento('autoevaluacion_corregida',params);
    },0);
  });
})();


$$('[data-abrir-tab]').forEach(b=>b.addEventListener('click',()=>{const id=b.dataset.abrirTab;setTimeout(()=>{const tab=document.querySelector(`[data-tab="${id}"]`);if(tab)tab.click()},30)}));
/* Unidad 5 · interacciones */
$$('.tabs-u5').forEach(bar=>{
  const aviso=document.createElement('p');
  aviso.className='aviso-recorrer-tabs';
  aviso.textContent='Recorré todas las opciones antes de avanzar.';
  bar.before(aviso);
  const inicial=$('.tab-u5.activo',bar);
  if(inicial)inicial.classList.add('visitado');
});
$$('.tab-u5').forEach(b=>b.addEventListener('click',()=>{const root=b.closest('.seccion'),bar=b.closest('.tabs-u5'),tabs=$$('.tab-u5',bar);b.classList.add('visitado');tabs.forEach(x=>x.classList.toggle('activo',x===b));tabs.forEach(x=>{const panel=document.getElementById(x.dataset.tab);if(panel)panel.classList.toggle('visible',x===b)});if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([root]).catch(()=>{})}));
const mean=a=>a.reduce((x,y)=>x+y,0)/a.length;
function normal(){let u=0,v=0;while(!u)u=Math.random();while(!v)v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v)}
function expSample(){return -10*Math.log(1-Math.random())}
function drawAxes(ctx,w,h,xmin,xmax,label){ctx.clearRect(0,0,w,h);ctx.strokeStyle='#78958c';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(42,h-32);ctx.lineTo(w-12,h-32);ctx.stroke();ctx.fillStyle='#385b54';ctx.font='12px sans-serif';for(let i=0;i<=5;i++){const x=42+(w-54)*i/5,val=xmin+(xmax-xmin)*i/5;ctx.fillText(val.toFixed(0),x-7,h-12)}ctx.fillText(label,48,18)}
function hist(ctx,data,w,h,xmin,xmax,bins,label,mu){drawAxes(ctx,w,h,xmin,xmax,label);const counts=Array(bins).fill(0);data.forEach(v=>{let j=Math.floor((v-xmin)/(xmax-xmin)*bins);if(j>=0&&j<bins)counts[j]++});const mx=Math.max(1,...counts),bw=(w-54)/bins;ctx.fillStyle='#b8d8c9';counts.forEach((c,i)=>ctx.fillRect(42+i*bw,h-32-c/(mx)*(h-62),Math.max(1,bw-1),c/(mx)*(h-62)));if(mu!=null){const x=42+(mu-xmin)/(xmax-xmin)*(w-54);ctx.fillStyle='#6f8f18';ctx.beginPath();ctx.moveTo(x,h-31);ctx.lineTo(x-5,h-23);ctx.lineTo(x+5,h-23);ctx.closePath();ctx.fill();ctx.fillText('μ',x+7,h-20)}}
const popCanvas=$('#u5-pob'),meansCanvas=$('#u5-medias');let simMeans=[],lastMean=null;
if(popCanvas&&meansCanvas){const pc=popCanvas.getContext('2d'),mc=meansCanvas.getContext('2d');const pop=Array.from({length:5000},expSample);hist(pc,pop,popCanvas.width,popCanvas.height,0,55,28,'Distribución de valores individuales',10);
const renderMeans=()=>{hist(mc,simMeans,meansCanvas.width,meansCanvas.height,0,25,25,'Distribución de medias muestrales',10);const n=Number($('#u5-n').value),sm=simMeans.length?mean(simMeans):NaN,sd=simMeans.length>1?Math.sqrt(simMeans.reduce((a,x)=>a+(x-sm)**2,0)/(simMeans.length-1)):NaN,sig=10/Math.sqrt(n);if($('#u5-normal')?.checked){const w=meansCanvas.width,h=meansCanvas.height,base=h-32,X=x=>42+x/25*(w-54),peak=115;mc.strokeStyle='#7a2f55';mc.lineWidth=2.5;mc.beginPath();for(let x=0;x<=25;x+=.05){const y=base-peak*Math.exp(-.5*((x-10)/sig)**2);if(x===0)mc.moveTo(X(x),y);else mc.lineTo(X(x),y)}mc.stroke();mc.fillStyle='#7a2f55';mc.fillText(`Normal teórica N(10, ${(sig).toFixed(2)})`,520,24)}if(lastMean!=null){const x=42+lastMean/25*(meansCanvas.width-54);mc.fillStyle='#168f9c';mc.beginPath();mc.moveTo(x,meansCanvas.height-31);mc.lineTo(x-6,meansCanvas.height-21);mc.lineTo(x+6,meansCanvas.height-21);mc.closePath();mc.fill();mc.fillText('última x̄',Math.min(x+7,670),meansCanvas.height-20)}$('#u5-resumen-sim').textContent=simMeans.length?`Medias simuladas: ${simMeans.length} · centro observado ≈ ${sm.toFixed(2)} · desvío observado de las medias ≈ ${sd.toFixed(2)} · σ_x̄ teórico = ${sig.toFixed(2)}`:'Todavía no hay medias simuladas.'};
const take=k=>{let last=[];const titulo=$('#u5-titulo-muestra');if(titulo)titulo.textContent=k===1?'2 · Muestra obtenida → su media':'2 · Última muestra obtenida → su media';for(let r=0;r<k;r++){const n=Number($('#u5-n').value);last=Array.from({length:n},expSample);lastMean=mean(last);simMeans.push(lastMean)}$('#u5-muestra-valores').innerHTML=last.slice(0,30).map(x=>`<span>${x.toFixed(1)}</span>`).join('')+(last.length>30?'<span>…</span>':'');$('#u5-media-obs').textContent=`Media obtenida: x̄obs = ${lastMean.toFixed(2)} días`;const drop=$('#u5-caida-media');if(drop){drop.classList.remove('pulso-media');void drop.offsetWidth;drop.classList.add('pulso-media')}renderMeans()};
$('#u5-una').onclick=()=>take(1);$('#u5-10').onclick=()=>take(10);$('#u5-100').onclick=()=>take(100);$('#u5-reset').onclick=()=>{simMeans=[];lastMean=null;$('#u5-muestra-valores').textContent='Tomá una muestra para comenzar.';$('#u5-media-obs').textContent='';renderMeans()};$('#u5-n').onchange=()=>{simMeans=[];lastMean=null;renderMeans()};$('#u5-normal')?.addEventListener('change',renderMeans);renderMeans()}
function normCdf(x){const t=1/(1+0.2316419*Math.abs(x)),d=0.3989423*Math.exp(-x*x/2),p=1-d*t*(0.3193815+t*(-0.3565638+t*(1.781478+t*(-1.821256+t*1.330274))));return x>=0?p:1-p}
const zcrit={"0.10":1.644854,"0.05":1.959964,"0.01":2.575829};
function drawNormalDecision(canvas,alt,alpha,zobs=null,showP=false){
  if(!canvas)return;
  const ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height,xmin=-4,xmax=4;
  const left=50,right=w-26,base=h-58,peak=Math.min(112,h-92);
  const X=x=>left+(x-xmin)/(xmax-xmin)*(right-left),Y=x=>base-peak*Math.exp(-x*x/2);
  const a=Number(alpha),zc=alt==='two'?zcrit[alpha]:({0.10:1.281552,0.05:1.644854,0.01:2.326348}[alpha]);
  const criticals=alt==='two'?[-zc,zc]:[alt==='right'?zc:-zc];
  const fmt=x=>x.toFixed(2).replace('.',',');
  const label=(text,x,y,align='center',color='#385b54',font='12px sans-serif')=>{ctx.fillStyle=color;ctx.font=font;ctx.textAlign=align;ctx.fillText(text,x,y)};
  const fillInterval=(from,to,color)=>{ctx.fillStyle=color;ctx.beginPath();ctx.moveTo(X(from),base);for(let x=from;x<=to;x+=.015)ctx.lineTo(X(x),Y(x));ctx.lineTo(X(to),Y(to));ctx.lineTo(X(to),base);ctx.closePath();ctx.fill()};
  ctx.clearRect(0,0,w,h);
  const alphaColor='rgba(224,184,55,.68)';
  if(alt==='two'){
    fillInterval(xmin,-zc,alphaColor);
    fillInterval(zc,xmax,alphaColor);
  }else if(alt==='right') fillInterval(zc,xmax,alphaColor);
  else fillInterval(xmin,-zc,alphaColor);
  if(showP&&zobs!=null){
    const pColor='rgba(122,47,85,.62)',zabs=Math.min(xmax,Math.abs(zobs));
    if(alt==='two'){
      fillInterval(xmin,-zabs,pColor);
      fillInterval(zabs,xmax,pColor);
    }else if(alt==='right') fillInterval(Math.max(xmin,Math.min(xmax,zobs)),xmax,pColor);
    else fillInterval(xmin,Math.max(xmin,Math.min(xmax,zobs)),pColor);
  }
  ctx.strokeStyle='#174f52';ctx.lineWidth=2.2;ctx.beginPath();
  for(let x=xmin;x<=xmax;x+=.02){const px=X(x),py=Y(x);if(x===xmin)ctx.moveTo(px,py);else ctx.lineTo(px,py)}ctx.stroke();
  ctx.strokeStyle='#78958c';ctx.lineWidth=1.4;ctx.beginPath();ctx.moveTo(left,base);ctx.lineTo(right,base);ctx.stroke();
  criticals.forEach(c=>{ctx.save();ctx.setLineDash([4,3]);ctx.strokeStyle='#8a6412';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(X(c),base);ctx.lineTo(X(c),Y(c)-5);ctx.stroke();ctx.restore();label(`${c<0?'−':''}${fmt(Math.abs(c))}`,X(c),base+17,'center','#795d18','bold 11px sans-serif')});
  [-3,-2,-1,0,1,2,3].forEach(x=>{if(zobs==null||Math.abs(x-zobs)>.28)label(String(x),X(x),base+35)});
  if(alt==='two'){
    label('Región de rechazo',X(-2.8),base+51,'center','#795d18','bold 10px sans-serif');
    label('Región de no rechazo',X(0),base+51,'center','#385b54','bold 10px sans-serif');
    label('Región de rechazo',X(2.8),base+51,'center','#795d18','bold 10px sans-serif');
    label('α/2',X(-2.45),base-20,'center','#795d18','bold 12px sans-serif');label('1−α',X(0),base-28,'center','#385b54','bold 12px sans-serif');label('α/2',X(2.45),base-20,'center','#795d18','bold 12px sans-serif');
  }else{
    const rejectionX=alt==='right'?2.55:-2.55,nonRejectionX=alt==='right'?-0.7:.7;
    label('Región de rechazo',X(rejectionX),base+51,'center','#795d18','bold 10px sans-serif');
    label('Región de no rechazo',X(nonRejectionX),base+51,'center','#385b54','bold 10px sans-serif');
    label('α',X(rejectionX),base-20,'center','#795d18','bold 12px sans-serif');label('1−α',X(nonRejectionX),base-28,'center','#385b54','bold 12px sans-serif');
  }
  if(zobs!=null){
    const zx=Math.max(xmin,Math.min(xmax,zobs)),px=X(zx),py=Y(zx);
    ctx.fillStyle='#7a2f55';ctx.beginPath();ctx.arc(px,base,4.5,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='#7a2f55';ctx.lineWidth=1.6;ctx.beginPath();ctx.moveTo(px,base-5);ctx.lineTo(px,Math.max(12,py-7));ctx.stroke();
    const align=zx>2.7?'right':zx<-2.7?'left':'center',tx=align==='right'?px-6:align==='left'?px+6:px;
    label(`Zobs = ${zobs.toFixed(1).replace('.',',')}`,tx,base+35,align,'#7a2f55','bold 12px sans-serif');
  }
  return zc;
}
function renderCrit(){const alt=$('#ph-alt')?.value,a=$('#ph-alpha')?.value;if(!alt)return;const z=drawNormalDecision($('#ph-canvas'),alt,a);$('#ph-criticos').textContent=alt==='two'?`Para Z ~ N(0,1) y α=${Number(a).toFixed(2).replace('.',',')}, los valores críticos son aproximadamente −${z.toFixed(2).replace('.',',')} y ${z.toFixed(2).replace('.',',')}. Cada cola tiene probabilidad α/2 bajo H₀ y la región central probabilidad 1−α.`:`Para Z ~ N(0,1) y α=${Number(a).toFixed(2).replace('.',',')}, el valor crítico es aproximadamente ${(alt==='left'?-z:z).toFixed(2).replace('.',',')}. La cola de rechazo tiene probabilidad α bajo H₀.`}
['ph-alt','ph-alpha'].forEach(id=>{const control=$('#'+id);control?.addEventListener('input',renderCrit);control?.addEventListener('change',renderCrit)});renderCrit();
window.addEventListener('pageshow',()=>{renderCrit();setTimeout(renderCrit,0)});
function renderP(){if(!$('#p-canvas'))return;const z=Number($('#p-z').value),alt=$('#p-alt').value,a=$('#p-alpha').value;$('#p-z-out').textContent=z.toFixed(1).replace('.',',');drawNormalDecision($('#p-canvas'),alt,a,z,true);let p=alt==='two'?2*(1-normCdf(Math.abs(z))):alt==='right'?1-normCdf(z):normCdf(z);p=Math.min(1,p);const reject=p<=Number(a);const pf=$('#p-formula');if(pf){pf.innerHTML=alt==='two'?`Como H₁ es bilateral, p-valor = 2·P(Z ≥ |${z.toFixed(1).replace('.',',')}| | H₀).`:alt==='right'?`Como H₁ es unilateral derecha, p-valor = P(Z ≥ ${z.toFixed(1).replace('.',',')} | H₀).`:`Como H₁ es unilateral izquierda, p-valor = P(Z ≤ ${z.toFixed(1).replace('.',',')} | H₀).`;}$('#p-decision').innerHTML=`p-valor ≈ <strong>${p.toFixed(4).replace('.',',')}</strong> · α = ${Number(a).toFixed(2).replace('.',',')} → <strong>${reject?'rechazar H₀':'no rechazar H₀'}</strong>.`}
['p-z','p-alt','p-alpha'].forEach(id=>$('#'+id)?.addEventListener('input',renderP));renderP();
window.addEventListener('pageshow',()=>{renderP();setTimeout(renderP,0)});
function renderIC(){const c=$('#ic-canvas');if(!c)return;const conf=Number($('#ic-conf').value),n=Number($('#ic-n').value),z=conf===.90?1.644854:conf===.99?2.575829:1.959964,se=10/Math.sqrt(n),ctx=c.getContext('2d'),w=760,h=430,mu=10,xmin=0,xmax=20,X=x=>45+(x-xmin)/(xmax-xmin)*(w-70);ctx.clearRect(0,0,w,h);ctx.strokeStyle='#6f8f18';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(X(mu),20);ctx.lineTo(X(mu),h-35);ctx.stroke();let cover=0,totalWidth=0;for(let i=0;i<100;i++){const m=mu+se*normal(),lo=m-z*se,hi=m+z*se,ok=lo<=mu&&hi>=mu;if(ok)cover++;totalWidth+=hi-lo;const y=25+i*3.65;ctx.strokeStyle=ok?'#4e8072':'#a44d4d';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(X(lo),y);ctx.lineTo(X(hi),y);ctx.stroke();ctx.fillRect(X(m)-1.5,y-1.5,3,3)}ctx.fillStyle='#385b54';ctx.fillText('μ = 10',X(mu)+5,16);$('#ic-resumen').innerHTML=`<span>Cobertura observada: ${cover}/100</span><span>Confianza elegida: ${conf.toFixed(2).replace('.',',')}</span><span>Ancho medio ≈ ${(totalWidth/100).toFixed(2).replace('.',',')}</span><span>σ_x̄ = ${se.toFixed(2).replace('.',',')}</span>`}
$('#ic-generar')?.addEventListener('click',renderIC);$('#ic-conf')?.addEventListener('change',renderIC);$('#ic-n')?.addEventListener('change',renderIC);renderIC();

function logGamma(z){const c=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-0.13857109526572012,9.984369578019571e-6,1.5056327351493116e-7];if(z<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*z))-logGamma(1-z);z-=1;let x=.9999999999998099;for(let i=0;i<c.length;i++)x+=c[i]/(z+i+1);const t=z+c.length-.5;return .5*Math.log(2*Math.PI)+(z+.5)*Math.log(t)-t+Math.log(x)}
function tPdf(x,v){return Math.exp(logGamma((v+1)/2)-logGamma(v/2)-.5*Math.log(v*Math.PI)-((v+1)/2)*Math.log(1+x*x/v))}
function chiPdf(x,v){if(x<=0)return 0;return Math.exp((v/2-1)*Math.log(x)-x/2-(v/2)*Math.log(2)-logGamma(v/2))}
function drawFamily(canvas,kind){if(!canvas)return;const ctx=canvas.getContext('2d'),w=760,h=260,base=h-35;ctx.clearRect(0,0,w,h);ctx.strokeStyle='#78958c';ctx.beginPath();ctx.moveTo(42,base);ctx.lineTo(w-18,base);ctx.stroke();const sets=kind==='t'?[{v:2,label:'gl=2'},{v:5,label:'gl=5'},{v:20,label:'gl=20'},{v:100,label:'gl=100'}]:[{v:2,label:'gl=2'},{v:5,label:'gl=5'},{v:10,label:'gl=10'},{v:20,label:'gl=20'}],xmin=kind==='t'?-5:0,xmax=kind==='t'?5:40,cols=['#7a2f55','#168f9c','#6f8f18','#20343a'];let maxY=0;for(const d of sets)for(let x=xmin+.01;x<=xmax;x+=(xmax-xmin)/500)maxY=Math.max(maxY,kind==='t'?tPdf(x,d.v):chiPdf(x,d.v));sets.forEach((d,j)=>{ctx.strokeStyle=cols[j];ctx.lineWidth=2;ctx.beginPath();for(let i=0;i<=500;i++){const x=xmin+(xmax-xmin)*i/500,y=kind==='t'?tPdf(x,d.v):chiPdf(x,d.v),px=42+(w-60)*i/500,py=base-y/maxY*(h-65);if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py)}ctx.stroke();ctx.fillStyle=cols[j];ctx.fillText(d.label,560,24+j*18)});ctx.fillStyle='#385b54';for(let i=0;i<=5;i++){const val=xmin+(xmax-xmin)*i/5;ctx.fillText(val.toFixed(kind==='t'?0:0),42+(w-60)*i/5-5,base+18)}}
drawFamily($('#t-curvas'),'t');drawFamily($('#chi-curvas'),'chi');
function renderIcPh(){const r=$('#icph-mu0');if(!r)return;const v=Number(r.value),inside=v>=51.2&&v<=54.8;$('#icph-mu0-out').textContent=v.toFixed(1).replace('.',',');const pos=(v-49)/(56-49)*100;$('#marca-mu0').style.left=`${Math.max(0,Math.min(100,pos))}%`;$('#icph-conclusion').innerHTML=inside?`μ₀ = ${v.toFixed(1).replace('.',',')} queda <strong>dentro</strong> del IC del 95 % → en la PH bilateral equivalente con α=0,05, <strong>no se rechaza H₀</strong>.`:`μ₀ = ${v.toFixed(1).replace('.',',')} queda <strong>fuera</strong> del IC del 95 % → en la PH bilateral equivalente con α=0,05, <strong>se rechaza H₀</strong>.`}
$('#icph-mu0')?.addEventListener('input',renderIcPh);renderIcPh();
const formAuto5=$('#form-autoevaluacion-u5');if(formAuto5){prepararFeedbackAuto(formAuto5);formAuto5.addEventListener('submit',e=>{e.preventDefault();corregirAutoevaluacion({form:formAuto5,claves:{i1:'b',i2:'a',i3:'b',i4:'a',i5:'b',i6:'a',i7:'b',i8:'a',i9:'a',i10:'b'},pistas:{i1:'Volvé a la idea de variabilidad muestral.',i2:'Distinguí variabilidad individual de variabilidad entre estadísticas muestrales.',i3:'El TCL se refiere a la distribución muestral, no a que los datos originales cambien de forma.',i4:'Revisá la interpretación de cobertura en muestreos repetidos.',i5:'La inferencia clásica sobre la varianza usa una distribución positiva y asimétrica.',i6:'α corresponde al error tipo I; β al tipo II.',i7:'No rechazar no equivale a aceptar o demostrar H₀.',i8:'Compará qué se desconoce en un IC y qué se supone bajo H₀ en una PH.',i9:'Al crecer n disminuye el error estándar.',i10:'La herramienta calcula; la formulación y la interpretación siguen siendo parte del trabajo estadístico.'},resultado:$('#resultado-auto-u5'),umbral:7})})}

// U5: planificación simple de tamaño muestral para la media con sigma conocida
(()=>{const b=document.querySelector('#n-calcular');if(!b)return;const calc=()=>{const z=Number(document.querySelector('#n-conf').value),sg=Number(document.querySelector('#n-sigma').value),E=Number(document.querySelector('#n-error').value),o=document.querySelector('#n-resultado');if(!(sg>0&&E>0)){o.textContent='Ingresá valores positivos para σ y E.';return}const nr=(z*sg/E)**2,n=Math.ceil(nr);o.textContent=`n calculado = ${nr.toFixed(2)} → tamaño mínimo: n = ${n}`};b.addEventListener('click',calc);calc()})();

// U5: planificación aproximada para una media con sigma desconocida a partir de una muestra piloto
(()=>{const b=document.querySelector('#nt-calcular');if(!b)return;const tAprox=(z,v)=>z+(z**3+z)/(4*v)+(5*z**5+16*z**3+3*z)/(96*v**2)+(3*z**7+19*z**5+17*z**3-15*z)/(384*v**3);const calc=()=>{const z=Number(document.querySelector('#nt-conf').value),n0=Number(document.querySelector('#nt-n0').value),s0=Number(document.querySelector('#nt-s0').value),E=Number(document.querySelector('#nt-error').value),o=document.querySelector('#nt-resultado');if(!(Number.isInteger(n0)&&n0>=3&&s0>0&&E>0)){o.textContent='Ingresá n₀ entero (al menos 3) y valores positivos para s₀ y E.';return}const gl=n0-1,t=tAprox(z,gl),nr=(t*s0/E)**2,n=Math.ceil(nr);o.textContent=`t crítico ≈ ${t.toFixed(3).replace('.',',')} (gl=${gl}); n calculado = ${nr.toFixed(2).replace('.',',')} → tamaño mínimo planificado: n = ${n}`};b.addEventListener('click',calc);calc()})();

// U5: planificación simple de tamaño muestral para una proporción
(()=>{const b=document.querySelector('#np-calcular');if(!b)return;const calc=()=>{const z=Number(document.querySelector('#np-conf').value),p=Number(document.querySelector('#np-p').value),E=Number(document.querySelector('#np-error').value),o=document.querySelector('#np-resultado');if(!(p>0&&p<1&&E>0&&E<1)){o.textContent='Ingresá una proporción entre 0 y 1 y un margen E positivo.';return}const nr=z*z*p*(1-p)/(E*E),n=Math.ceil(nr);o.textContent=`n calculado = ${nr.toFixed(2).replace('.',',')} → tamaño mínimo: n = ${n}`};b.addEventListener('click',calc);calc()})();
