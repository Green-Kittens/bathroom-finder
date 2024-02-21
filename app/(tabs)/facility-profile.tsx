import { Text, View } from '@/components/Themed';
import { StyleSheet, Button, Animated, Pressable } from 'react-native';
import { useEffect, useState, useRef } from 'react';

const maxLineNumber = 5;

function Review() {
    return (
        <View style={styles.review}>
        <img src={"./assets/images/icon.png"} alt="Placeholder for profile image" style={{height: '50%'}}/>
        <Text style={[styles.paragraph, {fontWeight: 'bold'}]}>Username</Text>
        <Text style={styles.paragraph} numberOfLines={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        </View>
    )
}

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
        <Review />
        <View style={[{ width: "10%", margin: 10, justifyContent: 'center'}]}>
            <Button title={'See more'} />
        </View>
      </View>
    </View>
  );
}

export default function TabFacilityProfileScreen() {
  return (
    <View style={styles.container}>
    <View style={[{flex: .9, alignItems: 'center'}]}>
      <Text style={styles.title}>Facility Name</Text>
        <img src={"./assets/images/icon.png"} alt="Placeholder for facility image" style={{height: '70%', justifyContent: 'center', alignItems: 'center'}}/>
            <View style={[{flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}]}>
                <img src={"./assets/images/star_unfilled.png"} alt="Black outline of a star" style={{height: '40%'}}/>
                <img src={"./assets/images/star_unfilled.png"} alt="Black outline of a star" style={{height: '40%'}}/>
                <img src={"./assets/images/star_unfilled.png"} alt="Black outline of a star" style={{height: '40%'}}/>
                <img src={"./assets/images/star_unfilled.png"} alt="Black outline of a star" style={{height: '40%'}}/>
                <img src={"./assets/images/star_unfilled.png"} alt="Black outline of a star" style={{height: '40%'}}/>
                <Text style={styles.body}>  5.0 stars</Text>
            </View>
        </View>
        <View style={[{flex: 1, marginHorizontal: 40}]}>
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
    marginHorizontal: 40,
  },
  
  body_container: {
    flex: .5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: 40,
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
    flex: .1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  review: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
