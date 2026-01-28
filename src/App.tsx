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
          <h1 className="section-title">Outdoor Home Displays</h1>
          <p className="section-subtitle">Premium outdoor LED screens for private residences.<br />Built for backyards, patios & pool areas.</p>
          <div className="pitch-badge">115" - 248" Residential Series</div>
          <div className="btn-group">
            <a href="#contact" className="btn btn-primary">Get a quote</a>
            <a href="#specs" className="btn btn-secondary">View specs</a>
          </div>
          <div className="tv-display tv-display--massive">
            <div className="led-grid"></div>
            <div className="tv-content">
              <span className="tv-content-size">248</span>
              <span className="tv-content-unit">inch</span>
              <span className="tv-content-pitch">P1.9 Premium LED</span>
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
          <div className="pitch-badge pitch-badge--dark">165" - 220" Entertainment Series</div>
          <div className="btn-group">
            <a href="#contact" className="btn btn-primary">Learn more</a>
          </div>
          <div className="tv-display tv-display--large">
            <div className="led-grid"></div>
            <div className="tv-content">
              <span className="tv-content-size">190</span>
              <span className="tv-content-unit">inch</span>
              <span className="tv-content-pitch">P2.5 Outdoor LED</span>
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
          <div className="pitch-badge pitch-badge--dark">138" - 165" Garden Series</div>
          <div className="btn-group">
            <a href="#contact" className="btn btn-primary">Learn more</a>
          </div>
          <div className="tv-display">
            <div className="led-grid"></div>
            <div className="tv-content">
              <span className="tv-content-size">150</span>
              <span className="tv-content-unit">inch</span>
              <span className="tv-content-pitch">P2.0 Garden LED</span>
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
          <div className="pitch-badge">115" - 138" Compact Series</div>
          <div className="btn-group">
            <a href="#contact" className="btn btn-primary">Learn more</a>
          </div>
          <div className="tv-display tv-display--small">
            <div className="led-grid"></div>
            <div className="tv-content">
              <span className="tv-content-size">115</span>
              <span className="tv-content-unit">inch</span>
              <span className="tv-content-pitch">P1.5 Compact LED</span>
            </div>
          </div>
          <div className="tv-stand"></div>
        </div>
      </section>

      {/* Technology Grid Section */}
      <section id="technology" className="section section--light" style={{ minHeight: 'auto', padding: '60px 20px' }}>
        <div className="section-content">
          <h2 className="section-title" style={{ marginBottom: '40px' }}>Residential LED Technology</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <h3 className="feature-card-title">Fine Pixel Pitch</h3>
            <p className="feature-card-subtitle">P1.5 to P2.5mm for crisp images.<br />Perfect for close viewing distances.</p>
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
            <h3 className="feature-card-title">Screen Sizes</h3>
            <p className="feature-card-subtitle">From 115" to 248" diagonal.<br />Perfect for any backyard.</p>
            <a href="#" className="btn btn-primary">Learn more</a>
            <div className="feature-visual pitch-visual">
              <div className="pitch-demo">
                <span>115"</span>
                <span>150"</span>
                <span>190"</span>
                <span>248"</span>
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
          <p className="section-subtitle">Luxury outdoor displays in private residences.</p>
        </div>
        <div className="gallery-grid">
          {/* Row 1 */}
          <div className="gallery-item gallery-item--featured">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop&q=80"
              alt="Luxury backyard with pool"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Poolside</span>
              <h3 className="gallery-title">Beverly Hills Estate</h3>
              <p className="gallery-desc">248" P1.9 Poolside Cinema</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80"
              alt="Modern patio area"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Patio</span>
              <h3 className="gallery-title">Miami Beach Villa</h3>
              <p className="gallery-desc">190" P2.0 Covered Patio</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80"
              alt="Luxury backyard"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Garden</span>
              <h3 className="gallery-title">Hamptons Residence</h3>
              <p className="gallery-desc">165" P2.5 Garden Theater</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&q=80"
              alt="Outdoor entertainment area"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Terrace</span>
              <h3 className="gallery-title">Malibu Oceanfront</h3>
              <p className="gallery-desc">220" P1.9 Rooftop Terrace</p>
            </div>
          </div>

          <div className="gallery-item gallery-item--featured">
            <img
              src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop&q=80"
              alt="Modern outdoor living"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Outdoor Living</span>
              <h3 className="gallery-title">Scottsdale Ranch</h3>
              <p className="gallery-desc">240" P2.0 Outdoor Living Room</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop&q=80"
              alt="Pool house"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Pool House</span>
              <h3 className="gallery-title">Palm Beach Estate</h3>
              <p className="gallery-desc">150" P1.5 Pool Cabana</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop&q=80"
              alt="Covered outdoor space"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Pergola</span>
              <h3 className="gallery-title">Napa Valley Vineyard</h3>
              <p className="gallery-desc">138" P2.0 Pergola Display</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop&q=80"
              alt="Luxury backyard setup"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Backyard</span>
              <h3 className="gallery-title">Aspen Mountain Home</h3>
              <p className="gallery-desc">175" P2.5 Alpine Theater</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop&q=80"
              alt="Compact outdoor screen"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Compact</span>
              <h3 className="gallery-title">Austin Modern Home</h3>
              <p className="gallery-desc">115" P1.5 Patio Entertainment</p>
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
              <div className="spec-value">-20°/+50°C</div>
              <div className="spec-label">Operating Temperature</div>
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

          {/* Size Guide */}
          <div className="pitch-guide">
            <h3 className="pitch-guide-title">Residential Screen Size Guide</h3>
            <div className="pitch-guide-grid">
              <div className="pitch-guide-item">
                <div className="pitch-guide-value">115"</div>
                <div className="pitch-guide-desc">Compact spaces<br />8-12 ft viewing</div>
              </div>
              <div className="pitch-guide-item">
                <div className="pitch-guide-value">150"</div>
                <div className="pitch-guide-desc">Garden & terrace<br />10-15 ft viewing</div>
              </div>
              <div className="pitch-guide-item">
                <div className="pitch-guide-value">190"</div>
                <div className="pitch-guide-desc">Pool & patio<br />12-18 ft viewing</div>
              </div>
              <div className="pitch-guide-item">
                <div className="pitch-guide-value">220"</div>
                <div className="pitch-guide-desc">Large backyard<br />15-22 ft viewing</div>
              </div>
              <div className="pitch-guide-item">
                <div className="pitch-guide-value">248"</div>
                <div className="pitch-guide-desc">Estate cinema<br />18-25 ft viewing</div>
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
                <li><a href="#">Fine Pixel Pitch</a></li>
                <li><a href="#">Weatherproofing</a></li>
                <li><a href="#">Auto Brightness</a></li>
                <li><a href="#">Smart Home Integration</a></li>
                <li><a href="#">4K/8K Content</a></li>
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
