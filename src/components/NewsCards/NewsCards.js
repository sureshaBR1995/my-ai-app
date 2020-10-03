import React from 'react'
import NewsCard from '../Newscard/NewsCard';
import {Grid, Grow, Typography, typography } from '@material-ui/core';
import './nc.css';
import useStyles from '../NewsCards/styles';

const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news',  },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

const NewsCards = ({ articles,activeArticle  }) => {
    const classes = useStyles();
    if(!articles.length){
        return(
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {infoCards.map((infocard)=>(
                        <Grid item xs={12} sm={6} lg={3} className={classes.infocard}>
                            <div className={classes.card} style={{backgroundColor:infocard.color}}>
                                <Typography varient='h5'>{infocard.title}</Typography>
                                { infocard.info
                                     ? (<Typography varient='h6 center' >
                                    <strong>
                                    {infocard.title.split(' ')[2]}:<br/>
                                
                                    
                                    </strong>
                                    
                                    {infocard.info}
                                </Typography>) : null}
                                
                                <Typography varient='h6'>Try saying: <br/> <i>{infocard.text}</i><br/></Typography>
                            </div>
                           
                        </Grid>
                        
                    ))}
                    <p>Created by suresha 2020 and You can play with it(voice recognition app)</p><br/>
                    <i className='extra'>Extra commands--🤏 Hi, Hello, How are you, Who created this app, Tell me about your creator?</i>
                    
                    
                </Grid>
            </Grow>
        );
    }
    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {
                articles.map((article, i)=> (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}}>
                        <NewsCard article={article} activeArticle={activeArticle} i={i}/>
                    </Grid>     
             ))}

            </Grid>
            
        </Grow>
    )
}

export default NewsCards;
