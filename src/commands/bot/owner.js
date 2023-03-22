const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `tyyy`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `</tyyy>#0001`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `CoreWare`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[https://tyyy.nl](https://tyyy.nl)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 