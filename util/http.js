// request 类下面的函数，一般叫做 方法，request方法
//导入 /config.js 文件里的 config,可以用 as 换名字
import {config} from '../config.js'
class HTTP{
  request(params){
    //URL, data, method,
    if(!params.method){
      params.method="GET"
    }
    wx.request({
      url:config.api_base_url + params.url,
      method:params.method,
      data:params.data,
      header:{
        'content-type':'application/json',
        'appkey':config.appkey
      },
      success:(res) => {
        let code = res.statusCode.toString()
        if (code.startsWith('2')){          
        }
        else{
        }
      },
      fail:(err)=>{        
      }

    })
  }
}

export{HTTP}