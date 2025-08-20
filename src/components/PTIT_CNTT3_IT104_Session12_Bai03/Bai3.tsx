
export default function Bai3() {
    const name: string = "Nguyen Van A";
    const sex: string = "Nam";
    const dateOfBirth: string = "06/03/2024";
    const email: string = "nva@gmail.com";
    const address: string = "Thanh Xuân, Hà Nội";
  return (
    <div>
        <h3>Thông tin cá nhân</h3>
        <ul>
            <li>Họ và tên: {name}</li>
            <li>Giới tính: {sex}</li>
            <li>Ngày sinh: {dateOfBirth}</li>
            <li>Email: {email}</li>
            <li>Địa chỉ: {address}</li>
        </ul>
    </div>
  )
}
