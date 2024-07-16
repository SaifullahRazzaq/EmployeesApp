import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const EmployeeList = ({ employees, onSelect }) => {
  return (
    <View style={styles.container}>
      {employees.map((employee) => (
        <TouchableOpacity key={employee.id} onPress={() => onSelect(employee)}>
          <Text style={styles.item}>{employee.employee_name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 15,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default EmployeeList;
