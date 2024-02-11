import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="stylesheet" href="/static/css/bootstrap.css"/>
          <link rel="stylesheet" href="/static/css/animate.css"/>
          <link rel="stylesheet" href="/static/css/font-awesome.css"/>
          <link rel="stylesheet" href="/static/css/ion-range-slider.css"/>
          <link rel="stylesheet" href="/static/css/linear-icons.css"/>
          <link rel="stylesheet" href="/static/css/magnific-popup.css"/>
          <link rel="stylesheet" href="/static/css/owl.carousel.css"/>
          <link rel="stylesheet" href="/static/css/theme.css"/>
      </Head>
      <body>
        <div className="wrapper">
        <Main />
        <NextScript />
        <script src="/static/js/jquery.min.js"></script>
        <script src="/static/js/bootstrap.js"></script>
        <script src="/static/js/ion.rangeSlider.js"></script>
        <script src="/static/js/magnific-popup.js"></script>
        <script src="/static/js/owl.carousel.js"></script>
        <script src="/static/js/tilt.jquery.js"></script>
        <script src="/static/js/jquery.easypiechart.js"></script>
        <script src="/static/js/bigtext.js"></script>
        {/*<script src="/static/js/main.js"></script>*/}
        </div>
      </body>
    </Html>
  );
}
