import { StyleSheet, Text, View } from "react-native";
import React,{useState} from "react";
import { ScrollView } from "react-native";
import { Dimensions } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import firestore from '@react-native-firebase/firestore';
import Arrow from 'react-native-vector-icons/AntDesign'
import AtSign from 'react-native-vector-icons/Feather'
import User from 'react-native-vector-icons/Feather'


const { height, width } = Dimensions.get("window");



const Signup = ({navigation}) => {
  const [UserID, setUserID] = useState()
const [Mobile, setMobile] = useState()
const [UserExist, setUserExist] = useState(false)
const CheckUser=async()=>{
  firestore()
  .collection('Users')
  .doc(Mobile)
  .get()
  .then(documentSnapshot => {
    console.log('User exists: ', documentSnapshot.exists);

    if (documentSnapshot.exists) {
      setUserExist(true);
    }
    else{
      navigation.navigate('OTP', {UserID, Mobile})
    }
  });
}
  return (
    <ScrollView>
      <View style={styles.MainView}>
        <Text style={styles.SignupText}>Signup</Text>
        <View style={styles.InputBoxView}>
          <View style={styles.TextInputView}>
            <User
              name='user'
              color={'#000'}
              size={25}
              marginRight={10}
            />
            <TextInput
              placeholder="User Name"
              // keyboardType="numeric"
              onChangeText={(text) => setUserID(text)}
              style={styles.TextInput}
            />
          </View>
          <View style={styles.TextInputView}>
          <AtSign 
              name="at-sign"
              color={'#000'}
              size={25}
              marginRight={10}
            />
            <TextInput
              placeholder="Mobile no."
              keyboardType="numeric"
              onChangeText={(text) => setMobile(text)}
              style={styles.TextInput}
            />
          </View>
          <TouchableOpacity style={styles.Touchable} onPress={()=> CheckUser()}>
          <Arrow 
              name="arrowright"
              color={'#fff'}
              size={35}
            />
          </TouchableOpacity>
        </View>
        {UserExist?
        <Text style={styles.BottomText}>Email id already exist</Text>:''}
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  MainView: {
    minHeight: height,
    width: width,
    backgroundColor: "rgb(1,46,87)",
    alignItems: "center",
    justifyContent: "center",
  },
  SignupText: {
    fontSize: 30,
    fontWeight: "600",
    lineHeight: 40,
    color: "#fff",
    position:"absolute",
    top:height*0.25,
  },
  InputBoxView: {
    height: height * 0.2,
    width: width * 0.8,
    backgroundColor: "#fff",
    borderTopRightRadius: 10,
    borderBottomEndRadius: 10,
    alignSelf: "flex-start",
    marginTop: height * 0.1,
    justifyContent: "center",
  },
  TextInputView:{
    height:'50%',
    alignItems:'center',
    marginLeft:10,
    flexDirection:'row'
  },
  TextInput: {
    height: 50,
    width: "100%",
    fontSize: 20,
    fontWeight: "600",
  },
  Touchable:{
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(240,151,31)",
    position:'absolute',
    right:-30,
    bottom:50
  },
  BottomText:{
    color:'red',
    position:'absolute',
    bottom:height*0.20,
    fontSize:15,
    fontWeight:'500'

  }
});
