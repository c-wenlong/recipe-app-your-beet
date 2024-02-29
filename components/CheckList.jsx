import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";

const CheckList = ({ items, onCheck, checkedItems, itemType }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{itemType.toUpperCase()}</Text>
      {items.map((item, index) => {
        const key = `${itemType}-${index}`;
        return (
          <TouchableOpacity key={key} onPress={() => onCheck(index)}>
            <View style={styles.item}>
              <Checkbox
                value={checkedItems[key]}
                onValueChange={() => onCheck(index)}
                color="green"
                style={{ marginRight: 10 }}
              />
              <Text>{item}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CheckList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
  },
  item: {
    flexDirection: "row",
    alignItems: "top",
    paddingVertical: 5,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginVertical: 5,
  },
});
