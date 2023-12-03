$(document).ready(function(){
 



   // menu click 
   $('#nav-icon').click(function(){
      $(this).toggleClass('open');
      $('.menu_area').slideToggle();
   });
 


   // flag show 
   $('.click_flag_option').click(function(){
      $('.select_flag_options').toggleClass('show');
   });
 


   // dropdown menu click 
   $('.dropdown-toggle').click(function(){
      $('.header-nav .dropdown-menu').toggleClass('active');
   });

   


     // Passs
  let passwordInput = document.getElementById('txtPassword'),
  toggle = document.getElementById('btnToggle'),
  icon = document.getElementById('eyeIcon');

function togglePassword() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    icon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = 'password';
    icon.classList.remove("fa-eye-slash");

  }
}
function checkInput() {
  console.log(passwordInput.value);
}

toggle.addEventListener('click', togglePassword, false);
passwordInput.addEventListener('keyup', checkInput, false);





 
});


// Add a class to all input elements that should trigger the behavior
$('.al_show_input').on('focus', alShowValidationInfo);
$('.al_show_input').on('blur', alHideValidationInfo);

function alShowValidationInfo(e) {
  const getWrapper = $(e.currentTarget).attr('data-show-id');
  $('#' + getWrapper).show();
  console.log(e);
}

function alHideValidationInfo(e) {
  const getWrapper = $(e.currentTarget).attr('data-show-id');
  $('#' + getWrapper).hide();
  console.log(e);
}



//  Flag change 
// JavaScript for the custom select functionality
const select = document.querySelector('.custom-select2');
const selectImg = select.querySelector('#selectedImage');
const selectOptions = select.querySelector('.select-options');
const optionsList = Array.from(selectOptions.querySelectorAll('li'));

// Toggle dropdown visibility
selectImg.addEventListener('click', () => {
  selectOptions.style.display = selectOptions.style.display === 'none' ? 'block' : 'none';
});

// Handle option selection
optionsList.forEach(option => {
  option.addEventListener('click', () => {
    const imgSrc = option.querySelector('img').src;
    selectImg.src = imgSrc;
    selectOptions.style.display = 'none';
    const value = option.getAttribute('data-value');
    document.getElementById('mySelect').value = value; // Update the original select element's value
  });
});

// Close the dropdown if the user clicks outside of it
document.addEventListener('click', (e) => {
  if (!select.contains(e.target)) {
    selectOptions.style.display = 'none';
  }
});





