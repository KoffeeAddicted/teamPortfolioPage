import Header from "./Header";

const PublicLayout = (props : any ) => {

    const { children } = props
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    )
}

export default PublicLayout;