/* Copyright (C) 2023 Thesandu Thewsara.

Licensed under the  GNU-3.0 License;
you may not use this file except in compliance with the License.

QueenCutie - Thesandu Thewsara
*/


let SessName = 'SessName'
require('./config')
const { default: CutieConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(SessName)
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const port = process.env.PORT||3030
const express = require("express");
const app = express();
const FileType = require('file-type')
const path = require('path')
const { MakeSession } =require ('./lib/colab')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const moment = require('moment-timezone')
const authFile = SessName
console.log('QueenCutie-MD is Starting...')
let remsession = global.session
console.log(require('chalk').redBright('Waiting few seconds to Generate your session file'))
setTimeout(() => {
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`database/database.json`)
)
global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
}

//Dont save

async function startcutie() {
    const QueenCutie = CutieConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['QueenCutie-MD','safari','3.0.0'],
        auth: state
    })

    store.bind(QueenCutie.ev)

    QueenCutie.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!QueenCutie.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(QueenCutie, mek, store)
        require("./thessa")(QueenCutie, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })



    
    if (global.indexfunctions === 'active') {


    // anticall auto block
    QueenCutie.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let  fek = await QueenCutie.sendContact(callerId, global.owner)
    QueenCutie.sendMessage(callerId, { text: anticallmsg || `Automatic Block System!\nDon't Call Bot!\nPlease Ask Or Contact The Owner To Unblock You!`}, { quoted :  fek })
    await sleep(8000)
    await QueenCutie.updateBlockStatus(callerId, "block")
    }
    })








    // Group Update
    QueenCutie.ev.on('groups.update', async pea => {
        //console.log(pea)
     // Get Profile Picture Group
        try {
        ppgc = await QueenCutie.profilePictureUrl(pea[0].id, 'image')
        } catch {
        ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
        }
        let wm_fatih = { url : ppgc }
        if (pea[0].announce == true) {
            
            let mbc= `「 Group Settings Change 」\n\nGroup has been closed by admin, Now only admin can send messages !`
            
            QueenCutie.sendMessage(pea[0].id, {
             image: await getBuffer(ppgc),    caption: mbc,
             footer: `Group Settings Change Message \n${global.mainfooter}`,
             mentions:[orgnye],
             templateButtons: [
                     { urlButton: { displayText: `${global.linkbuttid1}`, url: `${global.butturl1}` } }
                     
                 ]})
             
          }
        
        
         else if(pea[0].announce == false) {
             
            let mbc= `Group Settings Change \n\nGroup has been opened by admin, Now participants can send messages !`
            
            QueenCutie.sendMessage(pea[0].id, {
             image: await getBuffer(ppgc),    caption: mbc,
             footer: `Group Settings Change Message \n${global.mainfooter}`,
             mentions:[orgnye],
             templateButtons: [
                     { urlButton: { displayText: `${global.linkbuttid1}`, url: `${global.butturl1}` } }
                     
                 ]})
                 
                 
                 
        } else if (pea[0].restrict == true) {
            
            let mbc= `Group Settings Change \n\nGroup info has been restricted, Now only admin can edit group info !`
            
            QueenCutie.sendMessage(pea[0].id, {
             image: await getBuffer(ppgc),    caption: mbc,
             footer: `Group Settings Change Message \n${global.mainfooter}`,
             mentions:[orgnye],
             templateButtons: [
                     { urlButton: { displayText: `${global.linkbuttid1}`, url: `${global.butturl1}` } }
                     
                 ]})
            
            
        } else if (pea[0].restrict == false) {
            
            let mbc= `Group Settings Change \n\nGroup info has been opened, Now participants can edit group info !`
            
            QueenCutie.sendMessage(pea[0].id, {
             image: await getBuffer(ppgc),    caption: mbc,
             footer: `Group Settings Change Message \n${global.mainfooter}`,
             mentions:[orgnye],
             templateButtons: [
                     { urlButton: { displayText: `${global.linkbuttid1}`, url: `${global.butturl1}` } }
                     
                 ]})
        } else {
            
            
            let mbc= `Group Settings Change \n\nGroup Subject has been changed to *${pea[0].subject}*`
            
            QueenCutie.sendMessage(pea[0].id, {
             image: await getBuffer(ppgc),    caption: mbc,
             footer: `Group Settings Change Message \n${global.mainfooter}`,
             mentions:[orgnye],
             templateButtons: [
                     { urlButton: { displayText: `${global.linkbuttid1}`, url: `${global.butturl1}` } }
                     
                 ]})
      }
     })




    //randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)








    QueenCutie.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await QueenCutie.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await QueenCutie.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                //Get Profile Picture Group\\
                try {
                    ppgroup = await QueenCutie.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }






            

            if (anu.action == 'add') {





            hesa = `${participants}`
      mestes = (teks) => {
                return teks.replace(/['@s whatsapp.net']/g, " ");
                }
        resa = `${mestes(hesa)}`
            const xtime = moment.tz('Asia/Colombo').format('HH:mm:ss')
      const xdate = moment.tz('Asia/Colombo').format('DD/MM/YYYY')
const xmembers = metadata.participants.length
            orgnye = num
            mbc = `
Hey @${num.split("@")[0]}
𝕎𝕖𝕝𝕔𝕠𝕞𝕖 𝕥𝕠 *${metadata.subject}*
𝕄𝕖𝕞𝕓𝕖𝕣 𝕟𝕦𝕞: *${xmembers}*
𝕁𝕠𝕚𝕟𝕖𝕕 : ${xtime} ${xdate}
\n ${metadata.desc}


*QueenCutie-MD*
`




                QueenCutie.sendMessage(anu.id, {
            image: await getBuffer(ppuser),    caption: mbc,
            footer: `${global.mainfooter}`,
        mentions:[orgnye],
            templateButtons: [
                { urlButton: { displayText: `${global.linkbuttid1}`, url: `${global.butturl1}` } }
                
            ]
        }, { quoted: m })
        
        
        
        
        
        
        
            } 
            
