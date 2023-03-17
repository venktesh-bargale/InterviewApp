import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ImageBackground,
  TextInput,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import Arrow from 'react-native-vector-icons/AntDesign'

const { height, width } = Dimensions.get("window");
const Login = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.Container}>
        <ImageBackground
          source={require("../Assets/2Pic.jpg")}
          style={styles.BackImage}
          imageStyle={{ borderBottomLeftRadius: 30,borderBottomRightRadius:30}}
        >
          <Text style={styles.LoginText}>Login</Text>
        </ImageBackground>
        <View style={styles.InputBoxView}>
          <TextInput
            placeholder="Mobile no."
            keyboardType="numeric"
            style={styles.TextInput}
          />
          <TouchableOpacity style={styles.NextButton} onPress={()=> navigation.navigate('Signup')} >
            <Arrow 
              name="arrowright"
              color={'#fff'}
              size={35}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.SignupView}>
            <Text style={styles.SignUpText}>New User? <TouchableOpacity style={styles.SignUpTouchhable} onPress={()=> navigation.navigate('Signup')}><Text style={[styles.SignUpText,{fontWeight:'600',top:3}]}>Sign up</Text></TouchableOpacity></Text>
            <Text style={styles.TermsConditionText}>By Signing up. you agree to T&C</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  Container: {
    minheight: height,
    width: width,
    backgroundColor: "rgb(1,46,87)",
  },
  BackImage: {
    width: width,
    height: height * 0.5,
    // borderBottomEndRadius:20,
    borderRadius:10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  LoginText: {
    fontSize: 30,
    fontWeight: "600",
    lineHeight: 30,
    color: "#fff",
    top: 60,
  },
  InputBoxView: {
    height: height * 0.25,
    width: width,
    // backgroundColor: "red",
  },
  TextInput: {
    alignSelf: "center",
    width: width * 0.8,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 20,
    fontSize: 15,
    paddingLeft: 20,
  },
  NextButton: {
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(240,151,31)",
    position:'absolute',
    right:width*0.1,
    bottom:40
  },
  SignupView:{
    height:height*0.25,
    width:width,
    alignItems:'center',
    // backgroundColor:'red'
  },
  SignUpText:{
    fontSize:16,
    fontWeight:'400',
    color:'#fff',
    // backgroundColor:'orange'
  },
  SignUpTouchhable:{
    alignItems:'center',
    // backgroundColor:'red'
  },
  TermsConditionText:{
    fontSize:14,
    fontWeight:'500',
    position:'absolute',
    bottom:40,
    color:'#fff',

  }
});
