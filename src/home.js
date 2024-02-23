import "./home.css";

import part from "./kit.jpg";
import img1 from "./logo1.jpg";
import img2 from "./logo2.jpg";
import img3 from "./logo3.jpg";
import img4 from "./logo4.jpg";
import img5 from "./logo5.jpg";
import arrival_image from "./arr.jpg";
import arrival_image1 from "./arr1.jpg";
import arrival_image2 from "./arr2.jpg";
import arrival_image3 from "./arr3.jpg";

function Kasi() {
  return (
    <body>
      <main>
        <div className="content2">
          <center>
            <p className="LA">LATEST ARRIVALS</p>
          </center>
          <div className="arrival">
            <div className="arrival1">
              <img
                src={arrival_image}
                alt="arrival image"
                className="arr_img"
              />
              <p>
                WINDSHIELD FOR YAMAHA FZ-X MRP From: <strike>₹2,475</strike>{" "}
                ₹1,879
              </p>
            </div>
            <div className="arrival2">
              <img
                src={arrival_image1}
                alt="arrival image"
                className="arr_img"
              />
              <p>
                CUSTOM CHAIN SPROCKET FOR YAMAHA FZ-X MRP{" "}
                <strike>₹1,879</strike> ₹1,474
              </p>
            </div>
            <div className="arrival3">
              <img
                src={arrival_image2}
                alt="arrival image"
                className="arr_img"
              />
              <p>
                FOG LIGHT MOUNT FOR YAMAHA FZ-X MRP <strike>₹1,076</strike> ₹872
              </p>
            </div>
            <div className="arrival4">
              <img
                src={arrival_image3}
                alt="arrival image"
                className="arr_img"
              />
              <p>
                ADV GUARD FOR PULSAR NS200 MRP From: <strike>₹7,200</strike>{" "}
                ₹6,713
              </p>
            </div>
          </div>
        </div>

        <div className="pic">
          <div className="img_con">
            <img src={img1} alt="image 1" className="image" />
            <p className="content">
              Depending on which part of the world you are from, a motorcycle
              means different things ranging from freedom, thrill, adrenaline
              rush, primary mode of transport, and even a source of livelihood.
              But no matter where you are from, bikes are very good and
              dependable companions. They deserve proper care, regular
              maintenance and some additional accessories which can enhance
              their practicality. While two wheeler makers do their best to
              listen to the requirements of their prospective customers when
              they develop a well-engineered product, a stock motorcycle alone
              will not perfectly suit riders in most cases.
            </p>
          </div>
          <div className="img_con">
            <p className="content">
              when you see an adventure tourer not coming with panniers as
              standard fitment, it is not only because the company wants to sell
              you those accessories as optional extras at a profitable rate but
              it is also because they want to give their customers the choice of
              choosing from hundreds of after-market components based on their
              preference. Thanks to the boom of e-commerce, buying bike
              accessories online has become such a breeze.
            </p>
            <img src={img2} alt="image 2" className="image" />
          </div>
          <div className="img_con">
            <img src={img3} alt="image 3" className="image" />
            <p className="content">
              No matter what your bike is, or where you live, it is absolutely
              easy to find the right kind of accessory for it online. All it
              takes is a few minutes of research on the internet involving
              reading reviews and suggestions forums. Nowadays, most of the
              motorcycle accessory brands are wary of the importance of online
              stores and are compatible with international shipping. For
              example, you may be owning a KTM 390 Adventure in NewYork, USA,
              but you can find a perfect pannier mounts for it in Coimbatore,
              India, for a very attractive price.
            </p>
          </div>
          <div className="img_con">
            <p className="content">
              It is reasonable to have some reservations about fit and finish of
              the accessories that are bought online. Well, it is actually more
              reliable than buying a pair of shoes or a piece of apparel online.
              Accessories for human are designed considering the 95 percentile
              parameters but accessories for motorcycles, at least the good ones
              are designed with exact dimension of the motorcycle. So, unless
              your motorcycle has multiple variants depending on the market,
              buying a bike accessory online from a different part of the world
              is a straightforward process. Still not convinced, well the good
              brands offer clear terms and conditions for returning the goods if
              they are not up the standards that was promised.
            </p>
            <img src={img4} alt="image 4" className="image" />
          </div>
          <div className="img_con">
            <img src={img5} alt="image 5" className="image" />
            <p className="content">
              To sum it up, every motorcycle’s capabilities can be hugely
              enhanced with the right kind of accessories. Besides, they do make
              your life a lot easier. Some examples include a garage stand,
              handlebar raisers, a taller visor, crash guards, frame sliders,
              luggage rack and the list go on and on. A good brand designs their
              accessories cleverly so that they can be fitted by the rider with
              basic tools and the modification is usually completely reversible.
              If they come with clear instructions on how to install them, then
              you know you have chosen right.
            </p>
          </div>
        </div>
        <div className="kit">
          <img src={part} className="kit1 hidden" alt="picture" />
        </div>
      </main>
      <footer>
        <p>Developed by</p>
        <p>John Infant</p>
      </footer>
    </body>
  );
}
export default Kasi;