if (anu.action == 'remove') {





          
            hesa = `${participants}`
      mestes = (teks) => {
                return teks.replace(/['@s whatsapp.net']/g, " ");
                }
        resa = `${mestes(hesa)}`
                        const xtime = moment.tz('Asia/Colombo').format('HH:mm:ss')
      const xdate = moment.tz('Asia/Colombo').format('DD/MM/YYYY')
const xmembers = metadata.participants.length
                orgnye = num
            mbc = `
@${num.split("@")[0]} Left
𝕄𝕖𝕞𝕓𝕖𝕣 : *${xmembers}*
𝕃𝕖𝕗𝕥 : ${xtime} ${xdate}


*QueenCutie-MD*
`


QueenCutie.sendMessage(anu.id, {
image: await getBuffer(ppuser),    caption: mbc,
footer: `${global.mainfooter}`,
mentions:[orgnye],
templateButtons: [
{ urlButton: { displayText: `${global.linkbuttid1}`, url: `${global.butturl1}` } }
            ]
}, { quoted: m })






            }
        }
    } catch (err) {
        console.log(err)
    }
})






}


    //Setting\\
    QueenCutie.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    QueenCutie.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = QueenCutie.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    QueenCutie.getName = (jid, withoutContact  = false) => {
        id = QueenCutie.decodeJid(jid)
        withoutContact = QueenCutie.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = QueenCutie.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === QueenCutie.decodeJid(QueenCutie.user.id) ?
            QueenCutie.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    QueenCutie.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await QueenCutie.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\n
            N:${await QueenCutie.getName(i + '@s.whatsapp.net')}\n
            FN:${global.ownername}\n
            item1.TEL;waid=${i}:${i}\n
            item1.X-ABLabel:Click here to chat\n
            item2.EMAIL;type=INTERNET:${global.ytname}\n
            item2.X-ABLabel:YouTube\n
            item3.URL:${global.socialm}\n
            item3.X-ABLabel:GitHub\n
            item4.ADR:;;${global.location};;;;\n
            item4.X-ABLabel:Region\n
            END:VCARD`


	    })
	}
	QueenCutie.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }
    
    QueenCutie.setStatus = (status) => {
        QueenCutie.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
    if (worktype = 'public')
     QueenCutie.public = true
    else 
    QueenCutie.public = false




    QueenCutie.serializeM = (m) => smsg(QueenCutie, m, store)

    QueenCutie.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); QueenCutie.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startcutie(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startcutie(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); QueenCutie.logout(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); QueenCutie.logout(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startcutie(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startcutie(); }
            else QueenCutie.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
        console.log('Connected...', update)
    })

    QueenCutie.ev.on('creds.update', saveState)

    // Add Other
    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    QueenCutie.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: QueenCutie.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            QueenCutie.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    QueenCutie.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        QueenCutie.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    QueenCutie.sendText = (jid, text, quoted = '', options) => QueenCutie.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    QueenCutie.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await QueenCutie.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    QueenCutie.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await QueenCutie.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    QueenCutie.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await QueenCutie.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    QueenCutie.sendTextWithMentions = async (jid, text, quoted, options = {}) => QueenCutie.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    QueenCutie.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await QueenCutie.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    QueenCutie.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await QueenCutie.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    QueenCutie.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    QueenCutie.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    QueenCutie.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await QueenCutie.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await QueenCutie.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    QueenCutie.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await QueenCutie.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    QueenCutie.cMod = (jid, copy, text = '', sender = QueenCutie.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === QueenCutie.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


//send 5 button image by  
    QueenCutie.send5ButImg = async (jid , text = '' , footer = '', img, but = [], thumb, options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img, jpegThumbnail:thumb }, { upload: QueenCutie.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            QueenCutie.relayMessage(jid, template.message, { messageId: template.key.id })
    }


    //send5butvid by  
        QueenCutie.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: vid }, { upload: QueenCutie.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            QueenCutie.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    
    
    //send5butmsg by  
            QueenCutie.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        QueenCutie.sendMessage(jid, templateMessage)
        }


//sendlistmsg by  
        QueenCutie.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        QueenCutie.sendMessage(jid, listMes, { quoted: quoted })
        }


    //send5butgif by  
        QueenCutie.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true }, { upload: QueenCutie.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            QueenCutie.relayMessage(jid, template.message, { messageId: template.key.id })
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    QueenCutie.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    return QueenCutie
}

startcutie()

}, 4000)

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>QueenCutie-MD</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
    Hello from QueenCutie!
    </section>
  </body>
</html>
`
app.get("/", (req, res) => res.type('html').send(html));
app.listen(port, () => console.log(`QueenCutie Server listening on port http://localhost:${port}!`));

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
