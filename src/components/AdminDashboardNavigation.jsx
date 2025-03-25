"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const AdminDashboardNavigation = () => {

    const pathName = usePathname()
    console.log(pathName)

    return (
        <div className='flex flex-col justify-normal pl-2 py-2 gap-1'>
            <Link
                href={'/pages/admin-dashboard'}
                className={` ${pathName === '/pages/admin-dashboard' ? ' border-b  border-blue-500' : ''} `}
            >Dashboard</Link>
            <Link
                href={'/pages/admin-dashboard/newproduct'}
                className={` ${pathName === '/pages/admin-dashboard/newproduct' ? ' border-b  border-blue-500' : ''} `}
            >New Product</Link>
            <Link
                //  className = `${(isActive)=> isActive ? 'agr active h tu additionally ye classes b add kro' :'common styling for all links'}'
                href={'/pages/admin-dashboard/products'}
                className={` ${pathName === '/pages/admin-dashboard/products' ? ' border-b  border-blue-500' : ''} `}

            >Products</Link>
            <Link
                href={'/pages/admin-dashboard/contact'}
                className={` ${pathName === '/pages/admin-dashboard/contact' ? ' border-b  border-blue-500' : ''} `}
                
            >Contact</Link>
            <Link
                href={'/pages/admin-dashboard/orders'}
                className={` ${pathName === '/pages/admin-dashboard/orders' ? ' border-b  border-blue-500' : ''} `}

            >Orders</Link>
            <Link
                href={'/pages/admin-dashboard/newsletter'}
                className={` ${pathName === '/pages/admin-dashboard/newsletter' ? ' border-b  border-blue-500' : ''} `}

            >NewsLetter</Link>
            <Link
                href={'/pages/admin-dashboard/customizer'}
                className={` ${pathName === '/pages/admin-dashboard/customizer' ? ' border-b  border-blue-500' : ''} `}

            >Customizer</Link>
            <button className='text-left'>Logout</button>
        </div>
    )
}

export default AdminDashboardNavigation
