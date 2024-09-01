const fs = require('fs') 
const path = require('path')
const chalk = require('chalk') 
const { en, es, ar, id, pt, rs} = require('./libs/idiomas/total-idiomas.js') 

//---------[ PROPIETARIO/OWNER ]---------
global.owner = [["50240227531", "KILLUA DSC", true], ["593968585383"], ["5492266466080"], ["595986172767"], ["5492266613038"], ["5217294888993"], ["5214434703586"], ["5214437863111"], ["51906662557"], ["595992302861"], ["5217441298510"], ["5491155983299"], ["5493795319022"], ["5217821153974"], ["573012482597"]]
global.mods = []
global.premium = []  
global.blockList = []  

//---------[ NOMBRE/INFO ]---------
global.botname = "KILLUA"
global.wm = 'KILLUA'
global.vs = '1.0 (beta)'

//Función beta : escribe el número que quiere que sea bot para que mande el Código de 8 digitos
global.botNumberCode = "" //Ejemplo: +50231458537
global.phoneNumber = ""

//---------[ FECHA/IDIOMAS ]---------
global.place = 'America/Guatemala' // Aquí puedes encontrar tu ubicación https://momentjs.com/timezone/
global.lenguaje = es //Predeterminado en idioma Español 
global.prefix = [`/`]

//---------[ APIS GLOBAL ]---------
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']; 
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]; 
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']; 
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]; 
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']; 
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]; 
global.lolkeysapi = ['GataDios']; // ['BrunoSobrino_2'] 
global.itsrose = ['4b146102c4d500809da9d1ff'];
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '');

global.APIs = {
//ApiEmpire: 'https://',
CFROSAPI: 'https://api.cafirexos.com',
nrtm: 'https://fg-nrtm.ddns.net',
fgmods: 'https://api.fgmods.xyz', 
xteam: 'https://api.xteam.xyz',
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',
rose: 'https://api.itsrose.site',
popcat: 'https://api.popcat.xyz',
xcoders: 'https://api-xcoders.site',
vihangayt: 'https://vihangayt.me',
erdwpe: 'https://api.erdwpe.com',
xyroinee: 'https://api.xyroinee.xyz',
nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': 'GataDios',
'https://api.neoxr.my.id': `${keysneoxr}`,
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api.fgmods.xyz': 'DRLg5kY7', 
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren',
'https://api.xyroinee.xyz': 'uwgflzFEh6'
};
 
//---------[ STICKERS ]---------
global.packname = "KILLUA"
global.author = `${vs}`

 global.catalogo = "https://qu.ax/YqMN.jpg"
 
 //-----[Estilo]------------
 global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -888888, status: 1, surface : 1, message: botname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
 
//---------[ IMAGEN ]---------
global.img = "https://qu.ax/YqMN.jpg"
global.img1 = 'https://qu.ax/YqMN.jpg'
global.img2 = 'https://qu.ax/YqMN.jpg'
global.vid1 = "https://telegra.ph/file/e71100cbb3729c4f7e9aa.jpg"

global.imagen1 = "https://telegra.ph/file/18ef6770458bb6e8f34e2.jpg"
global.imagen2 = "https://telegra.ph/file/1bab6d2399610589ff7a4.jpg"
global.imagen3 = "https://telegra.ph/file/9a932bc5840aff7ce4899.jpg"
global.noperfil = "https://telegra.ph/file/782db348262c3e7632354.jpg"

//---------[ ENLACES ]---------
global.md = 'https://github.com/'
global.yt = 'https://www.youtube.com/@esTurcios'
global.tiktok = 'https://www.tiktok.com/'
global.fb = 'https://www.facebook.com/'
global.faceb = 'https://www.facebook.com/'
global.paypal = 'https://www.paypal.me/' 

global.host = 'https://chat.whatsapp.com/' //Infinity-host
global.nna = 'https://whatsapp.com/channel/' //Update 
global.nn = 'https://chat.whatsapp.com/' //𝐘𝐮𝐆𝐢-𝐁𝐎𝐓
global.nn2 = 'https://chat.whatsapp.com/' //Loli & Nova
global.nn3 = 'https://chat.whatsapp.com/' //Grupo de Colaboracion
global.nn4 = 'https://chat.whatsapp.com/' // Grupo COL 2
global.nn5 = 'https://chat.whatsapp.com/' //Grupo COL 3
global.nn6 = 'https://chat.whatsapp.com/' //test
global.nn7 = 'https://chat.whatsapp.com/' //Grupo ayuda sobre el bot
global.nn8 = 'https://chat.whatsapp.com/' //enlace YuGi-BOT
global.multi = 'https://chat.whatsapp.com/' //Grupo náufrazapp
global.nna2 = 'https://github.com/'
global.n2 = "https://wa.me/50240227531"
//---------[ INFO ]--------- 
global.info = { wait: '*⌛ _Cargando..._ ▬▭▭▭▭▭▭*', 
waitt: '*⌛ _Cargando..._ ▬▬▭▭▭*', 
waittt: '*⌛ _Cargando..._ ▬▬▬▬▭▭*', 
waitttt: '*⌛ _Cargando..._ ▬▬▬▬▬▬▭*', 
waittttt: '*⌛ _Cargando..._ ▬▬▬▬▬▬▬*', 
result: `${lenguaje['exito']()}`,  
admin: `${lenguaje['admin']()}`, 
botAdmin: `${lenguaje['botAdmin']()}`, 
owner: `${lenguaje['propietario']()}`, 
premium: `${lenguaje['prem']()}`,                
group: `${lenguaje['group']()}`, 
private: `${lenguaje['private']()}`, 
bot: `${lenguaje['bot']()}`, 
error: `${lenguaje['error']()}`, 
advertencia: `${lenguaje['advertencia']()}`, 
registra: `${lenguaje['registra']()}`, 
limit: `${lenguaje['limit']()}`, 
AntiNsfw: `${lenguaje['AntiNsfw']()}`,
endLimit: `${lenguaje['endLimit']()}`, }
global.rwait = '🕛'
global.dmoji = '🧐'
global.done = '⚔️'
global.error = '😖' 
global.xmoji = '🥵' 

//---------------[ NIVELES, ADVERTENCIA ]----------------
global.multiplier = 180 // Cuanto más alto, más difícil subir de nivel 
global.maxwarn = '4' // máxima advertencias 

//----------------------------------------------------

let file = require.resolve(__filename) 
fs.watchFile(file, () => { 
fs.unwatchFile(file)
const fileName = path.basename(file)
console.log(chalk.greenBright.bold(`Update '${fileName}'.`)) 
delete require.cache[file] 
require(file) 
})
