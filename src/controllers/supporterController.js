require("dotenv").config();
import homeService from "../services/homeService";
import userService from "../services/userService";
import supporterService from "../services/supporterService";
import patientService from "../services/patientService";
import multer from "multer";
const statusNewId = 4;
const statusPendingId = 3;
const statusFailedId = 2;
const statusSuccessId = 1;

let getInfoSupporterById = async (req, res) => {
  try {
    let supporter = await supporterService.getInfoSupporterById(req.body.id);
    return res.status(200).json({
      message: "success",
      supporter: supporter,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

let getNewPatients = (req, res) => {
  return res.render("main/users/admins/managePatient.ejs", {
    user: req.user,
  });
};

let getAllPosts = async (req, res) => {
  try {
    let posts = await supporterService.getAllPosts();
    return res.status(200).json({ data: posts });
  } catch (e) {
    return res.status(500).json(e);
  }
};

let getCreatePost = async (req, res) => {
  let clinics = await homeService.getClinics();
  let doctors = await userService.getInfoDoctors();
  let specializations = await homeService.getSpecializations();
  return res.render("main/users/admins/createPost.ejs", {
    user: req.user,
    clinics: clinics,
    doctors: doctors,
    specializations: specializations,
  });
};

let postCreatePost = async (req, res) => {
  imagePostUploadFile(req,res,async(e)=>{
 if (e) {
   console.log(e);
   if (e.message) {
     console.log(e.message);
     return res.status(500).send(e.message);
   } else {
     console.log(e);
     return res.status(500).send(e);
   }
 }
 try {
   let item = {
     id: req.body.id,
     title: req.body.titlePost,
     forDoctorId: req.body.forDoctorId,
     forClinicId: req.body.forClinicId,
     forSpecializationId: req.body.forSpecializationId,
     desc: req.body.desc,
     descMarkdown: req.body.mainMarkdownPost,
     descHTML: req.body.contentHTMLMain,
     contentMarkdown: req.body.contentMarkdown,
     contentHTML: req.body.contentHTML,
     updatedAt: Date.now(),
   };
   let imagePost = req.file;
   item.image = imagePost.filename;
   item.writerId = req.user.id;
   item.createdAt = Date.now();
   console.log(item)
   let post = await supporterService.postCreatePost(item);
   return res.status(200).json({
     status: 1,
     message: post,
   });
 } catch (e) {
   return res.status(500).json(e);
 }
  })
  
};

let postCreatePostWithoutFile = async (req, res) => {
  try {
     let item = {
       id: req.body.id,
       title: req.body.titlePost,
       forDoctorId: req.body.forDoctorId,
       forClinicId: req.body.forClinicId,
       forSpecializationId: req.body.forSpecializationId,
       desc: req.body.desc,
       writerId: req.user.id,
       descMarkdown: req.body.mainMarkdownPost,
       descHTML: req.body.contentHTMLMain,
       contentMarkdown: req.body.contentMarkdown,
       contentHTML: req.body.contentHTML,
       updatedAt: Date.now(),
     }; 
    let post = await supporterService.postCreatePost(item);
    return res.status(200).json({
      message: "success",
      post: post,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};





let getManagePosts = async (req, res) => {
  try {
    let role = "";
    if (req.user) {
      if (req.user.roleId === 1) role = "admin";
    }
    let object = await supporterService.getPostsPagination(
      1,
      +process.env.LIMIT_GET_POST,
      role
    );
    console.log(object);
    return res.render("main/users/admins/managePost.ejs", {
      user: req.user,
      posts: object.posts,
      total: object.total,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

let getPostsPagination = async (req, res) => {
  try {
    let page = +req.query.page;
    let limit = 5;
    if (!page) {
      page = 1;
    }
    let object = await supporterService.getPostsPagination(page, limit);
    return res.status(200).json(object);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

let getForPatientsTabs = async (req, res) => {
  try {
    let object = await patientService.getForPatientsTabs();
    return res.status(200).json({
      message: "success",
      object: object,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

let postChangeStatusPatient = async (req, res) => {
  try {
    let id = req.body.patientId;
    let status = req.body.status;
    let statusId = "";
    let content = "";
    if (status === "pending") {
      statusId = statusPendingId;
      content = "Cuộc hẹn mới đã được nhận";
    } else if (status === "failed") {
      statusId = statusFailedId;
      if (req.body.reason) {
        content = `Hủy bỏ với lý do -${req.body.reason}`;
      }
    } else if (status === "confirmed") {
      statusId = statusSuccessId;
      content = "Cuộc hẹn đã được đặt thành công";
    }

    let data = {
      id: id,
      statusId: statusId,
      updatedAt: Date.now(),
    };

    let logs = {
      supporterId: req.user.id,
      patientId: id,
      content: content,
    };

    let patient = await patientService.changeStatusPatient(data, logs);
    return res.status(200).json({
      message: "success",
      patient: patient,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

let postChangeStatusFeedback = async (req, res) => {
  try {
    let id = req.body.id;
    let data = {
        id: id
      };
  
    let feedback = await supporterService.changeStatusFeedback(data);
    return res.status(200).json({
      message: "success",
      feedback: feedback,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

let getManageCustomersPage = async (req, res) => {
  try {
    let x = await patientService.getFeedbacks();
    return res.render("main/users/admins/manageCustomer.ejs", {
      user:req.user,
      feedbacks: x.feedbacks,
      feedbackConfirms: x.feedbackConfirms,
    });
    // return res.status(200).json({
    //   feedbacks: x.feedbacks,
    //   feedbackConfirms: x.feedbackConfirms,
    // });
  } catch (e) {
    console.log(e);
  }
};

let getLogsPatient = async (req, res) => {
  try {
    let logs = await patientService.getLogsPatient(req.body.patientId);
    return res.status(200).json(logs);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

let postDoneComment = async (req, res) => {
  try {
    let comment = await supporterService.doneComment(req.body.commentId);
    return res.status(200).json(comment);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};



let storageImagePost = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "src/public/images/posts");
  },
  filename: (req, file, callback) => {
    let imageName = `${Date.now()}-${file.originalname}`;
    callback(null, imageName);
  },
});

let imagePostUploadFile = multer({
  storage: storageImagePost,
  limits: { fileSize: 1048576 * 20 },
}).single("image");

let getInfoFeedbackById = async (req, res) => {
  try {
    let feedback = await supporterService.getFeedbackById(req.body.id);
    return res.status(200).json({
      message: "ok",
      feedback: feedback,
    });
  } catch (e) {
      console.log(e);
    return res.status(500).json(e);
  
  }
};


module.exports = {
  getNewPatients: getNewPatients,
  getManagePosts: getManagePosts,
  getCreatePost: getCreatePost,
  postCreatePost: postCreatePost,
  postCreatePostWithoutFile: postCreatePostWithoutFile,
  getAllPosts: getAllPosts,
  getPostsPagination: getPostsPagination,
  getForPatientsTabs: getForPatientsTabs,
  postChangeStatusPatient: postChangeStatusPatient,
  getManageCustomersPage: getManageCustomersPage,
  getLogsPatient: getLogsPatient,
  postDoneComment: postDoneComment,
  getInfoSupporterById: getInfoSupporterById,
  postChangeStatusFeedback: postChangeStatusFeedback,
  getInfoFeedbackById: getInfoFeedbackById,
};
