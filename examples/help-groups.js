const commander = require('../'); // include commander in git clone of commander repo
const program = new commander.Command();

// version is added to the first option group, so if you want other groups
// separate from it, start your group numbers at 1
program.version('1.2.3');

program.option('-a', 'set A', undefined, undefined, 1);
program.option('-b', 'set B', undefined, undefined, 1);
program.option('-c', 'set C', undefined, undefined, 1);

program.option('-q', 'set Q', undefined, undefined, 2);
program.option('-r', 'set R', undefined, undefined, 2);
program.option('-s', 'set S', undefined, undefined, 2);


// commands default to group 0
program.command('login').description('log in');
program.command('logout').description('log out');

program.command('publish').description('publisher').helpGroup(2);
program.command('unpublish').description('unpublisher').helpGroup(2);

// command help listing is automatically sorted by group index, otherwise appearing
// in the order you declare them
program.command('read <process>').description('read it').helpGroup(1);
program.command('update <process>').description('update it').helpGroup(1);
program.command('delete <process>').description('delete it').helpGroup(1);
program.command('refresh <process>').description('refresh it').helpGroup(1);

program.parse(process.argv);