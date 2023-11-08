import EASELogoColorLarge from './EASELogoColorLarge.png'
import './Main.css'

const MainPage = () => {
  return (
    <div className="container">
      <main>
        <div className="logo">
          <img src={EASELogoColorLarge} alt="EASE" />
        </div>

        <h2 className="welcome-title"> Welcome to RateRanger </h2>
        <h3 className="welcome-subtitle">
        Designed to help account managers accurately price their lanes based off market trends.
        </h3>
        <h4 className="welcome-subtitle"> A proof-of-concept web app designed and developed by Travis Nyland </h4>

        <div class="btn-holder">
          <button class="btn btn-3 hover-border-1">
            <span>Search a Lane</span>
          </button>
          <button class="btn btn-3 hover-border-2">
            <span>Lane Comparison</span>
          </button>
        </div>
        <div class="btn-holder">
        <a href="/Technical">
          <button class="btn btn-3 hover-border-1">
            <span>Technical Documentation</span>
          </button>
          </a>
          <button class="btn btn-3 hover-border-2">
            <span>Business Considerations</span>
          </button>
        </div>
      </main>
    </div>
  )
}
export default MainPage
