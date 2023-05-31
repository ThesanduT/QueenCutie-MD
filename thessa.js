



require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const fetch = require('node-fetch')
const os = require('os')
const maker = require('mumaker')
const hx = require("hxz-api")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const cheerio = require ("cheerio")
let { msgFilter } = require('./lib/antispam')
let { covid } = require('./lib/covid.js') 
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const textpro = require('./lib/textpro')
const { mediafireDl } = require('./lib/mediafire.js')
const { Gempa } = require("./lib/gempa.js")
const { jadwaltv }= require('./lib/jadwaltv')
const { pinterest } = require("./lib/pinterest")
const toHur = require('@develoka/angka-terbilang-js')
const { hentai } = require('./lib/scraper2.js')
const { AlfaMenu } = require("./lib/menulist.js")
const { AlfaFont1, AlfaFont2, AlfaFont3, AlfaFont4, AlfaFont5, AlfaFont6, AlfaFont7, AlfaFont8, AlfaFont9, AlfaFont10, AlfaFont11, AlfaFont12, AlfaFont13, AlfaFont14, AlfaFont15, AlfaFont16, AlfaFont17, AlfaFont18, AlfaFont19, AlfaFont20, AlfaFont21, AlfaFont22, AlfaFont23, AlfaFont24, AlfaFont25, AlfaFont26, AlfaFont27, AlfaFont28, AlfaFont29, AlfaFont30, AlfaFont31, AlfaFont32, AlfaFont33, AlfaFont34, AlfaFont35, AlfaFont36, AlfaFont37, AlfaFont38, AlfaFont39 } = require("./lib/extra")
const { AlienAlfaWiki } = require('./lib/wiki.js')
const farrkey = require('xfarr-api')
const { AlienAlfaTiktok } = require('./lib/tiktok')
const tod = require("tod-api")
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme, Cerpen,Quotes, Couples, Darkjokes } = require("dhn-api")
const { styletext, tiny, ffmpeg } = require("./lib/");

//---------------------------------

const Heroku = require('heroku-client')
const heroku = new Heroku({ token: process.env.HEROKU_API })

const { PassThrough } = require('stream')
let baseURI = '/apps/' + global.herokuapp

//---------------------------------

//rpg function
const { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah }  = require('./storage/user/darah.js')

const { cekInventoryAdaAtauGak, addInventori, addBesi, addEmas, addEmerald, addUmpan, addPotion, kurangBesi, kurangEmas, kurangEmerald, kurangUmpan, kurangPotion, getBesi, getEmas, getEmerald, getUmpan, getPotion } = require('./storage/user/alat_tukar.js')
const { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson, addMonay, kurangMonay, getMonay } = require('./storage/user/monay.js')
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, getLimit } = require('./storage/user/limit.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan,addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi, kurangGajah, getIkan,getAyam, getKelinci, getDomba, getSapi, getGajah } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

//rpg database
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database omther
let botzysticker = JSON.parse(fs.readFileSync('./Media/theme/Media-Storage/sticker.json'));
let botzyaudio = JSON.parse(fs.readFileSync('./Media/theme/Media-Storage/audio.json'));
let botzyimage = JSON.parse(fs.readFileSync('./Media/theme/Media-Storage/image.json'));
let botzyvideo = JSON.parse(fs.readFileSync('./Media/theme/Media-Storage/video.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'));
let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'))

//read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

//frame menu
let az = '╭═══〘 '
let bz = '┃✩╭──────────────'
let cz = '┃✩│'
let dz = '┃✩╰───────────────'
let ez = '╰═════════════════⊷'
let bcz = '  ▎▍▌▌▉▏▎▌▉▐▏▌▎'


let buttonxnxxr = [
    { buttonId: 'allmenu', buttonText: { displayText: 'All Menu' }, type: 1 },
    { buttonId: 'command', buttonText: { displayText: 'List Menu' }, type: 1 }
]

module.exports = AlienAlfa = async (AlienAlfa, m, chatUpdate, store) => {
    

        global.log0 = await getBuffer(logoz)
        global.thumb = await getBuffer(thumbz)
        global.err4r = await getBuffer(err4rz)
        global.thum = await getBuffer(thumz)
        global.vidmenu = await getBuffer(vidmenuz)

       



        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await AlienAlfa.decodeJid(AlienAlfa.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isDev = ['447405935355@s.whatsapp.net','919383400679@s.whatsapp.net']
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)
	    const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        try {
        //group
        const groupMetadata = m.isGroup ? await AlienAlfa.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const AntiLink = m.isGroup ? ntilink.includes(from) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const antiWame = m.isGroup ? ntwame.includes(from) : false
const antiToxic = m.isGroup ? nttoxic.includes(from) : false
const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const isAutoStick = _autostick.includes(from)
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const Autoreply = m.isGroup ? autorep.includes(from) : true
        const isBan = banUser.includes(m.sender)
        const isBanChat = m.isGroup ? banchat.includes(from) : false
autoreadsw = true
	    
        //member
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawalpremium : global.limitawalfree
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = false
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = true
		if (!('templateDocument' in setting)) setting.templateDocument = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateVideo: false,
		templateGif: false,
		templateMsg: true,
		templateDocument: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	// FAKE TEXT IMG
const textImg = (teks) => {
AlienAlfa.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./Media/image/wpmobile.png')}) 
}

//FAKE CONTACT
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `447405935355 -1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Click to chat\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
//FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0 //The picture
},
"title": `${global.ownername}`, 
"description": `${global.botname}`, 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": `${global.watermark}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
} 
//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: `${global.ownername}`, //
orderTitle: `${global.botname}`,
thumbnail: log0, //Pic
sellerJid: '0@s.whatsapp.net'

}
}
}
//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: `${global.location}`,
jpegThumbnail: log0
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${global.botname}`, 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "447405935355-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `${global.botname}`,
"h": `${global.ownername}`,
'seconds': '30', 
'caption': `${global.watermark}`,
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "447405935355-1616169743@g.us",
"inviteCode": `${global.ownername}`,
"groupName": `${global.botname}`, 
"caption":`${global.watermark}`, 
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "447405935355-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":`${global.botname}`,
 "h": `${global.ownername}`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': `${global.watermark}`,
 'jpegThumbnail': log0
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "447405935355-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":`${global.ownername}`,
"title": `${global.botname}`,
 'jpegThumbnail': log0
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "447405935355-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "9999999999999999",
"ptt": "true"
}
} 
}
	
	//group target \\
const reply = (teks) => {
           AlienAlfa.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            AlienAlfa.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
	
        //Public & Self\\
        if (!AlienAlfa.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawalpremium : global.limitawalfree
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
        //hitter
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/CheemsBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/CheemsBot${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await AlienAlfa.setStatus(`${AlienAlfa.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	//antispam or auto react
//if (m.message && msgFilter.isFiltered(from)) {
//console.log(`${global.themeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
//return AlienAlfa.sendMessage(from, { react: { text: `${global.themeemoji}`, key: m.key }})
//}
	
//auto read whatsapp status
/*
if (autoreadsw) {
		if (from === 'status@broadcast') {
		AlienAlfa.chatRead(from)
	}
	}
    */
//autoreader gc and pm
if (global.autoreadpmngc) {
if (command) {
await AlienAlfa.sendPresenceUpdate('composing', m.chat)
AlienAlfa.sendReadReceipt(from, m.sender, [m.key.id])}
}
  //autoread gc only
  if (global.autoReadGc) {
  if (m.isGroup) { AlienAlfa.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}
  //auto recording all
    if (global.autoRecord) { if (m.chat) { AlienAlfa.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { AlienAlfa.sendPresenceUpdate('composing', m.chat) }
}
//auto available all
  if (global.available) { if (m.chat) { AlienAlfa.sendPresenceUpdate('available', m.chat) }
  }

// Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await AlienAlfa.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await AlienAlfa.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        //Autosticker pc
                if (isAutoStick) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await AlienAlfa.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await AlienAlfa.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }

	// AntiLinkgc
if (AntiLink) {
linkgce = await AlienAlfa.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
reply(`\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AlienAlfa.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
AlienAlfa.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
  // Antiwame 
  if (antiWame)
  if (budy.includes(`wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AlienAlfa.groupParticipantsUpdate(m.chat, [kice], 'remove')
AlienAlfa.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AlienAlfa.groupParticipantsUpdate(m.chat, [kice], 'remove')
AlienAlfa.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex 
  if (antiVirtex) {
  if (budy.length > 3500) {
  reply(`Somebody spammed virus!! Mark as read⚠️\n`.repeat(300))
  reply(`\`\`\`「 Virus Detected 」\`\`\`\n\nSorry You Will Be Kicked !`)
  if (!isBotAdmins) return reply(mess.botAdmin)
  AlienAlfa.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }
//anti bad words 
if (antiToxic)
if (bad.includes(messagesD)) {
tos = ['Hey, watch your mouth','Never been taught how to speak?','Stop being toxic my friend🤢','Dont be toxic ']
sin =  tos[Math.floor(Math.random() * (tos.length))]
reply(sin)
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick you😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AlienAlfa.groupParticipantsUpdate(m.chat, [kice], 'remove')
AlienAlfa.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${kice.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})}
}
//antilink youtube video 
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AlienAlfa.groupParticipantsUpdate(m.chat, [kice], 'remove')
AlienAlfa.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink youtube channel 
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AlienAlfa.groupParticipantsUpdate(m.chat, [kice], 'remove')
AlienAlfa.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink instagram 
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AlienAlfa.groupParticipantsUpdate(m.chat, [kice], 'remove')
AlienAlfa.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink facebook 
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AlienAlfa.groupParticipantsUpdate(m.chat, [kice], 'remove')
AlienAlfa.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink telegram 
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AlienAlfa.groupParticipantsUpdate(m.chat, [kice], 'remove')
AlienAlfa.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink tiktok 
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AlienAlfa.groupParticipantsUpdate(m.chat, [kice], 'remove')
AlienAlfa.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink twitter
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AlienAlfa.groupParticipantsUpdate(m.chat, [kice], 'remove')
AlienAlfa.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink all
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AlienAlfa.groupParticipantsUpdate(m.chat, [kice], 'remove')
AlienAlfa.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

                //auto reply
  //if (Autoreply) //remove forwad slashes to make it autoreply on off
        for (let anji of botzysticker){
				if (budy === anji){
					result = fs.readFileSync(`./Media/sticker/${anji}.webp`)
					AlienAlfa.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
			for (let anju of botzyaudio){
				if (budy === anju){
					result = fs.readFileSync(`./Media/audio/${anju}.mp3`)
					AlienAlfa.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
			for (let anjh of botzyimage){
				if (budy === anjh){
					result = fs.readFileSync(`./Media/image/${anjh}.jpg`)
					AlienAlfa.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
					for (let anjh of botzyvideo){
				if (budy === anjh){
					result = fs.readFileSync(`./Media/video/${anjh}.mp4`)
					AlienAlfa.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: takeresult,footerText: `${botname}`,buttons: buttons,headerType: 4}
AlienAlfa.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: AlienAlfa.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, AlienAlfa.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        AlienAlfa.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            AlienAlfa.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AlienAlfa.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `  Guess The Music  \n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, AlienAlfa.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`  Math Quiz  \n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AlienAlfa.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `  Guess The Picture  \n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, AlienAlfa.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AlienAlfa.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `  Guess The Word  \n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, AlienAlfa.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AlienAlfa.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `  Guess The Blank  \n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, AlienAlfa.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AlienAlfa.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `  Guess The Sentence  \n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, AlienAlfa.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AlienAlfa.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `  Guess The Lyrics  \n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, AlienAlfa.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AlienAlfa.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `  Guess The Riddle  \n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, AlienAlfa.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Typed *surrender* to surrender and admited defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await AlienAlfa.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await AlienAlfa.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
	    AlienAlfa.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    AlienAlfa.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) AlienAlfa.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) AlienAlfa.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) AlienAlfa.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    AlienAlfa.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih2) AlienAlfa.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih) AlienAlfa.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    AlienAlfa.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in AFK/Offline ${reason ? 'dengan alasan ' + reason : 'no reason'}
It's been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
You Came Back Online From AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
       //react function
const reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }

                //Font Selector 

                let AlienAlfaThemeFont = 6

    
    
    
    
const timestampe = speed();
const latensie = speed() - timestampe





var textz = `
╭═══〘 ${ownername} 〙═══⊷❍
┃✩╭──────────────
┃✩│
┃✩│ Bot Name : ${ownername}
┃✩│ Owner Name : ${global.ownername}
┃✩│ Owner No. : ${global.owner}
┃✩│ Host Name : ${os.hostname()}
┃✩│ Platform : ${os.platform()}
┃✩│ Total User : ${Object.keys(global.db.data.users).length}
┃✩│ Mode : ${global.worktype}
┃✩│ Server : ${isHeroku}
┃✩│ Ram: 1.00 GB
┃✩│ Version: ${gversion}
┃✩│ Prefix : ${prefix}
┃✩│ 
┃✩│ Ping   : ${latensie.toFixed(4)} ᴍꜱ
┃✩│ Runtime : ${runtime(process.uptime())}
┃✩│ 
┃✩│ 
┃✩│  ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃✩│  ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃✩│  
┃✩╰─────────────── 
╰═════════════════⊷

`
var textz2 = `
╭═══〘 ${ownername} 〙═══⊷❍
┃✩╭──────────────
┃✩│ Owner Name : ${global.ownername}
┃✩│ Owner No. : ${global.owner}
┃✩│ Server : ${isHeroku}
┃✩│ Version: ${gversion}
┃✩│ Ping   : ${latensie.toFixed(4)} ᴍꜱ
┃✩│ Runtime : ${runtime(process.uptime())}
┃✩╰─────────────── 
╰═════════════════⊷

`
var menulist2 = textz2
var menulist = textz

   
   //randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

// short story
async function cerpen (category) {
    return new Promise((resolve, reject) => {
        let title = category.toLowerCase().replace(/[()*]/g, "")
        let judul = title.replace(/\s/g, "-")
        let page = Math.floor(Math.random() * 5)
        axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let link = []
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'))
            })
            let random = link[Math.floor(Math.random() * link.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = {
                    title: $$('#content > article > h1').text(),
                    author: $$('#content > article').text().split('Short Story: ')[1].split('Category: ')[0],
                    kategori: $$('#content > article').text().split('Category: ')[1].split('\n')[0],
                    lolos: $$('#content > article').text().split('Passed moderation on: ')[1].split('\n')[0],
                    cerita: $$('#content > article > p').text()
                }
                resolve(hasil)
            })
        })
    })
}

