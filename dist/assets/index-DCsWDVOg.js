import"./main-CB3s8Pmn.js";import{n as e,t}from"./reviews-slider-4RDGa-dK.js";var n=document.querySelector(`#business-slider`);if(n){let r=new e(n,{type:`loop`,perPage:1,perMove:1,gap:`16px`,arrows:!0,pagination:!0,autoplay:!1,flickMaxPages:1,flickPower:100});t(r,n),r.mount()}function r(e){return e>=1e7?`10+ млн ₽`:e>=1e6?(e/1e6).toLocaleString(`ru-RU`,{minimumFractionDigits:2,maximumFractionDigits:2})+` млн ₽`:Math.round(e).toLocaleString(`ru-RU`)+` ₽`}function i(e){return Math.round(e).toLocaleString(`ru-RU`)+` ₽`}function a(e,t,n,r){e=Math.abs(Math.round(e));let i=e%10,a=e%100;return a>=11&&a<=14?r:i===1?t:i>=2&&i<=4?n:r}function o(e,t){let n=e*3;if(t===`ip`)return n<12e6?{rate:.04,label:`4%`,individual:!1}:{rate:.04,label:`4%`,individual:!0};if(t===`fl`)return n<3e6?{rate:.09,label:`9%`,individual:!1}:n<12e6?{rate:.07,label:`7%`,individual:!1}:n<2e7?{rate:.035,label:`3,5%`,individual:!1}:{rate:.035,label:`3,5%`,individual:!0};if(t===`mixed`){let t=o(e,`ip`),n=o(e,`fl`),r=(t.rate+n.rate)/2,i=t.individual||n.individual;return{rate:r,label:Math.round(r*1e3)/10+`%`,individual:i}}}function s(e){let t=+e.min||0,n=+e.max||100,r=(+e.value-t)/(n-t)*100;e.style.setProperty(`--percent`,r+`%`)}function c(){let e=+document.getElementById(`sl-count`).value,t=+document.getElementById(`sel-role`).value,n=+document.getElementById(`sl-budget`).value,r=n>=1e7,i=r?1e7:n,a=document.getElementById(`sel-type`).value,s=document.getElementById(`chk-vat`).checked,c={ip:{newMin:70,recMin:50},fl:{newMin:90,recMin:65},mixed:{newMin:80,recMin:57}},u=c[a]||c.ip,d=e*(.3*(u.newMin/60)+.7*(u.recMin/60)),f=d/8,p=d*t,m=o(i,a),h=i*m.rate,g=s?(i+h)*.22:0,_=p+g-h;document.getElementById(`results`).innerHTML=l(d,f,p,h,g,_,m,s,r)}function l(e,t,n,r,o,s,c,l,u){let d=s>=0,f=Math.round(t*10)/10,p=a(Math.ceil(t),`рабочий день`,`рабочих дня`,`рабочих дней`),m=Math.round(e*10)/10,h=e>=8&&f>0?`<div class="calc__equivalent-box">
          <span class="calc__equivalent-label">Эквивалентно</span>
          <strong class="calc__equivalent-value">${f} ${p}</strong>
          <span class="calc__equivalent-desc">которые специалист тратит только на оформление документов</span>
         </div>`:`<div class="calc__equivalent-box">
          <span class="calc__equivalent-desc">Время на оформление бумаг незначительно при малом количестве фрилансеров, но его тоже можно оптимизировать.</span>
         </div>`,g=u?`не менее ${i(s)}`:`${d?`+`:``}${i(s)}`,_=`
      <div class="calc__card">
        <div class="calc__time-value">
          <span class="calc__time-num">${m}</span>
          <span class="calc__time-unit">часов</span>
        </div>
        <p class="calc__time-desc">в месяц — на договоры, акты, проверку исполнителей и коммуникацию с ними</p>
        ${h}
        <p class="calc__card-footnote">Расчёт — на основе среднерыночных данных.<br>С Solar Staff все процессы автоматизированы.</p>
      </div>
    `,v=l?`
      <div class="calc__breakdown-row">
        <span class="calc__breakdown-label">НДС к вычету (22%)</span>
        <span class="calc__breakdown-value calc__breakdown-value_pos">+${i(o)}</span>
      </div>
    `:``;return`${_}${`
      <div class="calc__card">
        <div class="calc__savings-box">
          <div class="calc__savings-val">${g} <span class="calc__savings-period">/месяц</span></div>
          <p class="calc__savings-desc">без учета снижения налоговых и юридических рисков</p>
        </div>
        
        <div class="calc__breakdown">
          <div class="calc__breakdown-row">
            <span class="calc__breakdown-label">Скрытые расходы на администрирование</span>
            <span class="calc__breakdown-value">${i(n)}</span>
          </div>
          <div class="calc__breakdown-row">
            <span class="calc__breakdown-label">Комиссия Solar Staff</span>
            <span class="calc__breakdown-value calc__breakdown-value_neg">-${i(r)}</span>
          </div>
          ${v}
        </div>
      </div>
    `}`}var u=document.getElementById(`sl-count`),d=document.getElementById(`sl-budget`);u&&d&&(s(u),s(d),u.addEventListener(`input`,function(){document.getElementById(`cnt-out`).textContent=this.value,s(this),c()}),d.addEventListener(`input`,function(){document.getElementById(`budget-out`).textContent=r(+this.value),s(this),c()}),[`sel-role`,`sel-type`,`chk-vat`].forEach(e=>{document.getElementById(e).addEventListener(`change`,c)}),c());