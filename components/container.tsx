export default function Container({ children }) {
    return (
        <div className="container max-w-screen-xl mx-auto px-5 md:px-0">
            {children}
        </div>
    )
}
