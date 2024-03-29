
    const {log, biglog ,errorlog, colorize} = require("./out"); // importo las funciones y no el modulo entero

    const cmds = require("./cmds");

    const readline = require('readline');
	

	// Mensaje inicial
	biglog('CORE quiz','green');


	const rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout,
	  prompt: colorize('quiz >','blue'),   // Ojo la coma antes de copiar el "completer"
	  completer: (line) => { 
		  const completions = 'h help add delete edit list test p play credits q quit'.split(' ');
		  const hits = completions.filter((c) => c.startsWith(line));
		  // show all completions if none found
		  return [hits.length ? hits : completions, line];
	  }
	});

	rl.prompt();

	rl.on('line', (line) => {

	  let args = line.split(" ");
	  let cmd = args[0].toLowerCase().trim();  // Ojo cuando accedo a un array lo hago con paréntesis cuadrados.


	  switch (cmd) {

	  	case '': 
	  		rl.prompt();
	  	break;

	    case 'h':
	    case 'help':
			cmds.helpCmd(rl);  // Llamo así a las funciones ya que he importado el modulo entero y no funcion a funcion
	    	break;

	    case 'q':
	    case 'quit':
			cmds.quitCmd(rl);
			break;

	    case 'add':
	    	cmds.addCmd(rl);
	    	break;

	    case 'list':
	    	cmds.listCmd(rl);
	    	break;

	    case 'show':
	    	cmds.showCmd(rl,args[1]);
	    	break;

	    case 'test':
	    	cmds.testCmd(rl,args[1]);
	    	break;

	    case 'play':
	    case 'p':
	    	cmds.playCmd(rl);
	    	break;

	    case 'delete':
	    	cmds.deleteCmd(rl, args[1]);
	    	break;

	    case 'edit':
	    	cmds.editCmd(rl, args[1]);
	    	break;

	    case 'credits':
	    	cmds.creditsCmd(rl);
	    	break;

		default:
	      log(`Comando desconocido: '${colorize(cmd,'red')}'`);
	      log(`Use ${colorize('help','green')} para ver todos los comandos disponibles.`);
	      rl.prompt();
	      break;
	  }
	 
	})
	  .on('close', () => {
	  log('¡Adiós!');
	  process.exit(0);
	});
















