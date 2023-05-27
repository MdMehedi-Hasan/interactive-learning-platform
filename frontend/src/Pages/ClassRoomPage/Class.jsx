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
    const nextPrevious = (id,type) => {
        console.log(id, type);
        if (type == 'next') {
            const videoId = ++id
            playVideo(videoId)
            console.log(videoId);
        }
        else {
            const videoId = --id
            playVideo(videoId)
            console.log(videoId);
        }
    }
    const notes = () => {
        const collapseBox = document.getElementById('collapseBox')
        const checkbox = document.getElementById('collapseCheckBox')
        if (checkbox.checked) {
            collapseBox.classList.remove('block')
            collapseBox.classList.add('hidden')
            checkbox.checked = false
        }
        else {
            collapseBox.classList.remove('hidden')
            collapseBox.classList.add('block')
            checkbox.checked = true
        }
    }
    const bookmark = (id) => {
        if (!video.bookmarked) {
            axios.put(`http://localhost:3000/bookmark/${id}`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
        }
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
            <div className="container mx-auto">
                <h1 className="my-5 ml-10">{video?.title}</h1>
                <div className=" mx-auto flex justify-around gap-20 px-10 mb-20">
                    <aside className="w-7/12">
                        <iframe width="100%" height="315" src={video?.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <div className="rounded-b-lg bg-blue-900 p-3 py-3">
                            <div className="text-xl font-medium flex justify-between">
                                <div className="flex items-center cursor-pointer" onClick={() => notes()}>
                                    <img src={penIcon} alt="" className="w-5" />
                                    <span className="text-white">Take Notes</span>
                                </div>
                                <div className={`flex items-center ${video.bookmarked == true ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} onClick={() => bookmark(video?._id)}>
                                    <img src={bookmarkIcon} alt="" className="w-5" />
                                    <span className="text-white">{video.bookmarked == true ? 'Bookmarked' : 'Bookmark'}</span>
                                </div>
                            </div>
                        </div>
                        <div className="collapse hidden" id="collapseBox">
                            <input type="checkbox" id="collapseCheckBox"/>
                            <div className="collapse-content">
                                <p>Notes will be written here</p>
                            </div>
                        </div>
                        <div className="flex justify-end gap-6 mt-5">
                            <button className={`btn btn-error btn-outline ${lists[0]?._id === video?._id ? 'hidden' : 'block'}`} onClick={()=>nextPrevious(video._id,'previous')}>Previous</button>
                            <button className={`btn btn-accent text-white ${lists?.length == video?._id ? 'hidden' : 'block'}`} onClick={() => nextPrevious(video._id,'next')}>Next</button>
                        </div>
                    </aside>
                    <main className="w-5/12">
                        <div className="border rounded-lg py-5 flex justify-between px-2 mb-5">
                            <div className="flex items-center gap-5">
                                <span>Content Watched</span>
                                <progress className="progress progress-accent w-40" value="30" max="100"></progress>
                                <span>30%</span>
                            </div>
                            <span className="pr-3">(1/{lists.length})</span>
                        </div>
                        <div className="h-[500px] overflow-auto border rounded-lg flex flex-col gap-5">
                            {lists.map(list =>
                                <div key={list._id} className="card card-side bg-base-100 border rounded-lg cursor-pointer" onClick={() => playVideo(list._id)}>
                                    <figure><img src={bookIcon} alt="Movie" className="w-6 ml-10" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{list?.title}</h2>
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