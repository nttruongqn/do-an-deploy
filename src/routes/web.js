import express from "express";
import auth from "../controllers/authController";
import admin from "../controllers/adminController";
import home from "../controllers/homeController";
import clinic from "../controllers/clinicController";
import doctor from "./../controllers/doctorController";
import supporter from "./../controllers/supporterController";
import spe from "../controllers/specializationController";

import passport from "passport";
import passportLocal from "passport-local";
import userService from "../services/userService";

let router = express.Router();

//load nhung thu chung ta can
var LocalStrategy = passportLocal.Strategy;

//xac dinh chien luoc tuy chinh
passport.use(
  new LocalStrategy(
    {
      usernameField: "email", //xac dinh email yeu cau
      passwordField: "password", //xac dinh mk yeu cau
      passReqToCallback: true, //cho phep chuyen toan bo yeu cau
    },
    async function (req, email, password, done) {
      //xu ly luu tru nguoi dung
      try {
        await userService.findUserByEmail(email).then(async (user) => {
          if (!user) {
            return done(null, false, req.flash("error", "Email không tồn tại"));
          }
          if (user && user.isActive === 1) {
            let match = await userService.comparePassword(password, user);
            if (match) {
              return done(null, user, null);
            } else {
              return done(
                null,
                false,
                req.flash("error", "Mật khẩu không chính xác")
              );
            }
          }
          if (user && user.isActive === 0) {
            return done(
              null,
              false,
              req.flash("error", "Tài khoản chưa được kích hoạt")
            );
          }
        });
      } catch (err) {
        console.log(err);
        return done(null, false, { message: err });
      }
    }
  )
);

//hàm được gọi khi xác thực thành công để lưu thông tin
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//hàm được gọi bởi passport.session .Giúp ta lấy dữ liệu user dựa vào thông tin lưu trên session và gắn vào req.user
passport.deserializeUser((id, done) => {
  userService
    .findUserById(id)
    .then((user) => {
      return done(null, user);
    })
    .catch((error) => {
      return done(error, null);
    });
});

