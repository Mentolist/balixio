// Extracted from inline <script> #1
'use strict';
const $=id=>document.getElementById(id);const qs=(s,r=document)=>Array.from(r.querySelectorAll(s));
const icons={rocket:'<svg viewBox="0 0 24 24"><path d="M5 19c2-1 4-1 5 0 0-2 1-5 4-8 2-2 4-3 6-3 0 2-1 4-3 6-3 3-6 4-8 4 1 1 1 3 0 5"/><path d="M8 16l-4 4"/><circle cx="15" cy="9" r="1.5"/></svg>',shield:'<svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z"/><path d="M9 12l2 2 4-5"/></svg>',chart:'<svg viewBox="0 0 24 24"><path d="M4 19V5M4 19h16M7 15l4-4 3 3 5-7"/></svg>',users:'<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20c1-4 4-6 6-6s5 2 6 6"/><circle cx="17" cy="9" r="2"/><path d="M15 15c2 0 4 2 5 5"/></svg>',globe:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>',building:'<svg viewBox="0 0 24 24"><path d="M4 21V6l8-3 8 3v15"/><path d="M8 9h2M14 9h2M8 13h2M14 13h2M10 21v-4h4v4"/></svg>',support:'<svg viewBox="0 0 24 24"><path d="M4 13a8 8 0 0116 0"/><path d="M4 13v4a2 2 0 002 2h2v-8H6a2 2 0 00-2 2zM20 13v4a2 2 0 01-2 2h-2v-8h2a2 2 0 012 2z"/></svg>',apps:'<svg viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/></svg>',user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c2-5 6-7 8-7s6 2 8 7"/></svg>',briefcase:'<svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2M3 12h18"/></svg>',lock:'<svg viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/></svg>',doc:'<svg viewBox="0 0 24 24"><path d="M6 3h9l3 3v15H6z"/><path d="M15 3v4h4M9 12h6M9 16h6"/></svg>',bot:'<svg viewBox="0 0 24 24"><rect x="5" y="8" width="14" height="10" rx="3"/><path d="M12 8V4M8 13h.01M16 13h.01M9 18v2M15 18v2"/></svg>',link:'<svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 007 0l2-2a5 5 0 00-7-7l-1 1"/><path d="M14 11a5 5 0 00-7 0l-2 2a5 5 0 007 7l1-1"/></svg>',analytics:'<svg viewBox="0 0 24 24"><path d="M4 19V5M4 19h16"/><rect x="7" y="11" width="3" height="6"/><rect x="12" y="7" width="3" height="10"/><rect x="17" y="13" width="3" height="4"/></svg>',gov:'<svg viewBox="0 0 24 24"><path d="M3 10l9-6 9 6zM5 10v9M9 10v9M15 10v9M19 10v9M3 21h18"/></svg>',diamond:'<svg viewBox="0 0 24 24"><path d="M6 4h12l4 6-10 11L2 10z"/><path d="M2 10h20M8 4l4 17 4-17"/></svg>',crm:'<svg viewBox="0 0 24 24"><path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h5M17 17l3 3"/></svg>',shop:'<svg viewBox="0 0 24 24"><path d="M4 10h16l-2 10H6zM8 10V6a4 4 0 018 0v4"/></svg>'};
function renderIcons(){qs('[data-icon]').forEach(el=>{el.innerHTML=icons[el.dataset.icon]||icons.apps})}
const roleForms={
'Сотрудник':'<form id="popupRegisterForm"><select required><option value="">Выбор организации</option><option>BaliXiO Global</option><option>BaliXiO Digital Group</option><option>BaliXiO Technologies</option></select><div class="form-row"><input type="text" placeholder="Фамилия" required><input type="text" placeholder="Имя" required></div><input type="text" placeholder="Логин" required><input type="password" placeholder="Пароль" required><div class="form-row"><button class="back-btn" type="button" data-action="close">Назад к регистрации</button><button class="submit" type="submit">Войти</button></div><p class="message"></p></form>',
'Пользователь':'<form id="popupRegisterForm"><div class="form-row"><select required><option value="">Страна</option><option>Индонезия</option><option>Россия</option><option>Казахстан</option><option>ОАЭ</option></select><input type="text" placeholder="Регион" required></div><input type="text" placeholder="Город" required><input type="text" placeholder="ФИО" required><input type="email" placeholder="Почта" required><div class="form-row"><input type="password" placeholder="Пароль" required><input type="password" placeholder="Подтвердить пароль" required></div><span class="form-label">Также можно войти через</span><div class="auth-options"><button class="auth-option" type="button" data-action="open-services" data-type="gov">Гос сервисы</button><button class="auth-option" type="button" data-action="open-services" data-type="messenger">Мессенджеры</button><button class="auth-option" type="button" data-action="open-services" data-type="mail">Почта</button></div><div class="form-row"><button class="back-btn" type="button" data-action="close">Назад к регистрации</button><button class="submit" type="submit">Зарегистрироваться</button></div><button class="back-btn" type="button" style="width:100%;margin-top:10px" data-action="login">Войти если уже зарегистрирован</button><p class="message"></p></form>',
'Компания':'<form id="popupRegisterForm"><div class="form-row"><input type="text" placeholder="Полное название компании" required><input type="text" placeholder="Краткое название" required></div><div class="form-row"><input type="text" placeholder="Регистрационный номер / ИНН" required><input type="text" placeholder="Налоговый идентификатор" required></div><div class="form-row"><select required><option value="">Страна регистрации</option><option>Индонезия</option><option>Россия</option><option>Казахстан</option><option>ОАЭ</option><option>Сингапур</option></select><input type="text" placeholder="Регион / Штат" required></div><div class="form-row"><input type="text" placeholder="Город" required><input type="text" placeholder="Почтовый индекс" required></div><input type="text" placeholder="Юридический адрес" required><input type="text" placeholder="Фактический адрес" required><div class="form-row"><input type="text" placeholder="Генеральный директор" required><input type="text" placeholder="Контактное лицо" required></div><div class="form-row"><input type="tel" placeholder="Контактный телефон" required><input type="email" placeholder="Корпоративная почта" required></div><textarea placeholder="Описание деятельности компании" required></textarea><span class="form-label">Прикрепить документы</span><input type="file" multiple required><p class="file-note">Загрузите регистрационные документы, лицензии, сертификаты, уставные документы, доверенности и банковские реквизиты.</p><div class="form-row"><input type="text" placeholder="Название банка"><input type="text" placeholder="SWIFT / BIC"></div><div class="form-row"><button class="back-btn" type="button" data-action="close">Назад к регистрации</button><button class="submit" type="submit">Зарегистрировать компанию</button></div><p class="message"></p></form>'};
const references={scale:{title:'Масштабируйте бизнес',text:'BaliXiO помогает компаниям выходить на международные рынки, находить партнёров, запускать новые направления и управлять ростом через единую цифровую среду.',chips:['Международный рост','B2B-сделки','Партнёры','Маркетплейс','Инвесторы'],cards:[['Единая рабочая среда','Задачи, контрагенты, документы, сделки и аналитика в одном кабинете.'],['Партнёрская сеть','Поиск компаний, заявок, предложений и совместных проектов.'],['Новые рынки','Инструменты для выхода на другие регионы, страны и категории клиентов.']]},automation:{title:'Автоматизация процессов',text:'Платформа убирает рутину: документы, заявки, статусы, согласования и коммуникации проходят по понятным цифровым маршрутам.',chips:['Workflow','Документы','Заявки','Статусы','ИИ'],cards:[['Документооборот','Договоры, счета, акты, шаблоны и электронная подпись.'],['Контроль выполнения','Ответственные, сроки, уведомления и прозрачная история действий.'],['Экономия ресурсов','Меньше ручных операций, меньше ошибок, больше скорости.']]},integrations:{title:'Интеграции',text:'BaliXiO соединяет банки, CRM, ERP, государственные сервисы, маркетплейсы и корпоративные системы через управляемую цифровую архитектуру.',chips:['API','ETL','Data Layer','Банки','Госреестры'],cards:[['API-интеграции','Подключайте внешние сервисы и внутренние системы без сложной перестройки.'],['Data Layer','Единый слой данных для контроля, аналитики и безопасного обмена.'],['Государственные сервисы','Заявки, отчётность, реестры и маршруты взаимодействия.']]},analytics:{title:'Аналитика и отчёты',text:'BaliXiO превращает данные в управленческие решения: метрики, прогнозы, отчёты, рекомендации ИИ и прозрачная картина развития бизнеса.',chips:['CRM','Отчёты','Прогнозы','KPI','ИИ'],cards:[['Понятные метрики','Следите за сделками, командами, документами, финансами и клиентами.'],['Прогнозирование','Оценивайте рост, эффективность и потенциальные точки развития.'],['Инвесторская прозрачность','Структурированные данные помогают привлекать капитал и показывать динамику.']]}};
const segments={business:['Для бизнеса','BaliXiO заменяет десятки сервисов: CRM, Office/Google Workspace, корпоративную почту, мессенджеры, Zoom, онлайн-бухгалтерию, HR и документооборот. Компания получает единый кабинет, где видны сотрудники, сделки, задачи, документы, финансы, партнёры и AI-аналитика.'],users:['Для пользователей и сотрудников','Внутри BaliXiO находятся рабочая почта, бизнес-мессенджер, документы, таблицы, задачи, видеовстречи и личный кабинет. Сотрудник работает в одной среде, а данные остаются внутри компании.'],gov:['Для государства','BaliXiO помогает выстроить прозрачное взаимодействие государства и бизнеса: заявки, отчётность, реестры, статусы, цифровые маршруты, интеграции и контроль процессов без лишней бюрократии.'],investors:['Для инвесторов','Инвесторы получают витрину проектов, проверенные компании, финансовые показатели, документы, оценку рисков, онлайн-встречи и инфраструктуру сопровождения сделок.'],startups:['Для стартапов','Стартапы получают рабочую инфраструктуру, AI-ассистента, документы, CRM, партнёров, обучение, доступ к инвесторам и будущий бизнес-инкубатор BaliXiO для роста и акселерации.']};
const authServices={gov:{title:'Государственные сервисы',sections:{'Россия':['Госуслуги','ФНС','ЕСИА','МВД Онлайн','Сбер ID'],'Европа':['eIDAS','BankID Sweden','itsme Belgium','SPID Italy'],'Азия':['Singpass','MyGovID','DigiLocker','MyKad']}},messenger:{title:'Мессенджеры',sections:{'Популярные':['Telegram','WhatsApp','Viber','Facebook Messenger'],'Корпоративные':['Slack','Microsoft Teams','Discord','WeChat'],'Региональные':['LINE','KakaoTalk','Signal','VK Messenger']}},mail:{title:'Почтовые сервисы',sections:{'Международные':['Gmail','Outlook','Yahoo Mail','iCloud Mail'],'Россия и СНГ':['Mail.ru','Yandex Почта','Rambler','Tut.by'],'Бизнес':['Zoho Mail','Proton Mail','Fastmail','GMX']}}};
function showOverlay(){ $('overlay').classList.add('active') }function closeAllPopups(){qs('.popup').forEach(p=>p.classList.remove('active'));$('overlay').classList.remove('active')}function openDynamic(title,subtitle,html){showOverlay();$('dynamicTitle').textContent=title;$('dynamicSubtitle').textContent=subtitle||'';$('dynamicContent').innerHTML=html;$('dynamicWindow').classList.add('active')}function openRolePopup(role){openDynamic(role==='Сотрудник'?'Вход сотрудника':'Регистрация — '+role,'Заполните данные для продолжения работы с BaliXiO.',roleForms[role]||'');bindPopupForm()}function openLoginPopup(){openDynamic('Вход в аккаунт','Введите данные или выберите удобный способ авторизации.','<div><input type="text" placeholder="Email или логин"><input type="password" placeholder="Пароль"><div class="auth-options"><button class="auth-option" type="button" data-action="open-services" data-type="gov">Гос сервисы</button><button class="auth-option" type="button" data-action="open-services" data-type="messenger">Мессенджеры</button><button class="auth-option" type="button" data-action="open-services" data-type="mail">Почта</button></div><div class="form-row"><button class="back-btn" type="button" data-action="close">Назад</button><button class="submit" type="button">Войти</button></div></div>')}
function marketingBlock(){return '<div style="margin-top:26px" class="op-grid"><div class="op-card"><h4>Почему это важно</h4><p>Рынок перегружен разрозненными сервисами, таблицами, CRM и хаотичными коммуникациями. BaliXiO объединяет всё в одном цифровом пространстве.</p></div><div class="op-card"><h4>Что меняется</h4><p>Процессы становятся прозрачнее, руководители получают аналитику, сотрудники — понятные маршруты, а партнёры — удобное взаимодействие.</p></div><div class="op-card"><h4>Эффект экосистемы</h4><p>BaliXiO — это инфраструктура нового поколения, где бизнес, пользователи, инвесторы и государство работают в единой среде.</p></div></div><div style="margin-top:28px;padding:26px;border-radius:24px;background:linear-gradient(135deg,rgba(67,122,255,.16),rgba(192,74,255,.14));border:1px solid rgba(255,255,255,.12)"><div style="font-size:28px;font-weight:900;margin-bottom:14px">BaliXiO формирует цифровую экономику будущего</div><div style="font-size:15px;line-height:1.8;color:rgba(255,255,255,.78)">Платформа создаётся как международная цифровая инфраструктура, объединяющая компании, пользователей, государственные сервисы, инвестиционные механизмы и интеллектуальную аналитику.</div></div>'}
function showReference(key){const item=references[key];openDynamic(item.title,item.text,'<div class="op-badges">'+item.chips.map(c=>'<span class="op-badge">'+c+'</span>').join('')+'</div><div class="reference-cards">'+item.cards.map(c=>'<div class="reference-card"><b>'+c[0]+'</b><span>'+c[1]+'</span></div>').join('')+'</div>'+marketingBlock())}
function showSegment(key){const s=segments[key];if(!s)return;openDynamic(s[0],s[1],'<div style="padding:26px;border-radius:24px;background:linear-gradient(135deg,rgba(76,134,255,.16),rgba(185,74,255,.12));border:1px solid rgba(255,255,255,.12);margin-bottom:26px"><div style="font-size:30px;font-weight:900;margin-bottom:16px">BaliXiO — это не просто платформа.</div><div style="font-size:15px;line-height:1.8;color:rgba(255,255,255,.78)">Это международная цифровая экосистема нового поколения, которая объединяет инфраструктуру, данные, процессы, аналитику и взаимодействие в едином пространстве.</div></div>'+marketingBlock())}
const audienceVideos={
  gov:{title:'Видео: государственный сектор',subtitle:'Плейсхолдер под ролик о ведомствах, реестрах и защищённых цифровых маршрутах',headline:'Government Infrastructure Layer',text:'Здесь будет ролик о том, как государственные организации используют BaliXiO для заявок, реестров, отчётности, документооборота, встреч и прозрачного взаимодействия с компаниями.',meta:[['Фокус','ведомства, реестры, отчётность, цифровые маршруты'],['Уровень доступа','защищённая инфраструктура для госорганизаций'],['Видео','позже сюда вставляется MP4/WebM или iframe']]},
  business:{title:'Видео: частный сектор',subtitle:'Плейсхолдер под ролик о компаниях, командах и операционной среде бизнеса',headline:'Business Operating System',text:'Здесь будет ролик о том, как компания заменяет разрозненные CRM, таблицы, документы, чаты, Zoom, HR и финансы единой рабочей средой BaliXiO.',meta:[['Фокус','компания, сотрудники, сделки, документы, AI'],['Результат','меньше хаоса и больше контроля над процессами'],['Видео','позже сюда вставляется корпоративный ролик']]},
  investor:{title:'Видео: инвесторы и фонды',subtitle:'Плейсхолдер под ролик об инвестиционных кабинетах, аналитике и прозрачных сделках',headline:'Investment & Data Intelligence',text:'Здесь будет ролик о том, как инвестор видит структурированные карточки проектов, документы, показатели, риски, команду, историю и AI-аналитику внутри BaliXiO.',meta:[['Фокус','проекты, фонды, сделки, риски, аналитика'],['Ценность','прозрачный доступ к компаниям и инвестиционным данным'],['Видео','позже сюда вставляется investor showcase']]},
  startup:{title:'Видео: стартапы',subtitle:'Плейсхолдер под ролик об инфраструктуре, обучении, партнёрах и капитале для стартапов',headline:'Startup Launch Infrastructure',text:'Здесь будет ролик о том, как стартап получает рабочую среду, AI, обучение, партнёров, инвесторов и будущий бизнес-инкубатор внутри экосистемы BaliXiO.',meta:[['Фокус','быстрый запуск, обучение, партнёры, инвесторы'],['Ценность','инфраструктура роста с ранней стадии'],['Видео','позже сюда вставляется startup trailer']]},
  user:{title:'Видео: пользователи и сотрудники',subtitle:'Плейсхолдер под ролик о личной и рабочей среде внутри BaliXiO',headline:'Personal & Work Digital Space',text:'Здесь будет ролик о том, как пользователь или сотрудник работает в одном окне: почта, чат, документы, задачи, видеовстречи, AI-помощник и статусы процессов.',meta:[['Фокус','личный кабинет, работа, коммуникации, документы'],['Ценность','меньше переключений между сервисами'],['Видео','позже сюда вставляется user journey']]}
};
function openAudienceVideo(key){
  const item=audienceVideos[key]||audienceVideos.user;
  const meta=(item.meta||[]).map(m=>`<div><b>${esc(m[0])}</b><span>${esc(m[1])}</span></div>`).join('');
  openDynamic(item.title,item.subtitle,`<div class="video-modal-pro audience-video-modal"><div class="video-frame-pro" data-video-slot="audience-${esc(key)}"><div class="video-placeholder-pro"><div class="play-orb-pro">▶</div><h3>${esc(item.headline)}</h3><p>${esc(item.text)}</p></div></div><div class="video-meta-pro">${meta}</div><div class="video-note-pro">Это отдельное видео-окно для выбранной аудитории. Когда ролик будет готов, сюда можно вставить настоящий файл видео, не меняя логику карточек.</div></div>`);
}
function openServices(type){const config=authServices[type];if(!config)return;showOverlay();$('servicesPopup').classList.add('active');$('servicesTitle').textContent=config.title;$('servicesGrid').innerHTML=Object.entries(config.sections).map(([section,items])=>'<div class="service-column"><h4>'+section+'</h4>'+items.map(item=>'<div class="service-item">'+item+'</div>').join('')+'</div>').join('')}
function bindPopupForm(){const form=$('popupRegisterForm');if(!form)return;form.addEventListener('submit',e=>{e.preventDefault();const p=form.querySelectorAll('input[type="password"]');const msg=form.querySelector('.message');if(p.length>=2&&p[0].value!==p[1].value){msg.style.color='#ff6b88';msg.textContent='Пароли не совпадают.';msg.style.display='block';return}msg.style.color='#20e3b2';msg.textContent='Данные приняты в демо-режиме.';msg.style.display='block'})}
function openOpportunities(){openDynamic('Возможности BaliXiO','Единая цифровая экосистема для бизнеса, пользователей, государства и инвесторов.','<div class="op-grid"><div class="op-card"><h4>Архитектура</h4><p>Кабинеты, документы, сделки, данные и сервисы в одной управляемой среде.</p></div><div class="op-card"><h4>B2B</h4><p>Поиск партнёров, заявки, сделки, контрагенты и история взаимодействий.</p></div><div class="op-card"><h4>Государство</h4><p>Заявки, отчётность, реестры и маршруты взаимодействия.</p></div></div>'+marketingBlock())}
function openAiInfo(){openDynamic('AI-рекомендации','BaliXiO AI анализирует роль пользователя и предлагает следующий лучший шаг.','<div class="op-grid"><div class="op-card"><h4>Умный старт</h4><p>AI подбирает модули платформы под цели компании или пользователя.</p></div><div class="op-card"><h4>Интеграции</h4><p>Подсказывает, какие сервисы подключить в первую очередь.</p></div><div class="op-card"><h4>Рост</h4><p>Помогает найти точки роста, партнёров и рынки.</p></div></div>'+marketingBlock())}
document.addEventListener('click',e=>{const el=e.target.closest('[data-action]');if(!el)return;const a=el.dataset.action;if(a==='close')closeAllPopups();if(a==='opportunities'||a==='tour')openOpportunities();if(a==='role'){qs('.role-card').forEach(c=>c.classList.remove('selected'));if(el.classList.contains('role-card'))el.classList.add('selected');openRolePopup(el.dataset.role)}if(a==='login')openLoginPopup();if(a==='info')showReference(el.dataset.info);if(a==='audience-video')openAudienceVideo(el.dataset.audienceVideo);if(a==='segment')showSegment(el.dataset.segment);if(a==='open-services')openServices(el.dataset.type);if(a==='toggle-ai')$('aiAssistant').classList.toggle('collapsed');if(a==='ai-info')openAiInfo();if(a==='collapse-auth')$('authPanel').style.display='none'});$('overlay').addEventListener('click',closeAllPopups);$('navOpportunities').addEventListener('click',openOpportunities);
const liveEvents=['Новая компания открыла корпоративный кабинет','AI завершил анализ документов','Инвестор просмотрел проект BaliXiO Invest','Подключён новый API-сервис','Пользователь прошёл цифровую идентификацию','Создана новая B2B-заявка','Система обновила прогноз по рынку','GovTech-маршрут готов к отправке'];let liveIndex=0;function pushLiveEvent(){const text=liveEvents[liveIndex%liveEvents.length];const ticker=$('tickerText');if(ticker)ticker.textContent=text;const feed=$('liveMiniFeed');if(feed){const item=document.createElement('div');item.className='mini-feed-item';item.textContent='● '+text;feed.prepend(item);while(feed.children.length>3)feed.removeChild(feed.lastChild)}liveIndex++}
renderIcons();console.assert(typeof setInterval==='function','setInterval exists');console.assert(typeof openRolePopup==='function','openRolePopup exists');console.assert(qs('[data-action]').length>0,'interactive buttons exist');pushLiveEvent();window.balixioLiveTimer=setInterval(pushLiveEvent,3200);
// === Premium marketing upgrade interactions ===
const flowData={
 business:{title:'Бизнес получает центр управления компанией',text:'Компания переносит рабочие процессы в BaliXiO: CRM, документы, задачи, почту, мессенджер, видеовстречи, бухгалтерию, HR, AI-аналитику, сделки и партнёров. Руководитель видит бизнес целиком, а не собирает картину из разных сервисов.',steps:[['01','Запуск компании','Создание профиля, ролей, структуры, сотрудников и доступов.'],['02','Единый workspace','CRM, документы, задачи, коммуникации, финансы и HR собираются в одном кабинете.'],['03','Сделки и рост','BaliXiO помогает искать партнёров, участвовать в тендерах, привлекать инвестиции и масштабироваться.']]},
 user:{title:'Сотрудник работает без цифрового хаоса',text:'Вместо десятков вкладок сотрудник получает одно рабочее место: задачи, документы, таблицы, почту, чат, видеовстречи, календарь, файлы, статусы и AI-помощника.',steps:[['01','Личный кабинет','Сотрудник входит в корпоративную среду с понятными правами доступа.'],['02','Рабочие процессы','Задачи, документы, коммуникации и файлы находятся в одном интерфейсе.'],['03','Быстрее и спокойнее','Меньше ручного поиска, меньше хаоса, больше прозрачности и контроля.']]},
 gov:{title:'Государственный сектор получает прозрачные цифровые маршруты',text:'BaliXiO может упростить взаимодействие с бизнесом: заявки, отчётность, реестры, документы, проверки, статусы, встречи и история действий становятся структурированными.',steps:[['01','Цифровой вход','Компании и организации работают через понятные роли и профили.'],['02','Маршруты и статусы','Заявки, документы, отчётность и обращения получают прозрачные этапы.'],['03','Интеграции','Платформа может поэтапно подключаться к государственным системам и реестрам.']]},
 invest:{title:'Инвестор видит прозрачные компании и проекты',text:'Инвестор получает структурированную витрину: карточки компаний, финансовые показатели, документы, команда, риски, проекты, AI-анализ и сопровождение сделок внутри платформы.',steps:[['01','Выбор проектов','Поиск компаний и стартапов по отрасли, региону, стадии и показателям.'],['02','Проверка и аналитика','Документы, история, риски, команда и показатели доступны в одном месте.'],['03','Сделка внутри BaliXiO','Коммуникация, встречи, документы и сопровождение проходят в единой среде.']]}
};
function renderFlow(key){const d=flowData[key]||flowData.business;$('flowTitle')&&($('flowTitle').textContent=d.title);$('flowText')&&($('flowText').textContent=d.text);const box=$('flowSteps');if(box)box.innerHTML=d.steps.map(s=>'<div class="flow-step"><b>'+s[0]+'</b><div><strong>'+s[1]+'</strong><span>'+s[2]+'</span></div></div>').join('')}
document.addEventListener('click',e=>{const tab=e.target.closest('[data-flow]');if(tab){qs('.flow-tab').forEach(t=>t.classList.remove('active'));tab.classList.add('active');renderFlow(tab.dataset.flow);showToast('Сценарий обновлён: '+tab.textContent)}const scroll=e.target.closest('[data-scroll]');if(scroll){document.querySelector(scroll.dataset.scroll)?.scrollIntoView({behavior:'smooth',block:'start'});showToast('Переходим к разделу')}});
document.addEventListener('click',e=>{const q=e.target.closest('.faq-q');if(!q)return;const item=q.closest('.faq-item');item.classList.toggle('open');showToast(item.classList.contains('open')?'Блок раскрыт':'Блок скрыт')});
const observer=new IntersectionObserver(entries=>entries.forEach(ent=>{if(ent.isIntersecting)ent.target.classList.add('visible')}),{threshold:.12});qs('.reveal,.section-panel,.small-card,.module-card,.road-step,.trust-card').forEach(el=>observer.observe(el));
function showToast(text){let t=$('balixioToast');if(!t){t=document.createElement('div');t.id='balixioToast';t.className='toast';document.body.appendChild(t)}t.textContent=text;t.classList.add('show');clearTimeout(window.balixioToastTimer);window.balixioToastTimer=setTimeout(()=>t.classList.remove('show'),1900)}
renderFlow('business');
const langBtn=document.querySelector('[data-action="open-services"][data-type="mail"]');if(langBtn){langBtn.dataset.action='toggle-lang';}
const langMenu=document.createElement('div');langMenu.className='lang-menu';langMenu.id='langMenu';langMenu.innerHTML='<button data-lang="Русский">🇷🇺 Русский</button><button data-lang="English">🇬🇧 English</button><button data-lang="Bahasa Indonesia">🇮🇩 Bahasa Indonesia</button><button data-lang="Deutsch">🇩🇪 Deutsch</button>';document.body.appendChild(langMenu);
document.addEventListener('click',e=>{const a=e.target.closest('[data-action]');if(a&&a.dataset.action==='toggle-lang'){$('langMenu').classList.toggle('open');showToast('Выбор языка открыт')}const l=e.target.closest('[data-lang]');if(l){$('langMenu').classList.remove('open');showToast('Язык выбран: '+l.dataset.lang)}});
const themeBtn=document.querySelector('.round-btn');if(themeBtn){themeBtn.addEventListener('click',()=>{document.body.classList.toggle('theme-light');showToast(document.body.classList.contains('theme-light')?'Светлая тема включена':'Тёмная тема включена')})}
// === Step 1 3D hero parallax ===
(function(){
  const zone=document.getElementById('hero3d');
  const world=document.getElementById('universe3d');
  if(!zone||!world)return;
  zone.addEventListener('mousemove',e=>{
    const r=zone.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    world.style.transform=`rotateY(${x*14}deg) rotateX(${-y*10}deg) translateZ(0)`;
  });
  zone.addEventListener('mouseleave',()=>{world.style.transform='rotateY(0deg) rotateX(0deg)';});
})();
// === Step 2: working navigation, buttons and scenarios ===
(function(){
  const byId=(id)=>document.getElementById(id);
  const all=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const toast=(text)=>{
    if(typeof showToast==='function'){showToast(text);return;}
    let t=byId('balixioToast');
    if(!t){t=document.createElement('div');t.id='balixioToast';t.className='toast';document.body.appendChild(t);}
    t.textContent=text;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800);
  };
  const open=(title,subtitle,content)=>{
    if(typeof openDynamic==='function'){openDynamic(title,subtitle,content);return;}
    alert(title+'\n'+subtitle);
  };
  const routeContent={
    'CRM':['CRM','Управление продажами, контрагентами и коммуникациями','<div class="route-card"><div class="route-num">01</div><div><strong>Единая база клиентов</strong><span>Компании, контакты, сделки, история общения и ответственные сотрудники собираются в одном месте.</span></div></div><div class="route-card"><div class="route-num">02</div><div><strong>Воронки и сделки</strong><span>Статусы, задачи, документы и контроль движения сделки по этапам.</span></div></div>'],
    'Документы':['Документы','Договоры, счета, акты, шаблоны и электронная подпись','<div class="route-card"><div class="route-num">01</div><div><strong>Документооборот</strong><span>Файлы, шаблоны, согласования, история изменений и безопасное хранение.</span></div></div><div class="route-card"><div class="route-num">02</div><div><strong>Подпись и проверки</strong><span>Подключаемые интеграции для юридически значимых процессов.</span></div></div>'],
    'Marketplace':['Marketplace','Экосистема товаров, услуг, заявок и партнёрских возможностей','<div class="route-card"><div class="route-num">01</div><div><strong>B2B-витрина</strong><span>Компании публикуют предложения, услуги и проекты.</span></div></div><div class="route-card"><div class="route-num">02</div><div><strong>Заявки и партнёры</strong><span>Система помогает связывать спрос, предложение и исполнителей.</span></div></div>'],
    'Analytics':['Analytics','KPI, прогнозы, отчёты и AI-рекомендации','<div class="route-card"><div class="route-num">01</div><div><strong>Панели контроля</strong><span>Руководство видит показатели роста, риски и эффективность.</span></div></div><div class="route-card"><div class="route-num">02</div><div><strong>AI-прогнозы</strong><span>Интеллектуальные подсказки для решений по рынкам, партнёрам и сделкам.</span></div></div>'],
    'API':['API','Подключение внешних систем и сервисов','<div class="route-card"><div class="route-num">01</div><div><strong>Интеграционный слой</strong><span>CRM, ERP, банки, маркетплейсы и государственные сервисы подключаются через API-контуры.</span></div></div>'],
    'Интеграции':['Интеграции','BaliXiO соединяет бизнес, государство и внешние сервисы','<div class="route-card"><div class="route-num">01</div><div><strong>Data layer</strong><span>Единая логика обмена данными между модулями и партнёрами.</span></div></div>'],
    'Security':['Security','Защита данных и разделение доступов','<div class="route-card"><div class="route-num">01</div><div><strong>Роли и права</strong><span>Разные сценарии для владельца, сотрудника, пользователя, инвестора и гос-структуры.</span></div></div>'],
    'Docs':['Docs','Документация для подключения и внедрения','<div class="route-card"><div class="route-num">01</div><div><strong>Гайды внедрения</strong><span>Описание модулей, сценариев, API и правил безопасности.</span></div></div>'],
    'Support 24/7':['Support 24/7','Поддержка пользователей и компаний','<div class="route-card"><div class="route-num">01</div><div><strong>Единый центр помощи</strong><span>Заявки, статусы, SLA, история обращений и база знаний.</span></div></div>'],
    'Partners':['Partners','Партнёрская сеть BaliXiO','<div class="route-card"><div class="route-num">01</div><div><strong>Партнёрские роли</strong><span>Интеграторы, поставщики услуг, технологические партнёры и региональные представители.</span></div></div>'],
    'Legal':['Legal','Юридическая информация платформы','<div class="route-card"><div class="route-num">01</div><div><strong>Правила и документы</strong><span>Пользовательские соглашения, политики, условия работы и юридические маршруты.</span></div></div>'],
    'Privacy':['Privacy','Приватность и обработка данных','<div class="route-card"><div class="route-num">01</div><div><strong>Контроль данных</strong><span>Прозрачные правила хранения, обработки и доступа к информации.</span></div></div>']
  };
  const segmentMap={'Для бизнеса':'business','Для государства':'gov','Для инвесторов':'investors','Для пользователей':'users'};
  all('button,[data-action],a,.small-card,.module-card,.trust-card,.road-step,.service-item,.role-card').forEach(el=>el.classList.add('action-pulse'));
  all('.footer-col a').forEach(a=>{
    const text=a.textContent.trim();
    if(!a.hasAttribute('href')&&!a.dataset.action){
      a.dataset.step2Link=text;
      a.setAttribute('role','button');
      a.setAttribute('tabindex','0');
    }
  });
  all('.tab').forEach(tab=>{
    if(!tab.dataset.action){tab.dataset.step2Tab=tab.textContent.trim();}
  });
  const launchScenario=()=>{
    open('Запуск цифрового пространства BaliXiO','Демо-сценарий показывает, что происходит после нажатия главной кнопки.',
      '<div class="route-card"><div class="route-num">01</div><div><strong>Выбор роли</strong><span>Пользователь выбирает: компания, гражданин, сотрудник, инвестор или государственная структура.</span></div></div>'+
      '<div class="route-card"><div class="route-num">02</div><div><strong>Создание workspace</strong><span>BaliXiO собирает профиль, документы, доступы, модули и рекомендации в единый кабинет.</span></div></div>'+
      '<div class="route-card"><div class="route-num">03</div><div><strong>Подключение сервисов</strong><span>CRM, документы, аналитика, marketplace, GovTech и Invest становятся активными по сценарию.</span></div></div>'+
      '<div class="button-map"><button data-scroll="#modules">Смотреть модули</button><button data-scroll="#scenarios">Выбрать сценарий</button><button data-action="role" data-role="Компания">Создать компанию</button><button data-action="opportunities">Все возможности</button></div>'
    );
  };
  document.addEventListener('click',function(e){
    const stepLink=e.target.closest('[data-step2-link]');
    if(stepLink){
      const text=stepLink.dataset.step2Link;
      if(segmentMap[text] && typeof showSegment==='function'){showSegment(segmentMap[text]); toast('Открыт раздел: '+text); return;}
      const data=routeContent[text]||[text,'Раздел BaliXiO', '<div class="route-card"><div class="route-num">↗</div><div><strong>'+text+'</strong><span>Этот пункт теперь открывает информационное окно, а не висит мёртвой ссылкой.</span></div></div>'];
      open(data[0],data[1],data[2]);toast('Открыто: '+text);
    }
    const tab=e.target.closest('[data-step2-tab]');
    if(tab){
      const isLogin=tab.textContent.trim().toLowerCase().includes('вход');
      if(isLogin && typeof openLoginPopup==='function'){openLoginPopup();}
      else launchScenario();
      toast('Вкладка активирована');
    }
    const main=e.target.closest('.primary-btn');
    if(main && !main.dataset.action && !main.dataset.scroll){launchScenario();}
  },true);
  document.addEventListener('keydown',function(e){
    if(e.key==='Enter'){const l=e.target.closest('[data-step2-link]'); if(l) l.click();}
    if(e.key==='Escape' && typeof closeAllPopups==='function') closeAllPopups();
  });
  document.querySelectorAll('[data-scroll]').forEach(b=>{
    b.addEventListener('click',()=>{const target=document.querySelector(b.dataset.scroll); if(target){target.scrollIntoView({behavior:'smooth',block:'start'}); toast('Переход выполнен');}}, {passive:true});
  });
  window.balixioLaunchScenario=launchScenario;
})();


