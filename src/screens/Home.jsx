import { Text, StyleSheet, View } from "react-native";

export default function Home(){
    return(
        <View style={styles.container}>
            <Text>Tela Principal </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5e3636",
    alignItems: 'center',
    justifyContent: 'center',
  }
});