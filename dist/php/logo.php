<?php 
	header("Content-type:text/html;charset=utf-8");
	/*
		设置一个统一的返回格式
	*/
	$responseData = array("code" => 0, "message" => "");
	/*
		取出post提交过来的数据
	*/
	$username = $_POST['username'];
    $password = $_POST['password'];
    $phone = $_POST['phone'];
	/*
		简单的验证
	*/
	if(!$username){
		$responseData["code"] = 1;
		$responseData["message"] = "用户名不能为空";
		echo json_encode($responseData);
		exit;
	}
	if(!$password){
		$responseData["code"] = 2;
		$responseData["message"] = "密码不能为空";
		echo json_encode($responseData);
		exit;
	}
    if(!$phone){
		$responseData["code"] = 3;
		$responseData["message"] = "手机号不能为空";
		echo json_encode($responseData);
		exit;
    }
	//登录
	$link = mysql_connect("localhost", "root", "123456");
	if(!$link){
		$responseData["code"] = 4;
		$responseData["message"] = "服务器忙";
		echo json_encode($responseData);
		exit;
	}
	mysql_set_charset("utf8");

	mysql_select_db("lemall");
	//准备sql语句，进行登录验证
	$sql = "SELECT * FROM lemall WHERE username='{$username}'";
	$res = mysql_query($sql);
	$row = mysql_fetch_assoc($res);
	if($row){
		$responseData["code"] = 5;
		$responseData["message"] = "用户名已注册";
		echo json_encode($responseData);
		exit;
	}
	//密码要进行md5加密
	$str = md5(md5(md5($password)."qianfeng")."qingdao");

	//注册
	$sql = "INSERT INTO lemall(username,password,phone) VALUES('{$username}','{$password}',{$phone})";

	$res = mysql_query($sql);
	if(!$res){
		$responseData["code"] = 6;
		$responseData["message"] = "服务器忙";
		echo json_encode($responseData);
		exit;
	}else{
		$responseData["message"] = "注册成功";
		echo json_encode($responseData);
	}
	mysql_close($link);
 ?>