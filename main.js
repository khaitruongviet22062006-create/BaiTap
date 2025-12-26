
        // BÀI 1: QUẢN LÝ TUYỂN SINH
        function tinhDiemTuyenSinh() {
            const diemChuan = parseFloat(document.getElementById('diemChuan').value);
            const diem1 = parseFloat(document.getElementById('diemMon1').value);
            const diem2 = parseFloat(document.getElementById('diemMon2').value);
            const diem3 = parseFloat(document.getElementById('diemMon3').value);
            const khuVuc = document.getElementById('khuVuc').value;
            const doiTuong = document.getElementById('doiTuong').value;
            const ketQua = document.getElementById('ketQuaTuyenSinh');

            if (!diemChuan || !diem1 && diem1 !== 0 || !diem2 && diem2 !== 0 || !diem3 && diem3 !== 0 || !khuVuc || !doiTuong && doiTuong !== '0') {
                ketQua.innerHTML = 'Vui lòng nhập đầy đủ thông tin!';
                return;
            }

            // Tính điểm ưu tiên khu vực
            let diemKhuVuc = 0;
            if (khuVuc === 'A') diemKhuVuc = 2;
            else if (khuVuc === 'B') diemKhuVuc = 1;
            else if (khuVuc === 'C') diemKhuVuc = 0.5;

            // Tính điểm ưu tiên đối tượng
            let diemDoiTuong = 0;
            if (doiTuong === '1') diemDoiTuong = 2.5;
            else if (doiTuong === '2') diemDoiTuong = 1.5;
            else if (doiTuong === '3') diemDoiTuong = 1;

            // Kiểm tra điểm liệt
            if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
                ketQua.innerHTML = 'RỚT - Bạn có môn bị điểm 0 (điểm liệt)';
                return;
            }

            // Tính tổng điểm
            const tongDiem = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong;

            // Kiểm tra đậu/rớt
            if (tongDiem >= diemChuan) {
                ketQua.innerHTML = 'ĐẬU - Tổng điểm: ' + tongDiem.toFixed(2) + ' điểm';
            } else {
                ketQua.innerHTML = 'RỚT - Tổng điểm: ' + tongDiem.toFixed(2) + ' điểm (Cần: ' + diemChuan + ' điểm)';
            }
        }

        // BÀI 2: TÍNH TIỀN ĐIỆN
        function tinhTienDien() {
            const ten = document.getElementById('tenKhachHang').value.trim();
            const soKw = parseFloat(document.getElementById('soKw').value);
            const ketQua = document.getElementById('ketQuaTienDien');

            if (!ten || !soKw && soKw !== 0) {
                ketQua.innerHTML = 'Vui lòng nhập đầy đủ thông tin!';
                return;
            }

            if (soKw < 0) {
                ketQua.innerHTML = 'Số Kw không được âm!';
                return;
            }

            let tien = 0;
            if (soKw <= 50) {
                tien = soKw * 500;
            } else if (soKw <= 100) {
                tien = 50 * 500 + (soKw - 50) * 650;
            } else if (soKw <= 150) {
                tien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
            } else if (soKw <= 200) {
                tien = 50 * 500 + 50 * 650 + 50 * 850 + (soKw - 150) * 1100;
            } else {
                tien = 50 * 500 + 50 * 650 + 50 * 850 + 50 * 1100 + (soKw - 200) * 1300;
            }

            ketQua.innerHTML = 'Khách hàng: ' + ten + '<br>Tiền điện: ' + tien.toLocaleString('vi-VN') + 'đ';
        }

        // BÀI 3: TÍNH THUẾ THU NHẬP CÁ NHÂN
        function tinhThue() {
            const hoTen = document.getElementById('hoTen').value.trim();
            const tongThuNhap = parseFloat(document.getElementById('tongThuNhap').value);
            const soNguoiPhuThuoc = parseInt(document.getElementById('soNguoiPhuThuoc').value);
            const ketQua = document.getElementById('ketQuaThue');

            if (!hoTen || !tongThuNhap && tongThuNhap !== 0 || !soNguoiPhuThuoc && soNguoiPhuThuoc !== 0) {
                ketQua.innerHTML = 'Vui lòng nhập đầy đủ thông tin!';
                return;
            }

            // Tính thu nhập chịu thuế (đơn vị: triệu)
            const thuNhapChiuThue = tongThuNhap - 4 - (soNguoiPhuThuoc * 1.6);

            if (thuNhapChiuThue <= 0) {
                ketQua.innerHTML = 'Họ tên: ' + hoTen + '<br>Thuế thu nhập cá nhân: 0đ (Thu nhập không chịu thuế)';
                return;
            }

            // Tính thuế theo bậc
            let thue = 0;
            if (thuNhapChiuThue <= 60) {
                thue = thuNhapChiuThue * 0.05;
            } else if (thuNhapChiuThue <= 120) {
                thue = 60 * 0.05 + (thuNhapChiuThue - 60) * 0.10;
            } else if (thuNhapChiuThue <= 210) {
                thue = 60 * 0.05 + 60 * 0.10 + (thuNhapChiuThue - 120) * 0.15;
            } else if (thuNhapChiuThue <= 384) {
                thue = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.20;
            } else if (thuNhapChiuThue <= 624) {
                thue = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + (thuNhapChiuThue - 384) * 0.25;
            } else if (thuNhapChiuThue <= 960) {
                thue = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + 240 * 0.25 + (thuNhapChiuThue - 624) * 0.30;
            } else {
                thue = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + 240 * 0.25 + 336 * 0.30 + (thuNhapChiuThue - 960) * 0.35;
            }

            ketQua.innerHTML = 'Họ tên: ' + hoTen + '<br>Thuế thu nhập cá nhân: ' + (thue * 1000000).toLocaleString('vi-VN') + 'đ';
        }

        // BÀI 4: TÍNH TIỀN CÁP
        function toggleSoKetNoi() {
            const loai = document.getElementById('loaiKhachHang').value;
            const soKetNoiInput = document.getElementById('soKetNoi');
            
            if (loai === 'doanhNghiep') {
                soKetNoiInput.classList.remove('hidden');
            } else {
                soKetNoiInput.classList.add('hidden');
                soKetNoiInput.value = '';
            }
        }

        function tinhTienCap() {
            const maKH = document.getElementById('maKhachHang').value.trim();
            const loai = document.getElementById('loaiKhachHang').value;
            const soKenhCaoCap = parseInt(document.getElementById('soKenhCaoCap').value);
            const ketQua = document.getElementById('ketQuaCap');

            if (!maKH || !loai || !soKenhCaoCap && soKenhCaoCap !== 0) {
                ketQua.innerHTML = 'Vui lòng nhập đầy đủ thông tin!';
                return;
            }

            let tongTien = 0;

            if (loai === 'nhaDan') {
                // Nhà dân: 4.5$ + 20.5$ + 7.5$ × số kênh
                tongTien = 4.5 + 20.5 + (7.5 * soKenhCaoCap);
            } else if (loai === 'doanhNghiep') {
                const soKetNoi = parseInt(document.getElementById('soKetNoi').value);
                
                if (!soKetNoi && soKetNoi !== 0) {
                    ketQua.innerHTML = 'Vui lòng nhập số kết nối!';
                    return;
                }

                // Doanh nghiệp: 15$ + 75$ (10 kết nối đầu) + 5$ × kết nối thêm + 50$ × số kênh
                let phiKetNoi = 75; // 10 kết nối đầu
                if (soKetNoi > 10) {
                    phiKetNoi += (soKetNoi - 10) * 5;
                }
                tongTien = 15 + phiKetNoi + (50 * soKenhCaoCap);
            }

            ketQua.innerHTML = 'Mã khách hàng: ' + maKH + '<br>Tổng tiền cáp: $' + tongTien.toFixed(2);
        }
