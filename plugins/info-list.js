let handler = async (m, { conn }) => {
let info = `
*${htki} INFO BOT ${htka}*
`
const sections = [
   {
	title: `β STATS`,
	rows: [
	    {title: "πTest Speed", rowId: '.testspeed', description: 'Test Speed' },
	    {title: "πStats Server", rowId: '.statserver', description: 'Status server' },
	{title: "π€Owner", rowId: '.owner', description: 'Owner ππππ π π½π€π©π―π―' },
	{title: "π°Donasi", rowId: '.donasi', description: 'Support ππππ π' },
	]
    }, {
    title: `β INFO`,
	rows: [
	    {title: "πRules", rowId: '.rules', description: 'S&K ππππ π π½π€π©π―π―' },
	    {title: "β", rowId: 'huuu', description: 'No menu' },
	{title: "β‘Speed", rowId: '.speed', description: 'Speed ππππ π π½π€π©π―π―' },
	{title: "π°Sewa BOT", rowId: '.sewa', description: 'Sewa ππππ π π½π€π©π―π―' },
	{title: "π£οΈRequest Fitur", rowId: '.request', description: 'Request Fitur ππππ π π½π€π©π―π―' },
	{title: "πLokasi BOT", rowId: '.loc2', description: 'Lokasi ππππ π π½π€π©π―π―' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "π Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['info', 'infobot']
handler.tags = ['info']
handler.command = /^(info|infobot)$/i

export default handler
