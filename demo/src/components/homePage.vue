<template>
  <div class="homePage">
    <div class="header_area">
      <div class="header_area_left fl">
        湖南
      </div>
      <div class=" header_area_right">
        <input class="head_inp"
          type="text"
          placeholder="请输入搜索内容">
      </div>

    </div>
    <div class="banner_area">
      <swiper class="integral_banner_swiper"
        loop
        auto
        :aspect-ratio="24/69"
        :dots-position="'center'"
        :dots-class="'integral_dots'">
        <swiper-item v-for="item in bannerList"
          :key="item.imgSrc">
          <div class="banner_img_box">
            <img :src="item.imgSrc">
          </div>
        </swiper-item>
      </swiper>

    </div>
    <div class="nav_area">
      <div class="banner_arc">
      </div>
      <div style="    margin-top: -4.3rem;">
        <ul>
          <li><a href="">
              <div>

                <img src="../assets/images/fu_icon.png"
                  style="width:100%;height:100%;border-radius:50%;"
                  alt="">
              </div>女装
            </a></li>
          <li><a href="">
              <div>
                <img src="../assets/images/fu_icon.png"
                  style="width:100%;height:100%;border-radius:50%;"
                  alt=""></div>男装
            </a></li>
          <li><a href="">
              <div><img src="../assets/images/fu_icon.png"
                  style="width:100%;height:100%;border-radius:50%;"
                  alt=""></div>包包
            </a></li>
          <li><a href="">
              <div><img src="../assets/images/fu_icon.png"
                  style="width:100%;height:100%;border-radius:50%;"
                  alt=""></div>手表配饰
            </a></li>
          <li><a href="">
              <div><img src="../assets/images/fu_icon.png"
                  style="width:100%;height:100%;border-radius:50%;"
                  alt=""></div>家居内衣
            </a></li>
        </ul>
        <ul>
          <li><a href="">
              <div><img src="../assets/images/fu_icon.png"
                  style="width:100%;height:100%;border-radius:50%;"
                  alt=""></div>面部护肤
            </a></li>
          <li><a href="">
              <div><img src="../assets/images/fu_icon.png"
                  style="width:100%;height:100%;border-radius:50%;"
                  alt=""></div>彩妆专场
            </a></li>
          <li><a href="">
              <div><img src="../assets/images/fu_icon.png"
                  style="width:100%;height:100%;border-radius:50%;"
                  alt=""></div>家具电器
            </a></li>
          <li><a href="">
              <div><img src="../assets/images/fu_icon.png"
                  style="width:100%;height:100%;border-radius:50%;"
                  alt=""></div>手机数码
            </a></li>
          <li><a href="">
              <div><img src="../assets/images/fu_icon.png"
                  style="width:100%;height:100%;border-radius:50%;"
                  alt=""></div>鞋子
            </a></li>
        </ul>
      </div>

    </div>
    <div class="ad_area">
      <div class="ad_area_msg">
        <swiper auto
          height="30px"
          direction="vertical"
          :interval=2000
          class="text-scroll"
          :show-dots="false">
          <span style="float:left;">同城交易</span>
          <swiper-item>
            <p>同城交易，看上了就有人给你送回家</p>
          </swiper-item>
          <swiper-item>
            <p>同城交易，一个走在路上就可以下单的软件</p>
          </swiper-item>
          <swiper-item>
            <p>同城交易，一个可以在网上砍价的购物平台</p>
          </swiper-item>
          <swiper-item>
            <p>同城交易，一个可以在网上砍价的购物平台</p>
          </swiper-item>
          <swiper-item>
            <p>同城交易，一个可以在网上砍价的购物平台</p>
          </swiper-item>
          <swiper-item>
            <p>同城交易，一个可以在网上砍价的购物平台</p>
          </swiper-item>
        </swiper>
      </div>
    </div>
    <div class="sale_area">

      <ul>

        <li>
          <h4><i></i> 同城抢购 <span>15</span>:<span>06</span>:<span>63</span></h4>
          <div class="sale_area_body">
            <div>
              <p>限时限量抢半价</p>
              <img src="../assets/images/s5.png"
                alt="">
            </div>
            <div><img src="../assets/images/s6.png"
                alt=""></div>
          </div>

        </li>
        <li>
          <h4><i></i> 同城抢购 <span>15</span>:<span>06</span>:<span>63</span></h4>
          <div class="sale_area_body">
            <div>
              <p>限时限量抢半价</p>
              <img src="../assets/images/s7.png"
                alt="">
            </div>
            <div><img src="../assets/images/s8.png"
                alt=""></div>
          </div>

        </li>
      </ul>

    </div>
    <div class="bottomNav_area">
      <!-- <div class="bottomNav"> -->
      <div>
        <img src="../assets/images/homePage.png"
          alt="">
        首页
      </div>
      <div>
        <img src="../assets/images/order.png"
          alt="">
        订单
      </div>
      <div>
        <router-link to="myInfo"
          style="display:block;"><img src="../assets/images/mine.png"
            alt="">
          我的</router-link>

      </div>
      <!-- </div> -->

    </div>
  </div>