switch(command) {
	
/*|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|
  
                                            °◦¸¸.◦°˚°◦☙°◦¸¸.◦°˚°◦☙ミミ◦❧◦°˚°◦.¸¸◦°´❤*•.
   

                                            ██████╗░██╗░░░██╗██████╗░██╗░░░░░██╗░█████╗░
                                            ██╔══██╗██║░░░██║██╔══██╗██║░░░░░██║██╔══██╗
                                            ██████╔╝██║░░░██║██████╦╝██║░░░░░██║██║░░╚═╝
                                            ██╔═══╝░██║░░░██║██╔══██╗██║░░░░░██║██║░░██╗
                                            ██║░░░░░╚██████╔╝██████╦╝███████╗██║╚█████╔╝
                                            ╚═╝░░░░░░╚═════╝░╚═════╝░╚══════╝╚═╝░╚════╝░
 
 
                                            .•*❤´°◦¸¸.◦°˚°◦☙◦彡彡❧◦°˚°◦.¸¸◦°❧◦°˚°◦.¸¸◦°
   
  |⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|*/ 


  case 'update': {
	 
    if (!isCreator) m.reply(m.chat, 'umm... you know this command is only for owner right?')
                try {
  await git.fetch();
  var commits = await git.log(['BETA-MD' + '..origin/' + 'BETA-MD']);
  var mss = '';
  if (commits.total === 0) {
  mss = "*Bot up to date*";
  
  } else {
     var changelog = "_Updates are available_\n\n";
     commits['all'].map(
         (commit) => {
             changelog += `⧉ *${commit.message}* _[${commit.date.substring(0, 10)}]_ \n`
         }
     );
     mss = changelog;
     
             let buttons = [
  
                     { buttonId: 'Update Start', buttonText: { displayText: 'updaten'  }, type: 2 }
                 ]
  }
  await AlienAlfa.sendButtonText(m.chat, buttons, mss, `${alfafooter}\nᴀʟɪᴇɴ ᴀʟꜰᴀ-ᴍᴅ`, m)
  
        
         }catch(e) { m.reply('update fetch method failed\n\n'+e)}
        
                    }  break 
  
  case 'updaten': {
  
  
  if (isCreator) {
  await git.fetch()
  var commits = await git.log(['BETA-MD' + '..origin/' + 'BETA-MD']);
  if (commits.total === 0) {
     return await m.reply(m.chat, { text:"_Bot up to date_"})
  
  } else {
     await message.sendReply("_Build started ⏫_")
  
         try {
             var app = await heroku.get('/apps/' + `${herokuapp}`)
  
  
         } catch {
             await m.reply(m.chat, "*Heroku app name/api key wrong ❗*")
  
             await new Promise(r => setTimeout(r, 1000));
   }
         
  
         git.fetch('upstream', 'BETA-MD');
         git.reset('hard', ['FETCH_HEAD']);
         
         try {
         
  var git_url = app.git_url.replace( "https://", 'https://api:' + process.env.HEROKU_API + '@' )
  
  
             try {
             await git.addRemote('heroku', git_url);
         } 
          
         catch { console.log('Deploy error catched. Retrying...') }
         
         try { await git.push('heroku', 'main'); } catch(e){ 
         if (e.message.includes("concurrent")) return await m.reply("Your account has reached in-parallel build limit! Please wait for the other app to finish its deploy ❗"); 
         }
  
         await m.reply("_Finished build! Restarting.._");
  
         await m.reply("_Restarting in 3 seconds_")
         }
         
          catch(e) { m.reply('og method failed\n\n'+e)
  
         try {
         
         var git_url = `https://api:${herokuapi}@git.heroku.com/${herokuapp}.git`
  
  
             try {
             await git.addRemote('heroku', git_url);
         } 
          
         catch { console.log('heroku remote ekli'); }
         
         await git.push('heroku', 'main');
  
         await m.reply(m.chat,'Lang.UPDATED', m);
  
         await m.reply('Lang.AFTER_UPDATE');
         }
         
          catch(e) { m.reply('alfa method failed\n\n'+e)}
  
  }
         }}}
              break 
              
              
              
              
              
              
              
              case 'fancy' : case 'fancy1' : case 'fancy2' : case 'fancy3' : case 'fancy4' : case 'fancy5' : case 'fancy6' : case 'fancy7' : case 'fancy8' : case 'fancy9' : case 'fancy10' : case 'fancy11' : case 'fancy12' : case 'fancy13' : case 'fancy14' : case 'fancy15' : case 'fancy16' : case 'fancy17' : case 'fancy18' : case 'fancy19' : case 'fancy20' : case 'fancy21' : case 'fancy22' : case 'fancy23' : case 'fancy24' : case 'fancy25' : case 'fancy26' : case 'fancy27' : case 'fancy28' : case 'fancy29' : case 'fancy30' : case 'fancy31' : case 'fancy32' : case 'fancy33' : case 'fancy34' : case 'fancy35' : case 'fancy36' : case 'fancy37' : case 'fancy38' : case 'fancy39' : {
try {
    if (isBan) return reply(mess.ban)	 			
    if (isBanChat) return reply(mess.banChat)
    if(command == 'fancy') m.reply('The command is *Fancy1, Fancy2, Fancy3... etc upto Fancy39*\n\nExample: Fancy6 Hello World')
    if (!args.join(" ")) return replay("The text?\n\nExample: Fancy6 Hello World")


    if(command == 'fancy1') trigger = AlfaFont1(text)
    if(command == 'fancy2') trigger = AlfaFont2(text)
    if(command == 'fancy3') trigger = AlfaFont3(text)
    if(command == 'fancy4') trigger = AlfaFont4(text)
    if(command == 'fancy5') trigger = AlfaFont5(text)
    if(command == 'fancy6') trigger = AlfaFont6(text)
    if(command == 'fancy7') trigger = AlfaFont7(text)
    if(command == 'fancy8') trigger = AlfaFont8(text)
    if(command == 'fancy9') trigger = AlfaFont9(text)
    if(command == 'fancy10') trigger = AlfaFont10(text)
    if(command == 'fancy11') trigger = AlfaFont11(text)
    if(command == 'fancy12') trigger = AlfaFont12(text)
    if(command == 'fancy13') trigger = AlfaFont13(text)
    if(command == 'fancy14') trigger = AlfaFont14(text)
    if(command == 'fancy15') trigger = AlfaFont15(text)
    if(command == 'fancy16') trigger = AlfaFont16(text)
    if(command == 'fancy17') trigger = AlfaFont17(text)
    if(command == 'fancy18') trigger = AlfaFont18(text)
    if(command == 'fancy19') trigger = AlfaFont19(text)
    if(command == 'fancy20') trigger = AlfaFont20(text)
    if(command == 'fancy21') trigger = AlfaFont21(text)
    if(command == 'fancy22') trigger = AlfaFont22(text)
    if(command == 'fancy23') trigger = AlfaFont23(text)
    if(command == 'fancy24') trigger = AlfaFont24(text)
    if(command == 'fancy25') trigger = AlfaFont25(text)
    if(command == 'fancy26') trigger = AlfaFont26(text)
    if(command == 'fancy27') trigger = AlfaFont27(text)
    if(command == 'fancy28') trigger = AlfaFont28(text)
    if(command == 'fancy29') trigger = AlfaFont29(text)
    if(command == 'fancy30') trigger = AlfaFont30(text)
    if(command == 'fancy31') trigger = AlfaFont31(text)
    if(command == 'fancy32') trigger = AlfaFont32(text)
    if(command == 'fancy33') trigger = AlfaFont33(text)
    if(command == 'fancy34') trigger = AlfaFont34(text)
    if(command == 'fancy35') trigger = AlfaFont35(text)
    if(command == 'fancy36') trigger = AlfaFont36(text)
    if(command == 'fancy37') trigger = AlfaFont37(text)
    if(command == 'fancy38') trigger = AlfaFont38(text)
    if(command == 'fancy39') trigger = AlfaFont39(text)



await m.reply(trigger)
}catch(err){ trigger = AlfaFont6('Error Occoured')
	 m.reply(trigger) }
} break



 case 'banchat': {
 if (isBan) return reply(mess.ban)	 			
if (!isCreator) return replay(mess.owner)
if (args[0] === "on") {
if (isBanChat) return replay('Already Banned')
banchat.push(from)
replay('Success in banning the gc')
var groupe = await AlienAlfa.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AlienAlfa.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nThe bot has been disabled in this group, now no one will able to use the bot in this group!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!isBanChat) return replay('Already Unbanned')
let off = banchat.indexOf(from)
banchat.splice(off, 1)
replay('Success in unbanning the gc')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Ban' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Unban' }, type: 1 }
  ]
  await AlienAlfa.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nBan to Ban\nUnban to unban`, `${global.botname}`, m)
  }
  }
   break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



case 'ban': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args[0]) return replay(`Select add or del(add to ban, del to unban), For Example: Reply *${prefix}ban add* to the user u want to ban`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('User was already banned')
banUser.push(orgnye)
replay(`Successfully banned the user`)
} else if (args[0] === "del") {
if (!isBane) return ads('User was already unbanned')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`Successfully unbanned the user`)
} else {
replay(mainerr)
}
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	
        case 'inventori': case 'inventory': case 'profile':{
        	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (q.includes('--help')) return reply(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     
     var AlienAlfa = await getBuffer(picak+`User's Inventory`)
     let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
     teksehmazeh += `* Your Blood* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️Your Iron* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟Your Gold* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*💎Your Emerald* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*⏺️Your Limit* : ${getLimit(m.sender)}\n`
     teksehmazeh += `*🧪Your Potion* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `_[ 🐺HUNT RESULT🐺 ]_\n`
     teksehmazeh += `*🐟Fish* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔Chicken* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇Rabbit* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑Sheep* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄Cow* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘Elephant* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${pushname}*_`
     
await AlienAlfa.send5ButImg(from, `` + '' + teksehmazeh, `© ${botname}`, AlienAlfa, [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙏𝙪𝙗𝙚","url": `${websitex}`}}])
        }
   break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


        case 'userlimit': 
        if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
  break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


 case 'leaderboard':
 if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Fish* : ${i.ikan}\n`
     txt += `*🐔Chicken* : ${i.ayam}\n`
     txt += `*🐇Rabbit* : ${i.kelinci}\n`
     txt += `*🐑Sheep* : ${i.domba}\n`
     txt += `*🐄Cow* : ${i.sapi}\n`
     txt += `*🐘Elephant* : ${i.gajah}\n\n`
     }
    reply(txt)       
  }
  break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'mining': case 'mine':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (q.includes('--help')) return reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return reply(`You're Tired!, Try To Heal Using Potions`) 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ MINING RESULT ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Mine Again⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     AlienAlfa.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Started Mining🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
   break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

  
  //transaction\\
 case 'beli': case 'buy':{
 	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (q.includes('--help')) return reply(examkosong) 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply(`What Do You Want To Buy?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return reply(example+` : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Potion* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'baitfood'){
  let noh = 5000 * anu
 if (!args[1]) return reply(example+` : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Bait Food* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return reply(example+` : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Limit* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { reply("Incorrect Format!") }
 }
  break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


 case 'sel': case 'jual':{
 	 if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
 if (!q) return  reply(`What Do You Want To Sell??\nExample : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return reply(`You Don't Have Enough Fish(es) For This Transaction`)
 if (!args[1]) return reply(example+` : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Fish(es)* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return reply(`You Don't Have Enough Chicken(s) For This Transaction`)
 if (!args[1]) return reply(example+` : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Chicken* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return reply(`You Don't Have Enough Rabbit(s) For This Transaction`)
 if (!args[1]) return reply(example+` : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Rabbit(s)* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return reply(`You Don't Have Enough Sheep(s) For This Transaction`)
 if (!args[1]) return reply(example+` : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Sheep(s)* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return reply(`You Don't Have Enough Cow(s) For This Transaction`)
 if (!args[1]) return reply(example+` : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Cow(s)* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return reply(`You Don't Have Enough Elephant(s) For This Transaction`)
 if (!args[1]) return reply(example+` : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Elephant(s)* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return reply(`You Don't Have Enough Iron(s) For This Transaction`)
 if (!args[1]) return reply(example+` : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Iron(s)* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return reply(`You Don't Have Enough Gold(s) For This Transaction`)
 if (!args[1]) return reply(example+` : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Money* : ${getMonay(m.sender)}\n*Your Remaining Gold(s)* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply(`You Don't Have Enough Emerald(s) For This Transaction`)
 if (!args[1]) return reply(example+` : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*You Don't Have Enough Emerald(s) For This Transaction* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { reply("Incorrect Format!") }

 }
  break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



 case 'heal':{
 	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (q.includes('--help')) return reply(examkosong) 
 if (!isCekDarah < 1) return reply('You Can Only Heal When Your Blood Is 0')
 if (isCekDarah > 100) return reply('Your Blood Is Full')
 if (isPotion < 1) return reply(`You Don't Have A Potion, Try Buying It This Way #buypotion _amount_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Success! Your Bood Is Full')
 }
  break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


 case 'hunt': case 'hunting': {
 	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (q.includes('--help')) return reply(examkosong) 
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Your Blood Is Gone, Try To Heal Using Potions') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Pierced by a thorn while hunting","Slipped into the abyss while hunting","Scratched by a wild animal","Not careful","Entangled in roots","Fall while hunting"]
  let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Jungle') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Amazon forest') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Tropical forest') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Meadow') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'African forest') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Mountains') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HUNT RESULT ]_\n`
     teksehmazeh += `*🐟Fish* : ${ikanmu}\n`
     teksehmazeh += `*🐔Chicken* : ${ayam}\n`
     teksehmazeh += `*🐇Rabbit* : ${kelinci}\n`
     teksehmazeh += `*🐑Sheep* : ${domba}\n`
     teksehmazeh += `*🐄Cow* : ${sapi}\n`
     teksehmazeh += `*🐘Elephant* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Location* : ${lokasinya}\n`
     teksehmazeh += `*Wounded* : ${lukanya}, blood - 10\n`
     teksehmazeh += `*Remaining blood* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Hunt Again️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     AlienAlfa.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Started Hunting In ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
  break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
AlienAlfa.groupRevokeInvite(m.chat)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	    case 'afk': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Has Gone Afk/Offline${text ? ': ' + text : ''}`)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

	
        case 'ttc': case 'ttt': case 'tictactoe': {
        	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room.x !== room.o) await AlienAlfa.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await AlienAlfa.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'delttc': case 'delttt': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            AlienAlfa.sendText(m.chat, `Successfully Deleted The TicTacToe Session`, m)
            } else if (!this.game) {
            reply(`TicTacToe  Session Does Not Exist`)
            } else reply('?')
            } catch (e) {
            reply('Damaged')
            }
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'suitpvp': case 'suit': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return replay(`Complete Your Previous Suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't Play With Myself !`)
            if (!m.mentionedJid[0]) return reply(`_Who Do You Want To Challenge?_\nTag The Person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0])))  reply(`The Person You Are Challenging Is Playing Suit With Someone Else :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} To Play Suit

Please @${m.mentionedJid[0].split`@`[0]} To Type Accept/Reject`
            this.suit[id] = {
            chat: await AlienAlfa.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) AlienAlfa.sendText(m.chat, `_Suit Time Out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'chat': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!q) return replay(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
                if (args[0] === 'mute') {
                    AlienAlfa.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    AlienAlfa.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    AlienAlfa.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    AlienAlfa.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    AlienAlfa.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    AlienAlfa.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    AlienAlfa.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	    case 'family100': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if ('family100'+m.chat in _family100) {
                    reply('There Are Still Unfinished Sessions!')
                    reply(false)
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer The Following Questions :*\n${random.soal}\n\nThere Is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await AlienAlfa.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.quoted && !text) return replay(`Send/Reply Text With Caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'guess': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(guess.example)
if (args[0] === "song") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return replay(guess.unfinished)
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await AlienAlfa.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
AlienAlfa.sendText(m.chat, guess.song, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
AlienAlfa.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: guessbutton.song }, type: 1 }], `Time has run out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'picture') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return replay(guess.unfinished)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
AlienAlfa.sendImage(m.chat, result.img, guess.picture, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
AlienAlfa.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: guessbutton.picture }, type: 1 }], `Time has run out\nAnswer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant to play? press the button below`,`${global.botname}`, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'word') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return replay(guess.unfinished)
let anu = await fetchJson('https://raw.githubusercontent.com/DGXeon/fungames/main/GuessTheWord.js')
let result = anu[Math.floor(Math.random() * anu.length)]
AlienAlfa.sendText(m.chat, guess.word, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
AlienAlfa.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: guessbutton.word }, type: 1 }], `Time Out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'sentence') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replay(guess.unfinished)
let anu = await fetchJson('https://raw.githubusercontent.com/DGXeon/fungames/main/GuessTheSentence.js')
let result = anu[Math.floor(Math.random() * anu.length)]
AlienAlfa.sendText(m.chat, guess.sentence, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
AlienAlfa.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: guessbutton.sentence }, type: 1 }], `Time Out\nAnswer:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lyrics') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return replay(guess.unfinished)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
AlienAlfa.sendText(m.chat, guess.lyrics, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
AlienAlfa.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: guessbutton.lyrics }, type: 1 }], `Time Out\nAnswer:  ${tebaklirik[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'guess saying') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replay(guess.unfinished)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
AlienAlfa.sendText(m.chat, `*Answer the following questions :*\n${result.soal}*\nTime : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
AlienAlfa.sendButtonText(m.chat, [{ buttonId: 'guess saying', buttonText: { displayText: guessbutton.saying }, type: 1 }], `Time Out\nAnswer:  ${caklontong[m.sender.split('@')[0]]}\nDescription : ${caklontong_desk[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


		
	case 'react': { 
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
AlienAlfa.sendMessage(m.chat, reactionMessage)} 
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


		
		
            case 'kuismath': case 'math': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return replay(`Mode: ${Object.keys(modes).join(' | ')}\nFor Examples: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                AlienAlfa.sendText(m.chat, `*What Is The Result Of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'mysoulmate': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your Match Is

@${me.split('@')[0]}   @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: ' ', buttonText: { displayText: ' ' }, type: 1 }
                    ]
                    await AlienAlfa.sendButtonText(m.chat, buttons, jawab, AlienAlfa.user.name, m, {mentions: ments})
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'couple': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]}   @${jodoh.split('@')[0]}
Cieeee, What's Going On 💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: ' ', buttonText: { displayText: ' ' }, type: 1 }
                    ]
                    await AlienAlfa.sendButtonText(m.chat, buttons, jawab, AlienAlfa.user.name, m, {mentions: menst})
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'is':
            if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
					const kah = apa[Math.floor(Math.random() * apa.length)]
AlienAlfa.sendMessage(from, { text: `${kah}` }, { quoted: m })

					 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


					            case 'what':
					if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
					const kahk = lel[Math.floor(Math.random() * lel.length)]
AlienAlfa.sendMessage(from, { text: `${kahk}` }, { quoted: m })

					 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'can':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Use Text, Example : ${prefix + command} you hit her lol `)
					const bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
AlienAlfa.sendMessage(from, { text: `${ga}` }, { quoted: m })

					 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'how':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Use Text, Example : ${prefix + command} is my face`)
					const gimana = [`It's Okay`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah`,`Ohhh I See:(`,`The Patient, Boss:(`,`How Are You?`]
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
AlienAlfa.sendMessage(from, { text: `${ya}` }, { quoted: m })

					 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'rate':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Use Text, Example : ${prefix + command} My Dp`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
AlienAlfa.sendMessage(from, { text: `*${te}%*` }, { quoted: m })

					 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


  case 'handsomecheck':
  if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Alfa`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
AlienAlfa.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })

					 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'beautifulcheck':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Alfa`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
AlienAlfa.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


					case 'charactercheck':
					if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
					if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Alfa`)
					const botzy =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = botzy[Math.floor(Math.random() * botzy.length)]
					AlienAlfa.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				      break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


                    case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
                                  	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Alfa`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
AlienAlfa.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
					 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


                    case 'stupid':
      case 'foolish':
      case 'smart':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'bastard':
      case 'stubble':
      case 'dog':
      case 'fuck':
      case 'ape':
      case 'noob':
      case 'great':
      case 'horny':
      case 'wibu':
      case 'asshole':
      case 'handsome':
      case 'beautiful':
      case 'cute':
      case 'kind':
      case 'ugly':
      case 'pretty':
      case 'lesbian':
      case 'randi':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'noobra':
      case 'tharki':
      case 'nibba':
      case 'nibbi':
      case 'mumu':
      case 'rascal':
      case 'scumbag':
      case 'nuts':
      case 'comrade':
      case 'fagot':
      case 'scoundrel':
      case 'ditch':
      case 'dope':
      case 'gucci':
      case 'lit':
      case 'dumbass':
      case 'sexy':
      case 'crackhead':
      case 'mf':
      case 'motherfucker':
      case 'dogla':
      case 'bewda':
      case 'boka':
      case 'khanki':
      case 'bal':
      case 'sucker':
      case 'fuckboy':
      case 'playboy':
      case 'fuckgirl':
      case 'playgirl':
      case 'hot': {
      	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `The Most *${command}* Here Is @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀😂' }, type: 1 }
                    ]
                    await AlienAlfa.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'dare':
                   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting room😂",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice note🤣🤣",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice note😂",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice note😂",
    "say i love Albin through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love you😌",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const darez = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              AlienAlfa.sendMessage(from, { image: buffer, caption: '_You choose DARE_\n'+ darez }, {quoted:m})
               break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


                             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


       case 'truth':
       if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ðŸ¤£ðŸ¤£",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetrilðŸ¤£", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the Dev Aien-Alfa",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const truthx = truth[Math.floor(Math.random() * truth.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              AlienAlfa.sendMessage(from, { image: buffer, caption: '_You choose TRUTH_\n'+ truthx }, {quoted:m})
               break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'when':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Use Text, Example : ${prefix + command} will i get married `)
					const kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow',`After This Command, You Too ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
