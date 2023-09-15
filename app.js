function english() {
    document.getElementById("en").innerHTML = `<!DOCTYPE html>
    <html id="en" lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sakura Ramen</title>
        <link rel="stylesheet" href="styles.css" />
        <script src="app.js"></script>
      </head>
      <body class="mybody">
        <header class="header">
          <img id="top" src="./img/sakuralogo.png" alt="" class="logo" />
          <nav class="navbar">
            <a class="mobile-hide" href="#menu">MENU</a>
            <a class="mobile-hide" href="#locations">LOCATIONS</a>
            <a class="mobile-hide" href="about.html">ABOUT</a>
            <a class="tel" href="tel:0176 54564534"
              ><img class="phoneicon" src="./img/phone.png" alt="" />
              <p>0176 54564534</p></a
            >
            <img
              onclick="german()"
              id="german"
              class="language-img"
              src="./img/german.png"
              alt="german"
            />
          </nav>
        </header>
    
        <section class="hero">
          <div class="title">
            <h1>SAKURA RAMEN</h1>
            <p>THE BEST RAMEN IN TOWN</p>
          </div>
        </section>
    
        <section class="order-container">
          <div class="order-title">
            <h2>HOW TO ORDER</h2>
          </div>
          <div class="order-desc">
            <div class="noodle">
              <img src="./img/noodle.png" alt="" />
              <h3>
                Pick your<br />
                noodle
              </h3>
            </div>
    
            <div class="broth">
              <img src="./img/broth.png" alt="" />
              <h3>
                Pick your<br />
                broth
              </h3>
            </div>
    
            <div class="egg">
              <img src="./img/egg.png" alt="" />
              <h3>
                Add your<br />
                toppings
              </h3>
            </div>
          </div>
        </section>
    
        <section class="menu-container">
          <div class="menu-title">
            <h2 id="menu">OUR MENU</h2>
          </div>
    
          <div class="menu-food">
            <div class="tonkotsu space-between">
              <img src="./img/r1-cp.png" alt="" />
              <div class="tonkotsu-table">
                <h3>Tonkotsu Ramen</h3>
                <table>
                  <tr>
                    <td class="td-space">CHICKEN</td>
                    <td>11.95€</td>
                  </tr>
                  <tr>
                    <td class="td-space">BEEF</td>
                    <td>12.95€</td>
                  </tr>
                  <tr>
                    <td class="td-space">SHRIMP</td>
                    <td>13.95€</td>
                  </tr>
                </table>
              </div>
            </div>
    
            <div class="miso space-between">
              <div class="miso-table">
                <h3>Spicy Miso Ramen</h3>
                <div class="prices">
                  <table>
                    <tr>
                      <td class="td-space">CHICKEN</td>
                      <td>11.95€</td>
                    </tr>
                    <tr>
                      <td class="td-space">BEEF</td>
                      <td>12.95€</td>
                    </tr>
                    <tr>
                      <td class="td-space">SHRIMP</td>
                      <td>13.95€</td>
                    </tr>
                  </table>
                </div>
              </div>
              <img src="./img/r2-cp.png" alt="" />
            </div>
    
            <div class="shio">
              <img src="./img/r3-cp.png" alt="" />
              <div class="shio-table">
                <h3>Shio Ramen</h3>
                <table>
                  <tr>
                    <td class="td-space">CHICKEN</td>
                    <td>11.95€</td>
                  </tr>
                  <tr>
                    <td class="td-space">BEEF</td>
                    <td>12.95€</td>
                  </tr>
                  <tr>
                    <td class="td-space">SHRIMP</td>
                    <td>13.95€</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </section>
    
        <section class="location-title">
          <h2 id="locations">FIND US AT</h2>
        </section>
    
        <section class="icon">
          <img src="./img/ubication.png" alt="" />
          <p>Kapuzinerstraße 31, München, 80337</p>
        </section>
    
        <iframe
          class="googlemaps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.2081532576362!2d11.55862837695996!3d48.125509071242064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf44d01affc5%3A0xe7a07e0710be63e8!2sKapuzinerstra%C3%9Fe%2031%2C%2080337%20M%C3%BCnchen%2C%20Deutschland!5e0!3m2!1sde!2str!4v1693401424635!5m2!1sde!2str"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    
        <footer>
          <div class="footer">
            <div class="fcontainer">
              <div class="flogo">
                <a href="#top"
                  ><img class="flogo" src="./img/sakuraramen.png" alt=""
                /></a>
              </div>
              <div class="flogo2">
                <a href="#top"
                  ><img class="flogo2" src="./img/sakuralogo.png" alt=""
                /></a>
              </div>
              <div class="social-media">
                <a href="tripadvisor.html"
                  ><img src="./img/tripadvisor.png" alt=""
                /></a>
                <a href="facebook.html"><img src="./img/facebook.png" alt="" /></a>
                <a href="instagram.html"
                  ><img src="./img/instagram.png" alt=""
                /></a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
    `
}



