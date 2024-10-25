type TVN = { id:number; ten:string; hinh:string; price:number;start:string;duration:string;}
type TNB = { id:number; ten:string; hinh:string; price:number;start:string;duration:string;}
const TourNB:TNB[] = [
    {id:1, ten:"TOUR MÙA THU NIKKO", "hinh": "images/anh1.jpg", price:27550000,start:"27/03/2023",duration:"2 Lựa chọn (Liên hệ để biết thêm thông tin) : TOUR TRONG NGÀY và TOUR 2 NGÀY 1 ĐÊM"},
    {id:2, ten:"TOUR KAMIKOCHI HAKUBA", "hinh": "images/anh2.jpg", price:11150000,start:"12/10/2023",duration:"2 Lựa chọn (Liên hệ để biết thêm thông tin) : TOUR TRONG NGÀY và TOUR 2 NGÀY 1 ĐÊM"},
    {id:3, ten:"THIÊN ĐƯỜNG CỎ KOCHIA", "hinh": "images/anh3.jpg", price:12500000,start:"02/02/2023",duration:"THÁNG 10 : NGÀY 9・15・18・21・22・25・28"},
    {id:4, ten:"NGẮM LÁ ĐỎ PHÚ SĨ - HAKONE", "hinh": "images/anh4.jpg", price:32000000,start:"25/05/2023",duration:"2 Lựa chọn (Liên hệ để biết thêm thông tin) : TOUR TRONG NGÀY và TOUR 2 NGÀY 1 ĐÊM"},
    {id:5, ten:"KHÁM PHÁ DÃY TATEYAMA - ĐẬP KUROBE", "hinh": "images/anh5.jpg", price:2350000,start:"21/03/2023",duration:"2 Ngày 1 Đêm "},
    {id:6, ten:"KHÁM PHÁ KAMIKOCHI - HAKUBA", "hinh": "images/anh21.jpg", price:17550000,start:"22/03/2023",duration:"2 Ngày 1 Đêm "},
 ];
 const TourVN:TVN[] = [
    {id:1, ten:"OSAKA- KYOTO – NAGOYA – YAMANASHI- FUJI – TOKYO- NARITA", "hinh": "images/anh7.jpg", price:25000000,start:"21/02/2023",duration:"6 ngày 5 đêm"},
    {id:2, ten:"TOKYO-IDABAKI-YAMANASHI-FUJI", "hinh": "images/anh8.png", price:23000000,start:"12/10/2023",duration:"5 ngày 4 đêm"},
    {id:3, ten:"Du Lịch Tokyo-Hakone-Fuji-Odaiba-5N4Đ", "hinh": "images/anh9.jpg", price:12500000,start:"02/02/2023",duration:"5 ngày 4 đêm"},
    {id:4, ten:"TOUR HAKONE HÈ 2023", "hinh": "images/anh20.png", price:1500000,start:"25/05/2023",duration:"1 Ngày"},
    {id:5, ten:"TOUR HÈ BIỂN 2023", "hinh": "images/anh10.jpg", price:2350000,start:"21/03/2023",duration:"2 Ngày 1 Đêm "},
    {id:6, ten:"TOUR HÁI QUẢ THEO MÙA", "hinh": "images/anh11.jpg", price:17550000,start:"22/03/2023",duration:"2 Ngày 1 Đêm "},
 ];

export { TVN, TNB}
export { TourVN, TourNB}
  