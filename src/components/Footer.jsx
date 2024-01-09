import React from "react";
import "./Footer.css";

export default function App2() {
  return (
    <footer
      className="bottom"
   
    >
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        />
      </head>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col 12">
            <div>
            <h4 style={{ color: "lightgrey", textAlign: "justify", marginTop: 10 }}>
              {" "}
              Nous Contacter{" "}
            </h4>

              <ul>
                <li>
                  <i class="fa fa-envelope"></i> swifttools@hotmail.com
                </li>
                <li>
                  <i class="fa fa-phone"></i> +33 4 50 93 72 91
                </li>
                <li>
                  <i class="fa fa-map-marker"></i> 22 Allée Alan Turing, 63000 Clermont-Ferrand
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-12" style={{ marginTop: 10 }}>
            <h4 style={{ color: "lightgrey" }}>&nbsp;</h4>
          </div>
          <div className="col-md-4 col-12" style={{ marginTop: 10 }}>
            <h4 style={{ color: "lightgrey", textAlign: "justify" }}>
              {" "}
              CGU{" "}
            </h4>
            <nav className="Navfooter">
              <ul className="list-unstyled">
                <li>
                  <a href="privacy-policy.html">Politique de Confidentialité</a>
                </li>
                <li>
                  <a href="terms-and-conditions.html">Termes &amp; Conditions</a>
                </li>
                <li>
                  <a href="refund-policy.html">Politique de Remboursement</a>
                </li>
                <li>
                  <a href="disclaimer-policy.html">Politique de non responsabilité</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className=" col-12" style={{ fontSize: 14, color: "lightgrey" }}>
            &copy; {new Date().getFullYear()} ©SwiftTools Softwares | Tous Droits Réservés
            <i
              class="fa fa-facebook-official"
              aria-hidden="true"
              style={{ padding: 10, color: "white", float: "right" }}
            >
              {" "}
            </i>
            <i
              class="fa fa-twitter-square"
              aria-hidden="true"
              style={{ padding: 10, color: "white", float: "right" }}
            ></i>
            <i
              class="fa fa-github-square"
              aria-hidden="true"
              style={{ padding: 10, color: "white", float: "right" }}
            ></i>
          </div>
        </div>
      </div>
    </footer>
  );
}