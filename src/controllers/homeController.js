require("dotenv").config();
import homeService from "./../services/homeService";
import specializationService from "./../services/specializationService";
import doctorService from "./../services/doctorService";
import userService from "./../services/userService";
import supporterService from "./../services/supporterService";
import clinicService from "./../services/clinicService";
import patientService from "./../services/patientService";
import moment from "moment";
// striptags to remove HTML
import striptags from "striptags";

import multer from "multer";

let LIMIT_POST = 5;
let LIMIT_SPE = 6;
let LIMIT_CLINIC = 6;
let LIMIT_DOCTOR = 10;

const statusPendingId = 3;
const statusFailedId = 2;
const statusSuccessId = 1;
const statusNewId = 4;

let getUserPage = (req, res) => {
  let currentMonth = new Date().getMonth() + 1;
  res.render("main/users/home.ejs", {
    user: req.user,
    currentMonth: currentMonth,
  });
};

let getHomePage = async (req, res) => {
  try {
    let specializations = await homeService.getSpecializations();
    let clinics = await homeService.getClinics();
    let specializationsLM = await homeService.getSpecializationsLM(LIMIT_SPE);
    let clinicsLM = await homeService.getClinicsLM(LIMIT_CLINIC);
    let doctors = await userService.getInfoDoctors();
    let doctorsLM = await userService.getInfoDoctorsLM(LIMIT_DOCTOR);
    let posts = await homeService.getPosts(LIMIT_POST);
    let feedbackConfirms = await patientService.getFeedbacks();
    return res.render("main/homepage/homepage.ejs", {
      user: req.user,
      specializations: specializations,
      clinics: clinics,
      doctors: doctors,
      specializationsLM: specializationsLM,
      clinicsLM: clinicsLM,
      doctorsLM: doctorsLM,
      posts: posts,
      feedbackConfirms:feedbackConfirms.feedbackConfirms,
      pageId: process.env.PAGE_ID,
    });
    // return res.status(200).json({
    //   message: "ok",
    //   posts: posts,
    //   specializations: specializations,
    //   feedbackConfirms:feedbackConfirms,
    // });
  } catch (e) {
    console.log(e);
    return res.render("main/homepage/pageNotFound.ejs");
  }
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let getDetailSpecializationPage = async (req, res) => {
  try {
    let object = await specializationService.getSpeById(req.params.id);
    // using date to get schedule of doctors
    let currentDate = moment().format("DD/MM/YYYY");
    let doctors = await doctorService.getDoctorsForSpecialization(
      req.params.id,
      currentDate
    );

    let sevenDaySchedule = [];
    for (let i = 0; i < 5; i++) {
      let dt = moment(new Date())
        .add(i, "days")
        .locale("VI")
        .format("dddd - DD/MM/YYYY");
      let date = capitalizeFirstLetter(dt);
      sevenDaySchedule.push(date);
    }

    let listSpecializations = await specializationService.getAllSpe();
    let provinces =  await specializationService.getAllProvince();

    return res.render("main/homepage/specialization.ejs", {
      spe: object.spe,
      post: object.post,
      doctors: doctors,
      clinic: object.clinicBySpe,
      sevenDaySchedule: sevenDaySchedule,
      listSpecializations: listSpecializations,
      clinicBySpe: object.clinicBySpe,
      provinces:provinces.province
    });
    // return res.status(200).json({
    //   message: "OK",
    //   spe: object,
    //   doctors: doctors,
    //   provinces: provinces,
    // });
  } catch (e) {
    console.log(e);
    return res.render("main/homepage/pageNotFound.ejs");
  }
};

let postDoctorByProvince = async (req, res) => {
  try {
    
    let sevenDaySchedule = [];
    for (let i = 0; i < 5; i++) {
      let dt = moment(new Date())
        .add(i, "days")
        .locale("VI")
        .format("dddd - DD/MM/YYYY");
      let date = capitalizeFirstLetter(dt);
      sevenDaySchedule.push(date);
    }
    let proId = req.body.proId;
    let speId = req.body.speId;
    console.log('proId',proId);
    let currentDate = moment().format("DD/MM/YYYY");
    let data = {
     proId: proId,
     speId: speId
    }
    let dataDoctor = await doctorService.getDoctorProvincesForSpecialization(data,currentDate);
    return res.status(200).json({
      message: "ok",
      doctors: dataDoctor,
      sevenDaySchedule: sevenDaySchedule,
    });
  
}catch(e){
console.log(e)
}};


let getDetailDoctorPage = async (req, res) => {
  try {
    let specializations = await homeService.getSpecializations();
    let currentDate = moment().format("DD/MM/YYYY");
    let sevenDaySchedule = [];
    for (let i = 0; i < 5; i++) {
      let dt = moment(new Date())
        .add(i, "days")
        .locale("vi")
        .format("dddd - DD/MM/YYYY");
      let date = capitalizeFirstLetter(dt);
      sevenDaySchedule.push(date);
    }

    let object = await doctorService.getDoctorWithSchedule(
      req.params.id,
      currentDate
    );

    let postDoctor = await doctorService.getPostForDoctor(req.params.id);
    let specializationsLM = await homeService.getSpecializationsLM(LIMIT_SPE);
    return res.render("main/homepage/doctor.ejs", {
      doctor: object.doctor,
      sevenDaySchedule: sevenDaySchedule,
      postDoctor: postDoctor,
      specialization: object.specialization,
      specializations: specializations,
      specializationsLM: specializationsLM,
      clinic: object.clinic,
    });
    // return res.status(200).json({
    //   doctor: object.doctor,
    //   sevenDaySchedule: sevenDaySchedule,
    //   postDoctor: postDoctor,
    //   specialization: object.specialization,
    //   spes: specializations,
    //   clinic: object.clinic,
    // });
  } catch (e) {
    console.log(e);
    return res.render("main/homepage/pageNotFound.ejs");
  }
};

let getBookingPage = (req, res) => {
  res.render("main/homepage/bookingPage.ejs");
};

let getDetailPostPage = async (req, res) => {
  try {
     let post = await supporterService.getDetailPostPage(req.params.id);
     let specializations = await homeService.getSpecializations();
     let clinics = await homeService.getClinics();
     let specializationsLM = await homeService.getSpecializationsLM(LIMIT_SPE);
     let clinicsLM = await homeService.getClinicsLM(LIMIT_CLINIC);
     let doctorsLM = await userService.getInfoDoctorsLM(LIMIT_DOCTOR);
   
    res.render("main/homepage/post.ejs", {
      post: post,
      specializations: specializations,
      clinics: clinics,
      specializationsLM: specializationsLM,
      clinicsLM: clinicsLM,
      doctorsLM: doctorsLM,
    });
    // return res.status(200).json({
    //   post: post,
    // });
  } catch (e) {
    console.log(e);
    return res.render("main/homepage/pageNotFound.ejs");
  }
};

let getDetailClinicPage = async (req, res) => {
  try {
    let currentDate = moment().format("DD/MM/YYYY");
    let sevenDaySchedule = [];
    for (let i = 0; i < 5; i++) {
      let dt = moment(new Date())
        .add(i, "days")
        .locale("vi")
        .format("dddd - DD/MM/YYYY");
      let date = capitalizeFirstLetter(dt);
      sevenDaySchedule.push(date);
    }
    let object = await clinicService.getDetailClinicPage(
      req.params.id,
      currentDate
    );

    res.render("main/homepage/clinic.ejs", {
      clinic: object.clinic,
      doctors: object.doctors,
      sevenDaySchedule: sevenDaySchedule,
      places: object.places,
    });
    // res.status(200).json({
    //     clinic: object.clinic,
    //     doctors: object.doctors,
    //     sevenDaySchedule: sevenDaySchedule,
    //     places: object.places,
    // });
  } catch (e) {
    console.log(e);
    return res.render("main/homepage/pageNotFound.ejs");
  }
};

let getContactPage = (req, res) => {
  return res.render("main/homepage/contact.ejs");
};

let getPostsWithPagination = async (req, res) => {
  let role = "nope";
  let object = await supporterService.getPostsPagination(
    1,
    +process.env.LIMIT_GET_POST,
    role
  );
     let specializations = await homeService.getSpecializations();
     let clinics = await homeService.getClinics();
    let specializationsLM = await homeService.getSpecializationsLM(LIMIT_SPE);
    let clinicsLM = await homeService.getClinicsLM(LIMIT_CLINIC);
    let doctorsLM = await userService.getInfoDoctorsLM(LIMIT_DOCTOR);

  return res.render("main/homepage/allPostsPagination.ejs", {
    posts: object.posts,
    total: object.total,
    specializations: specializations,
    clinics: clinics,
    specializationsLM: specializationsLM,
    clinicsLM: clinicsLM,
    doctorsLM: doctorsLM,
  });
  // return res.status(200).json({
  //   message: "ok",
  //   posts: object.posts,
  //   total: object.total,
  //   specializations: specializations,
  //   clinics: clinics,
  //   specializationsLM: specializationsLM,
  //   clinicsLM: clinicsLM,
  //   doctorsLM: doctorsLM,

  // });
};

let getDoctorsWithPagination = async (req, res) => {
  let object = await doctorService.getDoctorsPagination(
    1,
    +process.env.LIMIT_GET_DOCTOR
  );
  let specializations = await homeService.getSpecializations();
  let clinics = await homeService.getClinics();
  let specializationsLM = await homeService.getSpecializationsLM(LIMIT_SPE);
  let clinicsLM = await homeService.getClinicsLM(LIMIT_CLINIC);
  let doctorsLM = await userService.getInfoDoctorsLM(LIMIT_DOCTOR);

  return res.render("main/homepage/doctor-all.ejs", {
    doctors: object.doctors,
    total: object.total,
    specializations: specializations,
    clinics: clinics,
    specializationsLM: specializationsLM,
    clinicsLM: clinicsLM,
    doctorsLM: doctorsLM,
  });
  //return res.status(200).json({
    // message: "ok",
    // doctors: object.doctors,
    // total: object.total,
    // clinic: object.clinic,
    // spe:object.spe,
    // price:object.price,
    // specializations: specializations,
    // clinics: clinics,
    // specializationsLM: specializationsLM,
    // clinicsLM: clinicsLM,
    // doctorsLM: doctorsLM,

 // });
};



let getDoctorsPagination = async (req, res) => {
  try {
    let page = +req.query.page;
    let limit = 5;
    if (!page) {
      page = 1;
    }
    let object = await doctorService.getDoctorsPagination(page, limit);
    return res.status(200).json(object);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};


let getClinicsWithPagination = async (req, res) => {

  let object = await clinicService.getClinicsPagination(
    1,
    +process.env.LIMIT_GET_CLINIC
  );
  let specializations = await homeService.getSpecializations();
  let clinics = await homeService.getClinics();
  let specializationsLM = await homeService.getSpecializationsLM(LIMIT_SPE);
  let clinicsLM = await homeService.getClinicsLM(LIMIT_CLINIC);
  let doctorsLM = await userService.getInfoDoctorsLM(LIMIT_DOCTOR);

  return res.render("main/homepage/clinic-all.ejs", {
    clns: object.clinics,
    total: object.total,
    specializations: specializations,
    clinics: clinics,
    specializationsLM: specializationsLM,
    clinicsLM: clinicsLM,
    doctorsLM: doctorsLM,
  });
  // return res.status(200).json({
  //   message: "ok",
  //   clinics: object.clinics,
  //   total: object.total,
  //   specializations: specializations,
  //   clinics: clinics,
  //   specializationsLM: specializationsLM,
  //   clinicsLM: clinicsLM,
  //   doctorsLM: doctorsLM,

  // });
};

let getClinicsPagination = async (req, res) => {
  try {
    let page = +req.query.page;
    let limit = +process.env.LIMIT_GET_CLINIC;
    if (!page) {
      page = 1;
    }
    let object = await clinicService.getClinicsPagination(page, limit);
    return res.status(200).json(object);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};





let getSpecializationsWithPagination = async (req, res) => {

  let object = await specializationService.getSpecializationsPagination(
    1,
    +process.env.LIMIT_GET_SPECIALIZATION);
  let specializations = await homeService.getSpecializations();
  let clinics = await homeService.getClinics();
  let specializationsLM = await homeService.getSpecializationsLM(LIMIT_SPE);
  let clinicsLM = await homeService.getClinicsLM(LIMIT_CLINIC);
  let doctorsLM = await userService.getInfoDoctorsLM(LIMIT_DOCTOR);

  return res.render("main/homepage/spe-all.ejs", {
    spe: object.spe,
    total: object.total,
    specializations: specializations,
    clinics: clinics,
    specializationsLM: specializationsLM,
    clinicsLM: clinicsLM,
    doctorsLM: doctorsLM,
  });
  // return res.status(200).json({
  //   message: "ok",
  //   spe: object.spe,
  //   total: object.total,
  //   specializations: specializations,
  //   clinics: clinics,
  //   specializationsLM: specializationsLM,
  //   clinicsLM: clinicsLM,
  //   doctorsLM: doctorsLM,

  // });
};

let getSpecializationsPagination = async (req, res) => {
  let limit = "";
  let role =""
  // if (req.user) {
  //   if (req.user.roleId === 1) role = "admin";
  // }
//   if (req.user) {
//   if (req.user.roleId === 1) {
//     role = "admin";
//   }
// }
// if(role==="admin") {
//   limit = 10
// }else{
//   limit =5
// }
//   console.log("limit", limit);
  try {
    let page = +req.query.page;
    let limit = +process.env.LIMIT_GET_SPECIALIZATION;
    if (!page) {
      page = 1;
    }
    let object = await specializationService.getSpecializationsPagination(
      page,
      limit
    );
    return res.status(200).json(object);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
}



let getInfoBookingPage = async (req, res) => {
  try {
    let patientId = req.params.id;
    let patient = await patientService.getInfoBooking(patientId);
    return res.render("main/homepage/booksuccess.ejs", {
      patient: patient,
    });
    // return res.status(200).json({
    //   patient:patient
    // })
  } catch (e) {
    console.log(e);
    return res.render("main/homepage/pageNotFound.ejs");
  }
};

let postBookingDoctorPageWithoutFiles = async (req, res) => {
  try {
    let item = req.body;
    item.statusId = statusNewId;
    item.historyInfo = req.body.historyInfo;
    item.moreInfo = req.body.moreInfo;
    item.createdAt = Date.now();

    let patient = await patientService.createNewPatient(item);
    return res.status(200).json({
      status: 1,
      message: "success",
      patient: patient,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

let postBookingDoctorPageNormal = (req, res) => {
  imageImageOldForms(req, res, async (err) => {
    if (err) {
      console.log(err);
      if (err.message) {
        console.log(err.message);
        return res.status(500).send(err.message);
      } else {
        console.log(err);
        return res.status(500).send(err);
      }
    }

    try {
      let item = req.body;
      let imageOldForm = req.files;
      let image = {};
      imageOldForm.forEach((x, index) => {
        image[index] = x.filename;
      });

      item.statusId = statusNewId;
      item.historyInfo = req.body.historyInfo;
      item.moreInfo = req.body.moreInfo;
      item.oldForms = JSON.stringify(image);
      item.createdAt = Date.now();
    

      let patient = await patientService.createNewPatient(item);
      return res.status(200).json({
        status: 1,
        message: "success",
        patient: patient,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  });
};

let storageImageOldForms = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "src/public/images/patients");
  },
  filename: (req, file, callback) => {
    let imageName = `${Date.now()}-${file.originalname}`;
    callback(null, imageName);
  },
});

let imageImageOldForms = multer({
  storage: storageImageOldForms,
  limits: { fileSize: 1048576 * 20 },
}).array("oldForms"); 

let getDetailPatientBooking = async (req, res) => {
  try {
    let patient = await patientService.getDetailPatient(req.body.patientId);
    return res.status(200).json(patient);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

let getFeedbackPage = async (req, res) => {
  try {
    let doctor = await doctorService.getDoctorForFeedbackPage(req.params.id);
    return res.render("main/homepage/feedback.ejs", {
      doctor: doctor,
    });
  } catch (e) {
    console.log(e);
    return res.render("main/homepage/pageNotFound.ejs");
  }
 };

// let postCreateFeedback = async (req, res) => {
//   try {
//     let feedback = await doctorService.createFeedback(req.body.data);
//     return res.status(200).json({
//       message: "send feedback success",
//       feedback: feedback,
//     });
//   } catch (e) {
//     console.log(e);
//     return res.status(500).json(e);
//   }
// };

let getPageForPatients = (req, res) => {
  return res.render("main/homepage/forPatients.ejs");
};

let getPageForDoctors = (req, res) => {
  return res.render("main/homepage/forDoctors.ejs");
};

let postSearchHomePage = async (req, res) => {
  try {
    let result = await homeService.postSearchHomePage(req.body.keyword);
    return res.status(200).json(result);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

let getPageAllClinics = async (req, res) => {
  try {
    let clinics = await homeService.getDataPageAllClinics();

    return res.render("main/homepage/allClinics.ejs", {
      clinics: clinics,
    });
  } catch (e) {
    console.log(e);
  }
};

let getPageAllDoctors = async (req, res) => {
  try {
    let doctors = await homeService.getDataPageAllDoctors();
    return res.render("main/homepage/allDoctors.ejs", {
      doctors: doctors,
    });
  } catch (e) {
    console.log(e);
  }
};

let getPageAllSpecializations = async (req, res) => {
  try {
    let specializations = await homeService.getDataPageAllSpecializations();
    return res.render("main/homepage/allSpecializations.ejs", {
      specializations: specializations,
    });
  } catch (e) {
    console.log(e);
  }
};

let getBookPage = async (req, res) => {
  let data = await doctorService.getDoctorBySchedule(req.params.id);
   let specializations = await homeService.getSpecializations();
   let clinics = await homeService.getClinics();
    let doctorsLM = await userService.getInfoDoctorsLM(LIMIT_DOCTOR);

  try {
    return res.render("main/homepage/bookpage.ejs", {
      data: data,
      specializations: specializations,
      clinics: clinics,
      doctorsLM: doctorsLM,
    });
    //  return res.status(200).json({
    //    message: "ok",
    //    data: data,
    //  });
  } catch (error) {
    console.log(error);
  }
};

let getFeedBack= async (req, res) => {
  let specializations = await homeService.getSpecializations();
  let clinics = await homeService.getClinics();
  let doctorsLM = await userService.getInfoDoctorsLM(LIMIT_DOCTOR);

  try {
    return res.render("main/homepage/feedback.ejs", {
      specializations: specializations,
      clinics: clinics,
      doctorsLM: doctorsLM,
    });
    //  return res.status(200).json({
    //    message: "ok",
    //    data: data,
    //  });
  } catch (error) {
    console.log(error);
  }
};




module.exports = {
  getUserPage: getUserPage,
  getHomePage: getHomePage,
  getDetailSpecializationPage: getDetailSpecializationPage,
  getDetailDoctorPage: getDetailDoctorPage,
  getBookingPage: getBookingPage,
  getDetailPostPage: getDetailPostPage,
  getDetailClinicPage: getDetailClinicPage,
  getContactPage: getContactPage,
  getPostsWithPagination: getPostsWithPagination,
  getDoctorsWithPagination: getDoctorsWithPagination,
  getClinicsWithPagination: getClinicsWithPagination,
  getSpecializationsWithPagination: getSpecializationsWithPagination,
  // getPostSearch: getPostSearch,
  getInfoBookingPage: getInfoBookingPage,
  postBookingDoctorPageWithoutFiles: postBookingDoctorPageWithoutFiles,
  postBookingDoctorPageNormal: postBookingDoctorPageNormal,
  getDetailPatientBooking: getDetailPatientBooking,
  getFeedbackPage: getFeedbackPage,
  getPageForPatients: getPageForPatients,
  getPageForDoctors: getPageForDoctors,
  postSearchHomePage: postSearchHomePage,
  getPageAllClinics: getPageAllClinics,
  getPageAllDoctors: getPageAllDoctors,
  getPageAllSpecializations: getPageAllSpecializations,
  getBookPage: getBookPage,
  getDoctorsPagination: getDoctorsPagination,
  getClinicsPagination: getClinicsPagination,

  getSpecializationsPagination: getSpecializationsPagination,
  getFeedBack: getFeedBack,
  postDoctorByProvince: postDoctorByProvince,
};
