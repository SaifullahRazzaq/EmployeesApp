import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { getEmployees } from '../services/api';

const EmployeeListScreen = ({ navigation }) => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    getEmployees().then(response => {
      setEmployees(response.data.data);
      setFilteredEmployees(response.data.data);
    }).catch(error => console.error(error));
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const filtered = employees.filter(employee =>
        employee.employee_name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredEmployees(filtered);
    } else {
      setFilteredEmployees(employees);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search employees..."
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredEmployees}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Employee Details', { employee: item })}>
            <Text style={styles.item}>{item.employee_name}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Add Employee')}
      >
        <Text style={styles.addButtonText}>Add Employee</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    padding: 15,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default EmployeeListScreen;
