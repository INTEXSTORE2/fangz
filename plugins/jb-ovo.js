let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} OVO ${htka}

πββΉ, ingin melanjutkan pembayaran?

π *Pembayaran*
π³ Via: Ovo
π Nomor: ---
π€ A/n: ---
π¦ Mitra: ---
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
handler.command = /^ovo$/i
handler.private = true

export default handler
