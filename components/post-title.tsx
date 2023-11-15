export default function PostTitle({ children }) {
    return (
        <h1
            className="text-xl md:text-xxl lg:text-xxl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
            dangerouslySetInnerHTML={{ __html: children }}
        />
    )
}
