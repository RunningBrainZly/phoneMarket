import mock from 'mockjs'
//获取随机对象
const Random = mock.Random;
// mock一组数据
const banners = function() {
  let articles = [];
  for (let i = 0; i < 4; i++) {
    let newArticleObject = {
        image:Random.dataImage('750x390'),
    }
    articles.push(newArticleObject)
  }
  return articles;
}

const recommends = function(){
  let data = [];
  for(let i = 0; i < 4; i++){
    let dataItem = {
      image:Random.dataImage('70x70'),
    }
    data.push(dataItem)
  }
  return data
}
// Mock.mock( url, post/get , 返回的数据)；
mock.mock('/home/data', 'get', banners);
mock.mock('/home/recommendsData','get',recommends)

