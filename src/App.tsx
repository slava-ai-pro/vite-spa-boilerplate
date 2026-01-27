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
            <li><a href="#series">Sizes</a></li>
            <li><a href="#technology">Technology</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#specs">Specifications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="nav-cta">Get Quote</a>
          <button className="nav-toggle">☰</button>
        </div>
      </nav>

      {/* Hero Section - Flagship Model */}
      <section id="flagship" className="section section--dark">
        <div className="section-content">
          <h1 className="section-title">LuxeView Pro 247"</h1>
          <p className="section-subtitle">Modular MicroLED. Infinite possibilities.</p>
          <div className="pitch-badge">P0.9mm Ultra-Fine Pitch</div>
          <div className="btn-group">
            <a href="#contact" className="btn btn-primary">Learn more</a>
            <a href="#specs" className="btn btn-secondary">View specs</a>
          </div>
          <div className="tv-display tv-display--massive">
            <div className="led-grid"></div>
            <div className="tv-content">
              <span className="tv-content-size">247</span>
              <span className="tv-content-unit">inches</span>
              <span className="tv-content-pitch">P0.9 MicroLED</span>
            </div>
          </div>
          <div className="tv-stand tv-stand--wide"></div>
        </div>
      </section>

      {/* Second Section - 205" Model */}
      <section id="series" className="section section--light">
        <div className="section-content">
          <h1 className="section-title">LuxeView Elite 205"</h1>
          <p className="section-subtitle">The ultimate home cinema experience.<br />Seamless modular design. Zero bezels.</p>
          <div className="pitch-badge pitch-badge--dark">P1.2mm Fine Pitch</div>
          <div className="btn-group">
            <a href="#contact" className="btn btn-primary">Learn more</a>
          </div>
          <div className="tv-display tv-display--large">
            <div className="led-grid"></div>
            <div className="tv-content">
              <span className="tv-content-size">205</span>
              <span className="tv-content-unit">inches</span>
              <span className="tv-content-pitch">P1.2 MicroLED</span>
            </div>
          </div>
          <div className="tv-stand tv-stand--wide"></div>
        </div>
      </section>

      {/* Third Section - 160" Model */}
      <section className="section section--white">
        <div className="section-content">
          <h1 className="section-title">LuxeView Signature 160"</h1>
          <p className="section-subtitle">Perfect for luxury living rooms.</p>
          <div className="pitch-badge pitch-badge--dark">P1.5mm Fine Pitch</div>
          <div className="btn-group">
            <a href="#contact" className="btn btn-primary">Learn more</a>
          </div>
          <div className="tv-display">
            <div className="led-grid"></div>
            <div className="tv-content">
              <span className="tv-content-size">160</span>
              <span className="tv-content-unit">inches</span>
              <span className="tv-content-pitch">P1.5 MicroLED</span>
            </div>
          </div>
          <div className="tv-stand"></div>
        </div>
      </section>

      {/* Fourth Section - 115" Entry Model */}
      <section className="section section--dark">
        <div className="section-content">
          <h1 className="section-title">LuxeView 115"</h1>
          <p className="section-subtitle">Where luxury begins.</p>
          <div className="pitch-badge">P1.9mm Standard Pitch</div>
          <div className="btn-group">
            <a href="#contact" className="btn btn-primary">Learn more</a>
          </div>
          <div className="tv-display tv-display--small">
            <div className="led-grid"></div>
            <div className="tv-content">
              <span className="tv-content-size">115</span>
              <span className="tv-content-unit">inches</span>
              <span className="tv-content-pitch">P1.9 MicroLED</span>
            </div>
          </div>
          <div className="tv-stand"></div>
        </div>
      </section>

      {/* Technology Grid Section */}
      <section id="technology" className="section section--light" style={{ minHeight: 'auto', padding: '60px 20px' }}>
        <div className="section-content">
          <h2 className="section-title" style={{ marginBottom: '40px' }}>LED Module Technology</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <h3 className="feature-card-title">MicroLED Modules</h3>
            <p className="feature-card-subtitle">Self-emitting LED technology.<br />Each pixel is its own light source.</p>
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
            <h3 className="feature-card-title">Pixel Pitch Options</h3>
            <p className="feature-card-subtitle">From P0.9 to P2.5mm.<br />Choose based on viewing distance.</p>
            <a href="#" className="btn btn-primary">Learn more</a>
            <div className="feature-visual pitch-visual">
              <div className="pitch-demo">
                <span>P0.9</span>
                <span>P1.2</span>
                <span>P1.5</span>
                <span>P1.9</span>
              </div>
            </div>
          </div>
          <div className="feature-card feature-card--light">
            <h3 className="feature-card-title">Seamless Tiling</h3>
            <p className="feature-card-subtitle">Modular cabinets connect<br />with zero visible seams.</p>
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
            <h3 className="feature-card-title">HDR Pro Engine</h3>
            <p className="feature-card-subtitle">100,000:1 contrast ratio.<br />10,000 nits peak brightness.</p>
            <a href="#" className="btn btn-primary">Learn more</a>
            <div className="feature-visual" style={{ background: 'linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%)' }}>
              <div className="hdr-demo">
                <div className="hdr-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Clean Professional Look */}
      <section id="gallery" className="section section--dark gallery-section">
        <div className="section-content">
          <h2 className="section-title">Designed for Luxury Spaces</h2>
          <p className="section-subtitle">Our displays transform the finest residences worldwide.</p>
        </div>
        <div className="gallery-grid">
          {/* Row 1 */}
          <div className="gallery-item gallery-item--featured">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop&q=80"
              alt="Luxury home theater with large screen"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Home Cinema</span>
              <h3 className="gallery-title">Private Screening Room</h3>
              <p className="gallery-desc">247" P0.9 MicroLED Installation</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80"
              alt="Modern luxury living room"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Living Room</span>
              <h3 className="gallery-title">Beverly Hills Estate</h3>
              <p className="gallery-desc">205" P1.2 Display</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80"
              alt="Minimalist luxury interior"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Modern Design</span>
              <h3 className="gallery-title">Monaco Penthouse</h3>
              <p className="gallery-desc">160" P1.5 Display</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop&q=80"
              alt="Contemporary living space"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Entertainment</span>
              <h3 className="gallery-title">Miami Beach Villa</h3>
              <p className="gallery-desc">205" P1.2 Display</p>
            </div>
          </div>

          <div className="gallery-item gallery-item--featured">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop&q=80"
              alt="Luxury modern interior"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Media Room</span>
              <h3 className="gallery-title">London Townhouse</h3>
              <p className="gallery-desc">247" P0.9 MicroLED Installation</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&q=80"
              alt="High-end residential interior"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Residence</span>
              <h3 className="gallery-title">Singapore Condo</h3>
              <p className="gallery-desc">160" P1.5 Display</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop&q=80"
              alt="Penthouse interior"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Penthouse</span>
              <h3 className="gallery-title">NYC Skyline View</h3>
              <p className="gallery-desc">205" P1.2 Display</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&q=80"
              alt="Luxury entertainment area"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Lounge</span>
              <h3 className="gallery-title">Dubai Palm Estate</h3>
              <p className="gallery-desc">247" P0.9 Display</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop&q=80"
              alt="Master bedroom suite"
              className="gallery-image"
            />
            <div className="gallery-info">
              <span className="gallery-tag">Master Suite</span>
              <h3 className="gallery-title">Aspen Retreat</h3>
              <p className="gallery-desc">115" P1.9 Display</p>
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
              <div className="spec-value">115" - 300"+</div>
              <div className="spec-label">Screen Sizes Available</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">P0.9 - P2.5</div>
              <div className="spec-label">Pixel Pitch Range (mm)</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">8K+</div>
              <div className="spec-label">Resolution Support</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">10,000</div>
              <div className="spec-label">Peak Nits Brightness</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">100,000:1</div>
              <div className="spec-label">Contrast Ratio</div>
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
                <div className="pitch-guide-value">P0.9</div>
                <div className="pitch-guide-desc">Ultra-close viewing<br />2-3m distance</div>
              </div>
              <div className="pitch-guide-item">
                <div className="pitch-guide-value">P1.2</div>
                <div className="pitch-guide-desc">Close viewing<br />3-4m distance</div>
              </div>
              <div className="pitch-guide-item">
                <div className="pitch-guide-value">P1.5</div>
                <div className="pitch-guide-desc">Standard viewing<br />4-5m distance</div>
              </div>
              <div className="pitch-guide-item">
                <div className="pitch-guide-value">P1.9</div>
                <div className="pitch-guide-desc">Living room<br />5-6m distance</div>
              </div>
              <div className="pitch-guide-item">
                <div className="pitch-guide-value">P2.5</div>
                <div className="pitch-guide-desc">Large spaces<br />6m+ distance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--dark" style={{ minHeight: 'auto', padding: '100px 20px' }}>
        <div className="section-content">
          <h2 className="section-title">Transform Your Space</h2>
          <p className="section-subtitle">Custom configurations for any luxury residence.</p>
          <div className="btn-group">
            <a href="#contact" className="btn btn-primary">Request Consultation</a>
            <a href="#gallery" className="btn btn-secondary">View Gallery</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column">
              <h4>Display Sizes</h4>
              <ul>
                <li><a href="#">115" LuxeView</a></li>
                <li><a href="#">160" Signature</a></li>
                <li><a href="#">205" Elite</a></li>
                <li><a href="#">247" Pro</a></li>
                <li><a href="#">Custom Configurations</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Technology</h4>
              <ul>
                <li><a href="#">MicroLED Modules</a></li>
                <li><a href="#">Pixel Pitch Guide</a></li>
                <li><a href="#">HDR Pro Engine</a></li>
                <li><a href="#">Seamless Tiling</a></li>
                <li><a href="#">Color Calibration</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Site Assessment</a></li>
                <li><a href="#">Custom Installation</a></li>
                <li><a href="#">Professional Calibration</a></li>
                <li><a href="#">Maintenance Plans</a></li>
                <li><a href="#">24/7 Support</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="#">Request Quote</a></li>
                <li><a href="#">Schedule Showroom Visit</a></li>
                <li><a href="#">Technical Support</a></li>
                <li><a href="#">+1 (888) LUXE-VIEW</a></li>
                <li><a href="#">sales@luxeview.com</a></li>
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