function german() {
    document.getElementById("en").innerHTML = `<!DOCTYPE html>
    <html id="ger" lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sakura Ramen</title>
        <link rel="stylesheet" href="styles.css" />
        <script src="app.js"></script>
      </head>
      <body class="mybody">
        <header class="header">
          <img id="top" src="./img/sakuralogo.png" alt="" class="logo" />
          <nav class="navbar">
            <a class="mobile-hide" href="#menu">MENÜ</a>
            <a class="mobile-hide" href="#locations">LOCATIONS</a>
            <a class="mobile-hide" href="about.html">ÜBER UNS</a>
            <a class="tel" href="tel:0176 54564534"
              ><img class="phoneicon" src="./img/phone.png" alt="" />
              <p>0176 54564534</p></a
            >
            <img
              onclick="english()"
              id="english"
              class="language-img"
              src="./img/english.png"
              alt="english"
            />
          </nav>
        </header>
    
        <section class="hero">
          <div class="title">
            <h1>SAKURA RAMEN</h1>
            <p>DIE BESTEN RAMEN IN DER STADT</p>
          </div>
        </section>
    
        <section class="order-container">
          <div class="order-title">
            <h2>BESTELLUNGSABLAUF</h2>
          </div>
          <div class="order-desc">
            <div class="noodle">
              <img src="./img/noodle.png" alt="" />
              <h3>
                Nudeln<br />
                auswählen
              </h3>
            </div>
    
            <div class="broth">
              <img src="./img/broth.png" alt="" />
              <h3>
                Brühe<br />
                auswählen
              </h3>
            </div>
    
            <div class="egg">
              <img src="./img/egg.png" alt="" />
              <h3>
                Toppings<br />
                hinzufügen
              </h3>
            </div>
          </div>
        </section>
    
        <section class="menu-container">
          <div class="menu-title">
            <h2 id="menu">UNSER MENÜ</h2>
          </div>
    
          <div class="menu-food">
            <div class="tonkotsu space-between">
              <img src="./img/r1-cp.png" alt="" />
              <div class="tonkotsu-table">
                <h3>Tonkotsu Ramen</h3>
                <table>
                  <tr>
                    <td class="td-space">HÜHNCHEN</td>
                    <td>11.95€</td>
                  </tr>
                  <tr>
                    <td class="td-space">RIND</td>
                    <td>12.95€</td>
                  </tr>
                  <tr>
                    <td class="td-space">CREVETTEN</td>
                    <td>13.95€</td>
                  </tr>
                </table>
              </div>
            </div>
    
            <div class="miso space-between">
              <div class="miso-table">
                <h3>Spicy Miso Ramen</h3>
                <div class="prices">
                  <table>
                    <tr>
                      <td class="td-space">HÜHNCHEN</td>
                      <td>11.95€</td>
                    </tr>
                    <tr>
                      <td class="td-space">RIND</td>
                      <td>12.95€</td>
                    </tr>
                    <tr>
                      <td class="td-space">CREVETTEN</td>
                      <td>13.95€</td>
                    </tr>
                  </table>
                </div>
              </div>
              <img src="./img/r2-cp.png" alt="" />
            </div>
    
            <div class="shio">
              <img src="./img/r3-cp.png" alt="" />
              <div class="shio-table">
                <h3>Shio Ramen</h3>
                <table>
                  <tr>
                    <td class="td-space">HÜHNCHEN</td>
                    <td>11.95€</td>
                  </tr>
                  <tr>
                    <td class="td-space">RIND</td>
                    <td>12.95€</td>
                  </tr>
                  <tr>
                    <td class="td-space">CREVETTEN</td>
                    <td>13.95€</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </section>
    
        <section class="location-title">
          <h2 id="locations">ANFAHRT</h2>
        </section>
    
        <section class="icon">
          <img src="./img/ubication.png" alt="" />
          <p>Kapuzinerstraße 31, München, 80337</p>
        </section>
    
        <iframe
          class="googlemaps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.2081532576362!2d11.55862837695996!3d48.125509071242064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf44d01affc5%3A0xe7a07e0710be63e8!2sKapuzinerstra%C3%9Fe%2031%2C%2080337%20M%C3%BCnchen%2C%20Deutschland!5e0!3m2!1sde!2str!4v1693401424635!5m2!1sde!2str"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    
        <footer>
          <div class="footer">
            <div class="fcontainer">
              <div class="flogo">
                <a href="#top"
                  ><img class="flogo" src="./img/sakuraramen.png" alt=""
                /></a>
              </div>
              <div class="flogo2">
                <a href="#top"
                  ><img class="flogo2" src="./img/sakuralogo.png" alt=""
                /></a>
              </div>
              <div class="social-media">
                <a href="tripadvisor.html"
                  ><img src="./img/tripadvisor.png" alt=""
                /></a>
                <a href="facebook.html"><img src="./img/facebook.png" alt="" /></a>
                <a href="instagram.html"
                  ><img src="./img/instagram.png" alt=""
                /></a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
    `
}