var ToShowul = document.querySelector('header .links ul');

// Show the ul when .links is clicked
document.querySelector('header .links').addEventListener('click', function(event) {
    ToShowul.style.display = 'block';
  event.stopPropagation(); // Prevent the click from bubbling up to the document
});

// Hide the ul when anywhere else is clicked
document.addEventListener('click', function() {
    ToShowul.style.display = 'none';
});