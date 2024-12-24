export default function Input(props){

    return (
        <>
                <label  className="block mb-2 text-sm font-medium">{props.lable}</label>
                <input name={props.name} type="text" onChange={props.handleChange } className="bg-gray-50 border rounded-lg block w-full p-2.5" />
        </>
    )
}