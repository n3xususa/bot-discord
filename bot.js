const Discord = require ('dicord.js') ;
const client = new discord.client ();

client.on ('ready', () => {
console.log('I am ready!');
});

client.on('message', message => {
if (message.content === 'ping') {
message.reply('pong');
}
});

// THIS MUST BE THIS WAY
client.login(NjU4MDE1NjE5MzYyMzI0NDgx.Xf5m8A.Z0WLm7M0lsnpxq_CabYFOx0IHag);

