import './App.css';

import React, {useState} from 'react'

const data = [
    {
        id: 1,
        name: 'B.J. Habibie',
        desc: 'Inventor, 3rd President of RI',
        img: 'https://infobanknews.com/wp-content/uploads/2019/09/BJ-Habibie.jpg',
    },
    {
        id: 2,
        name: 'Tan Malaka',
        desc: 'Activist, National Hero of RI',
        img: 'https://imgsrv2.voi.id/K4TUFwhpUPnZIKzk4QL_xC001dRmFkKr6q4oyN-SwOc/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy82NjQ2LzIwMjAwNjAyMTIwMy1tb2JpbGUuY3JvcHBlZF8xNTkxMDk4NDIwLnBuZw.jpg',
    },
    {
        id: 3,
        name: 'Pattimura',
        desc: 'Rebel, National Hero of RI',
        img: 'https://negarabersejarah.files.wordpress.com/2017/11/1542990_orig.jpg?w=445',
    },
    {
        id: 4,
        name: 'Soekarno',
        desc: 'Provocateur, 1st President of RI',
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Presiden_Sukarno.jpg',
    },
    {
        id: 5,
        name: 'Maulana Adam Sahid',
        desc: 'NEET, not achieved anything great yet',
        img: 'https://media-exp1.licdn.com/dms/image/C5603AQE2-ox_80I8Yg/profile-displayphoto-shrink_200_200/0/1619930750668?e=1640822400&v=beta&t=MdGPyWqPZqyKQCE5eT3wDElmD-51etl1SSOiH51RKjA',
    },
    {
        id: 6,
        name: 'Joko Widodo',
        desc: 'Javanese, 7th President of RI',
        img: 'https://awsimages.detik.net.id/community/media/visual/2021/05/27/presiden-jokowi-1_169.jpeg?w=700&q=90',
    },
    {
        id: 7,
        name: 'Fadli Zon',
        desc: 'Minangese, Politician',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Fadli_Zon_Official.jpg/220px-Fadli_Zon_Official.jpg',
    },
    {
        id: 8,
        name: 'Soeharto',
        desc: 'Dictator, 2nd President of RI',
        img: 'http://1.bp.blogspot.com/-4OpQ1lH3vCk/T8SL8mOGHII/AAAAAAAAA2Y/RfWPlu4BIqI/s400/SOEHARTO.jpg',
    }
]

const BirthdayList = (props) => {

    const [data, setData] = useState(props.data)

    return <section className={'birthday-list'}>
        <p>{data.length !== 0 ? data.length : 'No'} birthday{data.length !== 1 ? 's' : ''} in this month</p>
        {data.map((person) => <Birthday key={person.id} person={person} data={data} setData={setData}/> )}
        <button onClick={()=>{setData([])}}>Clear Data</button>
    </section>
}

const Birthday = ({person:{id, name, desc, img}, data, setData}) => {

    const removeItem = (id) => {
        setData(data.filter((person) => person.id !== id));
    }

    return (<div className={'birthday-item'}>
        <img src={img}/>
        <div>
            <h4>{name}</h4>
            <p>{desc}</p>
        </div>
        <button onClick={()=>{removeItem(id)}}>remove</button>
    </div>)

}

function App() {
    return (
        <>
            <BirthdayList data={data}/>
        </>
    );
}

export default App;
