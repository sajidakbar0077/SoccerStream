import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { style,Colors } from '../../styles/style'


const UpcomingMtaches = () => {
  return (
    <View > 
 
        <View style={[style.centerRow,style.mt4,style.mb3]}>
            <Text style={[style.heading2, ]}>Upcoming Matches</Text>
           <Text style={style.caption}>See all</Text>
        </View>

        <ScrollView 
        style={[{
              backgroundColor:Colors.lightGray,borderRadius:5
            }, style.p3]}>
            
             <View  style={[{ backgroundColor:Colors.darkGray,
                },style.card
                ]}>
             
                  <View style={[style.centerRow]}>
                    <View style={style.team}>
                        <Image source={require('../../assests/images/rm.png')} style={{ width: 20, height: 30,}} />
                    <Text style={[style.mt2,style.samllText]}>Valenica</Text>
                    </View>
            
                    <View>
                        <Text style={{ fontSize: 20, color: '#FFF' }}>3:40 pm</Text>
                    </View>
                    <View style={style.team}>
                        <Image source={require('../../assests/images/rm.png')} style={{ width: 20, height: 30,}} />
                    <Text style={[style.mt2,style.samllText]}>RealMadrid</Text>
                    </View>
            
                  </View>
                </View>
             <View  style={[{ backgroundColor:Colors.darkGray,
                },style.card
                ]}>
             
                  <View style={[style.centerRow]}>
                    <View style={style.team}>
                        <Image source={require('../../assests/images/rm.png')} style={{ width: 20, height: 30,}} />
                    <Text style={[style.mt2,style.samllText]}>Valenica</Text>
                    </View>
            
                    <View>
                        <Text style={{ fontSize: 20, color: '#FFF' }}>3:40 pm</Text>
                    </View>
                    <View style={style.team}>
                        <Image source={require('../../assests/images/rm.png')} style={{ width: 20, height: 30,}} />
                    <Text style={[style.mt2,style.samllText]}>RealMadrid</Text>
                    </View>
            
                  </View>
                </View>
             <View  style={[{ backgroundColor:Colors.darkGray,
                },style.card
                ]}>
             
                  <View style={[style.centerRow]}>
                    <View style={style.team}>
                        <Image source={require('../../assests/images/rm.png')} style={{ width: 20, height: 30,}} />
                    <Text style={[style.mt2,style.samllText]}>Valenica</Text>
                    </View>
            
                    <View>
                        <Text style={{ fontSize: 20, color: '#FFF' }}>3:40 pm</Text>
                    </View>
                    <View style={style.team}>
                        <Image source={require('../../assests/images/rm.png')} style={{ width: 20, height: 30,}} />
                    <Text style={[style.mt2,style.samllText]}>RealMadrid</Text>
                    </View>
            
                  </View>
                </View>
             <View  style={[{ backgroundColor:Colors.darkGray,
                },style.card
                ]}>
             
                  <View style={[style.centerRow]}>
                    <View style={style.team}>
                        <Image source={require('../../assests/images/rm.png')} style={{ width: 20, height: 30,}} />
                    <Text style={[style.mt2,style.samllText]}>Valenica</Text>
                    </View>
            
                    <View>
                        <Text style={{ fontSize: 20, color: '#FFF' }}>3:40 pm</Text>
                    </View>
                    <View style={style.team}>
                        <Image source={require('../../assests/images/rm.png')} style={{ width: 20, height: 30,}} />
                    <Text style={[style.mt2,style.samllText]}>RealMadrid</Text>
                    </View>
            
                  </View>
                </View>
             <View  style={[{ backgroundColor:Colors.darkGray,
                },style.card
                ]}>
             
                  <View style={[style.centerRow]}>
                    <View style={style.team}>
                        <Image source={require('../../assests/images/rm.png')} style={{ width: 20, height: 30,}} />
                    <Text style={[style.mt2,style.samllText]}>Valenica</Text>
                    </View>
            
                    <View>
                        <Text style={{ fontSize: 20, color: '#FFF' }}>3:40 pm</Text>
                    </View>
                    <View style={style.team}>
                        <Image source={require('../../assests/images/rm.png')} style={{ width: 20, height: 30,}} />
                    <Text style={[style.mt2,style.samllText]}>RealMadrid</Text>
                    </View>
            
                  </View>
                </View>
             
        </ScrollView>
    </View>
  )
}

export default UpcomingMtaches