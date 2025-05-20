
var counter1 = document.getElementById('counter1');
var counter2 = document.getElementById('counter2');
var counter3 = document.getElementById('counter3');

function increment(i, max, element){
  if(i > max) return;
  setTimeout(function(){
    element.innerText = Math.round(i);
    increment(i+(max/100), max, element);
  }, 10);
}

// Função que será chamada quando o elemento estiver visível
function startCounting(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      if (target === counter1) {
        increment(0, 10, counter1);
      } else if (target === counter2) {
        increment(0, 2000, counter2);
      } else if (target === counter3) {
        increment(0, 300, counter3);
      }
      observer.unobserve(target); // Para rodar a animação apenas uma vez
    }
  });
}

// Configura o IntersectionObserver
let observer = new IntersectionObserver(startCounting, {
  threshold: 0.5 // Quando 50% do elemento estiver visível
});

// Observa cada contador
observer.observe(counter1);
observer.observe(counter2);
observer.observe(counter3);