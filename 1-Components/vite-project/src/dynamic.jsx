
function Dynamic(){
   let name = 'Ayush';

   function work () {
     return 'study different things'
   }

    return <div>
        Message : Hello my name is {name}
        I can : {work()}
    </div>
}

export default Dynamic;