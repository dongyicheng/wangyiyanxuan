let express = require('express'); // express：node的一个框架
let bodyParser = require('body-parser');
let app = express();

let fs = require('fs');
const cartPath = __dirname + '/mock/cartList.txt';

app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin',"http://localhost:9000");//来源的域名和端口号
  res.header('Access-Control-Allow-Headers',"Content-Type,Accept");//允许的跨域头
  res.header('Access-Control-Allow-Methods',"GET,POST,PUT,OPTIONS,DELETE");//允许的方法
  //如果请求的方法名是OPTIONS的话，则直接结束 请求
  //options探测请求 当客户端发送post请求之后行发送一个options请求，看看服务器支持不支持post请求
  if(req.method == 'OPTIONS'){
      return res.sendStatus(200);
  }else{
    next();
  }
});

app.use(bodyParser.json());

// 获取轮播图
let sliders = require('./mock/sliders');
app.get('/getSliders',function(req,res){
    res.json(sliders);
});

// 获取分类信息
let category = require('./mock/category');
app.get('/getCategory',function(req,res){
    res.json(category);
});

// 获取首页列表信息
let list = require('./mock/list');
app.get('/getList/',function(req,res){
  let list = JSON.parse(JSON.stringify(list));//深度克隆lessons
  res.json({
      list
  });
});

// 获取购物车列表信息
let cartList = require('./mock/cart');
app.get('/getCartList/',function(req,res){
    /*let cart_list = list.filter((item,index) => {
        if(cartList.indexOf(item.id) !== -1){
            item.num = 1;
            item.isSelected = false;
            return item;
        }
    })*/
    fs.readFile(cartPath,'utf8',(err,data) => { // 异步过程；读取完毕后，会触发对应的回调函数
        if(!err){
            res.json(JSON.parse(data));
        }
    });

});

app.post('/setNum',function(req,res){
    let i = req.body.i;//得到请求体 body-parser中间件
    let num = req.body.num;//得到请求体 body-parser中间件

    let cart_list = null;
    fs.readFile(cartPath,'utf8',(err,data) => { // 异步过程；读取完毕后，会触发对应的回调函数
        if(!err){
            cart_list = JSON.parse(data);
            cart_list[i]["num"] += num;
            fs.writeFile(cartPath,JSON.stringify(cart_list),'utf8',(err,data) => {
                if(!err){
                    res.json(cart_list);
                }
            });

        }
    });

});

app.post('/setChoose',function(req,res){
    let i = req.body.index;//得到请求体 body-parser中间件

    let cart_list = null;
    fs.readFile(cartPath,'utf8',(err,data) => { // 异步过程；读取完毕后，会触发对应的回调函数
        if(!err){
            cart_list = JSON.parse(data);
            cart_list[i]["isSelected"] = !cart_list[i]["isSelected"];
            fs.writeFile(cartPath,JSON.stringify(cart_list),'utf8',(err,data) => {
                if(!err){
                    res.json(cart_list);
                }
            });

        }
    });

});

app.listen(3001);