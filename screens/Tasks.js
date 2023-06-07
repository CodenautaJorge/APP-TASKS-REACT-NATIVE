import { Text, View, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Config from "../Config";
import Task from "../components/Task";

const Tasks = ({ navigation, route }) => {
  const api = Config.api;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, [tasks.length]);

  const getTasks = async () => {
    await fetch(api + "get-tasks.php", {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => {
        Alert.alert("Error!", "Inténtalo más tarde");
      })
      .then((response) => {
        if (response.message == "error") {
          Alert.alert("¡Error!", "No ha sido posible obtener el resultado");
        } else {
          //Obtenemos la respuesta del backend
          setTasks(response.tasks);
          console.log(tasks);
        }
      });
  };

  //Actualizamos los datos cuando creamos una nueva tarea:

  if (route.params != undefined && route.params.state == true) {
    getTasks();
    route.params.state = false;
  }

  const deleteTask = async (id) => {
    console.log(id);
    const sendData = {
      id: id,
    };
    await fetch(api + "delete-task.php", {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    })
      .then((res) => res.json())
      .catch((error) => {
        Alert.alert("Error!", "Inténtalo más tarde");
      })
      .then((response) => {
        if (response.message == "error") {
          Alert.alert("¡Error!", "No ha sido posible obtener el resultado");
        } else {
          //Obtenemos la respuesta del backend
          getTasks();
        }
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tareas</Text>
      </View>

      {tasks.length > 0 ? (
        tasks.map((data, i) => {
          return <Task key={i} data={data} deleteTask={deleteTask} />;
        })
      ) : (
        <Text style={styles.text}>No existe ninguna tarea...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    marginTop: 20,
  }
});

export default Tasks;
