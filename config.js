const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_49_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMixcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU1LFxuICAgICAgICA2LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDY3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDczLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDczLFxuICAgICAgICAxMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxODEsXG4gICAgICAgIDU1LFxuICAgICAgICA0NixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMyxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODgsXG4gICAgICAgIDQwLFxuICAgICAgICA2NixcbiAgICAgICAgMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTksXG4gICAgICAgIDgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDg5LFxuICAgICAgICA3OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MixcbiAgICAgICAgMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDU4LFxuICAgICAgICAzNixcbiAgICAgICAgOTgsXG4gICAgICAgIDksXG4gICAgICAgIDE2MixcbiAgICAgICAgNjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5LFxuICAgICAgICA5MixcbiAgICAgICAgMjQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxODEsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgODEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNBUisySUsveHp3Q29RbS9VZ0g2dnNiZzFmeGxoRVZHRG9rdG1GQnhGQWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNJZEpxaWs2UXIyX2JfcVVNWkZ4bWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTVhZGJlODktZGQyNC00NzM1LWJmYjctOTQ3ODM2M2E3YzBhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDIyOSxcbiAgICAgIDEwNixcbiAgICAgIDc2LFxuICAgICAgMjExLFxuICAgICAgODksXG4gICAgICAxNzUsXG4gICAgICAxOTAsXG4gICAgICAxMDQsXG4gICAgICAxNzcsXG4gICAgICAxNDQsXG4gICAgICAyMzMsXG4gICAgICAyNixcbiAgICAgIDIyMCxcbiAgICAgIDQxLFxuICAgICAgMTcxLFxuICAgICAgMTIwLFxuICAgICAgMTk0LFxuICAgICAgMjI3LFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMxLFxuICAgICAgMTk1LFxuICAgICAgMjAsXG4gICAgICA4LFxuICAgICAgMjA4LFxuICAgICAgNixcbiAgICAgIDE5MSxcbiAgICAgIDIzMSxcbiAgICAgIDI0NSxcbiAgICAgIDI0OCxcbiAgICAgIDQ0LFxuICAgICAgODYsXG4gICAgICAxODUsXG4gICAgICAyMDUsXG4gICAgICAyMDAsXG4gICAgICA4MyxcbiAgICAgIDcwLFxuICAgICAgMTQzLFxuICAgICAgNjUsXG4gICAgICA5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSRTgzU0hQQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjg1ODQ0NjM1OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzODA0OTU2ODI2ODQ2NzozMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMMlpocTRGRUw2bno3b0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInphanNOL0h1Tk1vQkZQVVJob0grZ2ZlSHpSZEdyMmtVSjRTUmJkR0VTVE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUldJS2ZscGxtVGM3cEdYZE5TdFVWSklMb3VwUnNueUpOdVgwVzNON2gya2d6c0t1ZXUyTTZ2MmEyU04vbi8rVytYcVBjTGw3M0lLZk9nVFJkRzFUQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZTJyckQ0ZExNNlMyMjVoK21MZXRQZHBkNWluNnNoZmFYbm9ZSTg3VnU3RHBOYktvVWdJQmphSUFiMk1ZTFNGYm5LbzgwNisxWHJwQ2xBODFrRmVnQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjg1ODQ0NjM1OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNTQ2OTQ2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR1BiXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHUGIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsMTBrS29nS3d0VFU1c2FBVHZZKzViWGlhRjN6bXdiVHpOdWxNOXpObGtnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0Mzg3NDc4MzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM1NDA1MDcxODlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
