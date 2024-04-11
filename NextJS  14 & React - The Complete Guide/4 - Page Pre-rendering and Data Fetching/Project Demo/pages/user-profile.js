// function UserProfilePage(props) {

//     return <h1>{props.username}</h1>

// }

// export default UserProfilePage;

// export async function getServerSideProps(context) {

//     const { params, req, res } = context;

//     return {
//         props: {
//             username: 'Alexander'
//         }
//     }
// }

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { repo } }
}

export default function Page({ repo }) {

    return (
        <main>
            <p>Dummy text</p>
        </main>
    )
}