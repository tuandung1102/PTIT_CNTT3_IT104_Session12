import './Bai8.css';

export default function Bai8() {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Địa chỉ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Malcolm Lockyer</td>
            <td>21/03/1961</td>
            <td>Nam</td>
            <td>New york</td>
            <td>
              <button className="btn edit">Sửa</button>
              <button className="btn delete">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Maria</td>
            <td>11/02/1990</td>
            <td>Nữ</td>
            <td>London</td>
            <td>
              <button className="btn edit">Sửa</button>
              <button className="btn delete">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
