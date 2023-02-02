const btn=document.querySelector('.pressForStart');
const divNumaratoare=document.querySelector('.d-none');
const spanNumaratoare=document.querySelector('.counting-span');
const formGol=document.querySelector('form');
const submitButton=document.querySelector('.submit');
const raspunsuriCorecte=['B', 'A', 'A', 'B', 'B', 'A', 'A'];
const divScorFinal=document.querySelector('.final-result');
const spanDinScorFinal=document.querySelector('.score-final');
const modal=document.querySelector('.modal');
const modalClose=document.querySelector('.close-button');
const overlay=document.querySelector('#overlay');
const resetBtn=document.querySelector('.reset');
const elements=document.querySelectorAll('input[type=radio]');

btn.addEventListener('click', () => {
  divNumaratoare.classList.remove("d-none");
  spanNumaratoare.textContent=3;
  let i=2;
  const timer = setInterval(() => {
    spanNumaratoare.textContent=`${i}`;
    i--;
    if(i<0) {
      clearInterval(timer);
      divNumaratoare.classList.add("d-none");
       formGol.classList.remove("d-none");
    }
  }, 1000);

  btn.classList.add('d-none');

})

formGol.addEventListener("submit", e=> {
  e.preventDefault();
  let score=0;
  let raspunsuri=0;
  const raspunsuriAlese=[formGol.q1.value, formGol.q2.value, formGol.q3.value, formGol.q4.value, formGol.q5.value, formGol.q6.value, formGol.q7.value];


  raspunsuriAlese.forEach((raspuns, index) => {
    if(raspuns===raspunsuriCorecte[index]) {
      score+=1;
    }
    if(raspuns)
      raspunsuri+=1;
  })

  if(raspunsuri<raspunsuriCorecte.length)
    alert("Nu ai raspuns la toate");

  spanDinScorFinal.textContent=`${score}`;
  modal.classList.remove('d-none');
  overlay.classList.remove('d-none');
  overlay.classList.add('active');
  
  modalClose.addEventListener('click', () => {
    modal.classList.add("d-none");
    overlay.classList.add("d-none");
  })
  overlay.addEventListener('click', () => {
    modal.classList.add("d-none");
    overlay.classList.add("d-none");
  })
  
  resetBtn.addEventListener('click', () => {
    elements.forEach((element) =>{
      element.checked=false;
      modal.classList.add("d-none");
      overlay.classList.add("d-none");
    } ) 
  })

  console.log(raspunsuri);

})