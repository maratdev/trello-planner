import type { PropsWithChildren } from 'react'

import DashboardLayout from '@/components/dashboard-layout/DashboardLayout'

export default function Layout({ children }: Readonly<PropsWithChildren>) {
	return <DashboardLayout>{children}</DashboardLayout>
}
