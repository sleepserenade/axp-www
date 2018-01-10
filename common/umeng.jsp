<%--
  Created by IntelliJ IDEA.
  User: Yi
  Date: 2016-11-15
  Time: 17:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>

</head>
<%@ include file="cs.jsp" %>
<%CS cs = new CS(1259564693);cs.setHttpServlet(request,response);
    String imgurl = cs.trackPageView();%>
<img src="<%= imgurl %>" width="0" height="0"  />
<script src="js/jquery-2.1.4.min.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1259564693'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s11.cnzz.com/z_stat.php%3Fid%3D1259564693%26online%3D1' type='text/javascript'%3E%3C/script%3E"));$("#cnzz_stat_icon_1259564693").css("display", "none");</script>

<body>

</body>
</html>
