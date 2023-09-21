
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}



/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  var mmm=text.split(" ")[0].trim();
  if (text === 'quit\n'|| text === 'exit\n') {
    quit();
  }
  
  else if(mmm === 'hello'){
    hello(text);
  }
  else if(mmm === 'help'){
    help(text);
  }
  else if(mmm === 'list'){
    list();
  }else if (mmm === 'add') {
    add(text);
  }else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  text=text.slice(0,(text.length-1))
  console.log(text + '!')
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
/**
 * command, "help", that lists all 
 * the possible commands
 */

function help(text) {
  text=text.slice(0,(text.length-1))
  console.log(text +' quit! \n '+text+"exit! \n"+text+"hello \n")
}

/**
 * Says list
 *
 * @returns {void}
 */
// array1 variable 
const Array1=["buy bread", "do the exercises"];
//fonction to create list 
function list(){
Array1.map((Array1,index)=>{
  //index+1 : 0+1 =1 
  console.log(index + 1 + " - [ ] " + Array1);
});

 }
 
//fonction to add to list
  function add(text) {
    // Remove the command part 'add' and trim the spaces
    let addTask = text.slice(4).trim();
  
    if (addTask === '') {
      console.log('Error: No task available to add');
      return;
    }
  
    Array1.push(addTask);
    console.log(`Task "${addTask}" added successfully!`);
  }

 


// The following line starts the application
startApp("Moussa karam")


