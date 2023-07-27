const PHONE_REG =
  /((0[2|3|4|5|6|7|8|9]|01[2|6|8|9])+([0-9]{8})|(84[2|3|4|5|6|7|8|9]|841[2|6|8|9])+([0-9]{8}))\b/g;
const EMAIL_REG =
  /[a-zA-Z][a-zA-Z0-9_\.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}/g;

function specializationGetScheduleDoctorByDate() {
  $(document)
    .off("change", ".doctor-schedule-spe")
    .on("change", ".doctor-schedule-spe", function (event) {
      let value = $(this).val();
      console.log(value);
      let arrSplit = value.split("-");
      console.log(arrSplit);
      let date = arrSplit[1].trim();
      console.log(date);
      let doctorId = $(this).data("doctor");

      $.ajax({
        method: "POST",
        url: `${window.location.origin}/doctor/get-schedule-doctor-by-date`,
        data: { date: date, doctorId: doctorId },
        success: function (data) {
          console.log('data',data);

          $(`#div-schedule-${doctorId}`).html("");
          // $(`#div-more-info-${doctorId}`).html("");
          $('.list-sche-extra').empty();
          $("#schedule-addr").empty();
          let html = "";
          let html1 = "";
          let moreInfo = "";
          
          if (data.message.length > 0) {
            data.message.forEach((schedule, index) => {
              if (schedule.isDisable === false) {
                html += `
                          <div id="spe-btn-modal-${schedule.id}" data-doctor-id="${schedule.doctorId}" data-date="${schedule.date}"
                                 data-time="${schedule.time}"
                                 class="btn-list-flex text">
                              
                                 <button class="b-ls-item">
                                 <a href="/get-book-page/${schedule.id}">
                                         <span>
                                            ${schedule.time}
                                        </span>
                                        </a>
                                 </button>
                                  
                                </div>
                            </div>
                                             
                        `;
              }
         
              if (
                index === data.message.length - 1 &&
                schedule.isDisable === true
              ) {
                html += `<span>
                                Không có kế hoạch khám bệnh đã lên lịch nào trong khung thời gian hiện tại.
                            </span>`;
              }
            });
          
          } else {
            html += `
        
                             <div class="no-schedule" style="font-size:14px;">
                                               "${data.doctor.name}" không có cuộc hẹn vào
                                                    <b>
                                                       ${value}
                                                    </b>. Vui lòng chọn lịch khám tiếp theo.
                                            </div>

                    `;
         
          }
             if (data.message.length > 0) {

               html += `
               <div class="list-sche-extra" id="list-sche-extra">
               <div class="s-l-i-item-sche-add">
                                            <span>Chọn <i class="fas fa-mouse-pointer"></i> và đặt (Phí đặt lịch
                                                0đ)</span>
                                        </div>
                                        <div class="sche-address">
                
                                            <h6>ĐỊA CHỈ KHÁM</h6>
                
                                            <span>
                                                ${data.doctor.Doctor_User.Clinic.name}
                                            </span> <br>
                                            <span>
                                                ${data.doctor.Doctor_User.Clinic.address}
                                            </span>
                
                                        </div>
                                        <div class="sche-price">
                                            <h6>Giá Khám:</h6>
                                            <span>
                                                ${data.doctor.Doctor_User.priceTypeData.value} đ
                                            </span>
                                        </div>
                                      </div>`; 

                                            }
          $(`#div-schedule-${doctorId}`).append(html);
          // $(".list-sche-extra").append(moreInfo);
           
         
        },
        error: function (error) {
          alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!!");
          console.log(error);
        },
      });
    });
}



