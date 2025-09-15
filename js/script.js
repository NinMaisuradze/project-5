document.getElementById('brandForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form fields
    const brandName = document.getElementById('brandName').value.trim();
    const brandDescription = document.getElementById('brandDescription').value.trim();
  
    // Error handling
    let formIsValid = true;
  
    // Check if brand name is empty
    if (brandName === '') {
      document.getElementById('brandNameError').classList.remove('hidden');
      formIsValid = false;
    } else {
      document.getElementById('brandNameError').classList.add('hidden');
    }
  
    // Check if brand description is empty
    if (brandDescription === '') {
      document.getElementById('brandDescriptionError').classList.remove('hidden');
      formIsValid = false;
    } else {
      document.getElementById('brandDescriptionError').classList.add('hidden');
    }
  
    // If form is valid, alert brand details
    if (formIsValid) {
      alert(`ბრენდის შექმნა წარმატებით მოხდა!\nსახელი: ${brandName}\nაღწერა: ${brandDescription}`);
    }
  });
  