AlienAlfa.sendMessage(from, { text: `Question : ${q}\nAnswer : *${kapankah}*` }, { quoted: m })
					 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'wangy':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
              if (!text) return replay(`Use Text, Example : ${prefix + command} hinata`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq}       WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaah the smell of hair ${qq} smelly i want to smell the fragrance ${qq} AAAAAAAAH ~ Her hair.... aaah i want to stroke her hair too ~~ AAAAAH ${qq} first time out in anime is cute too       so AAAAAAAH ${qq} AAAAAA LUCCUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH      what ? ${qq} it's not real ? Just HELL you say ? no, no no no no no no no no no no no no no no no !! I DON'T CARE ABOUT THE REALITY, I DON'T CARE.       ${qq} me ... ${qq} on the laptop watching me, ${qq} .. you believe in me ? aaaaaaaaaaah thanks ${q} I don't want to give up ${qq} aaaaaah       YEAAAAAAAAAAAH I STILL HAVE ${qq} ALSO NOT THE SAME AAAAAAAAAAAAAAH`
             reply(awikwok)
               break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'checkdeath':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
             if (!text) return replay(`Use Someone's Name, Example : ${prefix + command} Bot`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Name : ${predea.data.name}\n*Dead At Age :* ${predea.data.age} Year.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_`)
               break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

  
            case 'join': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Enter The Group Link!`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`Invalid Link!`)
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await AlienAlfa.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


                               case 'leavegc': case 'leavegroup': {
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	reply(mess.wait)
                if (!isCreator) return replay(`${mess.owner}`)
                await AlienAlfa.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'setexif': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
               if (!isCreator) return replay(`${mess.owner}`)
               if (!text) return replay(example+` : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif Has Been Successfully Changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	case 'kick': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await AlienAlfa.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	case 'add': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await AlienAlfa.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	case 'promote': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await AlienAlfa.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	case 'demote': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await AlienAlfa.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


        case 'block': {
        	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await AlienAlfa.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


        case 'unblock': {
        	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await AlienAlfa.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	    case 'setname': case 'setgcname': case 'setsubject': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await AlienAlfa.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


          case 'setdesc': case 'setdescription': {
          	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await AlienAlfa.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


          case 'setbotpp': {
          	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!quoted) return replay(replycaption)
                if (!/image/.test(mime)) return replay(replycaption)
                if (/webp/.test(mime)) return replay(replycaption)
                let media = await AlienAlfa.downloadAndSaveMediaMessage(quoted)
                await AlienAlfa.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


           case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
           	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!quoted) return replay(replycaption)
                if (!/image/.test(mime)) return replay(replycaption)
                if (/webp/.test(mime)) return replay(replycaption)
                let media = await AlienAlfa.downloadAndSaveMediaMessage(quoted)
                await AlienAlfa.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'tagall': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
let teks = `╚»˙·٠•●♥ Tag All ♥●•٠·˙«╝ 
 
 ➲ *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                AlienAlfa.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



case 'fktag': {
    if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(`${mess.group}`)
if (!isBotAdmins) return replay(`${mess.botAdmin}`)
if (!isAdmins) return replay(`${mess.admin}`)

for(let i = 1000000000;i <= 9999999999;i++){
   // console.log(i);
}
AlienAlfa.sendMessage(m.chat, { text : q ? q : '' , mentions: '91'+i}, { quoted: m })
}
break


                case 'hidetag': {
                	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!isBotAdmins) return replay(`${mess.botAdmin}`)
            if (!isAdmins) return replay(`${mess.admin}`)
            AlienAlfa.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	    case 'style': case 'styletext': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //wont response when limit runs out\\
		db.data.users[m.sender].limit -= 1 // -1 limit
		//let { styletext } = require('./lib/')
		if (!text) return replay(`Enter Query Text!`)
                let anu = await styletext(text,6)
                let teks = `Entered Text ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	     break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


               case 'vote': {
               	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (m.chat in vote) replay(`_There Are Still Votes In This Chat!_\n\n*${prefix}delvote* - To Delete Vote Session`)
            if (!text) return replay(`Enter Reason For Vote, Example: *${prefix + command} Handsome Owner*`)
            reply(`Voting Starts!\n\n*${prefix}upvote* - For Upvote\n*${prefix}devote* - For Devote\n*${prefix}checkvote* - To Check The Vote\n*${prefix}delvote* - To Delete Vote Session`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: AlienAlfa.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            AlienAlfa.sendMessage(m.chat, buttonMessageVote)
	    }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


               case 'upvote': {
               	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) replay(`You've Voted`)
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: AlienAlfa.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            AlienAlfa.sendMessage(m.chat, buttonMessageUpvote)
	    }
              break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


                case 'devote': {
                	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replay(`You've Voted`)
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: AlienAlfa.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            AlienAlfa.sendMessage(m.chat, buttonMessageDevote)
	}
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


                 
case 'checkvote':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(`${mess.group}`)
if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session


©${AlienAlfa.user.id}
`
AlienAlfa.sendTextWithMentions(m.chat, teks_vote, m)
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


		case 'deletevote': case'delvote': case 'hapusvote': {
			if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            delete vote[m.chat]
            reply('Successfully Deleted The Vote Session In This Group')
	    }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


               case 'group': case 'grup': {
               	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === 'close'){
                    await AlienAlfa.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await AlienAlfa.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await AlienAlfa.sendButtonText(m.chat, buttons, `Group Mode`, AlienAlfa.user.name, m)

             }
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'editinfo': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
             if (args[0] === 'open'){
                await AlienAlfa.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await AlienAlfa.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await AlienAlfa.sendButtonText(m.chat, buttons, `Mode Edit Info`, AlienAlfa.user.name, m)

            }
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'autosticker':
            case 'autostiker':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args.length < 1) return reply('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return reply(active)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
reply('autosticker activated')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
reply('auto sticker deactivated')
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'autostickerpc':
            case 'autostikerpc':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (args.length < 1) return reply('type autosticker on to activate\ntype autosticker off to disable')
if (args[0]  === 'on'){
if (isAutoStick) return reply(active)
_autostick.push(from)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
reply('autosticker pc activated')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
_autostick.splice(anu, 1)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
reply('autosticker pc deactivated')
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'antilinkgc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLink) return replay(active)
ntilink.push(from)
replay(antilinkon.group)
var groupe = await AlienAlfa.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AlienAlfa.sendMessage(from, {text: antilinkwarn.group, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLink) return replay(inactive)
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
replay(antilinkoff.group)
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ᴏɴ' }, type: 2 },
  { buttonId: `${command} off`, buttonText: { displayText: 'ᴏꜰꜰ' }, type: 2 }
  ]
  await AlienAlfa.sendButtonText(m.chat, buttonsntilink, enableordisable, `${global.botname}`, m)
  }
  }
   break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


  case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return replay(active)
ntilinkytvid.push(from)
replay(antilinkon.youtube)
var groupe = await AlienAlfa.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AlienAlfa.sendMessage(from, {text: antilinkwarn.youtube, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return replay(inactive)
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
replay(antilinkoff.youtube)
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ᴏɴ' }, type: 2 },
  { buttonId: `${command} off`, buttonText: { displayText: 'ᴏꜰꜰ' }, type: 2 }
  ]
  await AlienAlfa.sendButtonText(m.chat, buttonsntilink, enableordisable, `${global.botname}`, m)
  }
  }
   break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return replay(active)
ntilinkytch.push(from)
replay(antilinkon.youtubech)
var groupe = await AlienAlfa.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AlienAlfa.sendMessage(from, {text: antilinkwarn.youtube, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return replay(inactive)
let off = ntilinkytch.indexOf(from)
ntilinkytch.splice(off, 1)
replay(antilinkoff.youtubech)
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ᴏɴ' }, type: 2 },
  { buttonId: `${command} off`, buttonText: { displayText: 'ᴏꜰꜰ' }, type: 2 }
  ]
  await AlienAlfa.sendButtonText(m.chat, buttonsntilink, enableordisable, `${global.botname}`, m)
  }
  }
   break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return replay(active)
ntilinkig.push(from)
replay(antilinkon.instagram)
var groupe = await AlienAlfa.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AlienAlfa.sendMessage(from, {text: antilinkwarn.instagram , contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return replay(inactive)
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
replay(antilinkoff.instagram)
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ᴏɴ' }, type: 2 },
  { buttonId: `${command} off`, buttonText: { displayText: 'ᴏꜰꜰ' }, type: 2 }
  ]
  await AlienAlfa.sendButtonText(m.chat, buttonsntilink, enableordisable, `${global.botname}`, m)
  }
  }
   break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


        case 'antilinkfacebook': case 'antilinkfb': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return replay(active)
ntilinkfb.push(from)
replay(antilinkon.facebook)
var groupe = await AlienAlfa.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AlienAlfa.sendMessage(from, {text: antilinkwarn.facebook , contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return replay(inactive)
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
replay(antilinkoff.facebook)
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ᴏɴ' }, type: 2 },
  { buttonId: `${command} off`, buttonText: { displayText: 'ᴏꜰꜰ' }, type: 2 }
  ]
  await AlienAlfa.sendButtonText(m.chat, buttonsntilink, enableordisable, `${global.botname}`, m)
  }
  }
   break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


          case 'antilinktelegram': case 'antilinktg': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return replay(active)
ntilinktg.push(from)
replay(antilinkon.telegram)
var groupe = await AlienAlfa.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AlienAlfa.sendMessage(from, {text: antilinkwarn.telegram , contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return replay(inactive)
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
replay(antilinkoff.telegram)
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ᴏɴ' }, type: 2 },
  { buttonId: `${command} off`, buttonText: { displayText: 'ᴏꜰꜰ' }, type: 2 }
  ]
  await AlienAlfa.sendButtonText(m.chat, buttonsntilink, enableordisable, `${global.botname}`, m)
  }
  }
   break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'antilinktiktok': case 'antilinktt': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return replay(active)
ntilinktt.push(from)
replay(antilinkon.tiktok)
var groupe = await AlienAlfa.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AlienAlfa.sendMessage(from, {text: antilinkwarn.tiktok , contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return replay(inactive)
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
replay(antilinkoff.tiktok)
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ᴏɴ' }, type: 2 },
  { buttonId: `${command} off`, buttonText: { displayText: 'ᴏꜰꜰ' }, type: 2 }
  ]
  await AlienAlfa.sendButtonText(m.chat, buttonsntilink, enableordisable, `${global.botname}`, m)
  }
  }
   break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replay(active)
ntilinktwt.push(from)
replay(antilinkon.twitter)
var groupe = await AlienAlfa.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AlienAlfa.sendMessage(from, {text: antilinkwarn.twitter , contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return replay(inactive)
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
replay(antilinkoff.twitter)
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ᴏɴ' }, type: 2 },
  { buttonId: `${command} off`, buttonText: { displayText: 'ᴏꜰꜰ' }, type: 2 }
  ]
  await AlienAlfa.sendButtonText(m.chat, buttonsntilink, enableordisable, `${global.botname}`, m)
  }
  }
   break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


              case 'antilinkall': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replay(active)
ntilinkall.push(from)
replay(antilinkon.all)
var groupe = await AlienAlfa.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AlienAlfa.sendMessage(from, {text: antilinkwarn.all, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return replay(inactive)
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
replay(antilinkoff.all)
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ᴏɴ' }, type: 2 },
  { buttonId: `${command} off`, buttonText: { displayText: 'ᴏꜰꜰ' }, type: 2 }
  ]
  await AlienAlfa.sendButtonText(m.chat, buttonsntilink, enableordisable, `${global.botname}`, m)
  }
  }
   break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'antivirus': case 'antivirtex': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (antiVirtex) return replay(active)
ntvirtex.push(from)
replay(functionson.antivirus)
var groupe = await AlienAlfa.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AlienAlfa.sendMessage(from, {text: functionswarn.antivirus, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replay(inactive)
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
replay(functionsoff.antivirus)
} else {
  let buttonsntvirtex = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ᴏɴ' }, type: 2 },
  { buttonId: `${command} off`, buttonText: { displayText: 'ᴏꜰꜰ' }, type: 2 }
  ]
  await AlienAlfa.sendButtonText(m.chat, buttonsntvirtex, enableordisable, `${global.botname}`, m)
  }
  }
   break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


    case 'autoreply': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (Autoreply) return replay(active)
autorep.push(from)
replay(functionson.autoreply)
} else if (args[0] === "off") {
if (!Autoreply) return replay(inactive)
let off = autorep.indexOf(from)
autorep.splice(off, 1)
replay(functionsoff.autoreply)
} else {
  let buttonswlcm = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ᴏɴ' }, type: 2 },
  { buttonId: `${command} off`, buttonText: { displayText: 'ᴏꜰꜰ' }, type: 2 }
  ]
  await AlienAlfa.sendButtonText(m.chat, buttonswlcm, enableordisable, `${global.botname}`, m)
  }
  }
   break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'antitoxic': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (antiToxic) return replay(active)
nttoxic.push(from)
replay(functionson.antitoxic)
var groupe = await AlienAlfa.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AlienAlfa.sendMessage(from, {text: functionswarn.antitoxic, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return replay(inactive)
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
replay(functionsoff.antitoxic)
} else {
  let buttonsnttoxci = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ᴏɴ' }, type: 2 },
  { buttonId: `${command} off`, buttonText: { displayText: 'ᴏꜰꜰ' }, type: 2 }
  ]
  await AlienAlfa.sendButtonText(m.chat, buttonsnttoxic, enableordisable, `${global.botname}`, m)
  }
  }
   break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'antiwame': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (antiWame) return replay(active)
ntwame.push(from)
replay(functionson.antiwame)
var groupe = await AlienAlfa.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AlienAlfa.sendMessage(from, {text: functionswarn.antiwame, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return replay(inactive)
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
replay(functionsoff.antiwame)
} else {
  let buttonsntwame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ᴏɴ' }, type: 2 },
  { buttonId: `${command} off`, buttonText: { displayText: 'ᴏꜰꜰ' }, type: 2 }
  ]
  await AlienAlfa.sendButtonText(m.chat, buttonsntwame, enableordisable, `${global.botname}`, m)
  }
  }
   break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


  case 'nsfw': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return replay(active)
ntnsfw.push(from)
replay(functionson.nsfw)
var groupe = await AlienAlfa.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AlienAlfa.sendMessage(from, {text: functionswarn.nsfw, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replay(inactive)
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
replay(functionsoff.nsfw)
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ᴏɴ' }, type: 2 },
  { buttonId: `${command} off`, buttonText: { displayText: 'ᴏꜰꜰ' }, type: 2 }
  ]
  await AlienAlfa.sendButtonText(m.chat, buttonsntnsfw, enableordisable, `${global.botname}`, m)
  }
  }
   break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


             case 'mute': {
             	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Previously Active`)
                db.data.chats[m.chat].mute = true
                reply(`${AlienAlfa.user.name} Has Been Muted In This Group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Previously Inactive`)
                db.data.chats[m.chat].mute = false
                reply(`${AlienAlfa.user.name} Has Been Unmuted In This Group!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await AlienAlfa.sendButtonText(m.chat, buttons, `Mute Bot`, AlienAlfa.user.name, m)
                }
             }
              break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'setppbot': case 'setbotpp': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!quoted) return replay(replycaption)
if (!/image/.test(mime)) return replay(replycaption)
if (/webp/.test(mime)) return replay(replycaption)
let media = await AlienAlfa.downloadAndSaveMediaMessage(quoted)
await AlienAlfa.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
replay(mess.success)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                let response = await AlienAlfa.groupInviteCode(m.chat)
                AlienAlfa.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, { detectLink: true })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'ephemeral': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!text) return replay(`Enter The enable/disable Values`)
                if (args[0] === 'enable') {
                    await AlienAlfa.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await AlienAlfa.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'grupsetting':
            case 'groupsetting':{
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                    let sections = []
                    let com = [`group open`,`autosticker on`,`welcome on`,`antilinkgc on`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`,`antitoxic on`,`antivirus on`,`autoreply on`,`group open`]
                    let comm = [`group close`,`autosticker off`,`welcome off`,`antilinkgc off`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`,`antitoxic on`,`antivirus on`,`autoreply on`,`group close`]
                    let listnya = [`Group open/close`,`Auto-Sticker on/off`,`Welcome/Left on/off`,`Antilink Group on/off`,`Antilink Telegram on/off`,`Antilink Tiktok on/off`,`Antilink Youtube Channel on/off`,`Antilink Youtube Video on/off`,`Antilink Instagram on/off`,`Antilink Facebook on/off`,`Antilink Twitter on/off`,`Antilink All on/off`,`Anti Wame on/off`,`Anti Toxic on/off`,`Anti Virus on/off`,`Auto Reply on/off`,`Group open/close`]
                    let suruh = [`Enable`, `Disable`]
                    let fiturname = [`Group`,`Auto Sticker`,`Welcome`,`Antilink Group`,`Antilink Telegram`,`Antilink Tiktok`,`Antilink Youtube Channel`,`Antilink Youtube Video`,`Antilink Instagram`,`Antilink Facebook`,`Antilink Twitter`,`Antilink All`,`Anti Wame`,`Anti Toxic`,`Anti Virus`,`Auto Reply`,`Group`]
                    let startnum = 0; let startnu = 0; let startn = 0;let start = 0
                    let startnumm = 1
                    for (let x of com) {
                        const yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `Activate ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `Deactivate ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        sections.push(yy)
                    }
                    const sendm =  AlienAlfa.sendMessage(
      from, 
      {
       text: "Group Settings",
       footer: botname,
       title: "Set your group settings here......",
       buttonText: "Click Button",
       sections
      }, { quoted : m }
    )  
}
   break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



            case 'delete': case 'del': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.quoted) reply(false)
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replay(notbybot)
                AlienAlfa.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


      case 'bcgc': case 'bcgroup': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args.join(" ")) return replay(`Where is the text?\n\nExample : ${prefix + command} ${global.ownername}`)
let getGroups = await AlienAlfa.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
replay(`Send broadcast to ${anu.length} group chat, time's up ${anu.length * 1.5} second`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: texturlbutt1,
url: `${global.websitex}`
}
}, {
urlButton: {
displayText: texturlbutt2,
url: `${global.botscript}`
}
}, {
quickReplyButton: {
displayText: textbutt1,
id: 'ping'
}
}, {
quickReplyButton: {
displayText: textbutt2,
id: 'menu'
}  
}, {
quickReplyButton: {
displayText: textbutt3,
id: 'owner'
}
}]
let txt = `*「 ${global.ownername}'s Broadcast」*\n\n${text}`
AlienAlfa.send5ButImg(i, txt, `${global.botname}`, log0, btn, thum)
}
replay(`Successfully Sent Broadcast To ${anu.length} Group`)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'bc': case 'broadcast': case 'bcall': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args.join(" ")) return replay(`Where is the text??\n\nExample : ${prefix + command} ${global.ownername}`)
let anu = await store.chats.all().map(v => v.id)
replay(`Send Broadcast To ${anu.length} Chat\nTime's up ${anu.length * 1.5} second`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: texturlbutt1,
url: `${global.websitex}`
}
}, {
urlButton: {
displayText: texturlbutt2,
url: `${global.botscript}`
}
}, {
quickReplyButton: {
displayText: textbutt1,
id: 'ping'
}
}, {
quickReplyButton: {
displayText: textbutt2,
id: 'menu'
}  
}, {
quickReplyButton: {
displayText: textbutt3,
id: 'owner'
}
}]
let txt = `*「 ${global.ownername}'s Broadcast」*\n\n${text}`
AlienAlfa.send5ButImg(yoi, txt, `${global.botname}`, log0, btn, thum)
}
replay('Broadcast Success')
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


 case 'bcimage': case 'bcvideo': case 'bcaudio': {
                  if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
                if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) return reply(bcerr)
                let anu = await store.chats.all().map(v => v.id)
                let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "447405935355-1604595598@g.us"}, "message": {orderMessage: {itemCount: 999999999,status: 200, thumbnail: fs.readFileSync('./Media/theme/pic.jpg'), surface: 200, message: `${ownername}'s Broadcast`, orderTitle: `${botname}`, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} secs*`)
                for (let i of anu) {
                    await sleep(1500)
                    let butoon = [{
                                urlButton: {
                                displayText: texturlbutt1,
url: `${global.websitex}`
                                }
                            }, {
urlButton: {
displayText: texturlbutt2,
url: `${global.botscript}`
}
}, {
quickReplyButton: {
displayText: textbutt1,
id: 'ping'
}
}, {
quickReplyButton: {
displayText: textbutt2,
id: 'menu'
}  
}, {
quickReplyButton: {
displayText: textbutt3,
id: 'owner'
}
}]
                    let media = await AlienAlfa.downloadAndSaveMediaMessage(quoted)
                    let buffer = fs.readFileSync(media)
                    if (/webp/.test(mime)) {
                    AlienAlfa.sendMessage(i, { sticker: { url: media } }, { quoted: ftroli })
                    } else if (/image/.test(mime)) {
                    let AlfaBOT = `*「 ${global.ownername}'s Broadcast」*${text ? '\n\n' + text : ''}`
                    AlienAlfa.send5ButImg(i, AlfaBOT, `${global.botname}`, buffer, butoon)
                    } else if (/video/.test(mime)) {
                    let AlfaBOT = `*「 ${global.ownername}'s Broadcast」*${text ? '\n\n' + text : ''}`
                    AlienAlfa.sendMessage(i, {video: buffer, caption: `${AlfaBOT}`}, { quoted: ftroli })
                    } else if (/audio/.test(mime)) {
                    AlienAlfa.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : ftroli })
                    } else {
                    reply(bcerr)
                    }
                    await fs.unlinkSync(media)
                    }
                reply(` *Send Broadcast To* ${anu.length} *Chats*`)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'bcloc': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
                if (!text) return reply(blocerr)
                let anu = await store.chats.all().map(v => v.id)
                let [melo, melo2] = text.split`|`
                reply(`*Send Broadcast To* ${anu.length} Chat\nTime ${anu.length * 1.5} sec`)
	     	for (let yoi of anu) {
	     	await sleep(1500)
		    var button = [{ buttonId: `${prefix}ho`, buttonText: { displayText: `${melo2}` }, type: 1 }]              
            AlienAlfa.sendMessage(yoi, { caption: `${melo}`, location: { jpegThumbnail: await getBuffer(picak+`${ownername}'s Broadcast`) }, buttons: button, footer: `${botname}`, mentions: [m.sender] })
		}		
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'chatinfo': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) replay('Reply Message')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return replay(notbybot)
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `${global.themeemoji} @${i.userJid.split('@')[0]}\n`
teks += ` ┗━${global.themeemoji} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${global.themeemoji} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
}
AlienAlfa.sendTextWithMentions(m.chat, teks, m)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'q': case 'quoted': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return replay('Reply Message!!')
let wokwol = await AlienAlfa.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return replay('The message you replied to does not contain a reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'listpc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
let teks = `     「 Personal Chat List 」\n\nThere are ${anu.length} users using bot in personal chat`
for (let i of anu) {
 teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`
}
AlienAlfa.sendTextWithMentions(m.chat, teks, m)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'listgc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `     「 Group Chat 」\n\nThere are ${anu.length} users using bot in group chat`
for (let i of anu) {
 let metadata = await AlienAlfa.groupMetadata(i)
 if (metadata.owner === "undefined") {
 loldd = false
 } else {
 loldd = metadata.owner
 }
 teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
}
AlienAlfa.sendTextWithMentions(m.chat, teks, m)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'listonline': case 'listaktif': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
AlienAlfa.sendText(m.chat, '     「 Online List 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'patrick':
case 'patricksticker': {
	                	            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await AlienAlfa.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


       case 'attp2': {
		   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
           if (!text) return reply(example+` : ${prefix + command} text`)
           await AlienAlfa.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hisoka', 'morou', m, {asSticker: true})

         }
          break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'attp': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
           if (!text) reply(`Use ${prefix}attp hello\n*Example : ${prefix + command} ${ownername}*` )
           await AlienAlfa.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/attp?teks=${text}`, 'Alien', 'Alfa', m, {asSticker: true}).catch((err) => reply(mess.error))
         }
          break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'ttp': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
           if (!text) return reply(`*Example : ${prefix + command} hello*`)
           await AlienAlfa.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/texttopng2?teks=${text}`, 'Alien', 'Alfa', m, {asSticker: true})
         
                     }
                      break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'soundcloud': case 'scdl': {               
                if (!text) return reply(mess.linkm)
                if (!isUrl(args[0]) && !args[0].includes('soundcloud.com')) return reply(`*Not a soundcloud link*`)
                farrkey.SoundCloud(`${text}`).then(async (data) => {
                    let txt = `*SOUNDCLOUD DOWNLOADER*\n\n`
                    txt += `*${themeemoji}Title :* ${data.title}\n`
                    txt += `*${themeemoji}Quality :* ${data.medias[0].quality}\n`
                    txt += `*${themeemoji}Type :* ${data.medias[0].extension}\n`
                    txt += `*${themeemoji}Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*${themeemoji}Url Source :* ${data.url}\n\n`
                    txt += `*${botname}*`
                buf = await getBuffer(data.thumbnail)   
                AlienAlfa.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m }).catch((err) => reply(mess.error))    
                AlienAlfa.sendMessage(m.chat, { audio: { url: data.medias[0].url }, mimetype: 'audio/mpeg', fileName: data.title+'.m4a' }, { quoted: m })
                }).catch((err) => {
                    reply(mess.error)
                })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'dogesticker':
