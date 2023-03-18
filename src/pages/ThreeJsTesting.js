export function ThreeJsTesting() {
  const style = {
    threeJsTestSection: {
      width: "100vw",
      height: "calc(100vh - 80px)",
      border: "4px solid white",
      position: "absolute",
      left: 0,
    },
    h1: {
      color: "white",
      padding: "10px",
    }
  };
  return (
    <div style={style.threeJsTestSection}>
      <h1 style={style.h1}>THREE.JS TESTING PAGE</h1>
    </div>
  );
}
