import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './styles';
export default class LocationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Hyderabad: 'hyderabad',
            user: [{
                "id": 1,
                "name": "test1",
                "age": "11",
                "gender": "male",
                "email": "test1@gmail.com",
                "phoneNo": "9415346313"
            }, ,
            {
                "id": 2,
                "name": "test2",
                "age": "12",
                "gender": "male",
                "email": "test2@gmail.com",
                "phoneNo": "9415346314"
            },
            {
                "id": 3,
                "name": "test3",
                "age": "13",
                "gender": "male",
                "email": "test3@gmail.com",
                "phoneNo": "9415346315"
            },
            {
                "id": 4,
                "name": "test4",
                "age": "14",
                "gender": "male",
                "email": "test4@gmail.com",
                "phoneNo": "9415346316"
            },
            {
                "id": 5,
                "name": "test5",
                "age": "15",
                "gender": "male",
                "email": "test5@gmail.com",
                "phoneNo": "9415346317"
            },
            {
                "id": 6,
                "name": "test6",
                "age": "16",
                "gender": "male",
                "email": "test6@gmail.com",
                "phoneNo": "9415346318"
            }
            ]
        };
    }
    render() {
        const sai = this.state.user && this.state.user.map((item, k) => {
            return (
                <View style={styles.mainView}>
                    <View style={styles.subView}>
                        <Text>UserName:</Text>
                        <Text>{item.name}</Text>
                    </View>
                    <View style={styles.subView}>
                        <Text>Age:</Text>
                        <Text>{item.age}</Text>
                    </View>
                    <View style={styles.subView}>
                        <Text>Gender:</Text>
                        <Text>{item.gender}</Text>
                    </View>
                    <View style={styles.subView}>
                        <Text>Email:</Text>
                        <Text>{item.email}</Text>
                    </View>
                    <View style={styles.subView}>
                        <Text>PhoneNo:</Text>
                        <Text >{item.phoneNo}</Text>
                    </View>
                </View>
            );
        });
        return (
            <View>
                <StatusBar
                    backgroundColor={'#336dcc'}
                    barStyle="light-content"
                />
                <View>
                    <View style={styles.insideView}>
                        {sai}
                    </View>
                </View>
            </View>
        );
    }
}