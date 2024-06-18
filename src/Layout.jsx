import Header from "./components/Header";

const Layout = ({ children }) => {
    return (
        <div className="font-thin">
            <Header />
            <div className="container p-5">
                {children}
            </div>
        </div>
    )
}

export default Layout;