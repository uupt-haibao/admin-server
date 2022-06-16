
const  { cacheSet } = require('../index')
// cache key  前缀，必须和biz-editor-server 保持一致，且必须连接一个redis-server
const PREFIX = 'publishWorkId-'

function piblishWorkClearCache(id){
    const key = `${PREFIX}${id}`
    cacheSet(
        key,
        '' // 清空内容
    )
}
module.exports ={
    publishWorkClearCache,
}