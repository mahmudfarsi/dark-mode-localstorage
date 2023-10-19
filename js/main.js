//     => varisables
const $ = document;
const btn = $.querySelector('#btnDark');
const header = $.querySelector('header');
const listItem = $.querySelectorAll('li');
let flage = true;


//    => chang icon
const changIconMoon = ()=>{
  let btnChild = btn.children[0];
  btnChild.className = 'fa-solid fa-moon size';
};
const changIconSun = ()=>{
  let btnChild = btn.children[0];
  btnChild.className = 'fa-regular fa-sun size';
};
//    => list class
const addClassList = ()=>{
  listItem.forEach(element=>{
    element.classList.add(localStorage.getItem('mode'));
  })
};
const removeClassList = ()=>{
  listItem.forEach(element=>{
    element.classList.remove(localStorage.getItem('mode'));
  })
};
//    =>    header class
const addClass = ()=>{
  header.classList.add(localStorage.getItem('mode'));
};
const removerClass = ()=>{
  header.classList.remove('dark');
};

document.body.classList.add(localStorage.getItem('mode') || 'light');
header.classList.add(localStorage.getItem('mode') || 'light');
listItem.forEach(item=>{
  item.classList.add(localStorage.getItem('mode') || 'light')
})
//   =>    event click
btn.addEventListener('click',()=>{
  if(flage){
    document.body.classList.add('dark');
    header.classList.add('dark');
    listItem.forEach(item=>{
      item.classList.add('dark');
    });
    localStorage.setItem('mode','dark');
    flage = false;
    addClass();
    addClassList();
    changIconMoon();
  }
  else{
    document.body.classList.remove('dark');
    header.classList.remove('dark');
    listItem.forEach(item=>{
      item.classList.remove('dark');
    });
    localStorage.setItem('mode','light');
    flage = true;
    removerClass();
    removeClassList();
    changIconSun();
  }
});

//      window-onload
window.addEventListener('load',()=>{
  localStorage.getItem('mode');
});
