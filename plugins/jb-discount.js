let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `*${htki} DISCOUNT ${htka}*

          • ERROR •
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Link', url: '404 NOT FOUND'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: thumb
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['diskon']
handler.tags = ['info']
handler.command = /^diskon$/i

export default handler
