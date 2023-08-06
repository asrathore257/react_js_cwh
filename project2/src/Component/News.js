import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Insects find their way onto Italian plates despite resistance",
      "description": "Pulverising crickets to make flour for food is seen by some as a threat to the Mediterranean diet.",
      "url": "https://www.bbc.co.uk/news/world-europe-66022857",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/14F1F/production/_130219758_sofiatastingcrickettagliatelle.jpg",
      "publishedAt": "2023-07-08T04:42:53Z",
      "content": "Media caption, The BBC's Sofia Bettiza visits a cricket farm near Turin, Italy\r\nIn a small room near the Alps in northern Italy, containers filled with millions of crickets are stacked on top of each… [+6967 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NPR"
      },
      "author": "Brashna Kasi",
      "title": "America doesn't really care about cricket. Can Major League Cricket change that?",
      "description": "The new league makes its debut near Dallas on Thursday when the Texas Super Kings play the LA Knight Riders. The league's backers hope to cultivate a new generation of U.S. cricketers.",
      "url": "https://www.npr.org/2023/07/13/1187445629/major-league-cricket-debut-texas-history-sport",
      "urlToImage": "https://media.npr.org/assets/img/2023/07/13/ap23193166972710_wide-83ac6baf7108a8a2d6ef64e40e3084c753b83936-s1400-c100.jpg",
      "publishedAt": "2023-07-13T16:38:41Z",
      "content": "The Kolkata Knight Riders' Andre Russell plays a shot during Indian Premier League cricket match in Kolkata on April 29. Russell is a player on Major League Cricket's Los Angeles Knight Riders.\r\nBika… [+3576 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Tanya Aldred",
      "title": "The Spin | ‘Cricket is our soul’: park teams unite people through love of the game",
      "description": "Far from the Long Room and the Western Terrace, grass roots clubs are bringing communities together across the countryIt is the day after midsummer, sweet and balmy at nine o’clock, the sun still up, and Alexandra Park, Manchester, is fizzing with life. A gro…",
      "url": "https://www.theguardian.com/sport/2023/jul/13/cricket-park-teams-communities-the-spin",
      "urlToImage": "https://i.guim.co.uk/img/media/198e2cf0c182da244487f11f1194a0ecd83fcf14/107_15_797_478/master/797.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b63911dd441088132379990764a26cce",
      "publishedAt": "2023-07-13T10:42:36Z",
      "content": "It is the day after midsummer, sweet and balmy at nine oclock, the sun still up, and Alexandra Park, Manchester, is fizzing with life. A group of energetic twentysomethings slam a volleyball over the… [+4371 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Brendan Griffiths",
      "title": "Free Ashes live stream 4th Test: How to watch England vs. Australia online from anywhere",
      "description": "Fancy a free Ashes live stream? The England vs. Australia cricket tournament is super simple to watch online and is gripping at 2-1 to the tourists.",
      "url": "https://www.businessinsider.com/guides/streaming/england-vs-australia-ashes-live-stream-how-to-watch-4th-test-2023",
      "urlToImage": "https://i.insider.com/64b66d5076558a00189d1337?width=1200&format=jpeg",
      "publishedAt": "2023-07-19T07:30:06Z",
      "content": "When you buy through our links, Insider may earn an affiliate commission. Learn more.\r\nWe're very excited to watch England vs. Australia online today. That's because there's plenty to play for again,… [+4513 chars]"
    },
    

  ]
  constructor() {
    super();
    console.log("Hello i am a constructor form news component ");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey-Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4">
              <NewsItem key={element.url} title={element.url} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}


        </div>

      </div>
    )
  }
}

export default News
