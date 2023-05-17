import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard} from 'react-native';
import styles from './style'

const Form = (props) => {
  const [task, setTask] = useState('');
  const handleAddtask = () => {
    if (task.length === 0) {
      alert('Please dont null')
      return false;
    }
      props.onAddtask(task);
      setTask('');
      Keyboard.dismiss();
  }
  return (
        <KeyboardAvoidingView
          // behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset = {10}
          style={styles.addTask}
        >
          <TextInput
            value={task}
            onChangeText = {(text) => setTask(text)}
            placeholder= "Your Task"
            style={styles.input}
          />
          <TouchableOpacity
            onPress = {handleAddtask}
          >
            <View style={styles.iconWrapper}>
              <Text style={styles.icon}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
  )
}
export default Form