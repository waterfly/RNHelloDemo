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
    FlatList,
} from 'react-native';



export default class Jsx extends Component {
    static navigationOptions = ({navigation}) => __Navigator.setNavigationOptions({navigation}, {
        title: 'Jsx'
    });


    constructor(props) {
        super(props);
        this.state = {
            showText: true
        };

        this.displayContent = 'content'

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            // this.setState(previousState => {
            //     return { showText: !previousState.showText };
            // });


            this.setState({
                showText: !this.state.showText,
            })

        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        // let display = this.state.showText ? this.displayContent : ' ';

        let display = this.state.showText;


        return (

            display ? (
                <Text style={{marginTop:50, backgroundColor: 'red'}}>123455</Text>
            ) : (
                <Text style={{backgroundColor: 'green'}}>12</Text>
            )


        );
    }
}


