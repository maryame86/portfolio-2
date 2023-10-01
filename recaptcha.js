
window.onload = function() { 
    const el = document.getElementById('g-recaptcha-response'); 
    if (el) { 
      el.setAttribute('required', 'required'); 
    } 
  }

  // look at documentation for this on formspree