// Extracted from inline <script> #2
(function(){
  'use strict';
  const data = {
    why: {
      title: 'BaliXiO должен цеплять с первых секунд: человек видит не лендинг, а масштабную систему',
      text: 'Главная задача маркетинговой страницы — сразу создать ощущение силы, технологичности и доверия. Посетитель должен понять: перед ним не очередной шаблонный сайт, а большая цифровая экосистема, где бизнес, люди, государство, инвесторы и AI связаны в единую инфраструктуру.',
      bullets: [
        ['01','Сильный первый экран','3D-орбита, цифровая планета, подсветка модулей и понятный оффер создают вау-эффект.'],
        ['02','Смысл вместо пустого визуала','Каждый красивый элемент объясняет часть платформы: роли, сервисы, маршруты, аналитику.'],
        ['03','Доверие через структуру','Посетитель видит не хаос, а систему: блоки сгруппированы, сценарии раскрываются, CTA ведут дальше.']
      ],
      metrics: [['3D','первый экран'],['5 сек','чтобы зацепить'],['360°','видение платформы'],['Live','ощущение системы']],
      flow: ['Посетитель видит вау-экран', 'Понимает, для кого платформа', 'Выбирает свою роль', 'Переходит к регистрации или демо'],
      primary: 'Открыть возможности',
      target: 'modules'
    },
    how: {
      title: 'Путь внутри BaliXiO должен быть понятным: роль → профиль → сервисы → результат',
      text: 'Страница должна объяснять не абстрактную “экосистему”, а конкретный маршрут. Пользователь выбирает роль, видит свои сценарии, понимает какие данные нужны, какие модули откроются и какой результат он получит после входа в платформу.',
      bullets: [
        ['01','Выбор роли','Компания, пользователь, государство или инвестор получают разные описания и CTA.'],
        ['02','Рабочее пространство','После регистрации открываются модули: CRM, документы, HR, GovTech, Invest, Analytics.'],
        ['03','Действия и статусы','Все процессы получают статусы, владельцев, сроки, историю и следующий шаг.']
      ],
      metrics: [['4','ключевые роли'],['8+','модулей'],['AI','подсказки'],['API','интеграции']],
      flow: ['Выбор роли', 'Заполнение данных', 'Подключение модулей', 'Запуск цифровых процессов'],
      primary: 'Выбрать роль',
      target: 'role-experience'
    },
    value: {
      title: 'Ценность нужно показывать крупно: меньше хаоса, больше контроля, быстрее рост',
      text: 'BaliXiO продаёт не интерфейс, а результат. Для бизнеса — это управляемость и рост. Для пользователя — удобство и прозрачность. Для государства — контроль маршрутов. Для инвестора — понятные проекты, метрики и сигналы.',
      bullets: [
        ['01','Контроль процессов','Все заявки, сделки, документы и действия видны в одной системе.'],
        ['02','Экономия времени','Меньше ручной работы, меньше потерь в чатах, таблицах и разрозненных сервисах.'],
        ['03','Рост и аналитика','Платформа показывает показатели, узкие места, рекомендации и возможности масштабирования.']
      ],
      metrics: [['-40%','ручного хаоса'],['+Speed','быстрее процессы'],['KPI','управление'],['Trust','прозрачность']],
      flow: ['Собрать процессы', 'Назначить роли', 'Отслеживать статусы', 'Улучшать через аналитику'],
      primary: 'Посмотреть модули',
      target: 'modules'
    },
    future: {
      title: 'BaliXiO должен ощущаться как цифровая операционная система будущего',
      text: 'Финальный слой маркетинга — показать масштаб: AI Core, Digital Economy, GovTech, Invest и международная инфраструктура. Это превращает страницу из обычной презентации в образ большой платформы будущего.',
      bullets: [
        ['01','AI Core','AI помогает анализировать, рекомендовать, автоматизировать и вести пользователя по маршруту.'],
        ['02','Digital Economy','Компании, сервисы, сделки, документы и партнёры работают в единой цифровой среде.'],
        ['03','Global Layer','Архитектура готова к странам, языкам, регионам, документам и внешним интеграциям.']
      ],
      metrics: [['AI','ядро'],['GovTech','слой'],['Invest','хаб'],['Global','масштаб']],
      flow: ['AI анализирует процессы', 'Модули соединяются', 'Данные становятся прозрачными', 'Экосистема масштабируется'],
      primary: 'Смотреть BaliXiO OS',
      target: 'marketing-deep'
    }
  };
  const story = document.getElementById('marketingStory');
  const proof = document.getElementById('marketingProof');
  const tabs = Array.from(document.querySelectorAll('[data-marketing-tab]'));
  function esc(value){
    return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  }
  function render(key){
    const item = data[key] || data.why;
    tabs.forEach(tab => tab.classList.toggle('active', tab.dataset.marketingTab === key));
    if(story){
      story.classList.remove('marketing-fade');
      void story.offsetWidth;
      story.classList.add('marketing-fade');
      story.innerHTML = `
        <h3>${esc(item.title)}</h3><p>${esc(item.text)}</p><div class="marketing-bullets">
          ${item.bullets.map(b => `<div class="marketing-bullet"><strong>${esc(b[0])}</strong><div><b>${esc(b[1])}</b><span>${esc(b[2])}</span></div></div>`).join('')}
        </div><div class="marketing-actions"><button class="marketing-primary" type="button" data-marketing-scroll="${esc(item.target)}">${esc(item.primary)} →</button><button class="marketing-secondary" type="button" data-marketing-popup="${esc(key)}">Раскрыть подробнее</button></div>
      `;
    }
    if(proof){
      proof.classList.remove('marketing-fade');
      void proof.offsetWidth;
      proof.classList.add('marketing-fade');
      proof.innerHTML = `
        <h4>Что должен почувствовать посетитель</h4><div class="marketing-metrics">
          ${item.metrics.map(m => `<div class="marketing-metric"><strong>${esc(m[0])}</strong><span>${esc(m[1])}</span></div>`).join('')}
        </div><div class="marketing-flow-line">
          ${item.flow.map((f,i) => `<div class="marketing-flow-item">${String(i+1).padStart(2,'0')} · ${esc(f)}</div>`).join('')}
        </div>
      `;
    }
  }
  function openMarketingPopup(key){
    const item = data[key] || data.why;
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('dynamicWindow');
    const title = document.getElementById('dynamicTitle');
    const subtitle = document.getElementById('dynamicSubtitle');
    const content = document.getElementById('dynamicContent');
    if(!overlay || !popup || !title || !content){
      alert(item.title + '\n\n' + item.text);
      return;
    }
    title.textContent = item.primary;
    if(subtitle) subtitle.textContent = 'Подробный маркетинговый сценарий BaliXiO';
    content.innerHTML = `
      <div class="reference-card" style="max-width:none"><b>${esc(item.title)}</b><span>${esc(item.text)}</span></div><div class="reference-cards" style="margin-top:14px">
        ${item.bullets.map(b => `<div class="reference-card"><b>${esc(b[1])}</b><span>${esc(b[2])}</span></div>`).join('')}
      </div><div class="op-badges">
        ${item.metrics.map(m => `<span class="op-badge">${esc(m[0])} · ${esc(m[1])}</span>`).join('')}
      </div>
    `;
    overlay.classList.add('active');
    popup.classList.add('active');
  }
  document.addEventListener('click', function(e){
    const tab = e.target.closest('[data-marketing-tab]');
    if(tab){
      e.preventDefault();
      render(tab.dataset.marketingTab || 'why');
      return;
    }
    const scroll = e.target.closest('[data-marketing-scroll]');
    if(scroll){
      e.preventDefault();
      const target = document.getElementById(scroll.dataset.marketingScroll);
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      return;
    }
    const popup = e.target.closest('[data-marketing-popup]');
    if(popup){
      e.preventDefault();
      openMarketingPopup(popup.dataset.marketingPopup || 'why');
    }
  });
  if(story && proof) render('why');
})();


