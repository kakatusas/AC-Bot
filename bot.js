var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var Player = [ 
{name : "AC Swamp",score :2, don: 0},
{name : "AC Vanstrom",score :21 , don : 16},
{name : "AC ToMaS",score :8, don : 0},
{name : "AC Surelis",score :14, don : 0},
{name : "AC Dariune",score :57 , don : 10},
{name : "DarkFurbis",score :32 ,don : 13},
{name : "AC TomKYS",score : 3,don : 0},
{name : "Meskute",score : 30, don : 35},
{name : "AC Master", score : 4, don : 0},
{name : "AC Godhand",score : 17 , don : 0},
{name : "AC daZepelin",score :3 ,don : 0},
{name : "AC Marrakech",score : 9 , don :0},
{name : "Karolis00345",score : 20 , don : 17},
{name : "AC tracke223", score : 6 , don :0 },
{name : "Hopefoodfly",score : 2 , don : 0},
{name : "Meth Teacher", score : 1, don : 0},
{name : "dowe lt",score : 5, don : 0},
{name : "AC seemsee", score :2 , don : 0},
{name : "AC Hyzer",score : 2 , don : 0},
{name : "Aukstuolis M",score : 2 , don : 0},
{name : "TnN",score : 4 , don : 0},
{name : "Pantera Ltu",score : 3 , don : 0},
{name : "AC Mantofka",score : 5 , don : 0},
{name : "AC Sunshine",score : 7 , don : 0},
{name : "AC birute",score : 2 ,don :0},
{name : "Marq",score : 6 , don : 0},
{name : "miL Slanga4",score : 6 , don : 0},
{name : "Oldleptopas",score : 4 , don : 0},
{name : "Soundbreaker",score : 8 , don : 0},
{name : "Zamasu Lt64",score : 9 , don : 0},
{name : "AC MREL",score : 10, don : 3 },
{name : "HakaiShinXXV",score : 3, don : 0},
{name : "NoPants_HC",score : 1, don : 0},
{name : "Klaudis",score : 2 , don : 0},
{name : "Just Smite",score : 2, don : 0},
{name : "AC Pandaxy",score : 2 , don : 22},
{name : "AC Skemere", score : 0, don: 136},
{name : "AC Irdynnar",score : 0 , don : 5},
{name : "Dar nekaltas",score : 0 , don : 2},
{name : "AC pepe",score : 4 , don : 0},
{name : "SNIER LT",score : 2 , don : 0},
{name : "izi Tevai",score : 1 , don : 0},
{name : "Will not BOT",score : 1 , don : 0}];
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
	var full=' ';
	var place;
	var i;
	var vieta=1;
	var suma=0;
	
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];     
			var i = 0;
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'bank':
                bot.sendMessage({
                    to: channelID,
                    message: 'SIUO METU FONDE YRA: 205.9m \nKORPORACIJOS REIKMEM ISNAUDOTA: 45.1m '
                });
            break;
            // Just add any case commands if you want to..
			case 'karma':
				Player.sort(function(b, a){return a.score - b.score});
				
	                while (i<Player.length)
				{
				suma=suma+Player[i].score;
					i++;
				}	
				i=0;
					while (i<Player.length - 3)
					{
						place='Vieta '+ vieta+ " " +Player[i].name + '  ' + Player[i].score +'\n';
						full=full+place ;
						i++;
						vieta=vieta+1
					}
						bot.sendMessage({to: channelID,	  message : full });
				
				bot.sendMessage({to: channelID,	  message : 'Bendras karmos kiekis'+suma+'= '+suma/2 +'M'+'\n paskutinis atnaujinimas 2017-11-15'});
				break;
				
			case 'donators':
			Player.sort(function(b, a){return a.don - b.don});
			while (i<10)
				
			{
				place=Player[i].name + '  ' + Player[i].don+"M" +'\n';
						full=full+place ;
				i++;
			}
				bot.sendMessage({to: channelID,	  message : full });

			break;	
			case 's':
			var ret = message.replace('!s','');
			var narys = ret;
			i=0;
				
			while(i<Player.length)
		{
			
			var temp = ' '+Player[i].name;
			
			if (narys == temp)
			{
			
				bot.sendMessage({to: channelID,	  message : " " +Player[i].name + '  ' + Player[i].score });
			}
				i++
			
		};

			break;
		
			case 'help':
			bot.sendMessage({to: channelID,	  message : '1 !donators - parodo top donations\n2 !karma - parodo visu žaidejų karmos taškus \n3 - !bank Parodo išleistas lėšas bei kiek šuo metu yra milijonu banke \n 4 !s suras žaideja su nurodytu vardu '});
        break;	
		case'add':
		Player[0].score=Player[0].score + 1;
		}
		
     }
});
