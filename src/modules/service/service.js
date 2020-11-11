const connection = require("../../../config/connection");

const newEpisode = async (episode) => {
  const client = await connection();
  await client.connect();

  try {
    const ep = await client
      .db("codegeass-api")
      .collection("episodes")
      .insertOne(episode);
    return {
      episode: ep.ops,
      status: 200,
    };
  } catch (error) {
    return {
      status: 400,
      error: error,
    };
  } finally {
    client.close();
  }
};

const dummyFunc = () => console.log("oi");

module.exports = {
  newEpisode,
  dummyFunc,
};
