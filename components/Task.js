import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Task = ({ data, deleteTask }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.textDate}>{data.date_task}</Text>
      <Text style={styles.title}>{data.title_task}</Text>
      <View style={styles.description}>
        <Text style={styles.textDescription}>{data.description_task}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => deleteTask(data.id)}
      >
        <Text style={styles.textButton}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    borderColor: "#AAA",
    borderWidth: 1,
    marginTop: 15,
  },
  button: {
    marginTop: 15,
    backgroundColor: "red",
    width: 100,
    borderRadius: 5,
  },
  textButton: {
    color: "#fff",
    padding: 5,
    textAlign: "center",
  },
  textDate: {
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,

  },
  description: {
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  textDescription: {
    padding: 10,
  }
});

export default Task;
