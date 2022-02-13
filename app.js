 document.querySelector('.generate').addEventListener('click', random); 

 function random(e){
   const xhr = new XMLHttpRequest();
   const given = document.querySelector('.input ').value;
   xhr.open( 'GET', `http://api.icndb.com/jokes/random/${given}`, true);
   xhr.onload = function(e){
 
      if(this.status===200){  
        const jokes = JSON.parse(this.responseText);
      let output = '';
      if( jokes.type==='success'){
        const jokesValue = jokes.value ;
        jokesValue.forEach(function(real){
          output +=`
          <li>${real.joke}</li>
          `
        })
      }else{
        output+=`
        <li>Something went wrong</li>` 
      }
      document.querySelector('.jokes-list').innerHTML = output;
     }
     e.preventDefault();
    }
   xhr.send();
    e.preventDefault();
 }