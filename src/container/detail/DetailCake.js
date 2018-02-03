import React from 'react';
import ListCommon from "../../component/ListCommon";
import {connect} from "react-redux";
import actions from "../../store/actions/detail";
import ShopBox from "../../component/ShopBox";
@connect(state=>({...state.detail}),actions)
export default class DetailCake extends React.Component {

  handleClickOpenBox=(e)=>{
    if(e.target===this.openBox){
      this.props.changeShopFlag({top:"0"});
    }
  };
  render() {
    let arr=[];
    for (let key in this.props.detailData.productsArr) {
      if(this.props.detailData.productsArr.hasOwnProperty(key)){
        arr.push(this.props.detailData.productsArr[key]);
      }
    }
    arr.pop();
    let {catId,en_name,goodsId,name,productsArr,saleTime,tags}=this.props.detailData;
    return<div>
      <div className="detailCake">
        <div className="details-data">
          <div className="pro-title">
            <h3>{en_name}</h3>
            <p>{name}</p>
          </div>
          <div className="pro-price">
            ￥ {(arr[this.props.flag]||{}).price}
          </div>
          <div className="pro-action">
            {tags.map((item,index)=>(
              <a href="javascript:;" key={index}>{item.content} ›</a>
            ))}
          </div>
          <div className="pro-details-taste clearfix">
            <i className="details-taste-icon"></i><span>红颜草莓，糖度>8% </span>
          </div>
          <div className="pro-select">
            <div className="pro-select-card"  onClick={this.handleClickOpenBox}>
              <div className="card-title clearfix">
                <span>已选择{(arr[this.props.flag]||{}).spec}<span ref={x=>this.openBox=x}>></span></span>
              </div>
              <div className="details-options-card">
                <ul className="details-options clearfix">
                  <li><i></i> <span>{(arr[this.props.flag]||{}).size}</span></li>
                  <li><i></i> <span>{(arr[this.props.flag]||{}).cutlery_content}</span></li>
                  <li><i></i> <span>{(arr[this.props.flag]||{}).suite_amount}</span></li>
                  <li><i></i> <span>最晚明早09:30送达</span></li>
                </ul>
              </div>
              <ul className="store-info">
                <li>
                  <i></i>
                  <span>保鲜条件</span>
                  <p className="spandd">0－4℃保藏12小时，5℃食用为佳11111111</p>
                </li>
                <li>
                  <i></i>
                  <span>参考甜度</span>
                  <p className="sweet-list">
                    <i className="active"></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="detailes-intro">
          /红枣奶油戚风，与姜撞奶慕斯/<br/>
          /温暖、绵延，日常题材的一闪灵感/<br/>
        </div>
        <div className="details-img">
          <img src="http://static.21cake.com/public/images/ba/90/3a/6c3e24d18f5e96b22cf81081b8e5909d.jpg?1516843014#w" alt=""/>
          <img src="http://static.21cake.com/public/images/3b/25/a3/fd79841480c665cbe24140d0ecf06b06.jpg?1516843019#h" alt=""/>
          <img src="http://static.21cake.com/public/images/b3/06/5d/10242fd31658dcf020d4564260dfcbc5.jpg?1516843037#h" alt=""/>
          <img src="http://static.21cake.com/public/images/74/c3/bf/22eb18f37e4724f666962753a8be9e2e.jpg?1516843048#h" alt=""/>
          <img src="http://static.21cake.com/public/images/3b/aa/8c/28183c8dfb88f28a4d79cf058ccd25fe.jpg?1516843053#h" alt=""/>
          <img src="http://static.21cake.com/public/images/af/b0/a9/17209e7010249c250653edd183cf8692.jpg?1516843062#h" alt=""/>
          <span>以上图片仅供参考，请以收到实物为准。</span>
        </div>
        <div className="recommend-list">
          <p className="recommend-list-p">· 推荐商品 ·</p>
          <ListCommon/>
        </div>
      </div>
      {/*<ShopBox detailData={this.props.detailData}/>*/}
    </div>

  }
}