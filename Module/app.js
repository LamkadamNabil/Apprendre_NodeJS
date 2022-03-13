const calculator =require('./calc')
const path =require('path');
const os = require('os');
const fs=require('fs');
const EventEmitter = require('events');
const http=require('http')
//console.log(calculator.MyExp_add(1,2))
/// _filename, _dirname and Path Module 
console.log(path.parse(__filename))
///Operating System Module (info sur machine serveur)

console.log(os.cpus())//cpu
let totalMemory=os.totalmem();
let freeMemory=os.freemem();

console.log(freeMemory +" ||||| "+ totalMemory)

///File System Module 'manipule les fichier dans cote serveur

const files= fs.readdirSync('./')
console.log(files)


//////Events Module 
const MyEvent=new EventEmitter();
MyEvent.on("Allo",(num,msg)=>{
    console.log("salam al hajj",num,msg)
})
MyEvent.emit('Allo',123456,"je suis nabil")//signal


///HTTP Module Communication réseau avec le serveur (très important)

const server =http.createServer(function(req,res){
            if (req.url==='/'){
                res.write("hi everyone")
                res.end()
            }
             if(req.url==='/api/product')
            {
                res.write(JSON.stringify(['node','express','react','nest']));
                res.end();
            }
});//cree un server
   server.on('connection',()=>{
       console.log("new connection")
   })
server.listen(4000);





