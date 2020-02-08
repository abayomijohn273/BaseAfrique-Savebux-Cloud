$(document).ready(function(){

  // jQuery methods go here...
  const preloader = document.querySelector('.preloader');

  const fadeEffect = setInterval(() => {
    preloader.classList.add("loaded")
  }, 200);

  // Scroll to up
  let btn = $('#toTopButton');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
  

  // Form submission
  let form = document.getElementById("regForm")
  form.addEventListener("submit", function(e){
    e.preventDefault()
    let name = form.name.value
    let email = form.email.value
    let tel = form.tel.value
    
    let data = {
      name,
      email,
      tel
    }
    console.log(data)
    let btnSubmit = document.querySelector(".submitBtn");
    if(name!=="" && email !== "" && tel !==""){
      btnSubmit.innerHTML = "SUBMIT SUCCESSFULLY";
      btnSubmit.style.backgroundColor = "#32C2BA";
      
      // fetch('', {
      //   method: 'POST',
      //   body:JSON.stringify(data)
      // })
      // .then((res) => res.json())
      // .then((data) =>  {
      //   document.querySelector(".blue-btn").textContent = "SUBMIT SUCCESSFULLY";
      //   console.log(data);
      // })
      // .catch((err)=>console.log(err))
      name = ""
      email=""
      tel=""
      
    } else {
      alert("failed")
      btnSubmit.textContent = "SUBMIT FAILED";
      btnSubmit.style.backgroundColor = "rgb(99, 20, 6)"; 
      
    }
  })
    
  
});






const handleSubmit = (form) => {
  form.addEventListener("click", function(e){
    e.preventDefault()
    let name = form.name.value
    let email = form.email.value
    let tel = form.tel.value
    
    let data = {
      name,
      email,
      tel
    }
    console.log(data)
    let btnSubmit = document.querySelector("button.submitBtn");
    let display = document.querySelector(".hidden")
    if(name!=="" && email !== "" && tel !==""){
      btnSubmit.innerText = "SUBMIT SUCCESSFULLY";
      // alert(btnSubmit.innerText)
      btnSubmit.style.backgroundColor = "#32C2BA";
      display.innerHTML = "Submitted Successfully!"
      display.classList.add("success")
      display.classList.remove("fail")
      // fetch('', {
      //   method: 'POST',
      //   body:JSON.stringify(data)
      // })
      // .then((res) => res.json())
      // .then((data) =>  {
      //   document.querySelector(".blue-btn").textContent = "SUBMIT SUCCESSFULLY";
      //   console.log(data);
      // })
      // .catch((err)=>console.log(err))
      name = ""
      email=""
      tel=""
      
    } else {
      // alert("failed")
      btnSubmit.textContent = "SUBMIT FAILED";
      btnSubmit.style.backgroundColor = "rgb(99, 20, 6)"; 
      display.innerHTML = "Unsuccessful Submission!"
      display.classList.add("fail")
      display.classList.remove("success")
      
    }
    
  })
    
  }




