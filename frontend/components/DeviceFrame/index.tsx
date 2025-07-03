const DeviceFrame = () => {
  return (
    <iframe
      className="preview shadow-2xl w-[80%] max-w-[350px] sm:w-full "
      onLoadStart={() => {
        console.info("loadingstart");
      }}
      onLoad={() => {
        console.info("load");
      }}
      src="/abohra"
      style={{
        border: "10px solid black",
        borderRadius: "40px",
        // width: "350px",

        height: "700px",
        margin: "auto",
      }}
    ></iframe>
  );
};

export default DeviceFrame;
