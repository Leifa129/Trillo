import './sass/main.scss';
import logo from './img/logo.png';
import user from './img/user.jpg';
import hotel1 from './img/hotel-1.jpg';
import hotel2 from './img/hotel-2.jpg';
import hotel3 from './img/hotel-3.jpg';
import user3 from './img/user-3.jpg';
import user4 from './img/user-4.jpg';
import user5 from './img/user-5.jpg';
import user6 from './img/user-6.jpg';
import user1 from './img/user-1.jpg';
import user2 from './img/user-2.jpg';


function App() {
  return (
    <div className="container">
        <header className="header">
            <img src={logo} alt="trillo logo" className="logo"/>
            <form action="" className="search">
                <input type="text" className="search__input" placeholder="Search hotels"/>
                <button className="search__button">
                  <svg class="search__icon">
                      <path className="path1" d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z" />
                  </svg>
                </button>
            </form>

            <nav className="user-nav">
                <div className="user-nav__icon-box">

                    <svg className="user-nav__icon">
                        <path className="path1"
                              d="M14.65 8.512c-2.28-4.907-3.466-6.771-7.191-6.693-1.327 0.027-1.009-0.962-2.021-0.587-1.010 0.375-0.143 0.924-1.177 1.773-2.902 2.383-2.635 4.587-1.289 9.84 0.567 2.213-1.367 2.321-0.602 4.465 0.559 1.564 4.679 2.219 9.025 0.607s7.086-4.814 6.527-6.378c-0.765-2.145-2.311-0.961-3.272-3.027zM10.924 16.595c-3.882 1.44-7.072 0.594-7.207 0.217-0.232-0.65 1.253-2.816 5.691-4.463s6.915-1.036 7.174-0.311c0.153 0.429-1.775 3.116-5.658 4.557zM9.676 13.101c-2.029 0.753-3.439 1.614-4.353 2.389 0.643 0.584 1.847 0.726 3.046 0.281 1.527-0.565 2.466-1.866 2.095-2.904-0.005-0.013-0.011-0.023-0.016-0.036-0.251 0.082-0.508 0.171-0.772 0.27z"/>
                    </svg>
                    <span className="user-nav__notification">7</span>
                </div>

                <div className="user-nav__icon-box">
                <svg className="user-nav__icon">
                    <path className="path1"
                          d="M5.8 12.2v-6.2h-3.8c-1.1 0-2 0.9-2 2v6c0 1.1 0.9 2 2 2h1v3l3-3h5c1.1 0 2-0.9 2-2v-1.82c-0.064 0.014-0.132 0.021-0.2 0.021l-7-0.001zM18 1h-9c-1.1 0-2 0.9-2 2v8h7l3 3v-3h1c1.1 0 2-0.899 2-2v-6c0-1.1-0.9-2-2-2z"/>
                </svg>

                    <span className="user-nav__notification">13</span>
                </div>

                <div className="user-nav__user">
                    <img src={user} alt="User photo" className="user-nav__user-photo"/>
                    <span className="user-nav__user-name">Jonas</span>
                </div>

            </nav>
        </header>
        <div className="content">
            <nav className="sidebar">
                <div className="sidebar__item">HOTEL</div>
                <div className="sidebar__item">Flight</div>
                <div className="sidebar__item">car rental</div>
                <div className="sidebar__item">tours</div>

            </nav>
            <main className="hotel-view">
                <div className="gallery">
                    <figure className="gallery__item">
                        <img src={hotel1} alt="" className="gallery__photo"/>
                    </figure>
                    <figure className="gallery__item">
                        <img src={hotel2} alt="" className="gallery__photo"/>
                    </figure>
                    <figure className="gallery__item">
                        <img src={hotel3} alt="" className="gallery__photo"/>
                    </figure>
                </div>


                <div className="overview">

                    <h1 className="overview__heading">
                        Hotel Las Palmas
                    </h1>
                    <div className="overview__stars">
                        <svg className="overview__icon-star"><path className="path1"
                                      d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"/>
                        </svg>
                        <svg className="overview__icon-star"><path className="path1"
                                   d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"/>
                        </svg>
                        <svg className="overview__icon-star"><path className="path1"
                                   d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"/>
                        </svg>
                        <svg className="overview__icon-star"><path className="path1"
                                   d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"/>
                        </svg>
                        <svg className="overview__icon-star"><path className="path1"
                                   d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"/>
                        </svg>
                    </div>

                    <div className="overview__location">
                        <svg className="overview__icon-location">
                            <path className="path1"
                                  d="M10 2.009c-2.762 0-5 2.229-5 4.99 0 4.774 5 11 5 11s5-6.227 5-11c0-2.76-2.238-4.99-5-4.99zM10 9.76c-1.492 0-2.7-1.209-2.7-2.7s1.208-2.7 2.7-2.7c1.49 0 2.699 1.209 2.699 2.7s-1.209 2.7-2.699 2.7z"/>
                        </svg>
                        <button className="btn-inline">Albufeira, Portugal</button>
                    </div>

                <div className="overview__rating">
                    <div className="overview__rating-average">8.6</div>
                    <div className="overview__rating-count">429 votes</div>
                </div>
                </div>
                <div className="detail">
                    <div className="description">
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad asperernatur aut beatae cssimos facilis imus quia quis quos rem repellendus soluta tempora unde veritatis.
                        </p>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetucum delectus dignissimos facilis itaque pollendus soluta tempora unde veritatis.
                        </p>

                        <ul className="list">
                            <li className="list__item">Close to the beach</li>
                            <li className="list__item">Breakfast included</li>
                            <li className="list__item">Free airport shuttle</li>
                            <li className="list__item">Free wifi in all rooms</li>
                            <li className="list__item">Air conditioning and heating</li>
                            <li className="list__item">Pets allowed</li>
                            <li className="list__item">We speak all languages</li>
                            <li className="list__item">Perfect for families</li>
                        </ul>

                        <div className="recommend">
                            <p className="recommend__count">
                                Lucy and 3 others recommend this hotel.
                            </p>
                            <div className="recommend__friends">
                                <img src={user3} alt="" className="recommend__photo"/>
                                <img src={user4} alt="" className="recommend__photo"/>
                                <img src={user5} alt="" className="recommend__photo"/>
                                <img src={user6} alt="" className="recommend__photo"/>
                            </div>
                        </div>
                    </div>

                    <div className="user-reviews">
                        <figure className="review">
                            <blockquote className="review__text">
                               Accusantium architecto dolorum ea excepturi harum maiores optio perspiciatis possimus sapiente sed!
                            </blockquote>

                            <figcaption className="review__user">
                                <img src={user1} alt="" className="review__photo"/>
                                <div className="review__user-box">
                                    <p className="review__user-name">Nick Smith</p>
                                    <p className="review__user-date">Feb 23rd, 2017</p>
                                </div>
                                <div className="review__rating">7.8</div>
                            </figcaption>
                        </figure>
                        <figure className="review">
                            <blockquote className="review__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium error fugiat hic illum ipsam quibusdam quos tempora voluptatibus!
                            </blockquote>

                            <figcaption className="review__user">
                                <img src={user2} alt="" className="review__photo"/>
                                <div className="review__user-box">
                                    <p className="review__user-name">Mary Thomas</p>
                                    <p className="review__user-date">Sep 13th, 2017</p>
                                </div>
                                <div className="review__rating">9.3</div>
                            </figcaption>
                        </figure>
                        <button className="btn-inline">
                            Show all <span>&rarr;</span>
                        </button>
                    </div>
                </div>
                <div className="cta">
                    <h2 className="cta__book-now">
                        Goods news! We have 4 free rooms for your selected dates!
                    </h2>

                    <button className="btn">
                        <span className="btn__visible">Book now</span>
                        <span className="btn__invisible">Only 4 rooms left</span>


                    </button>
                </div>
            </main>
        </div>

    </div>
  );
}

export default App;
