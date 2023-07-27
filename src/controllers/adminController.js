import bcrypt from "bcryptjs";
import db from "./../models";
import _ from "lodash";
import homeService from "./../services/homeService";
import userService from "./../services/userService";
import clinicService from "./../services/clinicService";
import specializationService from "./../services/specializationService";
import doctorService from "./../services/doctorService";
import supporterService from "./../services/supporterService"
import multer from "multer";

// manage clinic
let getManageClinic = async (req, res) => {

   let object = await clinicService.getClinicsPagination(
     1,
     +process.env.LIMIT_GET_CLINIC
   );
  let clinics = await homeService.getClinics();
  return res.render("main/users/admins/manageClinic.ejs", {
    user: req.user,
    // clinics: clinics,
    clinics: object.clinics,
    total: object.total,
  });
};

let getCreateClinic = (req, res) => {
  return res.render("main/users/admins/createClinic.ejs", {
    user: req.user,
  });
};

let postCreateClinic = (req, res) => {
  imageClinicUploadFile(req, res, async (e) => {
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
      let item = req.body;
      let imageClinic = req.file;
      item.image = imageClinic.filename;
      let clinic = await clinicService.createNewClinic(item);
      return res.status(200).json({
        message: "success",
        clinic: clinic,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  });
};

let postCreateClinicWithoutFile = async (req, res) => {
  try {
    let clinic = await clinicService.createNewClinic(req.body);
    return res.status(200).json({
      message: "success",
      clinic: clinic,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

let putUpdateClinicWithoutFile = async (req, res) => {
  try {
    let clinic = await clinicService.updateClinic(req.body);
    return res.status(200).json({
      message: "update success",
      clinic: clinic,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

let getEditClinic = async (req, res) => {
  let clinic = await clinicService.getClinicById(req.params.id);
  return res.render("main/users/admins/editClinic.ejs", {
    user: req.user,
    clinic: clinic,
  });
};

let putUpdateClinic = (req, res) => {
  imageClinicUploadFile(req, res, async (e) => {
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
      let item = req.body;
      let imageClinic = req.file;
      item.image = imageClinic.filename;
      let clinic = await clinicService.updateClinic(item);
      return res.status(200).json({
        message: "update clinic successful",
        clinic: clinic,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  });
};

let storageImageClinic = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "src/public/images/clinics");
  },
  filename: (req, file, callback) => {
    let imageName = `${Date.now()}-${file.originalname}`;
    callback(null, imageName);
  },
});

let imageClinicUploadFile = multer({
  storage: storageImageClinic,
  limits: { fileSize: 1048576 * 20 },
}).single("image");

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


let storageImageFeedback = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "src/public/images/feedbacks");
  },
  filename: (req, file, callback) => {
    let imageName = `${Date.now()}-${file.originalname}`;
    callback(null, imageName);
  },
});

let imageFeedbackUploadFile = multer({
  storage: storageImageFeedback,
  limits: { fileSize: 1048576 * 20 },
}).single("avatar");



let deleteClinicById = async (req, res) => {
  try {
    await clinicService.deleteClinicById(req.body.id);
    return res.status(200).json({
      message: "success",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

//manage specialization
let getManageSpe = async (req, res) => {
  let specializations = await specializationService.getAllSpe();
   let object = await specializationService.getSpecializationsPagination(
     1,
    10); 
  return res.render("main/users/admins/manageSpecialization.ejs", {
    user: req.user,
    // specializations: specializations,
    specializations: object.spe,
    total: object.total,
  });
  // return res.status(200).json({
  //   message:"ok",
  //   object:object
  // })
};

let getCreateSpe = (req, res) => {
  return res.render("main/users/admins/createSpecialization.ejs", {
    user: req.user,
  });
};

let postCreateSpe = (req, res) => {
  imageSpeUploadFile(req, res, async (e) => {
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
      let item = req.body;
      let imageSpe = req.file;
      item.image = imageSpe.filename;
      console.log(item);
      let spe = await specializationService.createNewSpe(item);
      return res.status(200).json({
        messag: "success",
        spe: spe,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  });
};

let postCreateSpeWithoutFile = async (req, res) => {
  try {
    let spe = specializationService.createNewSpe(req.body);
    return res.status(200).json({
      message: "success",
      spe: spe,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

let getEditSpe = async (req, res) => {
  let spe = await specializationService.getSpeById(req.params.id);
  return res.render("main/users/admins/editSpecialization.ejs", {
    user: req.user,
    spe: spe.spe,
  });
  // return res.status(200).json({
  //   message:"OK",
  //   data:spe
  // })
};

let putUpdateSpe = async (req, res) => {
  imageSpeUploadFile(req, res, async (e) => {
    if (e) {
      console.log(e);
    }

    try {
      let item = req.body;
      let imageSpe = req.file;
      item.image = imageSpe.filename;
      let spe = await specializationService.updateSpe(item);
      return res.status(200).json({
        message: "update successful",
        spe: spe,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  });
};

let putUpdateSpeWithoutFile = async (req, res) => {
  try {
    let spe = await specializationService.updateSpe(req.body);
    return res.status(200).json({
      message: "update success",
      spe: spe,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

let storageImageSpe = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "src/public/images/specializations");
  },
  filename: (req, file, callback) => {
    let imageName = `${Date.now()}-${file.originalname}`;
    callback(null, imageName);
  },
});

let imageSpeUploadFile = multer({
  storage: storageImageSpe,
  limits: { fileSize: 1048576 * 20 },
}).single("image");

let deleteSpeById = async (req, res) => {
  try {
    await specializationService.deleteSpeById(req.body.id);
    return res.status(200).json({
      message: "delete specialization successful",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

// manage doctor
// let getManageDoctor = async (req, res) => {
//   let doctors = await userService.getInfoDoctors();
//   return res.render("main/users/admins/manageDoctor.ejs", {
//     user: req.user,
//     doctors: doctors,
//   });
// };

let getManageDoctorPagination = async (req, res) => {
  try {
    // let page=1
    let limit = +process.env.LIMIT_GET_DOCTOR;
    let doctors = await userService.getInfoDoctorsPagination(1, +limit);
    // return res.status(200).json({
    //   message:'ok',
    //   data:doctors
    // });
    return res.render("main/users/admins/manageDoctor.ejs", {
      user: req.user,
      doctors: doctors.doctors,
      total: doctors.total,
    });
} catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

let getDoctorsPagination = async (req, res) => {
  try {
    let page = +req.query.page;
    let limit = +process.env.LIMIT_GET_DOCTOR;
    if (!page) {
      page = 1;
    }
    let doctors = await userService.getInfoDoctorsPagination(page, limit);
    return res.status(200).json(doctors);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

let getCreateDoctor = async (req, res) => {
  let clinics = await homeService.getClinics();
  let specializations = await homeService.getSpecializations();
  let prices = await homeService.getPrices();
  let provinces = await homeService.getProvinces();
  return res.render("main/users/admins/createDoctor.ejs", {
    user: req.user,
    clinics: clinics,
    specializations: specializations,
    prices: prices,
    provinces: provinces,
  });
  // return res.status(200).json({
  //   message:"OK",
  //   user: req.user,
  //   clinics: clinics,
  //   specializations: specializations,
  //   prices: prices,
  //   provinces: provinces,
  // });
};





let postCreateDoctor = async (req, res) => {
  let doctor = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    clinicId: req.body.clinic,
    specializationId: req.body.specialization,
    priceId: req.body.price,
    provinceId: req.body.province,
    address: req.body.address,
    avatar: "doctor.jpg",
    description: req.body.description,
    contentMarkdown: req.body.introductionMarkdown,
    contentHTML: req.body.introductionHTML,
  };

  let doctor1 = req.body;
  doctor1.avatar = "doctor.jpg";
  doctor1.clinicId = req.body.clinic;
  doctor1.specializationId = req.body.specialization;
  doctor1.priceID = req.body.price;
  doctor1.provinceID = req.body.province;

  try {
    await userService.createDoctor(doctor1);
    return res.status(200).json({ message: "success" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
};

let deleteDoctorById = async (req, res) => {
  try {
    let doctor = await doctorService.deleteDoctorById(req.body.id);
    return res.status(200).json({
      message: "success",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

let getEditDoctor = async (req, res) => {
  let doctor = await doctorService.getDoctorForEditPage(req.params.id);
  let clinics = await homeService.getClinics();
  let specializations = await homeService.getSpecializations();
  let prices = await homeService.getPrices();
  let provinces = await homeService.getProvinces();
  return res.render("main/users/admins/editDoctor.ejs", {
    user: req.user,
    doctor: doctor,
    clinics: clinics,
    specializations: specializations,
    prices: prices,
    provinces: provinces,
  });
};

let putUpdateDoctorWithoutFile = async (req, res) => {
  try {
    // let item = {
    //   id: req.body.id,
    //   name: req.body.nameDoctor,
    //   phone: req.body.phoneDoctor,
    //   address: req.body.addressDoctor,
    //   description: req.body.introEditDoctor,
    //   clinicId: req.body.clinicDoctor,
    //   specializationId: req.body.specializationDoctor,
    // };

    let doctor1 = req.body;
    // doctor1.avatar = "doctor.jpg";
    doctor1.clinicId = req.body.clinic;
    doctor1.specializationId = req.body.specialization;
    doctor1.priceID = req.body.price;
    doctor1.provinceID = req.body.province;
    console.log(doctor1);

    await doctorService.updateDoctorInfo(doctor1);
    return res.status(200).json({
      message: "update info doctor successful",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

let putUpdateDoctor = (req, res) => {

  imageDoctorUploadFile(req, res, async (err) => {
    if (err) {
      if (err.message) {
        return res.status(500).send(err.message);
      } else {
        return res.status(500).send(err);
      }
    }

    try {
      // let item = {
      //   id: req.body.id,
      //   name: req.body.nameDoctor,
      //   phone: req.body.phoneDoctor,
      //   address: req.body.addressDoctor,
      //   description: req.body.introEditDoctor,
      //   clinicId: req.body.clinicDoctor,
      //   specializationId: req.body.specializationDoctor,
      // };
       ;
      console.log("doctor1: ", req.body);
      let doctor1 = req.body;
      
      doctor1.avatar = "doctor.jpg";
      doctor1.clinicId = req.body.clinic;
      doctor1.specializationId = req.body.specialization;
      doctor1.priceID = req.body.price;
      doctor1.provinceID = req.body.province;
      let imageDoctor = req.file;
      console.log(imageDoctor)
      doctor1.avatar = imageDoctor.filename;
      let doctor = await doctorService.updateDoctorInfo(doctor1);
      return res.status(200).json({
        message: "update doctor info successful",
        doctor: doctor,
      });
    } catch (e) {
      return res.status(500).send(e);
    }
  });
};

let storageImageDoctor = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "src/public/images/users");
  },
  filename: (req, file, callback) => {
    let imageName = `${Date.now()}-${file.originalname}`;
    callback(null, imageName);
  },
});

let imageDoctorUploadFile = multer({
  storage: storageImageDoctor,
  limits: { fileSize: 1048576 * 20 },
}).single("avatar");




//manage supporter

let getSupporterPage = async (req, res) => {

  let object =await supporterService.getSupportersPagination(
    1,
    +process.env.LIMIT_GET_SUPPORTER
  );
  let supporters = await supporterService.getAllSupporters();
  return res.render("main/users/admins/manageSupporter.ejs", {
    user: req.user,
    // supporters: supporters,
    supporters: object.supporters,
    total: object.total
  });
  // return res.status(200).json({
  //   message: "ok",
  //   // object: object,
  //     supporters: object.supporters,
  //     total: object.total
  // });
};


let getSupportersPagination = async (req, res) => {
  try {
    let page = +req.query.page;
    let limit = +process.env.LIMIT_GET_SUPPORTER;
    if (!page) {
      page = 1;
    }
    let doctors = await supporterService.getSupportersPagination(page, limit);
    return res.status(200).json(doctors);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

let getCreateSupporter = async (req, res) => {
  return res.render("main/users/admins/createSupporter.ejs", {
    user: req.user,
  });
};
let postCreateSupporter = async (req, res) => {
  let supporter = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    avatar: "supporter.png",
    description: req.body.description,
  };
  try {
    await userService.createSupporter(supporter);
    return res.status(200).json({ message: "success" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
};

let deleteSupporterById = async (req, res) => {
  try {
    let doctor = await supporterService.deleteSupportById(req.body.id);
    return res.status(200).json({
      message: "success",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

let getEditSupporter = async (req, res) => {
  let supporter = await supporterService.getSupporterForEditPage(req.params.id);
  return res.render("main/users/admins/editSupporter.ejs", {
    user: req.user,
    supporter: supporter,
  });
};

let putUpdateSupporterWithoutFile = async (req, res) => {
  try {
    let item = {
      id: req.body.id,
      name: req.body.nameSupporter,
      phone: req.body.phoneSupporter,
      address: req.body.addressSupporter,
      description: req.body.introEditSupporter,
    };
    await supporterService.updateSupporterInfo(item);
    return res.status(200).json({
      message: "update info supporter successful",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

let putUpdateSupporter = (req, res) => {
  imageSupporterUploadFile(req, res, async (err) => {
    if (err) {
      if (err.message) {
        return res.status(500).send(err.message);
      } else {
        return res.status(500).send(err);
      }
    }

    try {

      let item = {
        id: req.body.id,
        name: req.body.nameSupporter,
        phone: req.body.phoneSupporter,
        address: req.body.addressSupporter,
        description: req.body.introEditSupporter,
      };
      let imageSupporter = req.file;
      item.avatar = imageSupporter.filename;
      let supporter = await supporterService.updateSupporterInfo(item);
      return res.status(200).json({
        message: "update support info successful",
        supporter: supporter,
      })
    } catch (e) {
      return res.status(500).send(e);
    }
  });
};

let storageImageSupporter = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "src/public/images/users");
  },
  filename: (req, file, callback) => {
    let imageName = `${Date.now()}-${file.originalname}`;
    callback(null, imageName);
  },
});

let imageSupporterUploadFile = multer({
  storage: storageImageSupporter,
  limits: { fileSize: 1048576 * 20 },
}).single("avatar");

//manage schedule
let getManageCreateScheduleForDoctorsPage = async (req, res) => {
  try {
    return res.render("main/users/admins/manageScheduleForDoctors.ejs", {
      user: req.user,
    });
  } catch (e) {
    console.log(e);
  }
};

let getEditPost = async (req, res) => {
  try {
    let clinics = await homeService.getClinics();
    let doctors = await userService.getInfoDoctors();
    let specializations = await homeService.getSpecializations();
    let post = await supporterService.getDetailPostPage(req.params.id);
    return res.render("main/users/admins/editPost.ejs", {
      clinics: clinics,
      doctors: doctors,
      specializations: specializations,
      user: req.user,
      post: post,
    });
  } catch (e) {
    console.log(e);
  }
};

let putUpdatePost = (req, res) => {
  imagePostUploadFile(req, res, async (e) => {
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
        writerId: req.user.id,
        descMarkdown: req.body.mainMarkdownPost,
        descHTML: req.body.contentHTMLMain,
        contentMarkdown: req.body.contentMarkdown,
        contentHTML: req.body.contentHTML,
        updatedAt: Date.now(),
      };
      let imagePost = req.file;
      item.image = imagePost.filename;
      let supporter = supporterService.putUpdatePost(item);
      return res.status(200).json({
        message: "update clinic successful",
        supporter: supporter,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  });
};

let putUpdatePostWithoutFile = async (req, res) => {
  try {
    let data = {
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

    await supporterService.putUpdatePost(data);
    return res.status(200).json({
      message: "update post successful",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

let deletePostById = async (req, res) => {
  try {
    await supporterService.deletePostById(req.body.id);
    return res.status(200).json({
      message: "delete post successful",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

let getInfoStatistical = async (req, res) => {
  try {
    let month = req.body.month;
    let object = await userService.getInfoStatistical(month);
    return res.status(200).json(object);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};


let postCreateFeedback = (req, res) => {
  imageFeedbackUploadFile(req, res, async (e) => {
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
      let item = req.body;
    
      let imageFeedback = req.file;
      item.avatar = imageFeedback.filename;
   
      let feedback = await supporterService.createFeedback(item);
      return res.status(200).json({
        message: "success",
        feedback: feedback,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  });
};

let postFeedBackWithoutFile = async (req, res) => {
  let feedbacks = req.body;
  feedbacks.avatar = "customer.png";

  try {
    await supporterService.createFeedback(feedbacks);
    return res.status(200).json({ message: "success" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
};

let deleteFeedBackId = async (req, res) => {
  try {
    await supporterService.deleteFeedbackById(req.body.id);
    return res.status(200).json({
      message: "success",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};


let putUpdateUser = (req, res) => {
try {
   imageSupporterUploadFile(req, res, async (err) => {
     if (err) {
       console.log(err)
       if (err.message) {
         
         return res.status(500).send(err.message);
       } else {
         return res.status(500).send(err);
       }
     }
     try {
       console.log("user", req.body);
       let item = {
         id: req.body.id,
         email:req.body.emailUser,
         name: req.body.nameUser,
         phone: req.body.phoneUser,
         address: req.body.addressUser,
       };
       let imageUser = req.file;
       console.log(imageUser)
       item.avatar = imageUser.filename;
       console.log(item)
       let supporter = await supporterService.updateSupporterInfo(item);
       return res.status(200).json({
         message: "Cập nhật thành công",
         supporter: supporter,
       });
     } catch (e) {
       return res.status(500).send(e);
     }
   });
} catch (error) {
  console.log(error )
}
 
};

//  let imageUserUploadFile = multer({
//    storage: storageImageUser,
//    limits: { fileSize: 1048576 * 20 },
//  }).single("avatar");


// let storageImageUser = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "src/public/images/users");
//   },
//   filename: (req, file, callback) => {
//     let imageName = `${Date.now()}-${file.originalname}`;
//     callback(null, imageName);
//   },
// });




let putUpdateUserWithoutFile = async (req, res) => {
  let body=req.body;
  console.log(body);
  try {
    let item = {
      id: req.body.id,
      email:req.body.emailUser,
      name: req.body.nameUser,
      phone: req.body.phoneUser,
      address: req.body.addressUser,
    };
    await doctorService.updateDoctorInfo(item);
    return res.status(200).json({
      message: "update info doctor successful",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

let handleChangePassword = async(req,res)=>{
  try {
    let item = req.body;
    await doctorService.updateDoctorInfo(item);
    res.status(200).json({
      // message: "ok",
    });
    }
    
  catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }

}

let handleCheckPassword =async(req,res)=>{
  try {
    let id = req.body.id;
    let password = req.body.password;
    let user = await userService.findUserById(id);
    console.log(user)
    let match = await userService.comparePassword(password, user);
    if (user && user.isActive === 1) {
      if (match) {
         res.status(200).json({
          message:'true'
        })
      } else {
          res.status(200).json({
          message:'false'
         })
      };
   return match;
  } 
}
catch (error) {
    console.log(error)
}
}


module.exports = {
  //manage clinic
  postCreateClinic: postCreateClinic,
  postCreateClinicWithoutFile: postCreateClinicWithoutFile,
  getManageClinic: getManageClinic,
  getCreateClinic: getCreateClinic,
  storageImageClinic: storageImageClinic,
  imageClinicUploadFile: imageClinicUploadFile,
  putUpdateClinicWithoutFile: putUpdateClinicWithoutFile,
  putUpdateClinic: putUpdateClinic,
  getEditClinic: getEditClinic,
  deleteClinicById: deleteClinicById,

  //manage specialization
  getManageSpe: getManageSpe,
  getCreateSpe: getCreateSpe,
  postCreateSpe: postCreateSpe,
  postCreateSpeWithoutFile: postCreateSpeWithoutFile,
  getEditSpe: getEditSpe,
  putUpdateSpe: putUpdateSpe,
  putUpdateSpeWithoutFile: putUpdateSpeWithoutFile,
  deleteSpeById: deleteSpeById,

  //manage doctor
  // getManageDoctor: getManageDoctor,
  getManageDoctorPagination: getManageDoctorPagination,
  getDoctorsPagination: getDoctorsPagination,
  getCreateDoctor: getCreateDoctor,
  postCreateDoctor: postCreateDoctor,
  getEditDoctor: getEditDoctor,
  putUpdateDoctorWithoutFile: putUpdateDoctorWithoutFile,
  putUpdateDoctor: putUpdateDoctor,
  deleteDoctorById: deleteDoctorById,

  //manage supporter
  getSupporterPage: getSupporterPage,
  getCreateSupporter: getCreateSupporter,
  postCreateSupporter: postCreateSupporter,
  getEditSupporter: getEditSupporter,
  putUpdateSupporterWithoutFile: putUpdateSupporterWithoutFile,
  putUpdateSupporter: putUpdateSupporter,
  deleteSupporterById: deleteSupporterById,

  //manage schedule
  getManageCreateScheduleForDoctorsPage: getManageCreateScheduleForDoctorsPage,

  //manage post
  getEditPost: getEditPost,
  putUpdatePost: putUpdatePost,
  putUpdatePostWithoutFile: putUpdatePostWithoutFile,
  deletePostById: deletePostById,

  //InfoStatistical
  getInfoStatistical: getInfoStatistical,

  postFeedBackWithoutFile: postFeedBackWithoutFile,
  deleteFeedBackId: deleteFeedBackId,
  postCreateFeedback: postCreateFeedback,

  putUpdateUserWithoutFile: putUpdateUserWithoutFile,
  putUpdateUser: putUpdateUser,
  handleChangePassword: handleChangePassword,
  handleCheckPassword: handleCheckPassword,

  getSupportersPagination: getSupportersPagination,
};
