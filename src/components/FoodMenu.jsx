

const FoodMenu = () => {
  return (
    <section className="menu" id="menu">
    <div className="section__container menu__container">
      <div className="menu__header">
        <div>
          <p className="section__subheader">MENU</p>
          <h2 className="section__header">Our Food Menu</h2>
        </div>
        <div className="section__nav">
          <span><i className="ri-arrow-left-line"></i></span>
          <span><i className="ri-arrow-right-line"></i></span>
        </div>
      </div>
      <ul className="menu__items">
        <li>
          <img src="assets/menu-1.jpg" alt="menu" />
          <div className="menu__details">
            <h4>Fggs & Bacon</h4>
            <p>
              It is a culinary innovation that puts a unique spin on the
              beloved breakfast combination.
            </p>
          </div>
        </li>
        <li>
          <img src="assets/menu-2.jpg" alt="menu" />
          <div className="menu__details">
            <h4>Tea or Coffee</h4>
            <p>
              A classic choice for your daily dose of comfort and calmness.
            </p>
          </div>
        </li>
        <li>
          <img src="assets/menu-3.jpg" alt="menu" />
          <div className="menu__details">
            <h4>Chia Oatmeal</h4>
            <p>
              Our Chia Oatmeal is a wholesome nutrient-packed breakfast
              delight.
            </p>
          </div>
        </li>
        <li>
          <img src="assets/menu-4.jpg" alt="menu" />
          <div className="menu__details">
            <h4>Fruit Parfait</h4>
            <p>
              Our Fruit Parfait is a delightful culinary masterpiece of
              freshness and flavor.
            </p>
          </div>
        </li>
        <li>
          <img src="assets/menu-5.jpg" alt="menu" />
          <div className="menu__details">
            <h4>Marmalade Selection</h4>
            <p>
              Our Marmalade Selection is a delectable medley of vibrant,
              handcrafted citrus preserves.
            </p>
          </div>
        </li>
        <li>
          <img src="assets/menu-6.jpg" alt="menu" />
          <div className="menu__details">
            <h4>Cheese Plate</h4>
            <p>
              Our cheese plate is a masterpiece that celebrates rich and
              diverse world of cheeses.
            </p>
          </div>
        </li>
      </ul>
      <div className="menu__images">
        <img src="assets/menu-7.jpg" alt="menu" />
        <img src="assets/menu-8.jpg" alt="menu" />
        <img src="assets/menu-9.jpg" alt="menu" />
      </div>
      <ul className="menu__banner">
        <li>
          <span><i className="ri-file-text-line"></i></span>
          <h4>84k</h4>
          <p>Projects are Completed</p>
        </li>
        <li>
          <span><i className="ri-user-line"></i></span>
          <h4>10M</h4>
          <p>Active Around World</p>
        </li>
        <li>
          <span><i className="ri-function-line"></i></span>
          <h4>02k</h4>
          <p>Categories Served</p>
        </li>
        <li>
          <span><i className="ri-lightbulb-flash-line"></i></span>
          <h4>100M</h4>
          <p>Ideas Raised Funds</p>
        </li>
      </ul>
    </div>
  </section>
  )
}

export default FoodMenu
