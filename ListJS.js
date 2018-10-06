import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Image,
    AppRegistry,
    FlatList
} from 'react-native';



export  default  class  ListJS extends  Component {
    constructor(props){
        super(props);

        this.state = {
            datalist: ['11111111','22222222']
        }
    }


    _test = (name) => {
        alert(name);
    }

    cell = (item) => {
        return <CellItem testName={item.item}
                         pressFunc={this._test}></CellItem>
    }


    render() {
        return (
            <FlatList style={{backgroundColor: 'yellow'}}
                data={this.state.datalist}
                // renderItem={({item}) => <Text>{item.key}</Text>}
                renderItem={this.cell}
            />
        )

    }
}

class  CellItem extends Component {

    constructor(props){
        super(props);

        this.name = props.testName;
    }

    _test =() => {
        this.props.pressFunc(this.name);
    }


    render (){

        //Flex布局 - 常用布局 cell 图片 文本 箭头
        return (
            <View style={styles_cell.container}>


                <Image style={styles_cell.leftImg} source={require('./img/iOS_boy.jpg')}></Image>


                <TouchableWithoutFeedback onPress={this._test}>
                    <Text style={styles_cell.text}>{this.name}</Text>
                </TouchableWithoutFeedback>



                <Image style={styles_cell.rightImg} source={require('./img/arrow_list_common_right.png')}></Image>
            </View>
        )

    }
}



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
        backgroundColor: 'red',
        marginTop: 10,
        width: 100,
        height: 100,
    }
})