import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
  const [username, setUsername] = useState<string >('wilsonfranci');
  const [fullName, setFullName] = useState<string >('Wilson Franci');
  const [email, setEmail] = useState<string >('example@youremail.com');
  const [phoneNumber, setPhoneNumber] = useState<string>('+62-8421-4512-2531');
  const [image, setImage] = useState<null | string>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.profileImageContainer}>
        <Image 
          source={{uri: image ? image : `https://example.com/profile-image-url`}} // replace with your image URL or local path
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editIcon} onPress={pickImage}>
          <Text style={styles.editIconText}>✎</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />
        <Text style={styles.label}>Email Address<Text style={styles.required}>*</Text></Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Phone Number<Text style={styles.required}>*</Text></Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <View style={{height:3, borderColor:'black', backgroundColor:"black", width:"300"}} / >
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    
    padding:15,
  fontSize: 20,
  color:"#4E4B66",
  backgroundColor: 'white',
  flex: 1,

  alignItems:"center"
   
  },


  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ddd'
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#1877F2',
    borderRadius: 15,
    padding: 5
  },
  editIconText: {
    color: 'white',
    fontSize: 16
  },
  inputContainer: {
    marginBottom: 10,
    width:300,
    display: "flex"

  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#4E4B66'
  },
  input: {
    borderWidth: 1,
    borderColor: '#4E4B66',
    borderRadius: 8,
    padding:8,
    marginBottom: 7,
    width: 300,
    fontSize: 16,
  },
  required: {
    color: '#C30052'
  },
  nextButton: {
    backgroundColor: '#1877F2',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    position:"absolute",
    bottom:15,
    borderTopColor:"black",
    
    
  },
  nextButtonText: {
    width: 270,
   
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
