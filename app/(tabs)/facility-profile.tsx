import { Text, View } from '@/components/Themed';
import { StyleSheet, Button, Animated, Pressable } from 'react-native';
import { useEffect, useState, useRef } from 'react';

const maxLineNumber = 5;

function CollapseView() {
  const [collapsed, setCollapsed] = useState(true);
  const [maxLines, setMaxLines] = useState(2);
  const animationHeight = useRef(new Animated.Value(0)).current;

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const collapseView = () => {
      Animated.timing(animationHeight, {
        duration: 100,
        toValue: 80,
        useNativeDriver: false
      }).start();
  }

  const expandView = () => {
      setMaxLines(maxLineNumber)
      Animated.timing(animationHeight, {
        duration: 1000,
        toValue: 1000,
        useNativeDriver: false
      }).start();
  }

  useEffect(() => {
    if (collapsed) {
      collapseView()
    } else {
      expandView()
    }
  }, [collapsed]);

  
const [buttonText, setButtonText] = useState("Expand"); 
const changeText = (isCollapsed: boolean) => {
  if (collapsed) {
    return "Expand"
} else {
  return "Collapse"
}
}

  return (
    <View style={{overflow:'hidden'}}>
      <Animated.View style={{maxHeight: animationHeight}}>
        <Text style={styles.paragraph} numberOfLines={maxLines}>
          Hours: ##:## - ##:## {"\n"}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Animated.View>
      <Button title={changeText(collapsed)} onPress={toggleCollapsed} />
      <View style={styles.separator} lightColor="#aaa" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.row}>
      <Text style={styles.paragraph}>
        Review here
      </Text>
      <Button title={'See more'} />
      </View>
    </View>
  );
}

export default function TabFacilityProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Facility Name</Text>
        <img src={"./assets/images/icon.png"} alt="image" style={{height: '40%', justifyContent: 'center', alignItems: 'center'}}/>
            <View style={styles.body_container}>
            <View style={styles.stars}>
                <img src={"./assets/images/star_unfilled.png"} alt="image" style={{height: '50%'}}/>
                <img src={"./assets/images/star_unfilled.png"} alt="image" style={{height: '50%'}}/>
                <img src={"./assets/images/star_unfilled.png"} alt="image" style={{height: '50%'}}/>
                <img src={"./assets/images/star_unfilled.png"} alt="image" style={{height: '50%'}}/>
                <img src={"./assets/images/star_unfilled.png"} alt="image" style={{height: '50%'}}/>
                <Text style={styles.body}>  5.0 stars</Text>
            </View>
        </View>
        <View style={styles.outer_body_container}>
            <CollapseView />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outer_body_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 400,
  },
  
  body_container: {
    flex: .5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: 400,
  },
  stars: {
    flex: .3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  body: {
    fontSize: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
    alignSelf: 'center'
  },
  paragraph: {
    margin: 24,
    fontSize: 14,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

});
