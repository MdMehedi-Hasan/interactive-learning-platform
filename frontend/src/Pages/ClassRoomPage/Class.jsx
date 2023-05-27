import Navbar from "../../components/Common/Navbar";
import '../../assets/css/class.css'
import { useEffect, useState } from "react";
import axios from 'axios'

const Class = () => {
    const [videos, setVideos] = useState([])

    const playVideo = (id) => {
        console.log(id)
    }
    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then(function (response) {
                // handle success
                // console.log(response.data);
                setVideos(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    return (
        <section>
            <Navbar />
            <div className="flex justify-around">
                <aside>
                    <iframe width="560" height="315" src={videos[0]?.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </aside>
                <main>
                    {videos.map(video=> <div key={video._id} className="card card-side bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title cursor-pointer" onClick={()=>playVideo(video._id)}>{video?.title}</h2>
                        </div>
                    </div>)}
                </main>
            </div>
        </section>
    );
};

export default Class;