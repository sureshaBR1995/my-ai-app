import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles({
    container:{
        padding:'0 5%',
        width:'100%',
        margin:0,
    },
    card: {
        display:'flex',
        flexDirection:'center',
         justifyContent:'space-between',
         alignItems:'canter',
         width:'100%',
         height:'45vh',
         padding:'10%',
         borderRadius:10,
         color:'white',
         flexDirection:"column"

    },
    infoCard:{
        display:'flex',
        flexDirection:'row',
        textAlign:'center',
        
    }
})
export default styles;