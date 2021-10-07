import { LAY_DANH_SACH_PHIM, LAY_DANH_SACH_PHIM_DANG_CHIEU, LAY_DANH_SACH_PHIM_SAP_CHIEU, LAY_THONG_TIN_PHIM } from "../type/LayDanhSachPhimType"

const initialState = {
    danhSachMovie: [],
    thongTinPhim: {},
    dangChieu: true,
    sapChieu: true,
    arrDefault: [],
    arrNews: [
        {
            tenPhim: "[THE CONJURING: MA XUI QUỶ KHIẾN] - HÉ LỘ TRAILER CHÍNH THỨC CHO PHẦN TIẾP THEO “THE CONJURING”",
            moTa: "Hẹn hò ra rạp từ tháng 9/2020, song do ảnh hưởng của COVID-19, cho tới tận mùa hè năm nay, khán giả thế giới mới được thưởng thức phần tiếp theo trong vũ trụ kinh dị The Conjuring đình đám.",
            hinhAnh: "https://cinestar.com.vn/pictures/176127737_895216464398053_4305814264711249791_n.jpg",
        },
        {
            tenPhim: "[THÁM TỬ LỪNG DANH CONAN: VIÊN ĐẠN ĐỎ] Giải mã thương hiệu Conan, lý do nào khiến chàng thám tử “mãi không lớn” luôn khiến các fan ngóng chờ!",
            moTa: "Lần đầu ra mắt năm 1994, Conan giữ nguyên sức hấp dẫn sau hơn hai thập kỷ, là một trong những thương hiệu anime/manga nổi tiếng bậc nhất. Trên thế giới, số lượng bán ra của Conan là 230 triệu bản truyện tranh, đạt doanh thu khoảng 1,1 tỷ USD. Tính thêm giá trị các bản hoạt hình, điện ảnh, vật phẩm... thì tổng giá trị thương hiệu thám tử lừng danh được ước tính khoảng 6 tỷ USD, số liệu tính đến năm 2020.",
            hinhAnh: "https://cinestar.com.vn/pictures/Tin%20tức/conan/conan2.jpg",
        },
        {
            tenPhim: "[GODZILLA ĐẠI CHIẾN KONG] Du lịch Vũ trụ MonsterVerse qua những bối cảnh siêu quái vật đã oanh tạc",
            moTa: "Vào năm 1954, Godzilla lần đầu được giới thiệu trên màn ảnh qua phim Gojira của hãng Toho tại Nhật Bản và trở thành một trong những quái vật nổi tiếng nhất làng điện ảnh. 60 năm sau, Warner Bros. một lần nữa đưa Godzilla trở lại, mở ra vũ trụ điện ảnh của các quái vật Titans..",
            hinhAnh: "https://cinestar.com.vn/pictures/god.png",
        },
        {
            tenPhim: "[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - TẤT TẦN TẬT VỀ GIẢI ĐẤU HUYỀN THOẠI MORTAL KOMBAT SẼ GÂY BÃO THÁNG TƯ NÀY",
            moTa: "Đầu năm 2021, Mortal Kombat - tựa game đình đám từng là tuổi thơ của thế hệ 8X và đầu 9X sẽ trở lại, nhưng lần này là với phiên bản điện ảnh hứa hẹn xứng tầm bom tấn hành động. Về độ khắc nghiệt và đẫm máu của giải đấu huyền thoại này, có lẽ không cần phải bàn cãi thêm. Tuy nhiên, có rất nhiều điểm thú vị xoay quanh lịch sử hình thành Mortal Kombat mà không phải ai cũng biết, mà đã biết rồi thì chắc chắn không thể không ra rạp xem ngay bộ phim vào tháng Tư này. .",
            hinhAnh: "https://cinestar.com.vn/pictures/mortal.png",
        },
        {
            tenPhim: "ĐÊM NHẠC TƯỞNG NIỆM NHẠC SĨ NGUYỄN ÁNH 9: “XA VẮNG TIẾNG DƯƠNG CẦM”",
            moTa: "Nhân ngày giỗ 5 năm của nhạc sĩ Nguyễn Ánh 9, Ha ha production và Dalat Opera House sẽ phối hợp thực hiện đêm nhạc tưởng niệm nhạc sĩ Nguyễn Ánh 9: Xa vắng tiếng dương cầm.Đêm nhạc có sự tham gia biểu diễn của các danh ca, ca sĩ nổi tiếng trong nước và hải ngoại như Elvis Phương, Quang Dũng, Hồ Lệ Thu, Ngọc Liên, và các ca sĩ quen thuộc của TPHCM và Hà Nội: Hương Giang, Huy Luân, Triệu Long, Ngọc Châm, Tuấn Anh.Đặc biệt người dẫn chương trình trong đêm nhạc là MC Nguyễn Cao Kỳ Duyên.",
            hinhAnh: "https://cinestar.com.vn/pictures/Cinestar/04-2021/350.jpg",
        },
        {
            tenPhim: "TRƯỞNG PHÒNG MARKETING",
            moTa: "Chúng tôi đang tìm kiếm ứng viên có tài năng và niềm đam mê để gia nhập vào đội ngũ quản lý của Cinestar, cho vị trí Trưởng phòng Marketing",
            hinhAnh: "https://cinestar.com.vn/pictures/tuyen%20dung/tpmar.gif",
        },
    ],
    arrSell: [
        {
            tenPhim: "BHD 59K/VÉ CẢ TUẦN !!!",
            moTa: "Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.",
            hinhAnh: "https://s3img.vcdn.vn/123phim/2021/04/bhd-59k-ve-ca-tuan-16190002421777.jpg",
        },
        {
            tenPhim: "TIX 1K/VÉ NGẠI CHI GIÁ VÉ",
            moTa: "Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga",
            hinhAnh: "https://s3img.vcdn.vn/123phim/2020/11/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg",
        },
        {
            tenPhim: "ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX ",
            moTa: "ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.",
            hinhAnh: "https://s3img.vcdn.vn/123phim/2020/09/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png",
        },
        {
            tenPhim: "BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!",
            moTa: "Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.",
            hinhAnh: "https://s3img.vcdn.vn/123phim/2020/07/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg",
        },
    ]
}

const QuanLyPhimReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAY_DANH_SACH_PHIM: {
            state.danhSachMovie = action.payload
            state.arrDefault = state.danhSachMovie
            return { ...state }
        }
        case LAY_DANH_SACH_PHIM_DANG_CHIEU: {
            state.dangChieu = !state.dangChieu

            state.danhSachMovie = state.arrDefault.filter(movie => movie.dangChieu === state.dangChieu)
            return { ...state }
        }
        case LAY_DANH_SACH_PHIM_SAP_CHIEU: {
            state.sapChieu = !state.sapChieu

            state.danhSachMovie = state.arrDefault.filter(movie => movie.sapChieu === state.sapChieu)
            return { ...state }
        }
        case LAY_THONG_TIN_PHIM: {
            state.thongTinPhim = action.payload
            return { ...state }
        }
        default:
            return { ...state }
    }
}

export default QuanLyPhimReducer