import { Dimensions, StyleSheet } from "react-native";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    paddingTop: 70,
    alignItems: "center",
    backgroundColor: "#fff",
    opacity: 0.8
  },
  logoText: {
    color: "gray",
    fontSize: 30,
    fontWeight: "500",
    padding: 0,
    margin: 0,
    opacity: 0.8
  },
 
  imageContainer: {
    alignItems: "center",
    width: 350,
    height: 350,
    margin: 0,
    borderRadius: 30,
    overflow: "hidden",
    shadowColor: "rgba(0,0,0, .7)",
    shadowOffset: { height: 5, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,    
    marginBottom: 10
  },
  imageStyle:{
    width: 335,
    height: 335,
    margin: 0,
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "white",
  },

  userHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },

  itemDescription:{
    flexDirection: 'row-reverse',
    width: '80%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  moreItems:{
    marginTop: 10,
    width: '90%'
  },

  footer:{
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }

  
});

