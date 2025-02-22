let $ = document;

let getAllInput = $.querySelectorAll('input')
let checkBoxFlag = true
let getError = $.querySelectorAll('.error-element')
let getCheckBox = $.querySelectorAll('.query-checkbox input')
let getTextArea = $.querySelector('textarea')
let getBtn = $.querySelector('button')
let ai = []

getAllInput.forEach((item, index) => {
    item.addEventListener('blur', (event) => {
        let target = event.target
        if(!item.value){
            getError[index].classList.add('show')
            target.style.border = '1px solid var(--red)'
        }else{
            getError[index].classList.remove('show')
            target.style.border = '1px solid var(--grey-500-medium)'
        }
    })
})

getBtn.addEventListener('click', function(event) {
  event.preventDefault()
  const getBody = $.body
  const notif = $.createElement('div')
  notif.classList.add('notif')
  notif.innerHTML = `
    <h5>Message Sent!</h5>
    <p>Thanks for completing the form we'll be in touch soon!</p>`



    if(!getAllInput[0].value ||
       !getAllInput[1].value ||
       !getAllInput[2].value ||
       !getTextArea.value){
      getError.forEach(error => {
        error.classList.add('show')
        getAllInput.forEach(input => {
          input.style.border = "1px solid var(--red)";
        })
        getTextArea.style.border = "1px solid var(--red)";
      })
    }else{
      getError.forEach(error => error.classList.remove('show'))
      if(!getBody.querySelector('.notif')){
        getBody.insertAdjacentElement('afterbegin', notif)  
      
        setTimeout(() => {  // Small delay to ensure element is in DOM
          notif.style.opacity = 1;
       }, 10);
        }
      
        setTimeout(() => {
          // Fade Out (using transition)
          notif.classList.add('hide-notif');
          setTimeout(() => {
              notif.remove(); // Remove after fade-out is complete
          }, 100); // Match fade-out duration
      }, 3500);

      getAllInput.forEach(input => {
        input.value = ''
        input.checked = false
        input.style.border = "1px solid var(--grey-500-medium)";
      })
      getTextArea.style.border = "1px solid var(--grey-500-medium)";
      getTextArea.value = ''

      getCheckBox[0].parentElement.style.backgroundColor = 'var(--white)'
      getCheckBox[1].parentElement.style.backgroundColor = 'var(--white)'
    }
    
 

      






})


function toggleCheckbox(checkbox) {
    
    if (checkbox === getCheckBox[0]) {
      getCheckBox[1].checked = false;
      getCheckBox[0].parentElement.style.backgroundColor = 'var(--green-200-lighter)'
      
      getCheckBox[1].parentElement.style.backgroundColor = 'white'
    } else {
      getCheckBox[0].checked = false;
      getCheckBox[1].parentElement.style.backgroundColor = 'var(--green-200-lighter)'
      
      getCheckBox[0].parentElement.style.backgroundColor = 'white'
    }

    if(!checkbox.checked){
      getCheckBox[0].parentElement.style.backgroundColor = 'white'
      getCheckBox[1].parentElement.style.backgroundColor = 'white'
    }

  }

getCheckBox[0].addEventListener('change', function() {
  toggleCheckbox(this);
});

getCheckBox[1].addEventListener('change', function() {
  toggleCheckbox(this);
  
});

getTextArea.addEventListener('blur', function(event) {
  let target = event.target
  if(!target.value){
    target.nextElementSibling.classList.add('show')
    target.style.border = '1px solid var(--red)'
  }else{
    target.nextElementSibling.classList.remove('show')
    target.style.border = '1px solid var(--grey-500-medium)'
  }
})

