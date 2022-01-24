import type { NextPage } from 'next'

type PageNotFoundProps = {

}

const  PageNotFound: NextPage<PageNotFoundProps> = ({}) => {
    return (
        <div className={`flex justify-center items-center h-[calc(100vh-7.5rem)]`}>
            <h1 className={`text-white font-extrabold text-3xl font-round`}>Wrong page, mate!🙂 </h1>
        </div>
    );
}

export default PageNotFound;