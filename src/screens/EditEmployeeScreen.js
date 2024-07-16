import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { updateEmployee } from '../services/api';

const EditEmployeeScreen = ({ route, navigation }) => {
  const { employee } = route.params;
  const [name, setName] = useState(employee.employee_name);
  const [age, setAge] = useState(employee.employee_age);
  const [salary, setSalary] = useState(employee.employee_salary);

  const handleUpdate = () => {
    const updatedEmployee = {
      name,
      age,
      salary,
    };
    updateEmployee(employee.id, updatedEmployee).then(() => {
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
        title="Update Employee"
        onPress={handleUpdate}
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

export default EditEmployeeScreen;
