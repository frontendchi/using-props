import classNames from "classnames";

function Button ({text, variant = 'default'}) {

    return (
        <button className={classNames({
                "text-3xl font-bold text-white p-4 my-4 rounded-2xl hover:bg-gray-700 ": true,
                "bg-gray-600" : variant === 'default',
                "bg-red-700" : variant === 'warning',
                "bg-gray-800" : variant === 'danger',
                "bg-yellow-400" : variant === 'success'
        })}>
            {text}
        </button>
    );
    
}

export default Button; 