import Navbar from "../../components/Common/Navbar";
import '../../assets/css/class.css'
import { useEffect, useState } from "react";
import axios from 'axios'
import icon from '../../assets/images/book.png'

const Class = () => {
    const [lists, setLists] = useState([])
    const [video,setVideo] = useState({})

    const playVideo = (id) => {
        console.log(id)
        axios.get(`http://localhost:3000/${id}`)
            .then(function (response) {
                setVideo(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then(function (response) {
                setLists(response.data)
                setVideo(response.data[0])
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    return (
        <section>
            <Navbar />
            <div className="flex justify-around">
                <aside>
                    <iframe width="560" height="315" src={video?.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </aside>
                <main>
                    {lists.map(list => <div key={list._id} className="card card-side bg-base-100 shadow-xl">
                        <figure><img src={icon} alt="Movie" className="w-12" /></figure>
                        <div className="card-body">
                            <h2 className="card-title cursor-pointer" onClick={() => playVideo(list._id)}>{list?.title}</h2>
                        </div>
                    </div>)}
                </main>
            </div>
        </section>
    );
};

export default Class;