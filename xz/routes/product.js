const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器
var router=express.Router();
//添加路由
//1.商品列表
router.get('/list',function(req,res){
	//获取数据
	var obj=req.query;
	//console.log(obj);
	//验证是否为空
	var pno=obj.pno;
	var size=obj.size;
	if(!pno) pno=1;
	if(!size) size=9;
	//转为整形
	pno=parseInt(pno);
	size=parseInt(size);
	//计算开始查询的值
	var start=(pno-1)*size;
	//执行SQL语句
	pool.query('SELECT lid,price,title FROM xz_laptop LIMIT ?,?',[start,size],function(err,result){
	 if(err) throw err;
	 res.send(result);
	})

 });
//2.商品的详情
//3.商品添加
//4.删除商品
//5.修改商品






  //导出路由器
  module.exports=router;