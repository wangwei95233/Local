window.Model = function(options){
    let resourceName = options.resourceName
    return {
        init: function(){
            var APP_ID = '9QrxMqilftPrW89VO67n1oiN-gzGzoHsz'
            var APP_KEY = 'y2PxlToryv0azv7Dm3L9TKpb'       
            AV.init({appId: APP_ID,appKey: APP_KEY})
        },
        fetch: function(){
            var query = new AV.Query(resourceName)
            return query.find() // Promise对象
        },
        save: function(object){
            var X = AV.Object.extend(resourceName)
            var x = new X()
            return x.save(object)
        }
    }
}