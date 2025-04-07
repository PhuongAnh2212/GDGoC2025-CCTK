export default function DataTable() {
  // Sample data
  const rows = Array(10).fill({
    firstName: "Shipaev",
    lastName: "Nikita",
    address: "Las Vegas, 133 street",
    phone: "+2 928 8127",
    email: "example@gmail.com",
  })

  return (
    <div className="overflow-x-auto mb-6">
      <table className="w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">First Name</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Last Name</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Address</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Phone</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Email</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-3 text-sm text-gray-700">{row.firstName}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{row.lastName}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{row.address}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{row.phone}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

