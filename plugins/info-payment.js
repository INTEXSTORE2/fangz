let handler = async (m, { conn }) => {
let info = `
*${htki} PAYMENT ${htka}*

Β©2022 ππππ π π½π€π©π―π― Official 
`
const sections = [
   {
	title: `β sα΄α΄‘α΄`,
	rows: [
	    {title: "π³Dana", rowId: '.dana', description: 'Bayar melalui Dana' },
	    {title: "π³Gopay", rowId: '.gopay', description: 'Bayar melalui Gopay' },
	{title: "π³Ovo", rowId: '.ovo', description: 'Bayar melalui Ovo' },
	{title: "π³Motion Pay", rowId: '.motionpay', description: 'Bayar melalui Motion Pay' },
	{title: "π΅ Pulsa Smartfren", rowId: '.pulsasmartfren', description: 'Bayar melalui pulsa' },
	{title: "π΅ Pulsa Tri3", rowId: '.pulsastri', description: 'Bayar melalui pulsa' },
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

handler.help = ['pay', 'payment']
handler.tags = ['info']
handler.command = /^(pay(ment)?|payment)$/i
handler.private = true

export default handler
