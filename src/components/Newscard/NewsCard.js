import React,{useState,useEffect,createRef} from 'react';
import { Card, CardAction, CardActionArea,CardContent,Cardmedia,Button,Typography, CardMedia, CardActions } from '@material-ui/core';
import useStyles from './styles'
import classNames from 'classnames'
const NewsCard = ({article:{description,publishedAt,source,title,url,urlToImage},i,activeArticle}) => {
   
   const classes = useStyles();
   const [elrefs,setElrefs] = useState([]);
   const scrollToRef = (ref)=> window.scroll(0,ref.current.offsetTop - 50);
   useEffect(()=>{
       setElrefs((refs)=>Array(20).fill().map((_,j)=>refs[j] || createRef()));

   }, []);
   useEffect(()=>{
        if(i===activeArticle && elrefs[activeArticle]){
            scrollToRef(elrefs[activeArticle]);
        }
   },[i,activeArticle,elrefs])
    return (
       <Card ref={elrefs[i]} className={classNames(classes.card,activeArticle===i ? classes.activeCard:null)}>
        <CardActionArea href={url} target="_blank">
            <CardMedia className={classes.media} image={urlToImage ||'https://pngtree.com/freepng/creative-news-broadcast-illustration_4580296.html'}/>
                <div className={classes.details}>
                    <Typography varient='body2' color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography varient='body2' color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom="h5">{title}</Typography>
                <CardContent>
                    <Typography varient="body2" color="textSecondary" component='p'>{description}</Typography>
                </CardContent>
            
        </CardActionArea>
        <CardActions className={classes.cardActions}>
            <Button size="small" color='primary'>Learn More</Button>
            <Typography varient='h5' color='textSecondary'>{i+1}</Typography>
        </CardActions>

       </Card>
    )
}

export default NewsCard;
