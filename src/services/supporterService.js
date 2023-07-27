import db from "./../models";
import removeMd from "remove-markdown";
import helper from "../helper/client";

let getAllPosts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let posts = await db.Post.findAll({
        attributes: ["id", "title", "writerId", "createdAt"],
      });
      await Promise.all(
        posts.map(async (post) => {
          let supporter = await helper.getSupporterById(post.writerId);
          let dateClient = helper.convertDateClient(post.createdAt);
          post.setDataValue("writerName", supporter.name);
          post.setDataValue("dateClient", dateClient);
          return post;
        })
      );

      resolve(posts);
    } catch (e) {
      reject(e);
    }
  });
};

let getInfoSupporterById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let supporter = await db.User.findOne({
        where: { id: id },
        attributes: ["id", "name", "avatar", "address", "phone", "description"],
      });
      resolve(supporter);
    } catch (e) {
      reject(e);
    }
  });
};

let postCreatePost = (item) => {
  return new Promise(async (resolve, reject) => {
    try {
      let post = await db.Post.create(item);

      // ko đồng bộ các bài đăng dành giới thiệu bác sĩ or chuyên khoa or phòng khám
      //syncs to elastic
      // if (
      //   item.forDoctorId === "-1" &&
      //   item.forClinicId === "-1" &&
      //   item.forClinicId === "-1"
      // ) {
      //   let plainText = removeMd(item.contentMarkdown);
      //   plainText.replace(/(?:\r\n|\r|\\n)/g, " ");
      //   let data = {
      //     postId: post.id,
      //     writerId: post.writerId,
      //     title: item.title,
      //     content: plainText,
      //   };
      //   await syncElastic.createPost(data);
      // }
      resolve(post);
    } catch (e) {
      reject(e);
    }
  });
};

let getDetailPostPage = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let post = await db.Post.findOne({
        where: { id: id },
        attributes: [
          "id",
          "title",
          "desc",
          "image",
          "descMarkdown",
          "descHTML",
          "contentHTML",
          "contentMarkdown",
          "forDoctorId",
          "forSpecializationId",
          "forClinicId",
          "writerId",
          "createdAt"
        ],
      });
         let supporter = await helper.getSupporterById(post.writerId);
         let dateClient = helper.convertDateClient(post.createdAt);
         post.setDataValue("writerName", supporter.name);
         post.setDataValue("dateClient", dateClient);
      if (!post) {
        reject(`Can't get post with id=${id}`);
      }

      resolve(post);
    } catch (e) {
      reject(e);
    }
  });
};

let getAllSupporters = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let supporters = await db.User.findAll({
        where: { roleId: 3 },
      });

      resolve(supporters);
    } catch (e) {
      reject(e);
    }
  });
};

let getSupporterForEditPage = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let doctor = await db.User.findOne({
        where: { id: id },
      });
      resolve(doctor);
    } catch (e) {
      reject(e);
    }
  });
};

let updateSupporterInfo = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let supporter = await db.User.findOne({
        where: { id: data.id },
      });
      await supporter.update(data);
      resolve(true);
    } catch (e) {
      reject(e);
    }
  });
};

let deleteSupportById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.User.destroy({
        where: { id: id },
      });
      resolve("delete successful");
    } catch (e) {
      reject(e);
    }
  });
};



let getSupportersPagination = (page, limit) => {
  return new Promise(async (resolve, reject) => {
    try {
      let sp = "";
      sp = await db.User.findAndCountAll({
        where: {
          roleId: 3,
        },
        offset: (page - 1) * limit,
        limit: limit,
        attributes: ["id", "name", "avatar","isActive"],
        order: [["createdAt", "DESC"]],
      });


      let total = Math.ceil(sp.count / limit);

      resolve({
        supporters: sp,
        total: total,
      });
    } catch (e) {
      reject(e);
    }
  });
};