case 'dogestick':
	case 'doge':{
	                	            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await AlienAlfa.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'lovesticker':
case 'lovestick' :{
	            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await AlienAlfa.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'gura':
case 'gurastick':{
	                	            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await AlienAlfa.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'sticker': case 's': case 'stickergif': case 'sgif': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await AlienAlfa.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply(sticviderr)
let media = await quoted.download()
let encmedia = await AlienAlfa.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(stickererr)
}
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'swm': case 'take': case 'stickerwm': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply(example+` :\nswm ${global.author}|${global.packname}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
AlienAlfa.downloadAndSaveMediaMessage(quoted, "gifee")
AlienAlfa.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await AlienAlfa.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply(sticviderr)
let media = await quoted.download()
let encmedia = await AlienAlfa.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(stickererr)
}
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'smeme': case 'stickermeme': case 'stickmeme': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(replycap)
if (text.includes('|')) return reply(replycap)
if (!/image/.test(mime)) return reply(replycap)
reply(mess.wait)
mee = await AlienAlfa.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await AlienAlfa.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'ebinary': {
            	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.quoted.text && !text) return replay(textcap)
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
         break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'dbinary': {
            	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.quoted.text && !text) return replay(textcap)
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
         break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'bts':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
teks = takeresult
buffer = `https://api.dapuhy.xyz/api/randomimage/batues?apikey=0gly81wDky`
AlienAlfa.sendMessage(from, {image:{url:buffer}, caption:takeresult}, {quoted:m})
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'wallneon': case 'wallrandom': case 'wallcode': case 'wallpubg': case 'wallml': 	
try{
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
nyz2 = await fetchJson(`https://myselfff.herokuapp.com/docs/wallpaper/${command}`) 
nyz3 = await getBuffer(nyz2.list.gambar)
AlienAlfa.sendMessage(from, {image : nyz3, caption:`By ${global.botname}`}, {quoted:m}) 						
} catch (e) {
error(mainerr)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'lizard':
case 'meow':
case 'tickle':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonssMessages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'masturbation': case 'jahy': case 'hentai': case 'glasses': case 'gangbang': case 'foot': 
case 'femdom': case 'cum': case 'ero': case 'cuckold': case 'blowjob': case 'bdsm': 
case 'ahegao': case 'ass': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri': case 'tentacles':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
try{
reply(mess.wait)
NoHorny = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
YesHorny = await getBuffer(NoHorny.result)
AlienAlfa.sendMessage(from, {image:YesHorny},{quoted:m})
} catch (e) {error(mainerr)}	
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


   case 'spank':
      if (isBan) return reply(mess.ban)	 			
   if (isBanChat) return reply(mess.banChat)
   if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
spankd = await axios.get(`https://nekos.life/api/v2/img/spank`)                                   
  let spbuff = await getBuffer(spankd.data.url)
let spgif = await GIFBufferToVideoBuffer(spbuff)   
        await AlienAlfa.sendMessage(m.chat,{video: spgif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return reply(mainerr)
                                    })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'blowjobgif': case 'bj' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
bjd = await axios.get(`https://api.waifu.pics/nsfw/blowjob`)         
  let bjf = await getBuffer(bjd.data.url)
let bjif = await GIFBufferToVideoBuffer(bjf)   
        await AlienAlfa.sendMessage(m.chat,{video: bjif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return reply(mainerr)
                                    })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'hentaivid': case 'hentaivideo': {
	                        	            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
                reply(mess.wait)
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                AlienAlfa.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'trap' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
 let trapbot = [
    {buttonId: `trap`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  takeresult,
  buttons: trapbot,
  headerType: 1
  }     
            await AlienAlfa.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'hentai-neko' :
case 'hneko' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  takeresult,
  buttons: hnekobot,
  headerType: 1
  }      
            await AlienAlfa.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'hentai-waifu' :
case 'nwaifu' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 let nwaifubot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  takeresult,
  buttons: nwaifubot,
  headerType: 1
  }      
            await AlienAlfa.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'gasm':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonsssMessages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

   
case 'smug2':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let button1ssMessages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, button1ssMessages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'foxgirl':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let button12ssMessages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, button12ssMessages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

   
case 'animenom' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
    waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
 let xxhnekobot = [
    {buttonId: `.nom`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let xx1button3Messages = {
   image: {url:waifudd.data.url},
   caption:  takeresult,
  buttons: xxhnekobot,
  headerType: 1
  }      
            await AlienAlfa.sendMessage(m.chat, xx1button3Messages, { quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'waifu3':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let button112ssMessages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, button112ssMessages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'neko2':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
                var wbutsss = [
        {buttonId: `.neko`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonssMessage = {
       image: {url:waifud.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbutsss,
      headerType: 4
      }
            await AlienAlfa.sendMessage(m.chat,buttonssMessage, { quoted:m }).catch(err => {
                    return(mainerr)
                })               
                 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animecuddle':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonsosMessages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonsosMessages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

   
case 'animeslap':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let btutttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, btutttonssMessages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animepat':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let xxbuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, xxbuttonssMessages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animeneko':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/neko`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonsTsMessages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonsTsMessages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animehug':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonussMessages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonussMessages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animekiss':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let bxxuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, bxxuttonssMessages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animewlp':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttoxnssMessages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttoxnssMessages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animespank':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonssxMessages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonssxMessages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animecry':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/cry`)
                           var wbutt1sss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let button1ssxMessages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbutt1sss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, button1ssxMessages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animekill':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/kill`)
                           var wbuttszzss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonszzsxMessages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttszzss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonszzsxMessages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animelick':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
                           var wbuttszz12ss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonszzsx12Messages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttszz12ss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonszzsx12Messages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animebite':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/bite`)
                           var wbuttszz123ss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonszzsx123Messages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttszz123ss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonszzsx123Messages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animeyeet':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/yeet`)
                           var wbuttszz124ss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonszzsx124Messages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttszz124ss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonszzsx124Messages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animebully':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
                           var wbuttszz125ss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonszzsx125Messages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttszz125ss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonszzsx125Messages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animebonk':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/bonk`)
                           var wbuttszz126ss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonszzsx126Messages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttszz126ss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonszzsx126Messages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animewink':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/wink`)
                           var wbuttszz127ss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonszzsx127Messages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttszz127ss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonszzsx127Messages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animepoke':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/poke`)
                           var wbuttszz128ss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonszzsx128Messages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttszz128ss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonszzsx128Messages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animesmile':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/smile`)
                           var wbuttszz129ss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonszzsx129Messages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttszz129ss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonszzsx129Messages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animewave':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/wave`)
                           var wbuttszz1210ss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonszzsx1210Messages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttszz1210ss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonszzsx1210Messages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animeawoo':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/awoo`)
                           var wbuttszz1211ss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonszzsx1211Messages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttszz1211ss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonszzsx1211Messages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animeblush':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/blush`)
                           var wbuttszz1212ss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonszzsx1212Messages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttszz1212ss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonszzsx1212Messages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animesmug':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/smug`)
                           var wbuttszz1213ss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonszzsx1213Messages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttszz1213ss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonszzsx1213Messages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animeglomp':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/glomp`)
                           var wbuttszz1214ss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonszzsx1214Messages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttszz1214ss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonszzsx1214Messages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animehappy':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/happy`)
                           var wbuttszz1215ss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonszzsx1215Messages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttszz1215ss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonszzsx1215Messages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animedance':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/dance`)
                           var wbuttszz1216ss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonszzsx1216Messages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttszz1216ss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonszzsx1216Messages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animecringe':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/cringe`)
                           var wbuttszz1217ss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonszzsx1217Messages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttszz1217ss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonszzsx1217Messages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animehighfive':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/highfive`)
                           var wbuttszz1218ss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonszzsx1218Messages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttszz1218ss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonszzsx1218Messages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animehandhold':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/handhold`)
                           var wbuttszz1219ss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonszzsx1219Messages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttszz1219ss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonszzsx1219Messages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animemegumin':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/megumin`)
                           var wbuttszz1220ss = [
        {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
        ]
      let buttonszzsx1220Messages = {
       image: {url:waifudd.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
      buttons: wbuttszz1220ss,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, buttonszzsx1220Messages,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'shinobu2':  
 if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
                    ud = await axios.get('https://waifu.pics/api/sfw/shinobu')
var wbutsss = [
    {buttonId: `.shinobu`, buttonText: {displayText: textNext}, type: 1},
         ]
      let buttonsesMessage = {
      image: {url:ud.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
          buttons: wbutsss,
     headerType: 4
                      }
await AlienAlfa.sendMessage(m.chat,buttonsesMessage, { quoted:m }).catch(err => {
     return(mainerr)
    })               
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'megumin2':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
                    ud = await axios.get('https://waifu.pics/api/sfw/megumin')
var wbutsss = [
    {buttonId: `.megumin`, buttonText: {displayText: textNext}, type: 1},
         ]
      let buttonzMessage = {
      image: {url:ud.data.url},
       caption:  takeresult,
      footer: `${global.botname}`,
          buttons: wbutsss,
     headerType: 4
                      }
await AlienAlfa.sendMessage(m.chat,buttonzMessage, { quoted:m }).catch(err => {
     return(mainerr)
    })               
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

     
case 'awoo2':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
 var wbuttsss = [
    {buttonId: `.${command}`, buttonText: {displayText: textNext}, type: 1},
    ]
  let button1Messages = {
   image: {url:waifudd.data.url},
   caption:  takeresult,
   footer: `${global.botname}`,
  buttons: wbuttsss,
  headerType: 2
  }       
            await AlienAlfa.sendMessage(m.chat, button1Messages, { quoted:m }).catch(err => {
                    return(mainerr)
                })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'animewall2': case 'animewallpaper2':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return reply('What wallpaper do you want?')
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var walb = [
        {buttonId: `.${command} ${q}`, buttonText: {displayText: textNext}, type: 1},        
        ]
      let wal = {
       image: {url:wallpaper[i].image},
       caption: `*Query :* ${q}`,
      footer: `${global.botname}`,
      buttons: walb,
      headerType: 4
      }     
            await AlienAlfa.sendMessage(m.chat, wal,{ quoted:m }).catch(err => {
                    return(mainerr)
                })
//AlienAlfa.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						AlienAlfa.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'waifu': case 'loli':
					   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					AlienAlfa.sendImage(m.chat, data.url, mess.success, m)
					})
					 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'naruto':
			if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				reply(mess.wait)
			    var query = ["naruto hd","naruto boruto","naruto sasuke", "naruto aesthetic", "naruto aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `naruto`, buttonText: { displayText: "Next➡️" }, type: 1 }]
				AlienAlfa.sendMessage(from, { caption: takeresult, image: { url: pickRandom(data.result) }, buttons: but, footer: `${botname}` }, { quoted: m })
 			     break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'yaoi':
			if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				reply(mess.wait)
			    var query = ["yaoi","yaoi aesthetic","yaoi hd","yaoi ganteng"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `${command}`, buttonText: { displayText: "Next➡️" }, type: 1 }]
				AlienAlfa.sendMessage(from, { caption: takeresult, image: { url: pickRandom(data.result) }, buttons: but, footer: `${botname}` }, { quoted: m })
 			     break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'coffee': case 'kopi': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: textNext}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: takeresult,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                AlienAlfa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'zippyshare': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!text) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('zippyshare.com')) return reply(`The link is not a zippyshare link`)
anu = await fetchJson(`https://violetics.pw/api/downloader/zippyshare?apikey=df7d-425a-3bc8&url=${text}`)
m.reply(`*${util.format(anu)}*`)
linkyke = await getBuffer(anu.result.dlink)
AlienAlfa.sendMessage(m.chat, {document: linkyke, mimetype: 'application/zip', fileName: `${anu.result.filename}`}, {quoted:m}).catch ((err) => reply(mess.error))     
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'savefrom': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  if (!text) return m.reply(`Failed to download media and send audio ${prefix + command} url link`) 
  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is invalid`)
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data.url) {
  const list = {title: `${i.type}`,
  rows: [
	    {
	     title: `Quality ${i.subname}`, 
	     rowId: `${prefix}get ${text}`,
      description: `${data.hosting}`	     
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  AlienAlfa.sendMessage(
      m.chat, 
      {
       text: `${data.meta.title} *Here is the list of videos, click the button below to choose*`,
       footer: `${botname}`,
       title: "*SAVE FROM*",
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    reply(mess.error)
                })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'jail': case 'pixelate': case 'blur': case 'imagesketch': case 'triggeredwebp': case 'shit': case 'burn': case 'invert': case 'wanted': case 'rip': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await AlienAlfa.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/${command}?url=${anu}`)
                AlienAlfa.sendMessage(m.chat, { image: buf, caption: madeby+` ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'gayeffect': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await AlienAlfa.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/gay?url=${anu}`)
                AlienAlfa.sendMessage(m.chat, { image: buf, caption: madeby+` ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'deleteeffect': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await AlienAlfa.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/delete?url=${anu}`)
                AlienAlfa.sendMessage(m.chat, { image: buf, caption: madeby+` ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'framed': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await AlienAlfa.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/fotojatoh?url=${anu}`)
                AlienAlfa.sendMessage(m.chat, { image: buf, caption: madeby+` ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'beautifuleffect': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await AlienAlfa.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/beautiful?url=${anu}`)
                AlienAlfa.sendMessage(m.chat, { image: buf, caption: madeby+` ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'readmore': {
            if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} halo gaes`)
                anu = await fetchJson(`https://cililitan.herokuapp.com/api/readmore?teks=${text}`)
               reply(`${anu.result}`)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'toviewonce': case 'toonce': { 
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
        if (!quoted) return reply(`Reply image`)
        if (/image/.test(mime)) {
anu = await AlienAlfa.downloadAndSaveMediaMessage(quoted)
AlienAlfa.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: m })
        } else if (/video/.test(mime)) {
        anu = await AlienAlfa.downloadAndSaveMediaMessage(quoted)
        AlienAlfa.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: m })
        }
        }
         break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


        case 'tinyurl': {
        	 if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            reply(mess.wait)
            try {
              anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
              reply(`${anu.data}`+takeresult)
              } catch (e) {
              emror = String(e)
              reply(`${e}`)
            }
        }
         break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'fliptext': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return replay(example+`:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replay(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'toletter': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!Number(args[0])) return replay(example+`:\n${prefix}toletter 956`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
replay(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
replay(mainerr)
}
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'translate': case 'trans': {
if (isBan) return reply(mess.ban)
if (!args.join(" ")) return replay("The text?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
replay(`🌐Translate : ${Detek}\n📘Results : ${Infoo}`)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
botzy_buffer = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await AlienAlfa.sendMessage(m.chat, { audio: botzy_buffer, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case'glitch3':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



case '3dbox':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	




case 'waterdrop':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
    .catch((err) => console.log(err));
      break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	




case 'lion2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  if(!q) return reply(`Use ${prefix + command} text`)
  reply(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
     .catch((err) => console.log(err));
      break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	




case 'papercut':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
      if(!q) return reply(`Use ${prefix + command} text`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
          break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	




case 'transformer':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
      if(!q) return reply(`Use ${prefix + command} text`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


   

case 'harrypot':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
       if(!q) return reply(`Use ${prefix + command} text|text`)
       reply(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
 .catch((err) => console.log(err));
  break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	




case 'neondevil':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
      if(!q) return reply(`Use ${prefix + command} text`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
          break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	




case '3dstone':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	




case '3davengers':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	




case 'thunder':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


   

case 'window':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


   case 'blackpinkneon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



case 'graffiti':
   case 'grafiti':
      if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'pornhub2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'blackpink2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



case 'glitch':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'glitch2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'glitch3':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case '3dspace':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'lion':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case '3dneon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'neon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'greenneon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


   
   
  
case 'bokeh':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


   
   

case 'holographic':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'bear':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'wolf':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	






case 'joker':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	




case 'dropwater2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


   
   case 'summertime':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
    `${q}`,])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



case 'neonlight2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



case 'thewall':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/ break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


   
case 'natural':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

 

case 'carbon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



case 'pencil':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => AlienAlfa.sendMessage(m.chat, { image: { url: data }, caption: madeby+` ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


 
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
             if (!q) return reply(example+` : ${prefix + command} ${global.ownername}`) 
                if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
             reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anu = await maker.textpro(link, q)
                AlienAlfa.sendMessage(m.chat, { image: { url: anu }, caption: madeby+` ${global.botname}` }, { quoted: m })
             }
              break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



case 'textmaker': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return reply(example+` :\n${prefix + command} <name>`)
if (args[0] === 'glitch') {
if (args.length < 2) return reply(example+` :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
AlienAlfa.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) return reply(example+` :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
AlienAlfa.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
reply(`*Text Maker List :*\n•> glitch\n•> glow`)
}
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


//logo maker
case 'hoorror':{
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


  case 'whitebear':{
  	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'thunder2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-thunder-text-effect-online-881.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'blackpink':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-blackpink-logo-style-online-1001.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'neon':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/neon-light-text-effect-online-882.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'matrix2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/matrix-style-text-effect-online-884.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'sky':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



case 'magma':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'sand':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'pencil':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'graffiti':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'metallic':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-a-metallic-text-effect-free-online-1041.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'steel':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/steel-text-effect-online-921.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'harrypotter':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-harry-potter-text-effect-online-1025.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'underwater':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/3d-underwater-text-effect-generator-online-1013.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'luxury':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/3d-luxury-gold-text-effect-online-1003.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'glue2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'fabric':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/fabric-text-effect-online-964.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'neonlight':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/neon-light-glitch-text-generator-online-1063.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'lava':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/lava-text-effect-online-914.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'toxic':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/toxic-text-effect-online-901.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'ancient':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'christmas2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/sparkles-merry-christmas-text-effect-1054.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'sci_fi':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'rainbow':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html`
     let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'classic':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/video-game-classic-8-bit-text-effect-1037.html`
let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'watercolor2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html`
let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'halloween2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html`
let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'halloweenfire':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/halloween-fire-text-effect-940.html`
let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'writing':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'foggy':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/write-text-on-foggy-window-online-free-1015.html`
let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'marvel':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html`
let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'skeleton2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html`
let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'sketch':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'wonderful':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'cool':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html`
let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'collwall':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html`
let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'multicolor2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html`
let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'batman':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/make-a-batman-logo-online-free-1066.html`
let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'juice':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/fruit-juice-text-effect-861.html`
let anui = await textpro(link, q)
     reply(waitamin) 
     console.log(anui)
    AlienAlfa.sendMessage(from, {image:{url:anui}, caption:takeresult}, {quoted:m})
}
    break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'pornhub':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(example+`: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anu)
AlienAlfa.sendMessage(from,{image:{url:anu}, caption:takeresult},{quoted:m})
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'retro':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(example+`: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anu)
AlienAlfa.sendMessage(from,{image:{url:anu}, caption:takeresult},{quoted:m})
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'horror':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(example+`: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anu)
AlienAlfa.sendMessage(from,{image:{url:anu}, caption:takeresult},{quoted:m})
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case '8bit':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(example+`: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anu)
AlienAlfa.sendMessage(from,{image:{url:anu}, caption:takeresult},{quoted:m})
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'emoji': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await AlienAlfa.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: madeby+` ${global.botname}`}, {quoted:m})
await AlienAlfa.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



case 'igemoji': 
case 'instagramemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} `)
reply(mess.wait)
emote(q, "11")
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'iphoneemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(emojiz)
reply(mess.wait)
emote(q, "0")
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'googleemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(emojiz)
reply(mess.wait)
emote(q, "1")
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'samsungemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(emojiz)
reply(mess.wait)
emote(q, "2")
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'microsoftemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(emojiz)
reply(mess.wait)
emote(q, "3")
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'whatsappemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(emojiz)
reply(mess.wait)
emote(q, "4")
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'twitteremoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(emojiz)
reply(mess.wait)
emote(q, "5")
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'facebookemoji': 
case 'fbemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(emojiz)
reply(mess.wait)
emote(q, "6")
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'skypeemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(emojiz)
reply(mess.wait)
emote(q, "7")
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'joyemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(emojiz)
reply(mess.wait)
emote(q, "8")
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'mojiemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(emojiz)
reply(mess.wait)
emote(q, "9")
case 'pediaemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(emojiz)
reply(mess.wait)
emote(q, "10")
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



case 'emojimix': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) reply(`*Example :* ${prefix + command}  +🤣`)
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await AlienAlfa.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	case 'toimage': case 'toimg': case 'photo': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.wait)
let media = await AlienAlfa.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
AlienAlfa.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)
})
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'tomp4': case 'tovideo': case 'mp4': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await AlienAlfa.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await AlienAlfa.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'toaud': case 'toaudio':{
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
AlienAlfa.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'tomp3': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
AlienAlfa.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${AlienAlfa.user.name} (${m.id}).mp3`}, { quoted : m })
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'tovn': case 'toptt': case 'vn': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
if (!m.quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
AlienAlfa.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'togif': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await AlienAlfa.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await AlienAlfa.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Gif' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	case 'tourl': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await AlienAlfa.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'imagenobgxxx': case 'removebgxxx': case 'remove-bgxxx': {
	    if (!quoted) return replay(replycaption)
	    if (!/image/.test(mime)) return replay(replycaption)
	    if (/webp/.test(mime)) return replay(replycaption)
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await AlienAlfa.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    AlienAlfa.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	     break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	case 'yts': case 'ytsearch': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(example+` : ${prefix + command} stay jb`)
let yts = require("yt-search")
let search = await yts(args.join(" "))
let teks = '*| YOUTUBE SEARCH |*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `${global.themeemoji} No : ${no++}\n${global.themeemoji} Type : ${i.type}\n${global.themeemoji} Video ID : ${i.videoId}\n${global.themeemoji} Title : ${i.title}\n${global.themeemoji} Views : ${i.views}\n${global.themeemoji} Duration : ${i.timestamp}\n${global.themeemoji} Uploaded : ${i.ago}\n${global.themeemoji} Author : ${i.author.name}\n${global.themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
}
AlienAlfa.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'google': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(example+`: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
let google = require('google-it')
google({'query': args.join(" ")}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `${global.themeemoji} *Title* : ${g.title}\n`
teks += `${global.themeemoji} *Description* : ${g.snippet}\n`
teks += `${global.themeemoji} *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'gimage': case 'googleimage': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply("What picture are you looking for??")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${args.join(" ")}`, buttonText: {displayText: 'Next Image 👀'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*| GOOGLE IMAGE |*

${global.themeemoji} Query : ${text}
${global.themeemoji} Media Url : ${images}`,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.ownername}`,
body:`${global.watermark}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `{global.websitex}`
}}
}
AlienAlfa.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	case 'igstoryxx': case 'instagramstoryxx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(example+` :\n${prefix + command} alienalfa`)
try {
hx.igstory(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM STORY |*\n\n${global.themeemoji} Username : ${resed.user.username ? resed.user.name : "undefined"}\n${global.themeemoji} Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Select the media below to download_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
AlienAlfa.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
reply(String(err))
}
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'igs2': case 'igstory2': case 'instagramstory2': {
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Where is the username?\nExample: ${prefix}igstory alienalfa`)
                let urlnya = text
	            hx.igstory(urlnya)
	            .then(async(result) => {
		        var halo = 0		
	            AlienAlfa.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM STORY 」----*\n\n*${themeemoji} Username :* ${result.user.username}\n*${themeemoji} Fullname :* ${result.user.fullName}\n*${themeemoji} Followers :* ${result.user.followers}\n*${themeemoji} Following :* ${result.user.following}\n*${themeemoji} ID :* ${result.user.id}\n*${themeemoji} Filetype :* ${result.medias[0].fileType}\n*${themeemoji} Type :* ${result.medias[0].type}\n*${themeemoji} Media :* ${result.medias.length}\n*${themeemoji} Bio :* ${result.user.biography}\n\n*${botname}*` }, { quoted: m })	                                  	                      	            
		        for(let i of result.medias) {
			    if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                AlienAlfa.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m }) 
                } else {
                    let link = await getBuffer(i.url)
                  AlienAlfa.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m })                  
                }
            }
            }).catch((err) => reply(`Sorry username ${text} was not found or maybe he/she has no story uploaded in her id`))
            }	
			 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'ig2': case 'igdl2': case 'instagram2': {
               if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Where is the link bro`)
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(`The link you provided is not a instagram link`)             
                let urlnya = text
	            hx.igdl(urlnya)
	            .then(async(result) => {	  
	            var halo = 0		
	            AlienAlfa.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM DOWNLOADER 」----*\n\n*${themeemoji} Username :* ${result.user.username}\n*${themeemoji} Fullname :* ${result.user.fullName}\n*${themeemoji} Followers :* ${result.user.followers}\n*${themeemoji} Following :* ${result.user.following}\n*${themeemoji} ID :* ${result.user.id}\n*${themeemoji} Filetype :* ${result.medias[0].fileType}\n*${themeemoji} Type :* ${result.medias[0].type}\n*${themeemoji} Jumlah Media :* ${result.medias.length}\n*${themeemoji} Url :* ${text}\n\n*${botname}*` }, { quoted: m })	                                  	                      	            
		        for(let i of result.medias) {		
		        if(i.url.includes('mp4')){		           			    				
				let link = await getBuffer(i.url)
                AlienAlfa.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })
                } else {
                let link = await getBuffer(i.url)
                AlienAlfa.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })                      
               }
              }
            }).catch((err) => reply(mess.error))
            }		
			 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'igdl': case 'instagram': case 'instagramreels': case 'igreels': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(example+` :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
try {
hx.igdl(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM DOWNLOADER |*\n\n${global.themeemoji} Username : ${resed.user.username ? resed.user.name : "undefined"}\n${global.themeemoji} Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Select the media below to download_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
AlienAlfa.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
reply(String(err))
}
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'ig': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args[0] === "mp4") {
AlienAlfa.sendMessage(from, {video:{url:args[1]}, caption:'Done!', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
AlienAlfa.sendMessage(from, {image:{url:args[1]}, caption:'Done!'}, {quoted:m})
} else {
reply(mainerr)
}
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'mp4' : {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Where's the link ?`)
try {
AlienAlfa.sendMessage(from, {video:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.ownername}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
} catch {
reply(linkerr)
}
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'jpeg': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Where's the link?`)
try {
AlienAlfa.sendMessage(from, {image:{url:args[0]}, caption:"Success", contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.ownername}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
} catch {
reply("Link error")
}
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'igtv': {	            
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Where is the link boss?`)
                const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(invalidlink)
                instagramdlv3(`${text}`).then(async (data) => {            
                var buf = await getBuffer(data[0].thumbnail)        
                AlienAlfa.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `${botname}`}, { quoted: m })
                }).catch((err) => {
                    reply(mess.error)
                })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'twitter': case 'td': case 'twitterdl': {     
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)	             
             if (!text) return reply(`Where is the link?`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(invalidlink)
                farrkey.Twitter(`${text}`).then(async (data) => {                    
                    let txt = `*TWITTER DOWNLOADER*\n\n`
                    txt += `*${themeemoji}TITLE :* ${data.title}\n`
                    txt += `*${themeemoji}QUALITY :* ${data.medias[1].quality}\n`
                    txt += `*${themeemoji}TYPE :* ${data.medias[1].extension}\n`
                    txt += `*${themeemoji}SIZE :* ${data.medias[1].formattedSize}\n`
                    txt += `*${themeemoji}DURATION :* ${data.medias.length}\n`
                    txt += `*${themeemoji}URL :* ${data.url}\n\n`
                    txt += `*${botname}*`
                buf = await getBuffer(data.thumbnail)    
                AlienAlfa.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })
                for (let i of data.medias) {
                AlienAlfa.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*${text}*`}, { quoted: m })
                }
                }).catch((err) => {
                    reply(mess.error)
                })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'twittermp3': case 'twitteraudio': { 
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)	             
             if (!text) return reply(`Where is the link?`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(invalidlink)
                farrkey.Twitter(`${text}`).then(async (data) => {
                AlienAlfa.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4'}, { quoted: m })
                }).catch((err) => {
                    reply(mess.reply)
                })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'twitterxx': case 'twdlxx': case 'twmp4xx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(example+` :\n${prefix + command} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
try {
let lotwit = await aiovideodl(args[0])
teks = `*| TWITTER DOWNLOADER |*

Caption : ${lotwit.title ? lotwit.title : "undefined"}
Type : ${lotwit.medias[1].extension}
Size : ${lotwit.medias[1].formattedSize}
Link : ${lotwit.medias[1].url}

_Choose the video quality below by clicking the button_`
let buttons = [
{buttonId: `twddl ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
{buttonId: `twddl ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
]
let buttonMessage = {
video: {url:lotwit.medias[1].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:lotwit.title ? lotwit.title : "Twitter Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
AlienAlfa.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Error link!")
}
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'twddlxx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu 🐥'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: `${pushname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body: "Twitter Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
AlienAlfa.sendMessage(from, buttonMessage, {quoted:m})
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'fbdl': case 'fb': case 'facebook': case 'fbmp4': {     	    
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
             if (!text) return reply(`Where is the link bro?\nExample: ${prefix}facebook https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(invalidlink)
            let bocil = require('@bochilteam/scraper')  
                bocil.facebookdlv2(`${text}`).then(async (data) => {                   
                    let txt = `*FB DOWNLOADER*\n\n`
                    txt += `*${themeemoji}TITLE :* ${data.title}\n`
                    txt += `*${themeemoji}QUALITY :* ${data.result[0].quality}\n`
                    txt += `*${themeemoji}DESCRIPTION :* ${data.description}\n`
                    txt += `*${themeemoji}ID :* ${watermark}\n`
                    txt += `*${themeemoji}URL :* ${text}\n\n`
                buf = await getBuffer(data.thumbnail)    
                AlienAlfa.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         
                for (let i of data.result) {     
                AlienAlfa.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*${themeemoji} Quality :* ${i.quality}`}, { quoted: m })
                }          
                }).catch((err) => {
                    reply(mess.error)
                })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'fbmp3': case 'facebookmp3': case 'facebookaudio': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                  if (!text) return reply(`Where is the link?\nExample: ${prefix + command} https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(invalidlink)
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (anu) => {  
  AlienAlfa.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })      
                }).catch((err) => {
                    reply(mess.error)
                })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'facebookxx': case 'fbdlxxx': case 'fbmp4xxx': case 'fbxxx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(example+` :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
try {
let resd = await aiovideodl(args[0])
teks = `*| FACEBOOK DOWNLOADER |*

Type : video/${resd.medias[0].extension}
Quality : ${resd.medias[0].quality}
Size : ${resd.medias[0].formattedSize}

_For HD quality you can click the button below_`
let buttons = [
{buttonId: `fbddl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
]
let buttonMessage = {
video: {url:resd.medias[0].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:"Facebook Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
AlienAlfa.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Link invalid!")
}
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'fbddlxx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu 🐥'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: `${pushname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body: " Facebook Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
AlienAlfa.sendMessage(from, buttonMessage, {quoted:m})
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'pinterest2': {
            	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                AlienAlfa.sendMessage(m.chat, { image: { url: result }, caption: '${themeemoji} Media Url : '+result }, { quoted: m })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'webtonsearch': case 'webtoon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply('What Are you Looking For??')
                await reply(mess.wait)
                farrkey.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await reply(txt)
                })
                .catch((err) => {
                    reply(mess.error)
                })
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'wattpad': {
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!text) return reply(example+` : ${prefix + command} love`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/wattpad?query=$text}&apikey=hdiiofficial`)
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From query\n\n`
            capt += ` Title: ${judul}\n`
            capt += ` Read: ${dibaca}\n`
            capt += ` Vote: ${divote}\n`
            capt += ` Chapter: ${bab}\n`
            capt += ` Url: ${url}\n`
            capt += ` Description: ${description}`
            AlienAlfa.sendImage(m.chat, thumb, capt, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'apk': case 'apkmod': case 'apkdl': {      
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
  if (!text) return reply(`Use${prefix + command} whatsapp`) 
  let noh = require('./lib/myfunc2')                
  noh.rexdl(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data) {
  const list = {title: `${i.judul}`,
  rows: [
	    {
	     title: `${i.judul}`, 
	     rowId: `${prefix}donlod ${i.link}`,
	     description: `Category: ${i.kategori}\nPublish: ${i.upload_date}\nInfo: ${i.deskripsi}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  AlienAlfa.sendMessage(
      m.chat, 
      {
       text: `${ucapannya2} ${pushname} *Search Results From ${text} Click the button below to choose*`,
       footer: `${botname}`,
       title: "*APK DOWNLOADER,*",
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    reply(`*${text} Not found*`)
                })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'donlod': {                
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Use${prefix + command} whatsapp`)
                if (!isUrl(args[0]) && !args[0].includes('rexdl.com')) reply('*The link you provided is invalid*')
           let rex = require('./lib/ApkDown.js')
           rex.ApkDown(`${text}`).then(async (anu) => {        
           if (anu[0].size.split('MB')[0] >= 150) return reply('*File Over Limit* '+util.format(anu))
           for (let i of anu) {    
           linkye = `*APK DOWNLOAD*\n\n*Title:* ${i.title}\n*Updated:* ${i.up}\n*Version:* ${i.vers}\n*Size:* ${i.size}\n*Url:* \n*Desc:* ${i.desc}`         
                AlienAlfa.sendMessage(m.chat, { image: await getBuffer(i.thumb), jpegThumbnail: await getBuffer(i.thumb), caption: `${linkye}` }, { quoted: m })
                AlienAlfa.sendMessage(m.chat, {document: await getBuffer(i.link), mimetype: `application/vnd.android.package-archive`, fileName: `${i.title}`}, {quoted:m})  
                }  
                }).catch((err) => {
                    reply(mess.error)
                }) 
                }                          
                 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'tagme': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
AlienAlfa.sendMessage(m.chat, {text:`@${m.sender.split("@")[0]}`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


           case 'git': case 'gitclone':
           if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	reply(mess.wait)
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            if (!args[0]) reply(`Use ${prefix}gitclone repo link\nExample: https://github.com/Alien-Alfa/WhatsAppBot-MD-BETA2`)
    if (!regex1.test(args[0])) return reply(mess.linkm)
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    AlienAlfa.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
			 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
 	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
              if (!q) return reply(example+` : ${prefix + command} ${global.ownername}`) 
          
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                AlienAlfa.sendMessage(m.chat, { image: { url: anu }, caption: madeby+` ${global.botname},For my Darling ` }, { quoted: m })
             }
              break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'drakorxxx':
               if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply('What Are You Looking For??')
                await reply(mess.wait)
                farrkey.Drakor(`${text}`).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📆 Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    reply(mess.error)
                })
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'drakor': {
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!text) return reply(example+` : ${prefix + command} love`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/drakor?query=${text}&apikey=hdiiofficial`)
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `${themeemoji} Title: ${i.judul}\n`
            capt += `${themeemoji} Years: ${i.years}\n`
            capt += `${themeemoji} Genre: ${i.genre}\n`
            capt += `${themeemoji} Url: ${i.url}\n`
            capt += `${themeemoji} Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            AlienAlfa.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'animexxx':{
            	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`What Anime Are You Looking For??`)
                await reply(mess.wait)
                farrkey.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Watch🎥",
						"url": `${websitex}`
						}
					}
				]
				await AlienAlfa.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
                }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'characterxxx': case 'karakterxxx':
               if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`What Anime Character Are You Looking For??`)
                await reply(mess.wait)
                farrkey.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Character :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "𝙔𝙤𝙪𝙏𝙪𝙗𝙚",
						"url": `${websitex}`
						}
					}
				]
				await AlienAlfa.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'manga2':
               if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`What Manga Are You Looking For??`)
                await reply(mess.wait)
                farrkey.Manga(`${text}`).then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Title :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "𝙔𝙤𝙪𝙏𝙪𝙗𝙚",
						"url": `${websitex}`
						}
					}
				]
				await AlienAlfa.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
                case 'anime':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	    if(!q) return reply(`Which anime do you want to search?\nExample ${prefix}manga naruto`)
