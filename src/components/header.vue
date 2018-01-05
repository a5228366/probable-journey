<template lang="html">
  <header class="header cd-header">
		<div id="cd-logo"><a href="javascript:void(0)">my logo</a></div>
		<nav class="cd-main-nav-bar">
      <div class="navi_body">
  			<div class="navi_head">
  				<div style="width:80%; margin-left:auto; margin-right:auto;">
  					<span>
  						<p class="navi_title"><icon name = "home"></icon>首 页</p>
              <p class="navi_detail"><a href="javascript:void(0)">团队介绍</a></p>
              <p class="navi_detail"><a href="javascript:void(0)">团队介绍</a></p>
              <p class="navi_detail"><a href="javascript:void(0)">团队介绍</a></p>
              <p class="navi_detail"><a href="javascript:void(0)">团队介绍</a></p>
  					</span>
  					<span>
  						<p class="navi_title"><icon name = "coffee"></icon>关于我们</p>
  						<p class="navi_detail"><a href="javascript:void(0)">团队介绍</a></p>
  						<p><a href="javascript:void(0)">服务QQ群</a></p>
  						<p><a href="javascript:void(0)">个人业务</a></p>
  					</span>
  					<span>
  						<p class="navi_title"><icon name = "steam"></icon>软件下载</p>
  						<p class="navi_detail"><a href="javascript:void(0)">WEB编译工具</a></p>
  						<p><a href="javascript:void(0)">桌面整理工具</a></p>
  					</span>
  					<span>
  						<p class="navi_title"><icon name = "github-alt"></icon>招贤纳士</p>
  						<p class="navi_detail"><a href="javascript:void(0)">WEB前端工程师</a></p>
  						<p><a href="javascript:void(0)">JAVAWEB工程师</a></p>
  						<p><a href="javascript:void(0)">APP开发工程师</a></p>
  						<p><a href="javascript:void(0)">数据库工程师</a></p>
  						<p><a href="javascript:void(0)">软件架构师</a></p>
  						<p><a href="javascript:void(0)">技术客服</a></p>
  					</span>
  					<span>
  						<p class="navi_title">给我留言</p>
  						<p class="navi_detail"><a href="javascript:void(0)">站内留言</a></p>
  						<p><a href="javascript:void(0)">站长信箱</a></p>
  					</span>
  				</div>
  			</div>
  		</div>
		</nav> <!-- cd-main-nav -->
	</header>
</template>
<script>
export default {
}
</script>

<style lang="css">
  .header {
    background-color : rgba(173, 172, 255, 0.5);
  }
  svg{
    top: 3px;
    margin-right: 0.3rem;
    position: relative;
  }
  .cd-main-nav-bar {
    float: right;
  	margin-right: 5%;
    cursor: pointer;
  }
  .cd-logo {
    display: inline-block;
  }
  @media screen and (max-width: 768px){
    .cd-main-nav-bar {
      width: 50%;
      display: inline-block;
      margin: 0;
      cursor: pointer;
    }
    #cd-logo {
      display: inline-block;
    }
    .navi_detail a{
      border-bottom:0.01rem solid #fff;
    }
    .navi_body:hover{
    	height:220px;
    }
  }
  .navi_head{
  	height:50px;
  }

  .navi_body{
  	overflow:hidden;
  	height:100%;
  	background:rgba(126,125,166,0.9);
  	transition:height ease 0.5s;
  }


  .navi_head>div>span{
  	width:150px;
  	text-align:center;
  	height:300px;
  	display:inline-block;
  	font-weight:bold;
  	color:#FFF;
  	font-size:14px;
  	vertical-align:top;
  }

  .navi_head>div>span>p a{
  	color:#FFF;
  	text-decoration:none;
  }
  .navi_head>div>span>p a:hover{
  	color:#FFF;
  	text-decoration:underline;
  }

  .navi_title{
  	font-size:16px;
  	line-height:50px;
  	margin-top:0;
  }
  @media screen and (min-width: 768px){
    .navi_head>div>span:hover{
    	background:rgba(100,100,100,0.2);
    }
    #cd-logo {
      display: block;
    }
    .navi_head {
      margin-top: 2%;
    }
    .navi_body:hover{
      height:300px;
    }
  }

</style>
