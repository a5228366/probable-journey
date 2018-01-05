<template lang="html">
  <div id="loading">
    <div id="loading-center">
      <div v-if="showQuestion" id="loading-center-absolute">
        <div class="object" id="object_four"></div>
        <div class="object" id="object_three"></div>
        <div class="object" id="object_two"></div>
        <div class="object" id="object_one"></div>
      </div>
      <div v-if="!showQuestion" id="loading-center-absolute">
        <ul>
          <LareaPick v-if="!isBigWindow"></LareaPick>
          <li v-if="isBigWindow"><input  class="button citySelect" id="citySelect" type="text" name="citySelect" placeholder="选择或输入城市"/></li>
          <li v-for="i in questionList">
            <button class="button" type="button" name="button">
              <span>{{i}}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Larea from '../units/Larea.js'
import lareaData from '../units/LareaData.js'
import LareaPick from './aearPick'
import ArarPick from '../units/AreaPickForPC.js'
export default {
  components: {LareaPick},
  data () {
    return {
      showQuestion: false,
      questionList: ['风景', '刺激', '冷门'],
      isBigWindow: true
    }
  },
  created () {
    this.getBodySize()
  },
  mounted () {
    this.areaInputInit()
  },
  methods: {
    getBodySize () {
      //获取页面可见高度
      debugger
      let w = document.documentElement.clientWidth
      if (w <= 768) {
        this.isBigWindow = false
        console.log(this.isBigWindow)
      }
    },
    lareaInit () {
      let areaPhone = new Larea()
      areaPhone.init({
        'trigger': '#areaInput',  //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
        'valueTo': '#areaValue',  //选择完毕后id属性输出到该位置
        'keys': {id:'id',name:'name'},  //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
        'type': 1,  //数据源类型
        'data': lareaData.data //数据源
      })
    },
    areaInit (){
      let areaPC= new ArarPick({input:'citySelect'})
    },
    areaInputInit () {
      if (!this.isBigWindow) {
        this.lareaInit()
      }else {
        this.areaInit()
      }
    }
  }
}
</script>

<style lang="css">
/* --------------------------------

loadding

-------------------------------- */
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #fff; opacity:1;
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #fff;opacity:1;
}

input:-ms-input-placeholder{
    color: #fff;opacity:1;
}

input::-webkit-input-placeholder{
    color: #fff;opacity:1;
}
#loading	{
	background-color: rgba(79,79,79,0.9);
	height: 100%;
	width: 100%;
	position: fixed;
	z-index: 2;
	margin-top: 0px;
	top: 0px;
}
#loading-center	{
	width: 100%;
	height: 100%;
	position: relative;
	}
#loading-center-absolute {
  width: auto;
	position: absolute;
	left: 35%;
	top: 35%;
	height: auto;
	margin-top: -100px;
	margin-left: -100px;
  line-height: 1rem
}
.object	{
  -moz-border-radius: 50% 50% 50% 50%;
	-webkit-border-radius: 50% 50% 50% 50%;
	border-radius: 50% 50% 50% 50%;
	position: absolute;
	border-left: 5px solid #FFF;
	border-right: 5px solid #FFF;
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
	-webkit-animation: animate 2s infinite;
	animation: animate 2s infinite;
	}

#object_one	{
	left: 75px;
	top: 75px;
	width: 50px;
	height: 50px;
	}

#object_two	{
	left: 65px;
	top: 65px;
	width: 70px;
	height: 70px;
	-webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
	}

#object_three	{
	left: 55px;
	top: 55px;
	width: 90px;
	height: 90px;
	-webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
	}
#object_four	{
	left: 45px;
	top: 45px;
	width: 110px;
	height: 110px;
	-webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
	}

@-webkit-keyframes animate {
	50% {
		-ms-transform: rotate(180deg);
	   	-webkit-transform: rotate(180deg);
	    transform: rotate(180deg);
  }
	100% {
		-ms-transform: rotate(0deg);
	   	-webkit-transform: rotate(0deg);
	    transform: rotate(0deg);
  }
}

@keyframes animate {
	50% {
		-ms-transform: rotate(180deg);
	   	-webkit-transform: rotate(180deg);
	    transform: rotate(180deg);
  }
	100% {
		-ms-transform: rotate(0deg);
	   	-webkit-transform: rotate(0deg);
	    transform: rotate(0deg);
	}
}
/* 问题列表 */
#loading-center-absolute li {
    float: left;
    padding-right: 12rem;
    list-style-type: none;
    display: inline-block;
    margin-top: 5rem;
}
@media screen and (min-width: 768px) and (max-width: 1070px){
  #loading-center-absolute li {
      list-style-type:none;
      display: inline-block;
      margin-left: 1em;
  }
}
@media screen and (max-width: 768px){
  #loading-center-absolute li {
      list-style-type: none;
      display: block;
      margin-top: 1rem;
  }
}
.button {
  display: inline-block;
  border-radius: 5px;
  background-color: #f4511e;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 1.45rem;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '»';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 2;
  right: 0;
}
/* PC版的城市选择 */
.citySelector{font:12px/1.5 tahoma,arial,\5b8b\4f53;background:#fff;text-align:left;}
.cityslide{width:250px;list-style:none;margin:0;padding:0;border:1px solid #85BEE5;border-right-color:#3485C0;border-bottom-color:#3485C0;box-shadow:2px 2px 3px rgba(0,0,0,0.3);margin-top:-2px;}
.cityslide li{list-style:none;overflow:hidden;padding:4px 5px;}
.cityslide li.on{background:#9CD9FF;color:#fff;}
.cityslide li b{font-weight:normal;}
.cityslide li.empty{background:#fff2e8;color:#666;}
.cityslide li.empty em{color:red;font-style:normal;}
.cityname{float:left;}
.cityspell{float:right;}
.cityBox{width:320px;border:1px solid #85BEE5;overflow:hidden;box-shadow:2px 2px 3px rgba(0,0,0,0.3);}
.cityBox ul{margin:0;padding:0;overflow:hidden;}
.cityBox ul li{float:left;list-style:none;padding:2px 4px;border:1px solid #85BEE5;cursor:pointer;margin-left:4px;display:inline;background:#E1EFFE;}
.cityBox ul li.on{background:#fff;border-bottom-color:#fff;position:relative;}
.hide{display:none;}
p.tip{color:#666;line-height:20px;padding:5px;margin:0;text-indent:3px;}
.hotCity{border-top:1px solid #85BEE5;margin-top:-1px;clear:left;overflow:hidden;padding-bottom:5px;padding-top:5px;_margin-bottom:8px;}
.cityTab{overflow:hidden;}
.cityTab dl{margin:0;padding:0;overflow:hidden;}
.cityTab dl dt{float:left;padding-left:3px;color:#F30;text-indent:5px;font-family:"Lucida console","consolas","courier new";line-height:22px;font-size:14px;width:20px;}
.cityTab dl dd{margin-left:2px;float:left;width:290px;}
.cityTab dl dd a{padding-left:5px;width:66px;line-height:22px;display:inline-block;color:#000;text-decoration:none;}
.cityTab dl dd a:hover{text-decoration:underline;color:red}
/* .cityinput{ font-size: 12px; padding-left: 2px; background: url(T1EPyLXm0hXXXXXXXX-200-100.png) no-repeat 150px 5px; border: 1px solid #D8D8D8; } */
</style>
