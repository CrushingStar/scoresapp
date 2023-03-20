import '../style.css';
import './style.css';
import WhiteBox from '../whitebox/whitebox';
import searchById from '../../../searchById';
import { Container } from 'react';

function Title() {
  return (
    <h1 className="title">News</h1>
  );
}

function Content({ id }) {
  const allNews = searchById(id).news;
  return (
    <div className="leftdiv">
      {
        allNews.map(news => {
          return (
            <div>
              <p className="news-title">{news.title}</p>
              <p className="news-description">{news.description}</p>
            </div>
          );
        })
      }
    </div>
  );
}

function NewsBox({ id }) {
  return (
    <WhiteBox Title={Title} Content={Content} contentProps={{ id: id }} />
  );
}

export default NewsBox;
