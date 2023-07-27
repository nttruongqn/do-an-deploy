// export const transValidation = {
//   email_incorrect: "Invalid email",
//   gender_incorrect: "Invalid gender",
//   password_incorrect: "Password must have at least 6 characters",
//   password_confirmation_incorrect: "The confirm password is not correct",
// };

export const transMailBookingNew = {
  subject: "Email thông báo về tiến độ đặt phòng tại Chăm sóc bác sĩ",
  template: (data) => {
    return `<h3>Cảm ơn bạn đã đặt lịch khám tại hệ thống của DoctorCare </h3>
        <h4>Thông tin cho cuộc hẹn đã đặt:</h4>
        <div>Tên bác sĩ: ${data.doctor} </div>
        <div>Thời gian: ${data.time}</div>
        <div>Ngày: ${data.date}</div>
        <div>Trạng thái: <b> Đang chờ xử lý - Một cuộc hẹn mới đang chờ xác nhận </b></div>
        <h4>Hệ thống DoctorCare sẽ tự động gửi email thông báo khi cuộc hẹn đã được xác nhận hoàn tất. Cảm ơn bạn! Hệ thống chăm sóc của Bác sĩ sẽ tự động gửi email thông báo khi cuộc hẹn được xác nhận hoàn tất. Cảm ơn bạn !</h4>`;
  },
};

export const transMailBookingFailed = {
  subject: "Email thông báo về tiến độ đặt phòng tại Chăm sóc bác sĩ",
  template: (data) => {
    return `<h3>Cảm ơn bạn đã đặt lịch khám tại hệ thống của DoctorCare </h3>
        <h4>Thông tin cho cuộc hẹn đã đặt:</h4>
        <div>Tên bác sĩ: ${data.doctor} </div>
        <div>Thời gian:  ${data.time}</div>
        <div>Ngày: ${data.date}</div>
        <div>Trạng thái:  <b>Bị Hủy - ${data.reason}</b></div>
        <h4>Nếu bạn nhận thấy lỗi từ email này, vui lòng liên hệ với nhà điều hành hỗ trợ: <b> 115 115</b>. Cảm ơn bạn !</h4>`;
  },
};

export const transMailBookingSuccess = {
  subject: "Email thông báo về tiến độ đặt phòng tại Chăm sóc bác sĩ",
  template: (data) => {
    return `<h3>Cảm ơn bạn đã đặt lịch khám tại hệ thống của DoctorCare </h3>
        <h4>Thông tin cho cuộc hẹn đã đặt:</h4>
        <div>Tên bác sĩ: ${data.doctor} </div>
        <div>Thời gian: ${data.time}</div>
        <div>Ngày: ${data.date}</div>
        <div>Trạng thái:: <b>Thành công</b></div>
        <h4>Cảm ơn bạn rất nhiều!</h4>`;
  },
};

export const transMailRemedy = {
  subject: "Gửi hóa đơn y tế từ bác sĩ qua email",
  template: (data) => {
    return `<h3>Cảm ơn bạn đã tin tưởng đặt lịch khám bệnh tại hệ thống của DoctorCare.</h3>
     Sau khi bạn đã đến phòng khám của bác sĩ <b> ${data.doctor} </b>, bạn có thể xem lại chi tiết thanh toán từ tệp đính kèm email này.</h4>
        <div>Mật khẩu để giải nén tệp đính kèm có dạng sau: <i>Tên đầy đủ không dấu - 3 chữ số đầu số điện thoại - 2 chữ số cuối năm sinh của bạn </div>
        <br>
        <div>Ví dụ: Họ và tên: Nguyễn Văn A, có số điện thoại đăng ký: 0123456789 và sinh: 2000, mật khẩu trích xuất là: <b>  nguyenvana-012-00 </b></div>
        <br>
        <div>Trong trường hợp không nhận được tệp đính kèm cũng như không giải nén được, vui lòng liên hệ với nhà điều hành hỗ trợ: <b>115 115</b></div>
        <h4>Cảm ơn !</h4>`;
  },
};
