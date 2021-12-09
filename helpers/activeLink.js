import { withRouter } from "next/router";

const ActiveLink = ({ className, children, router, href, query, locale = 'fr' }) => {
    const handleClick = (e) => {
        e.preventDefault();
        router.push(!query ? href : { pathname: href, query: query, locale: locale });
    };

    return (
        <a className={className} href={href} onClick={handleClick}>
            {children}
        </a>
    )
}

export default withRouter(ActiveLink);