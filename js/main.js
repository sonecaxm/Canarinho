  const slides    = document.querySelectorAll('.slide');
  const dots      = document.querySelectorAll('.ind-dot');
  const slideNum  = document.getElementById('slideNum');
  const prevBtn   = document.getElementById('prev');
  const nextBtn   = document.getElementById('next');
  const total     = slides.length;
  const nav = document.querySelector('nav'); 
  
  let active      = 0;
  let timer; 

  function goTo(index) {
    slides[active].classList.remove('active');
    dots[active].classList.remove('active');
    active = (index + total) % total;
    
    slides[active].classList.add('active');
    dots[active].classList.add('active');
    
    slideNum.textContent = String(active + 1).padStart(2, '0');
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(active + 1), 4000);
  }

  /* ICON MENU */
  function togglesidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
  }

  function closesidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    sidebar.classList.remove( 'active');
    overlay.classList.remove( 'active');
  }




  prevBtn.addEventListener('click', () => { goTo(active - 1); startTimer(); });
  nextBtn.addEventListener('click', () => { goTo(active + 1); startTimer(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); startTimer(); }));
  
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

  startTimer();


  


  