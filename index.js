/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/**
 * Created by chx on 2017/7/25.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Image,
    AppRegistry
} from 'react-native';
import Jsx from "./Jsx";
import ListJS from "./ListJS";

console.disableYellowBox = true;
console.warn('YellowBox is disabled.');

export default class TestRN extends Component {


    constructor(props) {
        super(props);


        this.pageTestName = 'Hello RN';

        //js 基本语法 训练

        {
            {
                let _letTest = 1;
                _letTest = '1';
                _letTest = true;
                _letTest = undefined;
                _letTest = null;

                _letTest = {'1':'2'};
                console.log(_letTest);

                _letTest = ['1','2'];
                console.log(_letTest);


                var _varTest = 'test';
            }



            // //if else
            // let test = 1;
            // if(test ==1){
            //     alert('test =1')
            // }else{
            //     alert('test != 1')
            // }




            // // switch case
            // {
            //     let test = '2';
            //     switch(test){
            //       case 1 :{
            //         alert('test = 1');
            //         }break;
            //       case '2': {
            //         alert('test = \'2\'');
            //       }break;
            //       default:{

            //       }
            //     }
            // }



            // //函数
            // testFunciton = function(name, age){
            //     alert(this.pageTestName);
            //     alert('name:'+name+'age:'+age);
            // }
            // testFunciton('圣斗士',18);


            // //箭头函数
            // let testFuc = (name,age) => {
            //     alert(this.pageTestName);
            //     alert('name:'+name+'age:'+age);
            //
            //     this.pageTestName
            // }
            // testFuc('圣斗士',18);



            // // alert(_letTest)
            // alert(_varTest);s
        }


    }


    //函数定义
    testFunciton = function (name, age){
        alert('name:'+name+'age:'+age);
    }


    //箭头函数
    _test = () => {
        alert('Call _test function');

    }



    _testJSX = () => {
        let element = <Text>Hello, world!</Text>;
        return element;
    }



    render() {

        // // 基本页面布局展示，jsx 语法展示
        // let display = false;
        //
        // return (
        //     <View style={styles.container}>
        //         <Text style={styles.welcome}>Welcome to React Native!</Text>
        //         <Text style={{fontSize: 10,color: 'red'}}></Text>
        //
        //         {/*{*/}
        //             {/*display? (*/}
        //                 {/*<Text style={styles.instructions}>*/}
        //                     {/*To get started, edit index.ios.js*/}
        //                 {/*</Text>*/}
        //             {/*) : null*/}
        //         {/*}*/}
        //
        //
        //
        //
        //          <Text style={styles.instructions}>
        //              Press Cmd+R to reload,{'\n'}
        //              Cmd+D or shake for dev menu
        //          </Text>
        //      </View>
        //  )


        // //button 按钮
        // return (
        //     <View style={styles.container}>
        //         <Text style={styles.welcome}>
        //             Welcome to React Native!
        //         </Text>
        //         <Text style={styles.instructions}>
        //             To get started, edit index.ios.js
        //         </Text>
        //         <Text style={styles.instructions}>
        //             Press Cmd+R to reload,{'\n'}
        //             Cmd+D or shake for dev menu
        //         </Text>
        //
        //         <TouchableWithoutFeedback onPress={this._test}>
        //             <Text>我是一个Button</Text>
        //         </TouchableWithoutFeedback>
        //
        //     </View>
        // )


        // //Flex 布局 flexDirection justifyContent alignItems 示例
        // return (
        //     <View style={{flexDirection:'column',backgroundColor:"darkgray",marginTop:40,justifyContent:'flex-start',alignItems:'flex-start',width: 500,height: 500}}>
        //
        //         <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
        //             <Text style={ {fontSize:16}}>1</Text>
        //         </View>
        //
        //
        //         <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
        //             <Text style={ {fontSize:16}}>2</Text>
        //         </View>
        //
        //
        //
        //         <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
        //             <Text style={ {fontSize:16}}>3</Text>
        //         </View>
        //
        //
        //         <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
        //             <Text style={ {fontSize:16}}>4</Text>
        //         </View>
        //     </View>
        // )


        // //Flex 布局 flex =  0 1 2 3 不同效果
        // return (
        //     <View style={ {flexDirection:'row',backgroundColor:"darkgray",marginTop:20,justifyContent:'center',alignItems:'center'}}>
        //
        //
        //         <View style={ {backgroundColor:"darkcyan",margin:5,flex:1}}>
        //             <Text style={ {fontSize:16}}>11111111111</Text>
        //         </View>
        //
        //
        //         <View style={ {backgroundColor:"darkcyan",margin:5,flex:2}}>
        //             <Text style={ {fontSize:16}}>2</Text>
        //         </View>
        //     </View>
        // )


        // //Flex布局 - 常用布局 cell 图片 文本 箭头
        // return (
        //     <View style={styles_cell.container}>
        //
        //
        //         <Image style={styles_cell.leftImg} source={require('./img/iOS_boy.jpg')}></Image>
        //
        //
        //         <Text style={styles_cell.text}>只要努力，简单的Text也能发光发热--Text</Text>
        //
        //
        //         <Image style={styles_cell.rightImg} source={require('./img/arrow_list_common_right.png')}></Image>
        //     </View>
        // )



        // //Flex布局 - 常用布局 cell 复杂布局 图片 名字 简介 时间  文本
        // return (
        //     <View style={styles_cell_complex.container}>
        //
        //         {/*左边Image*/}
        //         <Image style={styles_cell_complex.leftImg} source={require('./img/iOS_boy.jpg')}></Image>
        //
        //         {/*right view*/}
        //         <View style={styles_cell_complex.rightView}>
        //
        //             {/*上部info view*/}
        //             <View style={styles_cell_complex.infoView}>
        //                 <View style={styles_cell_complex.textView}>
        //                     <Text style={styles_cell_complex.name}>我是一个Text</Text>
        //                     <Text style={styles_cell_complex.desc}>我是一个有追求的显示文本的Text</Text>
        //                 </View>
        //
        //                 <Text style={styles_cell_complex.date}>2018年06月27日</Text>
        //             </View>
        //
        //             <Image style={styles_cell_complex.img} source={require('./img/iOS_panda.jpg')}></Image>
        //
        //             <Text style={styles_cell_complex.content}>一个用于显示文本的React组件，并且它也支持嵌套、样式，以及触摸处理。在下面的例子里，嵌套的标题和正文文字会继承来自styles.baseText的fontFamily字体样式，不过标题上还附加了它自己额外的样式。标题和文本会在顶部依次堆叠，并且被代码中内嵌的换行符分隔开。\n我是一个有追求的Text，自身有 numberOfLines onLayout onPress 等函数</Text>
        //         </View>
        //
        //     </View>
        // )



        //JSX 基本语法-----
        return (
            <View style={{flex: 1}}>

                {this._testJSX()}

            </View>
        )

    }

}