reply(mess.wait)						
const { Anime } =require("@shineiichijo/marika")
    const client = new Anime();
     let anime = await client.searchAnime(q)
    let result = anime.data[0];
    console.log(result)
   let details = `🎀 *Title: ${result.title}*\n`;
    details += `🎋 *Format: ${result.type}*\n`;
    details += `📈 *Status: ${result.status.toUpperCase().replace(/\_/g, " ")}*\n`;
    details += `🍥 *Total episodes: ${result.episodes}*\n`;
    details += `🎈 *Duration: ${result.duration}*\n`;
    details += `🧧 *Genres:*\n`;
    for (let i = 0; i < result.genres.length; i++) {
      details += `\t\t\t\t\t\t\t\t*${result.genres[i].name}*\n`;
    }
    details += `✨ *Based on: ${result.source.toUpperCase()}*\n`;
    details += `📍 *Studios:*\n`;
    for (let i = 0; i < result.studios.length; i++) {
      details += `\t\t\t\t\t\t\t\t*${result.studios[i].name}*\n`;
    }
    details += `🎴 *Producers:*\n`;
    for (let i = 0; i < result.producers.length; i++) {
      details += `\t\t\t\t\t\t\t\t\t\t*${result.producers[i].name}*\n`;
    }
    details += `💫 *Premiered on: ${result.aired.from}*\n`;
    details += `?? *Ended on: ${result.aired.to}*\n`;
    details += `🎐 *Popularity: ${result.popularity}*\n`;
    details += `🎏 *Favorites: ${result.favorites}*\n`;
    details += `🎇 *Rating: ${result.rating}*\n`;
    details += `🏅 *Rank: ${result.rank}*\n\n`;
    if (result.trailer.url !== null)
      details += `♦ *Trailer: ${result.trailer.url}*\n\n`;
    details += `🌐 *URL: ${result.url}*\n\n`;
    if (result.background !== null)
      details += `🎆 *Background:* ${result.background}*\n\n`;
    details += `❄ *Description:* ${result.synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`