let initWebRoutes = (app) => {
  router.get("/login", auth.getLogin);
  router.post("/login", function (req, res, next) {
    passport.authenticate("local", function (err, user, info) {
      if (err) {
        return next(err);
      }
      // chuyen huong neu login that bai
      if (!user) {
        return res.redirect("/login");
      }

      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }

        req.session.save(() => {
          // chuyen huong neu login thanh cong
          return res.redirect("/users");
        });
      });
    })(req, res, next);
  });

  router.get("/users", auth.checkLoggedIn, home.getUserPage);

  //Manage Clinic
  router.get("/users/manage/clinic", auth.checkLoggedIn, admin.getManageClinic);
  router.get("/users/pagination/clinics", home.getClinicsPagination);
  router.get(
    "/users/manage/clinic/create",
    auth.checkLoggedIn,
    admin.getCreateClinic
  );
  router.post(
    "/admin/clinic/create",
    auth.checkLoggedIn,
    admin.postCreateClinic
  );

  router.post(
    "/admin/clinic/create-without-file",
    auth.checkLoggedIn,
    admin.postCreateClinicWithoutFile
  );

  router.put(
    "/admin/clinic/update-without-file",
    auth.checkLoggedIn,
    admin.putUpdateClinicWithoutFile
  );
  router.put("/admin/clinic/update", auth.checkLoggedIn, admin.putUpdateClinic);
  router.get("/users/clinic/edit/:id", auth.checkLoggedIn, admin.getEditClinic);
  router.delete(
    "/admin/delete/clinic",
    auth.checkLoggedIn,
    admin.deleteClinicById
  );

  router.post("/api/get-info-clinic-by-id", clinic.getInfoClinicById);

  //Manage specialization
  router.get(
    "/users/manage/specialization",
    auth.checkLoggedIn,
    admin.getManageSpe
  );

  router.get(
    "/users/pagination/specializations",
    home.getSpecializationsPagination
  );

  
  router.get(
    "/users/manage/specialization/create",
    auth.checkLoggedIn,
    admin.getCreateSpe
  );
  router.post(
    "/admin/specialization/create",
    auth.checkLoggedIn,
    admin.postCreateSpe
  );

  router.post(
    "/admin/specialization/create-without-file",
    auth.checkLoggedIn,
    admin.postCreateSpeWithoutFile
  );

  router.put(
    "/admin/specialization/update-without-file",
    auth.checkLoggedIn,
    admin.putUpdateSpeWithoutFile
  );
  router.put(
    "/admin/specialization/update",
    auth.checkLoggedIn,
    admin.putUpdateSpe
  );
  router.get(
    "/users/specialization/edit/:id",
    auth.checkLoggedIn,
    admin.getEditSpe
  );

  router.delete(
    "/admin/delete/specialization",
    auth.checkLoggedIn,
    admin.deleteSpeById
  );

  router.post("/api/get-info-specialization-by-id", spe.getInfoSpeById);

 

  router.get(
    "/users/manage/doctor",
    auth.checkLoggedIn,
    admin.getManageDoctorPagination
  );

  router.get("/users/pagination/doctors", admin.getDoctorsPagination);

  router.get(
    "/users/manage/doctor/create",
    auth.checkLoggedIn,
    admin.getCreateDoctor
  );
  router.post(
    "/admin/doctor/create",
    auth.checkLoggedIn,
    admin.postCreateDoctor
  );
  router.get("/users/doctor/edit/:id", auth.checkLoggedIn, admin.getEditDoctor);
  router.put(
    "/admin/doctor/update-without-file",
    auth.checkLoggedIn,
    admin.putUpdateDoctorWithoutFile
  );
  router.put("/admin/doctor/update", auth.checkLoggedIn, admin.putUpdateDoctor);
  router.post("/api/get-info-doctor-by-id", doctor.getInfoDoctorById);
  router.delete(
    "/admin/delete/doctor",
    auth.checkLoggedIn,
    admin.deleteDoctorById
  );

  //manage supporter
  router.get(
    "/users/manage/supporter",
    // auth.checkLoggedIn,
    admin.getSupporterPage
  );
    router.get(
      "/users/pagination/supporters",
      admin.getSupportersPagination
    );

  router.get(
    "/users/manage/supporter/create",
    auth.checkLoggedIn,
    admin.getCreateSupporter
  );
  router.post(
    "/admin/supporter/create",
    auth.checkLoggedIn,
    admin.postCreateSupporter
  );
  router.get(
    "/users/supporter/edit/:id",
    auth.checkLoggedIn,
    admin.getEditSupporter
  );
  router.put(
    "/admin/supporter/update-without-file",
    auth.checkLoggedIn,
    admin.putUpdateSupporterWithoutFile
  );
  router.put(
    "/admin/supporter/update",
    auth.checkLoggedIn,
    admin.putUpdateSupporter
  );
  router.post("/api/get-info-supporter-by-id", supporter.getInfoSupporterById);
  router.delete(
    "/admin/delete/supporter",
    auth.checkLoggedIn,
    admin.deleteSupporterById
  );

  //manage schedule
  router.get(
    "/users/manage/schedule-for-doctors",
    auth.checkLoggedIn,
    admin.getManageCreateScheduleForDoctorsPage
  );
  router.post(
    "/doctor/auto-create-all-doctors-schedule",
    auth.checkLoggedIn,
    doctor.postAutoCreateAllDoctorsSchedule
  );
  router.post(
    "/doctor/manage/schedule/create",
    auth.checkLoggedIn,
    doctor.postCreateSchedule
  );

  router.delete(
    "/doctor/manage/schedule/delete",
    auth.checkLoggedIn,
    doctor.deleteSchedule
  );

  router.post(
    "/doctor/get-schedule-doctor-by-date",
    doctor.getScheduleDoctorByDate
  );

  //doctor
  router.get(
    "/doctor/manage/appointment",
    auth.checkLoggedIn,
    doctor.getManageAppointment
  );
  router.get("/doctor/manage/schedule", doctor.getSchedule);
  router.get(
    "/doctor/manage/schedule/create",
    auth.checkLoggedIn,
    doctor.getCreateSchedule
  );
  router.post(
    "/doctor/manage/schedule/create",
    auth.checkLoggedIn,
    doctor.postCreateSchedule
  );
  router.post(
    "/doctor/get-schedule-doctor-by-date",
    doctor.getScheduleDoctorByDate
  );

  router.get("/doctor/manage/chart", auth.checkLoggedIn, doctor.getManageChart);
  router.post(
    "/doctor/manage/create-chart",
    auth.checkLoggedIn,
    doctor.postCreateChart
  );
  router.post(
    "/doctor/send-forms-to-patient",
    auth.checkLoggedIn,
    doctor.postSendFormsToPatient
  );
  router.post(
    "/doctor/auto-create-all-doctors-schedule",
    auth.checkLoggedIn,
    doctor.postAutoCreateAllDoctorsSchedule
  );

  //supporter
  router.get(
    "/supporter/manage/customers",
    auth.checkLoggedIn,
    supporter.getManageCustomersPage
  );
  router.get(
    "/supporter/get-new-patients",
    auth.checkLoggedIn,
    supporter.getNewPatients
  );
  router.get(
    "/supporter/manage/posts",
    auth.checkLoggedIn,
    supporter.getManagePosts
  );
  router.get("/supporter/pagination/posts", supporter.getPostsPagination);
  router.get("/supporter/post/edit/:id", auth.checkLoggedIn, admin.getEditPost);
  router.put("/supporter/post/update", auth.checkLoggedIn, admin.putUpdatePost);
    router.put(
      "/supporter/post/update-without-file",
      auth.checkLoggedIn,
      admin.putUpdatePostWithoutFile
    );


  router.get(
    "/supporter/manage/post/create",
    auth.checkLoggedIn,
    supporter.getCreatePost
  );
  
  router.post(
    "/supporter/manage/post/create",
    auth.checkLoggedIn,
    supporter.postCreatePost
  );
  router.post(
      "/supporter/manage/post/create-without-file",
 
      auth.checkLoggedIn,
      supporter.postCreatePostWithoutFile
    );
  router.get(
    "/supporter/get-list-posts",
    auth.checkLoggedIn,
    supporter.getAllPosts
  );
  router.delete("/admin/delete/post", auth.checkLoggedIn, admin.deletePostById);

  
  router.post(
    "/supporter/get-patients-for-tabs",
    auth.checkLoggedIn,
    supporter.getForPatientsTabs
  );
  router.post(
    "/supporter/change-status-patient",
    auth.checkLoggedIn,
    supporter.postChangeStatusPatient
  );
  router.post(
    "/supporter/get-logs-patient",
    auth.checkLoggedIn,
    supporter.getLogsPatient
  );

  router.get("/", home.getHomePage);
  router.get("/detail/specialization/:id", home.getDetailSpecializationPage);
  router.post("/detail/specialization/postDoctorByProvince", home.postDoctorByProvince);
  router.get("/detail/doctor/:id", home.getDetailDoctorPage);
  router.get("/detail/post/:id", home.getDetailPostPage);
  router.get("/detail/clinic/:id", home.getDetailClinicPage);


  router.get("/for-patients", home.getPageForPatients);
  router.get("/for-doctors", home.getPageForDoctors);

  router.post("/search-homepage", home.postSearchHomePage);


  router.post(
    "/booking-doctor-without-files/create",
    home.postBookingDoctorPageWithoutFiles
  );
  router.post(
    "/booking-doctor-normal/create",
    home.postBookingDoctorPageNormal
  );
