import React, { useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import './App.css';
import useStyles from './styles.js'
import NewsCards from './components/NewsCards/NewsCards';
import wordsToNumbers from 'words-to-numbers';
const alanKey ='29b20ff976c56ca27804fe30ded8658a2e956eca572e1d8b807a3e2338fdd0dc/stage'
const App = () => {
  const [newsArticles,setNewsArticles] = useState([]);
  const [activeArticle,setActiveArticle] = useState(-1);
  const classes = useStyles();
    useEffect(() => {
      alanBtn({
        key: alanKey,
        onCommand:({ command, articles,number })=>{
          if(command==='newHeadlines'){
            setNewsArticles(articles);
            setActiveArticle(-1);
          } else if(command === 'highlight'){
            setActiveArticle((prevActiveArticle)=>prevActiveArticle + 1);
          } else if(command==='open'){
            const parsedNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy:true}) : number;
            const article = articles[parsedNumber - 1];
            if(parsedNumber >20){
              alanBtn().playText('Please try that Again.')
            }else if(article){
              //console.log(window.open(article.url,'_blank'));
              window.open(article.url,'_blank')
              alanBtn().playText('opening.....')
            }
           
          }
        }
      })
    }, [])
  return (
    <div className="App">

      <div className={classes.logoContainer}>
        
         <img src='https://www.analyticsinsight.net/wp-content/uploads/2019/04/Artificial-Intelligence.png' className={classes.alanLogo} alt="alan logo"/>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
    </div>
  );
}

export default App;
//9e4c98199f1f448f87477ed2bbc4f97a