AlienAlfa.sendMessage(m.chat,{image:{url:result.images.jpg.large_image_url},caption:details},{quoted:m})   
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'manga':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if(!q) return reply(`Which manga do you want to search?\nExample ${prefix}manga naruto`)
let srh = await manga.searchManga(q)
    let mang = `🎀 *Title: ${srh.data[0].title}*\n`;
    mang += `📈 *Status: ${srh.data[0].status}*\n`;
    mang += `🌸 *Total Volumes: ${srh.data[0].volumes}*\n`;
    mang += `🎗 *Total Chapters: ${srh.data[0].chapters}*\n`;
    mang += `🧧 *Genres:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
      mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`;
    }
    mang += `✨ *Published on: ${srh.data[0].published.from}*\n`;
    mang += `🌟 *Score: ${srh.data[0].scored}*\n`;
    mang += `🎐 *Popularity: ${srh.data[0].popularity}*\n`;
    mang += `🎏 *Favorites: ${srh.data[0].favorites}*\n`;
    mang += `✍ *Authors:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
      mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`;
    }
    mang += `\n🌐 *URL: ${srh.data[0].url}*\n\n`;
    if (srh.data[0].background !== null)
      mang += `🎆 *Background:* ${srh.data[0].background}`;
    mang += `❄️ *Description:* ${srh.data[0].synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`;
AlienAlfa.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'lyrics': {
		            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	    if (!text) return reply(`Use example ${prefix}lyrics Despacito`)
	reply(mess.wait)
	const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
    const result = await lyricsv2(text).catch(async _ => await lyrics(text))
    reply(`
${themeemoji} Title : *${result.title}*
${themeemoji} Author : ${result.author}
${themeemoji} Lyrics : ${result.lyrics}
${themeemoji} Url : ${result.link}
`.trim())
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'earthquake':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Time : ${Waktu}\nLatitude : ${Lintang}\nLongitude : ${Bujur}\nRegion : ${Wilayah}`
AlienAlfa.sendMessage(from, { image : { url : Map }, caption : captt})
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'covidindo':
case 'covid':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
AlienAlfa.sendMessage(from, {text : `Case : ${kasus}\n\nDead : ${kematian}\n\nHealed : ${sembuh}`}, m)
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'tvschedule':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply('Send orders *#tvschedule [channel]*')
reply(await jadwaltv(q))
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'playstore': case 'apk':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply('what are you looking for?')
let play = await hx.playstore(q)
let storee = '❉─────────────────────❉\n'
for (let i of play){
storee += `\n*「 *PLAY STORE* 」*\n
- *Name* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(storee)
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'film':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	reply(mess.wait)
if (!q) return reply(`What film you wanna search?\nExample: ${prefix}film Spiderman`)
farrkey.Film(q)
    .then(data => {console.log(data)
    let krl = `*❒「  Film ${q} 」*\n*🌿 Author* : ${data[0].author}\n\n`
			    for (let i of data) {
                krl += (`\n────────────────────\n\n *📍Title :* ${i.judul}\n *📟 Quality :* ${i.quality}\n *🖥️ Type : ${i.type}*\n *⌛ Uploaded :* ${i.upload}\n *🌍 Source :* ${i.link}`)
                }
               AlienAlfa.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: fdocs })
});
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'img':
case 'image': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                reply(mess.wait)
		let { pinterest } = require('./lib/scraperW')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                AlienAlfa.sendMessage(m.chat, { image: { url: result }, caption: ` ${themeemoji} Media Url : `+result }, { quoted: m })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'mcserver': case 'mcquery': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(example+` : \n${prefix + command} ip|port\nUses : \n${prefix + command} play.music.com|19132`)
const Query = require("minecraft-query");

const qury = args.join(" ")
const iphost = qury.split("|")[0];
const portnya = qury.split("|")[1];

if (!iphost) return replay(`Where's your ip?`)
if (!portnya) return replay(`Where's the port??`)

const q = new Query({host: iphost, port: portnya, timeout: 7500});

q.fullStat()
.then(success => {
replay(jsonformat(success));
return q.basicStat()
})
.then(success => {
replay(jsonformat(success));
q.close();
})
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'mcpedl': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(example+` : ${prefix + command} shader`)
tod.mcpedl(args.join(" ")).then(async(res) => {
teks = `*| MCPEDL SEARCH |*`
for (let i of res) {
teks += `\n\nName : ${i.name}\nCategory : ${i.category}\nDate : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu🥀'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
AlienAlfa.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'happymod': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(example+` : ${prefix + command} mobile legend`)
tod.happymod(args.join(" ")).then(async(res) => {
teks = '```「 HappyMod Search 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu🥀'}, type: 1}
]
let buttonMessage = {
image: {url:res[0].icon},
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
AlienAlfa.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'searchgc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return replay(example+` :\n${prefix}searchgc Classy Editor`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu🥀'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
AlienAlfa.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'servermc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
tod.servermc().then(async(res) => {
let teks = '*| MINECRAFT SERVER |*\n\nhttps://minecraftpocket-servers.com/country/indonesia/\n\n'
let no = 1
for (let i of res) {
teks += `${themeemoji} Server To ${no++}\nip : ${i.ip}\nport : ${i.port}\nversi : ${i.versi}\nplayer : ${i.player}\n\n`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu🥀'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
AlienAlfa.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'fajar-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
replay(teks) 
})
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case "quotes":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
var res = await Quotes()
teks = "══════════════════"
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += "══════════════════"
replay(teks)
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case "darkjoke":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
var res = await Darkjokes()
teks = "\nDarkjokes*"
AlienAlfa.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'cnn-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
CNNNews().then(res => {
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
replay(teks) 
})
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'tvsearch':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply('Where is the title?') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = "══════════════════"
for (let i of res) {
  no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += `══════════════════`
replay(teks) 
})
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'cnbc-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
CNBCNews().then(async(res) => {
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
AlienAlfa.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'tribun-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
TribunNews().then(async(res) => {
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
AlienAlfa.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'indozone-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
IndozoneNews().then(async(res) => {
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
AlienAlfa.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'kompas-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
KompasNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
AlienAlfa.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'detik-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
DetikNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
AlienAlfa.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'daily-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
DailyNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
AlienAlfa.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



case 'inews-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
iNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
replay(teks) 
})
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'okezone-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
OkezoneNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
AlienAlfa.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



case 'sindo-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
SindoNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
replay(teks) 
})
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'tempo-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
TempoNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
AlienAlfa.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'antara-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
AntaraNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
AlienAlfa.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



case "kontan-news":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  KontanNews().then(async (res) => {
    
    teks = "══════════════════"
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `News: ${i.berita}\n`
      teks += `Type: ${i.berita_jenis}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += "══════════════════"
    AlienAlfa.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
   break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case "merdeka-news":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  MerdekaNews().then(async (res) => {
    
    teks = "══════════════════"
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `News: ${i.berita}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += "══════════════════"
    AlienAlfa.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
   break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



case "jalantikus-meme":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  var res = await JalanTikusMeme()
teks = "══════════════════"
teks += "\nLaughing out loud?🥴\n"
teks += `\nSource: ${res}\n`
teks += "══════════════════"
AlienAlfa.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'cinemaschedule': {
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!text) return reply(example+`: ${prefix + command} jakarta`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/jadwalbioskop?kota=${text}&apikey=hdiiofficial`)
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += ` Title: ${i.title}\n`
            capt += ` Thumbnail: ${i.thumb}\n`
            capt += ` Url: ${i.url}\n\n──────────────────────\n`
            }
            AlienAlfa.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'shortstoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(`*List*\n${prefix}shortstory Anak\n${prefix}shortstory Bahasa Daerah\n${prefix}shortstory Bahasa Inggris\n${prefix}shortstory Bahasa Jawa\n${prefix}shortstory Bahasa Sunda\n${prefix}shortstory Budaya\n${prefix}shortstory Cinta\n${prefix}shortstory Cinta Islami\n${prefix}shortstory Cinta Pertama\n${prefix}shortstory Cinta Romantis\n${prefix}shortstory Cinta Sedih\n${prefix}shortstory Cinta Segitiga\n${prefix}shortstory Cinta Sejati\n${prefix}shortstory Galau\n${prefix}shortstory Gokil\n${prefix}shortstory Inspiratif\n${prefix}shortstory Jepang\n${prefix}shortstory Kehidupan\n${prefix}shortstory Keluarga\n${prefix}shortstory Kisah Nyata\n${prefix}shortstory Korea\n${prefix}shortstory Kristen\n${prefix}shortstory Liburan\n${prefix}shortstory Lingkungan\n${prefix}shortstory Lucu\n${prefix}shortstory Malaysia\n${prefix}shortstory Mengharukan\n${prefix}shortstory Misteri\n${prefix}shortstory Motivasi\n${prefix}shortstory Nasihat\n${prefix}shortstory Nasionalisme\n${prefix}shortstory Olahraga\n${prefix}shortstory Patah Hati\n${prefix}shortstory Penantian\n${prefix}shortstory Pendidikan\n${prefix}shortstory Pengalaman Pribadi\n${prefix}shortstory Pengorbanan\n${prefix}shortstory Penyesalan\n${prefix}shortstory Perjuangan\n${prefix}shortstory Perpisahan\n${prefix}shortstory Persahabatan\n${prefix}shortstory Petualangan\n${prefix}shortstory Ramadhan\n${prefix}shortstory Remaja\n${prefix}shortstory Renungan\n${prefix}shortstory Rindu\n${prefix}shortstory Rohani\n${prefix}shortstory Romantis\n${prefix}shortstory Sastra\n${prefix}shortstory Sedih\n${prefix}shortstory Sejarah\n${prefix}shortstory Slice Of Life\n${prefix}shortstory Terjemahan\n${prefix}shortstory Thriller`)
let cerpe = await cerpen(q)
reply(`${global.themeemoji} _*Title :*_ ${cerpe.title}\n${global.themeemoji} _*Author :*_ ${cerpe.author}\n${global.themeemoji} _*Category :*_ ${cerpe.kategori}\n${global.themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${global.themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'loveshortstoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let cerpe = await cerpen(`Cinta segitiga`)
        reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'islamicshortstoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let cerpe = await cerpen(`Cinta segitiga`)
        reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'disturbingshorystoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let cerpe = await cerpen(`galau`)
       reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'friendshipshortstoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let cerpe = await cerpen(`persahabatan`)
        reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'sacrificeshortstoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let cerpe = await cerpen(`Pengorbanan`)
reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	    case 'couplepp':  case 'ppcouple': {
		   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                AlienAlfa.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male ` }, { quoted: m })
                AlienAlfa.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female🙎🏻‍♀️` }, { quoted: m })
            }
	     break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'animequotes': case 'animequote': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		let { quotesAnime } = require('./lib/scraperW')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                AlienAlfa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'wallpaper': case 'animewallpaper': case 'animewall': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!args.join(" ")) return reply("What picture are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `.wallpaper ${args.join(" ")}`, buttonText: {displayText: textNext}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                AlienAlfa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



case 'wiki': case 'wikipedia':
 	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return reply('What Are You Looking For?? ')
const res2 = await AlienAlfaWiki(q).catch(e => {
return reply('_[ ! ] Error Result Not Found_') 
}) 
const result2 = `*Title :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
AlienAlfa.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'wikimedia': {
            	 	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Enter Query Title`)
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: textNext}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`,
                    footer: AlienAlfa.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                AlienAlfa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'quotesanime': case 'animequotes': case 'animequote': case 'quoteanime': {
            	 	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: textNext}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                AlienAlfa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	        case 'nomerhoki': case 'nomorhoki': {
			   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!Number(text)) return reply(example+` : ${prefix + command} 447405935355`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Phone Number :* ${anu.message.nomer_hp}\n${themeemoji} *Shuzi Angka Figures :* ${anu.message.angka_shuzi}\n${themeemoji} *Positive Energy :*\n- Riches : ${anu.message.energi_positif.kekayaan}\n- Health : ${anu.message.energi_positif.kesehatan}\n- Love : ${anu.message.energi_positif.cinta}\n- Stability : ${anu.message.energi_positif.kestabilan}\n- Percentage : ${anu.message.energi_positif.persentase}\n${themeemoji} *Negative Energy :*\n- Dispute : ${anu.message.energi_negatif.perselisihan}\n- Lost : ${anu.message.energi_negatif.kehilangan}\n- Catastrophe : ${anu.message.energi_negatif.malapetaka}\n- Destruction : ${anu.message.energi_negatif.kehancuran}\n- Percentage : ${anu.message.energi_negatif.persentase}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'artimimpi': case 'tafsirmimpi': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Dream :* ${anu.message.mimpi}\n${themeemoji} *Meaning :* ${anu.message.arti}\n${themeemoji} *Solution :* ${anu.message.solusi}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'ramalanjodoh': case 'ramaljodoh': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Your Name :* ${anu.message.nama_anda.nama}\n${themeemoji} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${themeemoji} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${themeemoji} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'ramalanjodohbali': case 'ramaljodohbali': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Your Name :* ${anu.message.nama_anda.nama}\n${themeemoji} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${themeemoji} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${themeemoji} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'suamiistri': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Husband's Name :* ${anu.message.suami.nama}\n${themeemoji} *Husband Born :* ${anu.message.suami.tgl_lahir}\n${themeemoji} *Wife's Name :* ${anu.message.istri.nama}\n${themeemoji} *Born Wife :* ${anu.message.istri.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'ramalancinta': case 'ramalcinta': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Your Name :* ${anu.message.nama_anda.nama}\n${themeemoji} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${themeemoji} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${themeemoji} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${themeemoji} *Positive Side :* ${anu.message.sisi_positif}\n${themeemoji} *Negative Side :* ${anu.message.sisi_negatif}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'artinama': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} Dika Ardianta`)
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Meaning :* ${anu.message.arti}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'kecocokannama': case 'cocoknama': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Life Path :* ${anu.message.life_path}\n${themeemoji} *Destiny :* ${anu.message.destiny}\n${themeemoji} *Destiny Desire :* ${anu.message.destiny_desire}\n${themeemoji} *Personality :* ${anu.message.personality}\n${themeemoji} *Percentage :* ${anu.message.persentase_kecocokan}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} Dika|Novia`)
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendImage(m.chat,  anu.message.gambar, `${themeemoji} *Your Name :* ${anu.message.nama_anda}\n${themeemoji} *Couple Name :* ${anu.message.nama_pasangan}\n${themeemoji} *Positive Side :* ${anu.message.sisi_positif}\n${themeemoji} *Negative Side :* ${anu.message.sisi_negatif}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'jadianpernikahan': case 'jadiannikah': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} 6, 12, 2020`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Wedding Date :* ${anu.message.tanggal}\n${themeemoji} *Characteristics :* ${anu.message.karakteristik}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'sifatusaha': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix+ command} 28, 12, 2021`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.hari_lahir}\n${themeemoji} *Business :* ${anu.message.usaha}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'rejeki': case 'rezeki': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.hari_lahir}\n${themeemoji} *Sustenance :* ${anu.message.rejeki}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'pekerjaan': case 'kerja': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.hari_lahir}\n?? *Profession :* ${anu.message.pekerjaan}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Analysis :* ${anu.message.analisa}\n${themeemoji} *Root Number :* ${anu.message.angka_akar}\n${themeemoji} *Nature :* ${anu.message.sifat}\n${themeemoji} *Element :* ${anu.message.elemen}\n${themeemoji} *Lucky Numbers :* ${anu.message.angka_keberuntungan}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'potensipenyakit': case 'penyakit': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Analysis :* ${anu.message.analisa}\n${themeemoji} *Sector :* ${anu.message.sektor}\n?? *Element :* ${anu.message.elemen}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'artitarot': case 'tarot': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendImage(m.chat, anu.message.image, `${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Tarot Symbol :* ${anu.message.simbol_tarot}\n${themeemoji} *Meaning :* ${anu.message.arti}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'fengshui': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Name, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tahun_lahir}\n${themeemoji} *Gender :* ${anu.message.jenis_kelamin}\n${themeemoji} *Kua Number :* ${anu.message.angka_kua}\n${themeemoji} *Group :* ${anu.message.kelompok}\n${themeemoji} *Character :* ${anu.message.karakter}\n${themeemoji} *Good Sector :* ${anu.message.sektor_baik}\n${themeemoji} *Bad Sector :* ${anu.message.sektor_buruk}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'haribaik': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *When Challenged :* ${anu.message.kala_tinantang}\n${themeemoji} *Info :* ${anu.message.info}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'harisangar': case 'taliwangke': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Info :* ${anu.message.info}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'harinaas': case 'harisial': {
                if (!text) return reply(example+` : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Day Of Birth :* ${anu.message.hari_lahir}\n${themeemoji} *Date Of Birth :* ${anu.message.tgl_lahir}\n${themeemoji} *Fateful Day :* ${anu.message.hari_naas}\n${themeemoji} *Info :* ${anu.message.catatan}\n${themeemoji} *Notes :* ${anu.message.info}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'nagahari': case 'harinaga': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Day Of Birth :* ${anu.message.hari_lahir}\n${themeemoji} *Date Of Birth :* ${anu.message.tgl_lahir}\n${themeemoji} *Dragon Day Direction :* ${anu.message.arah_naga_hari}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'arahrejeki': case 'arahrezeki': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Day Of Birth :* ${anu.message.hari_lahir}\n${themeemoji} *Date Of Birth :* ${anu.message.tgl_lahir}\n${themeemoji} *Sustenance Direction :* ${anu.message.arah_rejeki}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'peruntungan': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Name, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Fortune Of The Year :* ${anu.message.peruntungan_tahun}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'weton': case 'wetonjawa': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return (example+` : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Date :* ${anu.message.tanggal}\n${themeemoji} *Number Of Neptune :* ${anu.message.jumlah_neptu}\n${themeemoji} *Day Character :* ${anu.message.watak_hari}\n${themeemoji} *Dragon Day :* ${anu.message.naga_hari}\n${themeemoji} *Good Hour :* ${anu.message.jam_baik}\n${themeemoji} *Birth Character :* ${anu.message.watak_kelahiran}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'sifat': case 'karakter': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Lifeline :* ${anu.message.garis_hidup}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'keberuntungan': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'memancing': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} 12, 1, 2022`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Date :* ${anu.message.tgl_memancing}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'masasubur': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return (example+` : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} First Day Of Menstruation Cycle`)
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'zodiak': case 'zodiac': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix+ command} 7 7 2005`)
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') return date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Zodiac :* ${anu.message.zodiak}\n${themeemoji} *Number :* ${anu.message.nomor_keberuntungan}\n${themeemoji} *Aroma :* ${anu.message.aroma_keberuntungan}\n${themeemoji} *Planet :* ${anu.message.planet_yang_mengitari}\n${themeemoji} *Flower :* ${anu.message.bunga_keberuntungan}\n${themeemoji} *Color :* ${anu.message.warna_keberuntungan}\n${themeemoji} *Stone :* ${anu.message.batu_keberuntungan}\n${themeemoji} *Element :* ${anu.message.elemen_keberuntungan}\n${themeemoji} *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'shio': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                AlienAlfa.sendText(m.chat, `${themeemoji} *Results :* ${anu.message}`, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	    case 'tiktok':{
  	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
  if (!q) return reply('Where is the link?')
  reply(mess.wait)
  if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
   const musim_rambutan = await AlienAlfaTiktok(`${q}`).catch(e => {
 reply(mess.error) 
} )
   console.log(musim_rambutan)
   const xtiktokop = musim_rambutan.result.watermark
texttk = `Wanna download no watermark or audio?
_Please choose the button below_`
let buttons = [
{buttonId: `ttnowm ${q}`, buttonText: {displayText: 'No Watermark ❌'}, type: 1},
{buttonId: `ttaud ${q}`, buttonText: {displayText: 'Audio 🎶'}, type: 1}
]
let buttonMessage = {
video: {url:xtiktokop},
caption: texttk,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${ownername}`,
body: `${pushname}`,
thumbnail: log0,
mediaType:1,
mediaUrl: q,
sourceUrl: q
}}
}
AlienAlfa.sendMessage(from, buttonMessage, {quoted:m})
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


  case 'tiktoknowm': case 'ttnowm':{
  	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
  if (!q) return reply('Where is the link?')
  reply(mess.wait)
  if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
   const musim_rambutan = await AlienAlfaTiktok(`${q}`).catch(e => {
 reply(mess.error) 
} )
   console.log(musim_rambutan)
   const botzytiktoknowm = musim_rambutan.result.nowatermark
    AlienAlfa.sendMessage(from, { video: { url: botzytiktoknowm }, caption: takeresult }, { quoted: m })
   }
   break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


  case 'tiktokaudio':
