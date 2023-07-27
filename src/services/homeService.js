import db from "./../models";
import removeMd from "remove-markdown";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

let getSpecializations = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let specializations = await db.Specialization.findAll();
      resolve(specializations);
    } catch (e) {
      reject(e);
    }
  });
};

let getSpecializationsLM = (limit) => {
  return new Promise(async (resolve, reject) => {
    try {
      let specializations = await db.Specialization.findAll({
        limit: limit,
      });
      resolve(specializations);
    } catch (e) {
      reject(e);
    }
  });
};

let getClinics = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let clinics = await db.Clinic.findAll();
      resolve(clinics);
    } catch (e) {
      reject(e);
    }
  });
};

let getClinicsLM = (limit) => {
  return new Promise(async (resolve, reject) => {
    try {
      let clinics = await db.Clinic.findAll({
        limit: limit,
      });
      resolve(clinics);
    } catch (e) {
      reject(e);
    }
  });
};

let getDoctors = () => {
  return new Promise(async (resolve, reject) => {
    resolve(true);
  });
};

let getPosts = (LIMIT_POST) => {
  return new Promise(async (resolve, reject) => {
    try {
      //chỉ get bài đăng y khoa
      let posts = await db.Post.findAll({
        where: {
          forDoctorId: -1,
          forSpecializationId: -1,
          forClinicId: -1,
        },
        order: [["createdAt", "DESC"]],
        limit: LIMIT_POST,
        attributes: ["id", "title","image","desc", "contentHTML", "contentMarkdown"],
      });

      await Promise.all(
        posts.map(async (post) => {
          let content = removeMd(post.contentMarkdown);
          post.setDataValue("content", content);
          return post;
        })
      );

      resolve(posts);
    } catch (e) {
      reject(e);
    }
  });
};

let getPrices = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let prices = await db.Allcode.findAll({
        where:{type: 'PRICE'}
      });
      resolve(prices);
    } catch (e) {
      reject(e);
    }
  });
};


let getProvinces = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let provinces = await db.Allcode.findAll({
        where: { type: "PROVINCE" },
      });
      resolve(provinces);
    } catch (e) {
      reject(e);
    }
  });
};

let postSearchHomePage = (keyword) => {
  return new Promise(async (resolve, reject) => {
    try {
      let doctors = await db.User.findAll({
        where: {
          roleId: 2,
          name: {
            [Op.like]: `%${keyword}%`,
          },
        },
        attributes: ["id", "name","avatar"],
      });

      let specializations = await db.Specialization.findAll({
        where: {
          name: {
            [Op.like]: `%${keyword}%`,
          },
        },
        attributes: ["id", "name","image"],
      });

      let clinics = await db.Clinic.findAll({
        where: {
          name: {
            [Op.like]: `%${keyword}%`,
          },
        },
        attributes: ["id", "name","image"],
      });
         let posts = await db.Post.findAll({
           where: {
             title: {
               [Op.like]: `%${keyword}%`,
             },
           },
           attributes: ["id", "title","image"],
         });

      resolve({
        doctors: doctors,
        specializations: specializations,
        clinics: clinics,
        posts:posts
      });
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};

let getDataPageAllClinics = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let clinics = db.Clinic.findAll({
        attributes: ["id", "name", "image"],
      });

      resolve(clinics);
    } catch (e) {
      reject(e);
    }
  });
};

let getDataPageAllDoctors = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let doctors = await db.User.findAll({
        where: {
          roleId: 2,
        },
        attributes: ["id", "name", "avatar"],
      });

      resolve(doctors);
    } catch (e) {
      reject(e);
    }
  });
};

let getDataPageAllSpecializations = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let specializations = await db.Specialization.findAll({
        attributes: ["id", "name", "image"],
      });
      resolve(specializations);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getSpecializations: getSpecializations,
  getSpecializationsLM: getSpecializationsLM,
  getClinics: getClinics,
  getClinicsLM: getClinicsLM,
  getDoctors: getDoctors,
  getPosts: getPosts,
  getPrices:getPrices,
  getProvinces:getProvinces,
  postSearchHomePage: postSearchHomePage,
  getDataPageAllClinics: getDataPageAllClinics,
  getDataPageAllDoctors: getDataPageAllDoctors,
  getDataPageAllSpecializations: getDataPageAllSpecializations,
};
