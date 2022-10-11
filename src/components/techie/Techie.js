import { CodeOffSharp, ConnectingAirportsSharp, DeliveryDining, MobileFriendly, SupportAgent, WifiTethering } from '@mui/icons-material'
import './techie.scss'

const Techie = () => {
  return (
    <div className="tech">
          <div className="tech_header">
              We are Well Equipped to Serve You
              <span className="tech_header_info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex est, accusamus ea earum quam omnis natus.
              </span>
          </div>

          <div className="tech_stack">
              <div className="tech_col">
                <CodeOffSharp className="tech_col_img"/>
                <span className="tech_col_info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo necessitatibus beatae, sunt incidunt laudantium eveniet voluptates iste voluptateml.
                </span>
              </div>
              <div className="tech_col">
                <MobileFriendly className="tech_col_img"/>
                <span className="tech_col_info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo necessitatibus beatae, sunt incidunt laudantium eveniet voluptates iste voluptateml.
                </span>
              </div>
              <div className="tech_col">
                <DeliveryDining className="tech_col_img"/>
                <span className="tech_col_info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo necessitatibus beatae, sunt incidunt laudantium eveniet voluptates iste voluptateml.
                </span>
              </div>
              <div className="tech_col">
                <SupportAgent className="tech_col_img"/>
                <span className="tech_col_info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo necessitatibus beatae, sunt incidunt laudantium eveniet voluptates iste voluptateml.
                </span>
                
              </div>
              <div className="tech_col">
                <WifiTethering className="tech_col_img"/>
                <span className="tech_col_info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo necessitatibus beatae, sunt incidunt laudantium eveniet voluptates iste voluptateml.
                </span>
              </div>
              <div className="tech_col">
                <ConnectingAirportsSharp className="tech_col_img"/>
                <span className="tech_col_info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo necessitatibus beatae, sunt incidunt laudantium eveniet voluptates iste voluptateml.
                </span>
              </div>
              
          </div>
          
      </div>
  )
}

export default Techie