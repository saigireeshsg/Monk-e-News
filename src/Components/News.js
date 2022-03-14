import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "India Today"
      },
      author: "IndiaToday.in",
      title:
        "Russia-Ukraine War news LIVE Updates March 12, 2022 - India Today",
      description:
        "Russia-Ukraine War news LIVE Updates March 12: As Russia's invasion in Ukraine enters the 17th day, several cities have been taken under siege. India at the UN hoped diplomacy and dialogue between Russia & Ukraine would bring an end to hostilities. TS Tirumur…",
      url:
        "https://www.indiatoday.in/world/russia-ukraine-war/story/russia-ukraine-war-live-india-volodymyr-zelenskyy-vladimir-putin-kyiv-1924434-2022-03-12",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202203/Mariupol_shelling__AP_-647x363.jpeg?xyYVWI6NktVSwjnqZddEE341ESmBWRWt",
      publishedAt: "2022-03-12T12:25:00Z",
      content: null
    },
    {
      source: {
        id: null,
        name: "The Indian Express"
      },
      author: "Express Web Desk",
      title:
        "Ukraine-Russia war Live Updates: Russian rockets destroy airfield near Kyiv; Ukraine says mosque housing 80 civilians shelled in Mariupol - The Indian Express",
      description: "Russia Ukraine War News Today, World War 3 News Updates",
      url:
        "https://indianexpress.com/article/world/ukraine-russia-war-live-updates-nuclear-biden-kyiv-putin-zelenskyy-7816203/",
      urlToImage:
        "https://images.indianexpress.com/2022/03/russia-ukraine-2.jpg",
      publishedAt: "2022-03-12T09:20:23Z",
      content:
        "Russian forces expanded their offensive in Ukraine on Friday as they conducted airstrikes in new areas in the country's west, while Russian President Vladimir Putin approved the recruitment of \"volun… [+1622 chars]"
    },
    {
      source: {
        id: null,
        name: "News18"
      },
      author: "Tech Desk",
      title:
        "Russia Ukraine War: Google Launches Air Raid Alerts To Alert Ukrainians About Air Strikes - News18",
      description:
        "Google's YouTube has banned Russian state media channels on its platform across the world.",
      url:
        "https://www.news18.com/news/tech/russia-ukraine-war-google-launches-air-raid-alerts-to-alert-ukrainians-about-air-strikes-4866764.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2022/03/russia-ukraine-1-164705998216x9.jpg",
      publishedAt: "2022-03-12T04:40:07Z",
      content:
        "Search giant Google is rolling out Air Raid alerts on Android phones in Ukraine. This is said to act as a supplement to the country’s existing air raid alert systems and will be based on alerts provi… [+2080 chars]"
    },

    {
      source: {
        id: "business-insider",
        name: "Business Insider"
      },
      author: "hrobertson@businessinsider.com (Harry Robertson)",
      title:
        "Ukraine asking for bitcoin donations is bullish for the cryptocurrency, veteran strategist Tom Lee says",
      description:
        '"Still think bitcoin is not useful?" Fundstrat\'s Tom Lee wrote in a note to clients, after Ukraine asked for donations.',
      url:
        "https://markets.businessinsider.com/news/currencies/ukraine-bitcoin-donations-cryptocurrencies-investing-prices-tom-lee-fundstrat-2022-3",
      urlToImage:
        "https://i.insider.com/621e388296929400196c0c32?width=1200&format=jpeg",
      publishedAt: "2022-03-01T16:03:11Z",
      content:
        "The Ukrainian government asking for donations in bitcoin shows the utility of the cryptocurrency and is a positive sign for the market, veteran strategist Tom Lee has said.\r\nUkraine government accoun… [+1750 chars]"
    },
    {
      source: {
        id: "reuters",
        name: "Reuters"
      },
      author: null,
      title:
        "El Salvador says could launch bitcoin sovereign bond between March 15-20 - Reuters",
      description:
        "El Salvador is looking for the right timing to launch its bitcoin-backed bond, which could happen between March 15 and 20, the Central American nation's finance minister Alejandro Zelaya on Friday told local TV.",
      url:
        "https://www.reuters.com/technology/el-salvador-says-could-launch-bitcoin-sovereign-bond-between-march-15-20-2022-03-11/",
      urlToImage:
        "https://www.reuters.com/resizer/sBWUvemJW0ryqtlCm2qpRiwhcus=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XW2TXYEQFZNPVKYUBO65KACFFU.jpg",
      publishedAt: "2022-03-11T14:26:00Z",
      content:
        "SAN SALVADOR, March 11 (Reuters) - El Salvador is looking for the right timing to launch its bitcoin-backed bond, which could happen between March 15 and 20, the Central American nation's finance min… [+533 chars]"
    }
  ];

  constructor() {
    super();
    this.state = this.articles.state;
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false
    };
  }
  async componentDidMount() {
    console.log("cdm");
    let url = "https://saurav.tech/NewsAPI/sources.json";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <div className="container my-4">
        <h2>Today's Top Headlines</h2>
        <div className="row">
          {this.articles.map((resp) => {
            return (
              <div className="col-md-3" key={resp.url}>
                <NewsItem
                  title={resp.title ? resp.title.slice(0, 100) : ""}
                  desciption={resp.content ? resp.content : ""}
                  image_url={resp.urlToImage}
                  news_url={resp.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default News;
