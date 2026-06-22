const menuData={
starters:[
{name:'Tartar de vită',grams:'270 g',price:'70 lei',desc:'Mușchi de vită, ou, ceapă roșie, castraveți murați, capere, sos Worcester, sos tabasco, pătrunjel, chives, sos de soia, pâine.'},
{name:'Tartar de somon',grams:'270 g',price:'50 lei',desc:'File de somon, somon fumé, avocado, maioneză, ulei de susan, togarashi, sos de soia, sweet chilli, ceapă roșie, suc de lămâie, pâine.'},
{name:'Salată Caprese',grams:'270 g',price:'30 lei',desc:'Mini mozzarella, roșii cherry, pesto, busuioc.'},
{name:'Platou brânzeturi',grams:'480 g',price:'95 lei',desc:'Gorgonzola, brânză Beemster, parmezan, nuci, struguri, grisine.'}
],
vita:[
{name:'Tagliata de vită',grams:'300 g',price:'80 lei',desc:'Mușchi de vită, rucola, roșii cherry, ulei de măsline, parmezan, cremă de oțet balsamic.'},
{name:'Surf and turf',grams:'550 g',price:'150 lei',desc:'Mușchi de vită, scoici Saint Jacques, creveți, țelină, sparanghel, sos de usturoi, lapte, smântână vegetală.'},
{name:'Tournedos Rossini',grams:'470 g',price:'140 lei',desc:'Mușchi de vită, camembert, foie gras, sos de ciuperci, ceapă, usturoi, smântână vegetală, făină, ou, miere, cognac.'},
{name:'Antricot de vită cu sote de ciuperci',grams:'500 g',price:'99 lei',desc:'Servit cu sos de piper verde și sos gorgonzola.'}
],
peste:[
{name:'Fritto misto',grams:'700 g',price:'75 lei',desc:'Creveți, carne de midii, file tilapia, caracatiță, ardei gras, morcov, dovlecel, cartofi dippers, sos aioli și sos sweet chilli.'},
{name:'File de ton cu orez negru',grams:'450 g',price:'79 lei',desc:'File de ton, orez negru, morcov, ardei, ceapă, pătrunjel, ceapă verde, suc de lămâie.'},
{name:'File de somon cu risotto',grams:'470 g',price:'90 lei',desc:'File de somon, orez arborio, șofran, sparanghel, vin alb, ceapă, usturoi, suc de lămâie, unt.'},
{name:'Caracatiță pe pat de rucola',grams:'400 g',price:'110 lei',desc:'Tentacule de caracatiță, rucola, roșii cherry, ulei de măsline, usturoi, cremă de oțet balsamic, lămâie.'}
],
porc:[
{name:'Coaste de porc cu cartofi aurii',grams:'670 g',price:'65 lei',desc:'Coaste de porc, cartofi aurii, sos barbeque, ceapă crispy.'},
{name:'Mușchiuleț de porc cu cartofi',grams:'500 g',price:'45 lei',desc:'Mușchiuleț de porc, bacon, cartofi cu rozmarin, sos de piper verde, unt, usturoi, sare, piper.'},
{name:'Cotlet de porc Dracula',grams:'500 g',price:'53 lei',desc:'Cotlet de porc, mozzarella, pancetta, cârnați, cartofi gratinați, ciuperci la grătar, ardei iute, sos picant.'},
{name:'Platou MV',grams:'1400 g',price:'190 lei',desc:'Cârnați, ceafă, coaste aurii, piept de pui, cartofi dippers, salată asortată, murături, roșii, brânză, sfeclă, pâine.'}
],
paste:[
{name:'Spaghete Carbonara',grams:'300 g',price:'40 lei',desc:'Spaghete, guanciale, ulei de măsline, ou, pecorino, parmezan.'},
{name:'Garganelli quattro formaggi',grams:'300 g',price:'42 lei',desc:'Garganelli, lapte, smântână vegetală, gorgonzola, parmezan, brânză brie, cheddar.'},
{name:'Tagliatelle cu vită și ciuperci',grams:'350 g',price:'45 lei',desc:'Tagliatelle, mușchi de vită, ciuperci, smântână vegetală, unt, vin alb, pătrunjel.'},
{name:'Risotto cu ciuperci și ulei de trufe',grams:'250 g',price:'25 lei',desc:'Orez arborio, vin, ciuperci, smântână de gătit, unt, parmezan, ulei de trufe, pătrunjel.'}
],
desert:[
{name:'Lava cake',grams:'220 g',price:'30 lei',desc:'Ciocolată, unt, ou, făină, zahăr, înghețată.'},
{name:'Crème brûlée',grams:'150 g',price:'30 lei',desc:'Ou, zahăr, vanilie, frișcă lichidă, lapte, înghețată, zahăr.'},
{name:'Papanași',grams:'400 g',price:'30 lei',desc:'Făină, brânză dulce, ou, zahăr vanilat, praf de copt, bicarbonat, dulceață de afine, smântână.'},
{name:'Pară în vin',grams:'250 g',price:'35 lei',desc:'Pară, scorțișoară, vin roșu, zahăr vanilat.'}
]};
const menuList=document.getElementById('menuList');
function renderMenu(category='starters'){menuList.innerHTML=menuData[category].map(item=>`<article class="menu-item"><header><div><h3>${item.name}</h3><span class="grams">${item.grams}</span></div><strong class="price">${item.price}</strong></header><p>${item.desc}</p></article>`).join('')}
renderMenu();
document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderMenu(btn.dataset.category)}));
document.getElementById('year').textContent=new Date().getFullYear();
const nav=document.getElementById('nav');document.getElementById('menuToggle').addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const lightbox=document.getElementById('lightbox');document.querySelectorAll('.gallery-grid img').forEach(img=>img.addEventListener('click',()=>{lightbox.querySelector('img').src=img.src;lightbox.classList.add('open')}));lightbox.querySelector('button').addEventListener('click',()=>lightbox.classList.remove('open'));lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.classList.remove('open')});