function getScheduleDoctorByDate() {
  $(document)
    .off("change", ".doctor-schedule-spe1")
    .on("change", ".doctor-schedule-spe1", function (event) {
   
      let value = $(this).val();
      console.log(value);
      let arrSplit = value.split("-");
      console.log(arrSplit);
      let date = arrSplit[1].trim();
      console.log(date);
      let doctorId = $(this).data("doctor");

      $.ajax({
        method: "POST",
        url: `${window.location.origin}/doctor/get-schedule-doctor-by-date`,
        data: { date: date, doctorId: doctorId },
        success: function (data) {
          console.log("data", data);

          $(`#div-schedule-${doctorId}`).html("");
          // $(`#div-more-info-${doctorId}`).html("");
          $(".list-sche-extra").empty();
          $("#schedule-addr").empty();
          let html = "";
          let html1 = "";
          let moreInfo = "";

          if (data.message.length > 0) {
            data.message.forEach((schedule, index) => {
              if (schedule.isDisable === false) {
                html += `
                          <div id="spe-btn-modal-${schedule.id}" data-doctor-id="${schedule.doctorId}" data-date="${schedule.date}"
                                 data-time="${schedule.time}"
                                 class="btn-list-flex text">
                              
                                 <button class="b-ls-item">
                                 <a href="/get-book-page/${schedule.id}">
                                         <span>
                                            ${schedule.time}
                                        </span>
                                        </a>
                                 </button>
                                  
                                </div>
                            </div>
                                             
                        `;
              }

              if (
                index === data.message.length - 1 &&
                schedule.isDisable === true
              ) {
                html += `<span>
                                Không có kế hoạch khám bệnh đã lên lịch nào trong khung thời gian hiện tại.
                            </span>`;
              }
            });
          } else {
            html += `
        
                             <div class="no-schedule" style="font-size:14px;">
                                               "${data.doctor.name}" không có cuộc hẹn vào
                                                    <b>
                                                       ${value}
                                                    </b>. Vui lòng chọn lịch khám tiếp theo.
                                            </div>

                    `;
          }
          // if (data.message.length > 0) {
          //   html += `  
          //      <div class="list-sche-extra" id="list-sche-extra">
          //      <div class="s-l-i-item-sche-add">
          //                                   <span>Chọn <i class="fas fa-mouse-pointer"></i> và đặt (Phí đặt lịch
          //                                       0đ)</span>
          //                               </div>
          //                               <div class="sche-address">
                
          //                                   <h6>ĐỊA CHỈ KHÁM</h6>
                
          //                                   <span>
          //                                       ${data.doctor.Doctor_User.Clinic.name}
          //                                   </span> <br>
          //                                   <span>
          //                                       ${data.doctor.Doctor_User.Clinic.address}
          //                                   </span>
                
          //                               </div>
          //                               <div class="sche-price">
          //                                   <h6>Giá Khám:</h6>
          //                                   <span>
          //                                       ${data.doctor.Doctor_User.priceTypeData.value} đ
          //                                   </span>
          //                               </div>
          //                             </div>`;
          // }
          $(`#div-schedule-${doctorId}`).append(html);
          // $(".list-sche-extra").append(moreInfo);
        },
        error: function (error) {
          alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!!");
          console.log(error);
        },
      });
    });
}


function showModalAllSpecializations() {
  $(".show-all-specializations").on("click", function (e) {
    e.preventDefault();
    $("#modalAllSpecializations").modal("show");
  });
}

function showModalAllClinics() {
  $(".show-all-clinics").on("click", function (e) {
    e.preventDefault();
    $("#modalAllClinics").modal("show");
  });
}

function showModalAllDoctors() {
  $(".show-all-doctors").on("click", function (e) {
    e.preventDefault();
    $("#modalAllDoctors").modal("show");
  });
}

