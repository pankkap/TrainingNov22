var students = [
    { name: "Sachin", subject: "Java" },
    { name: "Manish", subject: "Python" },
    { name: "Rupali", subject: "C++" },
  ];

  function admitStudent(student, callback)
  {
    setTimeout(() => {
       students.push(student) 
       console.log("Student has been admitted");
       callback();
    }, 3000);
  }

  function displayStudents()
  {
    setTimeout(() => {
       var str = "" 
       students.forEach((student)=>{
        str +=student.name + " ";
       })
       console.log(str);
       console.log("Students have been fetched");
    }, 1000);
  }


  var newStudent = {name:"Ankur", subject:'React'}
  admitStudent(newStudent, displayStudents)
  