const PHONE_REG1 =
  /((0[2|3|4|5|6|7|8|9]|01[2|6|8|9])+([0-9]{8})|(84[2|3|4|5|6|7|8|9]|841[2|6|8|9])+([0-9]{8}))\b/g;
const EMAIL_REG1 =
  /[a-zA-Z][a-zA-Z0-9_\.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}/g;



var loadFileClinic = function (event) {
  var output = $("#image-preview");
  if ($("#image-clinic").val()) {
    output.removeClass("d-none");
    output.addClass("d-block");
    output.attr("src", URL.createObjectURL(event.target.files[0]));
  }
};
var loadFileSpe = function (event) {
  var output = $("#image-preview");
  if ($("#image-spe").val()) {
    output.removeClass("d-none");
    output.addClass("d-block");
    output.attr("src", URL.createObjectURL(event.target.files[0]));
  }
};
var loadFileDoctor = function (event) {
  var output = $("#image-preview");
  if ($("#image-doctor").val()) {
    output.removeClass("d-none");
    output.addClass("d-block");
    output.attr("src", URL.createObjectURL(event.target.files[0]));
  }
};

var loadFileSupporter = function (event) {
  var output = $("#image-preview");
  if ($("#image-supporter").val()) {
    output.removeClass("d-none");
    output.addClass("d-block");
    output.attr("src", URL.createObjectURL(event.target.files[0]));
  }
};

var loadFilePost = function (event) {
  var output = $("#image-preview");
  if ($("#image-post").val()) {
    output.removeClass("d-none");
    output.addClass("d-block");
    output.attr("src", URL.createObjectURL(event.target.files[0]));
  }
};
var loadFileFeedback = function (event) {
  var output = $("#image-preview");
  if ($("#image-feedback").val()) {
    output.removeClass("d-none");
    output.addClass("d-block");
    output.attr("src", URL.createObjectURL(event.target.files[0]));
  }
};

var  loadImageUserSetting = function (event) {
  var output = $("#img-user-setting");
  if ($("#update-avatar").val()) {
    output.removeClass("d-none");
    output.addClass("d-block");
    output.attr("src", URL.createObjectURL(event.target.files[0]));
  }
};


var loadFileImageHistory = function (event) {
  var output = $("#image-preview");
  if ($("#oldForms").val()) {
    output.removeClass("d-none");
    output.addClass("d-block");
    output.attr("src", URL.createObjectURL(event.target.files[0]));
  }
};

function loadImageUserSetting() {
  var output = $("#img-user-setting");
  if ($("#update-avatar").val()) {
    output.attr("src", URL.createObjectURL(event.target.files[0]));
  }
}

function checkRequiredDoctor(markdownIntroDoctor,markdownJDD) {
  if (!$("#name").val()) {
    alert("Nhập chức vị và họ tên");
    $("#name").addClass("is-invalid");
    return false;
  } else {
    $("#name").removeClass("is-invalid");
  }
  if (!$("#phone").val()) {
    alert("Nhập số điện thoại");
    $("#phone").addClass("is-invalid");
    return false;
  } else {
    $("#phone").removeClass("is-invalid");
  }

   if ($("#email").val()) {
     let isValid = $("#email").val().match(EMAIL_REG1);
     if (isValid) {
       $("#email").removeClass("is-invalid");
     } else {
        alert("Sai định dạng email");
       $("#email").addClass("is-invalid");
       return false;
     }
   }

  if (!$("#email").val()) {
    alert("Nhập email");
    $("#email").addClass("is-invalid");
    return false;
  } else {
    $("#email").removeClass("is-invalid");
  }

  if (!$("#password").val()) {
    alert("Nhập mật khẩu");
    $("#password").addClass("is-invalid");
    return false;
  } else {
    $("#password").removeClass("is-invalid");
  }
  if (!$("#clinic").val()) {
    alert("Chọn cơ sở y tế");
    $("#clinic").addClass("is-invalid");
    return false;
  } else {
    $("#clinic").removeClass("is-invalid");
  }
  if (!$("#specialization").val()) {
    alert("Chọn chuyên khoa");
    $("#specialization").addClass("is-invalid");
    return false;
  } else {
    $("#specialization").removeClass("is-invalid");
  }
  if (!$("#price").val()) {
    alert("Chọn giá tiền");
    $("#price").addClass("is-invalid");
    return false;
  } else {
    $("#price").removeClass("is-invalid");
  }
  if (!$("#province").val()) {
    alert("Chọn tỉnh thành");
    $("#province").addClass("is-invalid");
    return false;
  } else {
    $("#province").removeClass("is-invalid");
  }

  if (!$("#address").val()) {
    alert("Nhập địa chỉ");
    $("#address").addClass("is-invalid");
    return false;
  } else {
    $("#address").removeClass("is-invalid");
  }

  if (!(markdownJDD.value())) {
    alert("Nhập giới thiệu chức vụ về bác sĩ");
    return false;
  } 

  if(!(markdownIntroDoctor.value())){
    alert('Nhập nội dung mô tả thông tin về bác sĩ');
    return false;
  }
  return true;
}




function checkRequiredSupporter(markdownIntroSupporter) {
  if (!$("#name").val()) {
    alert("Nhập họ tên hỗ trợ viên");
    $("#name").addClass("is-invalid");
    return false;
  } else {
    $("#name").removeClass("is-invalid");
  }
  if (!$("#phone").val()) {
    alert("Nhập số điện thoại");
    $("#phone").addClass("is-invalid");
    return false;
  } else {
    $("#phone").removeClass("is-invalid");
  }
   if ($("#email").val()) {
     let isValid = $("#email").val().match(EMAIL_REG1);
     if (isValid) {
       $("#email").removeClass("is-invalid");
     } else {
         alert("Sai định dạng email");
       $("#email").addClass("is-invalid");
       return false;
     }
   }

  if (!$("#email").val()) {
    alert("Nhập email");
    $("#email").addClass("is-invalid");
    return false;
  } else {
    $("#email").removeClass("is-invalid");
  }

  if (!$("#password").val()) {
    alert("Nhập mật khẩu");
    $("#password").addClass("is-invalid");
    return false;
  } else {
    $("#password").removeClass("is-invalid");
  }
  
  if (!$("#address").val()) {
    alert("Nhập địa chỉ");
    $("#address").addClass("is-invalid");
    return false;
  } else {
    $("#address").removeClass("is-invalid");
  }

  if (!$("#description").val()) {
    alert("Nhập giới thiệu sơ qua về hỗ trợ viên");
    $("#description").addClass("is-invalid");
    return false;
  } else {
    $("#description").removeClass("is-invalid");
  }
   return true;
}


function checkRequiredClinic(markdownIntroClinic) {
  if (!$("#name").val()) {
    alert("Nhập tên phòng khám");
    $("#name").addClass("is-invalid");
    return false;
  } else {
    $("#name").removeClass("is-invalid");
  }
  if (!$("#phone").val()) {
    alert("Nhập số điện thoại");
    $("#phone").addClass("is-invalid");
    return false;
  } else {
    $("#phone").removeClass("is-invalid");
  }

  if (!$("#address").val()) {
    alert("Nhập địa chỉ");
    $("#address").addClass("is-invalid");
    return false;
  } else {
    $("#address").removeClass("is-invalid");
  }
  if (!markdownIntroClinic.value()) {
    alert("Nhập nội dung mô tả cơ sở y tế");
    return false;
  }
  return true;
}


function checkRequiredSpe(markdownIntroSpe) {
  if (!$("#name").val()) {
    alert("Nhập tên chuyên khoa");
    $("#name").addClass("is-invalid");
    return false;
  } else {
    $("#name").removeClass("is-invalid");
  }

  if (!markdownIntroSpe.value()) {
    alert("Nhập nội dung mô tả chuyên khoa");
    return false;
  }
  return true;
}





function createNewDoctor(markdownIntroDoctor,markdownJDD, converter) {
  $("#createNewDoctor").on("click", function (e) {
     e.preventDefault();
    let check = checkRequiredDoctor(markdownIntroDoctor,markdownJDD);
      if(check){
       e.preventDefault();
      let formData = new FormData($("form#formCreateNewDoctor")[0]);
      console.log(markdownIntroDoctor);
      let contentMarkdown = markdownIntroDoctor.value();
      let contentHTML = converter.makeHtml(contentMarkdown);
      let contentMDJDD = markdownJDD.value();
      let JobDDHTML = converter.makeHtml(contentMDJDD);

      let data = {
        introductionMarkdown: contentMarkdown,
        introductionHTML: contentHTML,
        jobDescMarkdown: contentMDJDD,
        jobDescHTML: JobDDHTML
      };
      for (let pair of formData.entries()) {
        data[pair[0]] = pair[1];
      }
      console.log("data", data);
      $.ajax({
        method: "POST",
        url: `${window.location.origin}/admin/doctor/create`,
        data: data,
        success: function (data) {
          alertify.success("Tạo bác sĩ thành công");
          window.location.href = `${window.location.origin}/users/manage/doctor`;
        },
        error: function (error) {
          alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
          console.log(error);
        },
      });
      
    }
  });
}



function createNewClinic(markdownIntroClinic, converter) {
  $("#createNewClinic").on("click", function (e) {
    e.preventDefault();
    let check = checkRequiredClinic(markdownIntroClinic);
      if(check){
    e.preventDefault();
    let formData = new FormData($("form#formCreateNewClinic")[0]);
    let contentMarkdown = markdownIntroClinic.value();
    let contentHTML = converter.makeHtml(contentMarkdown);

    //contain file upload
    if ($("#image-clinic").val()) {
      formData.append("introductionMarkdown", contentMarkdown);
      formData.append("introductionHTML", contentHTML);
      formData.append(
        "image",
        document.getElementById("image-clinic").files[0]
      );
      console.log(formData)
      handleCreateClinicNormal(formData);
    } else {
      // create without file upload
      let data = {
        introductionMarkdown: contentMarkdown,
        introductionHTML: contentHTML,
      };
      for (let pair of formData.entries()) {
        data[pair[0]] = pair[1];
      }
      handleCreateClinicWithoutFile(data);
    }
}});
}