function showPostsForUsers() {
  let currentPage = 1;
  let total = $("#paginationForPostClient").data("total");
  if (total === 1) {
    $(" .li-next-client").addClass("disabled");
  }
  $(".page-post-next-client").on("click", function (e) {
    e.preventDefault();
    currentPage++;
    $(" .li-pre-client").removeClass("disabled");

    if (currentPage === total) {
      $(" .li-next-client").addClass("disabled");
    }
    if (currentPage > total) return;
    generatePostPagination(currentPage);
  });

  $(".page-post-pre-client").on("click", function (e) {
    e.preventDefault();
    currentPage--;
    $(" .li-next-client").removeClass("disabled");
    if (currentPage === 1) {
      $(" .li-pre-client").addClass("disabled");
    }
    if (currentPage === 0) return;
    generatePostPagination(currentPage);
  });
}

function showDoctorsForUsers() {
  let currentPage = 1;
  let total = $("#paginationForDoctorClient").data("total");
  console.log(total);
  if (total === 1) {
    $(" .li-next-client").addClass("disabled");
  }
  $(".page-doctor-next-client").on("click", function (e) {
    e.preventDefault();
    currentPage++;
    $(" .li-pre-client").removeClass("disabled");

    if (currentPage === total) {
      $(" .li-next-client").addClass("disabled");
    }
    if (currentPage > total) return;
    generateDoctorPagination(currentPage);
  });

  $(".page-doctor-pre-client").on("click", function (e) {
    e.preventDefault();
    currentPage--;
    $(" .li-next-client").removeClass("disabled");
    if (currentPage === 1) {
      $(" .li-pre-client").addClass("disabled");
    }
    if (currentPage === 0) return;
    generateDoctorPagination(currentPage);
  });
}

function showClinicsForUsers() {
  let currentPage = 1;
  let total = $("#paginationForClinicClient").data("total");
  console.log(total);
  if (total === 1) {
    $(" .li-next-client").addClass("disabled");
  }
  $(".page-clinic-next-client").on("click", function (e) {
    e.preventDefault();
    currentPage++;
    $(" .li-pre-client").removeClass("disabled");

    if (currentPage === total) {
      $(" .li-next-client").addClass("disabled");
    }
    if (currentPage > total) return;
    generateClinicPagination(currentPage);
  });

  $(".page-clinic-pre-client").on("click", function (e) {
    e.preventDefault();
    currentPage--;
    $(" .li-next-client").removeClass("disabled");
    if (currentPage === 1) {
      $(" .li-pre-client").addClass("disabled");
    }
    if (currentPage === 0) return;
    generateClinicPagination(currentPage);
  });
}

function showSpeForUsers() {
  let currentPage = 1;
  let total = $("#paginationForSpeClient").data("total");
  console.log(total);
  if (total === 1) {
    $(" .li-next-client").addClass("disabled");
  }
  $(".page-spe-next-client").on("click", function (e) {
    e.preventDefault();
    currentPage++;
    $(" .li-pre-client").removeClass("disabled");

    if (currentPage === total) {
      $(" .li-next-client").addClass("disabled");
    }
    if (currentPage > total) return;
    generateSpePagination(currentPage);
  });

  $(".page-spe-pre-client").on("click", function (e) {
    e.preventDefault();
    currentPage--;
    $(" .li-next-client").removeClass("disabled");
    if (currentPage === 1) {
      $(" .li-pre-client").addClass("disabled");
    }
    if (currentPage === 0) return;
    generateSpePagination(currentPage);
  });
}




function generateDoctorPagination(page) {
  $.ajax({
    url: `${window.location.origin}/all-doctors/doctor?page=${page}`,
    method: "GET",
    success: function (data) {
      console.log(data);
      $("#doctor-all-main-list").empty();
      let html = "";
      data.doctors.rows.forEach((doctor) => {
        html += `
                
                             <li class="post-all-main-item add-doctor">
                            <a href="/detail/doctor/${doctor.id}" class="post-all-main-link add-doctor">
                                <img src="images/users/${doctor.avatar}" alt="" width="100px"
                                    style="object-fit: contain;  ">
                                <div class="post-all-main-l-desc add-doctor">
                                    <div class="pam-l-d-title add-doctor">
                                        <h3>${doctor.name}</h3>
                                    </div>
                                    <div class="doctor-l-main">
                                        <span>Chuyên ngành: ${doctor.Doctor_User.Specialization.name}</span> <br>
                                        <span>Công tác:  ${doctor.Doctor_User.Clinic.name} </span><br>
                                        <span>Giá Khám: ${doctor.Doctor_User.priceTypeData.value}  đ </span>
                                    </div>
                                </div>
                            </a>
                        </li>
                               \
                `;
      });
      $("#doctor-all-main-list").append(html);
    },
    error: function (err) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(err);
    },
  });
}

