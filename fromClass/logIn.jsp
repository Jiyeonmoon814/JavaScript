<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	//localhost:8090/WebClient/Ex08_login.jsp?txtuserid=kglim&txtpwd=1004 
	//서버에 받기
	String id = request.getParameter("txtUserId");
    String pwd = request.getParameter("txtPwd");
    //검증..... 하거나 . DB 작업 ....
%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
서버 전송 완료 DB  확인 ^^<br>
<%= id %>
<hr>
<%= pwd %>
</body>
</html>

