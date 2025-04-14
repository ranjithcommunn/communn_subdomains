import { headers } from 'next/headers';

const mockCommunities = {
    customer1: {
        name: 'Yoga Bliss',
        color: '#3B9B7F',
        city: 'Bangalore',
        logo: 'https://via.placeholder.com/100x100.png?text=Yoga+Logo',
    },
    customer2: {
        name: 'Wellness Studio',
        color: '#8B5CF6',
        city: 'Mumbai',
        logo: 'https://via.placeholder.com/100x100.png?text=Wellness',
    },
    customer3: {
        name: 'No Studio',
        color: '#8B5CF6',
        city: 'Chennai',
        logo: 'https://via.placeholder.com/100x100.png?text=Wellness',
    },
};

export default async function Page() {
    const headersList = headers();
    const host = (await headersList).get('host') || '';
    const subdomain = host.split('.')[0];

    const data = mockCommunities[subdomain as keyof typeof mockCommunities] || mockCommunities.customer3;

    return (
        <div style={{ padding: '40px', fontFamily: 'Arial', textAlign: 'center' }}>
            <img src={data?.logo} alt="logo" />
            <h1 style={{ color: data.color }}>Welcome to {data?.name}</h1>
            <p>📍 {data.city}</p>
            <p>This is preview for {subdomain}.yourdomain.com</p>
        </div>
    );
}
