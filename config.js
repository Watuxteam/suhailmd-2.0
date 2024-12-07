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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/";
global.website=process.env.GURL || "https://whatsapp.com/channel/" ; 
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_50_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA0OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA4MixcbiAgICAgICAgNzQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDMyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDcxLFxuICAgICAgICA2MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDcxLFxuICAgICAgICA0NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgODcsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxLFxuICAgICAgICAyNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDYzLFxuICAgICAgICA1NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAwLFxuICAgICAgICAzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYwLFxuICAgICAgICAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA0LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNyxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMxLFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMwLFxuICAgICAgICA3NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgzLFxuICAgICAgICA3MSxcbiAgICAgICAgMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNixcbiAgICAgICAgMTIzLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNGZ1d2ZSdXExZXpmKzk2UDNQZTdaRHdKbDByQlZ5dXdNbXk5RUEvdHZJZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSWFYeVp5bDhSQTY4eFJiTnR4amRlUVwiLFxuICBcInBob25lSWRcIjogXCI0YmY2ZTNjYS00Zjk1LTQ3MGItOGM0OS1mODE4ZDFlY2ZjZTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc4LFxuICAgICAgODcsXG4gICAgICA2NixcbiAgICAgIDcyLFxuICAgICAgNDUsXG4gICAgICAzOCxcbiAgICAgIDEzNyxcbiAgICAgIDg5LFxuICAgICAgMTUyLFxuICAgICAgMTA5LFxuICAgICAgMjM5LFxuICAgICAgMTMwLFxuICAgICAgMTE2LFxuICAgICAgODgsXG4gICAgICAxNjIsXG4gICAgICAxMTYsXG4gICAgICA2NixcbiAgICAgIDM3LFxuICAgICAgMjQ4LFxuICAgICAgMTY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMyLFxuICAgICAgMTUsXG4gICAgICA0NCxcbiAgICAgIDE3MixcbiAgICAgIDExMCxcbiAgICAgIDExOSxcbiAgICAgIDEzNSxcbiAgICAgIDczLFxuICAgICAgMTgzLFxuICAgICAgMixcbiAgICAgIDk2LFxuICAgICAgNzgsXG4gICAgICAxMjgsXG4gICAgICAxMzIsXG4gICAgICAwLFxuICAgICAgMjUyLFxuICAgICAgMTU0LFxuICAgICAgMjM5LFxuICAgICAgMjMwLFxuICAgICAgMjA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNMNkhBUzJWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3ODg5MjU1NDU6NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJQcm9mIEZvcW9cIixcbiAgICBcImxpZFwiOiBcIjE5MjgyNzI4Nzk2NTkyOTo3NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKMkc4ZGtHRU82STBib0dHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1BdkVmSS9HSXVGVGIyQlBNN2VuWE1QRTJsbVZjKzdDQkwzeVBab0FLRGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZUtMUnA1dWZnYXhqbzB3OWtIbUpHTmozRldmdjY1dFpOZ2s1WkUwU1FEWlI2MHJNSmhQbllWMTEwZTdzTHNucGNHaU5JeWI4Vk5ycTZjeW1jWVF1Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTjRYM3dic1ZtOGpuUWthbkp0c0RwczZFZXY5V1JVcWJmekVmVmlhYXB4RlNYUDg5UEVNQnJRWDFFQ1hLWlpNUWh6OWduT0Z1N0x0YmVTYzd3N0VjQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Nzg4OTI1NTQ1Ojc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNTc1Nzk0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
