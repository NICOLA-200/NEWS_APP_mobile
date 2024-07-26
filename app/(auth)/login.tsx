import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import { AntDesign, FontAwesome5, Feather } from '@expo/vector-icons';
import CheckBox from 'react-native-check-box';


const Signup : React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userTrue, setuserTrue] = useState<boolean>(false);

  const handleUsernameChange = (text : string) => {
    setuserTrue(false)
    setUsername(text);
  };

  const handlePasswordChange = (text: string) => {
   setuserTrue(false)
    setPassword(text);
  };

  const clearUsername = () => {
    setUsername('');
  };

  const handleSubmit = () => {
   if (username != 'nicola') {
      setuserTrue(true)
   } else {
      setuserTrue(false)
      router.push('/(tabs)/home')
   }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.hello} >Hello</Text>
      <Text style={[styles.hello, { color: "#1877F2" ,margin:0}]} >Again!</Text>
      <Text style={{color:"#4E4B66" , width: 150, margin: 5}}>Welcome back you’ve
          been missed</Text>
      <View style={{ gap: 2, marginTop: 40 }}>
        <Text style={{ color: "#4E4B66" }}>Username <Text style={{ color: "#C30052" }}>*</Text></Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, username !== 'nicola' && username.length > 0 ? { borderColor: 'red',backgroundColor:"#FFF3F8" } : {}]}
            placeholder='username...'
            value={username}
            onChangeText={handleUsernameChange}
          />
          {userTrue && (
            <TouchableOpacity onPress={clearUsername} style={styles.clearButton}>
              <AntDesign name="close" size={24} color="#C30052" />
            </TouchableOpacity>
          )}
        </View>
        {userTrue && <Text style={{ color: "#C30052" }}>Invalid username</Text>}
        <View style={{ gap: 5, marginTop: 10 }}>
        <Text style={{ color: "#4E4B66" }}>Password <Text style={{ color: "#C30052" }}>*</Text></Text>
      </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder='password...'
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={handlePasswordChange}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            {showPassword ? (
              <Feather name="eye" size={22}  color="#4E4B66" />
            ) : (
              <FontAwesome5 name="eye-slash" size={22} color="#4E4B66" />
            )}
          </TouchableOpacity>
        </View>
        <View style={{display: 'flex', flexDirection:'row' , marginVertical:10}}>
        <CheckBox
          style={{ color: "blue" }}
          onClick={() => setIsChecked(prev => !prev)}
          isChecked={isChecked}
         
        />
        <Text>Remember me</Text>
        </View>
      </View>
    
 
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={{ color: 'white', fontWeight: "600" }}>Login</Text>
      </TouchableOpacity>
      <Text style={{ textAlign: "center", marginVertical: 10 }}>or continue with</Text>
      <View style={{ display: 'flex', flexDirection: "row", gap: 10, justifyContent: 'space-between' }}>
        <View style={styles.authIcon}>
          <Image source={require('../../assets/d-images/facebook.png')} />
          <Text>Facebook</Text>
        </View>
        <View style={styles.authIcon}>
          <Image source={require('../../assets/d-images/google.png')} />
          <Text>Google</Text>
        </View>
      </View>
      <Text style={{ textAlign: 'center', marginTop: 20 }}>don't have an account? <Link href="signup" style={{ color: '#1877F2', fontWeight: '600' }}>Sign up</Link></Text>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    padding: 15,
    fontSize: 20,
    color: "#4E4B66",
    backgroundColor: 'white',
    flex: 1
  },
  hello: {
    fontWeight: '600',
    fontSize: 35,
   
    marginVertical: 5
  },

  inputContainer: {
    position: 'relative'
  },
  input: {
    borderWidth: 1,
    height: 40,
    borderRadius: 6,
    fontSize: 14,
    padding: 10,
    color: "#4E4B66",
    borderColor: '#4E4B66'
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    top: 7
  },
  passwordContainer: {
    position: 'relative'
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    
    top: 7
  },
  checkbox: {
    alignSelf: 'center'
  },
  button: {
    color: 'white',
    padding: 10,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "600",
    backgroundColor: "#1877F2",
    textAlign: "center",
    verticalAlign: "middle",
    borderRadius: 6
  },
  authIcon: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#EEF1F4',
    paddingVertical: 8,
    paddingLeft: 14,
    paddingRight: 44,
    gap: 5,
    borderRadius: 6
  }
});