function generateClinicPagination(page) {
  $.ajax({
    url: `${window.location.origin}/all-clinics/clinic?page=${page}`,
    method: "GET",
    success: function (data) {
      console.log(data);
      $("#clinic-all-main-list").empty();
      let html = "";
      data.clinics.rows.forEach((x) => {
        html += `
                
                             <li class="post-all-main-item add-doctor add-clinic">
                            <a href="/detail/clinic/${x.id}" class="post-all-main-link add-clinic">
                                <img src="images/clinics/${x.image}" alt="" width="240" style="object-fit: cover;">
                                <div class="post-all-main-l-desc add-clinic">
                                    <div class="pam-l-d-title add-clinic">
                                        <h3>${x.name}</h3>
                                    </div>
                                    <div class="doctor-l-main clinic-l-main ">
                                        <i class="fa-solid fa-map-location-dot"></i>
                                        <span>${x.address}</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                               \
                `;
      });
      $("#clinic-all-main-list").append(html);
    },
    error: function (err) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(err);
    },
  });
}

function generateSpePagination(page) {
  $.ajax({
    url: `${window.location.origin}/all-specializations/specialization?page=${page}`,
    method: "GET",
    success: function (data) {
      console.log(data);
      $("#spe-all-main-list").empty();
      let html = "";
      data.spe.rows.forEach((x) => {
        html += `
                           <li class="post-all-main-item add-doctor add-spe">
                            <a href="/detail/specialization/${x.id}" class="post-all-main-link add-clinic add-spe">
                                <img src="images/specializations/${x.image}" alt="" width="240" style="object-fit: cover;">
                                <div class="post-all-main-l-desc add-clinic add-spe">
                                    <div class="pam-l-d-title add-clinic add-spe">
                                        <h3>${x.name}</h3>
                                    </div>
                                    <div class="doctor-l-main clinic-l-main spe-l-main">
                                       
                                    </div>
                                </div>
                            </a>
                        </li>
                               \
                `;
      });
      $("#spe-all-main-list").append(html);
    },
    error: function (err) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(err);
    },
  });
}

function generatePostPagination(page) {
  $.ajax({
    url: `${window.location.origin}/supporter/pagination/posts?page=${page}`,
    method: "GET",
    success: function (data) {
      console.log(data);
      $("#post-all-main-list").empty();
      let html = "";
      data.posts.rows.forEach((post) => {
        html += `
                
                             <li class="post-all-main-item">
                                    <a href="/detail/post/${post.id}" class="post-all-main-link">
                                        <img src="images/posts/${post.image}" alt="" width="240">
                                        <div class="post-all-main-l-desc">
                                            <div class="pam-l-d-title">
                                                <h3>
                                                    ${post.title}
                                                </h3>
                                                <div class="extra-desc">
                                                    <span style="margin-right: 6px;">Tác giả:
                                                            ${post.writerName}</span>
                                                    <span>Ngày đăng: ${post.dateClient}</span> <br>
                                                    <span class="desc-main-l">
                                                        ${post.desc}
                                                    </span>

                                                </div>

                                            </div>
                                        </div>
                                    </a>
                                </li>
                               \
                `;
      });
      $("#post-all-main-list").append(html);
    },
    error: function (err) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(err);
    },
  });
}

