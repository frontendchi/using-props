
function Button (props) {

    return (
        <button className="text-3xl font-bold bg-gray-600 text-white p-4 my-4 rounded-2xl hover:bg-gray-700 ">
            {props.text}
        </button>
    );
    
}

export default Button; 