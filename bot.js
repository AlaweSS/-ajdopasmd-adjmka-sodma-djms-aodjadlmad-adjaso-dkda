const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = '$'




console.log('hello')








client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith('$bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Critele";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))







    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ |   ${message.guild.members.size} يتم ارسال البرودكاست الى عضو `).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('البرودكاست') .addField('السيرفر', message.guild.name) .addField('المرسل', message.author.username)
       .addField('الرساله', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    })


client.on('message', message => {
let ali = message.mentions.users.first()
    let reason = message.content.split(" ").slice(2).join(" ");
if(message.content.startsWith(prefix + 'warn')) {
if(!ali) return message.reply('mention someone')
if(!reason) return message.reply('Type The Reason')
if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("- ما معك برمشن");
let embed = new Discord.RichEmbed()
.setTitle('**New Warned User**')
.addField('Warned By :', `${message.author.tag} with id ${message.author.id}`)
.addField('Warned User:', `${ali} with id ${ali.id}`)
.addField('Reason:',`${reason}`)
.addField('Warned In', `${message.channel.name}`)
.addField('Time',`${message.createdAt}`)
.setFooter('Critele')
let incidentchannel = message.guild.channels.find(`name`, "log");
if(!incidentchannel) return message.channel.send("Can't find log channel.");
incidentchannel.send(embed);
  message.channel.send(`**:warning: ${ali} has been warned :warning:**`)
ali.send(`:warning: You Are Has Been Warned !  by: ${message.author.tag} :warning: `)

}})



client.login(process.env.BOT_TOKEN)


  client.on('message', message => {

    if (message.author.id === client.user.id) return;

            if (message.content.startsWith(prefix + "ping")) {

        message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');

    }

});







client.on('message', message => {

if (message.content.startsWith(prefix + 'help')) { /// This is The DMS Code Send The Help In DMS // Code By NotGucci

    let pages = [`

༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻

:earth_africa: The Public Commands :earth_africa:

1༺༻  $id  | Shows User ID [SOON]༺༻

2༺༻  $userinfo | Shows User Info༺༻

3༺༻  $server | Shows Server Info༺༻

4༺༻  $ping | Shows Bot Ping༺༻

5༺༻  $dt| Show date and time༺༻

6༺༻   $invite | Shows Bot Invite Link༺༻

7༺༻   $bot | Shows Bot Info༺༻

8༺༻   $avatar | Shows User Avatar༺༻

9༺༻   $image | Shows Server Avatar༺༻

10༺༻  $mcskin  | Shows Minecraft Players Skin༺༻

11༺༻  $say  | Repeat What Your Saying༺༻

12༺༻  $gif  | Gives You Gif ༺༻

11༺༻  $moveall  | Move All Members To Your Channel༺༻

12༺༻  $hack  | Hack Game༺༻

13༺༻  $rps  | Paper scissors game with the bot༺༻

14༺༻  $مريم  | Mariam Game༺༻

15༺༻  $حاسبه |  Calculator༺༻

16༺༻  $translate |  Translate༺༻

17༺༻  $انمي |  Anime Game༺༻

18༺༻  $حكم |  Rule Game༺༻

19༺༻  $عقاب |  Punishment Game༺༻

20༺༻  $tag  | Give You Custom Words༺༻

21༺༻  $short  | short link༺༻

22༺༻  $micr  | Questions for Minecraft༺༻

23༺༻  $allbots  | View all bots༺༻

24༺༻  $animal  | Random Animal༺༻

25༺༻  $punch  | punch someone༺༻

༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻

Click On ▶ To Go Administor Side

   `

,`

༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻

:closed_lock_with_key: Administor Commands:closed_lock_with_key:

1༺༻  $clear | Clear The Chat(without number)༺༻

1༺༻  $nclear | Clear The Chat (with number)༺༻

2༺༻  $bc1 | Msg Everyone In The Server༺༻

2༺༻  $bc2 | Msg Everyone In The Server [without embed]༺༻

3༺༻  $kick | Kick With Reson༺༻

4༺༻  $tempban | Ban With Reason༺༻

5༺༻  $tempmute | mute With Reason༺༻

6༺༻  $unmute | unmute ༺༻

7༺༻ Make Room Called log For Logs༺༻

8༺༻ Make Room Called report For reports༺༻

9༺༻ Make Room Called suggestion For suggestion༺༻

༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻

Click On ▶ To Go To Bot Info

   `,`

༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻

1༺༻  There is Commands Just For OrochiX | Bot By:OrochiX༺༻

$bcall -> send msg for all servers

༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻

   `]
