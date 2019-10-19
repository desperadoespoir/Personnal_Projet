import React , {Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView ,
    TextInput,Platform,StatusBar,
    ScrollView,Image,Dimensions, Animated
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import Category from './components/Explore/Category'
import Acceuil from './components/Explore/Acceuil'
import Tag from './components/Explore/Tag'

const { height,width}=Dimensions.get('window')

class Explore extends Component {
    componentWillMount(){

        this.scrollY = new Animated.Value(0)
        this.startHearderheight = 80
        this.endHeaderHeight = 50 
        if(Platform.os== "android"){
            this.startHearderheight=100+Statusbar.currentHeight
            this.endHeaderHeight = 70 + StatusBar.currentHeight
        }

        this.animatedHeaderHeight = this.scrollY.interpolate({
            inpoutRange:[0,50], 
            outpoutRange:[this.startHearderheight, this.endHeaderHeight],
            extrapolate: 'clamp'
        })
        this.animatedOpacity = this.animatedHeaderHeight.interpolate({
            inpoutRange: [ this.endHeaderHeight, this.startHearderheight],
            outpoutRange : [0, 1],
            extrapolate: 'clamp'
        })
        this.animatedTagTop = this.animatedHeaderHeight.interpolate({
            inpoutRange: [this.endHeaderHeight, this.startHearderheight],
            outpoutRange: [-30, 10],
            extrapolate: 'clamp'
        })
    }

    render() {
        return (
            <SafeAreaView style ={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Animated.View style={{ height: this.animatedHeaderHeight, backgroundColor: 'white',
                     borderBottomWidth: 1, borderBottomColor:'#dddddd' }}> 
                        <View style={{ flexDirection:'row',
                                paddind:10, 
                                backgroundColor:'white',
                                marginHorizontal: 20,
                                shadowOffset: { width: 0, height: 0}, 
                                shadowColor: 'black',
                                shadowOpacity: 0.2,
                                elevation:1,
                                marginTop: Platform.OS === 'android' ? 30 : null
                        }}>
                            <Icon name="md-search" size={20} />
                            <TextInput
                                underlineColorAndroid= "transparent"
                                placeholder=" try new Delhi"
                                placeholderTextColor="grey"
                                style={{flex :1, fontWeight:'700',
                                backgroundColor:'white'}}
                            />
                        </View>
                        <Animated.View 
                            style={{ flexDirection: 'row', marginHorizontal: 20,
                            position: 'relative', top: this.animatedTagTop, opacity: this.animatedOpacity }}
                        >
                            <Tag name="Guests"  />
                            <Tag name="Dates"   />  

                        </Animated.View>
                    </Animated.View>
                    <ScrollView 
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                        [
                            { nativeEvent:{contentOffset:{y: this.scrollY}}

                            }
                        ]
                        )}
                    >
                        <View style={{flex:1, backgroundColor:'white', paddingTop:20}}>
                            <Text style={{fontSize:24, fontWeight:'700', paddingHorizontal: 20}}>
                                Les meilleurs ventes et achats c'est ici ca se passe 
                            </Text>


                            <View style= {{height:130, marginTop:20}}>
                                <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require
                                        ('../assets/acceuil.png')} 
                                        name="Acceuil"
                                    /> 
                                    <Category imageUri={require
                                        ('../assets/acheter.png')}
                                        name="Acheter"
                                    /> 
                                    <Category imageUri={require
                                        ('../assets/vendre.png')}
                                        name="Vendre"
                                    /> 
                                     
                                </ScrollView>
                            </View>
                            <View style={{marginTop: 40, paddingHorizontal:  20}}> 
                                <Text style={{fontSize:24 , fontWeight:'700'}}>
                                        Introduire   Kijiji UdeM
                                </Text>
                                <Text style={{fontWeight:'100', marginTop: 10}}>
                                    Acheter et vendre vos articles sur  kijiji UdeM
                                </Text>
                                <View style={{ width: width - 40, height: 200,marginTop:20}}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover',
                                         borderRadius: 5, 
                                         borderWidth: 1,
                                         borderColor: '#dddddd'
                                        }}
                                        
                                        source={require('../assets/acceuil.png')}
                                    />
                                </View>
                             </View>
                        </View>
                        <View style={{marginTop:40 }}>
                            <Text style={{ fontSize: 24, fontWeight:"700", paddingHorizontal: 20}}>
                                tous nos arcticles.
                            </Text>
                            <View style={{ paddingHorizontal: 20 , marginTop:20, flexDirection : 'row', flexWrap: 'wrap', justifyContent:"space-between"}}>
                              
                               <Acceuil width= {width}
                                  name= "livres Informatiques"
                                  type = " arcticles scolaires "
                                  price={100}
                                  rating={4}
                               />
                                <Acceuil width={width}
                                    name="livres Informatiques"
                                    type=" arcticles scolaires "
                                    price={100}
                                    rating={4}
                                />
                                <Acceuil width={width}
                                    name="livres Informatiques"
                                    type=" arcticles scolaires "
                                    price={100}
                                    rating={4}
                                />
                               
                            </View>

                        </View>

                    </ScrollView>
                </View>
            </SafeAreaView>
                
        );
    }
}
export default Explore;
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
