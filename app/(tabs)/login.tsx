import React, { useState } from 'react';
import { StyleSheet,Image, SafeAreaView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';

function TabLoginScreen() {
  // State management for text inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPress = () => {
    // Placeholder for navigation logic
    Alert.alert('Login Pressed', 'Navigate to home screen.');
  };

  const onRegisterPress = () => {
    // Placeholder for navigation logic
    Alert.alert('Register Pressed', 'Navigate to registration screen.');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Image src={require('../assets/images/logo-placeholder.png')} />
        <Text style={styles.title}>Login</Text>

        {/* Text input fields */}
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Username:"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Text style={styles.text}>Forgot Password</Text>
        <View style={styles.fixToText}>
          <Button
            title="Login"
            onPress={onLoginPress} 
          />
        </View>
      </SafeAreaView>

      {/* Footer with Register Section */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={onRegisterPress} style={styles.registerContainer}>
          <Text style={styles.text}>Don't have an account? </Text>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TabLoginScreen;

const styles = StyleSheet.create({
  // Main Container
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  // Safe Area Section
  safeArea: {
    flex: 1,
    alignItems: 'center',  
    justifyContent: 'center',
  },
  // Title Section
  title: {              
    fontSize: 20,
    fontWeight: 'bold',  
    marginVertical: 30,
  },
  // Input Section
  input: {
    height: 40,
    width: '30%',  // Control the width of the input size
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignSelf: 'center',  
  },
  // Text Section
  text: {                   
    alignSelf: 'center',
  },
  // Button Section
  fixToText: {                    
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  // Footer Section
  footer: {                 
    paddingBottom: 20,
    alignItems: 'center',
  },
  // Register Section
  registerContainer: {          
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Register Text
  registerText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
