import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EmployeeListScreen from './screens/EmployeeListScreen';
import EmployeeDetailsScreen from './screens/EmployeeDetailsScreen';
import AddEmployeeScreen from './screens/AddEmployeeScreen';
import EditEmployeeScreen from './screens/EditEmployeeScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Employees">
      <Stack.Screen name="Employees" component={EmployeeListScreen} />
      <Stack.Screen name="Employee Details" component={EmployeeDetailsScreen} />
      <Stack.Screen name="Add Employee" component={AddEmployeeScreen} />
      <Stack.Screen name="Edit Employee" component={EditEmployeeScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
