import { Text, StyleSheet, View, Button } from "react-native";

export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <Text>Tela Principal </Text>
            <Button title="Fazer login" onPress={()=>navigation.navigate("login")} />
            <Button title="Ir para serviços" onPress={()=>navigation.navigate("services")} />
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