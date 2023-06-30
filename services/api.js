export const getServerSideProps = async(endpoint) =>{
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + endpoint,{
        method:"GET",
        cache: 'no-store',
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_USER_TOKEN}`
        }
    })
    const post = res.json();
    return post;
};