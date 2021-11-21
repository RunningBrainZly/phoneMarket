import axios from 'axios'
import testDate from 'network/mockTestData'



// axios  的封装



export function request(config) {
  const ax =  new axios({
    method:'get',
    url:'/home/data',
    timeout:2000,
    headers:{
      'content-type':'application/x-www-form-urlencoded'
    }
  })
  return ax;
}
