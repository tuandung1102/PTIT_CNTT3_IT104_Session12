

export default function bai2() {
    const num1=10;
    const num2=10;
    const sum = num1+num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num1 / num2;
  return (
    <div>
        <h3>Danh sach ket qua</h3>
        <ul>
            <li>{num1} + {num2} = {sum} </li>
            <li>{num1} - {num2} = {subtraction}</li>
            <li>{num1} * {num2} = {multiplication}</li>
            <li>{num1} / {num2} = {division}</li>
        </ul>
    </div>
  )
}
