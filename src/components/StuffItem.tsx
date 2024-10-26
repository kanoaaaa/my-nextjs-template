import { Stuff } from '@prisma/client';
import Link from 'next/link';
import { deleteStuff } from '@/lib/dbActions';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const StuffItem = ({ name, quantity, condition, id }: Stuff) => {
  // Function to handle the removal of an item
  const removeItem = async () => {
    console.log(`removeItem id: ${id}`);
    await deleteStuff(id); // Call deleteStuff to remove the item
    window.location.reload(); // Refresh to show updated list
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
