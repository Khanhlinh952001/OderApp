import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#eae8e8'
  },
  head: {
    height: 140,
    backgroundColor: "green",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  head_icon: {
    height: 80,
    paddingTop: 40,
    paddingLeft: 10,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  head_icon_text: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  search:{
     marginLeft:20,
     marginRight:20,
     marginTop:10,
     backgroundColor:'white',
     borderRadius:8
  },
  body:{
    flex:1,
    marginLeft:10,
    marginRight:10,
    marginLeft:10
  }
});

export default styles;
