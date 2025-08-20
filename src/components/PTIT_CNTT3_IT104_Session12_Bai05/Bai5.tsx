
export default function Bai5() {
    interface User {
      firstName: string;
      lastName: string;
    }

    const user: User = {
      firstName: 'Nguyễn Văn',
      lastName: 'Nam',
    };

    function formatName(user: User): string {
      return `${user.firstName} ${user.lastName}`;
    }

  return (
    <div>
        <p>Họ và tên: {formatName(user)}</p>
    </div>
  )
}
