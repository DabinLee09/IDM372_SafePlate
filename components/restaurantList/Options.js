import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Divider } from '@rneui/themed';
import { useData } from "../DataContext";

export default function Options() {
  const {selectedRestriction, buddyPick} = useData();
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Image
          source={require("../../assets/images/avatars/avt-placeHolder.png")}
          style={{ width: 32, height: 32 }}
        />
        <Text>{buddyPick.length} Buddies</Text>
      </View>
      <Divider orientation="vertical" color="#BFBFBF" width={1} style={{marginVertical: 8}} />
      <View style={styles.btn}>
        <Image
          source={require("../../assets/images/avatars/restricIcon.png")}
          style={{ width: 32, height: 32 }}
        />
        <Text>{selectedRestriction.length} restrictions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
    gap: 'auto'
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    gap: 4,
  },
});

