
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
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}

global.array = [];
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
  //var array = [];
  var a;
  if (text.trim() === 'quit' || text.trim() === 'exit') {
    quit();

  }
  else if (text.trim() === 'hello') {
    hello();
  }
  else if (text.split(' ')[0] === 'hello') {
    console.log(text.trim() + "!");
  }
  // help command is for list all the possible commands

  else if (text.trim() === 'help') {
    console.log("1-hello\n2-hello \"Your-Name\"\n3-quit\n4-exit");
  }
  else if (text.trim() === 'list') {
    list(array);
  }
  else if (text.trim().split(" ", 1) == 'add') {
    if (text.trim() === 'add') {
      console.log("error");
    }
    else {
      a = text.trim().split(" ").pop();
      add(a, array);
    }
  }
  else if (text.trim().split(" ", 1) == 'remove') {
    if (text.trim() === 'remove') {
      array.pop();
    }
    else if (text.trim().split(" ") == '1') {
      array.shift(0);

    }
    else if (text.trim().split(" ", 1) == 'remove' && text.trim().split(" ") === '2') {
      array.shift(1);

    }

    else {
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
  function unknownCommand(c) {
    console.log('unknown command: "' + c.trim() + '"')
  }
  /**
  * prints "unknown command"
  * This function is supposed to run when all other commands have failed
  *
  
  
  
  /**
  * Says hello
  *
  * @returns {void}
  */
  function hello() {
    console.log('hello!')
  }


  /**
  * Exits the application
  *
  * @returns {void}
  */
  function quit() {
    console.log('Quitting now, goodbye!')
    process.exit();
  }
  function add(a, array) {
    // array = [];
    array.push(a);
    console.log(a + " is added Successfully");
  }
  /**
    * list all tasks
    *
    * 
    */
  function list(array) {
    for (let i = 0; i < array.length; i++) {

      console.log(i + "- Step " + i + "[ " + array[i] + " ]");
    }
  }

}
// The following line starts the application
startApp("Hussein Aref")
