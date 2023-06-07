import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";
import Tasks from "./Tasks";
import NewTask from "./NewTask";

const Tab = createMaterialBottomTabNavigator();

const Menu = () => {
  //Cambiamos el sombreado del icono de navegación
  const theme = useTheme();
  theme.colors.secondaryContainer = "#e5e5e5";
  return (
    <Tab.Navigator
      tabBarActiveBackgroundColor="#fff"
      activeColor="#000"
      inactiveColor="#95a5a6"
      barStyle={styles.navigationBar}
    >
      <Tab.Screen
        name="Tareas"
        component={Tasks}
        options={{
          tabBarLabel: "Tareas",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="view-list" color="#000" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Nueva tarea"
        component={NewTask}
        options={{
          tabBarLabel: "Nueva tarea",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="checkbox-marked-circle-plus-outline"
              color="#000"
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: "#fff",
    paddingBottom: 5,
    borderTopWidth: 0.5,
    borderTopColor: "#666",
  },
});

export default Menu;