function handleCreateClinicWithoutFile(data) {
  $.ajax({
    method: "POST",
    url: `${window.location.origin}/admin/clinic/create-without-file`,
    data: data,
    success: function (data) {
      alertify.success("Phòng khám mới được tạo thành công");
      window.location.href = `${window.location.origin}/users/manage/clinic`;
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}

function handleCreateClinicNormal(formData) {
  $.ajax({
    method: "POST",
    url: `${window.location.origin}/admin/clinic/create`,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success: function (data) {
      alertify.success("Phòng khám mới được tạo thành công");
      window.location.href = `${window.location.origin}/users/manage/clinic`;
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}

function updateClinic(markdownIntroClinic, converter) {
  $("#btnUpdateClinic").on("click", function (e) {
    let clinicId = $("#btnUpdateClinic").data("clinic-id");
    let formData = new FormData($("form#formUpdateClinic")[0]);
    let contentMarkdown = markdownIntroClinic.value();
    let contentHTML = converter.makeHtml(contentMarkdown);

    //contain file upload
    if ($("#image-clinic").val()) {
      formData.append("introductionMarkdown", contentMarkdown);
      formData.append("introductionHTML", contentHTML);
      formData.append(
        "image",
        document.getElementById("image-clinic").files[0]
      );
      formData.append("id", clinicId);
      handleUpdateClinicNormal(formData);
    } else {
      // create without file upload
      let data = {
        id: clinicId,
        introductionMarkdown: contentMarkdown,
        introductionHTML: contentHTML,
      };
      for (let pair of formData.entries()) {
        data[pair[0]] = pair[1];
      }
      handleUpdateClinicWithoutFile(data);
    }
  });
}

function handleUpdateClinicNormal(formData) {
  $.ajax({
    method: "PUT",
    url: `${window.location.origin}/admin/clinic/update`,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success: function (data) {
      alertify.success("Cập nhật thành công");
      window.location.href = `${window.location.origin}/users/manage/clinic`;
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}

function handleUpdateClinicWithoutFile(data) {
  $.ajax({
    method: "PUT",
    url: `${window.location.origin}/admin/clinic/update-without-file`,
    data: data,
    success: function (data) {
      alertify.success("Cập nhật thành công ");
      window.location.href = `${window.location.origin}/users/manage/clinic`;
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}


function showClinicPagination() {
  let currentPage = 1;
  let total = $("#paginationForClinic").data("total");
  console.log(total);
  if (total === 1) {
    $(" .li-next.d").addClass("disabled");
  }
  $(".page-clinic-next").on("click", function (e) {
    e.preventDefault();
    currentPage++;
    $(" .li-pre.d").removeClass("disabled");

    if (currentPage === total) {
      $(" .li-next.d").addClass("disabled");
    }
    if (currentPage > total) return;
    generateTableClinicPagination(currentPage);
  });

  $(".page-clinic-pre").on("click", function (e) {
    e.preventDefault();
    currentPage--;
    $(" .li-next.d").removeClass("disabled");
    if (currentPage === 1) {
      $(" .li-pre.d").addClass("disabled");
    }
    if (currentPage === 0) return;
    generateTableClinicPagination(currentPage);
  });
}

function generateTableClinicPagination(page) {
  $.ajax({
    url: `${window.location.origin}/users/pagination/clinics?page=${page}`,
    method: "GET",
    success: function (data) {
      $("#tableManageClinic tbody").empty();
      let html = "";
      data.clinics.rows.forEach((clinic) => {
        html += `
                 <tr>
                        <td> ${clinic.id}</td>
                        <td> ${clinic.name}</td>
                        <td>${clinic.address}</td>                      
                          <td class="">
                            <a class="info-specific-clinic" data-clinic-id="${clinic.id}" href="#"
                               title="Info"><i class="fas fa-info-circle"></i></a>
                            <a class="edit-specific-clinic" data-clinic-id="${clinic.id}"
                               href="/users/clinic/edit/${clinic.id}"
                               title="Edit"><i class="fas fa-pen-square mx-3"></i></a>
                            <a class="delete-specific-clinic" data-clinic-id="${clinic.id}" href="#" title="Delete"><i
                                        class="fas fa-trash"></i></a>
                        </td>
                   </tr>
                `;
      });
      $("#tableManageClinic tbody").append(html);
    },
    error: function (err) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(err);
    },
  });
}



function showSpePagination() {
  let currentPage = 1;
  let total = $("#paginationForSpe").data("total");
  console.log(total);
  if (total === 1) {
    $(" .li-next.d").addClass("disabled");
  }
  $(".page-spe-next").on("click", function (e) {
    e.preventDefault();
    currentPage++;
    $(" .li-pre.d").removeClass("disabled");

    if (currentPage === total) {
      $(" .li-next.d").addClass("disabled");
    }
    if (currentPage > total) return;
    generateTableSpePagination(currentPage);
  });

  $(".page-spe-pre").on("click", function (e) {
    e.preventDefault();
    currentPage--;
    $(" .li-next.d").removeClass("disabled");
    if (currentPage === 1) {
      $(" .li-pre.d").addClass("disabled");
    }
    if (currentPage === 0) return;
    generateTableSpePagination(currentPage);
  });
}

function generateTableSpePagination(page) {
  $.ajax({
    url: `${window.location.origin}/users/pagination/specializations?page=${page}`,
    method: "GET",
    success: function (data) {
      console.log(data)
      $("#listSpecializations tbody").empty();
      let html = "";
      data.spe.rows.forEach((spe) => {
        html += `
                 <tr>
                        <td> ${spe.id}</td>
                        <td> ${spe.name}</td>                      
                          <td class="">
                                    <a class="info-specialization" data-specialization-id="${spe.id }" href="#"
                                        title="Xem thông tin"><i class="fas fa-info-circle"></i></a>
                                    <a class="" data-specialization-id="${ spe.id }"
                                        href="/users/specialization/edit/${ spe.id }" title="edit"><i
                                            class="fas fa-pen-square mx-3"></i></a>
                                    <a class="delete-specialization" data-specialization-id="${spe.id }" href="#"
                                        title="Delete"><i class="fas fa-trash"></i></a>
                                </td>
                   </tr>
                `;
      });
      $("#listSpecializations tbody").append(html);
    },
    error: function (err) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(err);
    },
  });
}


function showModalInfoClinic() {
  $("#tableManageClinic").on("click", ".info-specific-clinic", function (e) {
    e.preventDefault();
    let id = $(this).data("clinic-id");

    $.ajax({
      method: "POST",
      url: `${window.location.origin}/api/get-info-clinic-by-id`,
      data: { id: id },
      success: function (data) {
        $("#imageClinic").empty();
        $("#name").val(data.clinic.name);
        if (data.clinic.phone) {
          $("#phone").val(data.clinic.phone);
        } else {
          $("#phone").val("Chưa được cập nhật ");
        }
        if (data.clinic.address) {
          $("#address").val(data.clinic.address);
        } else {
          $("#address").val("Chưa được cập nhật ");
        }

        if (data.clinic.image) {
          $("#imageClinic").prepend(
            `<img class="img-info-clinic" src="/images/clinics/${data.clinic.image}" style="width:100%" />`
          );
        } else {
          $("#imageClinic").text("Chưa được cập nhật ");
        }

        $("#modalInfoClinic").modal("show");
      },
      error: function (error) {
        alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
        console.log(error);
      },
    });
  });
}
function deleteClinicById() {
  $("#tableManageClinic").on("click", ".delete-specific-clinic", function (e) {
    if (!confirm("Xóa phòng khám này?")) {
      return;
    }
    let id = $(this).data("clinic-id");
    let node = this;
    $.ajax({
      method: "DELETE",
      url: `${window.location.origin}/admin/delete/clinic`,
      data: { id: id },
      success: function (data) {
        node.closest("tr").remove();
        alertify.success("Xóa thành công");
      },
      error: function (err) {
        alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
        console.log(err);
      },
    });
  });
}



//specialization

function createNewSpe(markdownIntroSpe, converter) {
  $("#createNewSpe").on("click", function (e) {
      e.preventDefault();
    let check = checkRequiredSpe(markdownIntroSpe);
      if(check){
    let formData = new FormData($("form#formCreateNewSpe")[0]);
    let contentMarkdown = markdownIntroSpe.value();
    let contentHTML = converter.makeHtml(contentMarkdown);

    //contain file upload
    if ($("#image-spe").val()) {
      formData.append("introductionMarkdown", contentMarkdown);
      formData.append("introductionHTML", contentHTML);
      formData.append("image", document.getElementById("image-spe").files[0]);
      handleCreateSpeNormal(formData);
    } else {
      // create without file upload
      let data = {
        introductionMarkdown: contentMarkdown,
        introductionHTML: contentHTML,
      };
      for (let pair of formData.entries()) {
        data[pair[0]] = pair[1];
      }
      handleCreateSpeWithoutFile(data);
    }
}});
}

function handleCreateSpeWithoutFile(data) {
  $.ajax({
    method: "POST",
    url: `${window.location.origin}/admin/specialization/create-without-file`,
    data: data,
    success: function (data) {
      alertify.success("Phòng khám mới được tạo thành công");
      window.location.href = `${window.location.origin}/users/manage/specialization`;
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}

function handleCreateSpeNormal(formData) {
  $.ajax({
    method: "POST",
    url: `${window.location.origin}/admin/specialization/create`,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success: function (data) {
      alertify.success("Phòng khám mới được tạo thành công");
      window.location.href = `${window.location.origin}/users/manage/specialization`;
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}

function updateSpe(markdownIntroSpe, converter) {
  $("#btnUpdateSpe").on("click", function (e) {
    let speId = $("#btnUpdateSpe").data("spe-id");
    let formData = new FormData($("form#formUpdateSpe")[0]);
    let contentMarkdown = markdownIntroSpe.value();
    let contentHTML = converter.makeHtml(contentMarkdown);

    //contain file upload
    if ($("#image-spe").val()) {
      formData.append("introductionMarkdown", contentMarkdown);
      formData.append("introductionHTML", contentHTML);
      formData.append("image", document.getElementById("image-spe").files[0]);
      formData.append("id", speId);
      handleUpdateSpeNormal(formData);
    } else {
      // create without file upload
      let data = {
        id: speId,
        introductionMarkdown: contentMarkdown,
        introductionHTML: contentHTML,
      };
      for (let pair of formData.entries()) {
        data[pair[0]] = pair[1];
      }
      handleUpdateSpeWithoutFile(data);
    }
  });
}

function handleUpdateSpeNormal(formData) {
  $.ajax({
    method: "PUT",
    url: `${window.location.origin}/admin/specialization/update`,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success: function (data) {
      alertify.success("Cập nhật thành công");
      window.location.href = `${window.location.origin}/users/manage/specialization`;
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}

function handleUpdateSpeWithoutFile(data) {
  $.ajax({
    method: "PUT",
    url: `${window.location.origin}/admin/specialization/update-without-file`,
    data: data,
    success: function (data) {
      alertify.success("Cập nhật thành công ");
      window.location.href = `${window.location.origin}/users/manage/specialization`;
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}

function showModalInfoSpe() {
   $("#listSpecializations")
     .on("click", ".info-specialization"
     , function (e) {
       e.preventDefault();
       let id = $(this).data("specialization-id");

       $.ajax({
         method: "POST",
         url: `${window.location.origin}/api/get-info-specialization-by-id`,
         data: { id: id },
         success: function (data) {

           $("#imageSpe").empty();
           $("#name").val(data.spe.spe.name);

           if (data.spe.spe.image) {
             $("#imageSpe").prepend(
               `<img class="img-info-clinic" src="/images/specializations/${data.spe.spe.image}" style = "width:100%" />`
             );
           } else {
             $("#imageSpe").text("Chưa được cập nhật ");
           }

           $("#modalInfoSpe").modal("show");
         },
         error: function (error) {
           alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
           console.log(error);
         },
       });
     });
}

function deleteSpeById() {
   $("#listSpecializations").on("click",
  ".delete-specialization", function (e) {
    if (!confirm("Xóa chuyên khoa này?")) {
      return;
    }
    let id = $(this).data("specialization-id");
    let node = this;
    $.ajax({
      method: "DELETE",
      url: `${window.location.origin}/admin/delete/specialization`,
      data: { id: id },
      success: function (data) {
        node.closest("tr").remove();
        alertify.success("Xóa thành công");
      },
      error: function (err) {
        alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
        console.log(err);
      },
    });
  });
}

//Doctor

function showDoctorPagination() {
  let currentPage = 1;
  let total = $("#paginationForDoctor").data("total");
  console.log(total);
  if (total === 1) {
    $(" .li-next.d").addClass("disabled");
  }
  $(".page-doctor-next").on("click", function (e) {
    e.preventDefault();
    currentPage++;
    $(" .li-pre.d").removeClass("disabled");

    if (currentPage === total) {
      $(" .li-next.d").addClass("disabled");
    }
    if (currentPage > total) return;
    generateTableDoctorPagination(currentPage);
  });

  $(".page-doctor-pre").on("click", function (e) {
    e.preventDefault();
    currentPage--;
    $(" .li-next.d").removeClass("disabled");
    if (currentPage === 1) {
      $(" .li-pre.d").addClass("disabled");
    }
    if (currentPage === 0) return;
    generateTableDoctorPagination(currentPage);
  });
}

function generateTableDoctorPagination(page) {
  $.ajax({
    url: `${window.location.origin}/users/pagination/doctors?page=${page}`,
    method: "GET",
    success: function (data) {
      $("#dataTableDoctor tbody").empty();
      let html = "";
      data.doctors.rows.forEach((doctor) => {
        let setAcitve = "";
        doctor.isActive ? (setAcitve = "Active") : (setAcitve = "InActive");
        html += `
                 <tr>
                        <td> ${doctor.id}</td>
                        <td> ${doctor.name}</td>
                        <td>${doctor.specializationName}</td>
                        <td>${doctor.clinicName}</td>
                        <td>${setAcitve}</td>
                        
                        <td class="">
                            <a class="show-doctor-info" data-doctor-id="${doctor.id}" href="#" title="Xem thông tin"><i class="fas fa-info-circle"></i></a>
                            <a class="edit-doctor-info" href="/users/doctor/edit/${doctor.id}" title="Sửa"><i class="fas fa-pen-square mx-3"></i></a>
                            <a class="delete-doctor-info" data-doctor-id="${doctor.id}" href="#" title="Xóa"><i class="fas fa-trash"></i></a>
                        </td>
                   </tr>
                `;
      });
      $("#dataTableDoctor tbody").append(html);
    },
    error: function (err) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(err);
    },
  });
}

function showModalInfoDoctor() {
  $("#dataTableDoctor").on("click", ".show-doctor-info", function (e) {
    e.preventDefault();
    let id = $(this).data("doctor-id");

    $.ajax({
      method: "POST",
      url: `${window.location.origin}/api/get-info-doctor-by-id`,
      data: { id: id },
      success: function (data) {
        $("#imageDoctor").empty();

        $("#nameDoctor").val(data.doctor.name);
        if (data.doctor.phone) {
          $("#phoneDoctor").val(data.doctor.phone);
        } else {
          $("#phoneDoctor").val("Chưa được cập nhật ");
        }
        if (data.doctor.address) {
          $("#addressDoctor").val(data.doctor.address);
        } else {
          $("#addressDoctor").val("Chưa được cập nhật ");
        }
        $("#specializationDoctor").val(data.doctor.specializationName);
        $("#clinicDoctor").val(data.doctor.clinicName);
        if (data.doctor.avatar) {
          $("#imageDoctor").prepend(
            `<img class="img-info-clinic" src="/images/users/${data.doctor.avatar}" />`
          );
        } else {
          $("#imageDoctor").text("Chưa được cập nhật ");
        }

        $("#modalInfoDoctor").modal("show");
      },
      error: function (error) {
        alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
        console.log(error);
      },
    });
  });
}

function updateDoctor(markdownIntroDoctor,markdownJDD, converter) {
  $("#btnUpdateDoctor").on("click", function (e) {
    let doctorId = $("#btnUpdateDoctor").data("doctor-id");

    let formData = new FormData($("form#formUpdateDoctor")[0]);
    let contentMarkdown = markdownIntroDoctor.value();
    let contentHTML = converter.makeHtml(contentMarkdown);
     let contentMDJDD = markdownJDD.value();
     let JobDDHTML = converter.makeHtml(contentMDJDD);
    //contain file upload
    if ($("#image-doctor").val()) {
      formData.append(
        "avatar",
        document.getElementById("image-doctor").files[0]
      );
      formData.append("id", doctorId);
      formData.append("introductionMarkdown", contentMarkdown);
      formData.append("introductionHTML", contentHTML);
      formData.append("jobDescMarkdown", contentMDJDD);
      formData.append("jobDescHTML", JobDDHTML);


      handleUpdateDoctorNormal(formData);
    } else {
      // create without file upload
      let data = {
        id: doctorId,
        introductionMarkdown: contentMarkdown,
        introductionHTML: contentHTML,
        jobDescMarkdown:contentMDJDD,
        jobDescHTML:JobDDHTML
      };
      for (let pair of formData.entries()) {
        data[pair[0]] = pair[1];
      }
      handleUpdateDoctorWithoutFile(data);
    }
  });
}

function handleUpdateDoctorNormal(formData) {
  $.ajax({
    method: "PUT",
    url: `${window.location.origin}/admin/doctor/update`,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success: function (data) {
      alertify.success("Cập nhật thành công");
      window.location.href = `${window.location.origin}/users/manage/doctor`;
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}

function handleUpdateDoctorWithoutFile(data) {
  $.ajax({
    method: "PUT",
    url: `${window.location.origin}/admin/doctor/update-without-file`,
    data: data,
    success: function (data) {
      alertify.success("Cập nhật thành công");
      window.location.href = `${window.location.origin}/users/manage/doctor`;
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}

function deleteDoctorById() {
  $("#dataTableDoctor").on("click", ".delete-doctor-info", function (e) {
    if (!confirm("Xóa bác sĩ này?")) {
      return;
    }

    let id = $(this).data("doctor-id");
    let node = this;
    $.ajax({
      method: "DELETE",
      url: `${window.location.origin}/admin/delete/doctor`,
      data: { id: id },
      success: function (data) {
        node.closest("tr").remove();
        alertify.success("Xóa thành công");
      },
      error: function (err) {
        alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
        console.log(err);
      },
    });
  });
}

//Supporter

function showSupporterPagination() {
  let currentPage = 1;
  let total = $("#paginationForSupporter").data("total");
  console.log(total);
  if (total === 1) {
    $(" .li-next.d").addClass("disabled");
  }
  $(".page-supporter-next").on("click", function (e) {
    e.preventDefault();
    currentPage++;
    $(" .li-pre.d").removeClass("disabled");

    if (currentPage === total) {
      $(" .li-next.d").addClass("disabled");
    }
    if (currentPage > total) return;
    generateTableSupporterPagination(currentPage);
  });

  $(".page-supporter-pre").on("click", function (e) {
    e.preventDefault();
    currentPage--;
    $(" .li-next.d").removeClass("disabled");
    if (currentPage === 1) {
      $(" .li-pre.d").addClass("disabled");
    }
    if (currentPage === 0) return;
    generateTableSupporterPagination(currentPage);
  });
}

function generateTableSupporterPagination(page) {
  $.ajax({
    url: `${window.location.origin}/users/pagination/supporters?page=${page}`,
    method: "GET",
    success: function (data) {
      $("#dataTableSupporter tbody").empty();
      let html = "";
      data.supporters.rows.forEach((supporter) => {
        let setAcitve = "";
        supporter.isActive ? (setAcitve = "Active") : (setAcitve = "InActive");
        html += `
                 <tr>
                        <td> ${supporter.id}</td>
                        <td> ${supporter.name}</td>
                        <td>${setAcitve}</td>
                        
                       <td class="">
                                    <a class="show-supporter-info" data-supporter-id=${ supporter.id }" href="#"
                                        title="Xem thông tin"><i class="fas fa-info-circle"></i></a>
                                    <a class="edit-supporter-info" href="/users/supporter/edit/${supporter.id}"
                                        title="Edit"><i class="fas fa-pen-square mx-3"></i></a>
                                    <a class="delete-supporter-info" data-supporter-id="${supporter.id}" href="#"
                                        title="Delete"><i class="fas fa-trash"></i></a>
                                </td>
                   </tr>
                `;
      });
      $("#dataTableSupporter tbody").append(html);
    },
    error: function (err) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(err);
    },
  });
}


function createNewSupporter(markdownIntroSupporter) {
  $("#createNewSupporter").on("click", function (e) {
    e.preventDefault();
    let check = checkRequiredSupporter(markdownIntroSupporter);
    if (check) {
      e.preventDefault();
      console.log("da nhan");
      let formData = new FormData($("form#formCreateNewSupporter")[0]);
      let data = {};
      for (let pair of formData.entries()) {
        data[pair[0]] = pair[1];
      }
      $.ajax({
        method: "POST",
        url: `${window.location.origin}/admin/supporter/create`,
        data: data,
        success: function (data) {
          alertify.success("Tạo một nhân viên hỗ trợ mới thành công");
          window.location.href = `${window.location.origin}/users/manage/supporter`;
        },
        error: function (error) {
          alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
          console.log(error);
        },
      });
    }
  });
}

function deleteSupporterById() {
   $("#dataTableSupporter").on("click", ".delete-supporter-info", function (e) {
     if (!confirm("Xóa hỗ trợ viên này?")) {
       return;
     }

     let id = $(this).data("supporter-id");
     let node = this;
     $.ajax({
       method: "DELETE",
       url: `${window.location.origin}/admin/delete/supporter`,
       data: { id: id },
       success: function (data) {
         node.closest("tr").remove();
         alertify.success("Xóa thành công");
       },
       error: function (err) {
         alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
         console.log(err);
       },
     });
   });
}

function showModalInfoSupporter() {
  $("#dataTableSupporter").on("click",".show-supporter-info", function (e) {
    e.preventDefault();
    console.log("da nhan");
    let id = $(this).data("supporter-id");

    $.ajax({
      method: "POST",
      url: `${window.location.origin}/api/get-info-supporter-by-id`,
      data: { id: id },
      success: function (data) {
        console.log(data);
        $("#imageSupporter").empty();

        $("#nameSupporter").val(data.supporter.name);
        if (data.supporter.phone) {
          $("#phoneSupporter").val(data.supporter.phone);
        } else {
          $("#phoneSupporter").val("Chưa được cập nhật ");
        }
        if (data.supporter.address) {
          $("#addressSupporter").val(data.supporter.address);
        } else {
          $("#addressSupporter").val("Chưa được cập nhật ");
        }
        if (data.supporter.avatar) {
          $("#imageSupporter").prepend(
            `<img class="img-info-clinic" src="/images/users/${data.supporter.avatar}" style="width:100%" />`
          );
        } else {
          $("#imageSupporter").text("Chưa được cập nhật ");
        }

        $("#modalInfoSupporter").modal("show");
      },
      error: function (error) {
        alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
        console.log(error);
      },
    });
  });
}
function updateSupporter() {
  $("#btnUpdateSupporter").on("click", function (e) {
    let supporterId = $("#btnUpdateSupporter").data("supporter-id");

    let formData = new FormData($("form#formUpdateSupporter")[0]);

    //contain file upload
    if ($("#image-supporter").val()) {
      formData.append(
        "avatar",
        document.getElementById("image-supporter").files[0]
      );
      formData.append("id", supporterId);
      handleUpdateSupporterNormal(formData);
    } else {
      // create without file upload
      let data = {
        id: supporterId,
      };
      for (let pair of formData.entries()) {
        data[pair[0]] = pair[1];
      }
      handleUpdateSupporterWithoutFile(data);
    }
  });
}

function handleUpdateSupporterNormal(formData) {
  $.ajax({
    method: "PUT",
    url: `${window.location.origin}/admin/supporter/update`,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success: function (data) {
      alertify.success("Cập nhật thành công");
      window.location.href = `${window.location.origin}/users/manage/supporter`;
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}

function handleUpdateSupporterWithoutFile(data) {
  $.ajax({
    method: "PUT",
    url: `${window.location.origin}/admin/supporter/update-without-file`,
    data: data,
    success: function (data) {
      alertify.success("Cập nhật thành công");
      window.location.href = `${window.location.origin}/users/manage/supporter`;
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}

//post manage

function createNewPost(markdown, mMarkdownPost, converter) {
  $("#createNewPost").on("click", function (event) {
    let formData = new FormData($("form#formCreateNewPost")[0]);
    let mainMarkdownPost = mMarkdownPost.value();
    let contentHTMLMain = converter.makeHtml(mainMarkdownPost);
    let contentMarkdown = markdown.value();
    let contentHTML = converter.makeHtml(contentMarkdown);
    console.log(mainMarkdownPost);
    console.log(contentHTMLMain);
    console.log(contentMarkdown);
    console.log(contentHTML);
    if ($("#image-post").val()) {
      formData.append("mainMarkdownPost", mainMarkdownPost);
      formData.append("contentMarkdown", contentMarkdown);
      formData.append("contentHTML", contentHTML);
      formData.append("contentHTMLMain", contentHTMLMain);
      formData.append("title", $("#title-post").val());
      formData.append("image", document.getElementById("image-post").files[0]);
      console.log(formData);
      handleCreatePostNormal(formData);
    } else {
      let data = {
        contentMarkdown: contentMarkdown,
        mainMarkdownPost: mainMarkdownPost,
        contentHTMLMain: contentHTMLMain,
        contentHTML: contentHTML,
      };

      for (let pair of formData.entries()) {
        data[pair[0]] = pair[1];
      }
      handleCreatePostWithoutFile(data);
    }
  });
}

function handleCreatePostWithoutFile(data) {
  $.ajax({
    method: "POST",
    url: `${window.location.origin}/supporter/manage/post/create-without-file`,
    data: data,
    success: function (data) {
      alertify.success("Tạo thành công bài đăng!!");
      window.location.href = `${window.location.origin}/supporter/manage/posts`;
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}

function handleCreatePostNormal(formData) {
  $.ajax({
    method: "POST",
    url: `${window.location.origin}/supporter/manage/post/create`,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success: function (data) {
      alertify.success("Tạo thành công bài đăng!");
      window.location.href = `${window.location.origin}/supporter/manage/posts`;
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}
  
function showPostsForSupporter() {
  let currentPage = 1;
  let total = $("#paginationForPost").data("total");
  if (total === 1) {
    $(" .li-next").addClass("disabled");
  }
  $(".page-post-next").on("click", function (e) {
    e.preventDefault();
    currentPage++;
    $(" .li-pre").removeClass("disabled");

    if (currentPage === total) {
      $(" .li-next").addClass("disabled");
    }
    if (currentPage > total) return;
    generateTablePostPagination(currentPage);
  });

  $(".page-post-pre").on("click", function (e) {
    e.preventDefault();
    currentPage--;
    $(" .li-next").removeClass("disabled");
    if (currentPage === 1) {
      $(" .li-pre").addClass("disabled");
    }
    if (currentPage === 0) return;
    generateTablePostPagination(currentPage);
  });
}

function generateTablePostPagination(page) {
  $.ajax({
    url: `${window.location.origin}/supporter/pagination/posts?page=${page}`,
    method: "GET",
    success: function (data) {
      $("#listPostsTable tbody").empty();
      let html = "";
      data.posts.rows.forEach((post) => {
        html += `
                 <tr>
                        <td> ${post.id}</td>
                        <td>${post.title}</td>
                        <td>${post.writerName}</td>
                        <td>${post.dateClient}</td>
                        <td class="">
                            <a class=" " href="/supporter/post/edit/${post.id}" title="Edit info"><i class="fas fa-pen-square mx-3"></i></a>
                            <a class="delete-post" href="#" data-post-id="${post.id}" title="Delete"><i class="fas fa-trash"></i></a>
                        </td>
                   </tr>
                `;
      });
      $("#listPostsTable tbody").append(html);
    },
    error: function (err) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(err);
    },
  });
}

function deletePostById() {
  $("#listPostsTable").on("click", ".delete-post", function (e) {
    if (!confirm("Delete this post?")) {
      return;
    }
    let id = $(this).data("post-id");
    let node = this;
    $.ajax({
      method: "DELETE",
      url: `${window.location.origin}/admin/delete/post`,
      data: { id: id },
      success: function (data) {
        node.closest("tr").remove();
        alertify.success("Xóa thành công");
      },
      error: function (err) {
        alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
        console.log(err);
      },
    });
  });
}

function updatePost(markdown, mMarkdownPost, converter) {
  $("#btnUpdatePost").on("click", function (e) {
    let postId = $("#btnUpdatePost").data("post-id");
    let formData = new FormData($("form#formUpdatePost")[0]);
    let mainMarkdownPost = mMarkdownPost.value();
    let contentHTMLMain = converter.makeHtml(mainMarkdownPost);
    let contentMarkdown = markdown.value();
    let contentHTML = converter.makeHtml(contentMarkdown);

    if ($("#image-post").val()) {
      formData.append("mainMarkdownPost", mainMarkdownPost);
      formData.append("contentMarkdown", contentMarkdown);
      formData.append("contentHTML", contentHTML);
      formData.append("contentHTMLMain", contentHTMLMain);
      formData.append("title", $("#title-post").val());
      formData.append("image", document.getElementById("image-post").files[0]);
      formData.append("id", postId);
      handleUpdatePostNormal(formData);
    } else {
      let data = {
        id: postId,
        contentMarkdown: contentMarkdown,
        mainMarkdownPost: mainMarkdownPost,
        contentHTMLMain: contentHTMLMain,
        contentHTML: contentHTML,
      };

      for (let pair of formData.entries()) {
        data[pair[0]] = pair[1];
      }
      handleUpdatePostWithoutFile(data);
    }
  });
}

function handleUpdatePostNormal(formData) {
  $.ajax({
    method: "PUT",
    url: `${window.location.origin}/supporter/post/update`,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success: function (data) {
      alertify.success("Cập nhật thành công");
      window.location.href = `${window.location.origin}/supporter/manage/posts`;
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}

function handleUpdatePostWithoutFile(data) {
  $.ajax({
    method: "PUT",
    url: `${window.location.origin}/supporter/post/update-without-file`,
    data: data,
    success: function (data) {
      alertify.success("Cập nhật thành công ");
      window.location.href = `${window.location.origin}/supporter/manage/posts`;
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}

function createScheduleByDoctor(scheduleArr) {
  $("#createNewScheduleDoctor").on("click", function () {
    if (scheduleArr.length === 0) {
      alertify.error("Chưa chọn kế hoạch để lưu");
      return;
    }

    $.ajax({
      method: "POST",
      url: `${window.location.origin}/doctor/manage/schedule/create`,
      data: { schedule_arr: scheduleArr },
      success: function (data) {
        if (data.status === 1) {
          alertify.success("Thêm một cuộc hẹn thành công");
           window.location.href = `${window.location.origin}/doctor/manage/schedule`;

        }
      },
      error: function (error) {
        alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
        console.log(error);
      },
    });
  });
}

function handleBtnSchedule() {
  let scheduleArr = [];
  $(".btn-schedule")
    .unbind("click")
    .bind("click", function (e) {
      let idBtn = $(this).attr("id");
      $(`#${idBtn}`).toggleClass("btn btn-css");

      let time = $(`#${idBtn}`).attr("value");
      let date = $("#datepicker").val();

      //check có class thì add new row, else try to remove
      if ($(`#${idBtn}`).hasClass("btn-css")) {
        let item = {
          date: date,
          time: time,
          id: `${idBtn}-${date}`,
        };
        scheduleArr.push(item);
        $("#tableCreateSchedule tbody").append(
          ` <tr id="row-${idBtn}">
                         <td >${time}</td>
                         <td>${date}</td>
                  </tr>`
        );
      } else {
        let count = -1;
        let timeCheck = $(`#${idBtn}`).attr("value");
        let dateCheck = $("#datepicker").val();
        scheduleArr.forEach((x, index) => {
          if (x.time === timeCheck && x.date === dateCheck) {
            count = index;
          }
        });
        if (count > -1) scheduleArr.splice(count, 1);

        $(`table#tableCreateSchedule tr#row-${idBtn}`).remove();
      }

      scheduleArr.sort(function (a, b) {
        return a.time.localeCompare(b.time);
      });
    });

  return scheduleArr;
}

function handleChangeDatePicker(currentDate) {
  $("#datepicker")
    .datepicker()
    .on("changeDate", function (event) {
      let date = $("#datepicker").val();
      let dateConvert = stringToDate(date, "dd/MM/yyyy", "/");
      let currentDateConvert = stringToDate(currentDate, "dd/MM/yyyy", "/");
      if (dateConvert >= currentDateConvert) {
        //continue, refresh button
        $(".btn-schedule").removeClass("btn-css").addClass("btn");
      } else {
        $("#datepicker").datepicker("setDate", new Date());
        alertify.error("Không thể tạo ra một kế hoạch y tế cho quá khứ");
      }
    });
}

function handleBtnScheduleDel() {
  let scheduleArrD = [];
  $(".class-sche")
    .unbind("click")
    .bind("click", function (e) {
      let idSche = $(this).attr("id");
      console.log(idSche);
      $(`#${idSche}`).toggleClass("btn btn-css");

      let time = $(`#${idSche}`).attr("value");
      // console.log(time);
      let idS = $(`#${idSche}`).data("sche-id");
      // console.log(idS);

      //check có class thì add new row, else try to remove
      if ($(`#${idSche}`).hasClass("btn-css")) {
        let item = {
          time: time,
          idS: idS,
        };
        scheduleArrD.push(item);
        console.log(scheduleArrD);
      } else {
        let count = -1;
        let timeCheck = $(`#${idSche}`).attr("value");
        console.log(timeCheck);
        let idS = $(`#${idSche}`).data("sche-id");
        console.log(idS);

        scheduleArrD.forEach((x, index) => {
          if (x.time === timeCheck && x.idS === idS) {
            count = index;
            console.log(count);
          }
        });
        if (count > -1) scheduleArrD.splice(count, 1);
      }

      scheduleArrD.sort(function (a, b) {
        return a.time.localeCompare(b.time);
      });
      console.log(scheduleArrD);
    });

  return scheduleArrD;
}

function deleteScheduleByDoctor(scheduleArrD) {
  $(".delete-sche").on("click", function () {
    if (scheduleArrD.length === 0) {
      alertify.error("Không có thời gian nào được chọn ");
      return;
    }

    $.ajax({
      method: "DELETE",
      url: `${window.location.origin}/doctor/manage/schedule/delete`,
      data: { schedule_arr: scheduleArrD },
      success: function (data) {
        if (data.status === 1) {
          alertify.success("Xóa lịch hẹn thành công");
        }
      },
      error: function (error) {
        alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
        console.log(error);
      },
    });
  });
}

function stringToDate(_date, _format, _delimiter) {
  let formatLowerCase = _format.toLowerCase();
  let formatItems = formatLowerCase.split(_delimiter);
  let dateItems = _date.split(_delimiter);
  let monthIndex = formatItems.indexOf("mm");
  let dayIndex = formatItems.indexOf("dd");
  let yearIndex = formatItems.indexOf("yyyy");
  let month = parseInt(dateItems[monthIndex]);
  month -= 1;
  return new Date(dateItems[yearIndex], month, dateItems[dayIndex]);
}

function loadNewPatientsForSupporter() {
  $.ajax({
    url: `${window.location.origin}/supporter/get-patients-for-tabs`,
    method: "POST",
    success: function (data) {
      console.log(data)
      let countNew = data.object.newPatients.length;
      let countPending = data.object.pendingPatients.length;
      let countConfirmed = data.object.confirmedPatients.length;
      let countCanceled = data.object.canceledPatients.length;

      $("#count-new").text(`${countNew}`);
      $("#count-need").text(`${countPending}`);
      $("#count-confirmed").text(`${countConfirmed}`);
      $("#count-canceled").text(`${countCanceled}`);

      let htmlNew,
        htmlPending,
        htmlConfirmed,
        htmlCanceled = "";
      data.object.newPatients.forEach((patient) => {
        htmlNew += `
                <tr>
                    <td> ${patient.id} - ${patient.name}   </td>
                    <td> ${patient.phone}     </td>
                    <td> ${patient.email}     </td>
                    <td>${convertStringToDateClient(
                      patient.updatedAt
                    )}      </td>
                    <td> 
                    <button type="button"  data-patient-id="${
                      patient.id
                    }" class="ml-3 btn btn-primary btn-new-patient-ok"> Nhận lịch</button>
                    <button  type="button" data-patient-id="${
                      patient.id
                    }" class="ml-3 btn btn-danger btn-new-patient-cancel"> Hủy lịch </button>
                    </td>
                </tr>
                `;
      });

      data.object.pendingPatients.forEach((patient) => {
        htmlPending += `
                <tr>
                    <td> ${patient.id} - ${patient.name}   </td>
                    <td> ${patient.phone}     </td>
                    <td> ${patient.email}     </td>
                    <td> ${convertStringToDateClient(
                      patient.updatedAt
                    )}      </td>
                    <td> 
                    <button  data-patient-id="${
                      patient.id
                    }"  class="ml-3 btn btn-warning btn-pending-patient">Xác nhận</button>
                    <button  type="button" data-patient-id="${
                      patient.id
                    }" class="ml-3 btn btn-danger btn-pending-patient-cancel"> Hủy </button>
                    </td>
                </tr>
                `;
      });

      data.object.confirmedPatients.forEach((patient) => {
        htmlConfirmed += `
                <tr>
                    <td> ${patient.id} - ${patient.name}   </td>
                    <td> ${patient.phone}     </td>
                    <td> ${patient.email}     </td>
                    <td> ${convertStringToDateClient(
                      patient.updatedAt
                    )}     </td>
                    <td> 
                    <button  type="button" data-patient-id="${
                      patient.id
                    }"  class="ml-3 btn btn-info btn-confirmed-patient"> Thông tin </button>
                    </td>
                </tr>
                `;
      });

      data.object.canceledPatients.forEach((patient) => {
        htmlCanceled += `
                <tr>
                    <td> ${patient.id} - ${patient.name}   </td>
                    <td> ${patient.phone}     </td>
                    <td> ${patient.email}     </td>
                    <td> ${convertStringToDateClient(patient.updatedAt)} </td>
                    <td> 
                    <button   data-patient-id="${
                      patient.id
                    }"  class="ml-3 btn btn-primary btn-history-cancel-patient">Lịch sử</button>
                    </td>
                </tr>
                `;
      });

      $("#tableNewPatients tbody").append(htmlNew);
      $("#tableNeedConfirmPatients tbody").append(htmlPending);
      $("#tableConfirmedPatients tbody").append(htmlConfirmed);
      $("#tableCancelPatients tbody").append(htmlCanceled);
    },
    error: function (error) {
      console.log(error);
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
    },
  });
}

function handleBtnNewPatientOk() {
  $("#tableNewPatients").on("click", ".btn-new-patient-ok", function (e) {
    if (!confirm("Bạn có muốn xác nhận nhập viện của bệnh nhân này không?")) {
      return;
    }
    let countNew = +$("#count-new").text();
    let countPending = +$("#count-need").text();
    let patientId = $(this).data("patient-id");
    this.closest("tr").remove();
    countNew--;
    countPending++;
    $("#count-new").text(countNew);
    $("#count-need").text(countPending);

    $.ajax({
      url: `${window.location.origin}/supporter/change-status-patient`,
      method: "POST",
      data: { patientId: patientId, status: "pending" },
      success: function (data) {
        let patient = data.patient;
        addNewRowTablePending(patient);
      },
      error: function (error) {
        console.log(error);
        alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      },
    });
  });
}

function handleBtnNewPatientCancel() {
  $("#tableNewPatients").on("click", ".btn-new-patient-cancel", function (e) {
    $("#btnCancelBookingPatient").attr(
      "data-patient-id",
      $(this).data("patient-id")
    );
    $("#btnCancelBookingPatient").attr("data-type", "new-patient-cancel");
    $("#modalCancelBooking").modal("show");
  });
}

function callAjaxRenderModalInfo(patientId, option) {
  $.ajax({
    method: "POST",
    url: `${window.location.origin}/api/get-detail-patient-by-id`,
    data: { patientId: patientId },
    success: function (data) {
      $("#imageOldForms").empty();
      $("#patientName").val(data.name);
      $("#btn-confirm-patient-done").attr("data-patient-id", data.id);
      $("#patientPhone").val(data.phone);
      $("#patientEmail").val(data.email);
      $("#patientDate").val(data.dateBooking);
      $("#patientTime").val(data.timeBooking);
      $("#patientReason").val(data.description);
      $("#patientAddress").val(data.address);
      if (data.ExtraInfo) {
        $("#patientHistoryInfo").val(data.ExtraInfo.historyInfo);
        $("#patientMoreInfo").val(data.ExtraInfo.moreInfo);
        if (data.ExtraInfo.oldForms) {
          let images = JSON.parse(data.ExtraInfo.oldForms);
          let html = "";
          for (let [key, value] of Object.entries(images)) {
            html += `
                              <a href="/images/patients/${value}" class="mr-3" target="_blank" title="Click để hiển thị hình ảnh">
                                <span>${value}</span>
                              </a>
                            `;
          }

          $("#imageOldForms").append(html);
        } else {
          $("#imageOldForms").append(`<span>Không có thông tin</span>`);
        }
      }
      if (option) {
        $("#btn-confirm-patient-done").css("display", "none");
        $("#btn-cancel-patient").text("OK");
      }
      $("#modalDetailPatient").modal("show");
    },
    error: function (err) {
      console.log(error);
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
    },
  });
}

function handleBtnPendingPatient() {
  $("#tableNeedConfirmPatients").on(
    "click",
    ".btn-pending-patient",
    function (e) {
      let patientId = $(this).data("patient-id");
      let option = false;
      callAjaxRenderModalInfo(patientId, option);
    }
  );
}

function handleBtnPendingCancel() {
  $("#tableNeedConfirmPatients").on(
    "click",
    ".btn-pending-patient-cancel",
    function (e) {
      $("#btnCancelBookingPatient").attr(
        "data-patient-id",
        $(this).data("patient-id")
      );
      $("#btnCancelBookingPatient").attr("data-type", "pending-patient-cancel");
      $("#modalCancelBooking").modal("show");
    }
  );
}

function addNewRowTablePending(patient) {
  let htmlPending = `
                 <tr>
                    <td> ${patient.id} - ${patient.name}   </td>
                    <td> ${patient.phone}     </td>
                    <td> ${patient.email}     </td>
                    <td> ${convertStringToDateClient(
                      patient.updatedAt
                    )}     </td>
                    <td> 
                    <button  data-patient-id="${
                      patient.id
                    }"  class="ml-3 btn btn-warning btn-pending-patient">Xác nhận</button>
                    <button  type="button" data-patient-id="${
                      patient.id
                    }" class="ml-3 btn btn-danger btn-pending-patient-cancel"> Hủy </button>
                    </td>
                </tr>
               
                `;
  $("#tableNeedConfirmPatients tbody").prepend(htmlPending);
}

function addNewRowTableConfirmed(patient) {
  let htmlConfirmed = `
                <tr>
                    <td> ${patient.id} - ${patient.name}   </td>
                    <td> ${patient.phone}     </td>
                    <td> ${patient.email}     </td>
                    <td> ${convertStringToDateClient(
                      patient.updatedAt
                    )}     </td>
                    <td> 
                    <button  type="button" data-patient-id="${
                      patient.id
                    }"  class="ml-3 btn btn-info btn-confirmed-patient"> Thông tin</button>
                    </td>
                </tr>
                `;
  $("#tableConfirmedPatients tbody").prepend(htmlConfirmed);
}

function addNewRowTableCanceled(patient) {
  let htmlPending = `
                  <tr>
                    <td> ${patient.id} - ${patient.name}   </td>
                    <td> ${patient.phone}     </td>
                    <td> ${patient.email}     </td>
                    <td> ${convertStringToDateClient(patient.updatedAt)} </td>
                    <td> 
                    <button   data-patient-id="${
                      patient.id
                    }"  class="ml-3 btn btn-primary btn-history-cancel-patient">Lịch sử</button>
                    </td>
                </tr>
               
                `;
  $("#tableCancelPatients tbody").prepend(htmlPending);
}

function convertStringToDateClient(string) {
  return moment(Date.parse(string)).format("DD/MM/YYYY, HH:mm A");
}

function handleAfterCallingPatient() {
  $("#btn-confirm-patient-done").on("click", function (e) {
    if (
      !confirm(
        "Bạn đã gọi điện để xác nhận xem bệnh nhân đã có lịch hẹn chưa??"
      )
    ) {
      return;
    }
    let countPending = +$("#count-need").text();
    let countConfirmed = +$("#count-confirmed").text();
    countPending--;
    countConfirmed++;
    $("#modalDetailPatient").modal("hide");
    let patientId = $("#btn-confirm-patient-done").attr("data-patient-id");
    $("#tableNeedConfirmPatients tbody")
      .find(`.btn-pending-patient[data-patient-id=${patientId}]`)
      .closest("tr")
      .remove();
    $("#count-need").text(countPending);
    $("#count-confirmed").text(countConfirmed);

    $.ajax({
      url: `${window.location.origin}/supporter/change-status-patient`,
      method: "POST",
      data: { patientId: patientId, status: "confirmed" },
      success: function (data) {
        console.log(data);
        let patient = data.patient;
        addNewRowTableConfirmed(patient);
      },
      error: function (error) {
        console.log(error);
        alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      },
    });
  });
}

function handleViewInfoPatientBooked() {
  $("#tableConfirmedPatients").on(
    "click",
    ".btn-confirmed-patient",
    function (e) {
      let patientId = $(this).data("patient-id");
      let option = true;
      callAjaxRenderModalInfo(patientId, option);
    }
  );
}

function handleCancelBtn() {
  $("#btnCancelBookingPatient").on("click", function (e) {
    let formData = new FormData($("form#formCancelBooking")[0]);
    let data = {};
    let text = "";
    for (let pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }

    if (data.reasonCancel === "reason3") {
      if (!$("#otherReason").val()) {
        alert("Vui lòng điền thêm thông tin vì lý do khác");
        return;
      }
      text = `Lý do khác: ${$("#otherReason").val()} `;
    } else if (data.reasonCancel === "reason2") {
      text = "Bệnh nhân đã hủy lịch trình";
    } else {
      text = "Thư rác cuộc hẹn phòng khám, không có thật";
    }

    let patientId = $("#btnCancelBookingPatient").attr("data-patient-id");

    let type = $("#btnCancelBookingPatient").attr("data-type");

    if (type === "pending-patient-cancel") {
      let countPending = +$("#count-need").text();
      let countCancel = +$("#count-canceled").text();
      countPending--;
      countCancel++;
      $("#tableNeedConfirmPatients tbody")
        .find(`.btn-pending-patient-cancel[data-patient-id=${patientId}]`)
        .closest("tr")
        .remove();
      $("#count-need").text(countPending);
      $("#count-canceled").text(countCancel);
    } else {
      let countNew = +$("#count-new").text();
      let countCancel = +$("#count-canceled").text();
      countNew--;
      countCancel++;
      $("#tableNewPatients tbody")
        .find(`.btn-new-patient-cancel[data-patient-id=${patientId}]`)
        .closest("tr")
        .remove();
      $("#count-new").text(countNew);
      $("#count-canceled").text(countCancel);
    }

    $("#modalCancelBooking").modal("hide");

    $.ajax({
      url: `${window.location.origin}/supporter/change-status-patient`,
      method: "POST",
      data: { patientId: patientId, status: "failed", reason: text },
      success: function (data) {
        let patient = data.patient;
        addNewRowTableCanceled(patient);
      },
      error: function (error) {
        console.log(error);
        alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      },
    });
  });
}

function handleBtnViewHistory() {
  $("#tableCancelPatients").on(
    "click",
    ".btn-history-cancel-patient",
    function () {
      let patientId = $(this).data("patient-id");
      $("#btn-view-history").attr("data-patient-id", patientId);
      $.ajax({
        url: `${window.location.origin}/supporter/get-logs-patient`,
        method: "POST",
        data: { patientId: patientId },
        success: function (data) {
          console.log(data)
          $("#contentHistory").empty();

          let html = "";
          data.forEach((log) => {
            html += `
                     <div class="form-row mb-3">
                            <div class="col-6">
                                <input type="text"  class="form-control" id="historyStatus" value="${
                                  log.content
                                }">
                            </div>
                           
                            <div class="col-6">
                                <input type="text"  class="form-control" id="timeDone" value="${convertStringToDateClient(
                                  log.createdAt
                                )} ">
                            </div>
                        </div>
                    
                    `;
          });
          $("#contentHistory").append(html);
          $("#modalHistoryBooking").modal("show");
        },
        error: function (error) {
          console.log(error);
          alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
        },
      });
    }
  );
}

function handleDoctorViewInfoPatient() {
  $(".doctor-view-detail").on("click", function (e) {
    let patientId = $(this).attr("data-patient-id");
    console.log(patientId);
    $.ajax({
      method: "POST",
      url: `${window.location.origin}/api/get-detail-patient-by-id`,
      data: { patientId: patientId },
      success: function (data) {
        console.log(data);
        $("#imageOldForms").empty();
        $("#patientName").val(data.name);
        $("#patientPhone").val(data.phone);
        $("#patientEmail").val(data.email);
        $("#patientDate").val(data.dateBooking);
        $("#patientTime").val(data.timeBooking);
        $("#patientReason").val(data.description);
        $("#patientAddress").val(data.address);
        if (data.ExtraInfo) {
          $("#patientHistoryInfo").val(data.ExtraInfo.historyInfo);
          $("#patientMoreInfo").val(data.ExtraInfo.moreInfo);
          if (data.ExtraInfo.oldForms) {
            let images = JSON.parse(data.ExtraInfo.oldForms);
            let html = "";
            for (let [key, value] of Object.entries(images)) {
              html += `
                              <a href="/images/patients/${value}" class="mr-3" target="_blank" title="Click để hiển thị hình ảnh">
                                <span>${value}</span>
                              </a>
                            `;
            }

            $("#imageOldForms").append(html);
          } else {
            $("#imageOldForms").append(`<span>Không có thông tin</span>`);
          }
        }

        $("#modalDetailPatientForDoctor").modal("show");
      },
      error: function (err) {
        console.log(error);
        alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      },
    });
  });
}

function showModalSendForms() {
  $(".doctor-send-forms").on("click", function (e) {
    let patientId = $(this).attr("data-patient-id");
    let isSend = $(this).attr("data-is-send-forms");

    $.ajax({
      url: `${window.location.origin}/api/get-detail-patient-by-id`,
      method: "POST",
      data: { patientId: patientId },
      success: function (data) {
        let html = "";
        $("#divGenerateFilesSend").empty();
        $("#emailPatient").val(data.email);
        $("#btnSendFilesForms").attr("data-patient-id", patientId);
        if (data.ExtraInfo) {
          if (data.ExtraInfo.sendForms) {
            let images = JSON.parse(data.ExtraInfo.sendForms);
            for (let [key, value] of Object.entries(images)) {
              html += `
                              <div class="form-row">
                                <div class="form-group col-9">
                                    <a type="text" class="form-control" id="nameFileSent" target="_blank" href="/images/patients/remedy/${value}" readonly="true" title="${value}" >
                               ${value}
                                </a>
                                </div>
                             </div>`;
            }
          } else {
            html = `
                          <div class="form-row">
                            <div class="form-group col-9">
                                <label class="col-form-label text-label" for="nameFileSent"> File's name:</label>
                                <input type="text" class="form-control" id="nameFileSent" name="nameFileSent" disabled>
                            </div>
                         </div>`;
          }
        }
        $("#divGenerateFilesSend").append(html);
        $("#modalSendForms").modal("show");
      },
      error: function (error) {
        console.log(error);
        alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      },
    });
  });
}

function handleSendFormsForPatient() {
  $("#btnSendFilesForms").on("click", function (e) {
    if (!$("#filesSend").val()) {
      alert("Vui lòng chọn tệp trước khi gửi!");
      return;
    }
    $(this).prop("disabled", true);
    $("#processLoadingAdmin").removeClass("d-none");
    let formData = new FormData($("form#formSendFormsForPatient")[0]);
    formData.append("patientId", $(this).attr("data-patient-id"));

    $.ajax({
      method: "POST",
      url: `${window.location.origin}/doctor/send-forms-to-patient`,
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      success: function (data) {
        $("#modalSendForms").modal("hide");
        $("#processLoadingAdmin").addClass("d-none");
        $("#btnSendFilesForms").prop("disabled", false);
        $(`.fa-exclamation-circle[data-patient-id=${data.patient.id}]`).css(
          "color",
          "#36b9cc"
        );
        $(`.fa-exclamation-circle[data-patient-id=${data.patient.id}]`)
          .removeClass("fa-exclamation-circle")
          .addClass("fa-check-circle");
        alertify.success("Gởi hóa đơn thành công");
      },
      error: function (error) {
        alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
        console.log(error);
      },
    });
  });
}

function resetModal() {
  $(`#modalDetailPatient`).on("hidden.bs.modal", function (e) {
    $(this)
      .find("input,textarea,select")
      .val("")
      .end()
      .find("input[type=checkbox], input[type=radio]")
      .prop("checked", "")
      .end();
  });

  $(`#modalHistoryBooking`).on("hidden.bs.modal", function (e) {
    $(this)
      .find("input,textarea,select")
      .val("")
      .end()
      .find("input[type=checkbox], input[type=radio]")
      .prop("checked", "")
      .end();
  });

  $(`#modalDetailPatientForDoctor`).on("hidden.bs.modal", function (e) {
    $(this)
      .find("input,textarea,select")
      .val("")
      .end()
      .find("input[type=checkbox], input[type=radio]")
      .prop("checked", "")
      .end();
  });

  $(`#modalSendForms`).on("hidden.bs.modal", function (e) {
    $(this)
      .find("input,textarea,select")
      .val("")
      .end()
      .find("input[type=checkbox], input[type=radio]")
      .prop("checked", "")
      .end();
  });
  $(`#modalCancelBooking`).on("hidden.bs.modal", function (e) {
    $(this)
      .find("input,textarea,select")
      .val("")
      .end()
      .find("input[type=checkbox], input[type=radio]")
      .prop("checked", "")
      .end();
    $("#inputDefaultReason").prop("checked", true);
  });
}


function statisticalAdmin(month) {
  $.ajax({
    method: "POST",
    url: `${window.location.origin}/admin/statistical`,
    data: { month: month },
    success: function (data) {
      console.log('test statis',data)
      $("#sumPatient").text(data.patients.count);
      $("#sumDoctor").text(data.doctors.count);
      $("#sumPost").text(data.posts.count);

      if (data.bestDoctor === "") {
        $("#bestDoctor").text(`Không có thông tin`);
      } else {
        $("#bestDoctor").text(
          `${data.bestDoctor.name} (${data.bestDoctor.count})`
        );
      }
      if (data.bestSupporter === "") {
        $("#bestSupporter").text(`Không có thông tin`);
      } else {
        $("#bestSupporter").text(
          `${data.bestSupporter.name} (${data.bestSupporter.count})`
        );
      }
    },
    error: function (error) {
      alertify.error(
        "Đã xảy ra lỗi khi lấy thông tin thống kê, vui lòng thử lại sau"
      );
      console.log(error);
    },
  });
}

function handleFindStatisticalAdmin() {
  $("#findStatisticalAdmin").on("click", function () {
    statisticalAdmin($("#monthAnalyse").val());
  });
}




function handleConfirmFeedback(){
  $("#dataTableFeedback").on("click", ".done-feedback", function () {
  let id = $(this).data("feedback-id");
   $.ajax({
    method: "PUT",
    url: `${window.location.origin}/confirm-feedback`,
    data: { id:id },
    success: function (data) {
        console.log(data);
          alertify.success("Xác nhận phản hồi thành công");
           window.location.href = `${window.location.origin}/supporter/manage/customers`;
        },
    error: function (error) {
          alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
          console.log(error);
        },
 
  });
 
})}


function showModalInfoFeedback() {
  $(".info-feedback").on("click", function (e) {
    e.preventDefault();
    
    let id = $(this).data("feedback-id");

    $.ajax({
      method: "POST",
      url: `${window.location.origin}/api/get-info-feedback-by-id`,
      data: { id: id },
      success: function (data) {
        $("#imageFeedback").empty();
        $("#nameFeedback").val(data.feedback.name);
      
        if (data.feedback.address) {
          $("#ageFeedback").val(data.feedback.age);
        } else {
          $("#ageFeedback").val("Chưa được cập nhật ");
        }

        if (data.feedback.address) {
          $("#addressFeedback").val(data.feedback.address);
        } else {
          $("#addressFeedback").val("Chưa được cập nhật ");
        }

        if (data.feedback.avatar) {
          $("#imageFeedback").prepend(
            `<img class="img-info-feedback" src="/images/feedbacks/${data.feedback.avatar}" style="width:100%" />`
          );
        } else {
          $("#imageFeedback").text("Chưa được cập nhật ");
        }
         if (data.feedback.content) {
           $("#contentFeedback").val(data.feedback.content);
         } else {
           $("#contentFeedback").val("Chưa được cập nhật ");
         }

        $("#modalInfoFeedback").modal("show");
      },
      error: function (error) {
        alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
        console.log(error);
      },
    });
  });
}



function deleteFeedback(){
   $(".dataTableFeedback").on("click", ".delete-feedback", function () {
  let id = $(this).data("feedback-id");
   $.ajax({
     method: "DELETE",
     url: `${window.location.origin}/delete/feedback-id`,
     data: { id: id },
     success: function (data) {
       console.log(data);
       alertify.success("Xóa phản hồi thành công");
      window.location.href = `${window.location.origin}/supporter/manage/customers`;

     },
     error: function (error) {
       alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
       console.log(error);
     },
   });

})}


function updateUser() {
  $("#updateInfoUserSetting").on("click", function (e) {
    let roleId = $("#updateInfoUserSetting").data("role-id");
    let userId = $("#updateInfoUserSetting").data("user-id");

    let formData = new FormData($("form#formUpdateUser")[0]);
    //contain file upload
    if ($("#update-avatar").val()) {
      formData.append(
        "avatar",
        document.getElementById("update-avatar").files[0]
      );
      formData.append("id", userId);
        // for (let pair of formData.entries()) {
        //   formData[pair[0]] = pair[1];
        // }
      handleUpdateUserNormal(formData);
    } else {
      // create without file upload
      let data = {
        id: userId,
        roleId: roleId,
      };
      for (let pair of formData.entries()) {
        data[pair[0]] = pair[1];
      }
      handleUpdateUserWithoutFile(data);
    }
  });
}
function handleUpdateUserNormal(formData) {
  console.log(formData)
  $.ajax({
    method: "PUT",
    url: `${window.location.origin}/admin/user/update`,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success: function (data) {
      alertify.success("Cập nhật thành công");
      window.location.reload();
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}

function handleUpdateUserWithoutFile(data) {
  console.log("checkdatawo", data);
  $.ajax({
    method: "PUT",
    url: `${window.location.origin}/admin/user/update-without-file`,
    data: data,
    success: function (data) {
      alertify.success("Cập nhật thành công");
      window.location.href = `${window.location.origin}/users/manage/doctor`;
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });
}

function handleChangePassword(){
$("#updatePasswordUserSetting").on("click", function () {
   
if( $('#oldPassword').val() || $('#newPassword').val()||$('#confirmPassword').val()){
let password = $("#newPassword").val();
let idUser = $("#updatePasswordUserSetting").data("user-id");

data = {
  password: password,
  id: idUser,
};

checkPassword();

// $.ajax({
//   method: "PUT",
//   url: `${window.location.origin}/admin/user/changePassword`,
//   data: data,
//   success: function (data) {
//     alertify.success("Thay đổi mật khẩu thành công");
//     //  window.location.href = `${window.location.origin}/users/manage/doctor`;
//   },
//   error: function (error) {
//     alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
//     console.log(error);
//   },
// });

}else{
    alertify.error("Vui lòng nhập đủ dữ liệu")
  }
});
}

function checkPassword(){
  
 let oldPassword =  $("#oldPassword").val();
 let idUser = $("#updatePasswordUserSetting").data("user-id");
 let data = {
   password:oldPassword,
   id:idUser
 }
   $.ajax({
    method: "POST",
    url: `${window.location.origin}/admin/user/checkPassword`,
    data:data,
    success: function (data) {


      if(data.message === "true" ){
         alertify.success("Mật khẩu cũ chính xác");
          // let oldPassword = $("#oldPassword").val();
          // let idUser = $("#updatePasswordUserSetting").data("user-id");
          // let data = {
          //   password: oldPassword,
          //   id: idUser,
          // };
       
        if( $('#oldPassword').val() && $('#newPassword').val()&& $('#confirmPassword').val()){
         if ($("#newPassword").val() !== $("#confirmPassword").val()) {
           alertify.error("Mật khẩu không khớp nhau");
         
         }else{
          let password = $("#newPassword").val();
          let idUser = $("#updatePasswordUserSetting").data("user-id");

          data = {
            password: password,
            id: idUser,
          };}
         
           $.ajax({
             method: "PUT",
             url: `${window.location.origin}/admin/user/changePassword`,
             data: data,
             success: function (data) {
               alertify.success("Thay đổi mật khẩu thành công");
               //  window.location.href = `${window.location.origin}/users/manage/doctor`;
             },
             error: function (error) {
               alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
               console.log(error);
             },
           });
         }
         else{
          alertify.error("Vui lòng nhập đủ dữ liệu");
         }
           
      }else{
        alertify.error("Mật khẩu cũ không chính xác");

      }     
      // window.location.href = `${window.location.origin}/users/manage/doctor`;
    },
    error: function (error) {
      alertify.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
      console.log(error);
    },
  });

}


$(document).ready(function (e) {
  let markdownIntroClinic = new SimpleMDE({
    element: document.getElementById("intro-clinic"),
    placeholder: "Nhập nội dung mô tả cơ sở y tế",
    spellChecker: false,
  });

  let markdownIntroSpe = new SimpleMDE({
    element: document.getElementById("intro-spe"),
    placeholder: "Nhập nội dung mô tả chuyên khoa",
    spellChecker: false,
  });

  let markdownJDD = new SimpleMDE({
    element: document.getElementById("introJobDoctor"),
    placeholder: "Nhập nội dung mô tả chức vụ bác sĩ",
    spellChecker: false,
  });

  let markdownIntroDoctor = new SimpleMDE({
    element: document.getElementById("intro-doctor"),
    placeholder: "Nhập nội dung mô tả thông tin bác sĩ",
    spellChecker: false,
  });
  let markdownPost = new SimpleMDE({
    element: document.getElementById("contentMarkdown"),
    placeholder: "Chi tiết bài đăng bài đăng...",
    spellChecker: false,
  });
  let mainMarkdownPost = new SimpleMDE({
    element: document.getElementById("mainContentMarkdown"),
    placeholder: "Nội dung chính bài đăng...",
    spellChecker: false,
  });
  let markdownPostCreate = new SimpleMDE({
    element: document.getElementById("mainContentMarkdownCreate"),
    placeholder: "Chi tiết bài đăng...",
    spellChecker: false,
  });
  let mainMarkdownPostCreate = new SimpleMDE({
    element: document.getElementById("contentMarkdownCreate"),
    placeholder: "Nội dung chính bài đăng...",
    spellChecker: false,
  });

  let converter = new showdown.Converter();
 
  //create datepicker, doctor create schedule
  $("#datepicker").datepicker({
    format: "dd/mm/yyyy",
    weekStart: 1,
    daysOfWeekHighlighted: "6,0",
    autoclose: true,
    todayHighlight: true,
  });
  $("#datepicker").datepicker("setDate", new Date());

  //create datepicker, doctor-appointment
  $("#dateDoctorAppointment").datepicker({
    format: "dd/mm/yyyy",
    weekStart: 1,
    daysOfWeekHighlighted: "6,0",
    autoclose: true,
    todayHighlight: true,
  });

  $("#patient-need-confirm-tab").click(function (e) {
    e.preventDefault();
    $("#newFeedbacks").hide();
    $("#feedbackConfirms").show();
  ;
  });
   $("#patient-new-tab").click(function (e) {
     e.preventDefault();
     $("#newFeedbacks").show();
     $("#feedbackConfirms").hide();
   });

 
  function showModalSettingUser() {
    $(".user-setting").on("click", function (e) {
      e.preventDefault();
      $("#modalSettingUser").modal("show");
    });
  }

  
  loadFileClinic(e);
  loadFileSpe(e);
  loadFileDoctor(e);
  loadFileSupporter(e);
  loadFileImageHistory(e);
  loadFileFeedback(e);
  loadImageUserSetting(e);

  createNewClinic(markdownIntroClinic, converter);
  deleteClinicById();
  updateClinic(markdownIntroClinic, converter);
  showModalInfoClinic();
  showClinicPagination();

  createNewSpe(markdownIntroSpe, converter);
  updateSpe(markdownIntroSpe, converter);
  showModalInfoSpe();
  deleteSpeById();
  showSpePagination();

  showDoctorPagination();
  updateDoctor(markdownIntroDoctor,markdownJDD, converter);
  createNewDoctor(markdownIntroDoctor,markdownJDD, converter);
  showModalInfoDoctor();
  deleteDoctorById();

  updateSupporter();
  createNewSupporter();
  showModalInfoSupporter();
  deleteSupporterById();

  showSupporterPagination();
  showPostsForSupporter();
  createNewPost(markdownPostCreate, mainMarkdownPostCreate, converter);
  updatePost(markdownPost, mainMarkdownPost, converter);
  deletePostById();
  

  let arr = handleBtnSchedule();
  createScheduleByDoctor(arr);

  let arrD = handleBtnScheduleDel();
  console.log("arrD", arrD);
  deleteScheduleByDoctor(arrD);

  let currentDate = $("#datepicker").val();
  handleChangeDatePicker(currentDate);

  loadNewPatientsForSupporter();
  handleBtnNewPatientOk();
  handleBtnNewPatientCancel();
  handleBtnPendingPatient();
  handleBtnPendingCancel();
  resetModal();
  handleAfterCallingPatient();
  handleViewInfoPatientBooked();
  handleCancelBtn();
  handleBtnViewHistory();

  handleDoctorViewInfoPatient();
  showModalSendForms();
  handleSendFormsForPatient();
  
  let month = new Date().getMonth();
  statisticalAdmin(month + 1);
  handleFindStatisticalAdmin();



  handleConfirmFeedback();
  deleteFeedback();
  showModalInfoFeedback();
  
  loadImageUserSetting();
  showModalSettingUser();
  updateUser();
  handleChangePassword();
})