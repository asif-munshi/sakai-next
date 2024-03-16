import type { Metadata } from 'next';
import Layout from '@/components/layout/layout';

export const metadata: Metadata = {
    title: 'Sakai Next',
    description: 'The ultimate collection of design-agnostic, flexible and accessible React UI Components.'
};

export default function DashboardLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <Layout>{children}</Layout>;
}
