const Button = ({ onClick, btnText }) => {
    return (
        <button
            className='w-full h-10 bg-slate-800 text-white flex items-center justify-center mt-4 rounded-md border border-slate-800'
            onClick={onClick}
        >
            {btnText}
        </button>
    )
};

export default Button;