case 'tiktokmusic':
case 'ttaud':{
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
  if (!q) return reply('Where is the audio?')
  if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
   const musim_rambutan = await AlienAlfaTiktok(`${q}`).catch(e => {
 reply(mess.error) 
} )
   console.log(musim_rambutan)
   const botzytiktokaudio = musim_rambutan.result.nowatermark
    AlienAlfa.sendMessage(from, { audio: { url: botzytiktokaudio }, mimetype: 'audio/mp4' }, { quoted: m })
   }
  break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	case 'music': case 'play': case 'song': case 'ytplay': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let ytvc = await hx.youtube(anu.url)
let buttons = [
{buttonId: `ytvd ${ytvc.link}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `ytad ${ytvc.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `*| YOUTUBE PLAY |*

${global.themeemoji} Title : ${anu.title}
${global.themeemoji} Ext : Search
${global.themeemoji} ID : ${anu.videoId}
${global.themeemoji} Duration : ${anu.timestamp}
${global.themeemoji} Viewers : ${anu.views}
${global.themeemoji} Uploaded : ${anu.ago}
${global.themeemoji} Author : ${anu.author.name}
${global.themeemoji} Channel : ${anu.author.url}
${global.themeemoji} Description : ${anu.description}
${global.themeemoji} Url : ${anu.url}`,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: anu.title,
body: `${global.botname}`,
thumbnail: log0,
mediaType:2,
mediaUrl: anu.url,
sourceUrl: anu.url
}}
}
AlienAlfa.sendMessage(m.chat, buttonMessage, { quoted: m })
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'getmusic': case 'getvideo': case 'yt': case 'youtube': case 'ytvideo': case 'ytmp3': case 'ytmp4': case 'ytmusic': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(mess.linkm)
try {
hx.youtube(args[0]).then(async(res) => {
textyt = `*| YOUTUBE DOWNLOADER |*

${global.themeemoji} Title : ${res.title}
${global.themeemoji} Size : ${res.size}
${global.themeemoji} Quality : ${res.quality}

_Select video or audio and wait a while_`
let buttons = [
{buttonId: `ytvd ${res.link}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `ytad ${res.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
image: {url:res.thumb},
caption: textyt,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: res.title,
body: `${global.ownername}`,
thumbnail: {url:res.thumb},
mediaType:2,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
AlienAlfa.sendMessage(from, buttonMessage, {quoted:m})
}).catch(_ => _)
} catch {
reply(linkerr)
}
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'ytvd': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
AlienAlfa.sendMessage(from, {video:{url:args[0]}, mimetype:"video/mp4", caption:"Success", contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.botname}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'ytad': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
AlienAlfa.sendMessage(from, {audio:{url:args[0]}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.botname}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'ytdl': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(mess.linkm)
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`The link you provided is invalid`)
                anu = await fetchJson(`https://api.akuari.my.id/downloader/youtube?link=${text}`)        
                if (anu.filesize_video >= 999999) return reply('*File Over Limit* '+util.format(anu))
                tummb = await getBuffer(anu.thumb)
                audio = await getBuffer(anu.audio)        
                AlienAlfa.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `${anu.title}`}, { quoted : m }).catch((err) => reply(mess.error))
                AlienAlfa.sendMessage(m.chat, { video: { url: anu.video }, jpegThumbnail:tummb, caption: `${util.format(anu)}`}, { quoted: m }).catch((err) => reply(mess.error))
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'ytshorts': case 'shorts': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  if (!text) return reply(`*Use ${prefix + command} put yt shorts link*`)
  if (!isUrl(args[0]) && !args[0].includes('youtube')) return reply(invalidlink)
  farrkey.Youtube(`${text}`).then(async (data) => {
  if (data.medias[0].formattedSize.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(data)) 
  cap = `
*YOUTUBE SHORTS*

*${themeemoji}TITLE:* ${data.title}\n*${themeemoji}QUALITY:* ${data.medias[0].quality}\n*${themeemoji}SIZE:* ${data.medias[0].formattedSize}\n*${themeemoji}DURATION* ${data.duration}\n*${themeemoji}ID:* ${data.medias[0].cached}\n*${themeemoji}LINK:* ${data.url}\n\n*${botname}*`
  buf = await getBuffer(data.thumbnail)
  AlienAlfa.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${cap}` }, { quoted: m })
  AlienAlfa.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail:buf, caption: `*${themeemoji}TITLE:* ${data.title}\n*${themeemoji}QUALITY:* ${data.medias[0].quality}\n*${themeemoji}SIZE:* ${data.medias[0].formattedSize}` }, { quoted: m })  
                }).catch((err) => {
                    reply(mess.reply)
                })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	  case 'pinterest': case 'pin': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply("What picture are you looking for?")
try {
hx.pinterest(args.join(" ")).then(async(res) => {
imgnyee = res[Math.floor(Math.random() * res.length)]
let buttons = [
{buttonId: `pinterest ${args.join(" ")}`, buttonText: {displayText: 'Next Image 👀'}, type: 1}
]
let buttonMessage = {
image: { url: imgnyee },
caption:  `${global.dogeemoji} Title : ` + args.join(" ") + `\n${global.dogeemoji} Media Url : `+imgnyee,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.ownername}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}
}
AlienAlfa.sendMessage(m.chat, buttonMessage, { quoted: m })
}).catch(_ => _)
} catch {
reply(mainerr)
}
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'mediafire': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
if (!text) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
reply(`${result4}`)
AlienAlfa.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'umma': case 'ummadl': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	        if (!text) return reply(example+` : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`)
                let { umma } = require('./lib/scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '🎵Audio🎵'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '📽️Video📽️'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
${themeemoji} Title : ${anu.title}
${themeemoji} Author : ${anu.author.name}
${themeemoji} Like : ${anu.like}
${themeemoji} Caption : ${anu.caption}
${themeemoji} Url : ${anu.media[0]}
To Download Media, Please Click One Of The Buttons Below Or Enter The ytmp3/ytmp4 Command With The Url Above
`,
			footer: AlienAlfa.user.name,
			buttons,
			headerType: 4
		    }
		    AlienAlfa.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        AlienAlfa.sendMessage(m.chat, { image: { url }, caption: `${themeemoji} Title : ${anu.title}\n${themeemoji} Author : ${anu.author.name}\n${themeemoji} Like : ${anu.like}\n${themeemoji} Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	     break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


        case 'ringtone': {
        	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
		if (!text) return reply(`Where is the ringtone name noob?, Example : ${prefix + command} charlie puth`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		AlienAlfa.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	     break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'tempo': {
if (isBan) return reply(mess.ban)
if (!args.join(" ")) return reply(example+`: ${prefix + command} 10`)
var req = args.join(' ')
media = await AlienAlfa.downloadAndSaveMediaMessage(quoted, "tempo")
if (isQuotedAudio) {
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(mainerr)
hah = fs.readFileSync(ran)
AlienAlfa.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(mainerr)
hah = fs.readFileSync(ran)
AlienAlfa.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
fs.unlinkSync(ran)
})
} else {
reply("Send video/audio")
}
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'volume': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply(example+`: ${prefix + command} 10`)
media = await AlienAlfa.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(mainerr)
jadie = fs.readFileSync(rname)
AlienAlfa.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(mainerr)
jadie = fs.readFileSync(rname)
AlienAlfa.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
reply("Send video/audio")
}
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
		if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await AlienAlfa.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                AlienAlfa.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply To The Audio You Want To Change With Caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'setcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                if (!text) return reply(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Change This Sticker Command`)
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'delcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`No Hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Delete This Sticker Command`)
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'listcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                AlienAlfa.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'lockcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return reply(`Hash Not Found In Database`)
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'addmsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!m.quoted) return reply(`Reply Message You Want To Save In Database`)
                if (!text) return reply(example+` : ${prefix + command} File Name`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' Has Been Registered In The Message List`)
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully Added Message In Message List As '${text}'
    
Access With ${prefix}getmsg ${text}

View List Of Messages With ${prefix}listmsg`)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'getmsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(example+` : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
                AlienAlfa.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'listmsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 DATABASE LIST 」\n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	     break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'delmsg': case 'deletemsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
		delete msgs[text.toLowerCase()]
		reply(`Delete Successfully '${text}' From The Message list`)
            }
	     break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	    case 'anonymous': {
		if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'Start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                ]
                AlienAlfa.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await AlienAlfa.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, AlienAlfa.user.name, m)
            }
			 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


             case 'leave': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await AlienAlfa.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner \`\`\``)
                   reply(false)
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await AlienAlfa.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave')  break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            }
            case 'mulai': case 'start': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId:  'leave', buttonText: { displayText: 'ꜱᴛᴏᴘ' }, type: 1 }
                    ]
                    await AlienAlfa.sendButtonText(m.chat, buttons, `\`\`\`You Are Still In An Anonymous Session, Press The Button Below To Terminate Your Anonymous Session\`\`\``, AlienAlfa.user.name, m)
                    reply(false)
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'ꜱᴋɪᴘ' }, type: 1 },
                        { buttonId:  'leave', buttonText: { displayText: 'ꜱᴛᴏᴘ' }, type: 1 }
                    ]
                    await AlienAlfa.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, AlienAlfa.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await AlienAlfa.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, AlienAlfa.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId:  'leave', buttonText: { displayText: 'ꜱᴛᴏᴘ' }, type: 1 }
                    ]
                    await AlienAlfa.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, AlienAlfa.user.name, m)
                }
                 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            }
            case 'next': case 'lanjut': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await AlienAlfa.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    reply(false)
                }
                let other = romeo.other(m.sender)
                if (other) await AlienAlfa.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'ꜱᴋɪᴘ' }, type: 1 },
                        { buttonId:  'leave', buttonText: { displayText: 'ꜱᴛᴏᴘ' }, type: 1 }
                    ]
                    await AlienAlfa.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, AlienAlfa.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await AlienAlfa.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, AlienAlfa.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId:  'leave', buttonText: { displayText: 'ꜱᴛᴏᴘ' }, type: 1 }
                    ]
                    await AlienAlfa.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, AlienAlfa.user.name, m)
                }
                 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            }
            case 'public': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                AlienAlfa.public = true
                reply('Successful Change To Public Usage')
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'self': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                AlienAlfa.public = false
                reply('Successful Change To Self Usage')
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'setstatuts':
case 'setbio':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply('Send orders *#setbio text*')
AlienAlfa.setStatus(`${q}`)
reply(mess.success)
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'antitag': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return
if (args.length < 1) return replay(`Type on to enable\nType off to disable`)
if (args[0] === 'on') {
if (antitags === true) return
global.antitags = true
replay(`Successfully activated antitag!`)
} else if (args[0] === 'off') {
if (antitags === false) return
global.antitags = false
replay(`Successfully deactivated antitag!`)
} else {
replay('Choose on or off')
}
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'ping': case 'p': case 'botstatus': case 'statusbot': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(1)}Sec / ${(oldd - neww).toFixed(1)}ms\n\nRuntime : ${runtime(process.uptime())}`

let resp2 = `💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'speedtest': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'owner': case 'creator': {
                AlienAlfa.sendContact(m.chat, global.vcardowner, m)
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


  case 'setmenu': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!isCreator) return reply(mess.owner)
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateDocument = false
                reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                setbot.templateDocument = false
                reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                setbot.templateDocument = false
                reply(mess.success)
                } else if (args[0] === 'templateDocument'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateDocument = true
                reply(mess.success)
                } else {
                let sections = [
                {
                title: "ᴄʜᴀɴɢᴇ ᴍᴇɴᴜ ᴛᴇᴍᴘʟᴀᴛᴇ",
                rows: [
                {title: "Image Menu", rowId: `setmenu templateImage`, description: `Tap to change bot menu to Image Menu`},
                {title: "Gif Menu", rowId: `setmenu templateGif`, description: `Tap to change bot menu to Gif Menu`},
                {title: "Video Menu", rowId: `setmenu templateVideo`, description: `Tap to change bot menu to Video Menu`},
                {title: "Text Menu", rowId: `setmenu templateMessage`, description: `Tap to change bot menu to Text Menu`},
                {title: "Document Menu", rowId: `setmenu templateDocument`, description: `Tap to change bot menu to Document Menu`}
                ]
                },
                ]
                AlienAlfa.sendListMsg(m.chat, `Please select the menu you want to change!`, ` `, AlienAlfa.user.name, `Click Here`, sections, m)
                }
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'request': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(example+` : ${prefix + command} hello dev please add a downloader feature`)
teks = `*| REQUEST |*`
teks1 = `\n\nNumber : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
teks2 = `\n\nSuccessfully sent to owner`
for (let i of owner) {
AlienAlfa.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
AlienAlfa.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


                    case 'bug': case 'report': {
                    	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                    	if(!text) return reply(`Enter The Bug\n\nExample: ${command} Menu Error`)
                    	AlienAlfa.sendMessage(`${owner}@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                     break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
