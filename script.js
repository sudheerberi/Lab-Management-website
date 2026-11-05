
const sidebar=document.querySelector('.sidebar');
document.querySelector('.menu-toggle')?.addEventListener('click',()=>sidebar.classList.toggle('open'));
document.querySelectorAll('[data-open-modal]').forEach(b=>b.addEventListener('click',()=>document.querySelector('#'+b.dataset.openModal)?.classList.add('open')));
document.querySelectorAll('[data-close-modal]').forEach(b=>b.addEventListener('click',()=>b.closest('.modal').classList.remove('open')));
document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('open')}));
document.querySelectorAll('[data-search]').forEach(input=>input.addEventListener('input',()=>{const q=input.value.toLowerCase();const rows=[...document.querySelectorAll('[data-row]')];let n=0;rows.forEach(r=>{const ok=r.innerText.toLowerCase().includes(q);r.style.display=ok?'':'none';if(ok)n++});const empty=document.querySelector('.empty');if(empty)empty.style.display=n?'none':'block'}));
document.querySelectorAll('[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const msg=form.querySelector('.form-message');if(msg)msg.textContent='Saved in this demo session. Connect a database/backend for permanent records.';form.reset()}));
document.querySelectorAll('[data-export]').forEach(btn=>btn.addEventListener('click',()=>{const table=btn.closest('.panel')?.querySelector('table')||document.querySelector('table');if(!table)return;const csv=[...table.rows].map(row=>[...row.cells].map(c=>'"'+c.innerText.replaceAll('"','""')+'"').join(',')).join('\\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='lab-records.csv';a.click();URL.revokeObjectURL(a.href)}));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
