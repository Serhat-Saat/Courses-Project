import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TextInput,
  Button,
} from "react-native";
import React from "react";
import {useState} from 'react';

export default function CourseInput({ visible, onAddCourse, onCancel }) {
    const [enterCourseText, setenterCourseText] = useState('')
    const addCourseHandler = ()=>{
        onAddCourse(enterCourseText);
        setenterCourseText('')
    };
  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.inputContainer}>
        <Image style={styles.img} source={require("../assets/courses.webp")} />
        <TextInput  style={styles.input} placeholder="Yeni Kurs Ekle" value={enterCourseText} onChangeText={(text)=>setenterCourseText(text)}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="İptal Et" color="red" onPress={onCancel}/>
          </View>
          <View style={styles.button}>
            <Button title="Ekle" color="blue" onPress={addCourseHandler}/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    padding: 15,
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 50,
    margin: 20,
  },
  input: {
    borderWidth: 1,
    width: "100%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "pink",
    borderColor: "pink",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop:15,
  },
  button: {
    width:100,
    marginHorizontal:10,
  },
});
