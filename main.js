/**
 * Bai 1:
 * Đầu vào
 * + Tính tiền lương nhân viên
 * + Lương 1 ngày: 100000
 * + Nhập số ngày làm 
 * + Công thức tính: Lương 1 ngày * số ngày làm
 * Xử lý
 * + var a; số tiền lương nhân viên
 * + var luong 1 ngày = 100000;
 * + var b; số ngày làm
 * + Var a = lương 1 ngày * b;
 * Đầu ra
 * + show ra tiền lương
 */

var a;
var luong1ngay = 100000;
var b = 1;
var a = luong1ngay * b;
console.log(a);


/**
 * Bai 2
 * Đầu vào
 * + Nhập vào 5 số thực
 * + Tính giá trị trung bình của 5 số
 * Xử lý
 * + Chọn ra số thực có giá trị trung bình chia hết cho 5
 * + var a = 3;
 * + var b = 5;
 * var giatritrungbinh = a % b;
 * Đầu ra
 * + show kết quả
 * 
 */

var a = 3;
var b = 5;
var giatritrungbinh = a % b;
console.log(giatritrungbinh);

/**
 * Bai 3
 * Đầu vào
 * + Giá usd 23,500 VND
 * + Quy đổi từ USD-> VND
 * + Tính số tiền quy đổi
 * Xử lý
 * + chọn 2 USD để quỷ đổi sang VND
 * + var a = 2;
 * + var b = 23,500;
 * + var quydoi = a * b;
 * Đầu ra
 * + show ra tiền đổi 
 */

var a = 2;
var b = 23500;
var quydoi = a * b;
console.log(quydoi);


/**
 * Bai 4
 * Đầu vào 
 * + Chiều dài, chiều rộng
 * + Tính diện tích, chu vi
 * Xử lý 
 * + var a = 5; chiều dài
 * + var b = 3; chiều rộng
 * + var dt = a * b; Tính diện tích
 * + var cv = (a + b) * 2; Tính chu vi
 * Đầu ra
 * + Show dt cv
 */

var a = 5;
var b = 3; 
var dt = a * b;
var cv = (a + b)* 2;
console.log(dt,cv);


/**
 * Bai 5
 * Đầu vào 
 * + Nhập số có 2 chữ số
 * Xử lý
 * + var a = 12;
 * + var tong = a % 10 + a / 10;
 * Đầu ra
 * + show kết quả
 */

var a = 12;
var tong = a % 10 + a / 10;
console.log(tong);