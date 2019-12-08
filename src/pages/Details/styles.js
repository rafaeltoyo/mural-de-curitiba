import { Dimensions, StyleSheet } from "react-native";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : '#fff',
    opacity : 0.8
  },
  logo:{
    width: WIDTH,
    height : 300,
    margin : 0
  },
  title1 :{
    color: 'black',
    fontSize: 25,
    fontWeight: '500',
    marginRight: 20,
    opacity: 0.8,
    textAlign: "right"
  },
  title2 :{
    color: 'black',
    fontSize: 20,
    fontWeight: '200',    
    marginRight: 20,
    opacity: 0.8
  },
  description :{
    color: 'gray',
    fontSize: 15,
    fontWeight: '200',
    padding: 0,
    margin: 10,
    opacity: 0.8,
    textAlign: "justify"
  }
});

