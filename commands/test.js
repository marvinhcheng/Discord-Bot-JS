module.exports = {
    name: 'test',
    description: 'testing commands',
    execute(message, args){
        if(!args.length){
            return message.channel.send('No parameter provided');
        }
        else if (args[0] === 'command'){
            return message.channel.send('success');
        }
        message.channel.send('command not recognized')
    },
};
