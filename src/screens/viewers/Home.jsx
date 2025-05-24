import { View, Text,ScrollView,TouchableOpacity} from 'react-native'
import React, { useState } from 'react';
import { Colors, style } from '../../styles/style'
import { getNext7Days } from '../utils/getNext7Days';
import MatchCard from '../../components/viewers/MatchCard';
import UpcomingMtaches from '../../components/viewers/UpcomingMtaches';

const Home = () => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const days = getNext7Days();
  return (
    <ScrollView  style={[{ 
        
    },  style.p3 
  ]}>
    <Text style={style.heading1}>Home</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
      {days.map((day, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedIndex(index)}
          style={{
            backgroundColor: selectedIndex === index ? Colors.primary : '#FFF',
            paddingVertical: 10,
            paddingHorizontal: 12,
            borderRadius: 10,
            marginRight: 8,
            borderWidth: 1,
            borderColor: Colors.primary,
          }}
        >
          <Text style={{ color: selectedIndex === index ? '#FFF' : Colors.primary, textAlign: 'center' }}>
            {day.label} {'\n'} {day.date}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>




    <View>
        <Text style={[style.heading2, style.mt3,style.mb3]}>Live Matches</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
  <View style={style.centerRow}>
    <MatchCard
    leagueName="Champion League"
    teamA={{ name: 'RealMadrid', logo: require('../../assests/images/rm.png') }}
    Score="2:2"
    teamB={{ name: 'Valencia Fc', logo: require('../../assests/images/vc.png') }}
    backgroundColor={Colors.success}
  />
    <MatchCard
    leagueName="Champion League"
    teamA={{ name: 'Shahbaz Dherai', logo: require('../../assests/images/rm.png') }}
    Score="2:1"
    teamB={{ name: 'Valencia', logo: require('../../assests/images/vc.png') }}
    backgroundColor={Colors.primary}
  />
    <MatchCard
    leagueName="Champion League"
    teamA={{ name: 'RealMadrid', logo: require('../../assests/images/rm.png') }}
    Score="2:1"
    teamB={{ name: 'Valencia', logo: require('../../assests/images/vc.png') }}
    backgroundColor={Colors.danger}
  />
      
  </View>
</ScrollView>
        </View>


  <View>
    <UpcomingMtaches/>
  </View>

    </ScrollView>
  )
}

export default Home