function searchInSearchPost() {
  $("#searchPostInSearchPageClient").on("keydown", function (event) {
    if (event.which === 13 || event.keyCode === 13) {
      let key_words = $("#searchPostInSearchPageClient").val();
      window.location.href = `${window.location.origin}/posts/search?keyword=${key_words}`;
    }
  });
}

function searchInDetailPost() {
  $("#searchInDetailPost").on("keydown", function (event) {
    if (event.which === 13 || event.keyCode === 13) {
      let key_words = $("#searchInDetailPost").val();
      window.location.href = `${window.location.origin}/posts/search?keyword=${key_words}`;
    }
  });
}

function handleSearchHomepage() {
  $("#input-search").on("keyup", function (e) {
    if (e.keyCode === 13) {
      let keyword = $("#input-search").val();
      $.ajax({
        url: `${window.location.origin}/search-homepage`,
        method: "POST",
        data: { keyword: keyword },
        success: function (data) {
          console.log(data);
          let html = "";
          let html1 = "";
          let html2 = "";
          let html3 = "";
          let html4 = "";
          $("#show-info-search-none").empty();
          $("#show-info-search-spe").empty();
          $("#show-info-search-clinic").empty();
          $("#show-info-search-doctor").empty();
          $("#show-info-search-post").empty();
          if (data.clinics.length === 0) {
            $(".rs-search.rs-clinic").css("display", "none");
          }
          if (data.specializations.length === 0) {
            $(".rs-search.rs-spe").css("display", "none");
          }
          if (data.doctors.length === 0) {
            $(".rs-search.rs-doctor").css("display", "none");
          }
          if (data.posts.length === 0) {
            $(".rs-search.rs-post").css("display", "none");
          }

          if (
            data.clinics.length === 0 &&
            data.specializations.length === 0 &&
            data.doctors.length === 0
          ) {
            html += `
                         <li class="lst-item">
                              Không có kết quả
                            </li>
                        `;
            $(".rs-search.rs-none").css("display", "block");
            $(".rs-search.rs-spe").css("display", "none");
            $(".rs-search.rs-clinic").css("display", "none");
            $(".rs-search.rs-doctor").css("display", "none");
            $(".rs-search.rs-post").css("display", "none");
            $("#show-info-search-none").append(html);
            $("#r-s-scroll").css("display", "none");
            $("#banner-search-input-title").css("display", "none");
          } else {
            if (data.specializations.length > 0) {
              data.specializations.forEach((specialization) => {
                html1 += `
                          <li class="lst-item">
                                  <a href="detail/specialization/${specialization.id}" class="lst-link">
                                      <img src="/images/specializations/${specialization.image}" alt="" width="40px"
                                          height="40px">
                                      <span class="lst-item-name">${specialization.name}</span>
                                  </a>
                              </li>
                              `;
              });
              $(".rs-search.rs-spe").css("display", "block");
              $(".rs-search.rs-none").css("display", "none");
              $("#show-info-search-spe").append(html1);
            }
            if (data.clinics.length > 0) {
              data.clinics.forEach((clinic) => {
                html2 += `
                          <li class="lst-item">
                                <a href="detail/clinic/${clinic.id}" class="lst-link">
                                    <img src="/images/clinics/${clinic.image}" alt="" width="40px"
                                        height="40px">
                                    <span class="lst-item-name">${clinic.name}</span>
                                </a>
                            </li>
                        `;
              });
              $(".rs-search.rs-clinic").css("display", "block");
              $(".rs-search.rs-none").css("display", "none");

              $("#show-info-search-clinic").append(html2);
            }
            if (data.doctors.length > 0) {
              data.doctors.forEach((doctor) => {
                html3 += `
                        <li class="lst-item">
                                <a href="detail/doctor/${doctor.id}" class="lst-link">
                                    <img src="/images/users/${doctor.avatar}" alt="" width="40px"
                                        height="40px" >
                                    <span class="lst-item-name">${doctor.name}</span>
                                </a>
                            </li>
                        `;
              });

              $(".rs-search.rs-doctor").css("display", "block");
              $(".rs-search.rs-none").css("display", "none");
              $("#show-info-search-doctor").append(html3);
            }
            if (data.posts.length > 0) {
              data.posts.forEach((post) => {
                html4 += `
                          <li class="lst-item">
                                  <a href="detail/post/${post.id}" class="lst-link">
                                      <img src="/images/posts/${post.image}" alt="" width="40px"
                                          height="40px">
                                      <span class="lst-item-name">${post.title}</span>
                                  </a>
                              </li>
                              `;
              });
              $(".rs-search.rs-post").css("display", "block");
              $(".rs-search.rs-none").css("display", "none");
              $("#show-info-search-post").append(html4);
            }
            $("#r-s-scroll").css({
              height: "110px",
              "overflow-y": "scroll",
              display: "block",
            });
          }
          $("#banner-search-input-title").css("display", "block");
        },
        error: function (error) {
          alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
          console.log(error);
        },
      });
    }
  });
}

