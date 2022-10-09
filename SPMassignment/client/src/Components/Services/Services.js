import React, { Component } from "react";
import "./Services.css"

export default class Services extends Component {
  render() {
    return (
      <div>
        <div class="wrap-collabsible">
          <input id="collapsible" class="toggle" type="checkbox" />
          <label for="collapsible" class="lbl-toggle">
            Centers of Excellence
          </label>
          <div class="collapsible-content">
            <div class="content-inner">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Blood cancer centre</li>
                <li class="list-group-item">Heart Centre</li>
                <li class="list-group-item">Health check</li>
                <li class="list-group-item">Cosmetic centre</li>
                <li class="list-group-item">Women's wellness centre</li>
                <li class="list-group-item">Mens wellness centre</li>
                <li class="list-group-item">Kidney care centre</li>
                <li class="list-group-item">Gastroenterology</li>
                <li class="list-group-item">Fertility centre</li>
              </ul>
            </div>
          </div>
        </div>
        <h3 class="topic">MEDICAL & SURGICAL SERVICES</h3>
        <p class="t-phar">
          Suwa Arana has revolutionized the Sri Lankan healthcare industry. For
          over a decade we have played a critical role in the nation’s strategy
          to provide world-class medical care whilst balancing the equation of
          affordability and accessibility for all Sri Lankans. For us service
          excellence is dynamic, which is why we constantly seek to enhance our
          service delivery in a bid to provide our customers with world-care
          healthcare experiences. At Suwa Arana, we provide both clinical and
          non-clinical care, always striving for excellence through a meticulous
          drive for quality and continuous improvement. We provide 280-bed
          multi-speciality tertiary care medical services located in seven acres
          of beautifully landscaped garden. Lanka Hospitals provides state of
          the art features that are complemented by cutting edge technology and
          is staffed by a well-experienced and trained team. We provide a
          complete range of the latest diagnostic and high-end medical
          technology.
        </p>
        <img class="Homepi" src="./HOS.jpg" />
        <br />
        <br />

        <h3 class="topic">CENTERS OF EXCELLENCE</h3>

        <div className="row">
          <div
            style={{ marginTop: "2%", marginBottom: "8%", marginLeft: "30%" }}
          >
            <div className="col">
              <div class="card" style={{ width: "17rem" }}>
                <img src="./app.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">FERTILITY CENTER</h5>
                  <p class="c-phar">
                    Our Fertility Centre is equipped with the latest equipment
                    and offers a wide array of fertility procedures, to help
                    couples towards experiencing the miracle of parenthood.
                  </p>
                  &nbsp;
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              style={{ marginTop: "4%", marginBottom: "8%", marginLeft: "10%" }}
            >
              <div class="card" style={{ width: "17rem" }}>
                <img src="./report.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">GASTROENTEROLOGY</h5>
                  <p class="c-phar">
                    This is a self-contained unit specializing in the diagnosis
                    and treatment of gastro-intestinal, hepatology disorders,
                    led by a team of consultant gastroenterologists and
                    surgeons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            style={{
              marginTop: "-39.1%",
              marginBottom: "3%",
              marginLeft: "80%",
            }}
          >
            <div class="card" style={{ width: "17rem" }}>
              <img src="./report.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">HEART CENTRE</h5>
                <p class="c-phar">
                  We have a proven track record of excellent results and
                  unmatched aftercare along with comprehensive cardiac and
                  cardiothoracic surgical procedures, all at affordable rates.
                </p>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}