import React, {useState} from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import Task from './components/Task';
import Form from './components/Form'
import styles from './App.components.style';

export default function App() {
  const [taskList, setTasklist] = useState([])

  const handleAddtask = (task) => {
    setTasklist([...taskList,task]);
  }

  const handleDeletetask = (index) => {
    Alert.alert(
      "Attention",
      "Do you really delete it?",
      [
        {
          text: "OK",
          onPress: () => {
            let taskListTmp = [...taskList];
            taskListTmp.splice(index,1);
            setTasklist(taskListTmp);
          },
        },
        {
          text: "Cancel", onPress: () => {}
        }
      ]
    );
  }
  return (
    <View style={styles.container}>
      <View style = {styles.body}>
        <Text style= {styles.header}>Todo List</Text>
        <ScrollView style = {styles.items}>
        {
          taskList.map((item, index) => {
            return <Task key={index} title={item} number={index+1} onDeletetask={()=> handleDeletetask(index)} />
          })
        }
        </ScrollView>
      </View>
      <Form onAddtask = {handleAddtask} />
    </View>
  );
}