// Extracted from inline <script> #3
(function(){
  'use strict';
  const osData = {
    crm: {
      title: 'CRM — управление клиентами, сделками и партнёрами',
      text: 'CRM внутри BaliXiO OS связывает контрагентов, лиды, сделки, задачи, коммуникации и документы. Руководитель видит не просто список клиентов, а живую карту отношений и дохода.',
      items: [
        ['Сделки и воронки','Статусы, этапы, ответственные, дедлайны и история действий.'],
        ['Контрагенты','Компании, партнёры, контакты, документы и связанные процессы.'],
        ['Рост продаж','Аналитика по каналам, эффективности и точкам масштабирования.']
      ],
      cta: 'Открыть CRM-сценарий'
    },
    docs: {
      title: 'Docs — документы, файлы, шаблоны и цифровая подпись',
      text: 'Документы не должны жить отдельно от процессов. В BaliXiO OS договоры, счета, акты, заявки и файлы связаны с компаниями, сделками, ролями и статусами.',
      items: [
        ['Шаблоны','Быстрое создание типовых документов под роль и сценарий.'],
        ['Маршруты согласования','Кто создал, кто проверил, кто подписал и что дальше.'],
        ['Хранилище','Документы привязаны к компаниям, пользователям и процессам.']
      ],
      cta: 'Посмотреть Docs'
    },
    ai: {
      title: 'AI Core — интеллектуальное ядро всей экосистемы',
      text: 'AI Core помогает пользователю не теряться: подсказывает следующий шаг, анализирует процессы, показывает риски, помогает заполнять данные и автоматизирует рутину.',
      items: [
        ['Рекомендации','Что сделать дальше, какой сервис выбрать, какие данные нужны.'],
        ['Анализ процессов','Узкие места, задержки, риски и аномалии в действиях.'],
        ['Автоматизация','Черновики, маршруты, уведомления и быстрые действия.']
      ],
      cta: 'Запустить AI Core'
    },
    gov: {
      title: 'GovTech — прозрачные маршруты для государства',
      text: 'GovTech слой позволяет строить понятные цифровые маршруты: заявки, реестры, статусы, документы, проверка, отчётность и контроль доступа.',
      items: [
        ['Реестры','Структурированные данные для контроля и отчётности.'],
        ['Заявки','Маршруты подачи, проверки, согласования и завершения.'],
        ['Контроль','Сроки, ответственные, история действий и показатели нагрузки.']
      ],
      cta: 'Открыть GovTech'
    },
    invest: {
      title: 'Invest — витрина проектов, метрик и сделок',
      text: 'Invest показывает проекты не как презентации, а как структурированные объекты: стадия, команда, рынок, документы, показатели, риски и инвестиционные сигналы.',
      items: [
        ['Проекты','Карточки с данными, документами, стадиями и командами.'],
        ['Метрики','KPI, динамика, рынки, риски и точки роста.'],
        ['Сделки','Безопасный маршрут контакта, документов и договорённостей.']
      ],
      cta: 'Смотреть Invest'
    },
    analytics: {
      title: 'Analytics — контроль, отчёты, KPI и прогнозы',
      text: 'Analytics превращает действия внутри платформы в управленческую картину. Видно, что работает, где потери, какие процессы тормозят и куда стоит двигаться.',
      items: [
        ['KPI','Показатели по процессам, сделкам, заявкам и командам.'],
        ['Отчёты','Сводки для руководителей, структур, партнёров и инвесторов.'],
        ['Прогнозы','AI-сигналы, риски и рекомендации по улучшению.']
      ],
      cta: 'Открыть аналитику'
    }
  };
  function esc(v){
    return String(v).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  }
  function showPopup(titleText, subtitleText, bodyHtml){
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('dynamicWindow');
    const title = document.getElementById('dynamicTitle');
    const subtitle = document.getElementById('dynamicSubtitle');
    const content = document.getElementById('dynamicContent');
    if(!overlay || !popup || !title || !content){
      alert(titleText);
      return;
    }
    title.textContent = titleText;
    if(subtitle) subtitle.textContent = subtitleText || '';
    content.innerHTML = bodyHtml + '<div class="dynamic-safe-note">Окно можно закрыть кнопкой “Закрыть”, кликом вне окна или клавишей Escape.</div>';
    overlay.classList.add('active');
    popup.classList.add('active');
  }
  function renderOS(key){
    const item = osData[key] || osData.crm;
    const panel = document.getElementById('osPanelContent');
    document.querySelectorAll('[data-os-node]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.osNode === key);
    });
    if(!panel) return;
    panel.classList.remove('os-fade');
    void panel.offsetWidth;
    panel.classList.add('os-fade');
    panel.innerHTML = `
      <h3>${esc(item.title)}</h3><p>${esc(item.text)}</p><div class="os-panel-list">
        ${item.items.map(i => `<div class="os-panel-item"><b>${esc(i[0])}</b><span>${esc(i[1])}</span></div>`).join('')}
      </div><div class="os-panel-actions"><button class="os-primary" type="button" data-os-popup="${esc(key)}">${esc(item.cta)} →</button><button class="os-secondary" type="button" data-os-scroll="modules">Смотреть модули</button></div>
    `;
  }
  function openOSPopup(key){
    const item = osData[key] || osData.crm;
    showPopup(
      item.cta,
      'BaliXiO OS module',
      `
        <div class="reference-card" style="max-width:none"><b>${esc(item.title)}</b><span>${esc(item.text)}</span></div><div class="reference-cards" style="margin-top:14px">
          ${item.items.map(i => `<div class="reference-card"><b>${esc(i[0])}</b><span>${esc(i[1])}</span></div>`).join('')}
        </div>
      `
    );
  }
  document.addEventListener('click', function(e){
    const node = e.target.closest('[data-os-node]');
    if(node){
      e.preventDefault();
      renderOS(node.dataset.osNode || 'crm');
      return;
    }
    const popup = e.target.closest('[data-os-popup]');
    if(popup){
      e.preventDefault();
      openOSPopup(popup.dataset.osPopup || 'crm');
      return;
    }
    const scroll = e.target.closest('[data-os-scroll]');
    if(scroll){
      e.preventDefault();
      const target = document.getElementById(scroll.dataset.osScroll);
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
  /* Extra robust popup close behavior */
  document.addEventListener('keydown', function(e){
    if(e.key !== 'Escape') return;
    document.querySelectorAll('.popup.active').forEach(p => p.classList.remove('active'));
    const overlay = document.getElementById('overlay');
    if(overlay) overlay.classList.remove('active');
  });
  const overlay = document.getElementById('overlay');
  if(overlay){
    overlay.addEventListener('click', function(){
      document.querySelectorAll('.popup.active').forEach(p => p.classList.remove('active'));
      overlay.classList.remove('active');
    });
  }
  if(document.getElementById('osPanelContent')) renderOS('crm');
})();


// Extracted from inline <script> #4
(function(){
  'use strict';
  function clamp(value, min, max){ return Math.max(min, Math.min(max, value)); }
  function setupTilt(selector){
    Array.from(document.querySelectorAll(selector)).forEach(card => {
      card.addEventListener('mousemove', function(e){
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rotateY = clamp((x - 0.5) * 16, -10, 10);
        const rotateX = clamp((0.5 - y) * 14, -9, 9);
        card.classList.add('tilt-active');
        card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      card.addEventListener('mouseleave', function(){
        card.classList.remove('tilt-active');
        card.style.transform = '';
      });
    });
  }
  function setupExpandableCards(){
    const cards = Array.from(document.querySelectorAll('.cards-section .small-card'));
    cards.forEach(card => {
      card.addEventListener('click', function(e){
        if(e.target.closest('button,a')) return;
        cards.forEach(other => { if(other !== card) other.classList.remove('card-expanded'); });
        card.classList.toggle('card-expanded');
      });
    });
    const expandBtn = document.getElementById('expandAll3dCards');
    if(expandBtn){
      let expanded = false;
      expandBtn.addEventListener('click', function(){
        expanded = !expanded;
        cards.forEach(card => card.classList.toggle('card-expanded', expanded));
        expandBtn.textContent = expanded ? 'Свернуть карточки' : 'Раскрыть все карточки';
      });
    }
  }
  function init(){
    setupTilt('.small-card,.module-card,.trust-card,.road-step');
    setupExpandableCards();
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();


// Extracted from inline <script> #5
(function(){
  'use strict';
  function initHeroExtras(){
    if(typeof renderIcons === 'function') renderIcons();
    document.querySelectorAll('.hero-orbit-module').forEach(card => {
      card.addEventListener('click', function(){
        const target = document.getElementById('balixio-os') || document.getElementById('modules');
        if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      });
    });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initHeroExtras);
  else initHeroExtras();
})();


// Extracted from inline <script> #6
(function(){
  'use strict';
  function addCinematicClasses(){
    const selectors = [
      '.role-experience-section',
      '.marketing-deep-section',
      '.balixio-os-section',
      '.trust-section',
      '.roadmap-section',
      '.cards-section',
      '.ecosystem-section',
      '.universe-section',
      '.modules-section',
      '.footer-section',
      '.small-card',
      '.module-card',
      '.trust-card',
      '.road-step',
      '.os-node',
      '.marketing-tab',
      '.role-switch-btn',
      '.hero-orbit-module',
      '.hero-stat-item'
    ];
    selectors.forEach((selector, groupIndex) => {
      document.querySelectorAll(selector).forEach((el, index) => {
        if(!el.classList.contains('cinematic-reveal')) el.classList.add('cinematic-reveal');
        if(!el.dataset.cinema){
          if(index % 3 === 1) el.dataset.cinema = 'left';
          else if(index % 3 === 2) el.dataset.cinema = 'right';
          else el.dataset.cinema = 'zoom';
        }
        el.style.transitionDelay = Math.min((index % 6) * 0.06, 0.30) + 's';
        el.classList.add('cinema-focus');
      });
    });
  }
  function setupReveal(){
    const items = Array.from(document.querySelectorAll('.cinematic-reveal'));
    if(!('IntersectionObserver' in window)){
      items.forEach(el => el.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold:0.12,
      rootMargin:'0px 0px -8% 0px'
    });
    items.forEach(el => observer.observe(el));
  }
  function setupProgress(){
    const bar = document.getElementById('cinemaProgress');
    if(!bar) return;
    function update(){
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const pct = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
      bar.style.width = pct + '%';
    }
    window.addEventListener('scroll', update, {passive:true});
    window.addEventListener('resize', update);
    update();
  }
  function setupSubtleParallax(){
    const planet = document.querySelector('.planet-zone .planet');
    const hero = document.querySelector('.hero');
    if(!planet || !hero) return;
    hero.addEventListener('mousemove', function(e){
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - .5;
      const y = (e.clientY - rect.top) / rect.height - .5;
      planet.style.marginLeft = (x * 8).toFixed(1) + 'px';
      planet.style.marginTop = (-14 + y * 8).toFixed(1) + 'px';
    });
    hero.addEventListener('mouseleave', function(){
      planet.style.marginLeft = '';
      planet.style.marginTop = '';
    });
  }
  function init(){
    addCinematicClasses();
    setupReveal();
    setupProgress();
    setupSubtleParallax();
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();


// Extracted from inline <script> #7
(function(){
  'use strict';
  const roleShowcaseData = {
    gov: {
      kicker:'Demo GovTech preview',
      title:'Государственные корпорации и структуры видят цифровые маршруты, контроль и прозрачность',
      text:'BaliXiO показывает, как заявки, реестры, документы, отчётность и согласования могут быть собраны в единую витрину. Пока это не полноценная демо-система, а понятный preview будущего GovTech-направления.',
      items:[
        ['Цифровые маршруты','Подача, проверка, согласование и завершение процессов в понятной цепочке.'],
        ['Реестры и контроль','Структурированные данные, статусы, ответственные и история действий.'],
        ['Прозрачность','Пользователь видит не хаос, а понятную систему взаимодействия.']
      ],
      demo:'Открыть Demo GovTech',
      register:'Регистрация госструктуры'
    },
    company: {
      kicker:'Demo Business preview',
      title:'Компании получают витрину будущего workspace: CRM, документы, сотрудники и сделки',
      text:'Для бизнеса BaliXiO должен показывать ощущение единого кабинета: клиенты, партнёры, договоры, задачи, сотрудники, аналитика и рост. Это визуальный preview перед отдельной демо-страницей компании.',
      items:[
        ['Единый кабинет','CRM, документы, HR, задачи и партнёры в одном пространстве.'],
        ['Управление ростом','Сделки, статусы, KPI и слабые места процессов видны руководителю.'],
        ['Масштабирование','Подготовка компании к партнёрам, рынкам, интеграциям и инвестициям.']
      ],
      demo:'Открыть Demo Company',
      register:'Зарегистрировать компанию'
    },
    investor: {
      kicker:'Demo Investor preview',
      title:'Инвестор видит проекты, метрики, сигналы роста и прозрачный маршрут сделки',
      text:'Инвестиционная витрина должна показывать проекты не как презентации, а как структурированные объекты: стадия, рынок, команда, документы, показатели и AI-сигналы.',
      items:[
        ['Экосистема проектов','Проекты, категории, стадии, документы и команды.'],
        ['Метрики и риски','KPI, динамика, risk-score и инвестиционные сигналы.'],
        ['Маршрут сделки','Коммуникация, документы, договорённости и мониторинг.']
      ],
      demo:'Открыть Demo Investor',
      register:'Войти как инвестор'
    },
    user: {
      kicker:'Demo User preview',
      title:'Пользователь получает понятный личный кабинет, сервисы, заявки и документы',
      text:'Пользовательский сценарий показывает простоту: профиль, документы, доступные сервисы, статусы заявок, уведомления и подсказки. Всё должно быть видно через аккуратные окна.',
      items:[
        ['Личный кабинет','Профиль, документы, история действий и уведомления.'],
        ['Сервисы','Доступ к бизнес, государственным и партнёрским сервисам.'],
        ['Понятные статусы','Каждая заявка имеет состояние, срок и следующий шаг.']
      ],
      demo:'Открыть Demo User',
      register:'Создать кабинет'
    },
    employee: {
      kicker:'Demo Employee preview',
      title:'Сотрудник входит в рабочее пространство компании с задачами, ролями и доступами',
      text:'Сценарий сотрудника нужен для корпоративной среды: организация, роль, задачи, доступы, документы, коммуникации и действия внутри компании.',
      items:[
        ['Рабочее место','Задачи, документы, процессы и уведомления сотрудника.'],
        ['Роли и доступы','Права внутри организации, отделы, разрешения и контроль.'],
        ['Процессы','Сотрудник видит только нужные действия и статусы.']
      ],
      demo:'Открыть Demo Employee',
      register:'Вход сотрудника'
    }
  };
  function esc(value){
    return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  }
  function renderRoleShowcase(key){
    const data = roleShowcaseData[key] || roleShowcaseData.gov;
    const panel = document.getElementById('roleShowcaseContent');
    document.querySelectorAll('[data-showcase-role]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.showcaseRole === key);
    });
    if(!panel) return;
    panel.classList.remove('role-detail-fade');
    void panel.offsetWidth;
    panel.classList.add('role-detail-fade');
    panel.innerHTML = `
      <span class="role-detail-kicker">${esc(data.kicker)}</span><h3>${esc(data.title)}</h3><p>${esc(data.text)}</p><div class="role-preview-visual" aria-hidden="true"><div class="role-preview-row"><div class="role-preview-line"></div><div class="role-preview-status">READY</div></div><div class="role-preview-row"><div class="role-preview-line"></div><div class="role-preview-status">LIVE</div></div><div class="role-preview-row"><div class="role-preview-line"></div><div class="role-preview-status">AI</div></div></div><div class="role-detail-list">
        ${data.items.map(item => `<div class="role-detail-item"><b>${esc(item[0])}</b><span>${esc(item[1])}</span></div>`).join('')}
      </div><div class="role-detail-actions"><button class="role-demo-btn" type="button" data-role-demo="${esc(key)}">${esc(data.demo)} →</button><button class="role-register-btn" type="button" data-role-register="${esc(key)}">${esc(data.register)}</button></div>
    `;
  }
  function openRolePreview(key, mode){
    const data = roleShowcaseData[key] || roleShowcaseData.gov;
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('dynamicWindow');
    const title = document.getElementById('dynamicTitle');
    const subtitle = document.getElementById('dynamicSubtitle');
    const content = document.getElementById('dynamicContent');
    if(!overlay || !popup || !title || !content){
      alert((mode === 'register' ? data.register : data.demo) + '\\n\\n' + data.text);
      return;
    }
    title.textContent = mode === 'register' ? data.register : data.demo;
    if(subtitle) subtitle.textContent = 'Preview-витрина роли. Полные demo-страницы будут разработаны отдельно.';
    content.innerHTML = `
      <div class="reference-card" style="max-width:none"><b>${esc(data.title)}</b><span>${esc(data.text)}</span></div><div class="reference-cards" style="margin-top:14px">
        ${data.items.map(item => `<div class="reference-card"><b>${esc(item[0])}</b><span>${esc(item[1])}</span></div>`).join('')}
      </div><div class="op-badges"><span class="op-badge">Preview only</span><span class="op-badge">Separate demo page later</span></div>
    `;
    overlay.classList.add('active');
    popup.classList.add('active');
  }
  document.addEventListener('click', function(e){
    const card = e.target.closest('[data-showcase-role]');
    if(card){
      e.preventDefault();
      renderRoleShowcase(card.dataset.showcaseRole || 'gov');
      return;
    }
    const demo = e.target.closest('[data-role-demo]');
    if(demo){
      e.preventDefault();
      openRolePreview(demo.dataset.roleDemo || 'gov', 'demo');
      return;
    }
    const reg = e.target.closest('[data-role-register]');
    if(reg){
      e.preventDefault();
      openRolePreview(reg.dataset.roleRegister || 'gov', 'register');
    }
  });
  if(document.getElementById('roleShowcaseContent')) renderRoleShowcase('gov');
})();


// Extracted from inline <script> #8
(function(){
  'use strict';
  const regData = {
    company:{
      icon:'🏢', title:'Регистрация компании', kicker:'Business onboarding',
      text:'Компания видит будущий кабинет: CRM, документы, сотрудники, сделки, роли и аналитика. Регистрация показывает не просто поля, а сценарий входа в BaliXiO Workspace.',
      benefits:[['CRM','клиенты и сделки'],['Docs','договоры и файлы'],['HR','сотрудники и роли']],
      fields:[
        ['Название компании','ООО «BaliXiO Partner»'],
        ['Корпоративная почта','company@example.com'],
        ['Страна регистрации','Индонезия / Россия / ОАЭ']
      ],
      hint:'После регистрации компания сможет перейти на отдельную demo-страницу Business Workspace.',
      demo:'Demo Company'
    },
    gov:{
      icon:'🏛', title:'Регистрация государственной корпорации', kicker:'GovTech onboarding',
      text:'Государственная структура видит витрину будущих маршрутов: реестры, заявки, контроль, роли, статусы и отчётность. Всё должно выглядеть серьёзно, прозрачно и безопасно.',
      benefits:[['Registry','реестры'],['Routes','маршруты'],['Control','контроль']],
      fields:[
        ['Название организации','Государственная корпорация'],
        ['Служебная почта','gov@example.gov'],
        ['Уровень доступа','Федеральный / региональный / корпоративный']
      ],
      hint:'Полная GovTech demo-страница будет отдельной, здесь только preview входа.',
      demo:'Demo GovTech'
    },
    investor:{
      icon:'💎', title:'Регистрация инвестора', kicker:'Investor onboarding',
      text:'Инвестор видит вход в витрину проектов: категории, метрики, риски, документы, сигналы роста и будущий Invest.',
      benefits:[['Projects','витрина проектов'],['KPI','метрики'],['Risk','оценка рисков']],
      fields:[
        ['Имя / фонд','BaliXiO Capital'],
        ['Почта инвестора','investor@example.com'],
        ['Интерес','стартапы / инфраструктура / GovTech']
      ],
      hint:'После preview инвестор сможет перейти на отдельную demo-страницу Invest.',
      demo:'Demo Investor'
    },
    startup:{
      icon:'🚀', title:'Регистрация стартапера', kicker:'Startup onboarding',
      text:'Стартапер видит путь упаковки проекта: профиль, команда, стадия, документы, метрики, инвесторская витрина и AI-подсказки.',
      benefits:[['Pitch','карточка проекта'],['Team','команда'],['Growth','сигналы роста']],
      fields:[
        ['Название проекта','BaliXiO Startup'],
        ['Стадия','MVP / traction / scale'],
        ['Категория','FinTech / GovTech / Marketplace']
      ],
      hint:'Стартап-демо будет отдельной страницей с проектной витриной.',
      demo:'Demo Startup'
    },
    user:{
      icon:'👤', title:'Регистрация пользователя', kicker:'User onboarding',
      text:'Пользователь видит будущий личный кабинет: профиль, документы, сервисы, заявки, уведомления и понятные статусы.',
      benefits:[['Profile','личный кабинет'],['Services','сервисы'],['Status','заявки']],
      fields:[
        ['ФИО','Иван Иванов'],
        ['Почта','user@example.com'],
        ['Страна / город','Индонезия, Бали']
      ],
      hint:'Пользовательская demo-страница будет отдельной, здесь показываем только вход.',
      demo:'Demo User'
    },
    employee:{
      icon:'🧑‍💼', title:'Вход сотрудника', kicker:'Employee onboarding',
      text:'Сотрудник входит через организацию и видит будущий workspace: задачи, роли, доступы, документы и внутренние процессы.',
      benefits:[['Tasks','задачи'],['Access','доступы'],['Workspace','рабочее место']],
      fields:[
        ['Организация','BaliXiO Global'],
        ['Служебный логин','employee@company.com'],
        ['Роль','оператор / менеджер / админ']
      ],
      hint:'Employee demo будет отдельным кабинетом сотрудника.',
      demo:'Demo Employee'
    }
  };
  let currentRole = 'company';
  let currentStep = 0;
  function esc(v){
    return String(v).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  }
  function renderPreview(){
    const data = regData[currentRole];
    const el = document.getElementById('regPreviewContent');
    if(!el) return;
    el.classList.remove('reg-fade');
    void el.offsetWidth;
    el.classList.add('reg-fade');
    el.innerHTML = `
      <span class="reg-kicker">${esc(data.kicker)}</span><h3>${esc(data.icon)} ${esc(data.title)}</h3><p>${esc(data.text)}</p><div class="reg-os-visual">
        ${data.benefits.map(item => `<div class="reg-visual-card"><b>${esc(item[0])}</b><div class="reg-visual-line"></div><div class="reg-visual-line" style="width:72%"></div><span style="color:rgba(255,255,255,.62);font-size:11px">${esc(item[1])}</span></div>`).join('')}
        <div class="reg-visual-card"><b>AI</b><div class="reg-visual-line"></div><div class="reg-visual-line" style="width:58%"></div><span style="color:rgba(255,255,255,.62);font-size:11px">подсказки входа</span></div></div><div class="reg-benefit-grid">
        ${data.benefits.map(item => `<div class="reg-benefit"><b>${esc(item[0])}</b><span>${esc(item[1])}</span></div>`).join('')}
      </div>
    `;
  }
  function renderForm(){
    const data = regData[currentRole];
    const form = document.getElementById('regDynamicForm');
    const panel = document.getElementById('regFormPanel');
    const badge = document.getElementById('regStepBadge');
    const fill = document.getElementById('regProgressFill');
    const text = document.getElementById('regProgressText');
    document.querySelectorAll('[data-reg-step]').forEach(btn => {
      btn.classList.toggle('active', Number(btn.dataset.regStep) === currentStep);
    });
    document.querySelectorAll('[data-reg-role]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.regRole === currentRole);
    });
    const pct = [25,50,75,100][currentStep];
    if(fill) fill.style.width = pct + '%';
    if(text) text.textContent = pct + '%';
    if(badge) badge.textContent = 'STEP ' + (currentStep + 1);
    if(panel) panel.classList.toggle('final-step', currentStep === 3);
    if(!form) return;
    form.classList.remove('reg-fade');
    void form.offsetWidth;
    form.classList.add('reg-fade');
    if(currentStep === 0){
      form.innerHTML = `
        <div class="reg-hint">Выбрана роль: <b>${esc(data.title)}</b>. Пользователь сразу понимает, какой сценарий BaliXiO откроется дальше.</div><label>Тип входа</label><select><option>${esc(data.title)}</option></select><label>Демо-направление</label><input value="${esc(data.demo)}" readonly><div class="reg-actions"><button class="reg-back" type="button" data-reg-back>Назад</button><button class="reg-next" type="button" data-reg-next>Дальше</button></div>
      `;
    } else if(currentStep === 1){
      form.innerHTML = `
        ${data.fields.map(field => `<label>${esc(field[0])}</label><input placeholder="${esc(field[1])}">`).join('')}
        <div class="reg-hint">${esc(data.hint)}</div><div class="reg-actions"><button class="reg-back" type="button" data-reg-back>Назад</button><button class="reg-next" type="button" data-reg-next>Дальше</button></div>
      `;
    } else if(currentStep === 2){
      form.innerHTML = `
        <div class="reg-hint"><b>Preview проверки:</b> BaliXiO показывает, какие данные будут проверяться перед входом в демо-среду.</div><label>Статус профиля</label><input value="Данные заполнены · требуется подтверждение" readonly><label>Безопасность</label><input value="Role access · verification · audit trail" readonly><label>Доступные модули</label><input value="${data.benefits.map(i => i[0]).join(' · ')}" readonly><div class="reg-actions"><button class="reg-back" type="button" data-reg-back>Назад</button><button class="reg-next" type="button" data-reg-next>Дальше</button></div>
      `;
    } else {
      form.innerHTML = `
        <div class="reg-hint"><b>Готово:</b> это визуальный preview регистрации. Реальная демо-страница для роли будет разработана отдельно.</div><label>Следующий экран</label><input value="${esc(data.demo)}" readonly><label>Формат</label><input value="Отдельная demo-страница роли" readonly><div class="reg-actions"><button class="reg-back" type="button" data-reg-back>Назад</button><button class="reg-final" type="button" data-reg-open-modal>Открыть preview окна →</button></div>
      `;
    }
  }
  function openRegModal(){
    const data = regData[currentRole];
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('dynamicWindow');
    const title = document.getElementById('dynamicTitle');
    const subtitle = document.getElementById('dynamicSubtitle');
    const content = document.getElementById('dynamicContent');
    if(!overlay || !popup || !title || !content){
      alert(data.demo + '\\n\\n' + data.text);
      return;
    }
    title.textContent = data.demo;
    if(subtitle) subtitle.textContent = 'Preview регистрации. Полная demo-страница будет разработана отдельно.';
    content.innerHTML = `
      <div class="reference-card" style="max-width:none"><b>${esc(data.title)}</b><span>${esc(data.text)}</span></div><div class="reference-cards" style="margin-top:14px">
        ${data.benefits.map(i => `<div class="reference-card"><b>${esc(i[0])}</b><span>${esc(i[1])}</span></div>`).join('')}
      </div><div class="op-badges"><span class="op-badge">Role onboarding</span><span class="op-badge">Preview only</span><span class="op-badge">${esc(data.demo)}</span></div>
    `;
    overlay.classList.add('active');
    popup.classList.add('active');
  }
  function renderAll(){
    renderPreview();
    renderForm();
  }
  document.addEventListener('click', function(e){
    const role = e.target.closest('[data-reg-role]');
    if(role){
      e.preventDefault();
      currentRole = role.dataset.regRole || 'company';
      currentStep = 0;
      renderAll();
      return;
    }
    const step = e.target.closest('[data-reg-step]');
    if(step){
      e.preventDefault();
      currentStep = Math.max(0, Math.min(3, Number(step.dataset.regStep)));
      renderForm();
      return;
    }
    if(e.target.closest('[data-reg-next]')){
      e.preventDefault();
      currentStep = Math.min(3, currentStep + 1);
      renderForm();
      return;
    }
    if(e.target.closest('[data-reg-back]')){
      e.preventDefault();
      currentStep = Math.max(0, currentStep - 1);
      renderForm();
      return;
    }
    if(e.target.closest('[data-reg-open-modal]')){
      e.preventDefault();
      openRegModal();
    }
  });
  if(document.getElementById('registration-os')) renderAll();
})();


// Extracted from inline <script> #9
(function(){
  'use strict';
  const premiumData = {
    company:{
      title:'Company showcase: бизнес видит будущий workspace ещё до регистрации',
      text:'Для компаний витрина должна показать CRM, документы, сотрудников, сделки, аналитику и международный рост. Это не демо-продукт, а preview того, что будет раскрыто на отдельной странице.',
      bullets:[
        ['Workspace','единый кабинет компании, ролей, сотрудников и процессов'],
        ['CRM + Docs','клиенты, договоры, задачи, статусы и документы'],
        ['Growth','аналитика, партнёры, рынки и точки масштабирования'],
        ['Trust','структурная подача для крупных компаний и корпораций']
      ],
      cta:'Company preview'
    },
    gov:{
      title:'GovTech showcase: государственные корпорации видят маршруты и контроль',
      text:'Для государственных структур важно показать порядок: реестры, заявки, проверки, статусы, отчётность, права доступа и прозрачность цифровых действий.',
      bullets:[
        ['Registry','реестры, структурированные данные и история действий'],
        ['Routes','цифровые маршруты подачи, проверки и согласования'],
        ['Control','контроль сроков, ролей, ответственных и нагрузки'],
        ['Security','акцент на доступах, аудитах и прозрачности']
      ],
      cta:'GovTech preview'
    },
    invest:{
      title:'Invest showcase: инвестор видит проекты, метрики и сигналы',
      text:'Инвестору нужна не красивая абстракция, а ощущение аналитической витрины: проекты, стадии, документы, риски, динамика и AI-сигналы роста.',
      bullets:[
        ['Projects','карточки проектов, стадий, команд и рынков'],
        ['Metrics','KPI, динамика, traction и показатели роста'],
        ['Signals','AI-сигналы, risk-score и инвестиционные подсказки'],
        ['Deal path','будущий маршрут коммуникации и сделки']
      ],
      cta:'Investor preview'
    },
    user:{
      title:'User showcase: пользователь и сотрудник видят простой личный вход',
      text:'Для пользователей и сотрудников важна понятность: профиль, документы, сервисы, заявки, задачи, уведомления и статусы без перегруза.',
      bullets:[
        ['Profile','личный кабинет, документы и история действий'],
        ['Services','доступные сервисы и понятные заявки'],
        ['Employee','задачи, роли, доступы и workspace сотрудника'],
        ['Status','каждый процесс имеет состояние и следующий шаг']
      ],
      cta:'User preview'
    }
  };
  let activeKey = 'company';
  function esc(value){
    return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  }
  function renderPremium(key){
    activeKey = key || 'company';
    const data = premiumData[activeKey] || premiumData.company;
    const title = document.getElementById('premiumDynamicTitle');
    const text = document.getElementById('premiumDynamicText');
    const bullets = document.getElementById('premiumDynamicBullets');
    document.querySelectorAll('[data-premium-content]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.premiumContent === activeKey);
    });
    if(title) title.textContent = data.title;
    if(text) text.textContent = data.text;
    if(bullets){
      bullets.classList.remove('premium-content-fade');
      void bullets.offsetWidth;
      bullets.classList.add('premium-content-fade');
      bullets.innerHTML = data.bullets.map(item => `<div class="premium-bullet"><b>${esc(item[0])}</b><span>${esc(item[1])}</span></div>`).join('');
    }
  }
  function openPremiumModal(){
    const data = premiumData[activeKey] || premiumData.company;
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('dynamicWindow');
    const title = document.getElementById('dynamicTitle');
    const subtitle = document.getElementById('dynamicSubtitle');
    const content = document.getElementById('dynamicContent');
    if(!overlay || !popup || !title || !content){
      alert(data.cta + '\\n\\n' + data.text);
      return;
    }
    title.textContent = data.cta;
    if(subtitle) subtitle.textContent = 'Информационный preview. Отдельные demo-страницы будут разработаны позже.';
    content.innerHTML = `
      <div class="reference-card" style="max-width:none"><b>${esc(data.title)}</b><span>${esc(data.text)}</span></div><div class="reference-cards" style="margin-top:14px">
        ${data.bullets.map(i => `<div class="reference-card"><b>${esc(i[0])}</b><span>${esc(i[1])}</span></div>`).join('')}
      </div>
    `;
    overlay.classList.add('active');
    popup.classList.add('active');
  }
  document.addEventListener('click', function(e){
    const tab = e.target.closest('[data-premium-content]');
    if(tab){
      e.preventDefault();
      renderPremium(tab.dataset.premiumContent || 'company');
      return;
    }
    if(e.target.closest('[data-premium-open]')){
      e.preventDefault();
      openPremiumModal();
      return;
    }
    const scroll = e.target.closest('[data-premium-scroll]');
    if(scroll){
      e.preventDefault();
      const target = document.getElementById(scroll.dataset.premiumScroll);
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
  if(document.getElementById('premiumDynamicBullets')) renderPremium('company');
})();


// Extracted from inline <script> #10
(function(){
  'use strict';
  const $ = (id) => document.getElementById(id);
  function esc(value){
    return String(value || '').replace(/[&<>"']/g, ch => ({
      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      '"':'&quot;',
      "'":'&#39;'
    }[ch]));
  }
  function closePopups(){
    document.querySelectorAll('.popup.active').forEach(p => p.classList.remove('active'));
    const overlay = $('overlay');
    if(overlay) overlay.classList.remove('active');
  }
  function openPopup(title, subtitle, cards){
    const overlay = $('overlay');
    const popup = $('dynamicWindow');
    const titleEl = $('dynamicTitle');
    const subtitleEl = $('dynamicSubtitle');
    const content = $('dynamicContent');
    if(!overlay || !popup || !titleEl || !content){
      alert(title || 'BaliXiO');
      return;
    }
    titleEl.textContent = title || 'BaliXiO';
    if(subtitleEl) subtitleEl.textContent = subtitle || 'Preview-витрина BaliXiO';
    if(typeof cards === 'string'){
      content.innerHTML = cards;
    }else{
      content.innerHTML = '<div class="reference-cards">' + (cards || [
        ['Экосистема BaliXiO','Информационное окно платформы.'],
        ['Следующий шаг','Регистрация и demo-сценарии будут развиваться отдельно.']
      ]).map(item => (
        '<div class="reference-card"><b>' + esc(item[0]) + '</b><span>' + esc(item[1]) + '</span></div>'
      )).join('') + '</div>';
    }
    overlay.classList.add('active');
    popup.classList.add('active');
  }
  const safeContent = {
    opportunities:[
      'Видео: возможности BaliXiO',
      'Здесь будет загружен ролик о сути платформы, инфраструктуре и ключевых модулях',
      `<div class="video-modal-pro"><div class="video-frame-pro" data-video-slot="opportunities"><div class="video-placeholder-pro"><div class="play-orb-pro">▶</div><h3>BaliXiO Infrastructure Overview</h3><p>В этом окне будет основной презентационный ролик: что такое BaliXiO, какие модули входят в экосистему, как связаны коммуникации, бизнес, государственные сервисы, инвестиции, AI и защищённые пространства.</p></div></div><div class="video-meta-pro"><div><b>Фокус ролика</b><span>Суть платформы, архитектура, модули и масштаб экосистемы.</span></div><div><b>Видео-файл</b><span>Позже сюда можно вставить MP4/WebM или embed-ссылку.</span></div><div><b>Цель</b><span>За 60–90 секунд показать, что BaliXiO — не сервис, а инфраструктура.</span></div></div><div class="video-note-pro">Плейсхолдер готов под будущий видеоролик. Когда ролик будет готов, достаточно заменить внутренний блок на тег <b>video</b> или iframe, не меняя структуру окна.</div></div>`
    ],
    audience:[
      'Видео: для кого BaliXiO',
      'Здесь будет загружен ролик о сценариях для людей, компаний, ведомств, инвесторов и правительств',
      `<div class="video-modal-pro"><div class="video-frame-pro" data-video-slot="audience"><div class="video-placeholder-pro"><div class="play-orb-pro">▶</div><h3>Who BaliXiO Is Built For</h3><p>В этом окне будет отдельный ролик о том, как BaliXiO используют разные участники: обычный пользователь, компания, сотрудник, инвестор, государственная организация и правительство с индивидуальным суверенным пространством.</p></div></div><div class="video-meta-pro"><div><b>Фокус ролика</b><span>Роли, сценарии использования и уровни доступа внутри BaliXiO.</span></div><div><b>Видео-файл</b><span>Позже сюда можно загрузить отдельный ролик для аудитории.</span></div><div><b>Цель</b><span>Показать, кому нужна платформа и как каждый уровень получает свою среду.</span></div></div><div class="video-note-pro">Это окно специально отличается от “Возможностей”: здесь не функции платформы, а конкретные участники и их сценарии внутри экосистемы.</div></div>`
    ],
    login:[
      'Вход в BaliXiO',
      'Preview входа в цифровую экосистему',
      [['Компания','Вход в будущий workspace.'],['Сотрудник','Вход через организацию и роль.'],['Пользователь','Личный кабинет и сервисы.']]
    ],
    role:[
      'Регистрация роли',
      [['Роль','Выбранный тип аккаунта получает свой сценарий.'],['Preview','Сейчас открывается информационное окно.'],['Demo later','Полные demo-страницы будут отдельно.']]
    ],
    info:[
      'Информация BaliXiO',
      'Возможность платформы',
      [['Смысл','Этот блок объясняет ценность платформы.'],['Формат','Экосистема и preview без тяжёлой demo-системы.']]
    ],
    'open-services':[
      'Сервисы авторизации',
      'Preview подключений',
      [['Почта','Google, Microsoft и корпоративная почта.'],['Гос сервисы','Будущие интеграции для государственных структур.'],['Мессенджеры','Telegram, WhatsApp и уведомления.']]
    ],
    'ai-info':[
      'AI Core BaliXiO',
      'Preview интеллектуального слоя',
      [['AI-рекомендации','Подсказки, маршруты и аналитика.'],['Сигналы','Риски, KPI и прогнозы.'],['Автоматизация','Черновики, статусы и уведомления.']]
    ]
  };
  function handleAction(el, event){
    const action = el.dataset.action;
    if(!action) return false;
    if(event && event.stopImmediatePropagation) event.stopImmediatePropagation();
    if(action === 'close'){
      event.preventDefault();
      closePopups();
      return true;
    }
    if(action === 'collapse-auth'){
      event.preventDefault();
      const panel = document.querySelector('.auth-panel');
      if(panel) panel.style.display = 'none';
      return true;
    }
    const data = safeContent[action] || safeContent.info;
    event.preventDefault();
    openPopup(data[0], data[1], data[2]);
    return true;
  }
  document.addEventListener('click', function(event){
    const close = event.target.closest('.close-btn,.panel-close');
    if(close){
      event.preventDefault();
      closePopups();
      return;
    }
    const action = event.target.closest('[data-action]');
    if(action && handleAction(action, event)) return;
    const href = event.target.closest('a[href^="#"]');
    if(href){
      const id = href.getAttribute('href').slice(1);
      const target = $(id);
      if(target){
        event.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    }
  }, true);
  document.addEventListener('keydown', function(event){
    if(event.key === 'Escape') closePopups();
  });
  const overlay = $('overlay');
  if(overlay){
    overlay.addEventListener('click', closePopups);
  }
  function forceVisible(){
    document.querySelectorAll('.reveal,.cinematic-reveal').forEach(el => {
      el.classList.add('visible');
      el.style.opacity = '1';
      el.style.visibility = 'visible';
      el.style.filter = 'none';
    });
  }
function init(){
    forceVisible();
    if(typeof renderIcons === 'function'){
      try { renderIcons(); } catch(err) {}
    }
    setTimeout(forceVisible, 300);
    setTimeout(forceVisible, 1200);
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


// Extracted from inline <script> #11
(function(){
  'use strict';
  function normalizeNode(node){
    if(!node || node.dataset.unifiedOrbitNode === '1') return;
    node.dataset.unifiedOrbitNode = '1';
    const hasIcon =
      node.querySelector('.pulse') ||
      node.querySelector('.pc-icon') ||
      node.querySelector('strong') ||
      node.classList.contains('os-node') ||
      node.classList.contains('final-node') ||
      node.classList.contains('diagram-node');
    if(!hasIcon && node.classList.contains('u-node')){
      const pulse = document.createElement('span');
      pulse.className = 'pulse';
      node.insertBefore(pulse, node.firstChild);
    }
  }
  function init(){
    document.querySelectorAll('.u-node,.planet-card,.os-node,.role-satellite-card,.final-node,.diagram-node').forEach(normalizeNode);
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();


// Extracted from inline <script> #12
(function(){
  'use strict';
  const stageSelectors = [
    '.planet-zone',
    '.universe-center',
    '.os-map',
    '.role-orbit-stage',
    '.final-cta-visual',
    '.ecosystem-diagram'
  ];
  const planetSelectors = [
    '.planet',
    '.universe-core',
    '.os-core',
    '.role-orbit-core',
    '.final-orb',
    '.final-core',
    '.diagram-core'
  ];
  const ringSelectors = [
    '.orbit',
    '.orbit-line',
    '.os-ring',
    '.role-orbit-ring',
    '.final-ring'
  ];
  const satelliteSelectors = [
    '.planet-card',
    '.u-node',
    '.os-node',
    '.role-satellite-card',
    '.final-node',
    '.diagram-node'
  ];
  const slotMap = [
    ['pc1,n1,n-crm,gov', 'top-left'],
    ['pc2,n2,n-docs,company', 'top-right'],
    ['pc3,n3,n-ai,user', 'bottom-left'],
    ['pc4,n4,n-gov,investor', 'bottom-right'],
    ['pc5,n5,n-invest,employee', 'bottom-center'],
    ['pc6,n-analytics', 'top-center']
  ];
  function hasAnyClass(el, classListString){
    return classListString.split(',').some(cls => el.classList.contains(cls));
  }
  function normalizeStage(stage){
    if(!stage || stage.dataset.orbitSystemReady === '1') return;
    stage.dataset.orbitSystemReady = '1';
    stage.classList.add('orbit-system');
    if(stage.closest('.hero')) stage.classList.add('hero-system');
    else stage.classList.add('compact');
    planetSelectors.forEach(selector => {
      stage.querySelectorAll(selector).forEach(el => el.classList.add('planet-core'));
    });
    ringSelectors.forEach(selector => {
      stage.querySelectorAll(selector).forEach(el => {
        el.classList.add('orbit-ring');
        if(el.classList.contains('orbit-a') || el.classList.contains('o1') || el.classList.contains('orbit-1') || el.classList.contains('r1')) el.classList.add('near');
        if(el.classList.contains('orbit-b') || el.classList.contains('o2') || el.classList.contains('orbit-2') || el.classList.contains('r2')) el.classList.add('mid');
        if(el.classList.contains('orbit-glow') || el.classList.contains('o3') || el.classList.contains('orbit-3') || el.classList.contains('r3')) el.classList.add('far');
      });
    });
    satelliteSelectors.forEach(selector => {
      stage.querySelectorAll(selector).forEach(el => {
        el.classList.add('satellite-item');
        slotMap.forEach(([classes, slot]) => {
          if(hasAnyClass(el, classes) && !el.dataset.orbitSlot) {
            el.dataset.orbitSlot = slot;
          }
        });
      });
    });
  }
  function init(){
    stageSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(normalizeStage);
    });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();


// Extracted from inline <script> #13
(function(){
  'use strict';
  const STAGE_SELECTOR = '.orbit-system,.planet-zone,.universe-center,.os-map,.role-orbit-stage,.final-cta-visual,.ecosystem-diagram';
  const SAT_SELECTOR = '.satellite-item,.planet-card,.u-node,.os-node,.role-satellite-card,.final-node,.diagram-node';
  const info = {
    business: {
      title:'Business',
      text:'Компании, сделки, партнёры и рабочее пространство роста.',
      meta:['workspace','CRM','growth']
    },
    gov: {
      title:'GovTech',
      text:'Реестры, маршруты, заявки и прозрачный контроль процессов.',
      meta:['routes','registry','control']
    },
    invest: {
      title:'Invest',
      text:'Проекты, метрики, капитал, риски и инвестиционные сигналы.',
      meta:['projects','KPI','capital']
    },
    ai: {
      title:'AI Core',
      text:'Умные подсказки, анализ, прогнозы и автоматизация решений.',
      meta:['AI','signals','automation']
    },
    analytics: {
      title:'Analytics',
      text:'KPI, отчёты, риски и управленческая картина платформы.',
      meta:['KPI','reports','risk']
    },
    docs: {
      title:'Docs',
      text:'Договоры, файлы, заявки и маршруты согласования документов.',
      meta:['docs','files','approval']
    },
    user: {
      title:'User',
      text:'Личный кабинет, сервисы, заявки и понятные статусы.',
      meta:['profile','services','status']
    },
    employee: {
      title:'Employee',
      text:'Задачи, роли, доступы и рабочее пространство сотрудника.',
      meta:['tasks','access','workspace']
    },
    api: {
      title:'API Layer',
      text:'Интеграции, внешние сервисы и связка модулей платформы.',
      meta:['API','integrations','sync']
    }
  };
  const activeClasses = ['active-business','active-gov','active-invest','active-ai','active-analytics','active-docs','active-user','active-employee','active-api'];
  function esc(v){
    return String(v || '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  }
  function inferType(el){
    const text = (el.textContent || '').toLowerCase();
    const cls = el.className || '';
    if(cls.includes('pc1') || cls.includes('n1') || cls.includes('company') || text.includes('business') || text.includes('company') || text.includes('crm')) return 'business';
    if(cls.includes('pc2') || cls.includes('gov') || text.includes('gov')) return 'gov';
    if(cls.includes('pc6') || cls.includes('invest') || text.includes('invest')) return 'invest';
    if(cls.includes('pc3') || cls.includes('n-ai') || text.includes('ai') || text.includes('api')) return text.includes('api') ? 'api' : 'ai';
    if(cls.includes('pc5') || cls.includes('analytics') || cls.includes('employee') || text.includes('analytics') || text.includes('employee')) return text.includes('employee') ? 'employee' : 'analytics';
    if(cls.includes('pc4') || cls.includes('docs') || text.includes('docs') || text.includes('doc')) return 'docs';
    if(cls.includes('user') || text.includes('user')) return 'user';
    return 'business';
  }
  function ensurePanel(stage){
    let panel = stage.querySelector(':scope > .orbit-active-panel');
    if(panel) return panel;
    panel = document.createElement('div');
    panel.className = 'orbit-active-panel';
    panel.innerHTML = `
      <div class="orbit-active-kicker">active satellite</div><div class="orbit-active-title">BaliXiO Module</div><div class="orbit-active-text">Наведи на спутник, чтобы раскрыть описание модуля.</div><div class="orbit-active-meta"><span>orbit</span><span>preview</span></div>
    `;
    stage.appendChild(panel);
    return panel;
  }
  function renderPanel(stage, type){
    const data = info[type] || info.business;
    const panel = ensurePanel(stage);
    panel.innerHTML = `
      <div class="orbit-active-kicker">${esc(type)}</div><div class="orbit-active-title">${esc(data.title)}</div><div class="orbit-active-text">${esc(data.text)}</div><div class="orbit-active-meta">${data.meta.map(m => `<span>${esc(m)}</span>`).join('')}</div>
    `;
  }
  function clearStage(stage){
    stage.classList.remove('has-active-satellite', ...activeClasses);
    stage.querySelectorAll(SAT_SELECTOR).forEach(el => el.classList.remove('is-active'));
  }
  function activate(stage, sat){
    if(!stage || !sat) return;
    const type = sat.dataset.orbitType || inferType(sat);
    sat.dataset.orbitType = type;
    stage.classList.add('has-active-satellite');
    stage.classList.remove(...activeClasses);
    stage.classList.add('active-' + type);
    stage.querySelectorAll(SAT_SELECTOR).forEach(el => el.classList.toggle('is-active', el === sat));
    renderPanel(stage, type);
  }
  function initStage(stage){
    if(!stage || stage.dataset.activeSatelliteReady === '1') return;
    stage.dataset.activeSatelliteReady = '1';
    const satellites = Array.from(stage.querySelectorAll(SAT_SELECTOR));
    if(!satellites.length) return;
    ensurePanel(stage);
    satellites.forEach(sat => {
      sat.setAttribute('tabindex', sat.getAttribute('tabindex') || '0');
      sat.dataset.orbitType = sat.dataset.orbitType || inferType(sat);
      sat.addEventListener('mouseenter', () => activate(stage, sat));
      sat.addEventListener('focus', () => activate(stage, sat));
      sat.addEventListener('click', (event) => {
        activate(stage, sat);
      });
    });
    stage.addEventListener('mouseleave', () => {
      /* Keep panel visible on mobile after tap; on desktop fade softly */
      if(window.matchMedia && window.matchMedia('(max-width:760px)').matches) return;
      setTimeout(() => {
        if(!stage.matches(':hover')) clearStage(stage);
      }, 220);
    });
    /* Default to first satellite for premium empty state */
    activate(stage, satellites[0]);
  }
  function init(){
    document.querySelectorAll(STAGE_SELECTOR).forEach(initStage);
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();


// Extracted from inline <script> #14
(function(){
  const panel=document.getElementById('authPanel');
  if(!panel || !panel.classList.contains('access-gateway')) return;
  const roles={
    company:{title:'Вход в корпоративную среду',text:'Частная компания получает доступ к CRM, документам, сотрудникам, сделкам, финансам и AI-аналитике.',label:'Название компании / корпоративный ID',placeholder:'ООО «Название вашей компании»',pass:'Введите корпоративный пароль',button:'Войти в корпоративную среду',mode:'Corporate Workspace',desc:'CRM, документы, сотрудники, сделки, финансы и AI-аналитика открываются после корпоративной авторизации.',security:'Corporate Check',level:2,request:'Запросить регистрацию компании',chips:['Password','2FA','Domain','Admin']},
    govorg:{title:'Вход государственной организации',text:'Для ведомств, учреждений, госкорпораций, МФЦ, МВД, РЖД, Роскосмоса и других защищённых структур.',label:'Название учреждения / защищённый ID',placeholder:'Министерство / учреждение / ведомственный ID',pass:'Введите пароль защищённого контура',button:'Авторизоваться как госорганизация',mode:'Government Organization Layer',desc:'Открывается ведомственный контур: заявки, реестры, документы, маршруты согласования и контроль доступа.',security:'Secure Gov Check',level:4,request:'Запросить ведомственный доступ',chips:['Password','2FA','Gov ID','Certificate']},
    user:{title:'Вход пользователя',text:'Личный кабинет для почты, мессенджера, видеосвязи, обучения, закупок, трейдинга, документов и сервисов.',label:'Логин / e-mail',placeholder:'name@email.com',pass:'Введите пароль',button:'Войти в личный кабинет',mode:'Personal Digital Space',desc:'Почта, мессенджер, видеовстречи, обучение, документы, маркет, закупки и персональные сервисы.',security:'Personal Check',level:1,request:'Создать личный аккаунт',chips:['Password','2FA','Email','Recovery']},
    investor:{title:'Вход инвестора',text:'Инвестиционный контур для проектов, аналитики, рынков, сделок, фондов и приватного капитала.',label:'Логин инвестора / фонд / e-mail',placeholder:'Investor ID / Fund Name',pass:'Введите инвестиционный пароль',button:'Войти в Invest-контур',mode:'Capital Access Terminal',desc:'Открываются проекты, аналитика, рынки, документы, сделки, сигналы и инвестиционные маршруты.',security:'Capital Check',level:3,request:'Запросить доступ инвестора',chips:['Password','2FA','KYC','Deal PIN']},
    employee:{title:'Вход сотрудника',text:'Рабочее пространство сотрудника: почта, задачи, чат, документы, календарь, видеосвязь и права доступа.',label:'Рабочий e-mail / ID сотрудника',placeholder:'name@company.com / Employee ID',pass:'Введите рабочий пароль',button:'Войти в рабочее пространство',mode:'Employee Workspace',desc:'Открываются задачи, документы, почта, чат, календарь, внутренние процессы и доступы организации.',security:'Workspace Check',level:2,request:'Получить доступ сотрудника',chips:['Password','2FA','Org ID','Role']},
    government:{title:'Вход правительства',text:'Суверенный уровень доступа для государства, национальной цифровой инфраструктуры, министерств и межведомственного контура.',label:'Государство / Sovereign ID',placeholder:'Российская Федерация / Sovereign Access ID',pass:'Многоуровневый пароль',button:'Инициализировать защищённый вход',mode:'Sovereign Infrastructure Gateway',desc:'Национальный контур: министерства, реестры, гражданские сервисы, аналитика, инфраструктура и AI-governance.',security:'Sovereign Biometric',level:5,request:'Запросить суверенную регистрацию',chips:['Password','2FA','Certificate','Biometric']}
  };
  const $=id=>document.getElementById(id);
  function setRole(key){
    const d=roles[key]||roles.company;
    panel.dataset.accessRole=key;
    panel.querySelectorAll('.access-role-card').forEach(b=>b.classList.toggle('active',b.dataset.access===key));
    $('gatewayTitle').textContent=d.title;
    $('gatewayText').textContent=d.text;
    $('loginLabel').textContent=d.label;
    $('accessLogin').placeholder=d.placeholder;
    $('accessPassword').placeholder=d.pass;
    $('accessSubmit').textContent=d.button;
    $('accessModeLabel').textContent=d.mode;
    $('accessModeTitle').textContent=d.title;
    $('accessModeDesc').textContent=d.desc;
    $('securityName').textContent=d.security;
    $('requestAccessBtn').textContent=d.request;
    const bars=Array.from($('securityLevel').querySelectorAll('span'));
    bars.forEach((bar,i)=>bar.classList.toggle('on',i<d.level));
    const strip=$('verificationStrip');
    strip.innerHTML=d.chips.map((c,i)=>'<div class="verification-chip '+(i<Math.min(d.level,4)?'active':'')+'">'+c+'</div>').join('');
  }
  panel.querySelectorAll('.access-role-card').forEach(btn=>btn.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();setRole(btn.dataset.access)}));
  setRole('company');
})();


// Extracted from inline <script> #15
(function(){
  const panel=document.getElementById('authPanel');
  const modal=document.getElementById('verificationModal');
  const overlay=document.getElementById('verificationOverlay');
  if(!panel || !modal || !overlay) return;
  const data={
    company:{kicker:'Corporate Verification',title:'Заявка на регистрацию компании',text:'Для частной компании откроется корпоративный workspace: CRM, документы, сотрудники, сделки, финансы и аналитика.',level:'Level 2',submit:'Отправить корпоративную заявку',upload:'ИНН/ОГРН или регистрационный номер, уставные документы, подтверждение домена, доверенность представителя.',fields:[['Название компании','ООО «Название компании»'],['Страна регистрации','Россия / ОАЭ / Китай'],['Корпоративный e-mail','admin@company.com'],['ИНН / регистрационный номер','7700000000']],docs:['Регистрационные документы компании','Документ представителя или доверенность','Подтверждение корпоративного домена','Лицензии или сертификаты, если нужны'],security:[['Проверка','Компания + домен + администратор'],['Доступ','Corporate workspace'],['Уровень','Пароль + 2FA + domain check']]},
    govorg:{kicker:'Government Organization Verification',title:'Заявка государственной организации',text:'Для ведомств, учреждений и госкорпораций создаётся защищённый контур с реестрами, заявками и маршрутизацией.',level:'Level 4',submit:'Отправить ведомственную заявку',upload:'Официальное письмо, ведомственный ID, документ уполномоченного лица, сертификат защищённого доступа.',fields:[['Название учреждения','Министерство / МФЦ / РЖД / Роскосмос'],['Страна','Россия'],['Ведомство / уровень структуры','Федеральный / региональный / муниципальный'],['Защищённый e-mail или домен','office@gov-domain']],docs:['Официальное письмо на подключение','Ведомственный регистрационный ID','Документ уполномоченного представителя','Сертификат или ключ защищённого доступа'],security:[['Проверка','Ведомство + представитель + сертификат'],['Доступ','Government organization layer'],['Уровень','Пароль + 2FA + Gov ID + certificate']]},
    user:{kicker:'Personal Account Verification',title:'Создание личного кабинета',text:'Пользователь получает доступ к почте, мессенджеру, обучению, видеосвязи, документам, закупкам и персональным сервисам.',level:'Level 1',submit:'Создать личный кабинет',upload:'Документы можно приложить опционально: удостоверение личности, подтверждение e-mail или телефона.',fields:[['Имя и фамилия','Иван Иванов'],['E-mail','name@email.com'],['Страна','Россия'],['Телефон','+7 ...']],docs:['Подтверждение e-mail или телефона','Документ личности — опционально','Согласие с правилами платформы'],security:[['Проверка','E-mail + пароль'],['Доступ','Personal digital space'],['Уровень','Password + optional 2FA']]},
    investor:{kicker:'Capital Access Verification',title:'Заявка инвестора',text:'Инвестору открывается контур проектов, рынков, аналитики, сделок, фондов и приватного капитала.',level:'Level 3',submit:'Отправить заявку инвестора',upload:'KYC/KYB документы, подтверждение статуса инвестора, фондовые документы или профиль private capital.',fields:[['Имя / фонд / компания','Private investor / Fund name'],['Тип инвестора','Private / Fund / Family Office'],['Регион интереса','Global / Asia / Europe'],['E-mail для связи','invest@fund.com']],docs:['KYC/KYB документы','Подтверждение статуса инвестора','Профиль фонда или инвестиционной компании','Документ представителя'],security:[['Проверка','KYC/KYB + capital profile'],['Доступ','Capital access terminal'],['Уровень','Password + 2FA + KYC + Deal PIN']]},
    employee:{kicker:'Employee Workspace Verification',title:'Запрос доступа сотрудника',text:'Сотрудник подключается к рабочему пространству организации: задачи, документы, чат, почта, календарь и права доступа.',level:'Level 2',submit:'Запросить доступ сотрудника',upload:'Подтверждение трудовой связи, приглашение от компании или ID сотрудника.',fields:[['ФИО сотрудника','Иван Иванов'],['Рабочий e-mail','name@company.com'],['Компания','Название организации'],['Должность / отдел','Менеджер / Отдел продаж']],docs:['Приглашение от организации','ID сотрудника или табельный номер','Подтверждение рабочего e-mail'],security:[['Проверка','Организация + e-mail + роль'],['Доступ','Employee workspace'],['Уровень','Password + 2FA + Org ID']]},
    government:{kicker:'Sovereign Application Only',title:'Заявка правительства на индивидуальный защищённый контур',text:'Правительство не проходит обычную регистрацию. Государство только подаёт первичную заявку, после чего BaliXiO проектирует отдельное суверенное пространство, протоколы безопасности и персональный маршрут верификации.',level:'Sovereign Custom',submit:'Подать первичную sovereign-заявку',upload:'На этом этапе документы не загружаются публично. После заявки создаётся защищённый канал, где запрашиваются официальные письма, сертификаты, полномочия представителей и аппаратная/биометрическая проверка.',fields:[['Государство','Российская Федерация / China / UAE'],['Уполномоченный орган','Правительство / администрация / министерство'],['Официальный национальный домен','gov.example'],['Контакт защищённого контура','secure@gov.example']],docs:['Первичная заявка без публичной загрузки документов','Далее создаётся индивидуальный защищённый канал','Отдельно согласуются сертификаты, полномочия и аппаратная проверка','BaliXiO проектирует суверенное пространство под страну'],security:[['Формат','Только заявка, не обычная регистрация'],['Доступ','Индивидуальный sovereign-контур'],['Проверка','Договорной контур + сертификаты + биометрия']],noUpload:true}
  };
  function role(){return panel.dataset.accessRole || 'company'}
  function render(key){
    const d=data[key]||data.company; modal.dataset.role=key;
    document.getElementById('verifyKicker').textContent=d.kicker; document.getElementById('verifyTitle').textContent=d.title; document.getElementById('verifyText').textContent=d.text; document.getElementById('verifyLevel').textContent=d.level; document.getElementById('verifySubmit').textContent=d.submit; document.getElementById('verifyUploadHint').textContent=d.upload;
    document.getElementById('verifyDocsTitle').textContent=d.noUpload?'Sovereign-заявка без публичной загрузки':'Документы подтверждения';
    const uploadBox=document.querySelector('.verify-upload');
    const fileInput=document.getElementById('verifyFiles');
    uploadBox.classList.toggle('sovereign-locked',!!d.noUpload);
    fileInput.disabled=!!d.noUpload;
    document.getElementById('verifyFields').innerHTML=d.fields.map((f,i)=>`<label>${f[0]}</label><input ${i===2?'type="email"':'type="text"'} placeholder="${f[1]}">`).join('');
    document.getElementById('verifyDocList').innerHTML=d.docs.map(x=>`<div class="verify-doc-item ${d.noUpload?'locked':''}">${x}</div>`).join('');
    document.getElementById('verifySecurity').innerHTML=d.security.map(x=>`<div class="verify-security-line"><span>${x[0]}</span><strong>${x[1]}</strong></div>`).join('');
    document.getElementById('verifyStatus').classList.remove('show');
  }
  function openVerify(){render(role()); overlay.classList.add('open'); modal.classList.add('open'); modal.setAttribute('aria-hidden','false')}
  function closeVerify(){overlay.classList.remove('open'); modal.classList.remove('open'); modal.setAttribute('aria-hidden','true')}
  document.getElementById('requestAccessBtn')?.addEventListener('click',openVerify);
  panel.querySelectorAll('.access-role-card').forEach(btn=>btn.addEventListener('click',()=>setTimeout(openVerify,0)));
  document.getElementById('verifyClose')?.addEventListener('click',closeVerify);
  document.getElementById('verifyCancel')?.addEventListener('click',closeVerify);
  overlay.addEventListener('click',closeVerify);
  document.addEventListener('keydown',e=>{if(e.key==='Escape') closeVerify()});
  document.getElementById('verifyForm')?.addEventListener('submit',e=>{e.preventDefault();document.getElementById('verifyStatus').classList.add('show')});
})();


// Extracted from inline <script> #16
(function(){
  function openAudienceCardVideo(card){
    if(!card) return;
    const key = card.getAttribute('data-audience-video');
    if(typeof openAudienceVideo === 'function'){
      openAudienceVideo(key);
    }
  }
  document.querySelectorAll('.audience-card[data-audience-video]').forEach(function(card){
    card.addEventListener('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      openAudienceCardVideo(card);
    });
    card.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        openAudienceCardVideo(card);
      }
    });
  });
})();


// Extracted from inline <script> #17
(function(){
  function openVideoFromAudienceCard(card){
    if(!card) return;
    var key = card.getAttribute('data-audience-video') || 'user';
    if(typeof openAudienceVideo === 'function'){
      openAudienceVideo(key);
    }
  }
  document.addEventListener('click', function(event){
    var card = event.target.closest && event.target.closest('.audience-card[data-audience-video]');
    if(!card) return;
    event.preventDefault();
    event.stopPropagation();
    if(event.stopImmediatePropagation) event.stopImmediatePropagation();
    openVideoFromAudienceCard(card);
  }, true);
  document.addEventListener('keydown', function(event){
    var card = event.target.closest && event.target.closest('.audience-card[data-audience-video]');
    if(!card || (event.key !== 'Enter' && event.key !== ' ')) return;
    event.preventDefault();
    event.stopPropagation();
    if(event.stopImmediatePropagation) event.stopImmediatePropagation();
    openVideoFromAudienceCard(card);
  }, true);
})();


// Extracted from inline <script> #18
(function(){
  function openAudienceCardVideoFinal(card){
    var key = card && card.getAttribute('data-audience-video') || 'user';
    if(typeof openAudienceVideo === 'function'){
      openAudienceVideo(key);
    }
  }
  document.querySelectorAll('.audience-card[data-audience-video]').forEach(function(card){
    card.removeAttribute('data-action');
    card.style.cursor = 'pointer';
  });
  document.addEventListener('click', function(e){
    var card = e.target.closest && e.target.closest('.audience-card[data-audience-video]');
    if(!card) return;
    e.preventDefault();
    e.stopPropagation();
    if(e.stopImmediatePropagation) e.stopImmediatePropagation();
    openAudienceCardVideoFinal(card);
  }, true);
})();


// Extracted from inline <script> #19
(function(){
  const videoData = {
    gov:{
      kicker:'Government sector video',
      title:'Государственный сектор',
      subtitle:'Видео о цифровых маршрутах, реестрах, заявках и защищённом взаимодействии государства с бизнесом.',
      headline:'Government Infrastructure Layer',
      text:'Здесь будет ролик для государственных структур: ведомства, реестры, отчётность, документы, встречи и прозрачные цифровые маршруты внутри BaliXiO.',
      meta:[['Фокус','ведомства, реестры, отчётность'],['Доступ','защищённый государственный контур'],['Формат','MP4/WebM/iframe добавим позже']]
    },
    business:{
      kicker:'Private sector video',
      title:'Частный сектор',
      subtitle:'Видео о единой рабочей среде для компаний, процессов, CRM, документов, HR и AI.',
      headline:'Business Operating System',
      text:'Здесь будет ролик для бизнеса: управление компанией, CRM, документы, задачи, финансы, сотрудники, сделки и аналитика в одном пространстве.',
      meta:[['Фокус','компания, сделки, сотрудники'],['Доступ','корпоративная среда'],['Формат','MP4/WebM/iframe добавим позже']]
    },
    investor:{
      kicker:'Investors & funds video',
      title:'Инвесторы и фонды',
      subtitle:'Видео об инвестиционных кабинетах, аналитике, проектах, рисках и сопровождении сделок.',
      headline:'Investment Intelligence Layer',
      text:'Здесь будет ролик для инвесторов: карточки проектов, документы, показатели, команда, риски, история и AI-аналитика внутри BaliXiO.',
      meta:[['Фокус','проекты, фонды, сделки'],['Доступ','инвестиционный контур'],['Формат','MP4/WebM/iframe добавим позже']]
    },
    startup:{
      kicker:'Startup ecosystem video',
      title:'Стартапы',
      subtitle:'Видео о запуске проектов, доступе к инфраструктуре, партнёрам, обучению и капиталу.',
      headline:'Startup Launch Infrastructure',
      text:'Здесь будет ролик для стартапов: рабочая среда, партнёры, инвесторы, обучение, AI и будущий бизнес-инкубатор BaliXiO.',
      meta:[['Фокус','запуск, рост, капитал'],['Доступ','стартап-среда'],['Формат','MP4/WebM/iframe добавим позже']]
    },
    user:{
      kicker:'Users & employees video',
      title:'Пользователи и сотрудники',
      subtitle:'Видео о личной и рабочей среде: почта, чат, задачи, документы, встречи и AI.',
      headline:'Personal & Work Digital Space',
      text:'Здесь будет ролик для пользователей и сотрудников: работа в одном окне без хаоса и постоянного переключения между сервисами.',
      meta:[['Фокус','почта, чат, задачи'],['Доступ','личная/рабочая среда'],['Формат','MP4/WebM/iframe добавим позже']]
    }
  };
  function $(id){ return document.getElementById(id); }
  function openAudienceVideoModal(key){
    const item = videoData[key] || videoData.user;
    $('balixioAudienceVideoKicker').textContent = item.kicker;
    $('balixioAudienceVideoTitle').textContent = item.title;
    $('balixioAudienceVideoSubtitle').textContent = item.subtitle;
    $('balixioAudienceVideoHeadline').textContent = item.headline;
    $('balixioAudienceVideoText').textContent = item.text;
    $('balixioAudienceVideoMeta').innerHTML = item.meta.map(function(row){
      return '<div class="balixio-audience-video-meta"><b>'+row[0]+'</b><span>'+row[1]+'</span></div>';
    }).join('');
    $('balixioAudienceVideoOverlay').classList.add('active');
    $('balixioAudienceVideoOverlay').setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function closeAudienceVideoModal(){
    $('balixioAudienceVideoOverlay').classList.remove('active');
    $('balixioAudienceVideoOverlay').setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }
  /* override старой функции, которая открывала info-popup */
  window.openAudienceVideo = openAudienceVideoModal;
  document.querySelectorAll('.audience-card[data-audience-video]').forEach(function(card){
    card.style.cursor = 'pointer';
    card.addEventListener('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      if(e.stopImmediatePropagation) e.stopImmediatePropagation();
      openAudienceVideoModal(card.getAttribute('data-audience-video'));
    }, true);
    card.addEventListener('keydown', function(e){
      if(e.key !== 'Enter' && e.key !== ' ') return;
      e.preventDefault();
      e.stopPropagation();
      if(e.stopImmediatePropagation) e.stopImmediatePropagation();
      openAudienceVideoModal(card.getAttribute('data-audience-video'));
    }, true);
  });
  $('balixioAudienceVideoClose').addEventListener('click', closeAudienceVideoModal);
  $('balixioAudienceVideoOverlay').addEventListener('click', function(e){
    if(e.target === $('balixioAudienceVideoOverlay')) closeAudienceVideoModal();
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeAudienceVideoModal();
  });
})();


// Extracted from inline <script> #20
(function(){
    const open = document.getElementById('openAiVideo');
    const overlay = document.getElementById('aiVideoOverlay');
    const close = document.getElementById('closeAiVideo');
    function openModal(){
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeModal(){
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    if(open) open.addEventListener('click', openModal);
    if(close) close.addEventListener('click', closeModal);
    if(overlay) overlay.addEventListener('click', function(e){
        if(e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape') closeModal();
    });
})();


// Extracted from inline <script> #21
(function(){
  function openOpportunitiesLikeHero(){
    var heroBtn = document.querySelector('[data-action="opportunities"]');
    if(heroBtn) heroBtn.click();
  }
  function applyAccountingPatch(){
    document.querySelectorAll('.balixio-ai-wrapper .panel').forEach(function(panel){
      var titleEl = panel.querySelector('h3');
      var title = titleEl ? titleEl.textContent.trim().toLowerCase() : '';
      if(title === 'automation status' || title === 'ai financial dashboard'){
        panel.style.display = 'none';
      }
    });
    var aiBtn = document.getElementById('openAiVideo');
    if(aiBtn && !aiBtn.dataset.accountingPatched){
      aiBtn.dataset.accountingPatched = 'true';
      aiBtn.addEventListener('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        openOpportunitiesLikeHero();
      }, true);
    }
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', applyAccountingPatch);
  else applyAccountingPatch();
})();


// Extracted from inline <script> #22
(function(){
  function openHrVideo(type){
    var title = type === 'automation'
      ? 'Сценарии автоматизации Online HR'
      : 'AI-HR BaliXiO в действии';
    var subtitle = type === 'automation'
      ? 'Здесь будет видео о том, как AI автоматизирует найм, отпуска, документы, увольнения и связь с бухгалтерией.'
      : 'Здесь будет видео-презентация онлайн-кадров BaliXiO: единый AI-контур для сотрудников, руководства, бухгалтерии и государства.';
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('dynamicWindow');
    var popupTitle = document.getElementById('dynamicTitle');
    var popupSubtitle = document.getElementById('dynamicSubtitle');
    var content = document.getElementById('dynamicContent');
    if(!overlay || !popup || !popupTitle || !content) return;
    popupTitle.textContent = title;
    if(popupSubtitle) popupSubtitle.textContent = subtitle;
    content.innerHTML =
      '<div style="border-radius:24px;min-height:420px;display:grid;place-items:center;text-align:center;padding:34px;background:radial-gradient(circle at 35% 25%,rgba(98,217,255,.18),transparent 35%),radial-gradient(circle at 70% 70%,rgba(196,76,255,.18),transparent 38%),linear-gradient(180deg,rgba(12,17,50,.94),rgba(5,8,24,.98));border:1px solid rgba(255,255,255,.14);box-shadow:0 24px 90px rgba(0,0,0,.36);">' +
        '<div>' +
          '<div style="width:86px;height:86px;border-radius:50%;display:grid;place-items:center;margin:0 auto 18px;background:linear-gradient(90deg,#a73dff,#3aa8ff);box-shadow:0 0 70px rgba(92,210,255,.34);font-size:34px;">▶</div>' +
          '<h3 style="font-size:30px;margin-bottom:10px;">Видео будет добавлено сюда</h3>' +
          '<p style="max-width:680px;color:rgba(255,255,255,.72);line-height:1.65;">' + subtitle + '</p>' +
        '</div>' +
      '</div>';
    overlay.classList.add('active');
    popup.classList.add('active');
  }
  document.addEventListener('click', function(e){
    var btn = e.target.closest('[data-hr-video]');
    if(!btn) return;
    openHrVideo(btn.getAttribute('data-hr-video'));
  });
})();


// Extracted from inline <script> #23
(function(){
  function esc(text){
    return String(text || '').replace(/[&<>"]/g, function(ch){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch];
    });
  }
  var data = {
    infrastructure: {
      title: 'BaliXiO Sovereign Mail: инфраструктура защищённой почты',
      subtitle: 'Здесь будет видео о том, как BaliXiO заменяет Gmail, Outlook, Mail и корпоративные ящики единой защищённой коммуникационной системой.',
      headline: 'Sovereign Communication Infrastructure',
      points: [['Фокус','почта, документы, задачи, архив и коммуникации внутри BaliXiO'],['Сценарий','компания или госструктура переводит переписку в защищённый контур'],['Результат','меньше внешних сервисов, больше контроля и безопасности']]
    },
    security: {
      title: 'AI-защита BaliXiO Mail в реальном времени',
      subtitle: 'Здесь будет видео о проверке фишинга, вложений, ссылок, подозрительных отправителей и маршрутов писем до открытия сообщения.',
      headline: 'AI Threat Shield for Mail',
      points: [['Фокус','фишинг, вредоносные вложения, подмена отправителя'],['AI','анализ угроз, приоритетов и аномального поведения'],['Безопасность','предупреждения, блокировки и аудит действий']]
    },
    government: {
      title: 'Government Security Layer для почты BaliXiO',
      subtitle: 'Здесь будет видео о защищённой коммуникации для госструктур, корпораций, инвесторов и стратегических отраслей.',
      headline: 'Government-grade Secure Mail Layer',
      points: [['Фокус','государство, корпорации, инвесторы, критичные процессы'],['Контроль','роли, доступы, архив, история действий'],['Инфраструктура','почта как слой цифрового суверенитета']]
    }
  };
  function openMailVideo(type){
    var item = data[type] || data.infrastructure;
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('dynamicWindow');
    var popupTitle = document.getElementById('dynamicTitle');
    var popupSubtitle = document.getElementById('dynamicSubtitle');
    var content = document.getElementById('dynamicContent');
    if(!overlay || !popup || !popupTitle || !content) return;
    popupTitle.textContent = item.title;
    if(popupSubtitle) popupSubtitle.textContent = item.subtitle;
    var meta = item.points.map(function(row){
      return '<div style="padding:13px 14px;border-radius:15px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);"><b style="display:block;color:#7cd2ff;margin-bottom:5px;">'+esc(row[0])+'</b><span style="color:rgba(255,255,255,.70);font-size:13px;line-height:1.45;">'+esc(row[1])+'</span></div>';
    }).join('');
    content.innerHTML =
      '<div style="display:grid;gap:14px;">' +
        '<div style="border-radius:26px;min-height:430px;display:grid;place-items:center;text-align:center;padding:34px;background:radial-gradient(circle at 35% 25%,rgba(98,217,255,.20),transparent 35%),radial-gradient(circle at 70% 70%,rgba(196,76,255,.20),transparent 38%),linear-gradient(180deg,rgba(12,17,50,.96),rgba(5,8,24,.99));border:1px solid rgba(255,255,255,.14);box-shadow:0 24px 90px rgba(0,0,0,.36);overflow:hidden;position:relative;">' +
          '<div style="position:absolute;inset:-30%;background:linear-gradient(115deg,transparent 0 42%,rgba(112,222,255,.10) 43%,transparent 44% 100%);"></div>' +
          '<div style="position:relative;">' +
            '<div style="width:90px;height:90px;border-radius:50%;display:grid;place-items:center;margin:0 auto 18px;background:linear-gradient(90deg,#a73dff,#3aa8ff);box-shadow:0 0 80px rgba(92,210,255,.38);font-size:36px;">▶</div>' +
            '<h3 style="font-size:32px;margin-bottom:10px;">'+esc(item.headline)+'</h3>' +
            '<p style="max-width:720px;color:rgba(255,255,255,.72);line-height:1.68;">'+esc(item.subtitle)+'</p>' +
          '</div>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">'+meta+'</div>' +
        '<div style="color:rgba(255,255,255,.62);font-size:12px;line-height:1.55;">Плейсхолдер готов под будущий видеоролик. Когда ролик будет готов, сюда можно вставить video или iframe, не меняя кнопки и структуру окна.</div>' +
      '</div>';
    overlay.classList.add('active');
    popup.classList.add('active');
  }
  document.addEventListener('click', function(e){
    var btn = e.target.closest && e.target.closest('[data-mail-video]');
    if(!btn) return;
    e.preventDefault();
    openMailVideo(btn.getAttribute('data-mail-video'));
  });
})();


// Extracted from inline <script> #24
(function(){
  function esc(text){return String(text || '').replace(/[&<>"]/g,function(ch){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch];});}
  var data={
    overview:{title:'BaliXiO Messenger: единый чат, каналы и медиа внутри платформы',subtitle:'Здесь будет видео о том, как BaliXiO заменяет Telegram, Max, VK, Facebook Messenger, корпоративные чаты, каналы и медиа-платформы единым защищённым коммуникационным слоем.',headline:'Messenger Operating System',points:[['Фокус','чаты, группы, темы, каналы, видео и домовые сообщества'],['Сценарий','сотрудник, пользователь, блогер или госструктура работает внутри BaliXiO без перехода в сторонние приложения'],['Результат','меньше хаоса, больше контроля, больше возможностей для общения и монетизации']]},
    security:{title:'AI-защита, DLP и контроль документов в BaliXiO Messenger',subtitle:'Здесь будет видео о проверке вложений, маршрутов отправки, прав доступа и рисков утечки корпоративных документов перед отправкой сообщения.',headline:'AI + DLP Security Layer',points:[['Фокус','документы, вложения, внешние получатели и корпоративные правила'],['AI','анализирует контекст, получателя, риск и подозрительные действия'],['Контроль','журнал отправок, согласования, блокировки и аудит действий']]},
    creator:{title:'Каналы, видео, shorts и монетизация BaliXiO Messenger',subtitle:'Здесь будет видео о том, как блогеры, СМИ, компании и авторы смогут вести каналы, публиковать видео, создавать короткие ролики и зарабатывать внутри экосистемы BaliXiO.',headline:'Creator & Media Network',points:[['Фокус','каналы, подписчики, публикации, видео и короткие ролики'],['Монетизация','подписки, донаты, реклама, платный контент и партнёрские форматы'],['Экосистема','медиа не отделены от бизнеса, платежей, документов и коммуникаций BaliXiO']]}
  };
  function openChatVideo(type){
    var item=data[type]||data.overview,overlay=document.getElementById('overlay'),popup=document.getElementById('dynamicWindow'),popupTitle=document.getElementById('dynamicTitle'),popupSubtitle=document.getElementById('dynamicSubtitle'),content=document.getElementById('dynamicContent');
    if(!overlay||!popup||!popupTitle||!content)return;
    popupTitle.textContent=item.title;if(popupSubtitle)popupSubtitle.textContent=item.subtitle;
    var meta=item.points.map(function(row){return '<div style="padding:13px 14px;border-radius:15px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);"><b style="display:block;color:#7cd2ff;margin-bottom:5px;">'+esc(row[0])+'</b><span style="color:rgba(255,255,255,.70);font-size:13px;line-height:1.45;">'+esc(row[1])+'</span></div>';}).join('');
    content.innerHTML='<div style="display:grid;gap:14px;">'+'<div style="border-radius:26px;min-height:430px;display:grid;place-items:center;text-align:center;padding:34px;background:radial-gradient(circle at 35% 25%,rgba(98,217,255,.20),transparent 35%),radial-gradient(circle at 70% 70%,rgba(196,76,255,.20),transparent 38%),linear-gradient(180deg,rgba(12,17,50,.96),rgba(5,8,24,.99));border:1px solid rgba(255,255,255,.14);box-shadow:0 24px 90px rgba(0,0,0,.36);overflow:hidden;position:relative;">'+'<div style="position:absolute;inset:-30%;background:linear-gradient(115deg,transparent 0 42%,rgba(112,222,255,.10) 43%,transparent 44% 100%);"></div>'+'<div style="position:relative;"><div style="width:90px;height:90px;border-radius:50%;display:grid;place-items:center;margin:0 auto 18px;background:linear-gradient(90deg,#a73dff,#3aa8ff);box-shadow:0 0 80px rgba(92,210,255,.38);font-size:36px;">▶</div><h3 style="font-size:32px;margin-bottom:10px;">'+esc(item.headline)+'</h3><p style="max-width:720px;color:rgba(255,255,255,.72);line-height:1.68;">'+esc(item.subtitle)+'</p></div></div>'+'<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">'+meta+'</div>'+'<div style="color:rgba(255,255,255,.62);font-size:12px;line-height:1.55;">Плейсхолдер готов под будущий видеоролик. Когда ролик будет готов, сюда можно вставить video или iframe, не меняя кнопки и структуру окна.</div>'+'</div>';
    overlay.classList.add('active');popup.classList.add('active');
  }
  document.addEventListener('click',function(e){var btn=e.target.closest&&e.target.closest('[data-chat-video]');if(!btn)return;e.preventDefault();openChatVideo(btn.getAttribute('data-chat-video'));});
})();


// Extracted from inline <script> #25
(function(){
  'use strict';
  function closeClassicPopups(){
    var overlay=document.getElementById('overlay');
    var dynamic=document.getElementById('dynamicWindow');
    var services=document.getElementById('servicesPopup');
    if(dynamic) dynamic.classList.remove('active');
    if(services) services.classList.remove('active');
    if(overlay) overlay.classList.remove('active');
  }
  function closeVerification(){
    var overlay=document.getElementById('verificationOverlay');
    var modal=document.getElementById('verificationModal');
    if(overlay) overlay.classList.remove('open');
    if(modal){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }
  }
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){
      closeClassicPopups();
      closeVerification();
    }
  });
  var overlay=document.getElementById('overlay');
  if(overlay){ overlay.addEventListener('click',closeClassicPopups); }
  var vOverlay=document.getElementById('verificationOverlay');
  if(vOverlay){ vOverlay.addEventListener('click',closeVerification); }
})();


// Extracted from inline <script> #26
(function(){
  'use strict';
  function byId(id){ return document.getElementById(id); }
  function visible(el){ return !!(el && (el.classList.contains('active') || el.classList.contains('open'))); }
  function closeClassic(){
    var overlay = byId('overlay');
    var dynamic = byId('dynamicWindow');
    var services = byId('servicesPopup');
    if(dynamic) dynamic.classList.remove('active');
    if(services) services.classList.remove('active');
    if(overlay) overlay.classList.remove('active');
  }
  function closeVerify(){
    var overlay = byId('verificationOverlay');
    var modal = byId('verificationModal');
    if(overlay) overlay.classList.remove('open');
    if(modal){
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden','true');
    }
  }
  function closeAudienceVideo(){
    var overlay = byId('balixioAudienceVideoOverlay');
    if(overlay) overlay.classList.remove('active');
  }
  function wireOnce(el, key, fn){
    if(!el || el.dataset[key] === '1') return;
    el.dataset[key] = '1';
    el.addEventListener('click', fn);
  }
  function init(){
    /* Закрытие оставлено в исходных окнах: .active для обычных popup, .open для регистрации */
    wireOnce(byId('overlay'), 'stableClose', function(e){
      if(e.target === e.currentTarget) closeClassic();
    });
    wireOnce(byId('verificationOverlay'), 'stableClose', function(e){
      if(e.target === e.currentTarget) closeVerify();
    });
    wireOnce(byId('balixioAudienceVideoOverlay'), 'stableClose', function(e){
      if(e.target === e.currentTarget) closeAudienceVideo();
    });
    document.querySelectorAll('.close-btn').forEach(function(btn){
      wireOnce(btn, 'stableClose', function(e){
        e.preventDefault();
        closeClassic();
      });
    });
    wireOnce(byId('verifyClose'), 'stableClose', function(e){ e.preventDefault(); closeVerify(); });
    wireOnce(byId('verifyCancel'), 'stableClose', function(e){ e.preventDefault(); closeVerify(); });
    wireOnce(byId('balixioAudienceVideoClose'), 'stableClose', function(e){ e.preventDefault(); closeAudienceVideo(); });
    /* Формы не перезагружают страницу, а показывают результат внутри уже существующего окна */
    document.querySelectorAll('form').forEach(function(form){
      wireOnce(form, 'stableSubmit', function(e){
        e.preventDefault();
        var status = form.querySelector('.message') || byId('verifyStatus');
        if(status){
          status.textContent = status.id === 'verifyStatus' ? status.textContent : 'Данные приняты в демо-режиме.';
          status.style.display = 'block';
          status.classList.add('show');
        }
      });
    });
    /* Ссылки-заглушки не должны прыгать наверх страницы */
    document.querySelectorAll('a[href="#"],a:not([href])').forEach(function(a){
      wireOnce(a, 'stableAnchor', function(e){ e.preventDefault(); });
    });
    /* Если какой-то reveal не успел сработать из-за observer/анимаций — не скрываем контент */
    document.querySelectorAll('.reveal,.cinematic-reveal').forEach(function(el){
      el.classList.add('visible');
    });
  }
  document.addEventListener('keydown', function(e){
    if(e.key !== 'Escape') return;
    if(visible(byId('verificationModal'))) closeVerify();
    if(visible(byId('dynamicWindow')) || visible(byId('servicesPopup'))) closeClassic();
    if(visible(byId('balixioAudienceVideoOverlay'))) closeAudienceVideo();
  });
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();


// Extracted from inline <script> #27
(function(){
  var videos={
    main:{title:'Видео: BaliXiO Tenders 360',subtitle:'Большая презентация раздела',headline:'Все тендеры будущего проходят внутри BaliXiO',text:'Промо-ролик показывает, как госкомпании, министерства, частный бизнес, поставщики и пользователи проводят закупки в единой защищённой экосистеме: лот, заявки, AI-проверка, escrow, контракт, поставка и закрытие сделки.',meta:[['Фокус','единая платформа закупок'],['Для кого','государство, бизнес, поставщики, пользователи'],['Итог','прозрачный рынок доверия']]},
    escrow:{title:'Видео: Escrow-защита',subtitle:'Деньги не исчезают до завершения сделки',headline:'Оплата под контролем BaliXiO',text:'Средства резервируются на защищённом счёте и разблокируются только после подтверждения этапов исполнения. Это защищает заказчика от срыва поставки, а исполнителя — от необоснованного отказа оплаты.',meta:[['Контроль','спецсчёт / escrow'],['Выплата','по этапам и подтверждениям'],['Защита','заказчик и исполнитель']]},
    ai:{title:'Видео: AI-проверка',subtitle:'Риски, документы, цены и связи',headline:'AI видит то, что человек может пропустить',text:'BaliXiO анализирует документы, подозрительные цены, связанные аккаунты, конфликт интересов, историю сделок и вероятность срыва обязательств. Результат — понятный риск-профиль каждого участника.',meta:[['AI','аномалии и документы'],['Риск','сговор, фиктивность, срыв'],['Результат','рейтинг доверия']]},
    gov:{title:'Видео: Государственные закупки',subtitle:'Министерства, ведомства, регионы',headline:'Госзакупки с прозрачным цифровым следом',text:'Государственные структуры публикуют закупки, получают проверенные заявки, видят AI-рейтинг участников, фиксируют выбор победителя и получают доказуемый аудит каждого решения.',meta:[['Участники','государство и госкорпорации'],['Контроль','бюджет и аудит'],['Цель','антикоррупционная прозрачность']]},
    suppliers:{title:'Видео: Поставщики',subtitle:'Рынок честного доступа',headline:'Поставщик получает не хаос, а понятную витрину возможностей',text:'Поставщики видят релевантные тендеры, подают предложения, повышают рейтинг доверия, подтверждают документы и получают защиту оплаты через BaliXiO.',meta:[['Витрина','подходящие лоты'],['Профиль','документы, рейтинг, история'],['Оплата','защищённые этапы']]},
    contracts:{title:'Видео: Контракты',subtitle:'От победы до исполнения',headline:'Победа в тендере автоматически превращается в управляемую сделку',text:'BaliXiO связывает тендер с договором, задачами, этапами поставки, актами, перепиской, видео-встречами и финансовыми статусами.',meta:[['Документы','договоры и акты'],['Процесс','этапы исполнения'],['Финал','закрытие сделки']]},
    audit:{title:'Видео: Digital Audit',subtitle:'Журнал действий и доказательства',headline:'Каждое действие оставляет цифровой след',text:'Система фиксирует публикацию лота, изменения условий, заявки, отклонения, согласования, выбор победителя, оплату и закрытие этапов.',meta:[['След','кто, когда, что сделал'],['Доказательства','документы, статусы, лог'],['Прозрачность','для проверки и отчётности']]},
    business:{title:'Видео: Коммерческие закупки',subtitle:'B2B-тендеры и корпоративные закупки',headline:'Компания закупает всё — от IT до строительства — через BaliXiO',text:'Корпоративный заказчик создаёт лот, получает предложения, сравнивает поставщиков, проводит переговоры, заключает контракт и контролирует поставку в одном рабочем пространстве.',meta:[['Сфера','B2B и корпорации'],['Закупки','услуги, сырьё, оборудование'],['Плюс','единый workspace']]},
    users:{title:'Видео: Пользовательские тендеры',subtitle:'Запросы от частных клиентов',headline:'Обычный пользователь тоже может создать честный мини-тендер',text:'Ремонт, доставка, подбор подрядчика, покупка товара или локальный конкурс: пользователь создаёт запрос, получает предложения и выбирает исполнителя с защитой оплаты.',meta:[['Формат','мини-тендеры'],['Участники','частные пользователи'],['Защита','оплата после результата']]},
    international:{title:'Видео: Международные торги',subtitle:'Экспорт, импорт, фонды и крупные контракты',headline:'BaliXiO может стать международным стандартом торгов',text:'Платформа объединяет поставщиков, заказчиков, фонды, экспортёров и импортёров в едином контуре с проверками, документами, переводами статусов и финансовой защитой.',meta:[['Масштаб','международные рынки'],['Участники','фонды, корпорации, государства'],['Контроль','документы и оплата']]},
    dispute:{title:'Видео: Споры и арбитраж',subtitle:'Когда сделка идёт не по плану',headline:'BaliXiO хранит доказательства, чтобы спор решался по фактам',text:'Если возникает конфликт, система показывает документы, сроки, переписку, видео, статусы, этапы поставки и финансовые действия. Это снижает хаос и помогает принимать справедливое решение.',meta:[['Доказательства','лог, видео, документы'],['Решение','по фактам сделки'],['Защита','обе стороны']]},
    architecture:{title:'Видео: Архитектура Tenders 360',subtitle:'Как устроен раздел изнутри',headline:'Лот, проверка, AI, escrow, контракт и аудит связаны в одну систему',text:'Архитектура раздела объединяет регистрацию участников, карточки лотов, AI-риск, документы, видео-встречи, договоры, платежный контур, контроль исполнения и финальное закрытие.',meta:[['Слои','участники, лоты, документы'],['AI','риск и сравнение'],['Финансы','escrow и закрытие']]}
  };
  function esc(s){return String(s||'').replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  function openTenderVideo(key){var item=videos[key]||videos.main;var meta=item.meta.map(function(m){return '<div class="video-meta-item-pro"><b>'+esc(m[0])+'</b><span>'+esc(m[1])+'</span></div>'}).join('');var html='<div class="video-modal-pro t360-video-window"><div class="video-frame-pro" data-video-slot="t360-'+esc(key)+'"><div class="video-placeholder-pro"><div class="play-orb-pro">▶</div><h3>'+esc(item.headline)+'</h3><p>'+esc(item.text)+'</p></div></div><div class="video-meta-pro">'+meta+'</div><div class="video-note-pro">Это готовое видео-окно по логике Video Room: сейчас стоит презентационный placeholder, позже сюда можно вставить настоящий ролик без изменения кнопок.</div></div>';if(typeof openDynamic==='function'){openDynamic(item.title,item.subtitle,html)}else{alert(item.title+'\n\n'+item.text)}}
  document.addEventListener('click',function(e){var btn=e.target.closest&&e.target.closest('[data-tender-video]');if(!btn)return;e.preventDefault();openTenderVideo(btn.getAttribute('data-tender-video'))});
})();


// Extracted from inline <script> #28
(function(){
  var videos={
    main:['Видео: BaliXiO Academy','Главная презентация','BaliXiO Academy — цифровой университет нового поколения','Показываем, как Академия объединяет высшее образование, корпоративные программы, государственные дипломы, AI-проверку знаний, HR-профиль, тендерные допуски и трудоустройство внутри единой экосистемы BaliXiO.'],
    company:['Видео: корпоративный университет','Обучение для компаний','Каждая компания получает собственную академию','BaliXiO создаёт программы под отделы, должности, регламенты, внутренние процессы и реальные задачи бизнеса. Сотрудники учатся не абстрактной теории, а тому, что требуется для работы именно в их организации.'],
    diploma:['Видео: дипломы и сертификаты','Государственный уровень доверия','Диплом государственного образца и профессиональные сертификаты','Документ подтверждает не просто факт прохождения курса, а квалификацию: экзамены, задания, практику, AI-оценку, цифровую верификацию и историю компетенций выпускника.'],
    certificates:['Видео: сертификаты','Профессиональное подтверждение','Сертификаты, которые имеют вес','Сертификат BaliXiO связан с цифровым профилем, навыками, экзаменами, карьерной историей и допусками внутри платформы.'],
    career:['Видео: трудоустройство','Карьера после обучения','Обучение заканчивается не бумажкой, а маршрутом к работе','Выпускник получает цифровой профиль компетенций, рекомендации AI и доступ к компаниям, госструктурам и партнёрам, подключённым к BaliXiO.'],
    state:['Видео: госсектор','Обучение государства','Единая система подготовки чиновников и госкомпаний','Академия помогает обучать сотрудников госструктур, министерств, подрядчиков и госкомпаний: регламенты, закупки, ответственность, цифровая дисциплина и прозрачная аттестация.'],
    tenders:['Видео: тендерный допуск','Закупки и тендеры','Нельзя участвовать в серьёзных закупках без обучения','BaliXiO Academy может стать обязательным фильтром перед тендерами: участник проходит курс, подтверждает знания правил и получает цифровой допуск.'],
    ai:['Видео: AI-проверка','Искусственный интеллект в образовании','AI-наставник, AI-экзаменатор и AI-аналитик','AI анализирует прогресс, проверяет задания, выявляет слабые зоны, оценивает оригинальность ответов и собирает персональный маршрут развития.'],
    users:['Видео: обучение пользователей','Навыки для каждого','Внешние пользователи учатся и приводят BaliXiO в свои компании','Пользователь может получить новую профессию, подтвердить навыки, рекомендовать BaliXiO руководству и стать частью кадровой экосистемы.'],
    architecture:['Видео: архитектура Академии','Система изнутри','Как устроена образовательная экосистема BaliXiO','Показываем архитектуру: курсы, видео, задания, экзамены, AI-проверка, дипломы, HR, вакансии, тендерные допуски и цифровая репутация работают как единый механизм.']
  };
  function esc(x){return String(x||'').replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  function openAcademyVideo(key){
    var v=videos[key]||videos.main;
    var html='<div class="academy-video-window"><div class="academy-video-frame"><div><div class="academy-play">▶</div><h3>'+esc(v[2])+'</h3><p>'+esc(v[3])+'</p></div></div><div class="academy-video-meta"><div><b>Формат</b><span>Видеопрезентация / demo placeholder</span></div><div><b>Интеграция</b><span>Кнопка уже готова под замену на настоящий ролик</span></div><div><b>Назначение</b><span>Продажа ценности Академии для компаний и государства</span></div></div><div class="academy-note">Сейчас открывается готовое видео-окно с презентационным placeholder. Позже вместо него можно вставить реальный mp4, iframe или защищённый видеоплеер — логика кнопок уже работает.</div></div>';
    if(typeof window.openDynamic==='function'){window.openDynamic(v[0],v[1],html)}else{alert(v[0]+'\n\n'+v[3])}
  }
  document.addEventListener('click',function(e){
    var el=e.target.closest&&e.target.closest('#learning-development [data-academy-video]');
    if(!el) return;
    e.preventDefault();
    openAcademyVideo(el.getAttribute('data-academy-video'));
  });
})();


// Extracted from inline <script> #29
(function(){'use strict';var stages={idea:['01','Отбор и диагностика проекта','Команда подаёт заявку, описывает идею, рынок, продукт, стадию, потребности и команду. BaliXiO проводит первичный скоринг: потенциал, риски, конкурентность, юридические вопросы, инвестиционная логика и совместимость с экосистемой.',['AI-анализ рынка, конкурентов, трендов и потребительского спроса.','Экспертная встреча с основателями и проверка реалистичности гипотез.','Решение: принять в инкубатор, отправить на доработку или предложить другой формат.']],build:['02','Сборка продукта и бизнес-модели','BaliXiO помогает превратить сырую идею в понятный продукт: MVP, позиционирование, roadmap, финансы, маркетинг, продажи, команда и операционная система управления.',['Упаковка продукта, презентации, лендинга, финансовой модели и коммерческого предложения.','Настройка задач, ролей, командной работы, CRM, документооборота и коммуникаций внутри BaliXiO.','Первые гипотезы, тесты, пилотные клиенты и измеримые метрики traction.']],legal:['03','Юридическая защита, патенты и документы','Проект получает юридический контур: компания, доли, соглашения между основателями, NDA, IP, патенты, товарные знаки, договоры с сотрудниками и партнёрами.',['Регистрация юридического лица и оформление структуры владения.','Патентная стратегия, товарные знаки, авторские права и защита интеллектуальной собственности.','Data room для инвесторов: договоры, отчёты, финансы, cap table и ключевые документы.']],invest:['04','Инвестиции и партнёрская доля BaliXiO','BaliXiO может инвестировать сам, подключать инвесторов, фонды, бизнес-ангелов и стратегических партнёров. Условия доли зависят от объёма вклада, стадии и глубины участия платформы.',['Подготовка pitch deck, valuation, финансовой модели и инвестиционного предложения.','Переговоры с инвесторами, due diligence и сопровождение сделки.','Модель участия BaliXiO: от 20–30% до 40–50% при глубокой операционной роли и инвестициях.']],scale:['05','Масштабирование до корпорации','После первых продаж и инвестиций проект масштабируется: команда, процессы, партнёры, экспорт, тендеры, корпоративные клиенты, международные рынки и подготовка к крупным раундам.',['Рост команды и операционной структуры через инструменты BaliXiO.','Выход к клиентам, партнёрам, государственным и корпоративным заказчикам.','Подготовка к новым раундам, M&A, международной экспансии или IPO.']]};var videos={route:['Видео: путь стартапа','От заявки до большой компании','Startup Growth Route','Показываем полный маршрут: заявка, отбор, AI-анализ, юридическая упаковка, инвестиции, пилоты, первые клиенты и масштабирование внутри BaliXiO.'],apply:['Видео: заявка в инкубатор','Первый вход проекта','Application & Selection','Стартап описывает идею, команду, рынок и потребности. BaliXiO оценивает потенциал, риски, стадию и формат участия.'],ai:['Видео: AI-анализ проекта','Скоринг рынка и рисков','AI Startup Intelligence','AI помогает разобрать спрос, конкурентов, финансы, документы, слабые места, сценарии роста и инвестиционную привлекательность проекта.'],legal:['Видео: документы и патенты','Юридический контур проекта','Legal & IP Infrastructure','Здесь демонстрируется, как BaliXiO помогает оформить компанию, доли, NDA, договоры, товарные знаки, патенты и data room.'],invest:['Видео: инвестиции BaliXiO','Капитал, фонды и доля','Investment Partnership','Ролик показывает модель участия BaliXiO: собственный вклад, фонды, бизнес-ангелы, подготовка сделки и доля 20–50% по условиям поддержки.'],pilot:['Видео: пилоты и клиенты','Первые продажи и партнёры','Pilot Customers & Traction','Показываем, как стартап получает пилотных клиентов, тендерные возможности, партнёров, обратную связь и измеримые метрики traction.'],scale:['Видео: масштабирование','Рост до корпорации','Scale to Corporation','Ролик о переходе от MVP к большой компании: команда, процессы, экспорт, крупные клиенты, новые раунды, M&A или IPO.']};function esc(x){return String(x||'').replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}function setStage(key){var s=stages[key]||stages.idea;var root=document.getElementById('business-incubator');if(!root)return;root.querySelectorAll('.inc-tab').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-incubator-tab')===key)});var n=root.querySelector('#incStageNum'),t=root.querySelector('#incStageTitle'),d=root.querySelector('#incStageText'),l=root.querySelector('#incStageList');if(n)n.textContent=s[0];if(t)t.textContent=s[1];if(d)d.textContent=s[2];if(l)l.innerHTML=s[3].map(function(x){return '<li>'+esc(x)+'</li>'}).join('')}function videoHtml(v){return '<div class="inc-video-window"><div class="inc-video-frame"><div><div class="inc-play">▶</div><h3>'+esc(v[2])+'</h3><p>'+esc(v[3])+'</p></div></div><div class="inc-video-meta"><div><b>Формат</b><span>промо-видео, обучение или демонстрация продукта</span></div><div><b>Статус</b><span>окно открывается по нажатию на карточку-спутник</span></div><div><b>BaliXiO UI</b><span>единый стиль для планеты, орбит и спутников</span></div></div></div>'}function openVideo(key){var v=videos[key]||videos.route;if(typeof window.openDynamic==='function'){window.openDynamic(v[0],v[1],videoHtml(v))}else{alert(v[0]+'\n\n'+v[3])}}document.addEventListener('click',function(e){var tab=e.target.closest&&e.target.closest('#business-incubator [data-incubator-tab]');if(tab){e.preventDefault();setStage(tab.getAttribute('data-incubator-tab'));var stage=document.getElementById('incStageTitle');if(stage)stage.scrollIntoView({behavior:'smooth',block:'center'});return}var video=e.target.closest&&e.target.closest('#business-incubator [data-incubator-video]');if(video){e.preventDefault();openVideo(video.getAttribute('data-incubator-video'))}},true);document.addEventListener('keydown',function(e){if(e.key!=='Enter'&&e.key!==' ')return;var video=e.target.closest&&e.target.closest('#business-incubator [data-incubator-video]');if(video){e.preventDefault();openVideo(video.getAttribute('data-incubator-video'))}});})();


// Extracted from inline <script> #30
(function(){'use strict';var data={video:['Video Rooms','Сценарий: создаётся встреча, участники получают доступ по ролям, AI ведёт протокол, итоги превращаются в задачи и документы.'],tenders:['Тендеры 360','Сценарий: компания публикует лот, поставщики подают предложения, AI сравнивает условия, система фиксирует статусы и аудит.'],learning:['Академия BaliXiO','Сценарий: сотрудник получает учебный маршрут, проходит уроки и тесты, результат попадает в HR-карточку.'],incubator:['Бизнес-инкубатор','Сценарий: стартап упаковывает проект, проходит обучение, получает аналитику, готовит документы и выходит к партнёрам/инвесторам.']};document.addEventListener('click',function(e){var el=e.target.closest('[data-future-modal]');if(!el)return;e.preventDefault();var d=data[el.getAttribute('data-future-modal')]||['BaliXiO','Раздел находится в разработке.'];var html='<div class="route-card"><div class="route-num">01</div><div><strong>'+d[0]+'</strong><span>'+d[1]+'</span></div></div><div class="button-map"><button type="button" data-action="close">Закрыть</button></div>';if(typeof window.openDynamic==='function')window.openDynamic(d[0],'Предварительная логика раздела',html);else alert(d[0]+'\n\n'+d[1]);},true);})();


// Extracted from inline <script> #31
(function(){
  'use strict';
  var map={home:null,accounting:'ai-accounting',hr:'online-hr',mail:'sovereign-mail',messenger:'balixio-messenger',video:'video-rooms',tenders:'tenders-procurement',learning:'learning-development',incubator:'business-incubator'};
  var titles={home:'Главная',accounting:'AI-Бухгалтерия',hr:'AI-Кадры',mail:'Sovereign Mail',messenger:'Messenger Hub',video:'Video Rooms',tenders:'Тендеры 360',learning:'Академия BaliXiO',incubator:'Бизнес-инкубатор'};
  function all(s){return Array.prototype.slice.call(document.querySelectorAll(s));}
  function activeLink(key){all('[data-service-link]').forEach(function(el){el.classList.toggle('active',el.getAttribute('data-service-link')===key);});}
  function clear(){all('.balixio-service-source').forEach(function(el){el.classList.remove('balixio-service-active');});}
  function placeBackline(){
    var back=document.getElementById('serviceBackline');
    var page=document.querySelector('.page');
    if(back && page && back.parentNode!==page){
      var top=page.querySelector('.topbar');
      if(top && top.nextSibling) page.insertBefore(back, top.nextSibling); else page.appendChild(back);
    }
  }
  function show(key,push){
    if(!map.hasOwnProperty(key)) key='home';
    placeBackline();
    clear();
    if(key==='home'){
      document.body.classList.remove('balixio-service-mode');
      activeLink('home');
      if(push) history.pushState(null,'',location.pathname+location.search);
      window.scrollTo({top:0,behavior:'auto'});
      return;
    }
    var id=map[key], target=document.getElementById(id);
    if(!target){show('home',push);return;}
    document.body.classList.add('balixio-service-mode');
    target.classList.add('balixio-service-active');
    activeLink(key);
    var crumb=document.getElementById('serviceCrumb');
    if(crumb) crumb.textContent='Открыт раздел: '+(titles[key]||'BaliXiO');
    if(push) history.pushState(null,'','#'+key);
    window.scrollTo({top:0,behavior:'auto'});
  }
  window.BaliXiOShowServicePage=show;
  document.addEventListener('click',function(e){
    var link=e.target.closest('[data-service-link]');
    if(!link) return;
    var key=link.getAttribute('data-service-link');
    if(!map.hasOwnProperty(key)) return;
    e.preventDefault();
    e.stopPropagation();
    show(key,true);
  },true);
  window.addEventListener('popstate',function(){show((location.hash||'#home').replace('#','')||'home',false);});
  function init(){placeBackline();show(map.hasOwnProperty((location.hash||'').replace('#',''))?(location.hash||'').replace('#',''):'home',false);}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();


// Extracted from inline <script> #32
(function(){
  'use strict';
  var serviceIds=['ai-accounting','online-hr','sovereign-mail','balixio-messenger','video-rooms','tenders-procurement','learning-development','business-incubator'];
  function enforceCleanHome(){
    if(document.body.classList.contains('balixio-service-mode')) return;
    serviceIds.forEach(function(id){
      var el=document.getElementById(id);
      if(el) el.classList.remove('balixio-service-active');
    });
    var back=document.getElementById('serviceBackline');
    if(back) back.style.display='none';
  }
  document.addEventListener('DOMContentLoaded',enforceCleanHome);
  window.addEventListener('hashchange',function(){setTimeout(enforceCleanHome,0);});
  setTimeout(enforceCleanHome,0);
})();


// Extracted from inline <script> #33
(function(){
  const page = document.querySelector('.page');
  if(!page || document.getElementById('cosmicStarfieldFinal')) return;
  const field = document.createElement('div');
  field.className = 'cosmic-starfield-final';
  field.id = 'cosmicStarfieldFinal';
  page.prepend(field);
  const total = window.matchMedia('(max-width: 760px)').matches ? 58 : 120;
  for(let i=0;i<total;i++){
    const star = document.createElement('i');
    star.className = 'hero-star-final';
    const size = (Math.random()*2.8 + .8).toFixed(2) + 'px';
    star.style.setProperty('--x', (Math.random()*100).toFixed(2) + '%');
    star.style.setProperty('--y', (Math.random()*100).toFixed(2) + '%');
    star.style.setProperty('--s', size);
    star.style.setProperty('--o', (Math.random()*0.55 + 0.35).toFixed(2));
    star.style.setProperty('--scale', (Math.random()*1.5 + .55).toFixed(2));
    star.style.setProperty('--tx', ((Math.random()*2-1)*260).toFixed(0) + 'px');
    star.style.setProperty('--ty', ((Math.random()*2-1)*220).toFixed(0) + 'px');
    star.style.setProperty('--tz', ((Math.random()*2-1)*140).toFixed(0) + 'px');
    star.style.setProperty('--d', (Math.random()*13 + 8).toFixed(2) + 's');
    star.style.setProperty('--delay', (-Math.random()*16).toFixed(2) + 's');
    field.appendChild(star);
  }
})();


// Extracted from inline <script> #34
(function(){
  'use strict';
  function makeGlobalStars(){
    if(document.getElementById('globalCosmicStarfieldBaliXiO')) return;
    var field=document.createElement('div');
    field.className='global-cosmic-starfield-balixio';
    field.id='globalCosmicStarfieldBaliXiO';
    document.body.prepend(field);
    var total=window.matchMedia('(max-width:760px)').matches?90:180;
    for(var i=0;i<total;i++){
      var star=document.createElement('i');
      star.className='global-star-balixio';
      star.style.setProperty('--x',(Math.random()*100).toFixed(2)+'%');
      star.style.setProperty('--y',(Math.random()*100).toFixed(2)+'%');
      star.style.setProperty('--s',(Math.random()*3.1+.65).toFixed(2)+'px');
      star.style.setProperty('--o',(Math.random()*.62+.30).toFixed(2));
      star.style.setProperty('--scale',(Math.random()*1.6+.55).toFixed(2));
      star.style.setProperty('--tx',((Math.random()*2-1)*320).toFixed(0)+'px');
      star.style.setProperty('--ty',((Math.random()*2-1)*260).toFixed(0)+'px');
      star.style.setProperty('--d',(Math.random()*14+7).toFixed(2)+'s');
      star.style.setProperty('--delay',(-Math.random()*18).toFixed(2)+'s');
      field.appendChild(star);
    }
  }
  function makeEarth(){
    /* Disabled: the hero planet must stay clean, static, and without continents/clouds/ovals. */
    var planet=document.querySelector('.planet-zone .planet');
    if(!planet) return;
    planet.querySelectorAll('.planet-earth-map-balixio,.planet-earth-clouds-balixio,.planet-earth-shade-balixio').forEach(function(el){el.remove();});
  }
  function init(){makeGlobalStars();makeEarth();}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
  window.addEventListener('hashchange',function(){setTimeout(init,50);});
})();


// Extracted from inline <script> #35
(function(){
  function lockPlanet(){
    var planet=document.querySelector('.planet-zone .planet');
    if(!planet) return;
    planet.querySelectorAll('.planet-earth-map-balixio,.planet-earth-clouds-balixio,.planet-earth-shade-balixio').forEach(function(el){el.remove();});
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',lockPlanet); else lockPlanet();
  window.addEventListener('load',lockPlanet);
  window.addEventListener('hashchange',function(){setTimeout(lockPlanet,60);});
})();


// Extracted from inline <script> #36
document.addEventListener('DOMContentLoaded',()=>{
  const planetZone=document.querySelector('.planet-zone');
  const planet=document.querySelector('.planet');
  if(planetZone && planet && !document.querySelector('.balixio-core-label')){
    const label=document.createElement('div');
    label.className='balixio-core-label';
    label.innerHTML=`
      <span class="balixio-main">BaliXiO CORE</span><span class="balixio-sub">Business Logistics & Infrastructure eXosystem</span>
    `;
    planetZone.appendChild(label);
  }
});


// Extracted from inline <script> #37
(function(){
  var data={
    main:{title:'Видео: BaliXiO Video Rooms',subtitle:'Плейсхолдер под главный промо-ролик Video Rooms',headline:'Sovereign Video Rooms inside BaliXiO',text:'Здесь будет видео о том, как организация создаёт собственные защищённые видеокомнаты: встречи, документы, AI-протоколы, задачи, записи и роли работают внутри единой платформы BaliXiO.',meta:[['Фокус','замена внешних видеосервисов корпоративным контуром'],['Ценность','встреча сразу превращается в управляемый процесс'],['Интеграции','CRM, HR, документы, задачи, почта, Messenger']]},
    security:{title:'Видео: защита, роли и аудит',subtitle:'Плейсхолдер под ролик о безопасности видеокомнат',headline:'Role-based secure meeting perimeter',text:'Ролик показывает доступ по ролям, закрытые комнаты, журнал действий, контроль записей, защищённые материалы и правила участия для сотрудников, клиентов, инвесторов и внешних гостей.',meta:[['Роли','владелец, модератор, сотрудник, гость, аудитор'],['Контроль','журнал входов, доступ к записи, история решений'],['Для кого','enterprise, госструктуры, крупные организации']]},
    ai:{title:'Видео: AI-протокол встречи',subtitle:'Плейсхолдер под демонстрацию AI-конспекта',headline:'AI Meeting Protocol & Action Engine',text:'AI фиксирует повестку, решения, поручения, сроки, ответственных, спорные вопросы и риски. После встречи он может создать задачи, письмо, документ, карточку сделки или HR-заметку.',meta:[['AI','резюме, задачи, решения, риски'],['После встречи','автоматическое продолжение процесса'],['Экономия','меньше ручных протоколов и потерянных договорённостей']]},
    board:{title:'Видео: Board Room',subtitle:'Закрытые встречи руководства и советов директоров',headline:'Executive room for decisions',text:'Закрытая комната для стратегических совещаний: повестка, документы, права доступа, протокол, голосования, фиксация решений и контроль исполнения.',meta:[['Сценарий','совет директоров, комитеты, руководители'],['Материалы','повестка, документы, запись, протокол'],['Результат','решения сразу переходят в задачи']]},
    hr:{title:'Видео: HR Interview Room',subtitle:'Собеседования внутри AI-HR процесса',headline:'Candidate interview connected to HR',text:'Кандидат заходит в комнату из вакансии. HR видит резюме, тесты, видеоответы и заметки. AI делает краткое резюме интервью и помогает сравнивать кандидатов.',meta:[['Сценарий','собеседования и ассессмент'],['Связь','вакансия, резюме, тесты, HR-карточка'],['Итог','оценка, заметки, следующий этап']]},
    client:{title:'Видео: Client Room',subtitle:'Переговоры, продажи и сопровождение клиентов',headline:'Client meetings connected to CRM',text:'Менеджер запускает встречу из карточки клиента или сделки, показывает документы, фиксирует условия, получает AI-итоги и автоматически создаёт следующие шаги.',meta:[['Сценарий','продажи, консультации, демонстрации'],['Связь','CRM, договоры, задачи, почта'],['Итог','коммерческие условия и follow-up']]},
    training:{title:'Видео: Academy Live',subtitle:'Обучение, вебинары и внутренние уроки',headline:'Training rooms with materials and progress',text:'Video Rooms поддерживает обучение сотрудников и пользователей: уроки, вебинары, записи, материалы, тесты, посещаемость и связь с Академией BaliXiO.',meta:[['Сценарий','онбординг, обучение, вебинары'],['Материалы','записи, файлы, тесты, прогресс'],['Итог','контроль развития сотрудников']]},
    support:{title:'Видео: Support Room',subtitle:'Видеообслуживание клиентов и консультации',headline:'Support by video with full context',text:'Поддержка может открыть видео-консультацию из заявки: видеть историю обращения, документы клиента, статус решения и зафиксировать итог разговора.',meta:[['Сценарий','поддержка, консультации, сервис'],['Связь','заявки, документы, история клиента'],['Итог','понятный статус и дальнейшие действия']]}
  };
  function esc(s){return String(s||'').replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function openVrVideo(key){
    var item=data[key]||data.main;
    var meta=(item.meta||[]).map(function(m){return '<div><b>'+esc(m[0])+'</b><span>'+esc(m[1])+'</span></div>';}).join('');
    if(typeof openDynamic==='function'){
      openDynamic(item.title,item.subtitle,'<div class="video-modal-pro vr-video-window"><div class="video-frame-pro" data-video-slot="vr-'+esc(key)+'"><div class="video-placeholder-pro"><div class="play-orb-pro">▶</div><h3>'+esc(item.headline)+'</h3><p>'+esc(item.text)+'</p></div></div><div class="video-meta-pro">'+meta+'</div><div class="video-note-pro">Это полноценное видео-окно по логике других разделов. Когда готов настоящий ролик, его можно вставить в этот слот без изменения кнопок.</div></div>');
    }else{alert(item.title+'\n\n'+item.text);}
  }
  document.addEventListener('click',function(e){
    var btn=e.target.closest && e.target.closest('[data-vr-video]');
    if(!btn) return;
    e.preventDefault(); e.stopPropagation();
    openVrVideo(btn.getAttribute('data-vr-video'));
  },true);
})();


// Extracted from inline <script> #38
(function(){
  if(window.__academyBaliXiOVideoReady) return;
  window.__academyBaliXiOVideoReady=true;
  var videos={
    main:{title:'Видео: Академия BaliXiO',subtitle:'Корпоративный глобальная образовательная экосистема внутри экосистемы',headline:'BaliXiO Academy — Глобальный цифровой глобальная образовательная экосистема нового поколения as a training operating system',text:'Академия BaliXiO объединяет видеоуроки, тесты, AI-проверку, сертификаты, HR-профиль и допуски к рабочим процессам внутри одной защищённой платформы.',meta:[['Формат','видео, тесты, задания, практика'],['Связь','HR, тендеры, роли, регламенты'],['Итог','сертификат, диплом, допуск']]},
    company:{title:'Видео: Корпоративные курсы',subtitle:'Индивидуальное обучение под компанию',headline:'Training built around company processes',text:'Каждая организация получает собственный учебный маршрут: онбординг, регламенты, отделы, роли, внутренние стандарты и проверка знаний сотрудников.',meta:[['Для кого','частные компании и корпорации'],['Контент','индивидуальные курсы'],['Результат','рост квалификации']]},
    state:{title:'Видео: Академия для госсектора',subtitle:'Обучение чиновников и государственных организаций',headline:'Government training with digital discipline',text:'Госсектор получает единое обучение по регламентам, закупкам, цифровым процессам, ответственности и контролю прохождения.',meta:[['Участники','министерства, ведомства, регионы'],['Контроль','аттестация и отчётность'],['Эффект','единый стандарт']]},
    tenders:{title:'Видео: Допуск к тендерам',subtitle:'Обязательное обучение перед участием',headline:'No training — no tender access',text:'Поставщики, подрядчики и заказчики проходят обучение перед участием в закупках, чтобы понимать правила, документы, ответственность и этапы сделки.',meta:[['Сценарий','тендеры и госзакупки'],['Проверка','тесты и подтверждение'],['Итог','допуск к участию']]},
    ai:{title:'Видео: AI-проверка знаний',subtitle:'Тесты, антисписывание и аналитика прогресса',headline:'AI checks knowledge quality and progress',text:'AI анализирует ответы, прогресс, оригинальность, слабые места и формирует персональные рекомендации для сотрудника и руководителя.',meta:[['AI','проверка и аналитика'],['Риски','списывание и формальность'],['Польза','персональный маршрут']]},
    certificates:{title:'Видео: Сертификаты и дипломы',subtitle:'Подтверждение навыков внутри BaliXiO',headline:'Digital certificates connected to work access',text:'После обучения пользователь получает сертификат или диплом, который сохраняется в профиле и может влиять на допуск, карьеру, тендеры и доверие.',meta:[['Документ','сертификат / диплом'],['Профиль','история обучения'],['Статус','подтверждённый навык']]},
    users:{title:'Видео: Курсы для пользователей',subtitle:'Открытое обучение и развитие навыков',headline:'External learners become BaliXiO ambassadors',text:'Пользователи из компаний, ещё не подключённых к BaliXiO, могут проходить полезные курсы, развивать навыки и рекомендовать платформу руководителям.',meta:[['Аудитория','специалисты и пользователи'],['Ценность','новые навыки'],['Рост','рекомендации компаниям']]},
    architecture:{title:'Видео: Архитектура Академии',subtitle:'Как обучение связано с HR, тендерами и AI',headline:'Academy connected with the whole BaliXiO ecosystem',text:'Архитектура Академии связывает уроки, тесты, роли, HR, тендерные допуски, документы, видео-комнаты, AI-проверку и цифровой след.',meta:[['Ядро','курсы + AI + профиль'],['Интеграции','HR, тендеры, Video Rooms'],['Масштаб','компании, государство, пользователи']]}
  };
  function esc(s){return String(s||'').replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function openAcademyVideo(key){
    var item=videos[key]||videos.main;
    var meta=(item.meta||[]).map(function(m){return '<div class="video-meta-item-pro"><b>'+esc(m[0])+'</b><span>'+esc(m[1])+'</span></div>';}).join('');
    var html='<div class="video-modal-pro academy-video-window"><div class="video-frame-pro" data-video-slot="academy-'+esc(key)+'"><div class="video-placeholder-pro"><div class="play-orb-pro">▶</div><h3>'+esc(item.headline)+'</h3><p>'+esc(item.text)+'</p></div></div><div class="video-meta-pro">'+meta+'</div><div class="video-note-pro">Это готовое видео-окно по логике раздела «Тендеры 360»: сейчас стоит презентационный placeholder, позже сюда можно вставить настоящий ролик без изменения кнопок.</div></div>';
    if(typeof openDynamic==='function'){openDynamic(item.title,item.subtitle,html);}else{alert(item.title+'\n\n'+item.text);}
  }
  document.addEventListener('click',function(e){
    var btn=e.target.closest&&e.target.closest('#learning-development [data-academy-video]');
    if(!btn) return;
    e.preventDefault();
    openAcademyVideo(btn.getAttribute('data-academy-video'));
  });
})();


// Extracted from inline <script> #39
(function(){
  'use strict';
  function esc(v){return String(v||'').replace(/[&<>'"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]});}
  function textFrom(el,sel,fb){var n=el.querySelector(sel);return (n&&n.textContent.trim())||fb||'BaliXiO';}
  function buildHtml(title,desc){return '<div class="balixio-unified-video-modal"><div class="balixio-unified-video-frame"><div><div class="balixio-unified-play">▶</div><h3>'+esc(title)+'</h3><p>'+esc(desc||'Видео-окно раздела BaliXiO: сюда можно подключить презентационный ролик, демонстрацию интерфейса или обучающий материал без изменения карточек-спутников. Сейчас это рабочий интерактивный placeholder. Заголовок и описание берутся из выбранной карточки. Все спутники открывают такое окно одинаково и стабильно.')+'</p></div></div><div class="balixio-unified-video-meta"><div><b>Формат</b><span>промо-видео, обучение или демонстрация продукта</span></div><div><b>Статус</b><span>окно открывается по нажатию на карточку-спутник</span></div><div><b>BaliXiO UI</b><span>единый стиль для всех планет, орбит и спутников</span></div></div></div>';}
  function fallback(title,desc){var modal=document.getElementById('balixioUnifiedVideoFallback');if(!modal){modal=document.createElement('div');modal.id='balixioUnifiedVideoFallback';modal.className='balixio-unified-fallback';modal.innerHTML='<div class="balixio-unified-fallback-box"><button class="balixio-unified-fallback-close" type="button">Закрыть</button><div class="balixio-unified-fallback-content"></div></div>';document.body.appendChild(modal);modal.addEventListener('click',function(e){if(e.target===modal||e.target.classList.contains('balixio-unified-fallback-close'))modal.classList.remove('show')});document.addEventListener('keydown',function(e){if(e.key==='Escape')modal.classList.remove('show')});}modal.querySelector('.balixio-unified-fallback-content').innerHTML=buildHtml(title,desc);modal.classList.add('show');}
  function openVideo(el){var title=textFrom(el,'b,strong,h3',el.getAttribute('aria-label')||'BaliXiO video');var desc=textFrom(el,'span,small,p','Интерактивная видео-презентация выбранного спутника в едином стиле BaliXiO.');var html=buildHtml(title,desc);if(typeof window.openDynamic==='function'){window.openDynamic(title,'Видео-презентация BaliXiO',html);}else{fallback(title,desc);} }
  function enhance(){var selectors=['.planet-card','.u-node','.t360-node','.academy-node-premium','.vr-web-node','.chat-node','.mail-node','.hr-network-node','.future-node','.mechanical-core-node'];document.querySelectorAll(selectors.join(',')).forEach(function(el){el.setAttribute('role',el.tagName==='BUTTON'?'button':'button');el.setAttribute('tabindex',el.getAttribute('tabindex')||'0');el.setAttribute('data-balixio-unified-satellite','1');});}
  document.addEventListener('click',function(e){var el=e.target.closest&&e.target.closest('[data-balixio-unified-satellite="1"]');if(!el)return;e.preventDefault();e.stopPropagation();openVideo(el);},true);
  document.addEventListener('keydown',function(e){if(e.key!=='Enter'&&e.key!==' ')return;var el=e.target.closest&&e.target.closest('[data-balixio-unified-satellite="1"]');if(!el)return;e.preventDefault();openVideo(el);},true);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',enhance);else enhance();
  window.addEventListener('load',enhance);window.addEventListener('hashchange',function(){setTimeout(enhance,80)});
})();
