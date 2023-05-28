const Footer = () => {
    return (
        <div className="bg-blue-900">
            <footer className="container mx-auto footer p-10 px-6 text-white">
                <div>
                    <img src="https://interactivecares-courses.com/wp-content/uploads/2021/03/IC-logo-Telda.png" alt="" className="w-36"/>
                    
                </div>
                <div>
                    <span className="footer-title text-white opacity-100">Services</span>
                    <a className="link link-hover">UI/UX Design</a>
                    <a className="link link-hover">Web Development</a>
                    <a className="link link-hover">API Integration</a>
                    <a className="link link-hover">SEO</a>
                </div>
                <div>
                    <span className="footer-title text-white opacity-100">Courses</span>
                    <a className="link link-hover">General</a>
                    <a className="link link-hover">Exam Preparation</a>
                    <a className="link link-hover">Freelancing</a>
                    <a className="link link-hover">Foreign Study</a>
                </div>
                <div>
                    <span className="footer-title text-white opacity-100">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;