router.post("/api/get-detail-patient-by-id", home.getDetailPatientBooking);


  router.get("/detail/post/:id", home.getDetailPostPage);
  router.get("/detail/clinic/:id", home.getDetailClinicPage);
  router.get("/booking-info/:id", home.getInfoBookingPage);

  router.get("/all-posts", home.getPostsWithPagination);

  router.get("/all-doctors", home.getDoctorsWithPagination);
  router.get("/all-doctors/doctor", home.getDoctorsPagination);

  router.get("/all-clinics", home.getClinicsWithPagination);
  router.get("/all-clinics/clinic", home.getClinicsPagination);



  router.get("/all-specializations", home.getSpecializationsWithPagination);
  router.get("/all-specializations/specialization", home.getSpecializationsPagination);

  router.get('/get-book-page/:id',home.getBookPage);

  router.get('/feedback',home.getFeedBack);
  router.post("/create/feedback", admin.postCreateFeedback);
  router.post("/create/feedback-without-file", admin.postFeedBackWithoutFile);
  router.put("/confirm-feedback", supporter.postChangeStatusFeedback);
  router.delete("/delete/feedback-id", admin.deleteFeedBackId);
  router.post("/api/get-info-feedback-by-id", supporter.getInfoFeedbackById);

   router.put(
     "/admin/user/update-without-file",
     auth.checkLoggedIn,
     admin.putUpdateUserWithoutFile
   );
   router.put(
     "/admin/user/update",
     auth.checkLoggedIn,
     admin.putUpdateUser
   );
  router.put("/admin/user/changePassword", auth.checkLoggedIn, admin.handleChangePassword);
  router.post(
            "/admin/user/checkPassword",
            auth.checkLoggedIn,
            admin.handleCheckPassword
          );



  router.get("/logout", auth.checkLoggedIn, auth.getLogout);
  router.post(
        "/admin/statistical",
        auth.checkLoggedIn,
        admin.getInfoStatistical
      );

 return app.use("/", router);
};

module.exports = initWebRoutes;
