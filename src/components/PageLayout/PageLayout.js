import './PageLayout.scss';

function PageLayout({ children }) {
    return(
        <main className='page-layout'>
            <div className='page-layout__container'>
                <section className='page-layout__card'>{children}</section>
            </div>
        </main>
    )
}

export default PageLayout