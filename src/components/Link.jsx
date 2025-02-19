

const Link = ({href, children}) => {
    return (
        <a href={href} className="doc-link">{children}</a>
    )
}

export default Link;