import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import StarRating from 'react-native-star-rating';

class Acceuil extends Component {
    render() {
        return (
            <View style={{ width: this.props.width / 2 - 30, height: this.props.width / 2 - 30 }}>

                <View style={{ flex: 1 }}>
                    <Image   //////////////////// a revoir 
                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
                        source={require('../../../assets/acceuil.png')}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 10, color: '#663838' }}>
                        {this.props.type}
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                        {this.props.name}
                    </Text>
                    <Text style={{ fontSize: 10 }}> {this.props.price} $ </Text>
                    <StarRating
                            disable={true}
                            maxStars={5}
                        rating={this.props.rating}
                            starSize={10}
                    />

                    
                </View>

            </View>
        );
    }
}
export default Acceuil;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
