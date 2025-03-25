import React from 'react';

const Contact = () => {
  return (
    <div className="p-4">
      <div className="overflow-hidden rounded-md shadow-lg">
        <table className="min-w-full border border-gray-300 overflow-hidden rounded-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal rounded-t-md">
              <th className="py-2 px-6 text-left border-b">#</th>
              <th className="py-2 px-6 text-left border-b">Name</th>
              <th className="py-2 px-6 text-left border-b">Email</th>
              <th className="py-2 px-6 text-left border-b">Message</th>
            </tr>
          </thead>
          <tbody className=" text-sm">
            <tr className=" border-b last:rounded-b-md">
              <td className="py-3 px-6 border-b">1</td>
              <td className="py-3 px-6 border-b">Alpha</td>
              <td className="py-3 px-6 border-b">alpha@24.com</td>
              <td className="py-3 px-6 border-b">Koi message ni</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
