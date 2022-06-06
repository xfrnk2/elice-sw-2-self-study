var persons = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" },
  ];
  
  function getFullName(item) {
    var fullname = item.firstname + " " + item.lastname;
    return fullname;
  }
  
  document.write(persons.map(getFullName));
  
  // document.write("<br>");
  // var numbers = [4, 9, 16, 25];
  // var x = numbers.map(Math.sqrt);
  // document.write(x);
  