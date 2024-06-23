import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height:'100%',
        
    },
    maskedInput:{
        flexGrow: 1,
        height: 40,
        fontSize: 18,
        borderBottomWidth: 1,
        borderBlockColor:"#999",
        borderstyle: "solid",
        alignSelf: "flex-start",
        marginLeft: 10,
        marginRight: 10,
        

    },
    containerMask:{
        width:'100%',
        flexDirection: "row",
        marginBottom: 5,
        
    },
    errorMessage: {
        alignSelf: "flex-start",
        marginLeft: 15,
        color: "#f00",
        fontSize: 12
    },
    Logo:{ 
        height:225,
        width:350
        
    },
    btnForm:{ 
        
        justifyContent: 'center',
        
        backgroundColor:"#90EE90",
       margin:1,
       width:200 ,//120
       height:40,
       borderRadius: 12,
      


    },
    btnForme:{ 
        
        justifyContent: 'center',
        
        backgroundColor:"#447130",
       margin:12,
       width:200 ,
       height:40,
       borderRadius:12,
      


    },
    btnFormee:{ 
        
        justifyContent: 'center',
        
        backgroundColor:"#90EE90",
       margin:10,
       width:300 ,
       height:250,
    }
    
    
});
export default styles