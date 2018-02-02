import React from 'react';
import a from '../../../server/dist/upload/images/fruitCake1.png';
import b from '../../../server/dist/upload/images/fruitCake2.png';
import c from '../../../server/dist/upload/images/fruitCake3.png';
import d from '../../../server/dist/upload/images/fruitCake4.png';
import e from '../../../server/dist/upload/images/fruitCake5.png';
import f from '../../../server/dist/upload/images/fruitCake6.png';

let page = [
    {src: a}
];
let items = [
    {src: b},
    {src: c},
    {src: d},
    {src: e},
    {src: f},
];
export default class HomeFocusDetail extends React.Component {
    render() {
      console.log(this.props);
      return <div className='focus-detail' ref='div'>
            <div className='focus-header'>
                <span onClick={() => {
                    this.refs.div.style={display:'none'}
                }}></span>
                <p>{this.props.text}</p>
                <span></span>
            </div>
            <img src={page[0].src} alt=""/>
            {items.map((item, index) => (
                <img src={item.src} key={index} alt=""/>
            ))}
        </div>
    }
}