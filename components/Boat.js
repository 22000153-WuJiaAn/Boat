import React from 'react';
import {ScrollView, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Boat = ({title, year, icon_name,poster})=> {
    return (
        <ScrollView>
            <Text style={styles.title}>
                <Icon name={icon_name} size={40} color="#B23B23" />  {title}
            </Text>
            <Text>
                {year}
            </Text>
            <Image source={poster} style ={{width:400,height:500}}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24, // Change the font size here
        fontWeight: 'bold', // You can also add fontWeight if needed
        marginTop: 10,      // Add margin for spacing if needed
    },
});


export default Boat;
