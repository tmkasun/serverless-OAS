export default (_req, res) => {
    const date = new Date().toString();
    console.log(_req)
    res.status(200).send(date);
  };