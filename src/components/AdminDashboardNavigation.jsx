
import Link from 'next/link'

const AdminDashboardNavigation = () => {
    return (
        <div className='w-max p-2 border-red-600 flex flex-col'>
            <Link
                href={'/pages/admin-dashboard'}
            >Dashboard</Link>
            <Link
                href={'/pages/admin-dashboard/newproduct'}
            >New Product</Link>
            <Link
                href={'/pages/admin-dashboard/products'}
            >Products</Link>
            <Link
                href={'/pages/admin-dashboard/contact'}
            >Contact</Link>
            <Link
                href={'/pages/admin-dashboard/orders'}
            >Orders</Link>
            <Link
                href={'/pages/admin-dashboard/newsletter'}
            >NewsLetter</Link>
            <Link
                href={'/pages/admin-dashboard/customizer'}
            >Customizer</Link>
            <button>Logout</button>
        </div>
    )
}

export default AdminDashboardNavigation
