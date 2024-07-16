import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { createEmployee } from '../services/api';

const AddEmployeeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [salary, setSalary] = useState('');

  const handleAdd = () => {
    const newEmployee = {
      name,
      age,
      salary,
    };
    createEmployee(newEmployee).then(() => {
      navigation.navigate('Employees');
    }).catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Salary"
        value={salary}
        onChangeText={setSalary}
        keyboardType="numeric"
      />
      <Button
        title="Add Employee"
        onPress={handleAdd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddEmployeeScreen;
