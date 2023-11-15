export default function PostTitle({ children }) {
    return (
        <h1
            className="text-xl md:text-xxl lg:text-xxl font-bold mb-12 text-center md:text-left"
            dangerouslySetInnerHTML={{ __html: children }}
        />
    )
}
