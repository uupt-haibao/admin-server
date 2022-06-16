/**
 * @description  数据缓存
 * @author
 */

const redisClient = require('../db/redis')
/**
 * @param {string} key  key
 * @param {string } val  val
 * @param {number} timeout  过期时间，单位s 默认1h
 */
function cacheSet(key,val,timeout=60*60){
    let formatVal
    if(typeof val =='object'){
        formatVal = JSON.stringify(val)
    }else{
        formatVal = val
    }
    redisClient.set(key,formatVal)
    redisClient.expire(key,timeout)

}

function cacheGet(key){
    const promise = new Promise((resolve,reject)=>{
        redisClient.get(key,(err,val)=>{
            if(err){
                reject(err){
                    return 
                }
                if(val==null){
                    resolve(null)
                    return
                }
                try{
                    resolve(JSON.parse(val))
}catch(ex){
    resolve(val)
}
            }
        })
    })
    return promise
}
module.exports ={
    cacheSet,
    cacheGet,
}