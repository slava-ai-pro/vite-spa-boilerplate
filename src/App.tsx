import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <a href="#" className="nav-logo">LuxeView</a>
          <ul className="nav-links">
            <li><a href="#flagship">Displays</a></li>
            <li><a href="#series">Solutions</a></li>
            <li><a href="#technology">Technology</a></li>
            <li><a href="#gallery">Projects</a></li>
            <li><a href="#specs">Specifications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="nav-cta">Get Quote</a>
          <button className="nav-toggle">☰</button>
        </div>
      </nav>

      {/* Hero Section - Large Residential Outdoor */}
      <section id="flagship" className="section section--dark">
        <div className="section-content">
          <h1 className="section-title">Outdoor Home Cinema</h1>
          <p className="section-subtitle">Ultra-premium LED displays for discerning homeowners.<br />Engineered for luxury outdoor living.</p>
          <div className="pitch-badge">P2.6 - P3.9 Premium Series</div>
          <div className="btn-group">
            <a href="#contact" className="btn btn-primary">Request consultation</a>
            <a href="#specs" className="btn btn-secondary">View specs</a>
          </div>
          <div className="tv-display tv-display--massive">
            <div className="led-grid"></div>
            <div className="tv-content">
              <span className="tv-content-size">248</span>
              <span className="tv-content-unit">inch</span>
              <span className="tv-content-pitch">P2.6 Ultra HD LED</span>
            </div>
          </div>
          <div className="tv-stand tv-stand--wide"></div>
        </div>
      </section>

      {/* Second Section - Pool & Patio */}
      <section id="series" className="section section--light">
        <div className="section-content">
          <h1 className="section-title">Pool & Patio</h1>
          <p className="section-subtitle">Weatherproof entertainment for outdoor living.<br />Perfect for poolside movie nights.</p>
          <div className="pitch-badge pitch-badge--dark">P2.9 Entertainment Series</div>
          <div className="btn-group">
            <a href="#contact" className="btn btn-primary">Learn more</a>
          </div>
          <div className="tv-display tv-display--large">
            <div className="led-grid"></div>
            <div className="tv-content">
              <span className="tv-content-size">190</span>
              <span className="tv-content-unit">inch</span>
              <span className="tv-content-pitch">P2.9 Outdoor LED</span>
            </div>
          </div>
          <div className="tv-stand tv-stand--wide"></div>
        </div>
      </section>

      {/* Third Section - Garden & Terrace */}
      <section className="section section--white">
        <div className="section-content">
          <h1 className="section-title">Garden & Terrace</h1>
          <p className="section-subtitle">Transform your outdoor space into a cinema.<br />Elegant designs that blend with landscaping.</p>
          <div className="pitch-badge pitch-badge--dark">P3.1 Garden Series</div>
          <div className="btn-group">
            <a href="#contact" className="btn btn-primary">Learn more</a>
          </div>
          <div className="tv-display">
            <div className="led-grid"></div>
            <div className="tv-content">
              <span className="tv-content-size">150</span>
              <span className="tv-content-unit">inch</span>
              <span className="tv-content-pitch">P3.1 Garden LED</span>
            </div>
          </div>
          <div className="tv-stand"></div>
        </div>
      </section>

      {/* Fourth Section - Compact Outdoor */}
      <section className="section section--dark">
        <div className="section-content">
          <h1 className="section-title">Compact Outdoor</h1>
          <p className="section-subtitle">Perfect for covered patios & pergolas.<br />Ideal viewing from 8-15 feet.</p>
          <div className="pitch-badge">P3.9 Compact Series</div>
          <div className="btn-group">
            <a href="#contact" className="btn btn-primary">Learn more</a>
          </div>
          <div className="tv-display tv-display--small">
            <div className="led-grid"></div>
            <div className="tv-content">
              <span className="tv-content-size">115</span>
              <span className="tv-content-unit">inch</span>
              <span className="tv-content-pitch">P3.9 Compact LED</span>
            </div>
          </div>
          <div className="tv-stand"></div>
        </div>
      </section>

      {/* Technology Grid Section */}
      <section id="technology" className="section section--light" style={{ minHeight: 'auto', padding: '80px 20px' }}>
        <div className="section-content">
          <h2 className="section-title" style={{ marginBottom: '16px' }}>Premium LED Technology</h2>
          <p className="section-subtitle" style={{ marginBottom: '50px' }}>Engineered for the outdoor environment.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <h3 className="feature-card-title">P2.6 - P3.9 Pixel Pitch</h3>
            <p className="feature-card-subtitle">Optimal resolution for outdoor viewing.<br />Crystal clear from 10-25 feet.</p>
            <a href="#" className="btn btn-primary">Learn more</a>
            <div className="feature-visual">
              <div className="led-module-visual">
                <div className="module-grid">
                  {[...Array(16)].map((_, i) => <div key={i} className="module-cell"></div>)}
                </div>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <h3 className="feature-card-title">115" to 248" Displays</h3>
            <p className="feature-card-subtitle">Cinema-scale screens for your home.<br />Custom sizes available.</p>
            <a href="#" className="btn btn-primary">Learn more</a>
            <div className="feature-visual pitch-visual">
              <div className="pitch-demo">
                <span>P2.6</span>
                <span>P2.9</span>
                <span>P3.1</span>
                <span>P3.9</span>
              </div>
            </div>
          </div>
          <div className="feature-card feature-card--light">
            <h3 className="feature-card-title">IP65 Weatherproof</h3>
            <p className="feature-card-subtitle">Rain, dust & humidity proof.<br />Built for year-round outdoor use.</p>
            <a href="#" className="btn btn-primary">Learn more</a>
            <div className="feature-visual" style={{ background: 'linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%)' }}>
              <div className="seamless-demo">
                <div className="seam-module"></div>
                <div className="seam-module"></div>
                <div className="seam-module"></div>
                <div className="seam-module"></div>
              </div>
            </div>
          </div>
          <div className="feature-card feature-card--light">
            <h3 className="feature-card-title">5,000+ Nits</h3>
            <p className="feature-card-subtitle">Daylight visible brightness.<br />Auto-dimming for night viewing.</p>
            <a href="#" className="btn btn-primary">Learn more</a>
            <div className="feature-visual" style={{ background: 'linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%)' }}>
              <div className="hdr-demo">
                <div className="hdr-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Residential Projects */}
      <section id="gallery" className="section section--dark gallery-section">
        <div className="section-content">
          <h2 className="section-title">Featured Installations</h2>
          <p className="section-subtitle">Premium outdoor displays in private residences.</p>
        </div>
        <div className="gallery-grid">
          {/* Row 1 */}
          <div className="gallery-item gallery-item--featured">
            <img
              src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=1200&h=800&fit=crop&q=80"
              alt="Outdoor cinema by the pool"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Poolside Cinema</span>
              <h3 className="gallery-title">Beverly Hills Estate</h3>
              <p className="gallery-desc">248" P2.6 Poolside Installation</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80"
              alt="Luxury outdoor theater"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Outdoor Theater</span>
              <h3 className="gallery-title">Miami Beach Villa</h3>
              <p className="gallery-desc">190" P2.9 Covered Patio</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop&q=80"
              alt="Cinema screen setup"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Home Cinema</span>
              <h3 className="gallery-title">Hamptons Residence</h3>
              <p className="gallery-desc">165" P3.1 Garden Theater</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=600&fit=crop&q=80"
              alt="Large display screen"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Terrace</span>
              <h3 className="gallery-title">Malibu Oceanfront</h3>
              <p className="gallery-desc">220" P2.6 Rooftop Terrace</p>
            </div>
          </div>

          <div className="gallery-item gallery-item--featured">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop&q=80"
              alt="Professional display installation"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Outdoor Living</span>
              <h3 className="gallery-title">Scottsdale Ranch</h3>
              <p className="gallery-desc">240" P2.9 Outdoor Living Room</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=600&fit=crop&q=80"
              alt="Movie screen outdoors"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Pool House</span>
              <h3 className="gallery-title">Palm Beach Estate</h3>
              <p className="gallery-desc">150" P3.1 Pool Cabana</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&h=600&fit=crop&q=80"
              alt="Outdoor entertainment display"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Pergola</span>
              <h3 className="gallery-title">Napa Valley Vineyard</h3>
              <p className="gallery-desc">138" P3.1 Pergola Display</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop&q=80"
              alt="Premium outdoor screen"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Backyard</span>
              <h3 className="gallery-title">Aspen Mountain Home</h3>
              <p className="gallery-desc">175" P2.9 Alpine Theater</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=800&h=600&fit=crop&q=80"
              alt="Compact LED display"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Compact</span>
              <h3 className="gallery-title">Austin Modern Home</h3>
              <p className="gallery-desc">115" P3.9 Patio Entertainment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specs" className="specs-section">
        <div className="specs-container">
          <h2 className="specs-title">Technical Specifications</h2>
          <div className="specs-grid">
            <div className="spec-item">
              <div className="spec-value">P2.6 - P3.9</div>
              <div className="spec-label">Pixel Pitch Range</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">115" - 248"</div>
              <div className="spec-label">Screen Size Range</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">5,000+</div>
              <div className="spec-label">Nits Brightness</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">IP65</div>
              <div className="spec-label">Weather Protection</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">160°</div>
              <div className="spec-label">Viewing Angle</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">100,000h</div>
              <div className="spec-label">LED Lifespan</div>
            </div>
          </div>

          {/* Pitch Guide */}
          <div className="pitch-guide">
            <h3 className="pitch-guide-title">Pixel Pitch Selection Guide</h3>
            <div className="pitch-guide-grid">
              <div className="pitch-guide-item">
                <div className="pitch-guide-value">P2.6</div>
                <div className="pitch-guide-desc">Premium clarity<br />10-15 ft viewing</div>
              </div>
              <div className="pitch-guide-item">
                <div className="pitch-guide-value">P2.9</div>
                <div className="pitch-guide-desc">Optimal balance<br />12-18 ft viewing</div>
              </div>
              <div className="pitch-guide-item">
                <div className="pitch-guide-value">P3.1</div>
                <div className="pitch-guide-desc">Garden displays<br />15-20 ft viewing</div>
              </div>
              <div className="pitch-guide-item">
                <div className="pitch-guide-value">P3.9</div>
                <div className="pitch-guide-desc">Large areas<br />18-25 ft viewing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--dark" style={{ minHeight: 'auto', padding: '100px 20px' }}>
        <div className="section-content">
          <h2 className="section-title">Transform Your Backyard</h2>
          <p className="section-subtitle">Custom outdoor LED displays from 115" to 248".</p>
          <div className="btn-group">
            <a href="#contact" className="btn btn-primary">Request Consultation</a>
            <a href="#gallery" className="btn btn-secondary">View Installations</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column">
              <h4>Screen Sizes</h4>
              <ul>
                <li><a href="#">115" Compact Series</a></li>
                <li><a href="#">138" - 165" Garden</a></li>
                <li><a href="#">165" - 220" Pool & Patio</a></li>
                <li><a href="#">220" - 248" Estate</a></li>
                <li><a href="#">Custom Sizes</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Technology</h4>
              <ul>
                <li><a href="#">P2.6 - P3.9 Pixel Pitch</a></li>
                <li><a href="#">IP65 Weatherproofing</a></li>
                <li><a href="#">Auto Brightness Control</a></li>
                <li><a href="#">Smart Home Integration</a></li>
                <li><a href="#">4K Content Support</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Home Consultation</a></li>
                <li><a href="#">Professional Install</a></li>
                <li><a href="#">System Calibration</a></li>
                <li><a href="#">Maintenance Plans</a></li>
                <li><a href="#">Warranty Support</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="#">Request Quote</a></li>
                <li><a href="#">Schedule Home Visit</a></li>
                <li><a href="#">Technical Support</a></li>
                <li><a href="#">+1 (888) LUXE-VIEW</a></li>
                <li><a href="#">homes@luxeview.com</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">Copyright © 2026 LuxeView Inc. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
