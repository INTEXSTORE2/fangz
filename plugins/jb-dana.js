let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} DANA ${htka}

HayΓ°ΕΈββΉ, ingin melanjutkan pembayaran?

π *Pembayaran*
π³ Via: Dana
π Nomor: 081385012083
π€ A/n: mas*****
π¦ Mitra: ππππ π π½π€π©π―π―
π° Metode pembayaran: Online ( ~Cod~ )

π£ *Beli*

βοΈ _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan saldo.
Pastikan saldo kamu mencukupi untuk bertransaksi!


βKLIK *SUDAH BAYAR* JIKA SUDAH MEMBAYAR!
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'QRIS', url: 'https://telegra.ph/file/ff71853efeb006d635a90.jpg'}},
    {index: 4, quickReplyButton: {displayText: 'Sudah membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^dana$/i
handler.private = true

export default handler
