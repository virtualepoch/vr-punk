export const OmniControls = ({
  bg,
  setBg,
  bgWrapX,
  bgWrapY,
  setBgWrapX,
  setBgWrapY,
  texture,
  setTexture,
  wrapX,
  setWrapX,
  wrapY,
  setWrapY,
}) => {
  return (
    <div className="torus-btn-container">
      {/* TEXTURE CONTROLS ////////////////////////////////////// */}
      <div className="torus-btn-wrap">
        <button
          className="btn down"
          onClick={() => {
            setTexture(texture > 0 ? texture - 1 : 0);
          }}
        ></button>
        <p>
          texture:
          <br />
          {texture}
        </p>
        <button
          className="btn"
          onClick={() => setTexture(texture + 1)}
        ></button>
      </div>

      <div className="torus-btn-wrap wrap-x">
        <button
          className="btn down"
          onClick={() => {
            setWrapX(wrapX > 0 ? wrapX - 1 : 0);
          }}
        ></button>
        <p>
          wrapX:
          <br />
          {wrapX}
        </p>
        <button className="btn" onClick={() => setWrapX(wrapX + 1)}></button>
      </div>

      <div className="torus-btn-wrap wrap-y">
        <button
          className="btn down"
          onClick={() => {
            setWrapY(wrapY > 0 ? wrapY - 1 : 0);
          }}
        ></button>
        <p>
          wrapY:
          <br />
          {wrapY}
        </p>
        <button className="btn" onClick={() => setWrapY(wrapY + 1)}></button>
      </div>

      <hr />

      {/* BACKGROUND CONTROLS /////////////////////////////////// */}
      <div className="torus-btn-wrap torus-bg">
        <button
          className="btn down"
          onClick={() => {
            setBg(bg > 0 ? bg - 1 : 1);
          }}
        ></button>
        <p>
          bg:
          <br />
          {bg}
        </p>
        <button className="btn" onClick={() => setBg(bg + 1)}></button>
      </div>

      <div className="torus-btn-wrap wrap-x">
        <button
          className="btn down"
          onClick={() => {
            setBgWrapX(bgWrapX > 0 ? bgWrapX - 1 : 0);
          }}
        ></button>
        <p>
          wrapX:
          <br />
          {bgWrapX}
        </p>
        <button
          className="btn"
          onClick={() => setBgWrapX(bgWrapX + 1)}
        ></button>
      </div>

      <div className="torus-btn-wrap wrap-y">
        <button
          className="btn down"
          onClick={() => {
            setBgWrapY(bgWrapY > 0 ? bgWrapY - 1 : 0);
          }}
        ></button>
        <p>
          wrapY:
          <br />
          {bgWrapY}
        </p>
        <button
          className="btn"
          onClick={() => setBgWrapY(bgWrapY + 1)}
        ></button>
      </div>
    </div>
  );
};
