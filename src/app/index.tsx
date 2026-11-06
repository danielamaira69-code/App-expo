import{View, Text, StyleSheet} from "react-native";

const inicio=()=>{
  return(
    <View>
      <Text>
        Mi primera app movil
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default inicio;
  