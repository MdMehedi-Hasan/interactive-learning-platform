import Navbar from "../../components/Common/Navbar";
import '../../assets/css/class.css'
import { useEffect, useState } from "react";
import axios from 'axios'
import bookIcon from '../../assets/images/book.png'
import bookmarkIcon from '../../assets/images/bookmark.png'
import penIcon from '../../assets/images/pen.png'
import Footer from "../../components/Common/Footer";

const Class = () => {
    const [lists, setLists] = useState([])
    const [video, setVideo] = useState({})

    const playVideo = (id) => {
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
            <div className="container">
                <h1 className="my-5 ml-10">{video?.title}</h1>
                <div className=" mx-auto flex justify-around gap-20 px-10 mb-20">
                    <aside className="w-7/12">
                        <iframe width="100%" height="315" src={video?.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <div className="collapse rounded-b-lg">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium bg-blue-900 flex justify-between">
                                <div className="flex items-center">
                                    <img src={penIcon} alt="" className="w-5" />
                                    <span className="text-white">Take Notes</span>
                                </div>
                                <div className="flex items-center">
                                    <img src={bookmarkIcon} alt="" className="w-5" />
                                    <span className="text-white">Bookmark</span>
                                </div>
                            </div>
                            <div className="collapse-content bg-blue-900">
                                <p>hello</p>
                            </div>
                        </div>
                    </aside>
                    <main className="w-5/12">
                        <div className="border rounded-lg py-5 flex justify-between px-2 mb-5">
                            <div className="flex items-center gap-5">
                                <span>Content Watched</span>
                                <progress className="progress progress-primary w-40" value="30" max="100"></progress>
                                <span>30%</span>
                            </div>
                            <span className="pr-3">(1/7)</span>
                        </div>
                        <div className="h-[500px] overflow-auto border rounded-lg flex flex-col gap-5">
                            {lists.map(list =>
                                <div key={list._id} className="card card-side bg-base-100 border rounded-lg">
                                    <figure><img src={bookIcon} alt="Movie" className="w-6 ml-10" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title cursor-pointer" onClick={() => playVideo(list._id)}>{list?.title}</h2>
                                    </div>
                                </div>)}
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Class;