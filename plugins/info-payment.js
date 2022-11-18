let handler = async (m, { conn }) => {
let info = `
*${htki} PAYMENT ${htka}*

©2022 𝙎𝙚𝙞𝙠𝙖 𝘽𝙤𝙩𝙯𝙯 Official 
`
const sections = [
   {
	title: `✃ sᴇᴡᴀ`,
	rows: [
	    {title: "💳Dana", rowId: '.dana', description: 'Bayar melalui Dana' },
	    {title: "💳Gopay", rowId: '.gopay', description: 'Bayar melalui Gopay' },
	{title: "💳Ovo", rowId: '.ovo', description: 'Bayar melalui Ovo' },
	{title: "💳Motion Pay", rowId: '.motionpay', description: 'Bayar melalui Motion Pay' },
	{title: "💵 Pulsa Smartfren", rowId: '.pulsasmartfren', description: 'Bayar melalui pulsa' },
	{title: "💵 Pulsa Tri3", rowId: '.pulsastri', description: 'Bayar melalui pulsa' },
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
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['pay', 'payment']
handler.tags = ['info']
handler.command = /^(pay(ment)?|payment)$/i
handler.private = true

export default handler
