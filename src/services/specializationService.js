import db from "./../models";
import moment from "moment";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

let createNewSpe = (item) => {
  return new Promise(async (resolve, reject) => {
    try {
      // console.log(item);
      let spe = await db.Specialization.create(item);
      resolve(spe);
    } catch (error) {
      reject(error);
    }
  });
};

// let getSpeById = (id) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let spe = await db.Specialization.findOne({
//         where: { id: id },
//       });
//       resolve(spe);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

let getSpeById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let spe= await db.Specialization.findOne({
        where: { id: id },
        attributes: ["id", "name", "image", "introductionHTML","introductionMarkdown"],
      });
      if (!spe) {
        reject("Can't get specialization-id: " + id);
      }
      let post = await db.Post.findOne({
        where: { forSpecializationId: id },
        attributes: ["id", "title", "contentHTML"],
      });

      resolve({
        spe: spe,
        post: post,
      
      });
    } catch (err) {
      reject(err);
    }
  });
};

let getAllSpe = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let listSpe = await db.Specialization.findAll({
        attributes: ["id", "name"],
        order: [["name", "ASC"]],
      });
      resolve(listSpe);
    } catch (e) {
      reject(e);
    }
  });
};

let deleteSpeById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Specialization.destroy({
        where: { id: id },
      });
      let infos = await db.Doctor_User.findAll({
        where: {
          specializationId: id,
        },
      });
      let arrId = [];
      infos.forEach((x) => {
        arrId.push(x.id);
      });
      await db.Doctor_User.destroy({ where: { id: arrId } });
      resolve(true);
    } catch (e) {
      reject(e);
    }
  });
};

let updateSpe = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let clinic = await db.Specialization.findOne({
        where: { id: data.id },
      });
      await clinic.update(data);
      resolve(true);
    } catch (error) {
      reject(e);
    }
  });
};

let getSpecializationsPagination = (page, limit) => {
  return new Promise(async (resolve, reject) => {
    try {
      let spe = "";

      spe = await db.Specialization.findAndCountAll({
        offset: (page - 1) * limit,
        limit: limit,
        attributes: ["id", "name", "image"],
        order: [["createdAt", "DESC"]],
      });

      let total = Math.ceil(spe.count / limit);

      resolve({
        spe: spe,
        total: total,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllProvince = ()=>{
    return new Promise(async (resolve, reject) => {
      try {
        let province = await db.Allcode.findAll({
          where:{type:"PROVINCE"}
        });
        resolve({
          province:province
        });
      } catch (e) {
        reject(e);
      }
    });
}

module.exports = {
  createNewSpe: createNewSpe,
  getSpeById: getSpeById,
  getAllSpe: getAllSpe,
  deleteSpeById: deleteSpeById,
  updateSpe: updateSpe,
  getSpecializationsPagination: getSpecializationsPagination,
  getAllProvince: getAllProvince,
};
