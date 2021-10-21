const h2 = document.getElementsByTagName('h2')[0];
  window.addEventListener('scroll', ()=>{
      const scroll = window.scrollY;
      if (scroll >= 200){
          h2.removeClass("hidden");
      }else{
          h2.addClass("hidden");
      }
  });

  export default h2;