const styles_cell_complex = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',

        flexDirection: 'row',
        marginTop: 50,
    },

    leftImg: {
        marginLeft: 10,
        marginTop: 15,
        width: 30,
        height: 30,
    },

    rightView: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 15,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',

        backgroundColor: 'blue',
    },

    infoView: {
        flexDirection: 'row',

        backgroundColor: 'green',
    },


    textView: {
        flex: 1,
        flexDirection: 'column',

        backgroundColor: 'blanchedalmond',
    },
    name: {
        fontSize: 12,
        color: 'black',
    },
    desc: {
        fontSize: 10,
        color: 'red',

        marginTop: 15,
    },
    date: {
        fontSize: 12,
        color: 'red',
    },

    img: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 20,
    },

    content: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 12,
        color: 'black',
        backgroundColor: 'green',
    },


})

const  styles_cell = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',

        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
    },

    leftImg: {
      marginLeft: 15,
        width: 110,
        height: 110,
    },

    text: {
        flex: 1,
        marginLeft: 10,
        fontSize: 12,
        color: 'black',
        backgroundColor: 'red',
    },

    rightImg: {
        marginRight: 15,
        width: 15,
        height: 15,
        backgroundColor: 'blue',
    },
})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        // margin: 10,
        backgroundColor: 'red',
    },
    instructions: {
        marginTop: 30,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        backgroundColor: 'yellow',
    },
});


AppRegistry.registerComponent('Hello', () => TestRN);


// //打开该注释，展示 state的使用
// AppRegistry.registerComponent('Hello', () => Jsx);


// //打开该注释，展示 列表 FlatList的使用
// AppRegistry.registerComponent('Hello', () => ListJS);



