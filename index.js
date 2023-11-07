//import json server package
const jsonserver=require('json-server')

//create jsonserver
const server=jsonserver.create()

const router=jsonserver.router("db.json")

//create middleware
const middleware=jsonserver.defaults()

//create port for backend
const PORT=process.env.PORT||4000

//middleWARE use in server
server.use(middleware)
server.use(router)

server.listen(PORT,()=>{
    console.log('media player started at port :'+PORT);
})