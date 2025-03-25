
import Link from 'next/link'

const AdminDashboardNavigation = () => {
    return (
        <div className='w-max p-2'>
            <Link
                href={'/admin-dashboard'}
            >Dashboard</Link>
            <Link
                href={'/new-product'}
            >New Product</Link>
            <Link
                href={'/products'}
            >Products</Link>
            <Link
                href={'/contact'}
            >Contact</Link>
            <Link
                href={'/orders'}
            >Orders</Link>
            <Link
                href={'/newsletter'}
            >NewsLetter</Link>
            <Link
                href={'/customizer'}
            >Customizer</Link>
            <button>Logout</button>
        </div>
    )
}

export default AdminDashboardNavigation