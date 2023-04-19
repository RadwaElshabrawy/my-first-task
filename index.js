import express from 'express';
const app = express();
const students =[ 'Radwa', 'Omar', 'Rawna', 'Ahmed', 'Nour' ,'Nada', 'Mohamed', 'Asmaa' ,'Salma'  ]


const studentsFunction= (request,response) => {
      let output ='<ul>'
      for (let i=0 ; i<students.length ; i++){
        output+='<li>' +students[i] +'</li>';
      }
      output+= '</ul>'
      response.send(output)
};
app.get('/students', studentsFunction) 


 
app.listen(5000);
