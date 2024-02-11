import "./TrendingTopics.css";

const TrendingTopics = ({ showAllQuotes }) => {
  return (
    <div className="trendingTopicsframe">
      <div className="avatar">
        <img className="hamburger-icon" alt="" src="/hamburger.svg" />
      </div>
      <div className="infos9">
        <div className="infos10">
          <div className="title">
            <h2 className="trending-topics">Trending Topics</h2>
            <img className="settings-icon" alt="" src="/settings.svg" />
          </div>
        </div>
        <div className="show-all-quotes">{showAllQuotes}</div>
        <div className="treanding">
          <div className="topic">
            <div className="age">AGE</div>
            <div className="age1">#age</div>
            <div className="quotes">123 quotes</div>
          </div>
          <div className="topic1">
            <div className="education">EDUCATION</div>
            <div className="education1">#education</div>
            <div className="quotes1">93 quotes</div>
          </div>
          <div className="topic2">
            <div className="science">SCIENCE</div>
            <div className="science1"> #science</div>
            <div className="quotes2">85 quotes</div>
          </div>
          <div className="topic3">
            <div className="games">games</div>
            <div className="games1">#games</div>
            <div className="quotes3">71 quotes</div>
          </div>
          <div className="topic4">
            <div className="design">Design</div>
            <div className="design1">#design</div>
            <div className="quotes4">69 quotes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTopics;
