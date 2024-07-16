import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { deleteEmployee } from '../services/api';

const EmployeeDetailsScreen = ({ route, navigation }) => {
  const { employee } = route.params;

  const handleDelete = () => {
    deleteEmployee(employee.id).then(() => {
      navigation.navigate('Employees');
    }).catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.detail}>Name: {employee.employee_name}</Text>
      <Text style={styles.detail}>Age: {employee.employee_age}</Text>
      <Text style={styles.detail}>Salary: {employee.employee_salary}</Text>
      <Button
        title="Edit"
        onPress={() => navigation.navigate('Edit Employee', { employee })}
      />
      <Button
        title="Delete"
        onPress={handleDelete}
        color="red"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default EmployeeDetailsScreen;
