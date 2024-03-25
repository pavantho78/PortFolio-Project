const scriptURL = 'https://script.google.com/macros/s/AKfycbzZJM9oJvFbGj3z0TI1A8J8lIv5X-Y8d5069sERPwF8ESIW1qvuxQaA9Zp632PvDJoMCA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
      	msg.innerHTML="Message sent succesfully"
      	setTimeout(function(){
      		msg.innerHTML=""
      	},2000)

      	form.reset()

      })
      .catch(error => console.error('Error!', error.message))
  })