function validateInputPageDoctor() {
  if (!$("#name").val()) {
    $("#name").addClass("is-invalid");
    return false;
  } else {
    $("#name").removeClass("is-invalid");
  }

  if (!$("#year").val()) {
    $("#year").addClass("is-invalid");
    return false;
  } else {
    $("#year").removeClass("is-invalid");
  }

  if (!$("#email").val()) {
    $("#email").addClass("is-invalid");
    return false;
  }

  if ($("#email").val()) {
    let isValid = $("#email").val().match(EMAIL_REG);
    if (isValid) {
      $("#email").removeClass("is-invalid");
    } else {
      $("#email").addClass("is-invalid");
      return false;
    }
  }

  if (!$("#phone").val()) {
    $("#phone").addClass("is-invalid");
    return false;
  }
  if ($("#phone").val()) {
    let isValid = $("#phone").val().match(PHONE_REG);
    if (isValid) {
      $("#phone").removeClass("is-invalid");
    } else {
      $("#phone").addClass("is-invalid");
      return false;
    }
  }
  if (!$("#address").val()) {
    $("#address").addClass("is-invalid");
    return false;
  } else {
    $("#address").removeClass("is-invalid");
  }

  return true;
}

function handleBookingPageDoctor() {
  $("#btn-confirm-booking").on("click", function (event) {
    let check = validateInputPageDoctor();
    if (check) {
      // $(this).prop('disabled', true);
      let formData = new FormData($("form#form-patient-info")[0]);
      //contain file upload
      let doctorId = $("#infoDoctor").data("doctor-id");
      let time = $(".f-b-t-timebook").data("doctor-time");
      let date = $(".f-b-t-timebook").data("doctor-date");
      console.log(doctorId, time, date);
      console.log(formData);

      if ($("#oldForms").val()) {
        formData.append("doctorId", doctorId);
        formData.append("timeBooking", time);
        formData.append("dateBooking", date);
        handleBookingPageDoctorNormal(formData);
      } else {
        let data = {
          doctorId: doctorId,
          timeBooking: time,
          dateBooking: date,
        };
        for (let pair of formData.entries()) {
          data[pair[0]] = pair[1];
        }

        delete data.oldForms;
        handleBookingPageDoctorWithoutFiles(data);
      }
    }
  });
}

