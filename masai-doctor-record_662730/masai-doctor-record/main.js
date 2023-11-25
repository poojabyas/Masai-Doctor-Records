document.addEventListener('DOMContentLoaded', function () {
    function submitForm() {
      // Get values from the form
      var name = document.getElementById('name').value;
      var doctorID = document.getElementById('doctor_id').value;
      var specialization = document.getElementById('specialization').value;
      var experience = document.getElementById('experience').value;
      var email = document.getElementById('email').value;
      var mobile = document.getElementById('mobile').value;

      var role = '';
      if (experience > 5) {
        role = 'senior';
      } else if (experience >= 2 && experience <= 5) {
        role = 'junior';
      } else {
        role = 'trainee';
      }

     
      var table = document.querySelector("table tbody");
      var newRow = table.insertRow(table.rows.length);
      var cells = [
        newRow.insertCell(0),
        newRow.insertCell(1),
        newRow.insertCell(2),
        newRow.insertCell(3),
        newRow.insertCell(4),
        newRow.insertCell(5),
        newRow.insertCell(6),
        newRow.insertCell(7),
      ];
      cells[0].innerHTML = name;
      cells[1].innerHTML = doctorID;
      cells[2].innerHTML = specialization;
      cells[3].innerHTML = experience;
      cells[4].innerHTML = email;
      cells[5].innerHTML = mobile;
      cells[6].innerHTML = role;
      cells[7].innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
    }

    
    window.deleteRow = function (button) {
      var row = button.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };

    
    document.querySelector('form').addEventListener('submit', function (event) {
      event.preventDefault();
      submitForm();
    });
  });
