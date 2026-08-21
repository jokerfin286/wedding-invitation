export const wedding = {
  couple:{groom:'Александр',bride:'Мария'},
  weddingDate:'2027-06-12T16:00:00',
  dateText:'12 июня 2027',
  hero:{image:'/images/hero.svg',label:'WEDDING DAY',subLabel:'Приглашение на наш особенный день'},
  intro:{greeting:'Дорогие',title:'РОДНЫЕ И БЛИЗКИЕ!',text:'Мы долго мечтали об этом дне и хотим разделить его с самыми дорогими людьми. Будем счастливы видеть вас рядом, когда начнётся наша новая глава.'},
  venue:{title:'Место проведения',name:'Усадьба «Лесная»',address:'Минская область, живописный уголок у леса',image:'/images/venue.svg',mapUrl:'https://maps.google.com/'},
  music:{enabled:true,src:'/music/wedding.mp3',title:'Our song'},
  timeline:[
    {time:'15:30',title:'Сбор гостей',description:'Встречаемся, знакомимся и настраиваемся на праздник.'},
    {time:'16:00',title:'Церемония',description:'Главный момент нашего дня.'},
    {time:'17:00',title:'Фотографии',description:'Прогулка и кадры, которые останутся с нами навсегда.'},
    {time:'18:00',title:'Праздничный ужин',description:'Тёплый вечер, музыка, тосты и много любви.'}
  ],
  details:[
    {title:'Дресс-код',text:'Будем рады лёгким праздничным образам в природных, спокойных оттенках. Главное — чтобы вам было комфортно.'},
    {title:'Подарки',text:'Для нас самый ценный подарок — ваше присутствие. Если захотите порадовать нас, будем благодарны за конверт.'},
    {title:'Цветы',text:'Пожалуйста, не переживайте о букетах — мы будем рады вашей улыбке гораздо больше.'},
    {title:'Трансфер',text:'Если вам понадобится трансфер, отметьте это в анкете. Мы заранее свяжемся и всё организуем.'}
  ],
  gallery:['/images/couple-1.svg','/images/couple-2.svg','/images/couple-3.svg'],
  rsvp:{enabled:true,deadline:'до 20 мая 2027',fields:{companions:true,transfer:true,alcohol:true,meal:true,comment:true},alcoholOptions:['Шампанское','Белое вино','Красное вино','Виски','Коньяк','Безалкогольные напитки'],mealOptions:['Курица','Мясо','Рыба','Вегетарианское']},
  contactInformation:'По всем вопросам мы всегда на связи.',
  theme:{background:'#f4f0e9',foreground:'#292723',accent:'#8b7561',muted:'#756f68',border:'rgba(41,39,35,.16)',headingFont:'Georgia, "Times New Roman", serif',bodyFont:'Inter, Arial, sans-serif',radius:'22px',motion:'700ms'}
};