teks = `*「 ${global.botname} Script 」*\n\nYouTube: ${global.websitex}\nGitHub: ${global.botscript}\n\nDont forget to donate `
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: thum,
jpegThumbnail: log0,
caption: teks,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"I deserve something for my hardwork",
body: "Click to donate", 


thumbnail: thumb,


mediaType:1,
mediaUrl: 'https://telegra.ph/file/ddda0b94db5bb70b90e01.jpg',
sourceUrl: "https://telegra.ph/file/ddda0b94db5bb70b90e01.jpg"
}}
}
AlienAlfa.sendMessage(m.chat, buttonMessage, { quoted: m })
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

 case 'alive': {
    let uptime = runtime(process.uptime())
    await reply(`Runtime : ${runtime(uptime)}`)
    }break
    
    
    case 'rs': case 'restart': {
    AlienAlfa.sendMessage(from, {text: '```Restarting...```'})
    process.send('reset')
    }break
    
    
  /* case 'help': case 'list':  case '?': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
AlienAlfa.sendMessage(from, { react: { text: `${global.reactmoji}`, key: m.key }})

try {
	                let buttonmenu = [
                        { urlButton: { displayText: linkbuttid1, url: butturl1}},
                        { urlButton: { displayText: linkbuttid2, url: butturl2}},
                        { quickReplyButton: { displayText: 'All Menu', id: 'allmenu'}},
                        { quickReplyButton: { displayText: 'List Menu', id: 'command'}},
                        { quickReplyButton: { displayText: 'ping', id: 'ping'}}
                            ]


                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        AlienAlfa.send5ButImg(m.chat, menulist, global.botname, global.thumb, buttonmenu, global.thumb)
                        } else if (setbot.templateGif) {
                        AlienAlfa.send5ButGif(m.chat, menulist, global.botname, global.vidmenu, buttonmenu, global.thumb)
                        } else if (setbot.templateVid) {
                        AlienAlfa.send5ButVid(m.chat, anu, global.botname, global.vidmenu, buttonmenu, global.thumb)
                        } else if (setbot.templateVideo) {
                        AlienAlfa.send5ButVid(m.chat, menulist, global.botname, global.vidmenu, buttonmenu, global.thumb)
                        } else if (setbot.templateMsg) {
                        AlienAlfa.sendButtonText(m.chat, buttons, menulist, global.botname )
                        } else if (setbot.templateDocument) {
                        AlienAlfa.sendMessage(m.chat, { caption: menulist, document: thum, fileName: `${ownername}`, templateButtons: buttonmenu, footer: `${botname}`, mentionedJid: [m.sender] })
                        }
                    }catch(err){

                        let buttonmenu = [
                            { urlButton: { displayText: linkbuttid1, url: butturl1}},
                            { urlButton: { displayText: linkbuttid2, url: butturl2}},
                            { quickReplyButton: { displayText: 'All Menu', id: 'allmenu'}},
                            { quickReplyButton: { displayText: 'List Menu', id: 'command'}},
                            { quickReplyButton: { displayText: 'ping', id: 'ping'}}
                                ]
                                let buttons = [
                                    { buttonId: 'allmenu', buttonText: { displayText: 'All Menu' }, type: 1 },
                                    { buttonId: 'command', buttonText: { displayText: 'List Menu' }, type: 1 }
                                ]
    
                             let setbot = db.data.settings[botNumber]
                            if (setbot.templateImage) {
                            AlienAlfa.send5ButImg(m.chat, menulist, '𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+global.botname, global.thumb, buttonmenu, global.thumb)
                            } else if (setbot.templateGif) {
                            AlienAlfa.send5ButGif(m.chat, menulist, '𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+global.botname, global.vidmenu, buttonmenu, global.thumb)
                            } else if (setbot.templateVid) {
                            AlienAlfa.send5ButVid(m.chat, anu, '𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+global.botname, global.vidmenu, buttonmenu, global.thumb)
                            } else if (setbot.templateVideo) {
                            AlienAlfa.send5ButVid(m.chat, menulist, '𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+global.botname, global.vidmenu, buttonmenu, global.thumb)
                            } else if (setbot.templateMsg) {
                            AlienAlfa.sendButtonText(m.chat, buttons, menulist, '𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+global.botname)
                            } else if (setbot.templateDocument) {
                            AlienAlfa.sendMessage(m.chat, { caption: menulist, document: thum, fileName: `${ownername}`, templateButtons: buttonmenu, footer: '𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`, mentionedJid: [m.sender] })
                            }
                    }
                     }
             break
*/

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'panel': case 'menu': case 'command': {
                	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: ``,
                    description: menulist,
                    buttonText: "Menu",
                    footerText: `${global.botname}`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Initial Features Of Bot  ",
								"rows": [
									{
										"title": "Other",
										"description": "Displays The List Of Other Features",
										"rowId": `${prefix}othermenu`
									}
								]
							},
							{
								"title": "Bot Features",
								"rows": [
									{
										"title": "All Menu ",
										"description": "Displays The List Of All The Features!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Owner Menu ",
										"description": "Displays The List Of Owner Features",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "Group Menu ",
										"description": "Displays The List Of Main Features",
										"rowId": `${prefix}groupmenu`
										},
										{
										"title": "Maker Menu ",
										"description": "Displays The List Of Logo Making Features",
										"rowId": `${prefix}indomenu`
									},
									{
										"title": "Sound Menu ",
										"description": "Displays The List Of Sound Features",
										"rowId": `${prefix}soundmenu`
									},
									{
										"title": "Download Menu ",
										"description": "Displays The List Of Download Features",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Sticker Menu ",
										"description": "Displays The List Of Sticker Features",
										"rowId": `${prefix}indomenu`
									},
									{
										"title": "Search Menu ",
										"description": "Displays The List Of Searching Features",
										"rowId": `${prefix}searchmenu`
									},
									{
										"title": "Tool Menu ",
										"description": "Displays The List Of Tool Features",
										"rowId": `${prefix}toolmenu`
									},
									{
										"title": "Random Image Menu ",
										"description": "Displays The List Of Random Image Features",
										"rowId": `${prefix}randomimagemenu`
									},
									{
										"title": "Image Effect Menu ",
										"description": "Displays The List Of Image Effect Features",
										"rowId": `${prefix}imageeffectmenu`
									},
										{
											"title": "Anime Menu ",
										"description": "Displays The List Of Random Anime Features",
										"rowId": `${prefix}animemenu`
										},
										{
											"title": "Emote Menu ",
										"description": "Displays The List Of Emote Features",
										"rowId": `${prefix}emotemenu`
										},
										{
										"title": "Anime Sticker Menu ",
										"description": "Displays The List Of Anime Sticker Features",
										"rowId": `${prefix}animestickermenu`
									     },
									{
										"title": "Nsfw Menu ",
										"description": "Displays The List Of Nsfe Features",
										"rowId": `${prefix}nsfwmenu`
									     },
										{
											"title": "Fun Menu ",
										"description": "Displays The List Of Fun Features",
										"rowId": `${prefix}funmenu`
										},
										{
										"title": "Game Menu  ",
										"description": "Displays The List Of Game Features",
										"rowId": `${prefix}indomenu`
									},
										{
											"title": "Convert Menu ",
										"description": "Displays The List Of Convert Features",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "Database Menu ",
										"description": "Displays The List Of Database Features",
										"rowId": `${prefix}databasemenu`
										},
										{
										"title": "Indo Menu  ",
										"description": "Displays The List Of Indo Features",
										"rowId": `${prefix}indomenu`
									},
										{
											"title": "Horoscope Menu ",
										"description": "Displays The List Of Horoscope Features",
										"rowId": `${prefix}indohoroscopemenu`
										}
								]
							},
							{
								"title": "Chat With Fellow Users ",
								"rows": [
									{
										"title": "Anonymous Chat Menu  ",
										"description": "Displays The List Of Anonymous Chat Features",
										"rowId": `${prefix}anonymousmenu`
									}
								]
							},
							{
								"title": "Credit",
								"rows": [
									{
										"title": "Thanks To  ",
										"description": "Displays The List Of Credit Of The Bot !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            AlienAlfa.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
             break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	




case 'allmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'All Menu')
let allmenux = AlfaMenu.allmenu

try {
await AlienAlfa.sendImage(from, unicorn, menulist +'\n\n\n\n'+ allmenux, m )
}catch(err){
    await AlienAlfa.sendImage(from, unicorn, menulist2, allmenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'ownermenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Owner Menu')
let ownermenux = AlfaMenu.ownermenu



try {
await AlienAlfa.sendButtonImage(from, menulist2,ownermenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,ownermenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'groupmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Group Menu')
let groupmenux = AlfaMenu.groupmenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,groupmenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,groupmenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'rpgmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Rpg Menu')
let rpgmenux = AlfaMenu.rpgmenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,rpgmenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,rpgmenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'makermenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Maker Menu')
let makermnux = AlfaMenu.makermenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,makermnux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,makermnux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'downloadmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(picak+'Download Menu')
    //var unicorn = await getBuffer(picak+'Download Menu')
let downloadmenux = AlfaMenu.downloadmenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,downloadmenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,downloadmenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'searchmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Search Menu')
let searchmenux = AlfaMenu.searchmenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,searchmenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,searchmenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'convertmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Convert Menu')
let convertmenux = AlfaMenu.convertmenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,convertmenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,convertmenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'randomimagemenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Random Image Menu')
let randimgmenux = AlfaMenu.randomimgmenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,randimgmenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,randimgmenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'emotemenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Emote Menu')
let emotemenux = AlfaMenu.emotemenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,emotemenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,emotemenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'imageeffectmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Image Effect Menu')
let effectmenux = AlfaMenu.effectmenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,effectmenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,effectmenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'animemenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Anime Menu')
let animemenux = AlfaMenu.animemenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,animemenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,animemenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'stickermenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Sticker Menu')
let stickermenux = AlfaMenu.stickermenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,stickermenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,stickermenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'animestickermenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Anime Sticker Menu')
let animestickermenux = AlfaMenu.animestickermenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,animestickermenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,animestickermenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'nsfwmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Nsfw Menu')
let nsfwmenux = AlfaMenu.nsfwmenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,nsfwmenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,nsfwmenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'funmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Fun Menu')
let funmenux = AlfaMenu.funmenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,funmenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,funmenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'soundmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Sound Menu')
let soundmenux = AlfaMenu.soundmenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,soundmenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,soundmenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'gamemenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Game Menu')
let gamemenux = AlfaMenu.gamemenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,gamemenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,gamemenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'anonymousmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Anonymous Menu')
let anonymousmenux = AlfaMenu.anonymousmenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,anonymousmenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,anonymousmenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'toolmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Tool Menu')
let toolmenux = AlfaMenu.toolmenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,toolmenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,toolmenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'databasemenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Database Menu')
let databasemenux = AlfaMenu.databasemenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,databasemenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,databasemenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'indomenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Indo Horoscope Menu')
let indomenux = AlfaMenu.indomenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,indomenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,indomenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'indohoroscopemenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Indo Horoscope Menu')
let indohormenux = AlfaMenu.indohormenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,indohormenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,indohormenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	





case 'othermenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
    var unicorn = await getBuffer(thumbz)
    //var unicorn = await getBuffer(picak+'Other Menu')
let othermenux = AlfaMenu.othermenu

try {
await AlienAlfa.sendButtonImage(from, menulist2,othermenux+`\n\n${botname}`,unicorn, buttonxnxxr )
}catch(err){
    await AlienAlfa.sendButtonImage(from, menulist2,othermenux+'𝘛𝘩𝘦 𝘮𝘦𝘯𝘶 𝘉𝘶𝘵𝘵𝘰𝘯 𝘠𝘰𝘶 𝘗𝘳𝘰𝘷𝘪𝘥𝘦𝘥 𝘪𝘯 𝘏𝘌𝘙𝘖𝘒𝘜 𝘤𝘰𝘯𝘧𝘪𝘨 𝘷𝘢𝘳𝘴 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘴 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 (𝘛𝘩𝘪𝘴 𝘐𝘴 𝘛𝘩𝘦 𝘋𝘦𝘧𝘢𝘶𝘭𝘵 𝘉𝘶𝘵𝘵𝘰𝘯𝘴 𝘉𝘺 𝘈𝘓𝘐𝘌𝘕-𝘈𝘓𝘍𝘈)\n\n'+`${botname}`,unicorn, buttonxnxxr )
}
 break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	






//case 'tqtt': 
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(`Thanks to
DGXeon
And all friends who helped assemble this sexy script !!!`)
 break




 case 'tqto': case 'tqtt': {
    anu = `
┌──────────────𒆜 
│  ꜱᴘᴇᴄɪᴀʟ ᴛʜᴀɴᴋꜱ ᴛᴏ
│
│   ᴀᴅʜɪʀᴀᴊ ꜱɪɴɢʜ
│   ᴅɪᴋᴀ ᴀʀᴅɴᴛ
│   xᴇᴏɴ ʙᴏᴛ ɪɴᴄ
│   ᴀʟɪᴇɴ ᴀʟꜰᴀ
│   ꜱᴀꜰᴡᴀɴɢᴀɴᴢ
│   ɴᴇᴇʀᴀᴊ-ᴏx
│   ᴀʟʟ ᴡʜᴏ ꜱᴜᴘᴘᴏʀᴛꜱ ᴍᴇ
│   
│   ᴅᴏ ꜱᴜʙꜱᴄʀɪʙᴇ   
└───────𒆜`
let tempimg = await (await fetch(`${profileimage}`)).buffer()
       let btn = [{
                    urlButton: {
                        displayText: 'xᴇᴏɴ ʙᴏᴛ ɪɴᴄ',
                        url: 'https://github.com/DGXeon'
                    }
                },{
                    urlButton: {
                        displayText: 'ᴀʟɪᴇɴ ᴀʟꜰᴀ',
                        url: 'https://github.com/Alien-alfa'
                    }
                },{	
                    urlButton: {
                        displayText: 'ꜱᴏᴜʀᴄᴇ ᴄᴏᴅᴇ',
                        url: 'https://github.com/Alien-Alfa/WhatsAppBot-MD'
                    }
                },{
                    quickReplyButton: {
                        displayText: 'ꜱᴛᴀᴛᴜꜱ ʙᴏᴛ',
                        id: 'ping'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                        id: 'owner'
                    }  
                }, {
                    quickReplyButton: {
                        displayText: 'ꜱᴄʀɪᴘᴛ',
                        id: 'sc'
                    }
                }]
            alienalfa.send5ButImg(m.chat, anu, `${alfafooter}`, tempimg, btn)
         }
         
         
break

/*|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|
  
                                            °◦¸¸.◦°˚°◦☙°◦¸¸.◦°˚°◦☙ミミ◦❧◦°˚°◦.¸¸◦°´❤*•.
   

                                            ██████╗░█f█╗░░░██╗██████╗░██╗░░░░░██╗░█████╗░
                                            ██╔══██╗██║░░░██║██╔══██╗██║░░░░░██║██╔══██╗
                                            ██████╔╝██║░░░██║██████╦╝██║░░░░░██║██║░░╚═╝
                                            ██╔═══╝░██║░░░██║██╔══██╗██║░░░░░██║██║░░██╗
                                            ██║░░░░░╚██████╔╝██████╦╝███████╗██║╚█████╔╝
                                            ╚═╝░░░░░░╚═════╝░╚═════╝░╚══════╝╚═╝░╚════╝░
 
 
                                            .•*❤´°◦¸¸.◦°˚°◦☙◦彡彡❧◦°˚°◦.¸¸◦°❧◦°˚°◦.¸¸◦°
   
  |⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|*/ 






            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner',  'leave', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			//anti-tag
const listTag = [`${global.ownertag}@s.whatsapp.net`]
const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''
//anti-tag 2
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('./Media/theme/DTAG.webp')
AlienAlfa.sendReadReceipt(m.chat, m.sender, [m.key.id])
AlienAlfa.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}
//anti-tag 3
if (budy.includes(`${global.ownertag}`)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('./Media/theme/DTAG.webp')
AlienAlfa.sendReadReceipt(m.chat, m.sender, [m.key.id])
AlienAlfa.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    AlienAlfa.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {

        var recever = `${global.owner[0]}`+'@s.whatsapp.net'
        let buttons = [
             { buttonId: 'Join https://chat.whatsapp.com/IJcj5I82QkYFZ99IZwmzzG', buttonText: { displayText: 'Join Support Group'  }, type: 2 }
            ]
            await AlienAlfa.sendButtonText(recever, buttons, '```ERROR REPORT``` \n\n'+'```COMMAND   :```'+`\`\`\` ${command}\`\`\`\n`+'```PREFIX    :```'+`\`\`\` ${prefix}\`\`\`\n`+'```VERSION   :```'+`\`\`\` ${gversion}\`\`\`\n`+' ```ERROR     :```'+`\`\`\` ${err}\`\`\`\n`+'\n\n```DETAILED ERROR IN CRASH REPORT GROUP```', `${botname}\nᴀʟɪᴇɴ ᴀʟꜰᴀ-ᴍᴅ`, m)
    
            let buttons2 = [
    
             { buttonId: 'ping', buttonText: { displayText: 'PING'  }, type: 2 }
            ]
      await AlienAlfa.sendButtonText('120363041922413381@g.us', buttons2, '```DETAILED ERROR REPORT``` \n\n'+'```COMMAND   :```'+`\`\`\` ${command}\`\`\`\n`+'```PREFIX    :```'+`\`\`\` ${prefix}\`\`\`\n`+'```VERSION   :```'+`\`\`\` ${gversion}\`\`\`\n`+' ```ERROR     :```'+`\`\`\` ${err}\`\`\`\n`+'\n\n```DETAILED ERROR:```\n\n'+util.format(err), `${botname}\nᴀʟɪᴇɴ ᴀʟꜰᴀ-ᴍᴅ`, m)
         
    
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
