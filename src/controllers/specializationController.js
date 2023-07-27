import specializationService from "./../services/specializationService";
let getInfoSpeById = async (req, res) => {
  try {
    let spe = await specializationService.getSpeById(req.body.id);
    return res.status(200).json({
      message: "get info spe successful",
      spe: spe,
    });
  } catch (e) {
    return res.status(500).json(e);
  }
};



module.exports = {
  getInfoSpeById: getInfoSpeById,
};
