var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

let hamburgers = document.querySelectorAll(".hamburger");
let burgerMenu = document.querySelector('.burger');
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener("click", function() {
      this.classList.toggle("is-active");

      if(burgerMenu.classList.contains('burger')) {
        burgerMenu.classList.add('isLeft');
        burgerMenu.classList.remove('burger')
        return
    }    
        burgerMenu.classList.add('burger');
        burgerMenu.classList.remove('isLeft');
    }, false);
  });
}

