import React from "react";
import { View, Dimensions, FlatList } from "react-native";
import CarItem from '../CarItem';


import styles from "./styles";
import cars from "./cars";

const CarsList= () => {
    return (
        <View style={styles.container}>
            <FlatList 
            data={cars}
            renderItem={({item}) => <CarItem car={item}></CarItem>}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'normal'}
            snapToInterval={Dimensions.get('screen').height}
            ></FlatList>
        </View>
    )
}

export default CarsList;