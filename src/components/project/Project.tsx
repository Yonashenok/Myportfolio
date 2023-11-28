const Project = () => {
  return (
    <>
      <div className="container mx-auto p-8  ">
        <h1 className="lg:px-7 lg:mt-6 text-3xl lg:text-5xl lg:w-[700px] font-bold text-white ">
          Things I’ve made trying to put my dent in the universe.
        </h1>
        <p className="text-md lg:text-lg lg:w-[800px] font-light  leading-relaxed mt-6 mb-6  text-teal-100 lg:px-7">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas for how it can be improved.
        </p>
      </div>
      <div className="gallery">
        <div className="gallery__strip__wrapper">
          <div className="gallery__strip one">
            <div className="photo">
              <div className="photo__image">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg" />
              </div>
              <div className="photo__name">Kyoto</div>
            </div>
            <div className="photo">
              <div className="photo__image">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-austria.jpeg" />
              </div>
              <div className="photo__name">Halstatt</div>
            </div>
            <div className="photo">
              <div className="photo__image">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-peru.jpeg" />
              </div>
              <div className="photo__name">Peru</div>
            </div>
            <div className="photo">
              <div className="photo__image">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-rio.jpeg" />
              </div>
              <div className="photo__name">Rio</div>
            </div>
          </div>
        </div>
        <div className="gallery__strip__wrapper">
          <div className="gallery__strip two">
            <div className="photo">
              <div className="photo__image">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-italy.jpeg" />
              </div>
              <div className="photo__name">Italy</div>
            </div>
            <div className="photo">
              <div className="photo__image">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-osaka.jpeg" />
              </div>
              <div className="photo__name">Osaka</div>
            </div>
            <div className="photo">
              <div className="photo__image">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-bali.jpeg" />
              </div>
              <div className="photo__name">Bali</div>
            </div>
            <div className="photo">
              <div className="photo__image">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-paris2.jpg" />
              </div>
              <div className="photo__name">Paris</div>
            </div>
          </div>
        </div>
        <div className="gallery__strip__wrapper">
          <div className="gallery__strip three">
            <div className="photo">
              <div className="photo__image">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-cusco.jpeg" />
              </div>
              <div className="photo__name">Cusco</div>
            </div>
            <div className="photo">
              <div className="photo__image">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-rome.jpeg" />
              </div>
              <div className="photo__name">Rome</div>
            </div>
            <div className="photo">
              <div className="photo__image">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-paris.jpeg" />
              </div>
              <div className="photo__name">Paris</div>
            </div>
            <div className="photo">
              <div className="photo__image">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-bali2.jpeg" />
              </div>
              <div className="photo__name">Bali</div>
            </div>
          </div>
        </div>
        <div className="gallery__strip__wrapper">
          <div className="gallery__strip four">
            <div className="photo">
              <div className="photo__image">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-milan.jpeg" />
              </div>
              <div className="photo__name">Milan</div>
            </div>
            <div className="photo">
              <div className="photo__image">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-budapest.jpg" />
              </div>
              <div className="photo__name">Budapest</div>
            </div>
            <div className="photo">
              <div className="photo__image">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-vienna.jpg" />
              </div>
              <div className="photo__name">Vienna</div>
            </div>
            <div className="photo">
              <div className="photo__image">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-mexico.jpg" />
              </div>
              <div className="photo__name">Mexico</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
