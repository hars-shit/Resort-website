
const Blog = () => {
  return (
    <section className="section__container news__container" id="news">
      <div className="news__header">
        <div>
          <p className="section__subheader">BLOG</p>
          <h2 className="section__header">News Feeds</h2>
        </div>
        <div className="section__nav">
          <span><i className="ri-arrow-left-line"></i></span>
          <span><i className="ri-arrow-right-line"></i></span>
        </div>
      </div>
      <div className="news__grid">
        <div className="news__card">
          <img src="assets/news-1.jpg" alt="news" />
          <div className="news__card__title">
            <p>25th March 2022</p>
            <p>By Emily</p>
          </div>
          <h4>Exploring Local Culinary Gems: A Foodie Guide.</h4>
          <p>
            Join Emily as she takes you on a gastronomic adventure through the
            neighborhood surrounding our hotel.
          </p>
        </div>
        <div className="news__card">
          <img src="assets/news-2.jpg" alt="news" />
          <div className="news__card__title">
            <p>15th June 2022</p>
            <p>By David</p>
          </div>
          <h4>Balancing Mind, Body, and Soul at Our Hotel.</h4>
          <p>
            Discover holistic spa treatments, fitness facilities, and
            mindfulness practices that will leave you feeling refreshed.
          </p>
        </div>
        <div className="news__card">
          <img src="assets/news-3.jpg" alt="news" />
          <div className="news__card__title">
            <p>08th August 2022</p>
            <p>By Sarah</p>
          </div>
          <h4>Exploring Outdoor Activities Near Our Hotel.</h4>
          <p>
            From hiking and biking trails to water sports and wildlife
            encounters, she highlights ways to experience nature wonders.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Blog
