const service = require("../service/service");

const newEpisode = async (episode) => {
  const varDebug = await episode.forEach(async (element) => {
    let returnStatus = [];
    returnStatus.push(await service.newEpisode(element));
    return returnStatus;
  });
  console.log(varDebug);
  //   const validateStatus = async (status) => {
  //     status.forEach((element) => {
  //       console.log(element);
  //         if (element.status !== 200) return element;
  //         return {
  //           status: 200,
  //         };
  //     });
  //   };
  //   console.log(validateStatus(returnStatus));
  //     return await validateStatus;
};

const testFunc = () => console.log("oi");

module.exports = {
  newEpisode,
  testFunc,
};
