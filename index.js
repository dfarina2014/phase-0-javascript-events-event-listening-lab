const input = document.getElementById('button');
input.addEventListener('click', function() {
  alert('I was clicked!');
});

function addingEventListener() {
  input.addEventListener('click', function(event) {
    return "clicked"
  });
}