</template>

<script>
import { Icon, Swiper, SwiperItem } from "vux";

// const demoList = imgList.map((one, index) => ({
//   url: "javascript:",
//   img: one
// }));
export default {
  name: "homePage",
  data() {
    return {
      bannerList: [
        //广告图片
        { imgSrc: require("../assets/images/banner1.jpg") },
        { imgSrc: require("../assets/images/banner2.jpg") },
        { imgSrc: require("../assets/images/banner3.jpg") },
        { imgSrc: require("../assets/images/banner4.jpg") },
        { imgSrc: require("../assets/images/banner5.jpg") }
      ]
    };
  },
  components: {
    Icon,
    Swiper,
    SwiperItem
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
.weui-icon-search {
  color: #999999 !important;
}
.vux-slider > .vux-indicator,
.vux-slider .vux-indicator-right {
  bottom: 0.8rem !important;
}
.vux-icon-dot.active {
  background-color: blue !important;
}
</style>

<style>
@import "../assets/css/reset";
.header_area {
  position: relative;
  height: 1rem;
  padding: 0.2rem 0;
  background-color: #f60403;
  line-height: 1rem;
}
.header_area .headpic_icon {
  width: 0.7467rem;
  height: 0.7467rem;
  display: inline-block;
  vertical-align: bottom;
  border-radius: 50%;
  margin: 0.15rem 0.2rem;
}
.header_area .header_area_left {
  /* display: none; */
  /* width: 3.2rem; */
  height: 1rem;
  color: #fff;
  margin-left: 0.3rem;
  font-weight: bold;
  font-size: 0.35rem;
  border-top-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  border: 1px solid #f2f2f2;
}
.header_area .header_area_right {
  width: 100%;
  padding-left: 1.5rem;
  padding-right: 0.3rem;
  box-sizing: border-box;
}
.header_area .head_inp {
  width: 100%;
  height: 0.75rem;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: #f2f2f2;
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  padding-left: 0.3rem;
  color: #999999;
}
.banner_area {
}
.banner_img_box {
  padding-bottom: 2rem;
}
.banner_img_box img {
  width: 100%;
  /* height: 3.2rem; */
  background-size: 100% 100%;
}
.nav_area {
  position: relative;
  margin-top: -0.64rem;
}
.banner_arc {
  height: 5rem;
  background: url("../assets/images/arc.png") no-repeat;
  background-size: 100% 100%;
}
.nav_area ul {
  display: flex;
  justify-content: space-around;
}
.nav_area ul li {
  width: 1.3333rem;
  height: 2rem;
}
.nav_area ul li a {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
}
.nav_area ul li a div {
  display: bolck;
  width: 1.3333rem;
  height: 1.3333rem;
  border-radius: 50%;
  background: url("../assets/images/watch.png") no-repeat;
  background-size: 100% 100%;
  /* background-color: #ff8a71; */
}
.ad_area {
  margin: 0.5rem 0.3rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  padding: 0 0.2rem;
  border: 1px solid #f60403;
  /* box-shadow: 0px 0px 11px 1px rgba(151, 209, 254, 0.8); */
}
.ad_area_msg {
  text-align: right;
  line-height: 30px;
}
.bottomNav_area {
  position: fixed;
  display: flex;
  justify-content: space-around;
  width: 100%;
  bottom: 0;
  text-align: center;
}
.bottomNav_area img {
  display: block;
  width: 1rem;
  height: 1rem;
  background-size: 100% 100%;
}
/* ************sale_area***************** */
.sale_area {
  margin: 0.1rem;
}
.sale_area ul {
  display: flex;
}
.sale_area h4 span {
  background-color: #f60403;
  border-radius: 0.1rem;
  text-align: center;
  color: #fff;
}
.sale_area h4 i {
  display: inline-block;
  background: url("../assets/images/icon01.png") no-repeat;
  background-size: 100% 100%;
  width: 0.4rem;
  height: 0.4rem;
  vertical-align: bottom;
}
.sale_area ul li {
  flex: 1;
  /* border: 1px solid #cac6c6; */
  padding: 0.2rem;
}
.sale_area_body {
  display: flex;
}
.sale_area .sale_area_body div {
  flex: 1;
  /* border-top: 1px solid #969696; */
  /* border-right: 1px solid #999999; */
}
.sale_area ul li div > p {
  margin: 0.1rem 0;
}
.sale_area ul li div img {
  display: block;
}
</style>
