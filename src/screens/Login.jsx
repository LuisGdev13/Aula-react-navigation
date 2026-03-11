import { Text, StyleSheet, View } from "react-native";

export default function Login(){
    return(
        <View style={styles.container}>
            <Text>Tela de Login </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5cf075',
    alignItems: 'center',
    justifyContent: 'center',
  }
});