let getPostsPagination = (page, limit, role) => {
  return new Promise(async (resolve, reject) => {
    try {
      let posts = "";
      //only get bài đăng y khoa
      if (role === "admin") {
        posts = await db.Post.findAndCountAll({
          offset: (page - 1) * limit,
          limit: limit,
          attributes: [
            "id",
            "title",
            "desc",
            "contentMarkdown",
            "contentHTML",
            "image",
            "createdAt",
            "writerId",
          ],
          order: [["createdAt", "DESC"]],
        });
      } else {
        posts = await db.Post.findAndCountAll({
          where: {
            forDoctorId: -1,
            forSpecializationId: -1,
            forClinicId: -1,
          },
          offset: (page - 1) * limit,
          limit: limit,
          attributes: [
            "id",
            "title",
            "desc",
            "contentMarkdown",
            "contentHTML",
            "image",
            "createdAt",
            "writerId",
          ],
          order: [["createdAt", "DESC"]],
        });
      }

      let total = Math.ceil(posts.count / limit);

      await Promise.all(
        posts.rows.map(async (post) => {
          let supporter = await helper.getSupporterById(post.writerId);
          let dateClient = helper.convertDateClient(post.createdAt);
          post.setDataValue("writerName", supporter.name);
          post.setDataValue("dateClient", dateClient);
          return post;
        })
      );
    

      resolve({
        posts: posts,
        total: total,
      })
       
    } catch (e) {
      reject(e);
    }
  });
};

let deletePostById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let post = await db.Post.findOne({
        where: { id: id },
        attributes: ["id", "forDoctorId", "forSpecializationId", "forClinicId"],
      });
      await post.destroy();
      resolve(true);
    } catch (e) {
      reject(e);
    }
  });
};

let putUpdatePost = (item) => {
  return new Promise(async (resolve, reject) => {
    try {
      let post = await db.Post.findOne({
        where: { id: item.id },
        attributes: ["id", "forDoctorId", "forSpecializationId", "forClinicId"],
      });
      await post.update(item);

      //chỉ update bài đăng y khoa
      // //sync to elasticsearch
      // if (
      //   item.forDoctorId === "-1" &&
      //   item.forClinicId === "-1" &&
      //   item.forClinicId === "-1"
      // ) {
      //   let plainText = removeMd(item.contentMarkdown);
      //   plainText.replace(/(?:\r\n|\r|\\n)/g, " ");
      //   let data = {
      //     postId: post.id,
      //     writerId: post.writerId,
      //     title: item.title,
      //     content: plainText,
      //   };
      //   await syncElastic.updatePost(data);
      // }

      resolve(true);
    } catch (e) {
      reject(e);
    }
  });
};

let doneComment = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let comment = await db.Comment.findOne({
        where: { id: id },
      });
      await comment.update({ status: true });
      resolve(comment);
    } catch (e) {
      reject(e);
    }
  });
};

let createFeedback = (x) => {
  return new Promise(async (resolve, reject) => {
    try {
       let  feedback =  await db.Feedback.create(x);
       resolve(feedback)
    } catch (error) {
      console.log(error)
      reject(error)
    }
   
  });
};


let deleteFeedbackById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Feedback.destroy({
        where: { id: id },
      });
      resolve("delete successful");
    } catch (e) {
      reject(e);
    }
  });
};


let changeStatusFeedback = (data) => {
  console.log(data);
  return new Promise(async (resolve, reject) => {
    try {
      let feedback = await db.Feedback.findOne({
        where: { id: data.id },
      });

      if (feedback.status === false) {
        await feedback.update({ status:true});
      }
      resolve(feedback);
    } catch (e) {
      reject(e);
    }
  });
};

let getFeedbackById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let feedback = await db.Feedback.findOne({
        where: { id: id },
      });
      resolve(feedback);
    } catch (error) {
      console.log(error)
      reject(error);
    }
  });
};
module.exports = {
  postCreatePost: postCreatePost,
  getAllPosts: getAllPosts,
  getDetailPostPage: getDetailPostPage,
  getPostsPagination: getPostsPagination,
  deletePostById: deletePostById,
  putUpdatePost: putUpdatePost,
  doneComment: doneComment,

  getAllSupporters: getAllSupporters,
  deleteSupportById: deleteSupportById,
  getSupporterForEditPage: getSupporterForEditPage,
  updateSupporterInfo: updateSupporterInfo,
  getSupportersPagination:getSupportersPagination,

  getInfoSupporterById: getInfoSupporterById,
  createFeedback: createFeedback,
  deleteFeedbackById: deleteFeedbackById,
  changeStatusFeedback: changeStatusFeedback,
  getFeedbackById: getFeedbackById
};
