const Container = ({classnames, WrappedContent}) => {
    return (<>
        <div className={classnames}>
            <WrappedContent />
        </div>
    
    </>)
}

export default Container