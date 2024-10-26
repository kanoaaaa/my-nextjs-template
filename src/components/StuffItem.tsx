import { Stuff } from '@prisma/client';
import Link from 'next/link';
import { deleteStuff } from '@/lib/dbActions';
const StuffItem = ({ name, quantity, condition, id }: Stuff) => {
  const removeItem = async () => {
    console.log(`removeItem id: ${id}`);
    await deleteStuff(id); 
    window.location.reload(); 
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{condition}</td>
      <td>
        <Link href={`/edit/${id}`}>Edit</Link>
      </td>
      <td>
        <button onClick={removeItem} style={{ backgroundColor: 'red', border: 'none', cursor: 'pointer' }}>
          🗑️
        </button>
      </td>
    </tr>
  );
};

export default StuffItem;
