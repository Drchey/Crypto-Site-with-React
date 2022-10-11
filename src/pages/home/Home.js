import Header from "../../components/header/Header"
import './home.scss'
import img from '../../img/crypto.svg'
import decentralize from '../../img/decentralize.svg'
import globe from '../../img/globe.svg'
import amazon from '../../img/sponsors/amazon.svg'
import lenovo from '../../img/sponsors/lenovo.svg'
import paypal from '../../img/sponsors/paypal.svg'
import walmart from '../../img/sponsors/walmart.svg'
import verizon from '../../img/sponsors/verizon.svg'
import shopify from '../../img/sponsors/shopify.svg'
import { AcUnitTwoTone, CloudOffSharp, CurrencyBitcoinOutlined, EmailOutlined, FacebookOutlined, HubTwoTone, Instagram, PhoneAndroidOutlined, RssFeedSharp, SignalWifi0BarOutlined, SyncLockOutlined, Twitter } from "@mui/icons-material"
import Techie from "../../components/techie/Techie"
import adventure from '../../img/circle.svg'

const Home = () => {
  return (
    <div className="home">
    <Header />    
    {/* Hero Section */}
      <div className="hero">
        <div className="hero-banner">
            <span>
                BUILD FOR THE FUTURE...INVEST IN CRYPTO
            </span>
            <div className="hero-banner-info">
                DRCHEY CRYPTO
            </div>

            <div className="hero-info">
                LEARN MORE {">>"}
            </div>
        </div>
        <div className="hero-img">
          <img src={img} className="hero__img" alt="" srcset="" />
        </div>
      </div>

      {/* Services Section */}

      <div className="services">
        <span>
            Take Full Advantage of Our Services . We offer You...
        </span>
        
        <div className="categories">
          <div className="service-widget">    
                    <CurrencyBitcoinOutlined className="service-widget-img" />
                    <div className="service-widget-context">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur asperiores architecto voluptate sit nam commodi. Similique porro laboriosam perspiciatis totam, illo maiores aliquid incidunt ipsa exercitationem culpa sunt in ratione.
                    </div>
            </div>
            <div className="service-widget">    
                    <PhoneAndroidOutlined className="service-widget-img" />
                    <div className="service-widget-context">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur asperiores architecto voluptate sit nam commodi. Similique porro laboriosam perspiciatis totam, illo maiores aliquid incidunt ipsa exercitationem culpa sunt in ratione.
                    </div>
            </div>

            <div className="service-widget">    
                    <SyncLockOutlined className="service-widget-img" />
                    <div className="service-widget-context">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur asperiores architecto voluptate sit nam commodi. Similique porro laboriosam perspiciatis totam, illo maiores aliquid incidunt ipsa exercitationem culpa sunt in ratione.
                    </div>
            </div>
              
        </div>
      </div>


      {/* About */}

        <div className="about_us">
            <div className="about_us_first">
              <div className="about_us_first_context">
                  <span className="about_us_first_context__title">
                      Fully Decentralized. Secured for You
                  </span>
                  <span className="about_us_first_context__info">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae totam, vel ea ratione nostrum minima, eum reiciendis, suscipit error eveniet quibusdam sit quod iure natus dolorem debitis atque voluptatum cum!
                  </span>

                  <div className="about_us_first_context__attr">
                      <div className="attr">
                          <div className="clogs">
                              <SignalWifi0BarOutlined  className="clogs-img"/>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                          </div>
                          <div className="clogs">
                              <CloudOffSharp  className="clogs-img"/>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                          </div>
                      </div>
                      <div className="attr">
                          <div className="clogs">
                              <RssFeedSharp  className="clogs-img"/>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                          </div>
                          <div className="clogs">
                              <HubTwoTone  className="clogs-img"/>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                          </div>
                      </div>
                  </div>
              </div>

              <div className="about_us_first_img">

                  <img src={decentralize} width="600" alt="" srcset="" />

              </div>


            </div>

            <div className="about_us_second">
              <div className="about_us_second_img">
                  <img src={globe} width="500" alt="globe" srcset="" />
              </div>

              <div className="about_us_second_context">
                  <span className="about_us_second_context_title">
                      Connect to Your Wallet From Anywhere
                  </span>
                  <div className="about_us_second_context_info">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat accusantium voluptate recusandae deserunt ab, cumque accusamus sequi reprehenderit consectetur eos repudiandae veritatis eum pariatur deleniti corporis minima explicabo odit velit.
                  </div>

                  <div className="about_us_second_context_info">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat accusantium voluptate recusandae deserunt ab, cumque accusamus sequi reprehenderit consectetur eos repudiandae veritatis eum pariatur deleniti corporis minima explicabo odit velit.
                  </div>
                  <div className="about_us_second_context_info">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat accusantium voluptate recusandae deserunt ab, cumque accusamus sequi reprehenderit consectetur eos repudiandae veritatis eum pariatur deleniti corporis minima explicabo odit velit.
                  </div>
              </div>

            </div>
      </div>

    {/* Tech Stack */}
     <Techie />


     {/* Connect to Globe */}

     <div className="globe_info">
        <div className="globe_info_img">
            <img src={adventure} alt="" height="400" srcset="" />
        </div>
        <div className="globe_info_context">
          <span className="globe_info_context_title">
            We are all over the globe. 
          </span>

          <div className="globe_info_context_data">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat accusantium voluptate recusandae deserunt ab, cumque accusamus sequi reprehenderit consectetur eos repudiandae veritatis eum pariatur deleniti corporis minima explicabo odit velit.
            </div>
            <div className="globe_info_context_data">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat accusantium voluptate recusandae deserunt ab, cumque accusamus sequi reprehenderit consectetur eos repudiandae veritatis eum pariatur deleniti corporis minima explicabo odit velit.
            </div>     
            
        </div>
    </div>

    {/* Sponsors */}
    <div className="sponsors">
        <span className="sponsors-title">
            We are Backed by the Best
        </span>

        <div className="sponsors-container">
            <img src={amazon}  alt="" srcset="" />
            <img src={lenovo}  alt="" srcset="" />
            <img src={paypal} alt="" srcset="" />
            <img src={shopify} alt="" srcset="" />
            <img src={verizon} alt="" srcset="" />
            <img src={walmart} alt="" srcset="" />
        </div>
        
    </div>

    {/* Footer */}
    <div className="footer-container">
    <div className="footer">
      <div className="footer-img">
          <CurrencyBitcoinOutlined style={{ fontSize:'160' }} />
      </div>
      <div className="footer-banner">
        <span className="footer-banner-header">
        <AcUnitTwoTone style={{ fontSize:'70' }} />
            Drchey Crypto
        </span>
        <div className="footer-about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui suscipit rerum ad cumque, natus accusamus nihil cupiditate neque ipsam, esse consequatur optio assumenda itaque a minima unde iure magni. Ipsa.
        </div>
        <div className="footer-about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui suscipit rerum ad cumque, natus accusamus nihil cupiditate neque ipsam, esse consequatur optio assumenda itaque a minima unde iure magni. Ipsa.
        </div>

        <div className="footer-social-icons">
            <Instagram className="social-icons" />
            <FacebookOutlined className="social-icons" />
            <EmailOutlined className="social-icons" />
            <Twitter className="social-icons" />
        </div>
      </div>
    </div>
    <div className="copyright">
       &copy; copyright  2022
    </div>
    </div>


    </div>
  )
}

export default Home