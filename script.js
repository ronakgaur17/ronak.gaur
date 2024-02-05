if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    document.querySelector('#dark-mode-toggle').checked = true;
}

document.querySelector('#dark-mode-toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');

    // Save the current state of 'dark-mode' in localStorage
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));

});
document.getElementById('myList').addEventListener('mouseover', function(event) {
    if(event.target.tagName == 'LI') {
      event.target.style.backgroundColor = '#ffbbbb';
    }
  });

  document.getElementById('myList').addEventListener('mouseout', function(event) {
    if(event.target.tagName == 'LI') {
      event.target.style.backgroundColor = '';
    }
  });
  
  