function handleBookingPageDoctorNormal(formData) {
  $.ajax({
    method: "POST",
    url: `${window.location.origin}/booking-doctor-normal/create`,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success: function (data) {
      if (typeof data.patient === "string") {
        alert(
          "Rất tiếc, cuộc hẹn này đã có đủ bệnh nhân đặt, vui lòng chọn thời gian khác"
        );
        window.location.reload(true);
      } else {
        window.location.href = `${window.location.origin}/booking-info/${data.patient.id}`;
      }
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}

function handleBookingPageDoctorWithoutFiles(data) {
  $.ajax({
    method: "POST",
    url: `${window.location.origin}/booking-doctor-without-files/create`,
    data: data,
    success: function (data) {
      console.log("data", data);
      if (typeof data.patient === "string") {
        alert(
          "Rất tiếc, cuộc hẹn này đã có đủ bệnh nhân đặt, vui lòng chọn thời gian khác"
        );
        window.location.reload(true);
      } else {
        window.location.href = `${window.location.origin}/booking-info/${data.patient.id}`;
      }
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}

function validateFeedback() {
  if (!$("#feedbackName").val()) {
    $("#feedbackName").addClass("is-invalid");
    return false;
  } else {
    $("#feedbackName").removeClass("is-invalid");
  }
  if (!$("#feedbackAge").val()) {
    $("#feedbackAge").addClass("is-invalid");
    return false;
  } else {
    $("#feedbackAge").removeClass("is-invalid");
  }

  if (!$("#feedbackAddress").val()) {
    $("#feedbackAddress").addClass("is-invalid");
    return false;
  } else {
    $("#feedbackAddress").removeClass("is-invalid");
  }

  if (!$("#feedbackContent").val()) {
    $("#feedbackContent").addClass("is-invalid");
    return false;
  } else {
    $("#feedbackContent").removeClass("is-invalid");
  }

  return true;
}

function createNewFeedback() {
  $("#createNewFeedback").on("click", function (e) {
    let check = validateFeedback();
    if (check) {
      let formData = new FormData($("form#formCreateNewFeeback")[0]);
      //contain file upload
      if ($("#image-feedback").val()) {
        formData.append(
          "avatar",
          document.getElementById("image-feedback").files[0]
        );
        handleCreateFeedbackNormal(formData);
      } else {
        let data = {};
        // create without file upload
        for (let pair of formData.entries()) {
          data[pair[0]] = pair[1];
        }
        handleCreateFeedbackWithoutFile(data);
      }
    }
  });
}

function handleCreateFeedbackWithoutFile(data) {
  $.ajax({
    method: "POST",
    url: `${window.location.origin}/create/feedback-without-file`,
    data: data,
    success: function (data) {
      alertify.success("Gởi phản hồi thành công");
      window.location.href = `${window.location.origin}/`;
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}

function handleCreateFeedbackNormal(formData) {
  console.log(formData);
  $.ajax({
    method: "POST",
    url: `${window.location.origin}/create/feedback`,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success: function (data) {
      alertify.success("Gởi phản hồi thành công");
      window.location.href = `${window.location.origin}/`;
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}
function handleChangeProvince() {
  $(document)
    .off("change", "#provinceId")
    .on("change", "#provinceId", function (e) {
      let proId = $("#provinceId option:selected").val();
      let speId = $("#provinceId").data("province");
      let data = {
        proId: proId,
        speId: speId,
      };
      $.ajax({
        type: "POST",
        url: "/detail/specialization/postDoctorByProvince",
        data: data,
        success: function (data) {
          console.log(data);
          let html = "";
          let html1 = "";
          $(".s-l-i-container").empty();
          $(".btn-list-sche").empty();
          if(data.doctors.length === 0){
            html += `
            <div style="height:60px">
    <span>Chưa có thông tin bác sĩ ở khu vực này</span>
    </div>
    `;
          }

          data.doctors.forEach((doctor) => {
            html += `
<div class="s-l-i-item" id="s-l-i-item">
    <div class="row" id="row-doctor-spe">

        <div class="col-lg-6 col-sm-12 spe-row-one">
            <div class="s-l-i-item-doctor" id="s-l-i-item-doctor">
                <div class="s-i-doctor-left">
                    <img src="/images/users/${doctor.User.avatar}" width="80px" height="80px" alt="">
                    <a href="/detail/doctor/${doctor.User.id}" class="d-l-more">Xem thêm</a>

                </div>
                <div class="s-i-doctor-right">
                    <div class="d-r-name"><a href="/detail/doctor/${doctor.User.id}"><span>
                                ${doctor.User.name}
                            </span></a>
                    </div>
                    <div class="d-r-desc"><span>
                            ${doctor.User.jobDescHTML}
                        </span></div>
                    <div class="d-r-address"><i class="fa-solid fa-location-dot"></i><span>
                            ${doctor.provinceTypeData.value}
                        </span></div>
                </div>
            </div>
        </div> 
`;

            html += `<div class="col-lg-6 col-sm-12 spe-row-two">
              <div class="s-l-i-item-sche">
                 <div class="sche-select">
                 <select name="" id="day-book-spe" class="doctor-schedule-spe" data-doctor="${doctor.User.id}"> 
    `;

            data.sevenDaySchedule.forEach(function (day) {
              html += `
        <option value="${day}">
            ${day}
        </option> `;
            });

            html += `          </select>
                 </div>

                 <div class="sche-icon-title">
                 <span><i class="fa-solid fa-calendar-days"></i></span>
                 <span>Lịch Khám</span><br>
                 </div>
                 <div class="btn-list-sche" id="div-schedule-${doctor.User.id}">
`;
            if (doctor.schedules.length === 0) {
              html += `<div class="no-schedule" style="font-size:14px;">
    "${doctor.User.name}" không có cuộc hẹn vào
        <b>
            ${data.sevenDaySchedule[0]}
        </b>. Vui lòng chọn lịch khám tiếp theo.
   </div>`;
            }
            doctor.schedules.forEach((x, index) => {
              if (x.isDisable === false) {
                html += `
<div id="spe-btn-modal-${x.id}" data-doctor-id="${doctor.User.id}" data-date="${x.date}"
    data-time="${x.time}" class="btn-list-flex">

    <button class="b-ls-item">
        <a href="/get-book-page/${x.id}">
            <span>
                ${x.time}
            </span>
        </a>
    </button>
</div>
`;
              }

              if (
                index === doctor.schedules.length - 1 &&
                x.isDisable === true
              ) {
                html += `<span style="font-size: 14px;">
    Không có kế hoạch khám bệnh đã lên lịch nào trong khung thời gian hiện
    tại.
</span>
`;
              }
            });

            if (doctor.schedules.length > 0) {
             
              html += `
              
              <div class="list-sche-extra" id="list-sche-extra">
    <div class="s-l-i-item-sche-add">
        <span>Chọn <i class="fas fa-mouse-pointer"></i> và đặt (Phí đặt lịch
            0đ)</span>
    </div>
    <div class="sche-address">

        <h6>ĐỊA CHỈ KHÁM</h6>

        <span>
            ${doctor.Clinic.name}
        </span> <br>
        <span>
            ${doctor.Clinic.address}
        </span>

    </div>
    <div class="sche-price">
        <h6>Giá Khám:</h6>
        <span>
            ${doctor.priceTypeData.value} đ
        </span>
    </div>

</div>`;
            }

            html += `
</div>
</div>
</div>
</div>
</div>
`;
          });

          $(".s-l-i-container").append(html);
            $(".s-l-i-container").append(html1);
        },

        error: function (error) {
          console.log(error);
        },
      });
    });
}

$(document).ready(function (e) {
$('#show-all-sp').click(function (e) { 
  e.preventDefault();
  window.location.href = `${window.location.origin}/all-specializations`;

  
});
  specializationGetScheduleDoctorByDate();
  showModalAllSpecializations();
  showModalAllClinics();
  showModalAllDoctors();
  showPostsForUsers();
  showDoctorsForUsers();
  showClinicsForUsers();
  showSpeForUsers();
  searchInSearchPost();
  searchInDetailPost();
  handleBookingPageDoctor();
  handleSearchHomepage();
  createNewFeedback();
  handleChangeProvince();
  getScheduleDoctorByDate();
});
