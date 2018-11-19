$('#fetch').click(function(){

  axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((response)=>{
    console.log(response.data)
    // ALWAYS CONSOLE LOG RESPONSE IN .THEN WITH AXIOS

        $('#list-of-characters').html("<ul id='list'></ul>")

    response.data.forEach((eachCharacter)=>{

    $('#list-of-characters').append(`
        <li>
        
        name:  ${eachCharacter.name}
        weapon: ${eachCharacter.weapon}
        
        </li>
        <br>
    
    `)
// above is where all majority of code will go when using axios.
      })




    })
    .catch((err)=>{
      console.log(err);
    })


});



$('#add-new').submit(function(event){

  event.preventDefault

const name = $('#theName').val();
const occupation = $('#theOccupation').val();
const weapon = $('#theWeapon').val();
const debt = $('#theDebt').val();
const noDebt = $('#noDebt').val();

console.log('')

  axios.post('https://ih-crud-api.herokuapp.com/characters', {
    name: 'Chewbacca',
    occupation: 'Smuggler',
    weapon: 'Crossbow',
    debt: true
    // if sent now, this form would create a character with empty everything.
})
  .then(()=>{
    console.log(result);
  })
  .catch(()=>{
    console.log(err);
  })
// in get request, axios, 1 argument is taken in. in post request, it takes 2 arguments, 1 is a string, the url to send to, and the other is an object, in this case req.body.
// req.body.blah will = hello in the above case.
})