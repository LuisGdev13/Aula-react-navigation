import { Text, StyleSheet, View } from "react-native";

export default function Services(){
    return(
        <View style={styles.container}>
            <Text>Tela de Serviço </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5cbaf0',
    alignItems: 'center',
    justifyContent: 'center',
  }
});